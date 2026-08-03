/* ============================================================
   劳动保障监察协理员考试题库 - 应用逻辑（含背诵模式）
   ============================================================ */
(function() {
  'use strict';

  const TYPE_MAP = { single:'单选题', multiple:'多选题', judge:'判断题', fill:'填空题', short:'简答题' };
  const CATEGORIES = ['劳动关系基础','社会保险','劳动基准','特殊保护','就业促进','劳动安全','争议处理与监察'];
  const TYPES = ['single','multiple','judge','fill','short'];
  const EBBINGHAUS_INTERVALS = [1, 3, 7, 14]; // 复习间隔天数

  let state = {
    page:'home', examMode:false, currentQuestions:[], currentIndex:0, userAnswers:{},
    examTimer:null, examSeconds:3600, wrongBook:[], wrongAnswers:{}, typeFilter:{single:true,multiple:true,judge:true,fill:true,short:true}, categoryFilter:'',
    // 背诵模式状态
    reciteScope:{}, reciteQueue:[], reciteIndex:0, reciteResult:{remember:[], forgot:[]},
    reciteIsFlipped:false, reciteEbbing:{}, reciteStartDate:null, historyRecords:[]
  };

  const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

  // ========== 本地存储 ==========
  function loadStorage(){
    try{
      const wb=localStorage.getItem('yjld_wrongbook'); if(wb) state.wrongBook=JSON.parse(wb);
      const wa=localStorage.getItem('yjld_wrong_answers'); if(wa) state.wrongAnswers=JSON.parse(wa);
      const eb=localStorage.getItem('yjld_ebbinghaus'); if(eb) state.reciteEbbing=JSON.parse(eb);
      const sd=localStorage.getItem('yjld_ebbing_start'); if(sd) state.reciteStartDate=sd;
      const hr=localStorage.getItem('yjld_practice_history'); if(hr){try{state.historyRecords=JSON.parse(hr);}catch(e){state.historyRecords=[];}}
    }catch(e){}
  }

  // ========== 练习进度保存与恢复 ==========
  function saveProgress(){
    if(state.currentQuestions.length===0) return;
    var progress={
      category:state.categoryFilter||'全部分类',
      types:TYPES.filter(function(t){return state.typeFilter[t];}),
      questionIds:state.currentQuestions.map(function(q){return q.id;}),
      answers:state.userAnswers,
      currentIndex:state.currentIndex,
      startTime:Date.now(),
      examMode:state.examMode,
      examSeconds:state.examSeconds
    };
    try{localStorage.setItem('yjld_practice_progress',JSON.stringify(progress));}catch(e){}
  }
  function clearProgress(){
    try{localStorage.removeItem('yjld_practice_progress');}catch(e){}
  }
  function checkProgress(){
    try{
      var saved=localStorage.getItem('yjld_practice_progress');
      if(!saved) return null;
      return JSON.parse(saved);
    }catch(e){return null;}
  }
  function resumeProgress(){
    var progress=checkProgress();
    if(!progress) return;
    var qs=progress.questionIds.map(function(id){return ALL_QUESTIONS.find(function(q){return q.id===id;});}).filter(Boolean);
    if(qs.length===0){clearProgress();return;}
    state.examMode=progress.examMode||false;
    state.currentQuestions=qs;
    state.currentIndex=progress.currentIndex;
    state.userAnswers=progress.answers||{};
    state.categoryFilter=progress.category==='全部分类'?'':progress.category;
    TYPES.forEach(function(t){state.typeFilter[t]=false;});
    (progress.types||[]).forEach(function(t){state.typeFilter[t]=true;});
    if(state.examMode){
      state.examSeconds=progress.examSeconds||3600;
      showPage('exam');
      $('#exam-header').classList.remove('hidden');
      $('#exam-timer').textContent=formatTime(state.examSeconds);
      $('#exam-timer').classList.remove('warning','danger');
      clearInterval(state.examTimer);
      state.examTimer=setInterval(function(){
        state.examSeconds--;
        $('#exam-timer').textContent=formatTime(state.examSeconds);
        if(state.examSeconds<600) $('#exam-timer').classList.add('warning');
        if(state.examSeconds<300) $('#exam-timer').classList.add('danger');
        if(state.examSeconds<=0){clearInterval(state.examTimer);submitExam();}
      },1000);
    }else{
      clearInterval(state.examTimer);
    }
    renderExamPage();
  }
  function showProgressModal(){
    $('#progress-modal').classList.remove('hidden');
  }
  function hideProgressModal(){
    $('#progress-modal').classList.add('hidden');
  }

  function saveWrongBook(){ try{ localStorage.setItem('yjld_wrongbook',JSON.stringify(state.wrongBook)); }catch(e){} }
  function saveWrongAnswers(){ try{ localStorage.setItem('yjld_wrong_answers',JSON.stringify(state.wrongAnswers)); }catch(e){} }
  function saveEbbing(){ try{ localStorage.setItem('yjld_ebbinghaus',JSON.stringify(state.reciteEbbing)); }catch(e){} }
  function saveEbbingStart(){ try{ localStorage.setItem('yjld_ebbing_start',state.reciteStartDate||''); }catch(e){} }
  function saveHistory(){ try{ while(state.historyRecords.length>50) state.historyRecords.pop(); localStorage.setItem('yjld_practice_history',JSON.stringify(state.historyRecords)); }catch(e){} }

  // ========== 页面切换 ==========
  function showPage(name){
    state.page=name; $$('.page').forEach(p=>p.classList.add('hidden'));
    const t=$('#page-'+name); if(t) t.classList.remove('hidden');
    $$('.nav-btn').forEach(b=>b.classList.remove('active'));
    const nb=$('#nav-'+name); if(nb) nb.classList.add('active');
    $$('.bottom-nav .nav-item').forEach(b=>b.classList.remove('active'));
    const mb=$('#bn-'+name); if(mb) mb.classList.add('active');
    window.scrollTo(0,0);
  }

  function todayStr(){ const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
  function getTodayReviewIds(){
    const today=todayStr(); const ids=[];
    for(const [lawId, record] of Object.entries(state.reciteEbbing)){
      if(record.reviewDates){
        for(const [reviewDay, done] of Object.entries(record.reviewDates)){
          if(reviewDay===today && !done) ids.push(parseInt(lawId));
        }
      }
    }
    return ids;
  }
  function getMasteredCount(){ return Object.keys(state.reciteEbbing).filter(k=>state.reciteEbbing[k].mastered).length; }

  // ========== 首页 ==========
  function renderHome(){
    showPage('home');
    const total=ALL_QUESTIONS.length;
    const catStats={}; CATEGORIES.forEach(c=>catStats[c]=0);
    ALL_QUESTIONS.forEach(q=>{if(catStats[q.category]!==undefined) catStats[q.category]++;});
    $('#total-count').textContent=total;
    $('#wrong-count').textContent=state.wrongBook.length;
    $('#recite-mastered').textContent=getMasteredCount();
    const reviewIds=getTodayReviewIds();
    $('#recite-today').textContent=reviewIds.length;
    if(reviewIds.length>0) $('#recite-today').classList.add('has-review'); else $('#recite-today').classList.remove('has-review');
    // 练习历史摘要
    renderHomeHistoryCard();

    const catGrid=$('#home-categories');
    catGrid.innerHTML=CATEGORIES.map(c=>`<div class="cat-card" data-cat="${c}"><h3>${c}</h3><div class="info">${catStats[c]} 道题</div></div>`).join('');
    catGrid.querySelectorAll('.cat-card').forEach(card=>{card.addEventListener('click',()=>{state.categoryFilter=card.dataset.cat;renderCategory();});});
  }


  function renderHomeHistoryCard(){
    const recs=state.historyRecords;
    if(recs.length===0){
      $('#history-summary').textContent='暂无练习记录，快去练习吧！';
      $('#history-recent-stats').innerHTML='';
      return;
    }
    const last=recs[0];
    $('#history-summary').textContent=`最近：${last.date} | ${last.category} | ${last.correct}/${last.total}`;
    const recent=recs.slice(0,3);
    $('#history-recent-stats').innerHTML=recent.map(r=>`<span class="history-mini">${r.date.slice(5)} ${r.category.slice(0,4)} ${r.rate}%</span>`).join('');
  }

  // ========== 分类练习 ==========
  function renderCategory(){
    showPage('category');
    $('#cat-title').textContent=state.categoryFilter||'全部分类';
    const tagsWrap=$('#type-tags');
    tagsWrap.innerHTML=TYPES.map(t=>`<span class="type-tag tag-${t} ${state.typeFilter[t]?'active':''}" data-type="${t}">${TYPE_MAP[t]}</span>`).join('');
    tagsWrap.querySelectorAll('.type-tag').forEach(tag=>{tag.addEventListener('click',()=>{const t=tag.dataset.type;state.typeFilter[t]=!state.typeFilter[t];tag.classList.toggle('active',state.typeFilter[t]);updateStartButton();});});
    updateStartButton();
  }
  function getFilteredQuestions(){
    let qs=ALL_QUESTIONS; if(state.categoryFilter) qs=qs.filter(q=>q.category===state.categoryFilter); qs=qs.filter(q=>state.typeFilter[q.type]);
    return qs;
  }
  function updateStartButton(){
    const qs=getFilteredQuestions();
    const btn=$('#start-practice');
    if(qs.length===0){
      btn.disabled=true; btn.textContent='开始练习';
    }else{
      btn.disabled=false; btn.textContent=`开始练习（${qs.length} 题）`;
      btn.onclick=()=>{startPractice(qs);};
    }
  }
  function startPractice(qs){
  var progress=checkProgress();
  if(progress){
    state._pendingRestart=function(){doStartPractice(qs);};
    showProgressModal();
    return;
  }
  doStartPractice(qs);
}
function doStartPractice(qs){state.examMode=false;state.currentQuestions=qs;state.currentIndex=0;state.userAnswers={};clearInterval(state.examTimer);renderExamPage();}

  // ========== 模拟考试 ==========
  function startExam(){
  var progress=checkProgress();
  if(progress){
    state._pendingRestart=function(){doStartExam();};
    showProgressModal();
    return;
  }
  doStartExam();
}
function doStartExam(){
    const pick=(type,n)=>{const pool=ALL_QUESTIONS.filter(q=>q.type===type);const shuffled=pool.sort(()=>Math.random()-0.5);return shuffled.slice(0,Math.min(n,pool.length));};
    let examQs=[...pick('single',25),...pick('multiple',10),...pick('judge',8),...pick('fill',4),...pick('short',3)].sort(()=>Math.random()-0.5);
    state.examMode=true;state.currentQuestions=examQs;state.currentIndex=0;state.userAnswers={};state.examSeconds=3600;clearInterval(state.examTimer);
    showPage('exam');$('#exam-header').classList.remove('hidden');$('#exam-timer').textContent=formatTime(state.examSeconds);$('#exam-timer').classList.remove('warning','danger');renderExamPage();
    state.examTimer=setInterval(()=>{state.examSeconds--;$('#exam-timer').textContent=formatTime(state.examSeconds);if(state.examSeconds<600)$('#exam-timer').classList.add('warning');if(state.examSeconds<300)$('#exam-timer').classList.add('danger');if(state.examSeconds<=0){clearInterval(state.examTimer);submitExam();}},1000);
  }
  function formatTime(s){const m=Math.floor(s/60);const sec=s%60;return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;}

  // ========== 答题页 ==========
  function renderExamPage(){
    showPage('exam'); if(!state.examMode) $('#exam-header').classList.add('hidden'); else $('#exam-header').classList.remove('hidden');
    const qs=state.currentQuestions; if(qs.length===0) return;
    const q=qs[state.currentIndex], total=qs.length;
    $('#exam-progress-text').textContent=`${state.currentIndex+1}/${total}`;
    $('#exam-progress-bar').style.width=((state.currentIndex+1)/total*100)+'%';
    $('#q-number').textContent=`第 ${state.currentIndex+1} 题`; $('#q-type-badge').textContent=TYPE_MAP[q.type]; $('#q-type-badge').className='q-type-badge badge-'+q.type;
    $('#q-title').textContent=q.question; $('#q-category-info').textContent=`${q.category} | ${q.law} | ${q.knowledgeArea}`;
    const optionsWrap=$('#q-options'), inputWrap=$('#q-input-wrap'), explanationWrap=$('#q-explanation');
    explanationWrap.classList.remove('show'); const key=state.currentIndex, existingAnswer=state.userAnswers[key];
    if(q.type==='fill'||q.type==='short'){
      optionsWrap.innerHTML=''; optionsWrap.classList.add('hidden'); inputWrap.classList.remove('hidden');
      const ta=$('#answer-input'); ta.value=existingAnswer||''; ta.className='text-input'; ta.disabled=false; ta.placeholder=q.type==='fill'?'请输入答案...':'请输入你的回答...';
    }else{
      inputWrap.classList.add('hidden'); optionsWrap.classList.remove('hidden');
      let opts=q.options; if(q.type==='judge') opts=['正确','错误'];
      const prefixLabels=q.type==='judge'?['A.','B.']:['A.','B.','C.','D.','E.','F.'], isMulti=q.type==='multiple';
      optionsWrap.innerHTML=opts.map((o,i)=>{const label=o.replace(/^[A-F]\.\s*/,''),prefix=prefixLabels[i]||'';let cls='option-btn';if(existingAnswer!==undefined){if(isMulti){if(existingAnswer.includes(prefix.replace('.','')))cls+=' selected';}else{if(existingAnswer===prefix.replace('.',''))cls+=' selected';}}return`<div class="${cls}" data-answer="${prefix.replace('.','')}"><span class="prefix">${prefix}</span>${label}</div>`;}).join('');
      optionsWrap.querySelectorAll('.option-btn').forEach(btn=>{btn.addEventListener('click',()=>{if(isMulti){const a=btn.dataset.answer;let cur=state.userAnswers[key]||[];const idx=cur.indexOf(a);if(idx>=0)cur.splice(idx,1);else cur.push(a);cur.sort();state.userAnswers[key]=cur;}else{state.userAnswers[key]=btn.dataset.answer;}renderExamPage();});});
    }
    $('#btn-prev').disabled=state.currentIndex===0;
    if(state.currentIndex===total-1){$('#btn-next').textContent='交卷';$('#btn-next').className='btn btn-accent';}else{$('#btn-next').textContent='下一题';$('#btn-next').className='btn btn-primary';}
    explanationWrap.innerHTML='';
    saveProgress();
  }
  function goPrev(){if(state.currentIndex>0){state.currentIndex--;renderExamPage();}}
  function goNext(){const qs=state.currentQuestions;if(state.currentIndex<qs.length-1){state.currentIndex++;renderExamPage();}else{submitExam();}}

  function submitExam(){
    clearProgress();
    clearInterval(state.examTimer);if(state.examMode)$('#exam-header').classList.add('hidden');
    const qs=state.currentQuestions;let correct=0,total=qs.length;const details=[];
    qs.forEach((q,i)=>{const userAns=state.userAnswers[i];let isCorrect=false;if(q.type==='multiple'){const ua=(userAns||[]).sort().join(''),ca=[...q.answer].sort().join('');isCorrect=ua===ca;}else if(q.type==='fill'||q.type==='short'){isCorrect=false;}else{isCorrect=userAns===q.answer;}if(isCorrect)correct++;if(!isCorrect&&q.type!=='short'){if(!state.wrongBook.includes(q.id))state.wrongBook.push(q.id);state.wrongAnswers[q.id]=userAns;}details.push({question:q,userAnswer:userAns,isCorrect});});
    saveWrongBook();
    saveWrongAnswers();
    const rate=total>0?Math.round(correct/total*100):0;
    // 保存练习历史
    const now=new Date();
    const dateStr=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0')+' '+String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');
    const catName=state.categoryFilter||'全部分类';
    const activeTypes=TYPES.filter(t=>state.typeFilter[t]).map(t=>TYPE_MAP[t]).join('、')||'全部题型';
    const detailRecs=details.map(d=>({questionId:d.question.id,userAnswer:d.userAnswer,correctAnswer:d.question.answer,isCorrect:d.isCorrect}));
    state.historyRecords.unshift({date:dateStr,category:catName,types:activeTypes,total:total,correct:correct,rate:rate,details:detailRecs});
    saveHistory();
    showPage('result');$('#result-score').textContent=correct;$('#result-total').textContent=total;$('#result-rate').textContent=rate+'%';
    let gradeText='继续加油！';if(rate>=90)gradeText='优秀！';else if(rate>=75)gradeText='良好！';else if(rate>=60)gradeText='及格！';$('#result-grade').textContent=gradeText;
    const objQ=qs.filter(q=>q.type==='fill'||q.type==='short').length;$('#result-note').textContent=objQ>0?`（注：含${objQ}道主观题不计分）`:'';
    const detailWrap=$('#result-details');
    detailWrap.innerHTML=details.map((d,i)=>{const q=d.question,ua=d.userAnswer;let answerDisplay='';if(q.type==='multiple'){answerDisplay='正确答案: '+q.answer.join(', ');if(ua)answerDisplay+=' | 你的答案: '+ua.join(', ');}else if(q.type==='fill'||q.type==='short'){answerDisplay='参考答案: '+(Array.isArray(q.answer)?q.answer.join('；'):q.answer);if(ua)answerDisplay+=' | 你的回答: '+(Array.isArray(ua)?ua.join('；'):ua);}else{answerDisplay='正确答案: '+q.answer;if(ua)answerDisplay+=' | 你的答案: '+ua;}const icon=d.isCorrect?'✓':'✗',cls=d.isCorrect?'success':'danger';return`<div class="question-card" style="border-left:4px solid var(--${cls});"><div class="q-header"><span class="q-num">${i+1}. <span class="q-type-badge badge-${q.type}">${TYPE_MAP[q.type]}</span> <span style="color:var(--${cls});font-weight:700;">${icon}</span></span><span style="font-size:0.8rem;color:var(--text-light);">${q.category}</span></div><div class="q-title">${q.question}</div><div style="padding:8px 0;color:var(--text-light);font-size:0.9rem;">${answerDisplay}</div><div class="explanation show">${q.explanation}</div></div>`;}).join('');
  }

  // ========== 错题本 ==========
  function renderWrongBook(){
    showPage('wrongbook');
    var wrongQs=ALL_QUESTIONS.filter(function(q){return state.wrongBook.includes(q.id);});
    $('#wrong-count-display').textContent=wrongQs.length;
    var catFilter=$('#wrong-cat-filter');
    var currentCat=catFilter.value;
    var cats=[...new Set(wrongQs.map(function(q){return q.category;}))];
    catFilter.innerHTML='<option value="">全部分类</option>'+cats.map(function(c){return '<option value="'+c+'">'+c+'</option>';}).join('');
    catFilter.value=currentCat||'';
    var filtered=wrongQs;
    if(currentCat) filtered=filtered.filter(function(q){return q.category===currentCat;});
    var list=$('#wrong-list');
    if(filtered.length===0){
      list.innerHTML='<div class="card" style="text-align:center;color:var(--text-light);">暂无错题</div>';
      $('#redo-wrong').classList.add('hidden');
      return;
    }
    list.innerHTML=filtered.map(function(q,i){
      var userAns=state.wrongAnswers[q.id];
      var correctAnsDisplay='';
      var userAnsDisplay='';
      var optionsHtml='';
      var prefixLabels=q.type==='judge'?['A','B']:['A','B','C','D','E','F'];
      var isMulti=q.type==='multiple';

      // Format correct answer
      if(isMulti){
        correctAnsDisplay=q.answer.join(', ');
      }else if(q.type==='fill'||q.type==='short'){
        correctAnsDisplay=Array.isArray(q.answer)?q.answer.join('；'):q.answer;
      }else{
        correctAnsDisplay=q.answer;
      }

      // Format user answer
      if(userAns!==undefined&&userAns!==null){
        if(isMulti){
          userAnsDisplay=Array.isArray(userAns)?userAns.join(', '):userAns;
        }else if(q.type==='fill'||q.type==='short'){
          userAnsDisplay=Array.isArray(userAns)?userAns.join('；'):userAns;
        }else{
          userAnsDisplay=userAns;
        }
      }else{
        userAnsDisplay='未作答';
      }

      // Build options with highlighting
      if(q.type==='single'||q.type==='multiple'||q.type==='judge'){
        var opts=q.options;
        if(q.type==='judge') opts=['正确','错误'];
        var correctLetters=isMulti?q.answer:[q.answer];
        var userLetters=[];
        if(userAns!==undefined&&userAns!==null){
          userLetters=isMulti?(Array.isArray(userAns)?userAns:[]):[userAns];
        }
        optionsHtml='<div class="wrong-options">'+opts.map(function(o,j){
          var label=o.replace(/^[A-F]\.\s*/,'');
          var prefix=prefixLabels[j]||'';
          var cls='wrong-option';
          if(correctLetters.includes(prefix)) cls+=' wrong-option-correct';
          if(userLetters.includes(prefix)&&!correctLetters.includes(prefix)) cls+=' wrong-option-user';
          return '<div class="'+cls+'"><span class="prefix">'+prefix+'.</span>'+label+'</div>';
        }).join('')+'</div>';
      }

      return '<div class="wrong-item">'+
        '<div class="q-header">'+
          '<span class="q-num">'+(i+1)+'. <span class="q-type-badge badge-'+q.type+'">'+TYPE_MAP[q.type]+'</span></span>'+
          '<span style="font-size:0.8rem;color:var(--text-light);">'+q.category+' | '+q.law+'</span>'+
        '</div>'+
        '<div class="q-title">'+q.question+'</div>'+
        optionsHtml+
        '<div class="wrong-answer-row"><span class="wrong-label">你的答案：</span><span class="wrong-user-answer">'+userAnsDisplay+'</span></div>'+
        '<div class="wrong-answer-row"><span class="wrong-label">正确答案：</span><span class="wrong-correct-answer">'+correctAnsDisplay+'</span></div>'+
        '<div class="wrong-explanation">'+q.explanation+'</div>'+
      '</div>';
    }).join('');
    $('#redo-wrong').classList.remove('hidden');
    $('#redo-wrong').onclick=function(){
      state.categoryFilter=currentCat||'';
      var qs=currentCat?filtered:wrongQs;
      if(qs.length===0) return;
      startPractice(qs);
    };
    $('#clear-wrong').onclick=function(){
      if(confirm('确认清空所有错题记录？')){
        state.wrongBook=[];
        state.wrongAnswers={};
        saveWrongBook();
        saveWrongAnswers();
        renderWrongBook();
        renderHome();
      }
    };
  }

  // ========== 背诵模式 - 范围选择 ==========
  function buildLawCheckboxes(selectedLaws){
    const catList=$('#recite-category-list'); catList.innerHTML='';
    const catGroups={}; ALL_LAWS.forEach(l=>{if(!catGroups[l.category])catGroups[l.category]=new Set();catGroups[l.category].add(l.law);});
    for(const cat of CATEGORIES){
      if(!catGroups[cat]) continue;
      const laws=[...catGroups[cat]].sort();
      const allChecked=laws.every(l=>selectedLaws.includes(cat+'||'+l));
      catList.innerHTML+=`<div style="margin-bottom:16px;border-bottom:1px solid var(--border);padding-bottom:12px;"><label style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:0.95rem;cursor:pointer;"><input type="checkbox" class="recite-cat-check" data-cat="${cat}" ${allChecked?'checked':''} style="width:18px;height:18px;cursor:pointer;">${cat}</label><div class="recite-law-list" style="margin-left:26px;margin-top:6px;display:flex;flex-wrap:wrap;gap:6px;">${laws.map(l=>`<label style="display:flex;align-items:center;gap:6px;cursor:pointer;background:var(--bg);padding:6px 10px;border-radius:4px;font-size:0.85rem;"><input type="checkbox" class="recite-law-check" data-cat="${cat}" data-law="${l}" ${selectedLaws.includes(cat+'||'+l)?'checked':''} style="cursor:pointer;">${l}</label>`).join('')}</div></div>`;
    }
    catList.querySelectorAll('.recite-cat-check').forEach(cb=>{cb.addEventListener('change',()=>{const cat=cb.dataset.cat;catList.querySelectorAll(`.recite-law-check[data-cat="${cat}"]`).forEach(lc=>lc.checked=cb.checked);});});
    catList.querySelectorAll('.recite-law-check').forEach(lb=>{lb.addEventListener('change',()=>{const cat=lb.dataset.cat;const all=catList.querySelectorAll(`.recite-law-check[data-cat="${cat}"]`);const catCb=catList.querySelector(`.recite-cat-check[data-cat="${cat}"]`);catCb.checked=[...all].every(c=>c.checked);});});
  }

  function getSelectedLawKeys(){
    const checks=$$('.recite-law-check:checked'); const keys=[]; checks.forEach(cb=>keys.push(cb.dataset.cat+'||'+cb.dataset.law)); return keys;
  }

  function renderReciteScope(){
    showPage('recite-scope');
    const selectedLaws=Object.keys(state.reciteScope).length>0?state.reciteScope.selectedLaws||[]:CATEGORIES.flatMap(cat=>{const laws=[...new Set(ALL_LAWS.filter(l=>l.category===cat).map(l=>l.law))];return laws.map(l=>cat+'||'+l);});
    buildLawCheckboxes(selectedLaws);
    const reviewIds=getTodayReviewIds();
    if(reviewIds.length>0){$('#review-badge-dot').classList.remove('hidden');$('#review-badge-dot').textContent=reviewIds.length;}else{$('#review-badge-dot').classList.add('hidden');}
  }

  // ========== 背诵模式 - 闪卡 ==========
  function startRecite(isReview){
    const keys=isReview?null:getSelectedLawKeys();
    let laws=[];
    if(isReview){
      const reviewIds=getTodayReviewIds(); laws=ALL_LAWS.filter(l=>reviewIds.includes(l.id));
    }else{
      if(keys.length===0){alert('请至少选择一个法规分类');return;}
      laws=ALL_LAWS.filter(l=>keys.includes(l.category+'||'+l.law));
      laws=laws.sort(()=>Math.random()-0.5);
    }
    if(laws.length===0){alert('没有可背诵的法条');return;}
    if(!state.reciteStartDate){state.reciteStartDate=todayStr();saveEbbingStart();}
    state.reciteQueue=laws; state.reciteIndex=0; state.reciteResult={remember:[],forgot:[]}; state.reciteIsFlipped=false;
    state.reciteScope.selectedLaws=isReview?Object.keys(state.reciteScope).length>0?state.reciteScope.selectedLaws||[]:[]:keys;
    renderFlashcard();
  }

  function renderFlashcard(){
    showPage('recite-flash');
    const qs=state.reciteQueue; if(qs.length===0){showReciteRoundResult();return;}
    const q=qs[state.reciteIndex], total=qs.length;
    $('#recite-progress-text').textContent=`${state.reciteIndex+1}/${total}`;
    $('#recite-progress-bar').style.width=((state.reciteIndex+1)/total*100)+'%';
    $('#flash-source-front').textContent=`${q.category} · ${q.law} 第${q.articleNum}条`;
    $('#flash-text-front').textContent=q.blankText;
    $('#flash-source-back').textContent=`${q.category} · ${q.law} 第${q.articleNum}条`;
    $('#flash-text-back').textContent=q.text;
    state.reciteIsFlipped=false;
    const card=$('#flashcard'); card.classList.remove('flipped');
  }

  function flipCard(){
    const card=$('#flashcard'); state.reciteIsFlipped=!state.reciteIsFlipped;
    if(state.reciteIsFlipped) card.classList.add('flipped'); else card.classList.remove('flipped');
  }

  function recordAnswer(remembered){
    const q=state.reciteQueue[state.reciteIndex];
    if(remembered){ state.reciteResult.remember.push(q.id); }else{ state.reciteResult.forgot.push(q.id); }
    updateEbbingRecord(q.id, remembered);
    state.reciteIndex++;
    if(state.reciteIndex >= state.reciteQueue.length){ showReciteRoundResult(); }else{ renderFlashcard(); }
  }

  function updateEbbingRecord(lawId, remembered){
    const today=todayStr();
    if(!state.reciteEbbing[lawId]){ state.reciteEbbing[lawId]={firstDate:today, reviewDates:{}, mastered:false}; }
    const record=state.reciteEbbing[lawId];
    if(remembered){
      const existingReviewDays=Object.keys(record.reviewDates).length;
      const nextInterval=EBBINGHAUS_INTERVALS[existingReviewDays];
      if(nextInterval){
        const d=new Date(); d.setDate(d.getDate()+nextInterval);
        const reviewDay=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
        record.reviewDates[reviewDay]=false;
      }else{
        record.mastered=true;
      }
    }else{
      record.reviewDates={}; record.mastered=false;
      const d=new Date(); d.setDate(d.getDate()+1);
      const reviewDay=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
      record.reviewDates[reviewDay]=false;
    }
    saveEbbing();
  }

  function markTodayReviewed(lawId){
    const today=todayStr(); if(state.reciteEbbing[lawId]&&state.reciteEbbing[lawId].reviewDates){
      for(const [day, done] of Object.entries(state.reciteEbbing[lawId].reviewDates)){
        if(day===today&&!done){ state.reciteEbbing[lawId].reviewDates[day]=true; break; }
      }
    }
    saveEbbing();
  }

  function showReciteRoundResult(){
    showPage('recite-round-result');
    const total=state.reciteResult.remember.length+state.reciteResult.forgot.length;
    $('#round-remember-count').textContent=state.reciteResult.remember.length;
    $('#round-total-count').textContent=total;
    $('#round-forgot-count').textContent=state.reciteResult.forgot.length;
    $('#round-rate').textContent=total>0?Math.round(state.reciteResult.remember.length/total*100)+'%':'0%';
    $('#round-retry-forgot').onclick=()=>{
      if(state.reciteResult.forgot.length===0){alert('没有需要重背的法条');return;}
      state.reciteQueue=ALL_LAWS.filter(l=>state.reciteResult.forgot.includes(l.id)).sort(()=>Math.random()-0.5);
      state.reciteIndex=0; state.reciteResult={remember:[],forgot:[]}; state.reciteIsFlipped=false; renderFlashcard();
    };
    $('#round-back-home').onclick=()=>renderHome();
    $('#round-view-stats').onclick=()=>renderReciteStats();
  }


  // ========== 练习历史 ==========
  function renderHistory(){
    showPage('history');
    const recs=state.historyRecords;
    const list=$('#history-list');
    if(recs.length===0){
      list.innerHTML='<div class="card" style="text-align:center;color:var(--text-light);">暂无练习记录</div>';
      return;
    }
    list.innerHTML=recs.map((r,i)=>{
      const rateCls=r.rate>=80?'var(--success)':r.rate>=60?'var(--accent)':'var(--danger)';
      const detailRows=r.details.map((d,j)=>{
        const icon=d.isCorrect?'&#10003;':'&#10007;';
        const iconCls=d.isCorrect?'correct':'wrong';
        let ansStr='';
        if(Array.isArray(d.correctAnswer)){
          ansStr='正确答案: '+d.correctAnswer.join(', ')+' | 你的答案: '+(Array.isArray(d.userAnswer)?d.userAnswer.join(', '):(d.userAnswer||'未作答'));
        }else{
          ansStr='正确答案: '+d.correctAnswer+' | 你的答案: '+(d.userAnswer||'未作答');
        }
        return `<div class="history-detail-row"><span class="history-detail-icon ${iconCls}">${icon}</span><span>第${j+1}题</span><span class="history-detail-answer">${ansStr}</span></div>`;
      }).join('');
      return `<div class="history-item" data-idx="${i}"><div class="history-item-header"><span class="history-item-date">${r.date}</span><span class="history-item-cat">${r.category} | ${r.types}</span></div><div class="history-item-stats"><span class="history-item-rate" style="color:${rateCls};">${r.rate}%</span><span class="history-item-count">${r.correct}/${r.total} 正确</span></div><div class="history-item-detail" id="hist-detail-${i}">${detailRows}</div></div>`;
    }).join('');
    // 点击展开/折叠
    list.querySelectorAll('.history-item').forEach(item=>{
      item.addEventListener('click',function(e){
        const idx=this.dataset.idx;
        const detail=$('#hist-detail-'+idx);
        if(detail) detail.classList.toggle('show');
      });
    });
  }

  // ========== 背诵统计 ==========
  function renderReciteStats(){
    showPage('recite-stats');
    const days=state.reciteStartDate?Math.max(1,Math.ceil((new Date()-new Date(state.reciteStartDate))/86400000)):0;
    $('#stats-days').textContent=days;
    const totalLaws=ALL_LAWS.length; const mastered=getMasteredCount();
    $('#stats-total-laws').textContent=totalLaws; $('#stats-mastered').textContent=mastered; $('#stats-mastery-rate').textContent=totalLaws>0?Math.round(mastered/totalLaws*100)+'%':'0%';
    const catProg=$('#recite-cat-progress'); catProg.innerHTML='';
    for(const cat of CATEGORIES){
      const catLaws=ALL_LAWS.filter(l=>l.category===cat); const catTotal=catLaws.length;
      const catMastered=catLaws.filter(l=>state.reciteEbbing[l.id]&&state.reciteEbbing[l.id].mastered).length;
      const pct=catTotal>0?Math.round(catMastered/catTotal*100):0;
      catProg.innerHTML+=`<div style="margin-bottom:10px;"><div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:4px;"><span>${cat}</span><span>${catMastered}/${catTotal}</span></div><div class="progress-bar-wrap"><div class="progress-bar" style="width:${pct}%;background:${pct>=80?'var(--success)':pct>=40?'var(--accent)':'var(--primary-light)'};"></div></div></div>`;
    }
  }

  // ========== 事件绑定 ==========
  $('#nav-home').addEventListener('click',()=>{state.categoryFilter='';renderHome();});
  $('#bn-home').addEventListener('click',()=>{state.categoryFilter='';renderHome();});
  $('#nav-category').addEventListener('click',()=>{state.categoryFilter='';renderCategory();});
  $('#bn-category').addEventListener('click',()=>{state.categoryFilter='';renderCategory();});
  $('#nav-wrongbook').addEventListener('click',renderWrongBook);
  $('#bn-wrongbook').addEventListener('click',renderWrongBook);
  $('#nav-history').addEventListener('click',renderHistory);
  $('#bn-history').addEventListener('click',renderHistory);
  $('#nav-recite').addEventListener('click',renderReciteScope);
  $('#bn-recite').addEventListener('click',renderReciteScope);
  $('#home-recite-card').addEventListener('click',renderReciteScope);
  $('#home-history-card').addEventListener('click',renderHistory);
  $('#btn-start-exam').addEventListener('click',startExam);
  $('#btn-go-category').addEventListener('click',()=>{state.categoryFilter='';renderCategory();});
  $('#btn-prev').addEventListener('click',goPrev);
  $('#btn-next').addEventListener('click',goNext);
  $('#btn-retry').addEventListener('click',renderHome);
  $('#btn-review').addEventListener('click',renderWrongBook);
  $('#cat-back').addEventListener('click',renderHome);
  const answerInput=$('#answer-input'); if(answerInput) answerInput.addEventListener('input',()=>{state.userAnswers[state.currentIndex]=answerInput.value;});
  $('#wrong-cat-filter').addEventListener('change',renderWrongBook);
  // 背诵模式事件
  $('#recite-scope-back').addEventListener('click',renderHome);
  $('#recite-select-all').addEventListener('click',()=>{$$('.recite-law-check').forEach(cb=>cb.checked=true);$$('.recite-cat-check').forEach(cb=>cb.checked=true);});
  $('#recite-deselect-all').addEventListener('click',()=>{$$('.recite-law-check').forEach(cb=>cb.checked=false);$$('.recite-cat-check').forEach(cb=>cb.checked=false);});
  $('#recite-start-new').addEventListener('click',()=>startRecite(false));
  $('#recite-start-review').addEventListener('click',()=>startRecite(true));
  $('#recite-flash-back').addEventListener('click',()=>{if(confirm('确定退出本轮背诵？当前进度将丢失。')) renderReciteScope();});
  $('#btn-forgot').addEventListener('click',()=>{if(!state.reciteIsFlipped) flipCard(); setTimeout(()=>recordAnswer(false),300);});
  $('#btn-remember').addEventListener('click',()=>{if(!state.reciteIsFlipped) flipCard(); setTimeout(()=>recordAnswer(true),300);});
  $('#recite-stats-back').addEventListener('click',()=>renderHome());
  $('#history-back').addEventListener('click',renderHome);
  $('#clear-history').addEventListener('click',()=>{if(confirm('确认清空所有练习历史记录？')){state.historyRecords=[];saveHistory();renderHistory();renderHomeHistoryCard();}});
  // 闪卡点击翻转
  $('#flashcard-scene').addEventListener('click',flipCard);
  // 触屏滑动
  let touchStartX=0,touchStartY=0;
  $('#flashcard-scene').addEventListener('touchstart',e=>{touchStartX=e.touches[0].clientX;touchStartY=e.touches[0].clientY;});
  $('#flashcard-scene').addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-touchStartX, dy=e.changedTouches[0].clientY-touchStartY;
    if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>60&&!state.reciteIsFlipped){flipCard();}else if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>60&&state.reciteIsFlipped){if(dx<0)recordAnswer(false);else recordAnswer(true);}
  });

  // ========== 进度恢复弹窗事件 ==========
  $('#progress-modal-continue').addEventListener('click',function(){
    hideProgressModal();
    resumeProgress();
  });
  $('#progress-modal-restart').addEventListener('click',function(){
    hideProgressModal();
    clearProgress();
    if(state._pendingRestart){state._pendingRestart();state._pendingRestart=null;}
  });

  // ========== 初始化 ==========
  loadStorage(); renderHome();
})();