
/* ============================================================
   劳动保障监察协理员考试题库 - 应用逻辑
   ============================================================ */
(function() {
  'use strict';

  // 类型中文映射
  const TYPE_MAP = {
    single: '单选题',
    multiple: '多选题',
    judge: '判断题',
    fill: '填空题',
    short: '简答题'
  };

  // 分类列表
  const CATEGORIES = [
    '劳动关系基础', '社会保险', '劳动基准',
    '特殊保护', '就业促进', '劳动安全', '争议处理与监察'
  ];

  // 题型列表
  const TYPES = ['single', 'multiple', 'judge', 'fill', 'short'];

  // 状态
  let state = {
    page: 'home',
    examMode: false,
    currentQuestions: [],
    currentIndex: 0,
    userAnswers: {},
    examTimer: null,
    examSeconds: 3600, // 60分钟
    wrongBook: [], // 错题ID
    typeFilter: { single: true, multiple: true, judge: true, fill: true, short: true },
    categoryFilter: ''
  };

  // 加载本地存储
  function loadStorage() {
    try {
      const wb = localStorage.getItem('yjld_wrongbook');
      if (wb) state.wrongBook = JSON.parse(wb);
    } catch(e) {}
  }

  function saveStorage() {
    try {
      localStorage.setItem('yjld_wrongbook', JSON.stringify(state.wrongBook));
    } catch(e) {}
  }

  // DOM引用
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // ============ 页面渲染 ============
  function showPage(name) {
    state.page = name;
    $$('.page').forEach(p => p.classList.add('hidden'));
    const target = $('#page-' + name);
    if (target) target.classList.remove('hidden');

    $$('.nav-btn').forEach(b => b.classList.remove('active'));
    const nb = $('#nav-' + name);
    if (nb) nb.classList.add('active');

    $$('.bottom-nav .nav-item').forEach(b => b.classList.remove('active'));
    const mb = $('#bn-' + name);
    if (mb) mb.classList.add('active');

    window.scrollTo(0, 0);
  }

  // ============ 首页 ============
  function renderHome() {
    showPage('home');
    const total = ALL_QUESTIONS.length;
    const catStats = {};
    const typeStats = {};
    CATEGORIES.forEach(c => { catStats[c] = 0; });
    TYPES.forEach(t => { typeStats[t] = 0; });

    ALL_QUESTIONS.forEach(q => {
      if (catStats[q.category] !== undefined) catStats[q.category]++;
      if (typeStats[q.type] !== undefined) typeStats[q.type]++;
    });

    $('#total-count').textContent = total;
    $('#total-types').textContent = '5';
    $('#total-cats').textContent = '7';
    $('#wrong-count').textContent = state.wrongBook.length;

    // 分类卡片
    const catGrid = $('#home-categories');
    catGrid.innerHTML = CATEGORIES.map(c =>
      `<div class="cat-card" data-cat="${c}">
        <h3>${c}</h3>
        <div class="info">${catStats[c]} 道题</div>
      </div>`
    ).join('');

    catGrid.querySelectorAll('.cat-card').forEach(card => {
      card.addEventListener('click', () => {
        state.categoryFilter = card.dataset.cat;
        state.page = 'category';
        renderCategory();
      });
    });
  }

  // ============ 分类练习 ============
  function renderCategory() {
    showPage('category');
    $('#cat-title').textContent = state.categoryFilter || '全部分类';

    // 题型筛选按钮
    const tagsWrap = $('#type-tags');
    tagsWrap.innerHTML = TYPES.map(t =>
      `<span class="type-tag tag-${t} ${state.typeFilter[t]?'active':''}" data-type="${t}">${TYPE_MAP[t]}</span>`
    ).join('');
    tagsWrap.querySelectorAll('.type-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const t = tag.dataset.type;
        state.typeFilter[t] = !state.typeFilter[t];
        tag.classList.toggle('active', state.typeFilter[t]);
        renderQuestionList();
      });
    });

    renderQuestionList();
  }

  function renderQuestionList() {
    let qs = ALL_QUESTIONS;
    if (state.categoryFilter) {
      qs = qs.filter(q => q.category === state.categoryFilter);
    }
    qs = qs.filter(q => state.typeFilter[q.type]);

    const list = $('#question-list');
    if (qs.length === 0) {
      list.innerHTML = '<div class="card" style="text-align:center;color:var(--text-light);">暂无符合条件的题目，请调整筛选条件</div>';
      $('#start-practice').classList.add('hidden');
      return;
    }

    list.innerHTML = qs.map((q, i) =>
      `<div class="question-card">
        <div class="q-header">
          <span class="q-num">${i+1}. <span class="q-type-badge badge-${q.type}">${TYPE_MAP[q.type]}</span></span>
          <span style="font-size:0.8rem;color:var(--text-light);">${q.category} | ${q.law}</span>
        </div>
        <div class="q-title">${q.question}</div>
        ${q.options.length > 0 ? `<div class="options">${q.options.map((o,oi) =>
          `<div class="option-btn"><span class="prefix">${String.fromCharCode(65+oi)}.</span>${o.replace(/^[A-D]\.\s*/, '')}</div>`
        ).join('')}</div>` : ''}
      </div>`
    ).join('');

    $('#start-practice').classList.remove('hidden');
    $('#start-practice').onclick = () => {
      startPractice(qs);
    };
  }

  // ============ 练习模式 ============
  function startPractice(qs) {
    state.examMode = false;
    state.currentQuestions = qs;
    state.currentIndex = 0;
    state.userAnswers = {};
    clearInterval(state.examTimer);
    renderExamPage();
  }

  // ============ 模拟考试 ============
  function startExam() {
    // 随机抽取: 单选25 + 多选10 + 判断8 + 填空4 + 简答3 = 50
    const pick = (type, n) => {
      const pool = ALL_QUESTIONS.filter(q => q.type === type);
      const shuffled = pool.sort(() => Math.random() - 0.5);
      return shuffled.slice(0, Math.min(n, pool.length));
    };

    let examQs = [
      ...pick('single', 25),
      ...pick('multiple', 10),
      ...pick('judge', 8),
      ...pick('fill', 4),
      ...pick('short', 3)
    ];
    // 随机打乱
    examQs = examQs.sort(() => Math.random() - 0.5);

    state.examMode = true;
    state.currentQuestions = examQs;
    state.currentIndex = 0;
    state.userAnswers = {};
    state.examSeconds = 3600;
    clearInterval(state.examTimer);

    showPage('exam');
    $('#exam-header').classList.remove('hidden');
    $('#exam-timer').textContent = formatTime(state.examSeconds);
    $('#exam-timer').classList.remove('warning', 'danger');
    renderExamPage();

    state.examTimer = setInterval(() => {
      state.examSeconds--;
      $('#exam-timer').textContent = formatTime(state.examSeconds);
      if (state.examSeconds < 600) $('#exam-timer').classList.add('warning');
      if (state.examSeconds < 300) $('#exam-timer').classList.add('danger');
      if (state.examSeconds <= 0) {
        clearInterval(state.examTimer);
        submitExam();
      }
    }, 1000);
  }

  function formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  }

  // ============ 答题页 ============
  function renderExamPage() {
    showPage('exam');
    if (!state.examMode) {
      $('#exam-header').classList.add('hidden');
    } else {
      $('#exam-header').classList.remove('hidden');
    }

    const qs = state.currentQuestions;
    if (qs.length === 0) return;

    const q = qs[state.currentIndex];
    const total = qs.length;

    // 进度
    $('#exam-progress-text').textContent = `${state.currentIndex + 1}/${total}`;
    $('#exam-progress-bar').style.width = ((state.currentIndex + 1) / total * 100) + '%';

    // 题目
    $('#q-number').textContent = `第 ${state.currentIndex + 1} 题`;
    $('#q-type-badge').textContent = TYPE_MAP[q.type];
    $('#q-type-badge').className = 'q-type-badge badge-' + q.type;
    $('#q-title').textContent = q.question;
    $('#q-category-info').textContent = `${q.category} | ${q.law} | ${q.knowledgeArea}`;

    const optionsWrap = $('#q-options');
    const inputWrap = $('#q-input-wrap');
    const explanationWrap = $('#q-explanation');

    explanationWrap.classList.remove('show');

    // 已有答案
    const key = state.currentIndex;
    const existingAnswer = state.userAnswers[key];

    if (q.type === 'fill' || q.type === 'short') {
      // 填空题/简答题
      optionsWrap.innerHTML = '';
      optionsWrap.classList.add('hidden');
      inputWrap.classList.remove('hidden');
      const ta = $('#answer-input');
      ta.value = existingAnswer || '';
      ta.className = 'text-input';
      ta.disabled = false;
      ta.placeholder = q.type === 'fill' ? '请输入答案...' : '请输入你的回答...';
    } else {
      // 选择题/判断题
      inputWrap.classList.add('hidden');
      optionsWrap.classList.remove('hidden');
      let opts = q.options;
      if (q.type === 'judge') opts = ['正确', '错误'];
      const prefixLabels = q.type === 'judge' ? ['A.', 'B.'] : ['A.', 'B.', 'C.', 'D.', 'E.', 'F.'];
      const isMulti = q.type === 'multiple';

      optionsWrap.innerHTML = opts.map((o, i) => {
        const label = o.replace(/^[A-F]\.\s*/, '');
        const prefix = prefixLabels[i] || '';
        let cls = 'option-btn';
        if (existingAnswer !== undefined) {
          if (isMulti) {
            if (existingAnswer.includes(prefix.replace('.', ''))) cls += ' selected';
          } else {
            if (existingAnswer === prefix.replace('.', '')) cls += ' selected';
          }
        }
        return `<div class="${cls}" data-answer="${prefix.replace('.', '')}">
          <span class="prefix">${prefix}</span>${label}
        </div>`;
      }).join('');

      // 绑定点击
      optionsWrap.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (isMulti) {
            const a = btn.dataset.answer;
            let cur = state.userAnswers[key] || [];
            const idx = cur.indexOf(a);
            if (idx >= 0) cur.splice(idx, 1);
            else cur.push(a);
            cur.sort();
            state.userAnswers[key] = cur;
          } else {
            state.userAnswers[key] = btn.dataset.answer;
          }
          renderExamPage();
        });
      });
    }

    // 导航按钮
    $('#btn-prev').disabled = state.currentIndex === 0;
    if (state.currentIndex === total - 1) {
      $('#btn-next').textContent = '交卷';
      $('#btn-next').className = 'btn btn-accent';
    } else {
      $('#btn-next').textContent = '下一题';
      $('#btn-next').className = 'btn btn-primary';
    }

    // 解析区
    explanationWrap.innerHTML = '';
  }

  function goPrev() {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderExamPage();
    }
  }

  function goNext() {
    const qs = state.currentQuestions;
    if (state.currentIndex < qs.length - 1) {
      state.currentIndex++;
      renderExamPage();
    } else {
      submitExam();
    }
  }

  function submitExam() {
    clearInterval(state.examTimer);
    if (state.examMode) $('#exam-header').classList.add('hidden');

    const qs = state.currentQuestions;
    let correct = 0, total = qs.length;
    const details = [];

    qs.forEach((q, i) => {
      const userAns = state.userAnswers[i];
      let isCorrect = false;
      if (q.type === 'multiple') {
        const ua = (userAns || []).sort().join('');
        const ca = [...q.answer].sort().join('');
        isCorrect = ua === ca;
      } else if (q.type === 'fill' || q.type === 'short') {
        isCorrect = false; // 主观题不计对错
      } else {
        isCorrect = userAns === q.answer;
      }
      if (isCorrect) correct++;

      // 错题收集
      if (!isCorrect && q.type !== 'short') {
        if (!state.wrongBook.includes(q.id)) {
          state.wrongBook.push(q.id);
        }
      }

      details.push({ question: q, userAnswer: userAns, isCorrect });
    });

    saveStorage();

    // 渲染结果
    showPage('result');
    const rate = total > 0 ? Math.round(correct / total * 100) : 0;
    $('#result-score').textContent = correct;
    $('#result-total').textContent = total;
    $('#result-rate').textContent = rate + '%';

    let gradeText = '继续加油！';
    if (rate >= 90) gradeText = '优秀！';
    else if (rate >= 75) gradeText = '良好！';
    else if (rate >= 60) gradeText = '及格！';
    $('#result-grade').textContent = gradeText;

    const objQ = qs.filter(q => q.type === 'fill' || q.type === 'short').length;
    $('#result-note').textContent = objQ > 0 ? `（注：含${objQ}道主观题不计分）` : '';

    // 详细解析
    const detailWrap = $('#result-details');
    detailWrap.innerHTML = details.map((d, i) => {
      const q = d.question;
      const ua = d.userAnswer;
      let answerDisplay = '';
      if (q.type === 'multiple') {
        answerDisplay = '正确答案: ' + q.answer.join(', ');
        if (ua) answerDisplay += ' | 你的答案: ' + ua.join(', ');
      } else if (q.type === 'fill' || q.type === 'short') {
        answerDisplay = '参考答案: ' + (Array.isArray(q.answer) ? q.answer.join('；') : q.answer);
        if (ua) answerDisplay += ' | 你的回答: ' + (Array.isArray(ua) ? ua.join('；') : ua);
      } else {
        answerDisplay = '正确答案: ' + q.answer;
        if (ua) answerDisplay += ' | 你的答案: ' + ua;
      }

      const icon = d.isCorrect ? '✓' : '✗';
      const cls = d.isCorrect ? 'success' : 'danger';

      return `<div class="question-card" style="border-left:4px solid var(--${cls});">
        <div class="q-header">
          <span class="q-num">${i+1}. <span class="q-type-badge badge-${q.type}">${TYPE_MAP[q.type]}</span> <span style="color:var(--${cls});font-weight:700;">${icon}</span></span>
          <span style="font-size:0.8rem;color:var(--text-light);">${q.category}</span>
        </div>
        <div class="q-title">${q.question}</div>
        <div style="padding:8px 0;color:var(--text-light);font-size:0.9rem;">${answerDisplay}</div>
        <div class="explanation show">${q.explanation}</div>
      </div>`;
    }).join('');
  }

  // ============ 错题本 ============
  function renderWrongBook() {
    showPage('wrongbook');
    const wrongQs = ALL_QUESTIONS.filter(q => state.wrongBook.includes(q.id));
    $('#wrong-count-display').textContent = wrongQs.length;

    // 分类过滤
    const catFilter = $('#wrong-cat-filter');
    let currentCat = catFilter.value;

    const cats = [...new Set(wrongQs.map(q => q.category))];
    catFilter.innerHTML = '<option value="">全部分类</option>' +
      cats.map(c => `<option value="${c}">${c}</option>`).join('');
    catFilter.value = currentCat || '';

    let filtered = wrongQs;
    if (currentCat) filtered = filtered.filter(q => q.category === currentCat);

    const list = $('#wrong-list');
    if (filtered.length === 0) {
      list.innerHTML = '<div class="card" style="text-align:center;color:var(--text-light);">暂无错题</div>';
      $('#redo-wrong').classList.add('hidden');
      return;
    }

    list.innerHTML = filtered.map((q, i) =>
      `<div class="wrong-item">
        <div class="q-header">
          <span class="q-num">${i+1}. <span class="q-type-badge badge-${q.type}">${TYPE_MAP[q.type]}</span></span>
          <span style="font-size:0.8rem;color:var(--text-light);">${q.category} | ${q.law}</span>
        </div>
        <div class="q-title">${q.question}</div>
        <div style="padding:6px 0;color:var(--success);font-size:0.85rem;">
          正确答案: ${Array.isArray(q.answer) ? q.answer.join(', ') : q.answer}
        </div>
        <div style="padding:4px 0;color:var(--text-light);font-size:0.82rem;">${q.explanation}</div>
      </div>`
    ).join('');

    $('#redo-wrong').classList.remove('hidden');
    $('#redo-wrong').onclick = () => {
      state.categoryFilter = currentCat || '';
      const qs = currentCat ? filtered : wrongQs;
      if (qs.length === 0) return;
      startPractice(qs);
    };

    // 清除错题
    $('#clear-wrong').onclick = () => {
      if (confirm('确认清空所有错题记录？')) {
        state.wrongBook = [];
        saveStorage();
        renderWrongBook();
        renderHome();
      }
    };
  }

  // ============ 事件绑定 ============

  // 错题本分类筛选（一次性绑定）
  const wrongCatFilterEl = $('#wrong-cat-filter');
  if (wrongCatFilterEl) wrongCatFilterEl.addEventListener('change', renderWrongBook);
  // 导航
  $('#nav-home').addEventListener('click', () => { state.categoryFilter = ''; renderHome(); });
  $('#bn-home').addEventListener('click', () => { state.categoryFilter = ''; renderHome(); });
  $('#nav-category').addEventListener('click', () => { state.categoryFilter = ''; renderCategory(); });
  $('#bn-category').addEventListener('click', () => { state.categoryFilter = ''; renderCategory(); });
  $('#nav-wrongbook').addEventListener('click', renderWrongBook);
  $('#bn-wrongbook').addEventListener('click', renderWrongBook);

  // 首页按钮
  $('#btn-start-exam').addEventListener('click', startExam);
  $('#btn-go-category').addEventListener('click', () => { state.categoryFilter = ''; renderCategory(); });

  // 答题
  $('#btn-prev').addEventListener('click', goPrev);
  $('#btn-next').addEventListener('click', goNext);

  // 结果页
  $('#btn-retry').addEventListener('click', renderHome);
  $('#btn-review').addEventListener('click', renderWrongBook);

  // 分类切换
  $('#cat-back').addEventListener('click', renderHome);

  // 输入框监听
  const answerInput = $('#answer-input');
  if (answerInput) {
    answerInput.addEventListener('input', () => {
      state.userAnswers[state.currentIndex] = answerInput.value;
    });
  }

  // ============ 初始化 ============
  loadStorage();
  renderHome();

})();
