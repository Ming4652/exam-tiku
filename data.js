// 劳动保障监察协理员考试题库
// 总题目数: 209
// 单选题: 89 | 多选题: 50 | 判断题: 30 | 填空题: 20 | 简答题: 20

const ALL_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "公共基础知识",
    "law": "劳动法",
    "question": "根据《劳动法》，劳动者享有的基本权利不包括以下哪项？",
    "options": [
      "A. 平等就业和选择职业的权利",
      "B. 取得劳动报酬的权利",
      "C. 拒绝接受职业技能培训的权利",
      "D. 享受社会保险和福利的权利"
    ],
    "answer": "C",
    "explanation": "《劳动法》第三条规定的权利包括接受职业技能培训，而非可拒绝。"
  },
  {
    "id": 2,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "公共基础知识",
    "law": "劳动法",
    "question": "《劳动法》规定，禁止用人单位招用未满多少周岁的未成年人？",
    "options": [
      "A. 十四周岁",
      "B. 十五周岁",
      "C. 十六周岁",
      "D. 十八周岁"
    ],
    "answer": "C",
    "explanation": "《劳动法》第十五条规定禁止招用未满十六周岁的未成年人。"
  },
  {
    "id": 3,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "根据《劳动合同法》，已建立劳动关系未同时订立书面劳动合同的，应当自用工之日起多长时间内订立？",
    "options": [
      "A. 十五日内",
      "B. 一个月内",
      "C. 三个月内",
      "D. 六个月内"
    ],
    "answer": "B",
    "explanation": "《劳动合同法》第十条规定应当自用工之日起一个月内订立。"
  },
  {
    "id": 4,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "《劳动合同法》规定，用人单位自用工之日起超一个月不满一年未签书面合同的，应支付几倍工资？",
    "options": [
      "A. 一倍",
      "B. 二倍",
      "C. 三倍",
      "D. 四倍"
    ],
    "answer": "B",
    "explanation": "《劳动合同法》第八十二条规定应每月支付二倍工资。"
  },
  {
    "id": 5,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "《劳动合同法》规定，合同期限三个月以上不满一年的，试用期不得超过多少？",
    "options": [
      "A. 十五日",
      "B. 一个月",
      "C. 二个月",
      "D. 三个月"
    ],
    "answer": "B",
    "explanation": "《劳动合同法》第十九条规定此种情况试用期不超过一个月。"
  },
  {
    "id": 6,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "《劳动合同法》规定，劳动者提前多少日书面通知用人单位可解除劳动合同？",
    "options": [
      "A. 十日",
      "B. 十五日",
      "C. 三十日",
      "D. 六十日"
    ],
    "answer": "C",
    "explanation": "《劳动合同法》第三十七条规定提前三十日书面通知。"
  },
  {
    "id": 7,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "《劳动合同法》规定，用人单位违法解除劳动合同应支付经济补偿标准的几倍赔偿金？",
    "options": [
      "A. 一倍",
      "B. 二倍",
      "C. 三倍",
      "D. 四倍"
    ],
    "answer": "B",
    "explanation": "《劳动合同法》第八十七条规定应支付二倍赔偿金。"
  },
  {
    "id": 8,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "《劳动合同法》规定，劳务派遣单位应与被派遣劳动者订立几年以上固定期限劳动合同？",
    "options": [
      "A. 一年",
      "B. 二年",
      "C. 三年",
      "D. 五年"
    ],
    "answer": "B",
    "explanation": "《劳动合同法》第五十八条规定应订立二年以上固定期限劳动合同。"
  },
  {
    "id": 9,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法实施条例",
    "question": "《劳动合同法实施条例》规定，用工满一年未签书面合同视为已订立何种合同？",
    "options": [
      "A. 固定期限劳动合同",
      "B. 无固定期限劳动合同",
      "C. 以完成一定工作任务为期限",
      "D. 口头劳动合同"
    ],
    "answer": "B",
    "explanation": "《劳动合同法实施条例》第七条规定视为已订立无固定期限劳动合同。"
  },
  {
    "id": 10,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "公共基础知识",
    "law": "劳动法",
    "question": "《劳动法》规定每日工作时间不超过几小时、平均每周不超过几小时？",
    "options": [
      "A. 八小时、四十小时",
      "B. 八小时、四十四小时",
      "C. 十小时、四十八小时",
      "D. 八小时、四十八小时"
    ],
    "answer": "B",
    "explanation": "《劳动法》第三十六条规定每日不超过八小时、每周不超过四十四小时。"
  },
  {
    "id": 11,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "社会保险法",
    "question": "《社会保险法》规定职工基本养老保险由谁缴纳？",
    "options": [
      "A. 仅用人单位",
      "B. 仅职工个人",
      "C. 用人单位和职工共同",
      "D. 国家财政全额补贴"
    ],
    "answer": "C",
    "explanation": "《社会保险法》第十条规定由用人单位和职工共同缴纳。"
  },
  {
    "id": 12,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "社会保险法",
    "question": "《社会保险法》规定基本养老保险个人账户记账利率不得低于什么？",
    "options": [
      "A. 活期存款利率",
      "B. 一年期存款利率",
      "C. 银行定期存款利率",
      "D. 五年期国债利率"
    ],
    "answer": "C",
    "explanation": "《社会保险法》第十四条规定不低于银行定期存款利率。"
  },
  {
    "id": 13,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "《工伤保险条例》规定哪种情形不得认定为工伤？",
    "options": [
      "A. 工作时间和场所内因工作受伤",
      "B. 患职业病",
      "C. 上下班途中非本人主要责任交通事故",
      "D. 因醉酒导致伤亡"
    ],
    "answer": "D",
    "explanation": "《工伤保险条例》第十六条规定醉酒导致伤亡不得认定工伤。"
  },
  {
    "id": 14,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "《工伤保险条例》规定停工留薪期一般不超过多长时间？",
    "options": [
      "A. 三个月",
      "B. 六个月",
      "C. 十二个月",
      "D. 二十四个月"
    ],
    "answer": "C",
    "explanation": "《工伤保险条例》第三十三条规定不超过12个月。"
  },
  {
    "id": 15,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "失业保险条例",
    "question": "《失业保险条例》规定缴费满1年不足5年的，领取失业保险金期限最长为多久？",
    "options": [
      "A. 六个月",
      "B. 十二个月",
      "C. 十八个月",
      "D. 二十四个月"
    ],
    "answer": "B",
    "explanation": "《失业保险条例》第十七条规定最长为12个月。"
  },
  {
    "id": 16,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "公共基础知识",
    "law": "社会保险法",
    "question": "《社会保险法》规定基本养老保险累计缴费满多少年可按月领取？",
    "options": [
      "A. 十年",
      "B. 十二年",
      "C. 十五年",
      "D. 二十年"
    ],
    "answer": "C",
    "explanation": "《社会保险法》第十六条规定累计缴费满十五年。"
  },
  {
    "id": 17,
    "type": "single",
    "category": "劳动基准",
    "knowledgeArea": "劳动法律法规",
    "law": "最低工资规定",
    "question": "《最低工资规定》规定最低工资标准一般采取什么形式？",
    "options": [
      "A. 仅月最低工资标准",
      "B. 仅小时最低工资标准",
      "C. 月最低工资标准和小时最低工资标准",
      "D. 仅日最低工资标准"
    ],
    "answer": "C",
    "explanation": "《最低工资规定》第五条规定采取月和小时两种形式。"
  },
  {
    "id": 18,
    "type": "single",
    "category": "劳动基准",
    "knowledgeArea": "劳动法律法规",
    "law": "工资支付暂行规定",
    "question": "《工资支付暂行规定》规定工资至少多长时间支付一次？",
    "options": [
      "A. 每日一次",
      "B. 每周一次",
      "C. 每月一次",
      "D. 每季度一次"
    ],
    "answer": "C",
    "explanation": "《工资支付暂行规定》第七条规定至少每月支付一次。"
  },
  {
    "id": 19,
    "type": "single",
    "category": "劳动基准",
    "knowledgeArea": "劳动法律法规",
    "law": "带薪年休假条例",
    "question": "《带薪年休假条例》规定工作满1年不满10年的年休假几天？",
    "options": [
      "A. 三天",
      "B. 五天",
      "C. 七天",
      "D. 十天"
    ],
    "answer": "B",
    "explanation": "《职工带薪年休假条例》第三条规定为5天。"
  },
  {
    "id": 20,
    "type": "single",
    "category": "劳动基准",
    "knowledgeArea": "公共基础知识",
    "law": "全国年节及纪念日放假办法",
    "question": "根据2024年修订的放假办法，春节放假几天？",
    "options": [
      "A. 3天",
      "B. 4天",
      "C. 5天",
      "D. 7天"
    ],
    "answer": "B",
    "explanation": "2024年修订后春节放假4天（除夕至初三）。"
  },
  {
    "id": 21,
    "type": "single",
    "category": "特殊保护",
    "knowledgeArea": "劳动法律法规",
    "law": "女职工劳动保护特别规定",
    "question": "《女职工劳动保护特别规定》规定女职工生育享受多少天产假？",
    "options": [
      "A. 90天",
      "B. 98天",
      "C. 120天",
      "D. 128天"
    ],
    "answer": "B",
    "explanation": "《女职工劳动保护特别规定》第七条规定为98天。"
  },
  {
    "id": 22,
    "type": "single",
    "category": "特殊保护",
    "knowledgeArea": "劳动法律法规",
    "law": "禁止使用童工规定",
    "question": "《禁止使用童工规定》规定每使用一名童工每月处罚多少元？",
    "options": [
      "A. 1000元",
      "B. 3000元",
      "C. 5000元",
      "D. 10000元"
    ],
    "answer": "C",
    "explanation": "《禁止使用童工规定》第六条规定每名每月5000元罚款。"
  },
  {
    "id": 23,
    "type": "single",
    "category": "就业促进",
    "knowledgeArea": "公共基础知识",
    "law": "就业促进法",
    "question": "《就业促进法》倡导劳动者什么样的就业观念？",
    "options": [
      "A. 仅自主创业",
      "B. 仅政府安置",
      "C. 自主创业、自谋职业",
      "D. 等待分配"
    ],
    "answer": "C",
    "explanation": "《就业促进法》第七条鼓励劳动者自主创业、自谋职业。"
  },
  {
    "id": 24,
    "type": "single",
    "category": "就业促进",
    "knowledgeArea": "劳动法律法规",
    "law": "就业促进法",
    "question": "《就业促进法》规定的就业困难人员不包括以下哪项？",
    "options": [
      "A. 因身体状况难以就业的",
      "B. 因技能水平难以就业的",
      "C. 因学历不足难以就业的",
      "D. 因家庭因素难以就业的"
    ],
    "answer": "C",
    "explanation": "《就业促进法》第五十二条明确列举了就业困难人员的类型，学历不足不在列举范围。"
  },
  {
    "id": 25,
    "type": "single",
    "category": "就业促进",
    "knowledgeArea": "劳动法律法规",
    "law": "就业服务与就业管理规定",
    "question": "《就业服务与就业管理规定》禁止用人单位以什么理由拒绝录用？",
    "options": [
      "A. 学历",
      "B. 工作经验",
      "C. 性别",
      "D. 专业技能"
    ],
    "answer": "C",
    "explanation": "第十六条规定不得以性别为由拒绝录用妇女或提高录用标准。"
  },
  {
    "id": 26,
    "type": "single",
    "category": "劳动安全",
    "knowledgeArea": "公共基础知识",
    "law": "安全生产法",
    "question": "《安全生产法》规定谁是本单位安全生产第一责任人？",
    "options": [
      "A. 安全总监",
      "B. 分管安全的副总经理",
      "C. 生产经营单位的主要负责人",
      "D. 安全生产管理部门负责人"
    ],
    "answer": "C",
    "explanation": "《安全生产法》第五条规定主要负责人是第一责任人。"
  },
  {
    "id": 27,
    "type": "single",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "安全生产法",
    "question": "《安全生产法》规定矿山等单位从业人员超多少人应设安全管理机构或专职人员？",
    "options": [
      "A. 五十人",
      "B. 一百人",
      "C. 二百人",
      "D. 三百人"
    ],
    "answer": "B",
    "explanation": "《安全生产法》第二十四条规定超过一百人应设机构或专职人员。"
  },
  {
    "id": 28,
    "type": "single",
    "category": "劳动安全",
    "knowledgeArea": "公共基础知识",
    "law": "职业病防治法",
    "question": "《职业病防治法》坚持什么方针？",
    "options": [
      "A. 安全第一、预防为主",
      "B. 预防为主、防治结合",
      "C. 综合治理、防治结合",
      "D. 防治为主、预防为辅"
    ],
    "answer": "B",
    "explanation": "《职业病防治法》第三条确立预防为主、防治结合的方针。"
  },
  {
    "id": 29,
    "type": "single",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "职业病防治法",
    "question": "《职业病防治法》规定接触危害作业劳动者应何时进行职业健康检查？",
    "options": [
      "A. 仅上岗前",
      "B. 仅在岗期间",
      "C. 上岗前、在岗期间和离岗时",
      "D. 仅离岗时"
    ],
    "answer": "C",
    "explanation": "《职业病防治法》第三十五条规定三个时段均应检查。"
  },
  {
    "id": 30,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动争议调解仲裁法",
    "question": "《劳动争议调解仲裁法》规定劳动争议申请仲裁的时效为多久？",
    "options": [
      "A. 六个月",
      "B. 一年",
      "C. 二年",
      "D. 三年"
    ],
    "answer": "B",
    "explanation": "《劳动争议调解仲裁法》第二十七条规定时效为一年。"
  },
  {
    "id": 31,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动争议调解仲裁法",
    "question": "《劳动争议调解仲裁法》规定仲裁委收到申请几日内应决定是否受理？",
    "options": [
      "A. 三日",
      "B. 五日",
      "C. 七日",
      "D. 十日"
    ],
    "answer": "B",
    "explanation": "第二十九条规定自收到申请之日起五日内决定。"
  },
  {
    "id": 32,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动保障监察条例",
    "question": "《劳动保障监察条例》规定违法行为几年内未被发现不再查处？",
    "options": [
      "A. 一年",
      "B. 二年",
      "C. 三年",
      "D. 五年"
    ],
    "answer": "B",
    "explanation": "第二十条规定了二年的查处时效。"
  },
  {
    "id": 33,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "《保障农民工工资支付条例》规定施工总承包单位应存储什么保证金？",
    "options": [
      "A. 工程质量保证金",
      "B. 工资保证金",
      "C. 履约保证金",
      "D. 投标保证金"
    ],
    "answer": "B",
    "explanation": "第三十二条规定应存储工资保证金。"
  },
  {
    "id": 34,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "《劳动合同法》规定连续订立二次固定期限合同后续订应订立何种合同？",
    "options": [
      "A. 固定期限劳动合同",
      "B. 无固定期限劳动合同",
      "C. 以完成一定工作任务为期限",
      "D. 由用人单位决定"
    ],
    "answer": "B",
    "explanation": "《劳动合同法》第十四条第三项规定此种情形应订立无固定期限合同。"
  },
  {
    "id": 35,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "《劳动合同法》规定经济补偿按工作年限每满一年支付几个月工资？",
    "options": [
      "A. 半个月",
      "B. 一个月",
      "C. 二个月",
      "D. 三个月"
    ],
    "answer": "B",
    "explanation": "《劳动合同法》第四十七条规定每满一年支付一个月工资。"
  },
  {
    "id": 36,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "《劳动合同法》规定试用期工资不得低于约定工资的百分之多少？",
    "options": [
      "A. 百分之六十",
      "B. 百分之七十",
      "C. 百分之八十",
      "D. 百分之九十"
    ],
    "answer": "C",
    "explanation": "《劳动合同法》第二十条规定不低于百分之八十。"
  },
  {
    "id": 37,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "《劳动合同法》规定非全日制用工报酬结算支付周期最长不超过多久？",
    "options": [
      "A. 七日",
      "B. 十五日",
      "C. 三十日",
      "D. 六十日"
    ],
    "answer": "B",
    "explanation": "第七十二条规定结算周期最长不超过十五日。"
  },
  {
    "id": 38,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "用人单位以暴力等手段强迫劳动，劳动者立即解除合同后用人单位是否需要支付经济补偿？",
    "options": [
      "A. 不需要",
      "B. 需要支付",
      "C. 由双方协商",
      "D. 由劳动行政部门决定"
    ],
    "answer": "B",
    "explanation": "《劳动合同法》第三十八条、第四十六条规定此种情形应当支付经济补偿。"
  },
  {
    "id": 39,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动法",
    "question": "《劳动法》规定延长工作时间一般每日不得超过几小时？",
    "options": [
      "A. 一小时",
      "B. 二小时",
      "C. 三小时",
      "D. 四小时"
    ],
    "answer": "A",
    "explanation": "《劳动法》第四十一条规定一般每日不得超过一小时。"
  },
  {
    "id": 40,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "《劳动合同法》规定用人单位变更名称是否影响劳动合同履行？",
    "options": [
      "A. 影响，需重新签订",
      "B. 不影响",
      "C. 需要劳动者同意",
      "D. 需向劳动行政部门备案"
    ],
    "answer": "B",
    "explanation": "第三十三条规定变更名称等事项不影响合同履行。"
  },
  {
    "id": 41,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "社会保险法",
    "question": "《社会保险法》规定生育保险费由谁缴纳？",
    "options": [
      "A. 职工个人",
      "B. 用人单位",
      "C. 双方共同",
      "D. 政府财政"
    ],
    "answer": "B",
    "explanation": "第五十三条规定由用人单位缴纳，职工不缴。"
  },
  {
    "id": 42,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "《工伤保险条例》规定一次性工亡补助金是多少倍？",
    "options": [
      "A. 10倍",
      "B. 15倍",
      "C. 20倍",
      "D. 25倍"
    ],
    "answer": "C",
    "explanation": "第三十九条规定为上一年度全国城镇居民人均可支配收入的20倍。"
  },
  {
    "id": 43,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "社会保险法",
    "question": "《社会保险法》规定退休时医保缴费达国家规定年限后退休是否还需缴纳？",
    "options": [
      "A. 需要",
      "B. 不再需要",
      "C. 减半缴纳",
      "D. 由社保机构决定"
    ],
    "answer": "B",
    "explanation": "第二十七条规定达到年限后退休不再缴纳。"
  },
  {
    "id": 44,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "失业保险条例",
    "question": "《失业保险条例》规定领取失业保险金的条件不包括哪项？",
    "options": [
      "A. 缴费满1年",
      "B. 非因本人意愿中断就业",
      "C. 已办理失业登记并有求职要求",
      "D. 失业前已连续工作满五年"
    ],
    "answer": "D",
    "explanation": "第十四条规定的三个条件不包括连续工作满五年。"
  },
  {
    "id": 45,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "公共基础知识",
    "law": "社会保险法",
    "question": "《社会保险法》规定养老金根据什么情况适时调整？",
    "options": [
      "A. 仅职工平均工资增长",
      "B. 仅物价上涨",
      "C. 职工平均工资增长和物价上涨",
      "D. 财政收支情况"
    ],
    "answer": "C",
    "explanation": "第十八条规定根据职工平均工资增长和物价上涨情况调整。"
  },
  {
    "id": 46,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "公共基础知识",
    "law": "工伤保险条例",
    "question": "《工伤保险条例》规定劳动功能障碍分为几个等级？",
    "options": [
      "A. 五个",
      "B. 八个",
      "C. 十个",
      "D. 十二个"
    ],
    "answer": "C",
    "explanation": "第二十二条规定分为十个伤残等级。"
  },
  {
    "id": 47,
    "type": "single",
    "category": "劳动基准",
    "knowledgeArea": "劳动法律法规",
    "law": "带薪年休假条例",
    "question": "什么情况下职工不享受当年年休假？",
    "options": [
      "A. 享受寒暑假且天数多于年休假",
      "B. 请事假累计5天以上",
      "C. 请病假累计10天以上",
      "D. 工作年限不满3年"
    ],
    "answer": "A",
    "explanation": "第四条规定享受寒暑假天数多于年休假的，不享受当年年休假。"
  },
  {
    "id": 48,
    "type": "single",
    "category": "劳动基准",
    "knowledgeArea": "劳动法律法规",
    "law": "工资支付暂行规定",
    "question": "《工资支付暂行规定》规定解除劳动合同时工资应何时付清？",
    "options": [
      "A. 解除后30日内",
      "B. 解除后15日内",
      "C. 解除或终止时一次付清",
      "D. 下个发薪日"
    ],
    "answer": "C",
    "explanation": "第九条规定应在解除或终止时一次付清。"
  },
  {
    "id": 49,
    "type": "single",
    "category": "特殊保护",
    "knowledgeArea": "劳动法律法规",
    "law": "女职工劳动保护特别规定",
    "question": "对哺乳未满几周岁婴儿的女职工应安排哺乳时间？",
    "options": [
      "A. 六个月",
      "B. 一周岁",
      "C. 一岁半",
      "D. 两周岁"
    ],
    "answer": "B",
    "explanation": "第九条规定哺乳未满1周岁婴儿应安排每天1小时哺乳时间。"
  },
  {
    "id": 50,
    "type": "single",
    "category": "就业促进",
    "knowledgeArea": "劳动法律法规",
    "law": "就业促进法",
    "question": "《就业促进法》规定各级政府应对哪些人员优先扶持？",
    "options": [
      "A. 所有失业人员",
      "B. 残疾人、零就业家庭成员等就业困难人员",
      "C. 仅应届毕业生",
      "D. 仅退役军人"
    ],
    "answer": "B",
    "explanation": "第五十二、五十三条规定对就业困难人员实行优先扶持和重点帮助。"
  },
  {
    "id": 51,
    "type": "single",
    "category": "劳动安全",
    "knowledgeArea": "公共基础知识",
    "law": "安全生产法",
    "question": "安全生产设施必须与主体工程怎样？",
    "options": [
      "A. 分期设计施工使用",
      "B. 同时设计施工投入生产和使用",
      "C. 先设计施工安全设施",
      "D. 先建主体再补安全设施"
    ],
    "answer": "B",
    "explanation": "第三十一条规定安全设施须三同时。"
  },
  {
    "id": 52,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "竞业限制期限最长不得超过多长时间？",
    "options": [
      "A. 一年",
      "B. 二年",
      "C. 三年",
      "D. 五年"
    ],
    "answer": "B",
    "explanation": "《劳动合同法》第二十四条规定不得超过二年。"
  },
  {
    "id": 53,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动争议调解仲裁法",
    "question": "仲裁庭裁决案件应自受理之日起多少日内结束？",
    "options": [
      "A. 三十日",
      "B. 四十五日",
      "C. 六十日",
      "D. 九十日"
    ],
    "answer": "B",
    "explanation": "第四十三条规定应自受理之日起四十五日内结束。"
  },
  {
    "id": 54,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "施工总承包单位应在施工现场醒目位置设立什么？",
    "options": [
      "A. 安全生产告示牌",
      "B. 维权信息告示牌",
      "C. 施工进度告示牌",
      "D. 质量告示牌"
    ],
    "answer": "B",
    "explanation": "第三十四条规定应设立维权信息告示牌。"
  },
  {
    "id": 55,
    "type": "single",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "职业病防治法",
    "question": "职业病诊断不应综合分析的因素是？",
    "options": [
      "A. 病人职业史",
      "B. 职业病危害接触史",
      "C. 病人家庭遗传病史",
      "D. 临床表现和辅助检查结果"
    ],
    "answer": "C",
    "explanation": "第四十六条规定综合分析不包括家庭遗传病史。"
  },
  {
    "id": 56,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动法",
    "question": "法定休假日工作应支付不低于工资的百分之多少？",
    "options": [
      "A. 百分之一百五十",
      "B. 百分之二百",
      "C. 百分之三百",
      "D. 百分之四百"
    ],
    "answer": "C",
    "explanation": "第四十四条规定法定休假日支付不低于百分之三百。"
  },
  {
    "id": 57,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法实施条例",
    "question": "劳动者达到法定退休年龄的劳动合同如何处理？",
    "options": [
      "A. 自动续期",
      "B. 自动终止",
      "C. 继续有效",
      "D. 需协商解除"
    ],
    "answer": "B",
    "explanation": "第二十一条规定劳动者达法定退休年龄劳动合同终止。"
  },
  {
    "id": 58,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "社会保险法",
    "question": "工伤保险费率确定原则是什么？",
    "options": [
      "A. 以支定收",
      "B. 以收定支",
      "C. 收支平衡",
      "D. 以支定收、收支平衡"
    ],
    "answer": "D",
    "explanation": "第三十三条规定以支定收、收支平衡原则确定费率。"
  },
  {
    "id": 59,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "用人单位未按时提交工伤认定申请期间的工伤费用由谁负担？",
    "options": [
      "A. 工伤保险基金",
      "B. 用人单位",
      "C. 职工个人",
      "D. 政府财政"
    ],
    "answer": "B",
    "explanation": "第十七条规定未在规定时限提交申请的，此期间费用由用人单位负担。"
  },
  {
    "id": 60,
    "type": "single",
    "category": "就业促进",
    "knowledgeArea": "劳动法律法规",
    "law": "就业促进法",
    "question": "《就业促进法》禁止以什么理由拒绝录用？",
    "options": [
      "A. 学历不符合要求",
      "B. 是传染病病原携带者",
      "C. 专业不对口",
      "D. 工作经验不足"
    ],
    "answer": "B",
    "explanation": "第三十条规定不得以传染病病原携带者为由拒绝录用。"
  },
  {
    "id": 61,
    "type": "single",
    "category": "就业促进",
    "knowledgeArea": "劳动法律法规",
    "law": "就业服务与就业管理规定",
    "question": "职业中介机构不得有下列哪种行为？",
    "options": [
      "A. 提供职业指导",
      "B. 提供虚假就业信息",
      "C. 组织招聘洽谈会",
      "D. 开展职业介绍"
    ],
    "answer": "B",
    "explanation": "第五十五条规定不得提供虚假就业信息。"
  },
  {
    "id": 62,
    "type": "single",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "安全生产法",
    "question": "生产安全事故发生后现场人员应立即报告谁？",
    "options": [
      "A. 安全生产监督管理部门",
      "B. 本单位负责人",
      "C. 公安机关",
      "D. 工会"
    ],
    "answer": "B",
    "explanation": "第八十三条规定应立即报告本单位负责人。"
  },
  {
    "id": 63,
    "type": "single",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "职业病防治法",
    "question": "劳动者离职时有权索取职业健康监护档案复印件，用人单位应怎样？",
    "options": [
      "A. 可以拒绝",
      "B. 收取费用后提供",
      "C. 如实、无偿提供并签章",
      "D. 仅提供电子版"
    ],
    "answer": "C",
    "explanation": "第三十六条规定应如实、无偿提供并在复印件上签章。"
  },
  {
    "id": 64,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "公共基础知识",
    "law": "劳动争议调解仲裁法",
    "question": "劳动争议仲裁是否收费？",
    "options": [
      "A. 收费",
      "B. 不收费",
      "C. 根据案件金额收费",
      "D. 部分收费"
    ],
    "answer": "B",
    "explanation": "第五十三条规定劳动争议仲裁不收费。"
  },
  {
    "id": 65,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "农民工工资应当以什么形式支付？",
    "options": [
      "A. 实物",
      "B. 有价证券",
      "C. 货币",
      "D. 股权"
    ],
    "answer": "C",
    "explanation": "第十一条规定应以货币形式支付。"
  },
  {
    "id": 66,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动法",
    "question": "用人单位应保证劳动者每周至少休息多长时间？",
    "options": [
      "A. 半天",
      "B. 一日",
      "C. 一日半",
      "D. 两日"
    ],
    "answer": "B",
    "explanation": "第三十八条规定每周至少休息一日。"
  },
  {
    "id": 67,
    "type": "single",
    "category": "劳动基准",
    "knowledgeArea": "劳动法律法规",
    "law": "最低工资规定",
    "question": "确定最低工资标准时一般不考虑以下哪项？",
    "options": [
      "A. 城镇居民消费价格指数",
      "B. 个人缴纳社保和公积金",
      "C. 用人单位的经营利润",
      "D. 职工平均工资"
    ],
    "answer": "C",
    "explanation": "第六条规定的参考因素不包括用人单位经营利润。"
  },
  {
    "id": 68,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动保障监察条例",
    "question": "劳动保障监察员调查检查不得少于几人？",
    "options": [
      "A. 1人",
      "B. 2人",
      "C. 3人",
      "D. 4人"
    ],
    "answer": "B",
    "explanation": "第十六条规定不得少于2人。"
  },
  {
    "id": 69,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "施工总承包单位应开设什么账户专项支付农民工工资？",
    "options": [
      "A. 农民工工资专用账户",
      "B. 一般存款账户",
      "C. 基本存款账户",
      "D. 临时存款账户"
    ],
    "answer": "A",
    "explanation": "第二十六条规定应开设农民工工资专用账户。"
  },
  {
    "id": 70,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "社会保险法",
    "question": "《社会保险法》规定失业保险费由谁缴纳？",
    "options": [
      "A. 职工个人",
      "B. 用人单位",
      "C. 用人单位和职工共同",
      "D. 政府财政"
    ],
    "answer": "C",
    "explanation": "第四十四条规定双方共同缴纳。"
  },
  {
    "id": 71,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动法",
    "question": "对怀孕几个月以上女职工不得安排延长工作时间和夜班？",
    "options": [
      "A. 五个月",
      "B. 六个月",
      "C. 七个月",
      "D. 八个月"
    ],
    "answer": "C",
    "explanation": "第六十一条规定怀孕七个月以上不得安排延长和夜班。"
  },
  {
    "id": 72,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "公共基础知识",
    "law": "劳动争议调解仲裁法",
    "question": "劳动争议仲裁委员会由哪三方代表组成？",
    "options": [
      "A. 政府、企业、职工",
      "B. 劳动行政部门、工会、企业",
      "C. 法院、工会、企业",
      "D. 人大、政府、工会"
    ],
    "answer": "B",
    "explanation": "第十九条规定由劳动行政部门代表、工会代表、企业方面代表组成。"
  },
  {
    "id": 73,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "试用期内劳动者提前几日通知可解除合同？",
    "options": [
      "A. 一日",
      "B. 三日",
      "C. 七日",
      "D. 十五日"
    ],
    "answer": "B",
    "explanation": "第三十七条规定试用期内提前三日通知。"
  },
  {
    "id": 74,
    "type": "single",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "安全生产法",
    "question": "生产经营单位必须依法参加什么保险？",
    "options": [
      "A. 养老保险",
      "B. 医疗保险",
      "C. 工伤保险",
      "D. 失业保险"
    ],
    "answer": "C",
    "explanation": "第五十一条规定必须参加工伤保险。"
  },
  {
    "id": 75,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "分包单位拖欠农民工工资由谁先行清偿？",
    "options": [
      "A. 建设单位",
      "B. 施工总承包单位",
      "C. 分包单位自行清偿",
      "D. 政府垫付"
    ],
    "answer": "B",
    "explanation": "第三十条规定由施工总承包单位先行清偿。"
  },
  {
    "id": 76,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动法",
    "question": "非法招用未满十六周岁未成年人的由什么部门处罚？",
    "options": [
      "A. 公安部门",
      "B. 劳动行政部门",
      "C. 教育部门",
      "D. 工商部门"
    ],
    "answer": "B",
    "explanation": "第九十四条规定由劳动行政部门责令改正并处罚款。"
  },
  {
    "id": 77,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "工作时间工作岗位突发疾病多长时间内抢救无效死亡视同工伤？",
    "options": [
      "A. 24小时",
      "B. 48小时",
      "C. 72小时",
      "D. 96小时"
    ],
    "answer": "B",
    "explanation": "第十五条规定48小时内抢救无效死亡视同工伤。"
  },
  {
    "id": 78,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "集体合同由谁代表职工与用人单位订立？",
    "options": [
      "A. 职工代表大会",
      "B. 工会",
      "C. 职工代表",
      "D. 劳动行政部门"
    ],
    "answer": "B",
    "explanation": "第五十一条规定由工会代表。"
  },
  {
    "id": 79,
    "type": "single",
    "category": "特殊保护",
    "knowledgeArea": "劳动法律法规",
    "law": "女职工劳动保护特别规定",
    "question": "女职工怀孕未满4个月流产享受几天产假？",
    "options": [
      "A. 7天",
      "B. 15天",
      "C. 30天",
      "D. 42天"
    ],
    "answer": "B",
    "explanation": "第七条第二款规定享受15天产假。"
  },
  {
    "id": 80,
    "type": "single",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "职业病防治法",
    "question": "对不适宜继续从事原工作的职业病病人应如何处理？",
    "options": [
      "A. 继续留任",
      "B. 解除劳动合同",
      "C. 调离原岗位并妥善安置",
      "D. 安排提前退休"
    ],
    "answer": "C",
    "explanation": "第五十六条规定应调离原岗位并妥善安置。"
  },
  {
    "id": 81,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动保障监察条例",
    "question": "劳动保障监察案件调查应自立案之日起多少工作日内完成？",
    "options": [
      "A. 30个",
      "B. 45个",
      "C. 60个",
      "D. 90个"
    ],
    "answer": "C",
    "explanation": "第十七条规定应在60个工作日内完成。"
  },
  {
    "id": 82,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "用人单位单方解除合同应事先将理由通知谁？",
    "options": [
      "A. 劳动行政部门",
      "B. 工会",
      "C. 职工代表大会",
      "D. 人民法院"
    ],
    "answer": "B",
    "explanation": "第四十三条规定应事先将理由通知工会。"
  },
  {
    "id": 83,
    "type": "single",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "安全生产法",
    "question": "特种作业人员必须取得什么才能上岗？",
    "options": [
      "A. 学历证书",
      "B. 健康证明",
      "C. 特种作业操作证",
      "D. 安全生产许可证"
    ],
    "answer": "C",
    "explanation": "第三十条规定须取得相应资格方可上岗。"
  },
  {
    "id": 84,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "社会保险法",
    "question": "个人跨统筹地区就业的基本养老保险关系如何处理？",
    "options": [
      "A. 自动终止",
      "B. 随本人转移",
      "C. 重新计算",
      "D. 予以冻结"
    ],
    "answer": "B",
    "explanation": "第十九条规定关系随本人转移，缴费年限累计计算。"
  },
  {
    "id": 85,
    "type": "single",
    "category": "特殊保护",
    "knowledgeArea": "公共基础知识",
    "law": "禁止使用童工规定",
    "question": "禁止使用童工规定中的童工指未满多少周岁？",
    "options": [
      "A. 14周岁",
      "B. 15周岁",
      "C. 16周岁",
      "D. 18周岁"
    ],
    "answer": "C",
    "explanation": "第二条规定童工是指未满十六周岁的未成年人。"
  },
  {
    "id": 86,
    "type": "single",
    "category": "就业促进",
    "knowledgeArea": "公共基础知识",
    "law": "就业促进法",
    "question": "《就业促进法》规定劳动者就业前或上岗前应接受什么教育？",
    "options": [
      "A. 学历教育",
      "B. 职业教育",
      "C. 高等教育",
      "D. 义务教育"
    ],
    "answer": "B",
    "explanation": "第四十六条规定应接受必要的职业教育。"
  },
  {
    "id": 87,
    "type": "single",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "用人单位申请工伤认定的时限是事故伤害发生之日起多少日内？",
    "options": [
      "A. 15日",
      "B. 20日",
      "C. 30日",
      "D. 60日"
    ],
    "answer": "C",
    "explanation": "第十七条规定应自事故伤害发生之日起30日内提出。"
  },
  {
    "id": 88,
    "type": "single",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动法",
    "question": "《劳动法》规定工资应以什么形式支付？",
    "options": [
      "A. 按年",
      "B. 按季度",
      "C. 按月",
      "D. 按日"
    ],
    "answer": "C",
    "explanation": "第五十条规定应以货币形式按月支付。"
  },
  {
    "id": 89,
    "type": "single",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动争议调解仲裁法",
    "question": "劳动关系存续期间拖欠劳动报酬争议仲裁时效如何？",
    "options": [
      "A. 从知道权利被侵害起一年",
      "B. 从劳动关系终止起一年",
      "C. 不受一年时效限制",
      "D. 从争议发生起六十日"
    ],
    "answer": "C",
    "explanation": "第二十七条第四款规定此种情形不受一年仲裁时效限制。"
  },
  {
    "id": 90,
    "type": "multiple",
    "category": "劳动关系基础",
    "knowledgeArea": "公共基础知识",
    "law": "劳动法",
    "question": "《劳动法》规定劳动者享有哪些权利？（多选）",
    "options": [
      "A. 平等就业和选择职业的权利",
      "B. 取得劳动报酬的权利",
      "C. 休息休假的权利",
      "D. 获得劳动安全卫生保护的权利"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "《劳动法》第三条列举了劳动者的主要权利，以上四项均属基本权利。"
  },
  {
    "id": 91,
    "type": "multiple",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "《劳动合同法》规定哪些情形用人单位应支付经济补偿？（多选）",
    "options": [
      "A. 劳动者依第三十八条解除合同",
      "B. 用人单位提出协商一致解除",
      "C. 用人单位依第四十条解除合同",
      "D. 用人单位维持条件续订但劳动者不同意"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第四十六条规定了七种支付情形，D情况除外。"
  },
  {
    "id": 92,
    "type": "multiple",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "《劳动合同法》规定哪些情形用人单位可单方解除？（多选）",
    "options": [
      "A. 试用期被证明不符合录用条件",
      "B. 严重违反规章制度",
      "C. 患病在医疗期内",
      "D. 严重失职造成重大损害"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "第三十九条规定的六种情形含ABD，C属第四十二条不得解除情形。"
  },
  {
    "id": 93,
    "type": "multiple",
    "category": "社会保险",
    "knowledgeArea": "公共基础知识",
    "law": "社会保险法",
    "question": "我国社会保险制度包括哪些险种？（多选）",
    "options": [
      "A. 基本养老保险",
      "B. 基本医疗保险",
      "C. 工伤保险",
      "D. 生育保险"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "《社会保险法》第二条规定五险，另有失业保险，共五项。"
  },
  {
    "id": 94,
    "type": "multiple",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "哪些情形应当认定为工伤？（多选）",
    "options": [
      "A. 工作时间场所因工作原因受事故伤害",
      "B. 工作时间前后从事预备或收尾工作受伤",
      "C. 工作时间场所因履职受暴力伤害",
      "D. 患职业病"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第十四条规定的七种认定情形包括以上全部。"
  },
  {
    "id": 95,
    "type": "multiple",
    "category": "劳动基准",
    "knowledgeArea": "劳动法律法规",
    "law": "最低工资规定",
    "question": "哪些项目不计入最低工资？（多选）",
    "options": [
      "A. 延长工作时间工资",
      "B. 中夜班高温低温津贴",
      "C. 基本工资",
      "D. 法律法规规定的福利待遇"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "第十二条规定ABD不计入最低工资。"
  },
  {
    "id": 96,
    "type": "multiple",
    "category": "特殊保护",
    "knowledgeArea": "劳动法律法规",
    "law": "女职工劳动保护特别规定",
    "question": "女职工孕期不能适应原劳动，用人单位应？（多选）",
    "options": [
      "A. 减轻劳动量",
      "B. 直接解除劳动合同",
      "C. 安排其他能适应的劳动",
      "D. 降低工资标准"
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "第六条规定可减轻劳动量或安排其他劳动，不得降低工资或解除合同。"
  },
  {
    "id": 97,
    "type": "multiple",
    "category": "就业促进",
    "knowledgeArea": "劳动法律法规",
    "law": "就业促进法",
    "question": "哪些属于就业歧视行为？（多选）",
    "options": [
      "A. 以性别为由拒绝录用妇女",
      "B. 提高对妇女录用标准",
      "C. 以传染病病原携带者为由拒绝录用",
      "D. 对农村劳动者进城就业设歧视性限制"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第二十七、三十、三十一条分别禁止上述歧视行为。"
  },
  {
    "id": 98,
    "type": "multiple",
    "category": "争议处理与监察",
    "knowledgeArea": "公共基础知识",
    "law": "劳动争议调解仲裁法",
    "question": "劳动争议仲裁委员会由哪几方组成？（多选）",
    "options": [
      "A. 劳动行政部门代表",
      "B. 工会代表",
      "C. 企业方面代表",
      "D. 人民法院代表"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第十九条规定由劳动行政部门、工会、企业三方代表组成。"
  },
  {
    "id": 99,
    "type": "multiple",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "维权信息告示牌应明示哪些内容？（多选）",
    "options": [
      "A. 建设单位、总承包单位基本信息",
      "B. 当地最低工资标准、工资支付日期",
      "C. 劳动保障监察投诉举报电话",
      "D. 劳动争议调解仲裁申请渠道"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第三十四条规定应明示以上全部四项信息。"
  },
  {
    "id": 100,
    "type": "multiple",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "哪些情形劳动合同终止？（多选）",
    "options": [
      "A. 劳动合同期满",
      "B. 劳动者开始享受基本养老保险待遇",
      "C. 劳动者死亡或被宣告死亡失踪",
      "D. 用人单位决定放假休息"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第四十四条规定的六种终止情形包括ABC，D不属终止情形。"
  },
  {
    "id": 101,
    "type": "multiple",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "社会保险法",
    "question": "哪些费用由基本医疗保险基金支付？（多选）",
    "options": [
      "A. 符合药品目录的费用",
      "B. 符合诊疗项目的费用",
      "C. 符合医疗服务设施标准的费用",
      "D. 应由第三人负担的医疗费用"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第二十八条、第三十条区分了支付范围和不纳入范围。"
  },
  {
    "id": 102,
    "type": "multiple",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "哪些工伤费用由用人单位支付？（多选）",
    "options": [
      "A. 治疗工伤期间的工资福利",
      "B. 五六级伤残职工按月伤残津贴",
      "C. 解除合同时的一次性伤残就业补助金",
      "D. 一次性伤残补助金"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第三十六条规定ABC由用人单位支付，D由工伤保险基金支付。"
  },
  {
    "id": 103,
    "type": "multiple",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "哪些情况劳动者可立即解除合同无需告知？（多选）",
    "options": [
      "A. 暴力手段强迫劳动",
      "B. 威胁手段强迫劳动",
      "C. 非法限制人身自由强迫劳动",
      "D. 违章指挥强令冒险作业危及人身安全"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第三十八条第二款规定以上四种情形可立即解除。"
  },
  {
    "id": 104,
    "type": "multiple",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "安全生产法",
    "question": "主要负责人安全生产工作有哪些职责？（多选）",
    "options": [
      "A. 建立健全全员安全责任制",
      "B. 组织实施安全教育培训",
      "C. 保证安全投入有效实施",
      "D. 及时如实报告事故"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第二十一条规定的七项职责包括以上四项。"
  },
  {
    "id": 105,
    "type": "multiple",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "职业病防治法",
    "question": "劳动者享有哪些职业卫生保护权利？（多选）",
    "options": [
      "A. 获得职业卫生教育培训",
      "B. 获得职业健康检查和职业病防治服务",
      "C. 了解工作场所危害因素和后果",
      "D. 拒绝无防护措施的违章作业"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第三十九条明确列举的七项权利包括这些。"
  },
  {
    "id": 106,
    "type": "multiple",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "农民工工资不得以什么形式替代？（多选）",
    "options": [
      "A. 实物",
      "B. 有价证券",
      "C. 银行转账",
      "D. 现金"
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "第十一条规定应以货币形式支付，不得以实物或有价证券替代。"
  },
  {
    "id": 107,
    "type": "multiple",
    "category": "争议处理与监察",
    "knowledgeArea": "公共基础知识",
    "law": "劳动争议调解仲裁法",
    "question": "劳动争议处理程序包括哪些途径？（多选）",
    "options": [
      "A. 协商",
      "B. 调解",
      "C. 仲裁",
      "D. 诉讼"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第四、五条规定了协商-调解-仲裁-诉讼的完整程序。"
  },
  {
    "id": 108,
    "type": "multiple",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "哪些属于无固定期限合同法定订立条件？（多选）",
    "options": [
      "A. 连续工作满十年",
      "B. 初次实行合同制连续工作满十年且距退休不足十年",
      "C. 连续订立二次固定期限后续订",
      "D. 工作满五年"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第十四条规定的三种情形。D不在此列。"
  },
  {
    "id": 109,
    "type": "multiple",
    "category": "社会保险",
    "knowledgeArea": "公共基础知识",
    "law": "社会保险法",
    "question": "基本养老保险基金由哪些部分组成？（多选）",
    "options": [
      "A. 用人单位缴费",
      "B. 个人缴费",
      "C. 政府补贴",
      "D. 基金投资运营收益"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第十一条规定基金由用人单位和个人缴费以及政府补贴等组成。"
  },
  {
    "id": 110,
    "type": "multiple",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "哪些属于无效或部分无效劳动合同？（多选）",
    "options": [
      "A. 欺诈胁迫违背真实意思订立",
      "B. 免除用人单位法定责任排除劳动者权利",
      "C. 违反法律行政法规强制性规定",
      "D. 口头约定"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第二十六条规定的三种情形。口头约定不一定无效。"
  },
  {
    "id": 111,
    "type": "multiple",
    "category": "特殊保护",
    "knowledgeArea": "劳动法律法规",
    "law": "女职工劳动保护特别规定",
    "question": "女职工经期禁忌从事哪些劳动？（多选）",
    "options": [
      "A. 冷水作业第二三四级",
      "B. 低温作业第二三四级",
      "C. 体力劳动强度第三四级",
      "D. 高处作业第三四级"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "附录明确列举了经期禁忌劳动范围，以上四项均属。"
  },
  {
    "id": 112,
    "type": "multiple",
    "category": "就业促进",
    "knowledgeArea": "劳动法律法规",
    "law": "就业服务与就业管理规定",
    "question": "用人单位招用人员不得有哪些行为？（多选）",
    "options": [
      "A. 提供虚假招聘信息",
      "B. 招用无合法身份证件的人员",
      "C. 以招用人员为名牟取不正当利益",
      "D. 扣押被录用人员居民身份证"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第十四、十五条规定的禁止行为。"
  },
  {
    "id": 113,
    "type": "multiple",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动保障监察条例",
    "question": "劳动保障监察的形式包括哪些？（多选）",
    "options": [
      "A. 日常巡视检查",
      "B. 审查书面材料",
      "C. 接受举报投诉",
      "D. 专项检查"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第十四条规定了ABC三种形式。"
  },
  {
    "id": 114,
    "type": "multiple",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动争议调解仲裁法",
    "question": "哪些仲裁裁决为终局裁决？（多选）",
    "options": [
      "A. 追索劳动报酬不超十二个月最低工资",
      "B. 工作时间方面执行国家标准的争议",
      "C. 社会保险方面执行国家标准的争议",
      "D. 确认劳动关系争议"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第四十七条规定的终局裁决情形。D不属终局裁决。"
  },
  {
    "id": 115,
    "type": "multiple",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "哪些情形不得认定工伤？（多选）",
    "options": [
      "A. 故意犯罪",
      "B. 醉酒或吸毒",
      "C. 自残或自杀",
      "D. 上下班途中本人主要责任交通事故"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第十六条规定的三种情形。D如非本人主要责任应认定。"
  },
  {
    "id": 116,
    "type": "multiple",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "工资支付台账应包括哪些内容？（多选）",
    "options": [
      "A. 用人单位名称、支付周期、日期",
      "B. 支付对象姓名、身份证号、联系方式",
      "C. 工作时间、应发工资项目及数额",
      "D. 实发工资、银行凭证或签字"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第十五条规定台账应包含以上全部内容且至少保存3年。"
  },
  {
    "id": 117,
    "type": "multiple",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "裁减人员时优先留用哪些人？（多选）",
    "options": [
      "A. 订立较长期限固定期限合同的",
      "B. 订立无固定期限合同的",
      "C. 家庭无其他就业有扶养义务的",
      "D. 工作年限最长的"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第四十一条规定的优先留用三类人员。"
  },
  {
    "id": 118,
    "type": "multiple",
    "category": "就业促进",
    "knowledgeArea": "公共基础知识",
    "law": "就业促进法",
    "question": "县级以上政府应建立健全哪些就业制度？（多选）",
    "options": [
      "A. 公共就业服务体系",
      "B. 职业培训制度",
      "C. 就业援助制度",
      "D. 失业保险制度"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "《就业促进法》规定建立ABC制度，D属社会保障体系。"
  },
  {
    "id": 119,
    "type": "multiple",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "哪些行为劳动行政部门应责令限期支付？（多选）",
    "options": [
      "A. 未足额支付劳动报酬",
      "B. 低于最低工资标准支付",
      "C. 安排加班不支付加班费",
      "D. 解除合同未依法支付经济补偿"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第八十五条规定的四种情形。"
  },
  {
    "id": 120,
    "type": "multiple",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "社会保险法",
    "question": "哪些费用由工伤保险基金支付？（多选）",
    "options": [
      "A. 工伤医疗和康复费用",
      "B. 住院伙食补助费",
      "C. 一次性伤残补助金",
      "D. 解除合同时一次性医疗补助金"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第三十八条规定的九项费用包括这些。"
  },
  {
    "id": 121,
    "type": "multiple",
    "category": "劳动基准",
    "knowledgeArea": "劳动法律法规",
    "law": "最低工资规定",
    "question": "确定月最低工资标准应参考哪些因素？（多选）",
    "options": [
      "A. 就业者及赡养人口最低生活费用",
      "B. 城镇居民消费价格指数",
      "C. 职工平均工资",
      "D. 经济发展水平"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第六条规定应参考以上诸因素。"
  },
  {
    "id": 122,
    "type": "multiple",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "安全生产法",
    "question": "使用被派遣劳动者应进行哪些教育培训？（多选）",
    "options": [
      "A. 岗位安全操作规程教育",
      "B. 安全操作技能培训",
      "C. 学历提升教育",
      "D. 岗位安全操作技能教育和培训"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "第二十八条规定应将派遣劳动者纳入统一管理进行安全教育和培训。"
  },
  {
    "id": 123,
    "type": "multiple",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "职业病防治法",
    "question": "用人单位应采取哪些职业病防治管理措施？（多选）",
    "options": [
      "A. 设置职业卫生管理机构配专兼职人员",
      "B. 制定防治计划和实施方案",
      "C. 建立职业卫生档案和健康监护档案",
      "D. 建立职业病危害事故应急救援预案"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第二十条规定的六项管理措施。"
  },
  {
    "id": 124,
    "type": "multiple",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "劳务派遣用工在哪些岗位上实施？（多选）",
    "options": [
      "A. 临时性",
      "B. 辅助性",
      "C. 替代性",
      "D. 专业性"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第六十六条规定只能在那三性岗位上实施。"
  },
  {
    "id": 125,
    "type": "multiple",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动法",
    "question": "哪些侵害权益行为劳动行政部门可责令支付赔偿金？（多选）",
    "options": [
      "A. 克扣或无故拖欠工资",
      "B. 拒不支付延长工作时间工资",
      "C. 低于最低工资标准支付",
      "D. 解除合同未依法给经济补偿"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第九十一条规定的四种情形。"
  },
  {
    "id": 126,
    "type": "multiple",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "人社部门查处拖欠工资可采取哪些措施？（多选）",
    "options": [
      "A. 查询相关单位金融账户",
      "B. 查询当事人房产车辆",
      "C. 请求公安机关协助",
      "D. 涉嫌犯罪移送公安机关"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第四十、四十一、四十二条规定的措施。"
  },
  {
    "id": 127,
    "type": "multiple",
    "category": "特殊保护",
    "knowledgeArea": "劳动法律法规",
    "law": "禁止使用童工规定",
    "question": "哪些主体负有禁止使用童工的义务？（多选）",
    "options": [
      "A. 国家机关",
      "B. 社会团体",
      "C. 企业事业单位",
      "D. 个体工商户"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第二条规定各类用人单位均不得招用未满16周岁者。"
  },
  {
    "id": 128,
    "type": "multiple",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动争议调解仲裁法",
    "question": "仲裁员哪些情形应回避？（多选）",
    "options": [
      "A. 是当事人或代理人近亲属",
      "B. 与本案有利害关系",
      "C. 与当事人有其他关系可能影响公正",
      "D. 私自会见当事人或接受请客送礼"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第三十三条规定的四种回避情形。"
  },
  {
    "id": 129,
    "type": "multiple",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动保障监察条例",
    "question": "劳动保障监察事项包括哪些？（多选）",
    "options": [
      "A. 订立劳动合同情况",
      "B. 遵守禁止使用童工规定情况",
      "C. 支付工资和执行最低工资标准情况",
      "D. 参加各项社会保险和缴费情况"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第十一条规定的九项监察事项。"
  },
  {
    "id": 130,
    "type": "multiple",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "安全生产法",
    "question": "哪些单位主要负责人和安全管理人员应考核合格？（多选）",
    "options": [
      "A. 危险物品生产单位",
      "B. 矿山单位",
      "C. 金属冶炼单位",
      "D. 建筑施工运输单位"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第二十七条规定的单位范围。"
  },
  {
    "id": 131,
    "type": "multiple",
    "category": "就业促进",
    "knowledgeArea": "劳动法律法规",
    "law": "就业促进法",
    "question": "用人单位不得以什么为由歧视劳动者？（多选）",
    "options": [
      "A. 民族",
      "B. 种族",
      "C. 性别",
      "D. 宗教信仰"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第二十六条规定的禁止歧视理由。"
  },
  {
    "id": 132,
    "type": "multiple",
    "category": "劳动基准",
    "knowledgeArea": "劳动法律法规",
    "law": "工资支付暂行规定",
    "question": "哪些情况不属克扣工资？（多选）",
    "options": [
      "A. 代扣代缴个人所得税",
      "B. 代扣代缴应由个人负担的社保费",
      "C. 法院判决代扣的抚养费",
      "D. 用人单位因迟到扣发工资"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "第十五条规定的不属克扣情形。"
  },
  {
    "id": 133,
    "type": "judge",
    "category": "劳动关系基础",
    "knowledgeArea": "公共基础知识",
    "law": "劳动法",
    "question": "《劳动法》禁止用人单位招用未满十八周岁的未成年人。",
    "options": [],
    "answer": false,
    "explanation": "第十五条禁止招用未满十六周岁，十六周岁以上可招用为未成年工。"
  },
  {
    "id": 134,
    "type": "judge",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "根据《劳动合同法》，建立劳动关系必须订立书面劳动合同。",
    "options": [],
    "answer": true,
    "explanation": "第十条规定建立劳动关系应当订立书面合同。"
  },
  {
    "id": 135,
    "type": "judge",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "试用期不包含在劳动合同期限内。",
    "options": [],
    "answer": false,
    "explanation": "第十九条第四款规定试用期包含在劳动合同期限内。"
  },
  {
    "id": 136,
    "type": "judge",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "社会保险法",
    "question": "职工基本养老保险由用人单位和职工共同缴纳。",
    "options": [],
    "answer": true,
    "explanation": "第十条规定双方共同缴纳基本养老保险费。"
  },
  {
    "id": 137,
    "type": "judge",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "上下班途中受非本人主要责任交通事故伤害不能认定工伤。",
    "options": [],
    "answer": false,
    "explanation": "第十四条第(六)项规定此种情形应当认定工伤。"
  },
  {
    "id": 138,
    "type": "judge",
    "category": "劳动基准",
    "knowledgeArea": "劳动法律法规",
    "law": "最低工资规定",
    "question": "最低工资标准每两年至少调整一次。",
    "options": [],
    "answer": true,
    "explanation": "第十条规定每两年至少调整一次。"
  },
  {
    "id": 139,
    "type": "judge",
    "category": "劳动基准",
    "knowledgeArea": "劳动法律法规",
    "law": "带薪年休假条例",
    "question": "享受寒暑假天数多于年休假的职工不享受当年年休假。",
    "options": [],
    "answer": true,
    "explanation": "第四条规定的五种不享受情形之一。"
  },
  {
    "id": 140,
    "type": "judge",
    "category": "特殊保护",
    "knowledgeArea": "劳动法律法规",
    "law": "女职工劳动保护特别规定",
    "question": "女职工生育享受产假98天。",
    "options": [],
    "answer": true,
    "explanation": "第七条规定生育享受98天产假。"
  },
  {
    "id": 141,
    "type": "judge",
    "category": "就业促进",
    "knowledgeArea": "劳动法律法规",
    "law": "就业促进法",
    "question": "用人单位可以以传染病病原携带者为由拒绝录用。",
    "options": [],
    "answer": false,
    "explanation": "第三十条规定不得以此为由拒绝录用。"
  },
  {
    "id": 142,
    "type": "judge",
    "category": "劳动安全",
    "knowledgeArea": "公共基础知识",
    "law": "安全生产法",
    "question": "生产经营单位的主要负责人是本单位安全生产第一责任人。",
    "options": [],
    "answer": true,
    "explanation": "第五条规定主要负责人是第一责任人。"
  },
  {
    "id": 143,
    "type": "judge",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "职业病防治法",
    "question": "职业病诊断机构不得拒绝劳动者职业病诊断要求。",
    "options": [],
    "answer": true,
    "explanation": "第四十三条规定不得拒绝。"
  },
  {
    "id": 144,
    "type": "judge",
    "category": "争议处理与监察",
    "knowledgeArea": "公共基础知识",
    "law": "劳动争议调解仲裁法",
    "question": "劳动争议仲裁按争议金额比例收费。",
    "options": [],
    "answer": false,
    "explanation": "第五十三条规定劳动争议仲裁不收费。"
  },
  {
    "id": 145,
    "type": "judge",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "农民工工资可用实物或有价证券替代货币支付。",
    "options": [],
    "answer": false,
    "explanation": "第十一条规定应以货币形式支付。"
  },
  {
    "id": 146,
    "type": "judge",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动法",
    "question": "延长工作时间一般每日不得超过三小时。",
    "options": [],
    "answer": false,
    "explanation": "第四十一条规定一般每日不超一小时，特殊情况下每日不超三小时但月不超三十六小时。"
  },
  {
    "id": 147,
    "type": "judge",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "竞业限制期限最长不得超过三年。",
    "options": [],
    "answer": false,
    "explanation": "第二十四条规定不得超过二年。"
  },
  {
    "id": 148,
    "type": "judge",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "社会保险法",
    "question": "生育保险费由用人单位和职工共同缴纳。",
    "options": [],
    "answer": false,
    "explanation": "第五十三条规定由用人单位缴纳，职工不缴。"
  },
  {
    "id": 149,
    "type": "judge",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "超一个月不满一年未签书面合同应每月支付二倍工资。",
    "options": [],
    "answer": true,
    "explanation": "第八十二条第一款明确规定。"
  },
  {
    "id": 150,
    "type": "judge",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "因醉酒导致伤亡应认定为工伤。",
    "options": [],
    "answer": false,
    "explanation": "第十六条明确规定醉酒不得认定工伤。"
  },
  {
    "id": 151,
    "type": "judge",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动保障监察条例",
    "question": "劳动保障监察员调查检查不得少于2人。",
    "options": [],
    "answer": true,
    "explanation": "第十六条规定不得少于2人。"
  },
  {
    "id": 152,
    "type": "judge",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "施工总承包单位应存储质量保证金专项用于支付农民工工资。",
    "options": [],
    "answer": false,
    "explanation": "第三十二条规定存储的是工资保证金。"
  },
  {
    "id": 153,
    "type": "judge",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动法",
    "question": "法定休假日和婚丧假期间用人单位应依法支付工资。",
    "options": [],
    "answer": true,
    "explanation": "第五十一条规定应依法支付工资。"
  },
  {
    "id": 154,
    "type": "judge",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "用人单位变更名称影响劳动合同履行。",
    "options": [],
    "answer": false,
    "explanation": "第三十三条规定不影响。"
  },
  {
    "id": 155,
    "type": "judge",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "职业病防治法",
    "question": "未进行离岗前职业健康检查可解除劳动合同。",
    "options": [],
    "answer": false,
    "explanation": "第三十五条规定不得解除或终止。"
  },
  {
    "id": 156,
    "type": "judge",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "社会保险法",
    "question": "跨统筹就业的养老保险关系随本人转移、年限累计。",
    "options": [],
    "answer": true,
    "explanation": "第十九条明确规定。"
  },
  {
    "id": 157,
    "type": "judge",
    "category": "就业促进",
    "knowledgeArea": "公共基础知识",
    "law": "就业促进法",
    "question": "国家实行就业前或上岗前接受必要职业教育制度。",
    "options": [],
    "answer": true,
    "explanation": "第四十六条规定。"
  },
  {
    "id": 158,
    "type": "judge",
    "category": "争议处理与监察",
    "knowledgeArea": "公共基础知识",
    "law": "劳动争议调解仲裁法",
    "question": "劳动争议处理程序为：协商-仲裁-诉讼，调解不是法定程序。",
    "options": [],
    "answer": false,
    "explanation": "第五条规定协商-调解-仲裁-诉讼，调解是法定程序之一。"
  },
  {
    "id": 159,
    "type": "judge",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "劳务派遣单位应订立三年以上固定期限劳动合同。",
    "options": [],
    "answer": false,
    "explanation": "第五十八条规定二年以上。"
  },
  {
    "id": 160,
    "type": "judge",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "安全生产法",
    "question": "不得因从业人员紧急避险而降低待遇或解除合同。",
    "options": [],
    "answer": true,
    "explanation": "第五十五条明确规定。"
  },
  {
    "id": 161,
    "type": "judge",
    "category": "特殊保护",
    "knowledgeArea": "公共基础知识",
    "law": "禁止使用童工规定",
    "question": "童工是指未满十八周岁的未成年人。",
    "options": [],
    "answer": false,
    "explanation": "第二条规定童工指未满十六周岁。"
  },
  {
    "id": 162,
    "type": "judge",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "人工费用拨付周期不得超过2个月。",
    "options": [],
    "answer": false,
    "explanation": "第二十四条第二款规定不得超过1个月。"
  },
  {
    "id": 163,
    "type": "fill",
    "category": "劳动关系基础",
    "knowledgeArea": "公共基础知识",
    "law": "劳动法",
    "question": "根据《劳动法》，禁止用人单位招用未满____周岁的未成年人。",
    "options": [],
    "answer": "十六",
    "explanation": "第十五条规定禁止招用未满十六周岁。"
  },
  {
    "id": 164,
    "type": "fill",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "已建立劳动关系未签书面合同应自用工之日起____内订立。",
    "options": [],
    "answer": "一个月",
    "explanation": "第十条规定应自用工之日起一个月内订立。"
  },
  {
    "id": 165,
    "type": "fill",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "劳动者提前____日书面通知用人单位可解除劳动合同。",
    "options": [],
    "answer": "三十",
    "explanation": "第三十七条。"
  },
  {
    "id": 166,
    "type": "fill",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "竞业限制的期限不得超过____年。",
    "options": [],
    "answer": "二",
    "explanation": "第二十四条。"
  },
  {
    "id": 167,
    "type": "fill",
    "category": "社会保险",
    "knowledgeArea": "公共基础知识",
    "law": "社会保险法",
    "question": "参加基本养老保险累计缴费满____年可按月领取。",
    "options": [],
    "answer": "十五",
    "explanation": "第十六条。"
  },
  {
    "id": 168,
    "type": "fill",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "停工留薪期一般不超过____个月。",
    "options": [],
    "answer": "十二",
    "explanation": "第三十三条。"
  },
  {
    "id": 169,
    "type": "fill",
    "category": "劳动基准",
    "knowledgeArea": "劳动法律法规",
    "law": "最低工资规定",
    "question": "最低工资标准每____年至少调整一次。",
    "options": [],
    "answer": "两",
    "explanation": "第十条。"
  },
  {
    "id": 170,
    "type": "fill",
    "category": "特殊保护",
    "knowledgeArea": "劳动法律法规",
    "law": "女职工劳动保护特别规定",
    "question": "女职工生育享受____天产假。",
    "options": [],
    "answer": "98",
    "explanation": "第七条。"
  },
  {
    "id": 171,
    "type": "fill",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动法",
    "question": "法定休假日工作支付不低于工资的百分之____。",
    "options": [],
    "answer": "三百",
    "explanation": "第四十四条。"
  },
  {
    "id": 172,
    "type": "fill",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动争议调解仲裁法",
    "question": "劳动争议申请仲裁的时效期间为____年。",
    "options": [],
    "answer": "一",
    "explanation": "第二十七条。"
  },
  {
    "id": 173,
    "type": "fill",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "违法解除合同应支付经济补偿标准____倍赔偿金。",
    "options": [],
    "answer": "二",
    "explanation": "第八十七条。"
  },
  {
    "id": 174,
    "type": "fill",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动法",
    "question": "每日工作时间不超过____小时。",
    "options": [],
    "answer": "八",
    "explanation": "第三十六条。"
  },
  {
    "id": 175,
    "type": "fill",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "一次性工亡补助金为上一年度全国城镇居民人均可支配收入的____倍。",
    "options": [],
    "answer": "20",
    "explanation": "第三十九条。"
  },
  {
    "id": 176,
    "type": "fill",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "农民工工资支付台账至少保存____年。",
    "options": [],
    "answer": "3",
    "explanation": "第十五条。"
  },
  {
    "id": 177,
    "type": "fill",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动保障监察条例",
    "question": "违法行为____年内未被发现不再查处。",
    "options": [],
    "answer": "2",
    "explanation": "第二十条。"
  },
  {
    "id": 178,
    "type": "fill",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "人工费用拨付周期不得超过____个月。",
    "options": [],
    "answer": "1",
    "explanation": "第二十四条。"
  },
  {
    "id": 179,
    "type": "fill",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "试用期工资不得低于约定工资的百分之____。",
    "options": [],
    "answer": "八十",
    "explanation": "第二十条。"
  },
  {
    "id": 180,
    "type": "fill",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动争议调解仲裁法",
    "question": "仲裁委收到申请之日起____日内应决定是否受理。",
    "options": [],
    "answer": "五",
    "explanation": "第二十九条。"
  },
  {
    "id": 181,
    "type": "fill",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "安全生产法",
    "question": "特种作业人员须取得____方可上岗。",
    "options": [],
    "answer": "相应资格",
    "explanation": "第三十条。"
  },
  {
    "id": 182,
    "type": "fill",
    "category": "劳动基准",
    "knowledgeArea": "劳动法律法规",
    "law": "带薪年休假条例",
    "question": "工作满1年不满10年的年休假为____天。",
    "options": [],
    "answer": "5",
    "explanation": "第三条。"
  },
  {
    "id": 183,
    "type": "short",
    "category": "劳动关系基础",
    "knowledgeArea": "公共基础知识",
    "law": "劳动法",
    "question": "请简述《劳动法》规定的劳动者享有的基本权利。",
    "options": [],
    "answer": [
      "平等就业和选择职业的权利",
      "取得劳动报酬的权利",
      "休息休假的权利",
      "获得劳动安全卫生保护的权利",
      "接受职业技能培训的权利",
      "享受社会保险和福利的权利",
      "提请劳动争议处理的权利",
      "法律规定的其他劳动权利"
    ],
    "explanation": "《劳动法》第三条。"
  },
  {
    "id": 184,
    "type": "short",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "请简述应当订立无固定期限劳动合同的三种法定情形。",
    "options": [],
    "answer": [
      "连续在用人单位工作满十年",
      "用人单位初次实行合同制或国企改制重签合同时连续工作满十年且距退休不足十年",
      "连续订立二次固定期限合同且劳动者无第三十九条和第四十条第一、二项情形续订的"
    ],
    "explanation": "第十四条。"
  },
  {
    "id": 185,
    "type": "short",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "请简述用人单位可单方解除劳动合同的情形。",
    "options": [],
    "answer": [
      "试用期被证明不符合录用条件",
      "严重违反规章制度",
      "严重失职营私舞弊造成重大损害",
      "同时与其他单位建立劳动关系严重影响本职工作且拒不改正",
      "欺诈胁迫使对方违背真实意思订立合同致合同无效",
      "被依法追究刑事责任"
    ],
    "explanation": "第三十九条六种情形。"
  },
  {
    "id": 186,
    "type": "short",
    "category": "社会保险",
    "knowledgeArea": "公共基础知识",
    "law": "社会保险法",
    "question": "请简述我国五项社会保险制度。",
    "options": [],
    "answer": [
      "基本养老保险：保障退休后基本生活",
      "基本医疗保险：保障基本医疗需求",
      "工伤保险：保障因工伤获得救治和补偿",
      "失业保险：保障失业期间基本生活",
      "生育保险：保障女职工生育期间基本生活和医疗"
    ],
    "explanation": "第二条规定五险。"
  },
  {
    "id": 187,
    "type": "short",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "请简述应当认定为工伤的主要情形。",
    "options": [],
    "answer": [
      "工作时间场所因工作原因受事故伤害",
      "工作时间前后从事预备收尾工作受伤",
      "工作时间场所因履职受暴力伤害",
      "患职业病",
      "因工外出受伤害或下落不明",
      "上下班途中非本人主要责任交通事故",
      "法律法规规定的其他情形"
    ],
    "explanation": "第十四条七种情形。"
  },
  {
    "id": 188,
    "type": "short",
    "category": "特殊保护",
    "knowledgeArea": "劳动法律法规",
    "law": "女职工劳动保护特别规定",
    "question": "请简述女职工孕产哺三期保护措施要点。",
    "options": [],
    "answer": [
      "孕期：不能适应原劳动可减轻或调岗；孕七月以上不加班不夜班；产检时间计入劳动时间",
      "产期：98天产假，难产加15天，多胞胎每多一个加15天；流产未满4月15天，满4月42天",
      "哺乳期：未满1周岁每天1小时哺乳时间；不加班不夜班"
    ],
    "explanation": "第六、七、九条。"
  },
  {
    "id": 189,
    "type": "short",
    "category": "争议处理与监察",
    "knowledgeArea": "公共基础知识",
    "law": "劳动争议调解仲裁法",
    "question": "请简述劳动争议处理程序的四个环节。",
    "options": [],
    "answer": [
      "协商：自行协商或请第三方协商达成和解",
      "调解：向劳动争议调解组织申请调解",
      "仲裁：调解不成向仲裁委申请仲裁（前置程序）",
      "诉讼：对裁决不服（除终局外）向法院起诉（一审至二审）"
    ],
    "explanation": "第四、五条规定了完整程序。"
  },
  {
    "id": 190,
    "type": "short",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "请简述工程建设领域保障工资支付的主要制度。",
    "options": [],
    "answer": [
      "农民工工资专用账户制度",
      "工资保证金制度",
      "实名制管理制度",
      "施工总承包单位代发工资制度",
      "维权信息告示牌制度"
    ],
    "explanation": "第四章规定的专门制度。"
  },
  {
    "id": 191,
    "type": "short",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "安全生产法",
    "question": "请简述生产经营单位主要负责人的七项安全职责。",
    "options": [],
    "answer": [
      "建立健全全员安全责任制",
      "组织制定实施安全规章和操作规程",
      "组织制定实施安全教育培训计划",
      "保证安全投入有效实施",
      "建立双重预防机制",
      "组织制定实施应急救援预案",
      "及时如实报告事故"
    ],
    "explanation": "第二十一条。"
  },
  {
    "id": 192,
    "type": "short",
    "category": "劳动安全",
    "knowledgeArea": "劳动法律法规",
    "law": "职业病防治法",
    "question": "请简述劳动者职业卫生保护权利。",
    "options": [],
    "answer": [
      "获得职业卫生教育培训",
      "获得职业健康检查和职业病防治服务",
      "了解工作场所危害因素和防护措施",
      "要求提供防护设施和个人防护用品",
      "对违法行为批评检举控告",
      "拒绝违章指挥和无防护措施的作业",
      "参与职业卫生民主管理"
    ],
    "explanation": "第三十九条七项权利。"
  },
  {
    "id": 193,
    "type": "short",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "请简述劳务派遣的三性要求及含义。",
    "options": [],
    "answer": [
      "临时性：存续时间不超过六个月",
      "辅助性：为主营业务提供服务的非主营岗位",
      "替代性：因脱产学习休假等原因可由他人替代的岗位"
    ],
    "explanation": "第六十六条。"
  },
  {
    "id": 194,
    "type": "short",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动保障监察条例",
    "question": "请简述劳动保障监察的主要事项。",
    "options": [],
    "answer": [
      "制定内部劳动保障规章制度情况",
      "订立劳动合同情况",
      "遵守禁止使用童工规定情况",
      "遵守女职工和未成年工特殊保护情况",
      "遵守工作时间和休息休假规定情况",
      "支付工资和执行最低工资标准情况",
      "参加社保和缴费情况",
      "职业介绍培训考核鉴定机构遵守规定情况"
    ],
    "explanation": "第十一条九项事项。"
  },
  {
    "id": 195,
    "type": "short",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "社会保险法",
    "question": "请简述养老保险关系转移接续规定。",
    "options": [],
    "answer": [
      "个人跨统筹就业关系随本人转移",
      "缴费年限累计计算",
      "达到退休年龄分段计算统一支付"
    ],
    "explanation": "第十九条。"
  },
  {
    "id": 196,
    "type": "short",
    "category": "就业促进",
    "knowledgeArea": "劳动法律法规",
    "law": "就业促进法",
    "question": "请简述《就业促进法》对就业歧视的禁止性规定。",
    "options": [],
    "answer": [
      "不得以性别为由拒绝录用妇女或提高标准",
      "不得歧视残疾人",
      "不得以传染病病原携带者为由拒绝录用",
      "不得对农村劳动者进城就业设歧视性限制",
      "不得以民族种族宗教信仰为由歧视"
    ],
    "explanation": "第三章公平就业规定。"
  },
  {
    "id": 197,
    "type": "short",
    "category": "社会保险",
    "knowledgeArea": "劳动法律法规",
    "law": "工伤保险条例",
    "question": "请简述不得认定工伤的三种情形。",
    "options": [],
    "answer": [
      "故意犯罪",
      "醉酒或者吸毒",
      "自残或者自杀"
    ],
    "explanation": "第十六条。"
  },
  {
    "id": 198,
    "type": "short",
    "category": "特殊保护",
    "knowledgeArea": "劳动法律法规",
    "law": "禁止使用童工规定",
    "question": "请简述使用童工的法律责任。",
    "options": [],
    "answer": [
      "每使用一名每月处5000元罚款",
      "责令限期送回原居住地费用由用人单位承担",
      "逾期不改吊销营业执照",
      "拐骗强迫童工劳动或从事危险劳动追究刑事责任"
    ],
    "explanation": "第六条、第十一条。"
  },
  {
    "id": 199,
    "type": "short",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动合同法",
    "question": "请简述经济补偿金计算标准。",
    "options": [],
    "answer": [
      "按工作年限每年支付一个月工资",
      "六个月以上不满一年按一年计算",
      "不满六个月支付半个月工资",
      "月工资高于当地职工月均工资三倍按三倍封顶",
      "高收入者支付年限最高不超十二年"
    ],
    "explanation": "第四十七条。"
  },
  {
    "id": 200,
    "type": "short",
    "category": "劳动关系基础",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动法",
    "question": "请简述延长工作时间工资报酬支付标准。",
    "options": [],
    "answer": [
      "延长工作时间：不低于150%",
      "休息日工作不能补休：不低于200%",
      "法定休假日工作：不低于300%"
    ],
    "explanation": "第四十四条。"
  },
  {
    "id": 201,
    "type": "short",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "劳动争议调解仲裁法",
    "question": "请简述一裁终局制度的主要内容。",
    "options": [],
    "answer": [
      "范围：小额劳动争议和国标争议",
      "效力：裁决作出即生效",
      "劳动者救济：十五日内可起诉",
      "用人单位救济：有六种法定情形三十日内可申请中级法院撤销"
    ],
    "explanation": "第四十七至四十九条。"
  },
  {
    "id": 202,
    "type": "short",
    "category": "争议处理与监察",
    "knowledgeArea": "劳动法律法规",
    "law": "保障农民工工资支付条例",
    "question": "请简述农民工工资清偿责任主体规则。",
    "options": [],
    "answer": [
      "用人单位拖欠由用人单位清偿",
      "分包单位拖欠由总承包先行清偿再追偿",
      "转包拖欠由总承包先行清偿再追偿",
      "发包给个人或不具资格单位导致拖欠由建设单位或总承包清偿",
      "合并分立由承继单位清偿",
      "被关闭撤销注销前应清偿未清偿的由实际控制人主要出资人连带清偿"
    ],
    "explanation": "第三章和第四章。"
  },
  {
    "id": 203,
    "type": "multiple",
    "category": "劳动关系基础",
    "law": "劳动合同法",
    "knowledgeArea": "劳动法律法规",
    "question": "用人单位哪些规章制度事项应经职工代表大会或全体职工讨论？（多选）",
    "options": [
      "A. 劳动报酬",
      "B. 工作时间",
      "C. 休息休假",
      "D. 劳动安全卫生"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "《劳动合同法》第四条规定的重大事项。"
  },
  {
    "id": 204,
    "type": "multiple",
    "category": "社会保险",
    "law": "社会保险法",
    "knowledgeArea": "劳动法律法规",
    "question": "哪些情况发生的医疗费用不纳入基本医疗保险基金支付范围？（多选）",
    "options": [
      "A. 应当从工伤保险基金中支付的",
      "B. 应当由第三人负担的",
      "C. 应当由公共卫生负担的",
      "D. 在境外就医的"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "《社会保险法》第三十条规定的四种情形。"
  },
  {
    "id": 205,
    "type": "multiple",
    "category": "劳动关系基础",
    "law": "劳动合同法实施条例",
    "knowledgeArea": "劳动法律法规",
    "question": "哪些情形用人单位可与劳动者约定违约金？（多选）",
    "options": [
      "A. 违反服务期约定",
      "B. 违反竞业限制约定",
      "C. 劳动者提前三十日通知解除合同",
      "D. 劳动者不能胜任工作"
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "《劳动合同法》第二十二、二十三条仅两种可约定违约金情形。"
  },
  {
    "id": 206,
    "type": "multiple",
    "category": "劳动基准",
    "law": "职工带薪年休假条例",
    "knowledgeArea": "劳动法律法规",
    "question": "哪些情形下职工不享受当年年休假？（多选）",
    "options": [
      "A. 依法享受寒暑假且天数多于年休假",
      "B. 请事假累计20天以上且单位不扣工资",
      "C. 累计工作满1年不满10年请病假2个月以上",
      "D. 累计工作满20年以上请病假4个月以上"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第四条规定的四种情形。"
  },
  {
    "id": 207,
    "type": "multiple",
    "category": "争议处理与监察",
    "law": "劳动保障监察条例",
    "knowledgeArea": "劳动法律法规",
    "question": "劳动保障监察员有哪些调查检查权力？（多选）",
    "options": [
      "A. 进入用人单位劳动场所检查",
      "B. 询问有关人员",
      "C. 查封扣押相关证据或相关场所",
      "D. 查询用人单位银行账户"
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "第十五条规定了ABC三种权力，D不是本条列举权力。"
  },
  {
    "id": 208,
    "type": "multiple",
    "category": "劳动安全",
    "law": "安全生产法",
    "knowledgeArea": "劳动法律法规",
    "question": "从业人员安全生产方面的权利包括哪些？（多选）",
    "options": [
      "A. 知情权和建议权",
      "B. 批评检举控告权",
      "C. 拒绝违章指挥和强令冒险作业权",
      "D. 紧急情况停止作业和撤离权"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "第五十二条至第五十五条规定的权利。"
  },
  {
    "id": 209,
    "type": "multiple",
    "category": "就业促进",
    "law": "就业促进法",
    "knowledgeArea": "劳动法律法规",
    "question": "县级以上人民政府应建立健全哪些促进就业制度？（多选）",
    "options": [
      "A. 政策支持体系",
      "B. 公平就业制度",
      "C. 就业服务和管理体系",
      "D. 职业教育和培训制度"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "《就业促进法》第二章至第五章分别规定了这些制度。"
  }
];

const ALL_LAWS = [
    {
      "id": 1,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 1,
      "text": "为了保护劳动者的合法权益，调整劳动关系，建立和维护适应社会主义市场经济的劳动制度，促进经济发展和社会进步，根据宪法，制定本法。",
      "blankText": "为了保护劳动者的合法权益，调整劳动关系，建立和维护适应社会主义市场经济的劳动制度，促进经济发展和社会进步，根据宪法，制定本法。"
    },
    {
      "id": 2,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 2,
      "text": "在中华人民共和国境内的企业、个体经济组织（以下统称用人单位）和与之形成劳动关系的劳动者，适用本法。\n国家机关、事业组织、社会团体和与之建立劳动合同关系的劳动者，依照本法执行。",
      "blankText": "在中华人民共和国境内的企业、个体经济组织（以下统称用人单位）和与之形成劳动关系的劳动者，适用本法。\n国家机关、事业组织、社会团体和与之建立劳动合同关系的劳动者，依照本法执行。"
    },
    {
      "id": 3,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 3,
      "text": "劳动者享有平等就业和选择职业的权利、取得劳动报酬的权利、休息休假的权利、获得劳动安全卫生保护的权利、接受职业技能培训的权利、享受社会保险和福利的权利、提请劳动争议处理的权利以及法律规定的其他劳动权利。\n劳动者应当完成劳动任务，提高职业技能，执行劳动安全卫生规程，遵守劳动纪律和职业道德。",
      "blankText": "劳动者享有平等就业和选择职业的权利、取得劳动报酬的权利、休息休假的权利、获得劳动安全卫生保护的权利、接受职业技能培训的权利、享受社会保险和福利的权利、提请劳动争议处理的权利以及法律规定的其他劳动权利。\n劳动者应当完成劳动任务，提高职业技能，执行劳动安全卫生规程，遵守劳动纪律和职业道德。"
    },
    {
      "id": 4,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 4,
      "text": "用人单位应当依法建立和完善规章制度，保障劳动者享有劳动权利和履行劳动义务。",
      "blankText": "用人单位应当依法建立和完善规章制度，保障劳动者享有劳动权利和履行劳动义务。"
    },
    {
      "id": 5,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 5,
      "text": "国家采取各种措施，促进劳动就业，发展职业教育，制定劳动标准，调节社会收入，完善社会保险，协调劳动关系，逐步提高劳动者的生活水平。",
      "blankText": "国家采取各种措施，促进劳动就业，发展职业教育，制定劳动标准，调节社会收入，完善社会保险，协调劳动关系，逐步提高劳动者的生活水平。"
    },
    {
      "id": 6,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 6,
      "text": "国家提倡劳动者参加社会义务劳动，开展劳动竞赛和合理化建议活动，鼓励和保护劳动者进行科学研究、技术革新和发明创造，表彰和奖励劳动模范和先进工作者。",
      "blankText": "国家提倡劳动者参加社会义务劳动，开展劳动竞赛和合理化建议活动，鼓励和保护劳动者进行科学研究、技术革新和发明创造，表彰和奖励劳动模范和先进工作者。"
    },
    {
      "id": 7,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 7,
      "text": "劳动者有权依法参加和组织工会。\n工会代表和维护劳动者的合法权益，依法独立自主地开展活动。",
      "blankText": "劳动者有权依法参加和组织工会。\n工会代表和维护劳动者的合法权益，依法独立自主地开展活动。"
    },
    {
      "id": 8,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 8,
      "text": "劳动者依照法律规定，通过职工大会、职工代表大会或者其他形式，参与民主管理或者就保护劳动者合法权益与用人单位进行平等协商。",
      "blankText": "劳动者依照法律规定，通过职工大会、职工代表大会或者其他形式，参与民主管理或者就保护劳动者合法权益与用人单位进行平等协商。"
    },
    {
      "id": 9,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 9,
      "text": "国务院劳动行政部门主管全国劳动工作。\n县级以上地方人民政府劳动行政部门主管本行政区域内的劳动工作。",
      "blankText": "国务院劳动行政部门主管全国劳动工作。\n县级以上地方人民政府劳动行政部门主管本行政区域内的劳动工作。"
    },
    {
      "id": 10,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 10,
      "text": "国家通过促进经济和社会发展，创造就业条件，扩大就业机会。\n国家鼓励企业、事业组织、社会团体在法律、行政法规规定的范围内兴办产业或者拓展经营，增加就业。\n国家支持劳动者自愿组织起来就业和从事个体经营实现就业。",
      "blankText": "国家通过促进经济和社会发展，创造就业条件，扩大就业机会。\n国家鼓励企业、事业组织、社会团体在法律、行政法规规定的范围内兴办产业或者拓展经营，增加就业。\n国家支持劳动者自愿组织起来就业和从事个体经营实现就业。"
    },
    {
      "id": 11,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 11,
      "text": "地方各级人民政府应当采取措施，发展多种类型的职业介绍机构，提供就业服务。",
      "blankText": "地方各级人民政府应当采取措施，发展多种类型的职业介绍机构，提供就业服务。"
    },
    {
      "id": 12,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 12,
      "text": "劳动者就业，不因民族、种族、性别、宗教信仰不同而受歧视。",
      "blankText": "劳动者就业，不因民族、种族、性别、宗教信仰不同而受歧视。"
    },
    {
      "id": 13,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 13,
      "text": "妇女享有与男子平等的就业权利。在录用职工时，除国家规定的不适合妇女的工种或者岗位外，不得以性别为由拒绝录用妇女或者提高对妇女的录用标准。",
      "blankText": "妇女享有与男子平等的就业权利。在录用职工时，除国家规定的不适合妇女的工种或者岗位外，不得以性别为由拒绝录用妇女或者提高对妇女的录用标准。"
    },
    {
      "id": 14,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 14,
      "text": "残疾人、少数民族人员、退出现役的军人的就业，法律、法规有特别规定的，从其规定。",
      "blankText": "残疾人、少数民族人员、退出现役的军人的就业，法律、法规有特别规定的，从其规定。"
    },
    {
      "id": 15,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 15,
      "text": "禁止用人单位招用未满十六周岁的未成年人。\n文艺、体育和特种工艺单位招用未满十六周岁的未成年人，必须遵守国家有关规定，并保障其接受义务教育的权利。",
      "blankText": "禁止用人单位招用未满十六周岁的未成年人。\n文艺、体育和特种工艺单位招用未满十六周岁的未成年人，必须遵守国家有关规定，并保障其接受义务教育的权利。"
    },
    {
      "id": 16,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 16,
      "text": "劳动合同是劳动者与用人单位确立劳动关系、明确双方权利和义务的协议。\n建立劳动关系应当订立劳动合同。",
      "blankText": "劳动合同是劳动者与用人单位确立劳动关系、明确双方权利和义务的协议。\n建立劳动关系应当订立劳动合同。"
    },
    {
      "id": 17,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 17,
      "text": "订立和变更劳动合同，应当遵循平等自愿、协商一致的原则，不得违反法律、行政法规的规定。\n劳动合同依法订立即具有法律约束力，当事人必须履行劳动合同规定的义务。",
      "blankText": "订立和变更劳动合同，应当遵循平等自愿、协商一致的原则，不得违反法律、行政法规的规定。\n劳动合同依法订立即具有法律约束力，当事人必须履行劳动合同规定的义务。"
    },
    {
      "id": 18,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 18,
      "text": "下列劳动合同无效：\n（一）违反法律、行政法规的劳动合同；\n（二）采取欺诈、威胁等手段订立的劳动合同。\n无效的劳动合同，从订立的时候起，就没有法律约束力。确认劳动合同部分无效的，如果不影响其余部分的效力，其余部分仍然有效。\n劳动合同的无效，由劳动争议仲裁委员会或者人民法院确认。",
      "blankText": "下列劳动合同无效：\n（一）违反法律、行政法规的劳动合同；\n（二）采取欺诈、威胁等手段订立的劳动合同。\n无效的劳动合同，从订立的时候起，就没有法律约束力。确认劳动合同部分无效的，如果不影响其余部分的效力，其余部分仍然有效。\n劳动合同的无效，由劳动争议仲裁委员会或者人民法院确认。"
    },
    {
      "id": 19,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 19,
      "text": "劳动合同应当以书面形式订立，并具备以下条款：\n（一）劳动合同期限；\n（二）工作内容；\n（三）劳动保护和劳动条件；\n（四）劳动报酬；\n（五）劳动纪律；\n（六）劳动合同终止的条件；\n（七）违反劳动合同的责任。\n劳动合同除前款规定的必备条款外，当事人可以协商约定其他内容。",
      "blankText": "劳动合同应当以书面形式订立，并具备以下条款：\n（一）劳动合同期限；\n（二）工作内容；\n（三）劳动保护和劳动条件；\n（四）劳动报酬；\n（五）劳动纪律；\n（六）劳动合同终止的条件；\n（七）违反劳动合同的责任。\n劳动合同除前款规定的必备条款外，当事人可以协商约定其他内容。"
    },
    {
      "id": 20,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 20,
      "text": "劳动合同的期限分为有固定期限、无固定期限和以完成一定的工作为期限。\n劳动者在同一用人单位连续工作满十年以上，当事人双方同意续延劳动合同的，如果劳动者提出订立无固定期限的劳动合同，应当订立无固定期限的劳动合同。",
      "blankText": "劳动合同的期限分为有固定期限、无固定期限和以完成一定的工作为期限。\n劳动者在同一用人单位连续工作满十年以上，当事人双方同意续延劳动合同的，如果劳动者提出订立无固定期限的劳动合同，应当订立无固定期限的劳动合同。"
    },
    {
      "id": 21,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 21,
      "text": "劳动合同可以约定试用期。试用期最长不得超过六个月。",
      "blankText": "劳动合同可以约定试用期。试用期最长不得超过六个月。"
    },
    {
      "id": 22,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 22,
      "text": "劳动合同当事人可以在劳动合同中约定保守用人单位商业秘密的有关事项。",
      "blankText": "劳动合同当事人可以在劳动合同中约定保守用人单位商业秘密的有关事项。"
    },
    {
      "id": 23,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 23,
      "text": "劳动合同期满或者当事人约定的劳动合同终止条件出现，劳动合同即行终止。",
      "blankText": "劳动合同期满或者当事人约定的劳动合同终止条件出现，劳动合同即行终止。"
    },
    {
      "id": 24,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 24,
      "text": "经劳动合同当事人协商一致，劳动合同可以解除。",
      "blankText": "经劳动合同当事人协商一致，劳动合同可以解除。"
    },
    {
      "id": 25,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 25,
      "text": "劳动者有下列情形之一的，用人单位可以解除劳动合同：\n（一）在试用期间被证明不符合录用条件的；\n（二）严重违反劳动纪律或者用人单位规章制度的；\n（三）严重失职，营私舞弊，对用人单位利益造成重大损害的；\n（四）被依法追究刑事责任的。",
      "blankText": "劳动者有下列情形之一的，用人单位可以解除劳动合同：\n（一）在试用期间被证明不符合录用条件的；\n（二）严重违反劳动纪律或者用人单位规章制度的；\n（三）严重失职，营私舞弊，对用人单位利益造成重大损害的；\n（四）被依法追究刑事责任的。"
    },
    {
      "id": 26,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 26,
      "text": "有下列情形之一的，用人单位可以解除劳动合同，但是应当提前三十日以书面形式通知劳动者本人：\n（一）劳动者患病或者非因工负伤，医疗期满后，不能从事原工作也不能从事由用人单位另行安排的工作的；\n（二）劳动者不能胜任工作，经过培训或者调整工作岗位，仍不能胜任工作的；\n（三）劳动合同订立时所依据的客观情况发生重大变化，致使原劳动合同无法履行，经当事人协商不能就变更劳动合同达成协议的。",
      "blankText": "有下列情形之一的，用人单位可以解除劳动合同，但是应当提前三十日以书面形式通知劳动者本人：\n（一）劳动者患病或者非因工负伤，医疗期满后，不能从事原工作也不能从事由用人单位另行安排的工作的；\n（二）劳动者不能胜任工作，经过培训或者调整工作岗位，仍不能胜任工作的；\n（三）劳动合同订立时所依据的客观情况发生重大变化，致使原劳动合同无法履行，经当事人协商不能就变更劳动合同达成协议的。"
    },
    {
      "id": 27,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 27,
      "text": "用人单位濒临破产进行法定整顿期间或者生产经营状况发生严重困难，确需裁减人员的，应当提前三十日向工会或者全体职工说明情况，听取工会或者职工的意见，经向劳动行政部门报告后，可以裁减人员。\n用人单位依据本条规定裁减人员，在六个月内录用人员的，应当优先录用被裁减的人员。",
      "blankText": "用人单位濒临破产进行法定整顿期间或者生产经营状况发生严重困难，确需裁减人员的，应当提前三十日向工会或者全体职工说明情况，听取工会或者职工的意见，经向劳动行政部门报告后，可以裁减人员。\n用人单位依据本条规定裁减人员，在六个月内录用人员的，应当优先录用被裁减的人员。"
    },
    {
      "id": 28,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 28,
      "text": "用人单位依据本法第二十四条、第二十六条、第二十七条的规定解除劳动合同的，应当依照国家有关规定给予经济补偿。",
      "blankText": "用人单位依据本法第二十四条、第二十六条、第二十七条的规定解除劳动合同的，应当依照国家有关规定给予经济补偿。"
    },
    {
      "id": 29,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 29,
      "text": "劳动者有下列情形之一的，用人单位不得依据本法第二十六条、第二十七条的规定解除劳动合同：\n（一）患职业病或者因工负伤并被确认丧失或者部分丧失劳动能力的；\n（二）患病或者负伤，在规定的医疗期内的；\n（三）女职工在孕期、产期、哺乳期内的；\n（四）法律、行政法规规定的其他情形。",
      "blankText": "劳动者有下列情形之一的，用人单位不得依据本法第二十六条、第二十七条的规定解除劳动合同：\n（一）患职业病或者因工负伤并被确认丧失或者部分丧失劳动能力的；\n（二）患病或者负伤，在规定的医疗期内的；\n（三）女职工在孕期、产期、哺乳期内的；\n（四）法律、行政法规规定的其他情形。"
    },
    {
      "id": 30,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 30,
      "text": "用人单位解除劳动合同，工会认为不适当的，有权提出意见。如果用人单位违反法律、法规或者劳动合同，工会有权要求重新处理；劳动者申请仲裁或者提起诉讼的，工会应当依法给予支持和帮助。",
      "blankText": "用人单位解除劳动合同，工会认为不适当的，有权提出意见。如果用人单位违反法律、法规或者劳动合同，工会有权要求重新处理；劳动者申请仲裁或者提起诉讼的，工会应当依法给予支持和帮助。"
    },
    {
      "id": 31,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 31,
      "text": "劳动者解除劳动合同，应当提前三十日以书面形式通知用人单位。",
      "blankText": "劳动者解除劳动合同，应当提前三十日以书面形式通知用人单位。"
    },
    {
      "id": 32,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 32,
      "text": "有下列情形之一的，劳动者可以随时通知用人单位解除劳动合同：\n（一）在试用期内的；\n（二）用人单位以暴力、威胁或者非法限制人身自由的手段强迫劳动的；\n（三）用人单位未按照劳动合同约定支付劳动报酬或者提供劳动条件的。",
      "blankText": "有下列情形之一的，劳动者可以随时通知用人单位解除劳动合同：\n（一）在试用期内的；\n（二）用人单位以暴力、威胁或者非法限制人身自由的手段强迫劳动的；\n（三）用人单位未按照劳动合同约定支付劳动报酬或者提供劳动条件的。"
    },
    {
      "id": 33,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 33,
      "text": "企业职工一方与企业可以就劳动报酬、工作时间、休息休假、劳动安全卫生、保险福利等事项，签订集体合同。集体合同草案应当提交职工代表大会或者全体职工讨论通过。\n集体合同由工会代表职工与企业签订；没有建立工会的企业，由职工推举的代表与企业签订。",
      "blankText": "企业职工一方与企业可以就劳动报酬、工作时间、休息休假、劳动安全卫生、保险福利等事项，签订集体合同。集体合同草案应当提交职工代表大会或者全体职工讨论通过。\n集体合同由工会代表职工与企业签订；没有建立工会的企业，由职工推举的代表与企业签订。"
    },
    {
      "id": 34,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 34,
      "text": "集体合同签订后应当报送劳动行政部门；劳动行政部门自收到集体合同文本之日起十五日内未提出异议的，集体合同即行生效。",
      "blankText": "集体合同签订后应当报送劳动行政部门；劳动行政部门自收到集体合同文本之日起十五日内未提出异议的，集体合同即行生效。"
    },
    {
      "id": 35,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 35,
      "text": "依法签订的集体合同对企业和企业全体职工具有约束力。职工个人与企业订立的劳动合同中劳动条件和劳动报酬等标准不得低于集体合同的规定。",
      "blankText": "依法签订的集体合同对企业和企业全体职工具有约束力。职工个人与企业订立的劳动合同中劳动条件和劳动报酬等标准不得低于集体合同的规定。"
    },
    {
      "id": 36,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 36,
      "text": "国家实行劳动者每日工作时间不超过八小时、平均每周工作时间不超过四十四小时的工时制度。",
      "blankText": "国家实行劳动者每日工作时间不超过八小时、平均每周工作时间不超过四十四小时的工时制度。"
    },
    {
      "id": 37,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 37,
      "text": "对实行计件工作的劳动者，用人单位应当根据本法第三十六条规定的工时制度合理确定其劳动定额和计件报酬标准。",
      "blankText": "对实行计件工作的劳动者，用人单位应当根据本法第三十六条规定的工时制度合理确定其劳动定额和计件报酬标准。"
    },
    {
      "id": 38,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 38,
      "text": "用人单位应当保证劳动者每周至少休息一日。",
      "blankText": "用人单位应当保证劳动者每周至少休息一日。"
    },
    {
      "id": 39,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 39,
      "text": "企业因生产特点不能实行本法第三十六条、第三十八条规定的，经劳动行政部门批准，可以实行其他工作和休息办法。",
      "blankText": "企业因生产特点不能实行本法第三十六条、第三十八条规定的，经劳动行政部门批准，可以实行其他工作和休息办法。"
    },
    {
      "id": 40,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 40,
      "text": "用人单位在下列节日期间应当依法安排劳动者休假：\n（一）元旦；\n（二）春节；\n（三）国际劳动节；\n（四）国庆节；\n（五）法律、法规规定的其他休假节日。",
      "blankText": "用人单位在下列节日期间应当依法安排劳动者休假：\n（一）元旦；\n（二）春节；\n（三）国际劳动节；\n（四）国庆节；\n（五）法律、法规规定的其他休假节日。"
    },
    {
      "id": 41,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 41,
      "text": "用人单位由于生产经营需要，经与工会和劳动者协商后可以延长工作时间，一般每日不得超过一小时；因特殊原因需要延长工作时间的，在保障劳动者身体健康的条件下延长工作时间每日不得超过三小时，但是每月不得超过三十六小时。",
      "blankText": "用人单位由于生产经营需要，经与工会和劳动者协商后可以延长工作时间，一般每日不得超过一小时；因特殊原因需要延长工作时间的，在保障劳动者身体健康的条件下延长工作时间每日不得超过三小时，但是每月不得超过三十六小时。"
    },
    {
      "id": 42,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 42,
      "text": "有下列情形之一的，延长工作时间不受本法第四十一条的限制：\n（一）发生自然灾害、事故或者因其他原因，威胁劳动者生命健康和财产安全，需要紧急处理的；\n（二）生产设备、交通运输线路、公共设施发生故障，影响生产和公众利益，必须及时抢修的；\n（三）法律、行政法规规定的其他情形。",
      "blankText": "有下列情形之一的，延长工作时间不受本法第四十一条的限制：\n（一）发生自然灾害、事故或者因其他原因，威胁劳动者生命健康和财产安全，需要紧急处理的；\n（二）生产设备、交通运输线路、公共设施发生故障，影响生产和公众利益，必须及时抢修的；\n（三）法律、行政法规规定的其他情形。"
    },
    {
      "id": 43,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 43,
      "text": "用人单位不得违反本法规定延长劳动者的工作时间。",
      "blankText": "用人单位不得违反本法规定延长劳动者的工作时间。"
    },
    {
      "id": 44,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 44,
      "text": "有下列情形之一的，用人单位应当按照下列标准支付高于劳动者正常工作时间工资的工资报酬：\n（一）安排劳动者延长工作时间的，支付不低于工资的百分之一百五十的工资报酬；\n（二）休息日安排劳动者工作又不能安排补休的，支付不低于工资的百分之二百的工资报酬；\n（三）法定休假日安排劳动者工作的，支付不低于工资的百分之三百的工资报酬。",
      "blankText": "有下列情形之一的，用人单位应当按照下列标准支付高于劳动者正常工作时间工资的工资报酬：\n（一）安排劳动者延长工作时间的，支付不低于工资的百分之一百五十的工资报酬；\n（二）休息日安排劳动者工作又不能安排补休的，支付不低于工资的百分之二百的工资报酬；\n（三）法定休假日安排劳动者工作的，支付不低于工资的百分之三百的工资报酬。"
    },
    {
      "id": 45,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 45,
      "text": "国家实行带薪年休假制度。\n劳动者连续工作一年以上的，享受带薪年休假。具体办法由国务院规定。",
      "blankText": "国家实行带薪年休假制度。\n劳动者连续工作一年以上的，享受带薪年休假。具体办法由国务院规定。"
    },
    {
      "id": 46,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 46,
      "text": "工资分配应当遵循按劳分配原则，实行同工同酬。\n工资水平在经济发展的基础上逐步提高。国家对工资总量实行宏观调控。",
      "blankText": "工资分配应当遵循按劳分配原则，实行同工同酬。\n工资水平在经济发展的基础上逐步提高。国家对工资总量实行宏观调控。"
    },
    {
      "id": 47,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 47,
      "text": "用人单位根据本单位的生产经营特点和经济效益，依法自主确定本单位的工资分配方式和工资水平。",
      "blankText": "用人单位根据本单位的生产经营特点和经济效益，依法自主确定本单位的工资分配方式和工资水平。"
    },
    {
      "id": 48,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 48,
      "text": "国家实行最低工资保障制度。最低工资的具体标准由省、自治区、直辖市人民政府规定，报国务院备案。\n用人单位支付劳动者的工资不得低于当地最低工资标准。",
      "blankText": "国家实行最低工资保障制度。最低工资的具体标准由省、自治区、直辖市人民政府规定，报国务院备案。\n用人单位支付劳动者的工资不得低于当地最低工资标准。"
    },
    {
      "id": 49,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 49,
      "text": "确定和调整最低工资标准应当综合参考下列因素：\n（一）劳动者本人及平均赡养人口的最低生活费用；\n（二）社会平均工资水平；\n（三）劳动生产率；\n（四）就业状况；\n（五）地区之间经济发展水平的差异。",
      "blankText": "确定和调整最低工资标准应当综合参考下列因素：\n（一）劳动者本人及平均赡养人口的最低生活费用；\n（二）社会平均工资水平；\n（三）劳动生产率；\n（四）就业状况；\n（五）地区之间经济发展水平的差异。"
    },
    {
      "id": 50,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 50,
      "text": "工资应当以货币形式按月支付给劳动者本人。不得克扣或者无故拖欠劳动者的工资。",
      "blankText": "工资应当以货币形式按月支付给劳动者本人。不得克扣或者无故拖欠劳动者的工资。"
    },
    {
      "id": 51,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 51,
      "text": "劳动者在法定休假日和婚丧假期间以及依法参加社会活动期间，用人单位应当依法支付工资。",
      "blankText": "劳动者在法定休假日和婚丧假期间以及依法参加社会活动期间，用人单位应当依法支付工资。"
    },
    {
      "id": 52,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 52,
      "text": "用人单位必须建立、健全劳动安全卫生制度，严格执行国家劳动安全卫生规程和标准，对劳动者进行劳动安全卫生教育，防止劳动过程中的事故，减少职业危害。",
      "blankText": "用人单位必须建立、健全劳动安全卫生制度，严格执行国家劳动安全卫生规程和标准，对劳动者进行劳动安全卫生教育，防止劳动过程中的事故，减少职业危害。"
    },
    {
      "id": 53,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 53,
      "text": "劳动安全卫生设施必须符合国家规定的标准。\n新建、改建、扩建工程的劳动安全卫生设施必须与主体工程同时设计、同时施工、同时投入生产和使用。",
      "blankText": "劳动安全卫生设施必须符合国家规定的标准。\n新建、改建、扩建工程的劳动安全卫生设施必须与主体工程同时设计、同时施工、同时投入生产和使用。"
    },
    {
      "id": 54,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 54,
      "text": "用人单位必须为劳动者提供符合国家规定的劳动安全卫生条件和必要的劳动防护用品，对从事有职业危害作业的劳动者应当定期进行健康检查。",
      "blankText": "用人单位必须为劳动者提供符合国家规定的劳动安全卫生条件和必要的劳动防护用品，对从事有职业危害作业的劳动者应当定期进行健康检查。"
    },
    {
      "id": 55,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 55,
      "text": "从事特种作业的劳动者必须经过专门培训并取得特种作业资格。",
      "blankText": "从事特种作业的劳动者必须经过专门培训并取得特种作业资格。"
    },
    {
      "id": 56,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 56,
      "text": "劳动者在劳动过程中必须严格遵守安全操作规程。\n劳动者对用人单位管理人员违章指挥、强令冒险作业，有权拒绝执行；对危害生命安全和身体健康的行为，有权提出批评、检举和控告。",
      "blankText": "劳动者在劳动过程中必须严格遵守安全操作规程。\n劳动者对用人单位管理人员违章指挥、强令冒险作业，有权拒绝执行；对危害生命安全和身体健康的行为，有权提出批评、检举和控告。"
    },
    {
      "id": 57,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 57,
      "text": "国家建立伤亡事故和职业病统计报告和处理制度。县级以上各级人民政府劳动行政部门、有关部门和用人单位应当依法对劳动者在劳动过程中发生的伤亡事故和劳动者的职业病状况，进行统计、报告和处理。",
      "blankText": "国家建立伤亡事故和职业病统计报告和处理制度。县级以上各级人民政府劳动行政部门、有关部门和用人单位应当依法对劳动者在劳动过程中发生的伤亡事故和劳动者的职业病状况，进行统计、报告和处理。"
    },
    {
      "id": 58,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 58,
      "text": "国家对女职工和未成年工实行特殊劳动保护。\n未成年工是指年满十六周岁未满十八周岁的劳动者。",
      "blankText": "国家对女职工和未成年工实行特殊劳动保护。\n未成年工是指年满十六周岁未满十八周岁的劳动者。"
    },
    {
      "id": 59,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 59,
      "text": "禁止安排女职工从事矿山井下、国家规定的第四级体力劳动强度的劳动和其他禁忌从事的劳动。",
      "blankText": "禁止安排女职工从事矿山井下、国家规定的第四级体力劳动强度的劳动和其他禁忌从事的劳动。"
    },
    {
      "id": 60,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 60,
      "text": "不得安排女职工在经期从事高处、低温、冷水作业和国家规定的第三级体力劳动强度的劳动。",
      "blankText": "不得安排女职工在经期从事高处、低温、冷水作业和国家规定的第三级体力劳动强度的劳动。"
    },
    {
      "id": 61,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 61,
      "text": "不得安排女职工在怀孕期间从事国家规定的第三级体力劳动强度的劳动和孕期禁忌从事的劳动。对怀孕七个月以上的女职工，不得安排其延长工作时间和夜班劳动。",
      "blankText": "不得安排女职工在怀孕期间从事国家规定的第三级体力劳动强度的劳动和孕期禁忌从事的劳动。对怀孕七个月以上的女职工，不得安排其延长工作时间和夜班劳动。"
    },
    {
      "id": 62,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 62,
      "text": "女职工生育享受不少于九十天的产假。",
      "blankText": "女职工生育享受不少于九十天的产假。"
    },
    {
      "id": 63,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 63,
      "text": "不得安排女职工在哺乳未满一周岁的婴儿期间从事国家规定的第三级体力劳动强度的劳动和哺乳期禁忌从事的其他劳动，不得安排其延长工作时间和夜班劳动。",
      "blankText": "不得安排女职工在哺乳未满一周岁的婴儿期间从事国家规定的第三级体力劳动强度的劳动和哺乳期禁忌从事的其他劳动，不得安排其延长工作时间和夜班劳动。"
    },
    {
      "id": 64,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 64,
      "text": "不得安排未成年工从事矿山井下、有毒有害、国家规定的第四级体力劳动强度的劳动和其他禁忌从事的劳动。",
      "blankText": "不得安排未成年工从事矿山井下、有毒有害、国家规定的第四级体力劳动强度的劳动和其他禁忌从事的劳动。"
    },
    {
      "id": 65,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 65,
      "text": "用人单位应当对未成年工定期进行健康检查。",
      "blankText": "用人单位应当对未成年工定期进行健康检查。"
    },
    {
      "id": 66,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 66,
      "text": "国家通过各种途径，采取各种措施，发展职业培训事业，开发劳动者的职业技能，提高劳动者素质，增强劳动者的就业能力和工作能力。",
      "blankText": "国家通过各种途径，采取各种措施，发展职业培训事业，开发劳动者的职业技能，提高劳动者素质，增强劳动者的就业能力和工作能力。"
    },
    {
      "id": 67,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 67,
      "text": "各级人民政府应当把发展职业培训纳入社会经济发展的规划，鼓励和支持有条件的企业、事业组织、社会团体和个人进行各种形式的职业培训。",
      "blankText": "各级人民政府应当把发展职业培训纳入社会经济发展的规划，鼓励和支持有条件的企业、事业组织、社会团体和个人进行各种形式的职业培训。"
    },
    {
      "id": 68,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 68,
      "text": "用人单位应当建立职业培训制度，按照国家规定提取和使用职业培训经费，根据本单位实际，有计划地对劳动者进行职业培训。\n从事技术工种的劳动者，上岗前必须经过培训。",
      "blankText": "用人单位应当建立职业培训制度，按照国家规定提取和使用职业培训经费，根据本单位实际，有计划地对劳动者进行职业培训。\n从事技术工种的劳动者，上岗前必须经过培训。"
    },
    {
      "id": 69,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 69,
      "text": "国家确定职业分类，对规定的职业制定职业技能标准，实行职业资格证书制度，由经备案的考核鉴定机构负责对劳动者实施职业技能考核鉴定。",
      "blankText": "国家确定职业分类，对规定的职业制定职业技能标准，实行职业资格证书制度，由经备案的考核鉴定机构负责对劳动者实施职业技能考核鉴定。"
    },
    {
      "id": 70,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 70,
      "text": "国家发展社会保险事业，建立社会保险制度，设立社会保险基金，使劳动者在年老、患病、工伤、失业、生育等情况下获得帮助和补偿。",
      "blankText": "国家发展社会保险事业，建立社会保险制度，设立社会保险基金，使劳动者在年老、患病、工伤、失业、生育等情况下获得帮助和补偿。"
    },
    {
      "id": 71,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 71,
      "text": "社会保险水平应当与社会经济发展水平和社会承受能力相适应。",
      "blankText": "社会保险水平应当与社会经济发展水平和社会承受能力相适应。"
    },
    {
      "id": 72,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 72,
      "text": "社会保险基金按照保险类型确定资金来源，逐步实行社会统筹。用人单位和劳动者必须依法参加社会保险，缴纳社会保险费。",
      "blankText": "社会保险基金按照保险类型确定资金来源，逐步实行社会统筹。用人单位和劳动者必须依法参加社会保险，缴纳社会保险费。"
    },
    {
      "id": 73,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 73,
      "text": "劳动者在下列情形下，依法享受社会保险待遇：\n（一）退休；\n（二）患病、负伤；\n（三）因工伤残或者患职业病；\n（四）失业；\n（五）生育。\n劳动者死亡后，其遗属依法享受遗属津贴。\n劳动者享受社会保险待遇的条件和标准由法律、法规规定。\n劳动者享受的社会保险金必须按时足额支付。",
      "blankText": "劳动者在下列情形下，依法享受社会保险待遇：\n（一）退休；\n（二）患病、负伤；\n（三）因工伤残或者患职业病；\n（四）失业；\n（五）生育。\n劳动者死亡后，其遗属依法享受遗属津贴。\n劳动者享受社会保险待遇的条件和标准由法律、法规规定。\n劳动者享受的社会保险金必须按时足额支付。"
    },
    {
      "id": 74,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 74,
      "text": "社会保险基金经办机构依照法律规定收支、管理和运营社会保险基金，并负有使社会保险基金保值增值的责任。\n社会保险基金监督机构依照法律规定，对社会保险基金的收支、管理和运营实施监督。\n社会保险基金经办机构和社会保险基金监督机构的设立和职能由法律规定。\n任何组织和个人不得挪用社会保险基金。",
      "blankText": "社会保险基金经办机构依照法律规定收支、管理和运营社会保险基金，并负有使社会保险基金保值增值的责任。\n社会保险基金监督机构依照法律规定，对社会保险基金的收支、管理和运营实施监督。\n社会保险基金经办机构和社会保险基金监督机构的设立和职能由法律规定。\n任何组织和个人不得挪用社会保险基金。"
    },
    {
      "id": 75,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 75,
      "text": "国家鼓励用人单位根据本单位实际情况为劳动者建立补充保险。\n国家提倡劳动者个人进行储蓄性保险。",
      "blankText": "国家鼓励用人单位根据本单位实际情况为劳动者建立补充保险。\n国家提倡劳动者个人进行储蓄性保险。"
    },
    {
      "id": 76,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 76,
      "text": "国家发展社会福利事业，兴建公共福利设施，为劳动者休息、休养和疗养提供条件。\n用人单位应当创造条件，改善集体福利，提高劳动者的福利待遇。",
      "blankText": "国家发展社会福利事业，兴建公共福利设施，为劳动者休息、休养和疗养提供条件。\n用人单位应当创造条件，改善集体福利，提高劳动者的福利待遇。"
    },
    {
      "id": 77,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 77,
      "text": "用人单位与劳动者发生劳动争议，当事人可以依法申请调解、仲裁、提起诉讼，也可以协商解决。\n调解原则适用于仲裁和诉讼程序。",
      "blankText": "用人单位与劳动者发生劳动争议，当事人可以依法申请调解、仲裁、提起诉讼，也可以协商解决。\n调解原则适用于仲裁和诉讼程序。"
    },
    {
      "id": 78,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 78,
      "text": "解决劳动争议，应当根据合法、公正、及时处理的原则，依法维护劳动争议当事人的合法权益。",
      "blankText": "解决劳动争议，应当根据合法、公正、及时处理的原则，依法维护劳动争议当事人的合法权益。"
    },
    {
      "id": 79,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 79,
      "text": "劳动争议发生后，当事人可以向本单位劳动争议调解委员会申请调解；调解不成，当事人一方要求仲裁的，可以向劳动争议仲裁委员会申请仲裁。当事人一方也可以直接向劳动争议仲裁委员会申请仲裁。对仲裁裁决不服的，可以向人民法院提起诉讼。",
      "blankText": "劳动争议发生后，当事人可以向本单位劳动争议调解委员会申请调解；调解不成，当事人一方要求仲裁的，可以向劳动争议仲裁委员会申请仲裁。当事人一方也可以直接向劳动争议仲裁委员会申请仲裁。对仲裁裁决不服的，可以向人民法院提起诉讼。"
    },
    {
      "id": 80,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 80,
      "text": "在用人单位内，可以设立劳动争议调解委员会。劳动争议调解委员会由职工代表、用人单位代表和工会代表组成。劳动争议调解委员会主任由工会代表担任。\n劳动争议经调解达成协议的，当事人应当履行。",
      "blankText": "在用人单位内，可以设立劳动争议调解委员会。劳动争议调解委员会由职工代表、用人单位代表和工会代表组成。劳动争议调解委员会主任由工会代表担任。\n劳动争议经调解达成协议的，当事人应当履行。"
    },
    {
      "id": 81,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 81,
      "text": "劳动争议仲裁委员会由劳动行政部门代表、同级工会代表、用人单位方面的代表组成。劳动争议仲裁委员会主任由劳动行政部门代表担任。",
      "blankText": "劳动争议仲裁委员会由劳动行政部门代表、同级工会代表、用人单位方面的代表组成。劳动争议仲裁委员会主任由劳动行政部门代表担任。"
    },
    {
      "id": 82,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 82,
      "text": "提出仲裁要求的一方应当自劳动争议发生之日起六十日内向劳动争议仲裁委员会提出书面申请。仲裁裁决一般应在收到仲裁申请的六十日内作出。对仲裁裁决无异议的，当事人必须履行。",
      "blankText": "提出仲裁要求的一方应当自劳动争议发生之日起六十日内向劳动争议仲裁委员会提出书面申请。仲裁裁决一般应在收到仲裁申请的六十日内作出。对仲裁裁决无异议的，当事人必须履行。"
    },
    {
      "id": 83,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 83,
      "text": "劳动争议当事人对仲裁裁决不服的，可以自收到仲裁裁决书之日起十五日内向人民法院提起诉讼。一方当事人在法定期限内不起诉又不履行仲裁裁决的，另一方当事人可以申请人民法院强制执行。",
      "blankText": "劳动争议当事人对仲裁裁决不服的，可以自收到仲裁裁决书之日起十五日内向人民法院提起诉讼。一方当事人在法定期限内不起诉又不履行仲裁裁决的，另一方当事人可以申请人民法院强制执行。"
    },
    {
      "id": 84,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 84,
      "text": "因签订集体合同发生争议，当事人协商解决不成的，当地人民政府劳动行政部门可以组织有关各方协调处理。\n因履行集体合同发生争议，当事人协商解决不成的，可以向劳动争议仲裁委员会申请仲裁；对仲裁裁决不服的，可以自收到仲裁裁决书之日起十五日内向人民法院提起诉讼。",
      "blankText": "因签订集体合同发生争议，当事人协商解决不成的，当地人民政府劳动行政部门可以组织有关各方协调处理。\n因履行集体合同发生争议，当事人协商解决不成的，可以向劳动争议仲裁委员会申请仲裁；对仲裁裁决不服的，可以自收到仲裁裁决书之日起十五日内向人民法院提起诉讼。"
    },
    {
      "id": 85,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 85,
      "text": "县级以上各级人民政府劳动行政部门依法对用人单位遵守劳动法律、法规的情况进行监督检查，对违反劳动法律、法规的行为有权制止，并责令改正。",
      "blankText": "县级以上各级人民政府劳动行政部门依法对用人单位遵守劳动法律、法规的情况进行监督检查，对违反劳动法律、法规的行为有权制止，并责令改正。"
    },
    {
      "id": 86,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 86,
      "text": "县级以上各级人民政府劳动行政部门监督检查人员执行公务，有权进入用人单位了解执行劳动法律、法规的情况，查阅必要的资料，并对劳动场所进行检查。\n县级以上各级人民政府劳动行政部门监督检查人员执行公务，必须出示证件，秉公执法并遵守有关规定。",
      "blankText": "县级以上各级人民政府劳动行政部门监督检查人员执行公务，有权进入用人单位了解执行劳动法律、法规的情况，查阅必要的资料，并对劳动场所进行检查。\n县级以上各级人民政府劳动行政部门监督检查人员执行公务，必须出示证件，秉公执法并遵守有关规定。"
    },
    {
      "id": 87,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 87,
      "text": "县级以上各级人民政府有关部门在各自职责范围内，对用人单位遵守劳动法律、法规的情况进行监督。",
      "blankText": "县级以上各级人民政府有关部门在各自职责范围内，对用人单位遵守劳动法律、法规的情况进行监督。"
    },
    {
      "id": 88,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 88,
      "text": "各级工会依法维护劳动者的合法权益，对用人单位遵守劳动法律、法规的情况进行监督。\n任何组织和个人对于违反劳动法律、法规的行为有权检举和控告。",
      "blankText": "各级工会依法维护劳动者的合法权益，对用人单位遵守劳动法律、法规的情况进行监督。\n任何组织和个人对于违反劳动法律、法规的行为有权检举和控告。"
    },
    {
      "id": 89,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 89,
      "text": "用人单位制定的劳动规章制度违反法律、法规规定的，由劳动行政部门给予警告，责令改正；对劳动者造成损害的，应当承担赔偿责任。",
      "blankText": "用人单位制定的劳动规章制度违反法律、法规规定的，由劳动行政部门给予警告，责令改正；对劳动者造成损害的，应当承担赔偿责任。"
    },
    {
      "id": 90,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 90,
      "text": "用人单位违反本法规定，延长劳动者工作时间的，由劳动行政部门给予警告，责令改正，并可以处以罚款。",
      "blankText": "用人单位违反本法规定，延长劳动者工作时间的，由劳动行政部门给予警告，责令改正，并可以处以罚款。"
    },
    {
      "id": 91,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 91,
      "text": "用人单位有下列侵害劳动者合法权益情形之一的，由劳动行政部门责令支付劳动者的工资报酬、经济补偿，并可以责令支付赔偿金：\n（一）克扣或者无故拖欠劳动者工资的；\n（二）拒不支付劳动者延长工作时间工资报酬的；\n（三）低于当地最低工资标准支付劳动者工资的；\n（四）解除劳动合同后，未依照本法规定给予劳动者经济补偿的。",
      "blankText": "用人单位有下列侵害劳动者合法权益情形之一的，由劳动行政部门责令支付劳动者的工资报酬、经济补偿，并可以责令支付赔偿金：\n（一）克扣或者无故拖欠劳动者工资的；\n（二）拒不支付劳动者延长工作时间工资报酬的；\n（三）低于当地最低工资标准支付劳动者工资的；\n（四）解除劳动合同后，未依照本法规定给予劳动者经济补偿的。"
    },
    {
      "id": 92,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 92,
      "text": "用人单位的劳动安全设施和劳动卫生条件不符合国家规定或者未向劳动者提供必要的劳动防护用品和劳动保护设施的，由劳动行政部门或者有关部门责令改正，可以处以罚款；情节严重的，提请县级以上人民政府决定责令停产整顿；对事故隐患不采取措施，致使发生重大事故，造成劳动者生命和财产损失的，对责任人员依照刑法有关规定追究刑事责任。",
      "blankText": "用人单位的劳动安全设施和劳动卫生条件不符合国家规定或者未向劳动者提供必要的劳动防护用品和劳动保护设施的，由劳动行政部门或者有关部门责令改正，可以处以罚款；情节严重的，提请县级以上人民政府决定责令停产整顿；对事故隐患不采取措施，致使发生重大事故，造成劳动者生命和财产损失的，对责任人员依照刑法有关规定追究刑事责任。"
    },
    {
      "id": 93,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 93,
      "text": "用人单位强令劳动者违章冒险作业，发生重大伤亡事故，造成严重后果的，对责任人员依法追究刑事责任。",
      "blankText": "用人单位强令劳动者违章冒险作业，发生重大伤亡事故，造成严重后果的，对责任人员依法追究刑事责任。"
    },
    {
      "id": 94,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 94,
      "text": "用人单位非法招用未满十六周岁的未成年人的，由劳动行政部门责令改正，处以罚款；情节严重的，由市场监督管理部门吊销营业执照。",
      "blankText": "用人单位非法招用未满十六周岁的未成年人的，由劳动行政部门责令改正，处以罚款；情节严重的，由市场监督管理部门吊销营业执照。"
    },
    {
      "id": 95,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 95,
      "text": "用人单位违反本法对女职工和未成年工的保护规定，侵害其合法权益的，由劳动行政部门责令改正，处以罚款；对女职工或者未成年工造成损害的，应当承担赔偿责任。",
      "blankText": "用人单位违反本法对女职工和未成年工的保护规定，侵害其合法权益的，由劳动行政部门责令改正，处以罚款；对女职工或者未成年工造成损害的，应当承担赔偿责任。"
    },
    {
      "id": 96,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 96,
      "text": "用人单位有下列行为之一，由公安机关对责任人员处以十五日以下拘留、罚款或者警告；构成犯罪的，对责任人员依法追究刑事责任：\n（一）以暴力、威胁或者非法限制人身自由的手段强迫劳动的；\n（二）侮辱、体罚、殴打、非法搜查和拘禁劳动者的。",
      "blankText": "用人单位有下列行为之一，由公安机关对责任人员处以十五日以下拘留、罚款或者警告；构成犯罪的，对责任人员依法追究刑事责任：\n（一）以暴力、威胁或者非法限制人身自由的手段强迫劳动的；\n（二）侮辱、体罚、殴打、非法搜查和拘禁劳动者的。"
    },
    {
      "id": 97,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 97,
      "text": "由于用人单位的原因订立的无效合同，对劳动者造成损害的，应当承担赔偿责任。",
      "blankText": "由于用人单位的原因订立的无效合同，对劳动者造成损害的，应当承担赔偿责任。"
    },
    {
      "id": 98,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 98,
      "text": "用人单位违反本法规定的条件解除劳动合同或者故意拖延不订立劳动合同的，由劳动行政部门责令改正；对劳动者造成损害的，应当承担赔偿责任。",
      "blankText": "用人单位违反本法规定的条件解除劳动合同或者故意拖延不订立劳动合同的，由劳动行政部门责令改正；对劳动者造成损害的，应当承担赔偿责任。"
    },
    {
      "id": 99,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 99,
      "text": "用人单位招用尚未解除劳动合同的劳动者，对原用人单位造成经济损失的，该用人单位应当依法承担连带赔偿责任。",
      "blankText": "用人单位招用尚未解除劳动合同的劳动者，对原用人单位造成经济损失的，该用人单位应当依法承担连带赔偿责任。"
    },
    {
      "id": 100,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 100,
      "text": "用人单位无故不缴纳社会保险费的，由劳动行政部门责令其限期缴纳，逾期不缴的，可以加收滞纳金。",
      "blankText": "用人单位无故不缴纳社会保险费的，由劳动行政部门责令其限期缴纳，逾期不缴的，可以加收滞纳金。"
    },
    {
      "id": 101,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 101,
      "text": "用人单位无理阻挠劳动行政部门、有关部门及其工作人员行使监督检查权，打击报复举报人员的，由劳动行政部门或者有关部门处以罚款；构成犯罪的，对责任人员依法追究刑事责任。",
      "blankText": "用人单位无理阻挠劳动行政部门、有关部门及其工作人员行使监督检查权，打击报复举报人员的，由劳动行政部门或者有关部门处以罚款；构成犯罪的，对责任人员依法追究刑事责任。"
    },
    {
      "id": 102,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 102,
      "text": "劳动者违反本法规定的条件解除劳动合同或者违反劳动合同中约定的保密事项，对用人单位造成经济损失的，应当依法承担赔偿责任。",
      "blankText": "劳动者违反本法规定的条件解除劳动合同或者违反劳动合同中约定的保密事项，对用人单位造成经济损失的，应当依法承担赔偿责任。"
    },
    {
      "id": 103,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 103,
      "text": "劳动行政部门或者有关部门的工作人员滥用职权、玩忽职守、徇私舞弊，构成犯罪的，依法追究刑事责任；不构成犯罪的，给予行政处分。",
      "blankText": "劳动行政部门或者有关部门的工作人员滥用职权、玩忽职守、徇私舞弊，构成犯罪的，依法追究刑事责任；不构成犯罪的，给予行政处分。"
    },
    {
      "id": 104,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 104,
      "text": "国家工作人员和社会保险基金经办机构的工作人员挪用社会保险基金，构成犯罪的，依法追究刑事责任。",
      "blankText": "国家工作人员和社会保险基金经办机构的工作人员挪用社会保险基金，构成犯罪的，依法追究刑事责任。"
    },
    {
      "id": 105,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 105,
      "text": "违反本法规定侵害劳动者合法权益，其他法律、法规已规定处罚的，依照该法律、法规的规定处罚。",
      "blankText": "违反本法规定侵害劳动者合法权益，其他法律、法规已规定处罚的，依照该法律、法规的规定处罚。"
    },
    {
      "id": 106,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 106,
      "text": "省、自治区、直辖市人民政府根据本法和本地区的实际情况，规定劳动合同制度的实施步骤，报国务院备案。",
      "blankText": "省、自治区、直辖市人民政府根据本法和本地区的实际情况，规定劳动合同制度的实施步骤，报国务院备案。"
    },
    {
      "id": 107,
      "category": "劳动关系基础",
      "law": "劳动法",
      "articleNum": 107,
      "text": "本法自1995年1月1日起施行。",
      "blankText": "本法自______年______月______日起施行。"
    },
    {
      "id": 108,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 1,
      "text": "为了完善劳动合同制度，明确劳动合同双方当事人的权利和义务，保护劳动者的合法权益，构建和发展和谐稳定的劳动关系，制定本法。",
      "blankText": "为了完善劳动合同制度，明确劳动合同双方当事人的权利和义务，保护劳动者的合法权益，构建和发展和谐稳定的劳动关系，制定本法。"
    },
    {
      "id": 109,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 2,
      "text": "中华人民共和国境内的企业、个体经济组织、民办非企业单位等组织（以下称用人单位）与劳动者建立劳动关系，订立、履行、变更、解除或者终止劳动合同，适用本法。\n国家机关、事业单位、社会团体和与其建立劳动关系的劳动者，订立、履行、变更、解除或者终止劳动合同，依照本法执行。",
      "blankText": "中华人民共和国境内的企业、个体经济组织、民办非企业单位等组织（以下称用人单位）与劳动者建立劳动关系，订立、履行、变更、解除或者终止劳动合同，适用本法。\n国家机关、事业单位、社会团体和与其建立劳动关系的劳动者，订立、履行、变更、解除或者终止劳动合同，依照本法执行。"
    },
    {
      "id": 110,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 3,
      "text": "订立劳动合同，应当遵循合法、公平、平等自愿、协商一致、诚实信用的原则。\n依法订立的劳动合同具有约束力，用人单位与劳动者应当履行劳动合同约定的义务。",
      "blankText": "订立劳动合同，应当遵循合法、公平、平等自愿、协商一致、诚实信用的原则。\n依法订立的劳动合同具有约束力，用人单位与劳动者应当履行劳动合同约定的义务。"
    },
    {
      "id": 111,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 4,
      "text": "用人单位应当依法建立和完善劳动规章制度，保障劳动者享有劳动权利、履行劳动义务。\n用人单位在制定、修改或者决定有关劳动报酬、工作时间、休息休假、劳动安全卫生、保险福利、职工培训、劳动纪律以及劳动定额管理等直接涉及劳动者切身利益的规章制度或者重大事项时，应当经职工代表大会或者全体职工讨论，提出方案和意见，与工会或者职工代表平等协商确定。\n在规章制度和重大事项决定实施过程中，工会或者职工认为不适当的，有权向用人单位提出，通过协商予以修改完善。\n用人单位应当将直接涉及劳动者切身利益的规章制度和重大事项决定公示，或者告知劳动者。",
      "blankText": "用人单位应当依法建立和完善劳动规章制度，保障劳动者享有劳动权利、履行劳动义务。\n用人单位在制定、修改或者决定有关劳动报酬、工作时间、休息休假、劳动安全卫生、保险福利、职工培训、劳动纪律以及劳动定额管理等直接涉及劳动者切身利益的规章制度或者重大事项时，应当经职工代表大会或者全体职工讨论，提出方案和意见，与工会或者职工代表平等协商确定。\n在规章制度和重大事项决定实施过程中，工会或者职工认为不适当的，有权向用人单位提出，通过协商予以修改完善。\n用人单位应当将直接涉及劳动者切身利益的规章制度和重大事项决定公示，或者告知劳动者。"
    },
    {
      "id": 112,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 5,
      "text": "县级以上人民政府劳动行政部门会同工会和企业方面代表，建立健全协调劳动关系三方机制，共同研究解决有关劳动关系的重大问题。",
      "blankText": "县级以上人民政府劳动行政部门会同工会和企业方面代表，建立健全协调劳动关系三方机制，共同研究解决有关劳动关系的重大问题。"
    },
    {
      "id": 113,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 6,
      "text": "工会应当帮助、指导劳动者与用人单位依法订立和履行劳动合同，并与用人单位建立集体协商机制，维护劳动者的合法权益。",
      "blankText": "工会应当帮助、指导劳动者与用人单位依法订立和履行劳动合同，并与用人单位建立集体协商机制，维护劳动者的合法权益。"
    },
    {
      "id": 114,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 7,
      "text": "用人单位自用工之日起即与劳动者建立劳动关系。用人单位应当建立职工名册备查。",
      "blankText": "用人单位自用工之日起即与劳动者建立劳动关系。用人单位应当建立职工名册备查。"
    },
    {
      "id": 115,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 8,
      "text": "用人单位招用劳动者时，应当如实告知劳动者工作内容、工作条件、工作地点、职业危害、安全生产状况、劳动报酬，以及劳动者要求了解的其他情况；用人单位有权了解劳动者与劳动合同直接相关的基本情况，劳动者应当如实说明。",
      "blankText": "用人单位招用劳动者时，应当如实告知劳动者工作内容、工作条件、工作地点、职业危害、安全生产状况、劳动报酬，以及劳动者要求了解的其他情况；用人单位有权了解劳动者与劳动合同直接相关的基本情况，劳动者应当如实说明。"
    },
    {
      "id": 116,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 9,
      "text": "用人单位招用劳动者，不得扣押劳动者的居民身份证和其他证件，不得要求劳动者提供担保或者以其他名义向劳动者收取财物。",
      "blankText": "用人单位招用劳动者，不得扣押劳动者的居民身份证和其他证件，不得要求劳动者提供担保或者以其他名义向劳动者收取财物。"
    },
    {
      "id": 117,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 10,
      "text": "建立劳动关系，应当订立书面劳动合同。\n已建立劳动关系，未同时订立书面劳动合同的，应当自用工之日起一个月内订立书面劳动合同。\n用人单位与劳动者在用工前订立劳动合同的，劳动关系自用工之日起建立。",
      "blankText": "建立劳动关系，应当订立书面劳动合同。\n已建立劳动关系，未同时订立书面劳动合同的，应当自用工之日起一个月内订立书面劳动合同。\n用人单位与劳动者在用工前订立劳动合同的，劳动关系自用工之日起建立。"
    },
    {
      "id": 118,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 11,
      "text": "用人单位未在用工的同时订立书面劳动合同，与劳动者约定的劳动报酬不明确的，新招用的劳动者的劳动报酬按照集体合同规定的标准执行；没有集体合同或者集体合同未规定的，实行同工同酬。",
      "blankText": "用人单位未在用工的同时订立书面劳动合同，与劳动者约定的劳动报酬不明确的，新招用的劳动者的劳动报酬按照集体合同规定的标准执行；没有集体合同或者集体合同未规定的，实行同工同酬。"
    },
    {
      "id": 119,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 12,
      "text": "劳动合同分为固定期限劳动合同、无固定期限劳动合同和以完成一定工作任务为期限的劳动合同。",
      "blankText": "劳动合同分为固定期限劳动合同、无固定期限劳动合同和以完成一定工作任务为期限的劳动合同。"
    },
    {
      "id": 120,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 13,
      "text": "固定期限劳动合同，是指用人单位与劳动者约定合同终止时间的劳动合同。\n用人单位与劳动者协商一致，可以订立固定期限劳动合同。",
      "blankText": "固定期限劳动合同，是指用人单位与劳动者约定合同终止时间的劳动合同。\n用人单位与劳动者协商一致，可以订立固定期限劳动合同。"
    },
    {
      "id": 121,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 14,
      "text": "无固定期限劳动合同，是指用人单位与劳动者约定无确定终止时间的劳动合同。\n用人单位与劳动者协商一致，可以订立无固定期限劳动合同。有下列情形之一，劳动者提出或者同意续订、订立劳动合同的，除劳动者提出订立固定期限劳动合同外，应当订立无固定期限劳动合同：\n（一）劳动者在该用人单位连续工作满十年的；\n（二）用人单位初次实行劳动合同制度或者国有企业改制重新订立劳动合同时，劳动者在该用人单位连续工作满十年且距法定退休年龄不足十年的；\n（三）连续订立二次固定期限劳动合同，且劳动者没有本法第三十九条和第四十条第一项、第二项规定的情形，续订劳动合同的。\n用人单位自用工之日起满一年不与劳动者订立书面劳动合同的，视为用人单位与劳动者已订立无固定期限劳动合同。",
      "blankText": "无固定期限劳动合同，是指用人单位与劳动者约定无确定终止时间的劳动合同。\n用人单位与劳动者协商一致，可以订立无固定期限劳动合同。有下列情形之一，劳动者提出或者同意续订、订立劳动合同的，除劳动者提出订立固定期限劳动合同外，应当订立无固定期限劳动合同：\n（一）劳动者在该用人单位连续工作满十年的；\n（二）用人单位初次实行劳动合同制度或者国有企业改制重新订立劳动合同时，劳动者在该用人单位连续工作满十年且距法定退休年龄不足十年的；\n（三）连续订立二次固定期限劳动合同，且劳动者没有本法第三十九条和第四十条第一项、第二项规定的情形，续订劳动合同的。\n用人单位自用工之日起满一年不与劳动者订立书面劳动合同的，视为用人单位与劳动者已订立无固定期限劳动合同。"
    },
    {
      "id": 122,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 15,
      "text": "以完成一定工作任务为期限的劳动合同，是指用人单位与劳动者约定以某项工作的完成为合同期限的劳动合同。\n用人单位与劳动者协商一致，可以订立以完成一定工作任务为期限的劳动合同。",
      "blankText": "以完成一定工作任务为期限的劳动合同，是指用人单位与劳动者约定以某项工作的完成为合同期限的劳动合同。\n用人单位与劳动者协商一致，可以订立以完成一定工作任务为期限的劳动合同。"
    },
    {
      "id": 123,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 16,
      "text": "劳动合同由用人单位与劳动者协商一致，并经用人单位与劳动者在劳动合同文本上签字或者盖章生效。\n劳动合同文本由用人单位和劳动者各执一份。",
      "blankText": "劳动合同由用人单位与劳动者协商一致，并经用人单位与劳动者在劳动合同文本上签字或者盖章生效。\n劳动合同文本由用人单位和劳动者各执一份。"
    },
    {
      "id": 124,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 17,
      "text": "劳动合同应当具备以下条款：\n（一）用人单位的名称、住所和法定代表人或者主要负责人；\n（二）劳动者的姓名、住址和居民身份证或者其他有效身份证件号码；\n（三）劳动合同期限；\n（四）工作内容和工作地点；\n（五）工作时间和休息休假；\n（六）劳动报酬；\n（七）社会保险；\n（八）劳动保护、劳动条件和职业危害防护；\n（九）法律、法规规定应当纳入劳动合同的其他事项。\n劳动合同除前款规定的必备条款外，用人单位与劳动者可以约定试用期、培训、保守秘密、补充保险和福利待遇等其他事项。",
      "blankText": "劳动合同应当具备以下条款：\n（一）用人单位的名称、住所和法定代表人或者主要负责人；\n（二）劳动者的姓名、住址和居民身份证或者其他有效身份证件号码；\n（三）劳动合同期限；\n（四）工作内容和工作地点；\n（五）工作时间和休息休假；\n（六）劳动报酬；\n（七）社会保险；\n（八）劳动保护、劳动条件和职业危害防护；\n（九）法律、法规规定应当纳入劳动合同的其他事项。\n劳动合同除前款规定的必备条款外，用人单位与劳动者可以约定试用期、培训、保守秘密、补充保险和福利待遇等其他事项。"
    },
    {
      "id": 125,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 18,
      "text": "劳动合同对劳动报酬和劳动条件等标准约定不明确，引发争议的，用人单位与劳动者可以重新协商；协商不成的，适用集体合同规定；没有集体合同或者集体合同未规定劳动报酬的，实行同工同酬；没有集体合同或者集体合同未规定劳动条件等标准的，适用国家有关规定。",
      "blankText": "劳动合同对劳动报酬和劳动条件等标准约定不明确，引发争议的，用人单位与劳动者可以重新协商；协商不成的，适用集体合同规定；没有集体合同或者集体合同未规定劳动报酬的，实行同工同酬；没有集体合同或者集体合同未规定劳动条件等标准的，适用国家有关规定。"
    },
    {
      "id": 126,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 19,
      "text": "劳动合同期限三个月以上不满一年的，试用期不得超过一个月；劳动合同期限一年以上不满三年的，试用期不得超过二个月；三年以上固定期限和无固定期限的劳动合同，试用期不得超过六个月。\n同一用人单位与同一劳动者只能约定一次试用期。\n以完成一定工作任务为期限的劳动合同或者劳动合同期限不满三个月的，不得约定试用期。\n试用期包含在劳动合同期限内。劳动合同仅约定试用期的，试用期不成立，该期限为劳动合同期限。",
      "blankText": "劳动合同期限三个月以上不满一年的，试用期不得超过一个月；劳动合同期限一年以上不满三年的，试用期不得超过二个月；三年以上固定期限和无固定期限的劳动合同，试用期不得超过六个月。\n同一用人单位与同一劳动者只能约定一次试用期。\n以完成一定工作任务为期限的劳动合同或者劳动合同期限不满三个月的，不得约定试用期。\n试用期包含在劳动合同期限内。劳动合同仅约定试用期的，试用期不成立，该期限为劳动合同期限。"
    },
    {
      "id": 127,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 20,
      "text": "劳动者在试用期的工资不得低于本单位相同岗位最低档工资或者劳动合同约定工资的百分之八十，并不得低于用人单位所在地的最低工资标准。",
      "blankText": "劳动者在试用期的工资不得低于本单位相同岗位最低档工资或者劳动合同约定工资的百分之八十，并不得低于用人单位所在地的最低工资标准。"
    },
    {
      "id": 128,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 21,
      "text": "在试用期中，除劳动者有本法第三十九条和第四十条第一项、第二项规定的情形外，用人单位不得解除劳动合同。用人单位在试用期解除劳动合同的，应当向劳动者说明理由。",
      "blankText": "在试用期中，除劳动者有本法第三十九条和第四十条第一项、第二项规定的情形外，用人单位不得解除劳动合同。用人单位在试用期解除劳动合同的，应当向劳动者说明理由。"
    },
    {
      "id": 129,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 22,
      "text": "用人单位为劳动者提供专项培训费用，对其进行专业技术培训的，可以与该劳动者订立协议，约定服务期。\n劳动者违反服务期约定的，应当按照约定向用人单位支付违约金。违约金的数额不得超过用人单位提供的培训费用。用人单位要求劳动者支付的违约金不得超过服务期尚未履行部分所应分摊的培训费用。\n用人单位与劳动者约定服务期的，不影响按照正常的工资调整机制提高劳动者在服务期期间的劳动报酬。",
      "blankText": "用人单位为劳动者提供专项培训费用，对其进行专业技术培训的，可以与该劳动者订立协议，约定服务期。\n劳动者违反服务期约定的，应当按照约定向用人单位支付违约金。违约金的数额不得超过用人单位提供的培训费用。用人单位要求劳动者支付的违约金不得超过服务期尚未履行部分所应分摊的培训费用。\n用人单位与劳动者约定服务期的，不影响按照正常的工资调整机制提高劳动者在服务期期间的劳动报酬。"
    },
    {
      "id": 130,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 23,
      "text": "用人单位与劳动者可以在劳动合同中约定保守用人单位的商业秘密和与知识产权相关的保密事项。\n对负有保密义务的劳动者，用人单位可以在劳动合同或者保密协议中与劳动者约定竞业限制条款，并约定在解除或者终止劳动合同后，在竞业限制期限内按月给予劳动者经济补偿。劳动者违反竞业限制约定的，应当按照约定向用人单位支付违约金。",
      "blankText": "用人单位与劳动者可以在劳动合同中约定保守用人单位的商业秘密和与知识产权相关的保密事项。\n对负有保密义务的劳动者，用人单位可以在劳动合同或者保密协议中与劳动者约定竞业限制条款，并约定在解除或者终止劳动合同后，在竞业限制期限内按月给予劳动者经济补偿。劳动者违反竞业限制约定的，应当按照约定向用人单位支付违约金。"
    },
    {
      "id": 131,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 24,
      "text": "竞业限制的人员限于用人单位的高级管理人员、高级技术人员和其他负有保密义务的人员。竞业限制的范围、地域、期限由用人单位与劳动者约定，竞业限制的约定不得违反法律、法规的规定。\n在解除或者终止劳动合同后，前款规定的人员到与本单位生产或者经营同类产品、从事同类业务的有竞争关系的其他用人单位，或者自己开业生产或者经营同类产品、从事同类业务的竞业限制期限，不得超过二年。",
      "blankText": "竞业限制的人员限于用人单位的高级管理人员、高级技术人员和其他负有保密义务的人员。竞业限制的范围、地域、期限由用人单位与劳动者约定，竞业限制的约定不得违反法律、法规的规定。\n在解除或者终止劳动合同后，前款规定的人员到与本单位生产或者经营同类产品、从事同类业务的有竞争关系的其他用人单位，或者自己开业生产或者经营同类产品、从事同类业务的竞业限制期限，不得超过二年。"
    },
    {
      "id": 132,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 25,
      "text": "除本法第二十二条和第二十三条规定的情形外，用人单位不得与劳动者约定由劳动者承担违约金。",
      "blankText": "除本法第二十二条和第二十三条规定的情形外，用人单位不得与劳动者约定由劳动者承担违约金。"
    },
    {
      "id": 133,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 26,
      "text": "下列劳动合同无效或者部分无效：\n（一）以欺诈、胁迫的手段或者乘人之危，使对方在违背真实意思的情况下订立或者变更劳动合同的；\n（二）用人单位免除自己的法定责任、排除劳动者权利的；\n（三）违反法律、行政法规强制性规定的。\n对劳动合同的无效或者部分无效有争议的，由劳动争议仲裁机构或者人民法院确认。",
      "blankText": "下列劳动合同无效或者部分无效：\n（一）以欺诈、胁迫的手段或者乘人之危，使对方在违背真实意思的情况下订立或者变更劳动合同的；\n（二）用人单位免除自己的法定责任、排除劳动者权利的；\n（三）违反法律、行政法规强制性规定的。\n对劳动合同的无效或者部分无效有争议的，由劳动争议仲裁机构或者人民法院确认。"
    },
    {
      "id": 134,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 27,
      "text": "劳动合同部分无效，不影响其他部分效力的，其他部分仍然有效。",
      "blankText": "劳动合同部分无效，不影响其他部分效力的，其他部分仍然有效。"
    },
    {
      "id": 135,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 28,
      "text": "劳动合同被确认无效，劳动者已付出劳动的，用人单位应当向劳动者支付劳动报酬。劳动报酬的数额，参照本单位相同或者相近岗位劳动者的劳动报酬确定。",
      "blankText": "劳动合同被确认无效，劳动者已付出劳动的，用人单位应当向劳动者支付劳动报酬。劳动报酬的数额，参照本单位相同或者相近岗位劳动者的劳动报酬确定。"
    },
    {
      "id": 136,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 29,
      "text": "用人单位与劳动者应当按照劳动合同的约定，全面履行各自的义务。",
      "blankText": "用人单位与劳动者应当按照劳动合同的约定，全面履行各自的义务。"
    },
    {
      "id": 137,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 30,
      "text": "用人单位应当按照劳动合同约定和国家规定，向劳动者及时足额支付劳动报酬。\n用人单位拖欠或者未足额支付劳动报酬的，劳动者可以依法向当地人民法院申请支付令，人民法院应当依法发出支付令。",
      "blankText": "用人单位应当按照劳动合同约定和国家规定，向劳动者及时足额支付劳动报酬。\n用人单位拖欠或者未足额支付劳动报酬的，劳动者可以依法向当地人民法院申请支付令，人民法院应当依法发出支付令。"
    },
    {
      "id": 138,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 31,
      "text": "用人单位应当严格执行劳动定额标准，不得强迫或者变相强迫劳动者加班。用人单位安排加班的，应当按照国家有关规定向劳动者支付加班费。",
      "blankText": "用人单位应当严格执行劳动定额标准，不得强迫或者变相强迫劳动者加班。用人单位安排加班的，应当按照国家有关规定向劳动者支付加班费。"
    },
    {
      "id": 139,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 32,
      "text": "劳动者拒绝用人单位管理人员违章指挥、强令冒险作业的，不视为违反劳动合同。\n劳动者对危害生命安全和身体健康的劳动条件，有权对用人单位提出批评、检举和控告。",
      "blankText": "劳动者拒绝用人单位管理人员违章指挥、强令冒险作业的，不视为违反劳动合同。\n劳动者对危害生命安全和身体健康的劳动条件，有权对用人单位提出批评、检举和控告。"
    },
    {
      "id": 140,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 33,
      "text": "用人单位变更名称、法定代表人、主要负责人或者投资人等事项，不影响劳动合同的履行。",
      "blankText": "用人单位变更名称、法定代表人、主要负责人或者投资人等事项，不影响劳动合同的履行。"
    },
    {
      "id": 141,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 34,
      "text": "用人单位发生合并或者分立等情况，原劳动合同继续有效，劳动合同由承继其权利和义务的用人单位继续履行。",
      "blankText": "用人单位发生合并或者分立等情况，原劳动合同继续有效，劳动合同由承继其权利和义务的用人单位继续履行。"
    },
    {
      "id": 142,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 35,
      "text": "用人单位与劳动者协商一致，可以变更劳动合同约定的内容。变更劳动合同，应当采用书面形式。\n变更后的劳动合同文本由用人单位和劳动者各执一份。",
      "blankText": "用人单位与劳动者协商一致，可以变更劳动合同约定的内容。变更劳动合同，应当采用书面形式。\n变更后的劳动合同文本由用人单位和劳动者各执一份。"
    },
    {
      "id": 143,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 36,
      "text": "用人单位与劳动者协商一致，可以解除劳动合同。",
      "blankText": "用人单位与劳动者协商一致，可以解除劳动合同。"
    },
    {
      "id": 144,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 37,
      "text": "劳动者提前三十日以书面形式通知用人单位，可以解除劳动合同。劳动者在试用期内提前三日通知用人单位，可以解除劳动合同。",
      "blankText": "劳动者提前三十日以书面形式通知用人单位，可以解除劳动合同。劳动者在试用期内提前三日通知用人单位，可以解除劳动合同。"
    },
    {
      "id": 145,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 38,
      "text": "用人单位有下列情形之一的，劳动者可以解除劳动合同：\n（一）未按照劳动合同约定提供劳动保护或者劳动条件的；\n（二）未及时足额支付劳动报酬的；\n（三）未依法为劳动者缴纳社会保险费的；\n（四）用人单位的规章制度违反法律、法规的规定，损害劳动者权益的；\n（五）因本法第二十六条第一款规定的情形致使劳动合同无效的；\n（六）法律、行政法规规定劳动者可以解除劳动合同的其他情形。\n用人单位以暴力、威胁或者非法限制人身自由的手段强迫劳动者劳动的，或者用人单位违章指挥、强令冒险作业危及劳动者人身安全的，劳动者可以立即解除劳动合同，不需事先告知用人单位。",
      "blankText": "用人单位有下列情形之一的，劳动者可以解除劳动合同：\n（一）未按照劳动合同约定提供劳动保护或者劳动条件的；\n（二）未及时足额支付劳动报酬的；\n（三）未依法为劳动者缴纳社会保险费的；\n（四）用人单位的规章制度违反法律、法规的规定，损害劳动者权益的；\n（五）因本法第二十六条第一款规定的情形致使劳动合同无效的；\n（六）法律、行政法规规定劳动者可以解除劳动合同的其他情形。\n用人单位以暴力、威胁或者非法限制人身自由的手段强迫劳动者劳动的，或者用人单位违章指挥、强令冒险作业危及劳动者人身安全的，劳动者可以立即解除劳动合同，不需事先告知用人单位。"
    },
    {
      "id": 146,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 39,
      "text": "劳动者有下列情形之一的，用人单位可以解除劳动合同：\n（一）在试用期间被证明不符合录用条件的；\n（二）严重违反用人单位的规章制度的；\n（三）严重失职，营私舞弊，给用人单位造成重大损害的；\n（四）劳动者同时与其他用人单位建立劳动关系，对完成本单位的工作任务造成严重影响，或者经用人单位提出，拒不改正的；\n（五）因本法第二十六条第一款第一项规定的情形致使劳动合同无效的；\n（六）被依法追究刑事责任的。",
      "blankText": "劳动者有下列情形之一的，用人单位可以解除劳动合同：\n（一）在试用期间被证明不符合录用条件的；\n（二）严重违反用人单位的规章制度的；\n（三）严重失职，营私舞弊，给用人单位造成重大损害的；\n（四）劳动者同时与其他用人单位建立劳动关系，对完成本单位的工作任务造成严重影响，或者经用人单位提出，拒不改正的；\n（五）因本法第二十六条第一款第一项规定的情形致使劳动合同无效的；\n（六）被依法追究刑事责任的。"
    },
    {
      "id": 147,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 40,
      "text": "有下列情形之一的，用人单位提前三十日以书面形式通知劳动者本人或者额外支付劳动者一个月工资后，可以解除劳动合同：\n（一）劳动者患病或者非因工负伤，在规定的医疗期满后不能从事原工作，也不能从事由用人单位另行安排的工作的；\n（二）劳动者不能胜任工作，经过培训或者调整工作岗位，仍不能胜任工作的；\n（三）劳动合同订立时所依据的客观情况发生重大变化，致使劳动合同无法履行，经用人单位与劳动者协商，未能就变更劳动合同内容达成协议的。",
      "blankText": "有下列情形之一的，用人单位提前三十日以书面形式通知劳动者本人或者额外支付劳动者一个月工资后，可以解除劳动合同：\n（一）劳动者患病或者非因工负伤，在规定的医疗期满后不能从事原工作，也不能从事由用人单位另行安排的工作的；\n（二）劳动者不能胜任工作，经过培训或者调整工作岗位，仍不能胜任工作的；\n（三）劳动合同订立时所依据的客观情况发生重大变化，致使劳动合同无法履行，经用人单位与劳动者协商，未能就变更劳动合同内容达成协议的。"
    },
    {
      "id": 148,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 41,
      "text": "有下列情形之一，需要裁减人员二十人以上或者裁减不足二十人但占企业职工总数百分之十以上的，用人单位提前三十日向工会或者全体职工说明情况，听取工会或者职工的意见后，裁减人员方案经向劳动行政部门报告，可以裁减人员：\n（一）依照企业破产法规定进行重整的；\n（二）生产经营发生严重困难的；\n（三）企业转产、重大技术革新或者经营方式调整，经变更劳动合同后，仍需裁减人员的；\n（四）其他因劳动合同订立时所依据的客观经济情况发生重大变化，致使劳动合同无法履行的。\n裁减人员时，应当优先留用下列人员：\n（一）与本单位订立较长期限的固定期限劳动合同的；\n（二）与本单位订立无固定期限劳动合同的；\n（三）家庭无其他就业人员，有需要扶养的老人或者未成年人的。\n用人单位依照本条第一款规定裁减人员，在六个月内重新招用人员的，应当通知被裁减的人员，并在同等条件下优先招用被裁减的人员。",
      "blankText": "有下列情形之一，需要裁减人员二十人以上或者裁减不足二十人但占企业职工总数百分之十以上的，用人单位提前三十日向工会或者全体职工说明情况，听取工会或者职工的意见后，裁减人员方案经向劳动行政部门报告，可以裁减人员：\n（一）依照企业破产法规定进行重整的；\n（二）生产经营发生严重困难的；\n（三）企业转产、重大技术革新或者经营方式调整，经变更劳动合同后，仍需裁减人员的；\n（四）其他因劳动合同订立时所依据的客观经济情况发生重大变化，致使劳动合同无法履行的。\n裁减人员时，应当优先留用下列人员：\n（一）与本单位订立较长期限的固定期限劳动合同的；\n（二）与本单位订立无固定期限劳动合同的；\n（三）家庭无其他就业人员，有需要扶养的老人或者未成年人的。\n用人单位依照本条第一款规定裁减人员，在六个月内重新招用人员的，应当通知被裁减的人员，并在同等条件下优先招用被裁减的人员。"
    },
    {
      "id": 149,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 42,
      "text": "劳动者有下列情形之一的，用人单位不得依照本法第四十条、第四十一条的规定解除劳动合同：\n（一）从事接触职业病危害作业的劳动者未进行离岗前职业健康检查，或者疑似职业病病人在诊断或者医学观察期间的；\n（二）在本单位患职业病或者因工负伤并被确认丧失或者部分丧失劳动能力的；\n（三）患病或者非因工负伤，在规定的医疗期内的；\n（四）女职工在孕期、产期、哺乳期的；\n（五）在本单位连续工作满十五年，且距法定退休年龄不足五年的；\n（六）法律、行政法规规定的其他情形。",
      "blankText": "劳动者有下列情形之一的，用人单位不得依照本法第四十条、第四十一条的规定解除劳动合同：\n（一）从事接触职业病危害作业的劳动者未进行离岗前职业健康检查，或者疑似职业病病人在诊断或者医学观察期间的；\n（二）在本单位患职业病或者因工负伤并被确认丧失或者部分丧失劳动能力的；\n（三）患病或者非因工负伤，在规定的医疗期内的；\n（四）女职工在孕期、产期、哺乳期的；\n（五）在本单位连续工作满十五年，且距法定退休年龄不足五年的；\n（六）法律、行政法规规定的其他情形。"
    },
    {
      "id": 150,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 43,
      "text": "用人单位单方解除劳动合同，应当事先将理由通知工会。用人单位违反法律、行政法规规定或者劳动合同约定的，工会有权要求用人单位纠正。用人单位应当研究工会的意见，并将处理结果书面通知工会。",
      "blankText": "用人单位单方解除劳动合同，应当事先将理由通知工会。用人单位违反法律、行政法规规定或者劳动合同约定的，工会有权要求用人单位纠正。用人单位应当研究工会的意见，并将处理结果书面通知工会。"
    },
    {
      "id": 151,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 44,
      "text": "有下列情形之一的，劳动合同终止：\n（一）劳动合同期满的；\n（二）劳动者开始依法享受基本养老保险待遇的；\n（三）劳动者死亡，或者被人民法院宣告死亡或者宣告失踪的；\n（四）用人单位被依法宣告破产的；\n（五）用人单位被吊销营业执照、责令关闭、撤销或者用人单位决定提前解散的；\n（六）法律、行政法规规定的其他情形。",
      "blankText": "有下列情形之一的，劳动合同终止：\n（一）劳动合同期满的；\n（二）劳动者开始依法享受基本养老保险待遇的；\n（三）劳动者死亡，或者被人民法院宣告死亡或者宣告失踪的；\n（四）用人单位被依法宣告破产的；\n（五）用人单位被吊销营业执照、责令关闭、撤销或者用人单位决定提前解散的；\n（六）法律、行政法规规定的其他情形。"
    },
    {
      "id": 152,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 45,
      "text": "劳动合同期满，有本法第四十二条规定情形之一的，劳动合同应当续延至相应的情形消失时终止。但是，本法第四十二条第二项规定丧失或者部分丧失劳动能力劳动者的劳动合同的终止，按照国家有关工伤保险的规定执行。",
      "blankText": "劳动合同期满，有本法第四十二条规定情形之一的，劳动合同应当续延至相应的情形消失时终止。但是，本法第四十二条第二项规定丧失或者部分丧失劳动能力劳动者的劳动合同的终止，按照国家有关工伤保险的规定执行。"
    },
    {
      "id": 153,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 46,
      "text": "有下列情形之一的，用人单位应当向劳动者支付经济补偿：\n（一）劳动者依照本法第三十八条规定解除劳动合同的；\n（二）用人单位依照本法第三十六条规定向劳动者提出解除劳动合同并与劳动者协商一致解除劳动合同的；\n（三）用人单位依照本法第四十条规定解除劳动合同的；\n（四）用人单位依照本法第四十一条第一款规定解除劳动合同的；\n（五）除用人单位维持或者提高劳动合同约定条件续订劳动合同，劳动者不同意续订的情形外，依照本法第四十四条第一项规定终止固定期限劳动合同的；\n（六）依照本法第四十四条第四项、第五项规定终止劳动合同的；\n（七）法律、行政法规规定的其他情形。",
      "blankText": "有下列情形之一的，用人单位应当向劳动者支付经济补偿：\n（一）劳动者依照本法第三十八条规定解除劳动合同的；\n（二）用人单位依照本法第三十六条规定向劳动者提出解除劳动合同并与劳动者协商一致解除劳动合同的；\n（三）用人单位依照本法第四十条规定解除劳动合同的；\n（四）用人单位依照本法第四十一条第一款规定解除劳动合同的；\n（五）除用人单位维持或者提高劳动合同约定条件续订劳动合同，劳动者不同意续订的情形外，依照本法第四十四条第一项规定终止固定期限劳动合同的；\n（六）依照本法第四十四条第四项、第五项规定终止劳动合同的；\n（七）法律、行政法规规定的其他情形。"
    },
    {
      "id": 154,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 47,
      "text": "经济补偿按劳动者在本单位工作的年限，每满一年支付一个月工资的标准向劳动者支付。六个月以上不满一年的，按一年计算；不满六个月的，向劳动者支付半个月工资的经济补偿。\n劳动者月工资高于用人单位所在直辖市、设区的市级人民政府公布的本地区上年度职工月平均工资三倍的，向其支付经济补偿的标准按职工月平均工资三倍的数额支付，向其支付经济补偿的年限最高不超过十二年。\n本条所称月工资是指劳动者在劳动合同解除或者终止前十二个月的平均工资。",
      "blankText": "经济补偿按劳动者在本单位工作的年限，每满一年支付一个月工资的标准向劳动者支付。六个月以上不满一年的，按一年计算；不满六个月的，向劳动者支付半个月工资的经济补偿。\n劳动者月工资高于用人单位所在直辖市、设区的市级人民政府公布的本地区上年度职工月平均工资三倍的，向其支付经济补偿的标准按职工月平均工资三倍的数额支付，向其支付经济补偿的年限最高不超过十二年。\n本条所称月工资是指劳动者在劳动合同解除或者终止前十二个月的平均工资。"
    },
    {
      "id": 155,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 48,
      "text": "用人单位违反本法规定解除或者终止劳动合同，劳动者要求继续履行劳动合同的，用人单位应当继续履行；劳动者不要求继续履行劳动合同或者劳动合同已经不能继续履行的，用人单位应当依照本法第八十七条规定支付赔偿金。",
      "blankText": "用人单位违反本法规定解除或者终止劳动合同，劳动者要求继续履行劳动合同的，用人单位应当继续履行；劳动者不要求继续履行劳动合同或者劳动合同已经不能继续履行的，用人单位应当依照本法第八十七条规定支付赔偿金。"
    },
    {
      "id": 156,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 49,
      "text": "国家采取措施，建立健全劳动者社会保险关系跨地区转移接续制度。",
      "blankText": "国家采取措施，建立健全劳动者社会保险关系跨地区转移接续制度。"
    },
    {
      "id": 157,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 50,
      "text": "用人单位应当在解除或者终止劳动合同时出具解除或者终止劳动合同的证明，并在十五日内为劳动者办理档案和社会保险关系转移手续。\n劳动者应当按照双方约定，办理工作交接。用人单位依照本法有关规定应当向劳动者支付经济补偿的，在办结工作交接时支付。\n用人单位对已经解除或者终止的劳动合同的文本，至少保存二年备查。",
      "blankText": "用人单位应当在解除或者终止劳动合同时出具解除或者终止劳动合同的证明，并在十五日内为劳动者办理档案和社会保险关系转移手续。\n劳动者应当按照双方约定，办理工作交接。用人单位依照本法有关规定应当向劳动者支付经济补偿的，在办结工作交接时支付。\n用人单位对已经解除或者终止的劳动合同的文本，至少保存二年备查。"
    },
    {
      "id": 158,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 51,
      "text": "企业职工一方与用人单位通过平等协商，可以就劳动报酬、工作时间、休息休假、劳动安全卫生、保险福利等事项订立集体合同。集体合同草案应当提交职工代表大会或者全体职工讨论通过。\n集体合同由工会代表企业职工一方与用人单位订立；尚未建立工会的用人单位，由上级工会指导劳动者推举的代表与用人单位订立。",
      "blankText": "企业职工一方与用人单位通过平等协商，可以就劳动报酬、工作时间、休息休假、劳动安全卫生、保险福利等事项订立集体合同。集体合同草案应当提交职工代表大会或者全体职工讨论通过。\n集体合同由工会代表企业职工一方与用人单位订立；尚未建立工会的用人单位，由上级工会指导劳动者推举的代表与用人单位订立。"
    },
    {
      "id": 159,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 52,
      "text": "企业职工一方与用人单位可以订立劳动安全卫生、女职工权益保护、工资调整机制等专项集体合同。",
      "blankText": "企业职工一方与用人单位可以订立劳动安全卫生、女职工权益保护、工资调整机制等专项集体合同。"
    },
    {
      "id": 160,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 53,
      "text": "在县级以下区域内，建筑业、采矿业、餐饮服务业等行业可以由工会与企业方面代表订立行业性集体合同，或者订立区域性集体合同。",
      "blankText": "在县级以下区域内，建筑业、采矿业、餐饮服务业等行业可以由工会与企业方面代表订立行业性集体合同，或者订立区域性集体合同。"
    },
    {
      "id": 161,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 54,
      "text": "集体合同订立后，应当报送劳动行政部门；劳动行政部门自收到集体合同文本之日起十五日内未提出异议的，集体合同即行生效。\n依法订立的集体合同对用人单位和劳动者具有约束力。行业性、区域性集体合同对当地本行业、本区域的用人单位和劳动者具有约束力。",
      "blankText": "集体合同订立后，应当报送劳动行政部门；劳动行政部门自收到集体合同文本之日起十五日内未提出异议的，集体合同即行生效。\n依法订立的集体合同对用人单位和劳动者具有约束力。行业性、区域性集体合同对当地本行业、本区域的用人单位和劳动者具有约束力。"
    },
    {
      "id": 162,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 55,
      "text": "集体合同中劳动报酬和劳动条件等标准不得低于当地人民政府规定的最低标准；用人单位与劳动者订立的劳动合同中劳动报酬和劳动条件等标准不得低于集体合同规定的标准。",
      "blankText": "集体合同中劳动报酬和劳动条件等标准不得低于当地人民政府规定的最低标准；用人单位与劳动者订立的劳动合同中劳动报酬和劳动条件等标准不得低于集体合同规定的标准。"
    },
    {
      "id": 163,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 56,
      "text": "用人单位违反集体合同，侵犯职工劳动权益的，工会可以依法要求用人单位承担责任；因履行集体合同发生争议，经协商解决不成的，工会可以依法申请仲裁、提起诉讼。",
      "blankText": "用人单位违反集体合同，侵犯职工劳动权益的，工会可以依法要求用人单位承担责任；因履行集体合同发生争议，经协商解决不成的，工会可以依法申请仲裁、提起诉讼。"
    },
    {
      "id": 164,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 57,
      "text": "经营劳务派遣业务应当具备下列条件：\n（一）注册资本不得少于人民币二百万元；\n（二）有与开展业务相适应的固定的经营场所和设施；\n（三）有符合法律、行政法规规定的劳务派遣管理制度；\n（四）法律、行政法规规定的其他条件。\n经营劳务派遣业务，应当向劳动行政部门依法申请行政许可；经许可的，依法办理相应的公司登记。未经许可，任何单位和个人不得经营劳务派遣业务。",
      "blankText": "经营劳务派遣业务应当具备下列条件：\n（一）注册资本不得少于人民币二百万元；\n（二）有与开展业务相适应的固定的经营场所和设施；\n（三）有符合法律、行政法规规定的劳务派遣管理制度；\n（四）法律、行政法规规定的其他条件。\n经营劳务派遣业务，应当向劳动行政部门依法申请行政许可；经许可的，依法办理相应的公司登记。未经许可，任何单位和个人不得经营劳务派遣业务。"
    },
    {
      "id": 165,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 58,
      "text": "劳务派遣单位是本法所称用人单位，应当履行用人单位对劳动者的义务。劳务派遣单位与被派遣劳动者订立的劳动合同，除应当载明本法第十七条规定的事项外，还应当载明被派遣劳动者的用工单位以及派遣期限、工作岗位等情况。\n劳务派遣单位应当与被派遣劳动者订立二年以上的固定期限劳动合同，按月支付劳动报酬；被派遣劳动者在无工作期间，劳务派遣单位应当按照所在地人民政府规定的最低工资标准，向其按月支付报酬。",
      "blankText": "劳务派遣单位是本法所称用人单位，应当履行用人单位对劳动者的义务。劳务派遣单位与被派遣劳动者订立的劳动合同，除应当载明本法第十七条规定的事项外，还应当载明被派遣劳动者的用工单位以及派遣期限、工作岗位等情况。\n劳务派遣单位应当与被派遣劳动者订立二年以上的固定期限劳动合同，按月支付劳动报酬；被派遣劳动者在无工作期间，劳务派遣单位应当按照所在地人民政府规定的最低工资标准，向其按月支付报酬。"
    },
    {
      "id": 166,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 59,
      "text": "劳务派遣单位派遣劳动者应当与接受以劳务派遣形式用工的单位（以下称用工单位）订立劳务派遣协议。劳务派遣协议应当约定派遣岗位和人员数量、派遣期限、劳动报酬和社会保险费的数额与支付方式以及违反协议的责任。\n用工单位应当根据工作岗位的实际需要与劳务派遣单位确定派遣期限，不得将连续用工期限分割订立数个短期劳务派遣协议。",
      "blankText": "劳务派遣单位派遣劳动者应当与接受以劳务派遣形式用工的单位（以下称用工单位）订立劳务派遣协议。劳务派遣协议应当约定派遣岗位和人员数量、派遣期限、劳动报酬和社会保险费的数额与支付方式以及违反协议的责任。\n用工单位应当根据工作岗位的实际需要与劳务派遣单位确定派遣期限，不得将连续用工期限分割订立数个短期劳务派遣协议。"
    },
    {
      "id": 167,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 60,
      "text": "劳务派遣单位应当将劳务派遣协议的内容告知被派遣劳动者。\n劳务派遣单位不得克扣用工单位按照劳务派遣协议支付给被派遣劳动者的劳动报酬。\n劳务派遣单位和用工单位不得向被派遣劳动者收取费用。",
      "blankText": "劳务派遣单位应当将劳务派遣协议的内容告知被派遣劳动者。\n劳务派遣单位不得克扣用工单位按照劳务派遣协议支付给被派遣劳动者的劳动报酬。\n劳务派遣单位和用工单位不得向被派遣劳动者收取费用。"
    },
    {
      "id": 168,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 61,
      "text": "劳务派遣单位跨地区派遣劳动者的，被派遣劳动者享有的劳动报酬和劳动条件，按照用工单位所在地的标准执行。",
      "blankText": "劳务派遣单位跨地区派遣劳动者的，被派遣劳动者享有的劳动报酬和劳动条件，按照用工单位所在地的标准执行。"
    },
    {
      "id": 169,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 62,
      "text": "用工单位应当履行下列义务：\n（一）执行国家劳动标准，提供相应的劳动条件和劳动保护；\n（二）告知被派遣劳动者的工作要求和劳动报酬；\n（三）支付加班费、绩效奖金，提供与工作岗位相关的福利待遇；\n（四）对在岗被派遣劳动者进行工作岗位所必需的培训；\n（五）连续用工的，实行正常的工资调整机制。\n用工单位不得将被派遣劳动者再派遣到其他用人单位。",
      "blankText": "用工单位应当履行下列义务：\n（一）执行国家劳动标准，提供相应的劳动条件和劳动保护；\n（二）告知被派遣劳动者的工作要求和劳动报酬；\n（三）支付加班费、绩效奖金，提供与工作岗位相关的福利待遇；\n（四）对在岗被派遣劳动者进行工作岗位所必需的培训；\n（五）连续用工的，实行正常的工资调整机制。\n用工单位不得将被派遣劳动者再派遣到其他用人单位。"
    },
    {
      "id": 170,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 63,
      "text": "被派遣劳动者享有与用工单位的劳动者同工同酬的权利。用工单位应当按照同工同酬原则，对被派遣劳动者与本单位同类岗位的劳动者实行相同的劳动报酬分配办法。用工单位无同类岗位劳动者的，参照用工单位所在地相同或者相近岗位劳动者的劳动报酬确定。\n劳务派遣单位与被派遣劳动者订立的劳动合同和与用工单位订立的劳务派遣协议，载明或者约定的向被派遣劳动者支付的劳动报酬应当符合前款规定。",
      "blankText": "被派遣劳动者享有与用工单位的劳动者同工同酬的权利。用工单位应当按照同工同酬原则，对被派遣劳动者与本单位同类岗位的劳动者实行相同的劳动报酬分配办法。用工单位无同类岗位劳动者的，参照用工单位所在地相同或者相近岗位劳动者的劳动报酬确定。\n劳务派遣单位与被派遣劳动者订立的劳动合同和与用工单位订立的劳务派遣协议，载明或者约定的向被派遣劳动者支付的劳动报酬应当符合前款规定。"
    },
    {
      "id": 171,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 64,
      "text": "被派遣劳动者有权在劳务派遣单位或者用工单位依法参加或者组织工会，维护自身的合法权益。",
      "blankText": "被派遣劳动者有权在劳务派遣单位或者用工单位依法参加或者组织工会，维护自身的合法权益。"
    },
    {
      "id": 172,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 65,
      "text": "被派遣劳动者可以依照本法第三十六条、第三十八条的规定与劳务派遣单位解除劳动合同。\n被派遣劳动者有本法第三十九条和第四十条第一项、第二项规定情形的，用工单位可以将劳动者退回劳务派遣单位，劳务派遣单位依照本法有关规定，可以与劳动者解除劳动合同。",
      "blankText": "被派遣劳动者可以依照本法第三十六条、第三十八条的规定与劳务派遣单位解除劳动合同。\n被派遣劳动者有本法第三十九条和第四十条第一项、第二项规定情形的，用工单位可以将劳动者退回劳务派遣单位，劳务派遣单位依照本法有关规定，可以与劳动者解除劳动合同。"
    },
    {
      "id": 173,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 66,
      "text": "劳动合同用工是我国的企业基本用工形式。劳务派遣用工是补充形式，只能在临时性、辅助性或者替代性的工作岗位上实施。\n前款规定的临时性工作岗位是指存续时间不超过六个月的岗位；辅助性工作岗位是指为主营业务岗位提供服务的非主营业务岗位；替代性工作岗位是指用工单位的劳动者因脱产学习、休假等原因无法工作的一定期间内，可以由其他劳动者替代工作的岗位。\n用工单位应当严格控制劳务派遣用工数量，不得超过其用工总量的一定比例，具体比例由国务院劳动行政部门规定。",
      "blankText": "劳动合同用工是我国的企业基本用工形式。劳务派遣用工是补充形式，只能在临时性、辅助性或者替代性的工作岗位上实施。\n前款规定的临时性工作岗位是指存续时间不超过六个月的岗位；辅助性工作岗位是指为主营业务岗位提供服务的非主营业务岗位；替代性工作岗位是指用工单位的劳动者因脱产学习、休假等原因无法工作的一定期间内，可以由其他劳动者替代工作的岗位。\n用工单位应当严格控制劳务派遣用工数量，不得超过其用工总量的一定比例，具体比例由国务院劳动行政部门规定。"
    },
    {
      "id": 174,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 67,
      "text": "用人单位不得设立劳务派遣单位向本单位或者所属单位派遣劳动者。",
      "blankText": "用人单位不得设立劳务派遣单位向本单位或者所属单位派遣劳动者。"
    },
    {
      "id": 175,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 68,
      "text": "非全日制用工，是指以小时计酬为主，劳动者在同一用人单位一般平均每日工作时间不超过四小时，每周工作时间累计不超过二十四小时的用工形式。",
      "blankText": "非全日制用工，是指以小时计酬为主，劳动者在同一用人单位一般平均每日工作时间不超过四小时，每周工作时间累计不超过二十四小时的用工形式。"
    },
    {
      "id": 176,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 69,
      "text": "非全日制用工双方当事人可以订立口头协议。\n从事非全日制用工的劳动者可以与一个或者一个以上用人单位订立劳动合同；但是，后订立的劳动合同不得影响先订立的劳动合同的履行。",
      "blankText": "非全日制用工双方当事人可以订立口头协议。\n从事非全日制用工的劳动者可以与一个或者一个以上用人单位订立劳动合同；但是，后订立的劳动合同不得影响先订立的劳动合同的履行。"
    },
    {
      "id": 177,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 70,
      "text": "非全日制用工双方当事人不得约定试用期。",
      "blankText": "非全日制用工双方当事人不得约定试用期。"
    },
    {
      "id": 178,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 71,
      "text": "非全日制用工双方当事人任何一方都可以随时通知对方终止用工。终止用工，用人单位不向劳动者支付经济补偿。",
      "blankText": "非全日制用工双方当事人任何一方都可以随时通知对方终止用工。终止用工，用人单位不向劳动者支付经济补偿。"
    },
    {
      "id": 179,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 72,
      "text": "非全日制用工小时计酬标准不得低于用人单位所在地人民政府规定的最低小时工资标准。\n非全日制用工劳动报酬结算支付周期最长不得超过十五日。",
      "blankText": "非全日制用工小时计酬标准不得低于用人单位所在地人民政府规定的最低小时工资标准。\n非全日制用工劳动报酬结算支付周期最长不得超过十五日。"
    },
    {
      "id": 180,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 73,
      "text": "国务院劳动行政部门负责全国劳动合同制度实施的监督管理。\n县级以上地方人民政府劳动行政部门负责本行政区域内劳动合同制度实施的监督管理。\n县级以上各级人民政府劳动行政部门在劳动合同制度实施的监督管理工作中，应当听取工会、企业方面代表以及有关行业主管部门的意见。",
      "blankText": "国务院劳动行政部门负责全国劳动合同制度实施的监督管理。\n县级以上地方人民政府劳动行政部门负责本行政区域内劳动合同制度实施的监督管理。\n县级以上各级人民政府劳动行政部门在劳动合同制度实施的监督管理工作中，应当听取工会、企业方面代表以及有关行业主管部门的意见。"
    },
    {
      "id": 181,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 74,
      "text": "县级以上地方人民政府劳动行政部门依法对下列实施劳动合同制度的情况进行监督检查：\n（一）用人单位制定直接涉及劳动者切身利益的规章制度及其执行的情况；\n（二）用人单位与劳动者订立和解除劳动合同的情况；\n（三）劳务派遣单位和用工单位遵守劳务派遣有关规定的情况；\n（四）用人单位遵守国家关于劳动者工作时间和休息休假规定的情况；\n（五）用人单位支付劳动合同约定的劳动报酬和执行最低工资标准的情况；\n（六）用人单位参加各项社会保险和缴纳社会保险费的情况；\n（七）法律、法规规定的其他劳动监察事项。",
      "blankText": "县级以上地方人民政府劳动行政部门依法对下列实施劳动合同制度的情况进行监督检查：\n（一）用人单位制定直接涉及劳动者切身利益的规章制度及其执行的情况；\n（二）用人单位与劳动者订立和解除劳动合同的情况；\n（三）劳务派遣单位和用工单位遵守劳务派遣有关规定的情况；\n（四）用人单位遵守国家关于劳动者工作时间和休息休假规定的情况；\n（五）用人单位支付劳动合同约定的劳动报酬和执行最低工资标准的情况；\n（六）用人单位参加各项社会保险和缴纳社会保险费的情况；\n（七）法律、法规规定的其他劳动监察事项。"
    },
    {
      "id": 182,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 75,
      "text": "县级以上地方人民政府劳动行政部门实施监督检查时，有权查阅与劳动合同、集体合同有关的材料，有权对劳动场所进行实地检查，用人单位和劳动者都应当如实提供有关情况和材料。\n劳动行政部门的工作人员进行监督检查，应当出示证件，依法行使职权，文明执法。",
      "blankText": "县级以上地方人民政府劳动行政部门实施监督检查时，有权查阅与劳动合同、集体合同有关的材料，有权对劳动场所进行实地检查，用人单位和劳动者都应当如实提供有关情况和材料。\n劳动行政部门的工作人员进行监督检查，应当出示证件，依法行使职权，文明执法。"
    },
    {
      "id": 183,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 76,
      "text": "县级以上人民政府建设、卫生、安全生产监督管理等有关主管部门在各自职责范围内，对用人单位执行劳动合同制度的情况进行监督管理。",
      "blankText": "县级以上人民政府建设、卫生、安全生产监督管理等有关主管部门在各自职责范围内，对用人单位执行劳动合同制度的情况进行监督管理。"
    },
    {
      "id": 184,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 77,
      "text": "劳动者合法权益受到侵害的，有权要求有关部门依法处理，或者依法申请仲裁、提起诉讼。",
      "blankText": "劳动者合法权益受到侵害的，有权要求有关部门依法处理，或者依法申请仲裁、提起诉讼。"
    },
    {
      "id": 185,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 78,
      "text": "工会依法维护劳动者的合法权益，对用人单位履行劳动合同、集体合同的情况进行监督。用人单位违反劳动法律、法规和劳动合同、集体合同的，工会有权提出意见或者要求纠正；劳动者申请仲裁、提起诉讼的，工会依法给予支持和帮助。",
      "blankText": "工会依法维护劳动者的合法权益，对用人单位履行劳动合同、集体合同的情况进行监督。用人单位违反劳动法律、法规和劳动合同、集体合同的，工会有权提出意见或者要求纠正；劳动者申请仲裁、提起诉讼的，工会依法给予支持和帮助。"
    },
    {
      "id": 186,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 79,
      "text": "任何组织或者个人对违反本法的行为都有权举报，县级以上人民政府劳动行政部门应当及时核实、处理，并对举报有功人员给予奖励。",
      "blankText": "任何组织或者个人对违反本法的行为都有权举报，县级以上人民政府劳动行政部门应当及时核实、处理，并对举报有功人员给予奖励。"
    },
    {
      "id": 187,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 80,
      "text": "用人单位直接涉及劳动者切身利益的规章制度违反法律、法规规定的，由劳动行政部门责令改正，给予警告；给劳动者造成损害的，应当承担赔偿责任。",
      "blankText": "用人单位直接涉及劳动者切身利益的规章制度违反法律、法规规定的，由劳动行政部门责令改正，给予警告；给劳动者造成损害的，应当承担赔偿责任。"
    },
    {
      "id": 188,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 81,
      "text": "用人单位提供的劳动合同文本未载明本法规定的劳动合同必备条款或者用人单位未将劳动合同文本交付劳动者的，由劳动行政部门责令改正；给劳动者造成损害的，应当承担赔偿责任。",
      "blankText": "用人单位提供的劳动合同文本未载明本法规定的劳动合同必备条款或者用人单位未将劳动合同文本交付劳动者的，由劳动行政部门责令改正；给劳动者造成损害的，应当承担赔偿责任。"
    },
    {
      "id": 189,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 82,
      "text": "用人单位自用工之日起超过一个月不满一年未与劳动者订立书面劳动合同的，应当向劳动者每月支付二倍的工资。\n用人单位违反本法规定不与劳动者订立无固定期限劳动合同的，自应当订立无固定期限劳动合同之日起向劳动者每月支付二倍的工资。",
      "blankText": "用人单位自用工之日起超过一个月不满一年未与劳动者订立书面劳动合同的，应当向劳动者每月支付二倍的工资。\n用人单位违反本法规定不与劳动者订立无固定期限劳动合同的，自应当订立无固定期限劳动合同之日起向劳动者每月支付二倍的工资。"
    },
    {
      "id": 190,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 83,
      "text": "用人单位违反本法规定与劳动者约定试用期的，由劳动行政部门责令改正；违法约定的试用期已经履行的，由用人单位以劳动者试用期满月工资为标准，按已经履行的超过法定试用期的期间向劳动者支付赔偿金。",
      "blankText": "用人单位违反本法规定与劳动者约定试用期的，由劳动行政部门责令改正；违法约定的试用期已经履行的，由用人单位以劳动者试用期满月工资为标准，按已经履行的超过法定试用期的期间向劳动者支付赔偿金。"
    },
    {
      "id": 191,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 84,
      "text": "用人单位违反本法规定，扣押劳动者居民身份证等证件的，由劳动行政部门责令限期退还劳动者本人，并依照有关法律规定给予处罚。\n用人单位违反本法规定，以担保或者其他名义向劳动者收取财物的，由劳动行政部门责令限期退还劳动者本人，并以每人五百元以上二千元以下的标准处以罚款；给劳动者造成损害的，应当承担赔偿责任。\n劳动者依法解除或者终止劳动合同，用人单位扣押劳动者档案或者其他物品的，依照前款规定处罚。",
      "blankText": "用人单位违反本法规定，扣押劳动者居民身份证等证件的，由劳动行政部门责令限期退还劳动者本人，并依照有关法律规定给予处罚。\n用人单位违反本法规定，以担保或者其他名义向劳动者收取财物的，由劳动行政部门责令限期退还劳动者本人，并以每人五百元以上二千元以下的标准处以罚款；给劳动者造成损害的，应当承担赔偿责任。\n劳动者依法解除或者终止劳动合同，用人单位扣押劳动者档案或者其他物品的，依照前款规定处罚。"
    },
    {
      "id": 192,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 85,
      "text": "用人单位有下列情形之一的，由劳动行政部门责令限期支付劳动报酬、加班费或者经济补偿；劳动报酬低于当地最低工资标准的，应当支付其差额部分；逾期不支付的，责令用人单位按应付金额百分之五十以上百分之一百以下的标准向劳动者加付赔偿金：\n（一）未按照劳动合同的约定或者国家规定及时足额支付劳动者劳动报酬的；\n（二）低于当地最低工资标准支付劳动者工资的；\n（三）安排加班不支付加班费的；\n（四）解除或者终止劳动合同，未依照本法规定向劳动者支付经济补偿的。",
      "blankText": "用人单位有下列情形之一的，由劳动行政部门责令限期支付劳动报酬、加班费或者经济补偿；劳动报酬低于当地最低工资标准的，应当支付其差额部分；逾期不支付的，责令用人单位按应付金额百分之五十以上百分之一百以下的标准向劳动者加付赔偿金：\n（一）未按照劳动合同的约定或者国家规定及时足额支付劳动者劳动报酬的；\n（二）低于当地最低工资标准支付劳动者工资的；\n（三）安排加班不支付加班费的；\n（四）解除或者终止劳动合同，未依照本法规定向劳动者支付经济补偿的。"
    },
    {
      "id": 193,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 86,
      "text": "劳动合同依照本法第二十六条规定被确认无效，给对方造成损害的，有过错的一方应当承担赔偿责任。",
      "blankText": "劳动合同依照本法第二十六条规定被确认无效，给对方造成损害的，有过错的一方应当承担赔偿责任。"
    },
    {
      "id": 194,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 87,
      "text": "用人单位违反本法规定解除或者终止劳动合同的，应当依照本法第四十七条规定的经济补偿标准的二倍向劳动者支付赔偿金。",
      "blankText": "用人单位违反本法规定解除或者终止劳动合同的，应当依照本法第四十七条规定的经济补偿标准的二倍向劳动者支付赔偿金。"
    },
    {
      "id": 195,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 88,
      "text": "用人单位有下列情形之一的，依法给予行政处罚；构成犯罪的，依法追究刑事责任；给劳动者造成损害的，应当承担赔偿责任：\n（一）以暴力、威胁或者非法限制人身自由的手段强迫劳动的；\n（二）违章指挥或者强令冒险作业危及劳动者人身安全的；\n（三）侮辱、体罚、殴打、非法搜查或者拘禁劳动者的；\n（四）劳动条件恶劣、环境污染严重，给劳动者身心健康造成严重损害的。",
      "blankText": "用人单位有下列情形之一的，依法给予行政处罚；构成犯罪的，依法追究刑事责任；给劳动者造成损害的，应当承担赔偿责任：\n（一）以暴力、威胁或者非法限制人身自由的手段强迫劳动的；\n（二）违章指挥或者强令冒险作业危及劳动者人身安全的；\n（三）侮辱、体罚、殴打、非法搜查或者拘禁劳动者的；\n（四）劳动条件恶劣、环境污染严重，给劳动者身心健康造成严重损害的。"
    },
    {
      "id": 196,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 89,
      "text": "用人单位违反本法规定未向劳动者出具解除或者终止劳动合同的书面证明，由劳动行政部门责令改正；给劳动者造成损害的，应当承担赔偿责任。",
      "blankText": "用人单位违反本法规定未向劳动者出具解除或者终止劳动合同的书面证明，由劳动行政部门责令改正；给劳动者造成损害的，应当承担赔偿责任。"
    },
    {
      "id": 197,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 90,
      "text": "劳动者违反本法规定解除劳动合同，或者违反劳动合同中约定的保密义务或者竞业限制，给用人单位造成损失的，应当承担赔偿责任。",
      "blankText": "劳动者违反本法规定解除劳动合同，或者违反劳动合同中约定的保密义务或者竞业限制，给用人单位造成损失的，应当承担赔偿责任。"
    },
    {
      "id": 198,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 91,
      "text": "用人单位招用与其他用人单位尚未解除或者终止劳动合同的劳动者，给其他用人单位造成损失的，应当承担连带赔偿责任。",
      "blankText": "用人单位招用与其他用人单位尚未解除或者终止劳动合同的劳动者，给其他用人单位造成损失的，应当承担连带赔偿责任。"
    },
    {
      "id": 199,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 92,
      "text": "违反本法规定，未经许可，擅自经营劳务派遣业务的，由劳动行政部门责令停止违法行为，没收违法所得，并处违法所得一倍以上五倍以下的罚款；没有违法所得的，可以处五万元以下的罚款。\n劳务派遣单位、用工单位违反本法有关劳务派遣规定的，由劳动行政部门责令限期改正；逾期不改正的，以每人五千元以上一万元以下的标准处以罚款，对劳务派遣单位，吊销其劳务派遣业务经营许可证。用工单位给被派遣劳动者造成损害的，劳务派遣单位与用工单位承担连带赔偿责任。",
      "blankText": "违反本法规定，未经许可，擅自经营劳务派遣业务的，由劳动行政部门责令停止违法行为，没收违法所得，并处违法所得一倍以上五倍以下的罚款；没有违法所得的，可以处五万元以下的罚款。\n劳务派遣单位、用工单位违反本法有关劳务派遣规定的，由劳动行政部门责令限期改正；逾期不改正的，以每人五千元以上一万元以下的标准处以罚款，对劳务派遣单位，吊销其劳务派遣业务经营许可证。用工单位给被派遣劳动者造成损害的，劳务派遣单位与用工单位承担连带赔偿责任。"
    },
    {
      "id": 200,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 93,
      "text": "对不具备合法经营资格的用人单位的违法犯罪行为，依法追究法律责任；劳动者已经付出劳动的，该单位或者其出资人应当依照本法有关规定向劳动者支付劳动报酬、经济补偿、赔偿金；给劳动者造成损害的，应当承担赔偿责任。",
      "blankText": "对不具备合法经营资格的用人单位的违法犯罪行为，依法追究法律责任；劳动者已经付出劳动的，该单位或者其出资人应当依照本法有关规定向劳动者支付劳动报酬、经济补偿、赔偿金；给劳动者造成损害的，应当承担赔偿责任。"
    },
    {
      "id": 201,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 94,
      "text": "个人承包经营违反本法规定招用劳动者，给劳动者造成损害的，发包的组织与个人承包经营者承担连带赔偿责任。",
      "blankText": "个人承包经营违反本法规定招用劳动者，给劳动者造成损害的，发包的组织与个人承包经营者承担连带赔偿责任。"
    },
    {
      "id": 202,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 95,
      "text": "劳动行政部门和其他有关主管部门及其工作人员玩忽职守、不履行法定职责，或者违法行使职权，给劳动者或者用人单位造成损害的，应当承担赔偿责任；对直接负责的主管人员和其他直接责任人员，依法给予行政处分；构成犯罪的，依法追究刑事责任。",
      "blankText": "劳动行政部门和其他有关主管部门及其工作人员玩忽职守、不履行法定职责，或者违法行使职权，给劳动者或者用人单位造成损害的，应当承担赔偿责任；对直接负责的主管人员和其他直接责任人员，依法给予行政处分；构成犯罪的，依法追究刑事责任。"
    },
    {
      "id": 203,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 96,
      "text": "事业单位与实行聘用制的工作人员订立、履行、变更、解除或者终止劳动合同，法律、行政法规或者国务院另有规定的，依照其规定；未作规定的，依照本法有关规定执行。",
      "blankText": "事业单位与实行聘用制的工作人员订立、履行、变更、解除或者终止劳动合同，法律、行政法规或者国务院另有规定的，依照其规定；未作规定的，依照本法有关规定执行。"
    },
    {
      "id": 204,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 97,
      "text": "本法施行前已依法订立且在本法施行之日存续的劳动合同，继续履行；本法第十四条第二款第三项规定连续订立固定期限劳动合同的次数，自本法施行后续订固定期限劳动合同时开始计算。\n本法施行前已建立劳动关系，尚未订立书面劳动合同的，应当自本法施行之日起一个月内订立。\n本法施行之日存续的劳动合同在本法施行后解除或者终止，依照本法第四十六条规定应当支付经济补偿的，经济补偿年限自本法施行之日起计算；本法施行前按照当时有关规定，用人单位应当向劳动者支付经济补偿的，按照当时有关规定执行。",
      "blankText": "本法施行前已依法订立且在本法施行之日存续的劳动合同，继续履行；本法第十四条第二款第三项规定连续订立固定期限劳动合同的次数，自本法施行后续订固定期限劳动合同时开始计算。\n本法施行前已建立劳动关系，尚未订立书面劳动合同的，应当自本法施行之日起一个月内订立。\n本法施行之日存续的劳动合同在本法施行后解除或者终止，依照本法第四十六条规定应当支付经济补偿的，经济补偿年限自本法施行之日起计算；本法施行前按照当时有关规定，用人单位应当向劳动者支付经济补偿的，按照当时有关规定执行。"
    },
    {
      "id": 205,
      "category": "劳动关系基础",
      "law": "劳动合同法",
      "articleNum": 98,
      "text": "本法自2008年1月1日起施行。2012年修正的决定自2013年7月1日起施行。",
      "blankText": "本法自______年______月______日起施行。______年修正的决定自______年______月______日起施行。"
    },
    {
      "id": 206,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 1,
      "text": "为了贯彻实施《中华人民共和国劳动合同法》（以下简称劳动合同法），制定本条例。",
      "blankText": "为了贯彻实施《中华人民共和国劳动合同法》（以下简称劳动合同法），制定本条例。"
    },
    {
      "id": 207,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 2,
      "text": "各级人民政府和县级以上人民政府劳动行政等有关部门以及工会等组织，应当采取措施，推动劳动合同的订立和履行，促进劳动关系的和谐。",
      "blankText": "各级人民政府和县级以上人民政府劳动行政等有关部门以及工会等组织，应当采取措施，推动劳动合同的订立和履行，促进劳动关系的和谐。"
    },
    {
      "id": 208,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 3,
      "text": "依法成立的会计师事务所、律师事务所等合伙组织和基金会，属于劳动合同法规定的用人单位。",
      "blankText": "依法成立的会计师事务所、律师事务所等合伙组织和基金会，属于劳动合同法规定的用人单位。"
    },
    {
      "id": 209,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 4,
      "text": "劳动合同法规定的用人单位设立的分支机构，依法取得营业执照或者登记证书的，可以作为用人单位与劳动者订立劳动合同；未依法取得营业执照或者登记证书的，受用人单位委托可以与劳动者订立劳动合同。",
      "blankText": "劳动合同法规定的用人单位设立的分支机构，依法取得营业执照或者登记证书的，可以作为用人单位与劳动者订立劳动合同；未依法取得营业执照或者登记证书的，受用人单位委托可以与劳动者订立劳动合同。"
    },
    {
      "id": 210,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 5,
      "text": "自用工之日起一个月内，经用人单位书面通知后，劳动者不与用人单位订立书面劳动合同的，用人单位应当书面通知劳动者终止劳动关系，无需向劳动者支付经济补偿，但是应当依法向劳动者支付其实际工作时间的劳动报酬。",
      "blankText": "自用工之日起一个月内，经用人单位书面通知后，劳动者不与用人单位订立书面劳动合同的，用人单位应当书面通知劳动者终止劳动关系，无需向劳动者支付经济补偿，但是应当依法向劳动者支付其实际工作时间的劳动报酬。"
    },
    {
      "id": 211,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 6,
      "text": "用人单位自用工之日起超过一个月不满一年未与劳动者订立书面劳动合同的，应当依照劳动合同法第八十二条的规定向劳动者每月支付两倍的工资，并与劳动者补订书面劳动合同；劳动者不与用人单位订立书面劳动合同的，用人单位应当书面通知劳动者终止劳动关系，并依照劳动合同法第四十七条的规定支付经济补偿。\n前款规定的用人单位向劳动者每月支付两倍工资的起算时间为用工之日起满一个月的次日，截止时间为补订书面劳动合同的前一日。",
      "blankText": "用人单位自用工之日起超过一个月不满一年未与劳动者订立书面劳动合同的，应当依照劳动合同法第八十二条的规定向劳动者每月支付两倍的工资，并与劳动者补订书面劳动合同；劳动者不与用人单位订立书面劳动合同的，用人单位应当书面通知劳动者终止劳动关系，并依照劳动合同法第四十七条的规定支付经济补偿。\n前款规定的用人单位向劳动者每月支付两倍工资的起算时间为用工之日起满一个月的次日，截止时间为补订书面劳动合同的前一日。"
    },
    {
      "id": 212,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 7,
      "text": "用人单位自用工之日起满一年未与劳动者订立书面劳动合同的，自用工之日起满一个月的次日至满一年的前一日应当依照劳动合同法第八十二条的规定向劳动者每月支付两倍的工资，并视为自用工之日起满一年的当日已经与劳动者订立无固定期限劳动合同，应当立即与劳动者补订书面劳动合同。",
      "blankText": "用人单位自用工之日起满一年未与劳动者订立书面劳动合同的，自用工之日起满一个月的次日至满一年的前一日应当依照劳动合同法第八十二条的规定向劳动者每月支付两倍的工资，并视为自用工之日起满一年的当日已经与劳动者订立无固定期限劳动合同，应当立即与劳动者补订书面劳动合同。"
    },
    {
      "id": 213,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 8,
      "text": "劳动合同法第七条规定的职工名册，应当包括劳动者姓名、性别、公民身份号码、户籍地址及现住址、联系方式、用工形式、用工起始时间、劳动合同期限等内容。",
      "blankText": "劳动合同法第七条规定的职工名册，应当包括劳动者姓名、性别、公民身份号码、户籍地址及现住址、联系方式、用工形式、用工起始时间、劳动合同期限等内容。"
    },
    {
      "id": 214,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 9,
      "text": "劳动合同法第十四条第二款规定的连续工作满10年的起始时间，应当自用人单位用工之日起计算，包括劳动合同法施行前的工作年限。",
      "blankText": "劳动合同法第十四条第二款规定的连续工作满______年的起始时间，应当自用人单位用工之日起计算，包括劳动合同法施行前的工作年限。"
    },
    {
      "id": 215,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 10,
      "text": "劳动者非因本人原因从原用人单位被安排到新用人单位工作的，劳动者在原用人单位的工作年限合并计算为新用人单位的工作年限。原用人单位已经向劳动者支付经济补偿的，新用人单位在依法解除、终止劳动合同计算支付经济补偿的工作年限时，不再计算劳动者在原用人单位的工作年限。",
      "blankText": "劳动者非因本人原因从原用人单位被安排到新用人单位工作的，劳动者在原用人单位的工作年限合并计算为新用人单位的工作年限。原用人单位已经向劳动者支付经济补偿的，新用人单位在依法解除、终止劳动合同计算支付经济补偿的工作年限时，不再计算劳动者在原用人单位的工作年限。"
    },
    {
      "id": 216,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 11,
      "text": "除劳动者与用人单位协商一致的情形外，劳动者依照劳动合同法第十四条第二款的规定，提出订立无固定期限劳动合同的，用人单位应当与其订立无固定期限劳动合同。对劳动合同的内容，双方应当按照合法、公平、平等自愿、协商一致、诚实信用的原则协商确定；对协商不一致的内容，依照劳动合同法第十八条的规定执行。",
      "blankText": "除劳动者与用人单位协商一致的情形外，劳动者依照劳动合同法第十四条第二款的规定，提出订立无固定期限劳动合同的，用人单位应当与其订立无固定期限劳动合同。对劳动合同的内容，双方应当按照合法、公平、平等自愿、协商一致、诚实信用的原则协商确定；对协商不一致的内容，依照劳动合同法第十八条的规定执行。"
    },
    {
      "id": 217,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 12,
      "text": "地方各级人民政府及县级以上地方人民政府有关部门为安置就业困难人员提供的给予岗位补贴和社会保险补贴的公益性岗位，其劳动合同不适用劳动合同法有关无固定期限劳动合同的规定以及支付经济补偿的规定。",
      "blankText": "地方各级人民政府及县级以上地方人民政府有关部门为安置就业困难人员提供的给予岗位补贴和社会保险补贴的公益性岗位，其劳动合同不适用劳动合同法有关无固定期限劳动合同的规定以及支付经济补偿的规定。"
    },
    {
      "id": 218,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 13,
      "text": "用人单位与劳动者不得在劳动合同法第四十四条规定的劳动合同终止情形之外约定其他的劳动合同终止条件。",
      "blankText": "用人单位与劳动者不得在劳动合同法第四十四条规定的劳动合同终止情形之外约定其他的劳动合同终止条件。"
    },
    {
      "id": 219,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 14,
      "text": "劳动合同履行地与用人单位注册地不一致的，有关劳动者的最低工资标准、劳动保护、劳动条件、职业危害防护和本地区上年度职工月平均工资标准等事项，按照劳动合同履行地的有关规定执行；用人单位注册地的有关标准高于劳动合同履行地的有关标准，且用人单位与劳动者约定按照用人单位注册地的有关规定执行的，从其约定。",
      "blankText": "劳动合同履行地与用人单位注册地不一致的，有关劳动者的最低工资标准、劳动保护、劳动条件、职业危害防护和本地区上年度职工月平均工资标准等事项，按照劳动合同履行地的有关规定执行；用人单位注册地的有关标准高于劳动合同履行地的有关标准，且用人单位与劳动者约定按照用人单位注册地的有关规定执行的，从其约定。"
    },
    {
      "id": 220,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 15,
      "text": "劳动者在试用期的工资不得低于本单位相同岗位最低档工资的80%或者不得低于劳动合同约定工资的80%，并不得低于用人单位所在地的最低工资标准。",
      "blankText": "劳动者在试用期的工资不得低于本单位相同岗位最低档工资的______%或者不得低于劳动合同约定工资的______%，并不得低于用人单位所在地的最低工资标准。"
    },
    {
      "id": 221,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 16,
      "text": "劳动合同法第二十二条第二款规定的培训费用，包括用人单位为了对劳动者进行专业技术培训而支付的有凭证的培训费用、培训期间的差旅费用以及因培训产生的用于该劳动者的其他直接费用。",
      "blankText": "劳动合同法第二十二条第二款规定的培训费用，包括用人单位为了对劳动者进行专业技术培训而支付的有凭证的培训费用、培训期间的差旅费用以及因培训产生的用于该劳动者的其他直接费用。"
    },
    {
      "id": 222,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 17,
      "text": "劳动合同期满，但是用人单位与劳动者依照劳动合同法第二十二条的规定约定的服务期尚未到期的，劳动合同应当续延至服务期满；双方另有约定的，从其约定。",
      "blankText": "劳动合同期满，但是用人单位与劳动者依照劳动合同法第二十二条的规定约定的服务期尚未到期的，劳动合同应当续延至服务期满；双方另有约定的，从其约定。"
    },
    {
      "id": 223,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 18,
      "text": "有下列情形之一的，依照劳动合同法规定的条件、程序，劳动者可以与用人单位解除固定期限劳动合同、无固定期限劳动合同或者以完成一定工作任务为期限的劳动合同：\n（一）劳动者与用人单位协商一致的；\n（二）劳动者提前30日以书面形式通知用人单位的；\n（三）劳动者在试用期内提前3日通知用人单位的；\n（四）用人单位未按照劳动合同约定提供劳动保护或者劳动条件的；\n（五）用人单位未及时足额支付劳动报酬的；\n（六）用人单位未依法为劳动者缴纳社会保险费的；\n（七）用人单位的规章制度违反法律、法规的规定，损害劳动者权益的；\n（八）用人单位以欺诈、胁迫的手段或者乘人之危，使劳动者在违背真实意思的情况下订立或者变更劳动合同的；\n（九）用人单位在劳动合同中免除自己的法定责任、排除劳动者权利的；\n（十）用人单位违反法律、行政法规强制性规定的；\n（十一）用人单位以暴力、威胁或者非法限制人身自由的手段强迫劳动者劳动的；\n（十二）用人单位违章指挥、强令冒险作业危及劳动者人身安全的；\n（十三）法律、行政法规规定劳动者可以解除劳动合同的其他情形。",
      "blankText": "有下列情形之一的，依照劳动合同法规定的条件、程序，劳动者可以与用人单位解除固定期限劳动合同、无固定期限劳动合同或者以完成一定工作任务为期限的劳动合同：\n（一）劳动者与用人单位协商一致的；\n（二）劳动者提前______日以书面形式通知用人单位的；\n（三）劳动者在试用期内提前______日通知用人单位的；\n（四）用人单位未按照劳动合同约定提供劳动保护或者劳动条件的；\n（五）用人单位未及时足额支付劳动报酬的；\n（六）用人单位未依法为劳动者缴纳社会保险费的；\n（七）用人单位的规章制度违反法律、法规的规定，损害劳动者权益的；\n（八）用人单位以欺诈、胁迫的手段或者乘人之危，使劳动者在违背真实意思的情况下订立或者变更劳动合同的；\n（九）用人单位在劳动合同中免除自己的法定责任、排除劳动者权利的；\n（十）用人单位违反法律、行政法规强制性规定的；\n（十一）用人单位以暴力、威胁或者非法限制人身自由的手段强迫劳动者劳动的；\n（十二）用人单位违章指挥、强令冒险作业危及劳动者人身安全的；\n（十三）法律、行政法规规定劳动者可以解除劳动合同的其他情形。"
    },
    {
      "id": 224,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 19,
      "text": "有下列情形之一的，依照劳动合同法规定的条件、程序，用人单位可以与劳动者解除固定期限劳动合同、无固定期限劳动合同或者以完成一定工作任务为期限的劳动合同：\n（一）用人单位与劳动者协商一致的；\n（二）劳动者在试用期间被证明不符合录用条件的；\n（三）劳动者严重违反用人单位的规章制度的；\n（四）劳动者严重失职，营私舞弊，给用人单位造成重大损害的；\n（五）劳动者同时与其他用人单位建立劳动关系，对完成本单位的工作任务造成严重影响，或者经用人单位提出，拒不改正的；\n（六）劳动者以欺诈、胁迫的手段或者乘人之危，使用人单位在违背真实意思的情况下订立或者变更劳动合同的；\n（七）劳动者被依法追究刑事责任的；\n（八）劳动者患病或者非因工负伤，在规定的医疗期满后不能从事原工作，也不能从事由用人单位另行安排的工作的；\n（九）劳动者不能胜任工作，经过培训或者调整工作岗位，仍不能胜任工作的；\n（十）劳动合同订立时所依据的客观情况发生重大变化，致使劳动合同无法履行，经用人单位与劳动者协商，未能就变更劳动合同内容达成协议的；\n（十一）用人单位依照企业破产法规定进行重整的；\n（十二）用人单位生产经营发生严重困难的；\n（十三）企业转产、重大技术革新或者经营方式调整，经变更劳动合同后，仍需裁减人员的；\n（十四）其他因劳动合同订立时所依据的客观经济情况发生重大变化，致使劳动合同无法履行的。",
      "blankText": "有下列情形之一的，依照劳动合同法规定的条件、程序，用人单位可以与劳动者解除固定期限劳动合同、无固定期限劳动合同或者以完成一定工作任务为期限的劳动合同：\n（一）用人单位与劳动者协商一致的；\n（二）劳动者在试用期间被证明不符合录用条件的；\n（三）劳动者严重违反用人单位的规章制度的；\n（四）劳动者严重失职，营私舞弊，给用人单位造成重大损害的；\n（五）劳动者同时与其他用人单位建立劳动关系，对完成本单位的工作任务造成严重影响，或者经用人单位提出，拒不改正的；\n（六）劳动者以欺诈、胁迫的手段或者乘人之危，使用人单位在违背真实意思的情况下订立或者变更劳动合同的；\n（七）劳动者被依法追究刑事责任的；\n（八）劳动者患病或者非因工负伤，在规定的医疗期满后不能从事原工作，也不能从事由用人单位另行安排的工作的；\n（九）劳动者不能胜任工作，经过培训或者调整工作岗位，仍不能胜任工作的；\n（十）劳动合同订立时所依据的客观情况发生重大变化，致使劳动合同无法履行，经用人单位与劳动者协商，未能就变更劳动合同内容达成协议的；\n（十一）用人单位依照企业破产法规定进行重整的；\n（十二）用人单位生产经营发生严重困难的；\n（十三）企业转产、重大技术革新或者经营方式调整，经变更劳动合同后，仍需裁减人员的；\n（十四）其他因劳动合同订立时所依据的客观经济情况发生重大变化，致使劳动合同无法履行的。"
    },
    {
      "id": 225,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 20,
      "text": "用人单位依照劳动合同法第四十条的规定，选择额外支付劳动者一个月工资解除劳动合同的，其额外支付的工资应当按照该劳动者上一个月的工资标准确定。",
      "blankText": "用人单位依照劳动合同法第四十条的规定，选择额外支付劳动者一个月工资解除劳动合同的，其额外支付的工资应当按照该劳动者上一个月的工资标准确定。"
    },
    {
      "id": 226,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 21,
      "text": "劳动者达到法定退休年龄的，劳动合同终止。",
      "blankText": "劳动者达到法定退休年龄的，劳动合同终止。"
    },
    {
      "id": 227,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 22,
      "text": "以完成一定工作任务为期限的劳动合同因任务完成而终止的，用人单位应当依照劳动合同法第四十七条的规定向劳动者支付经济补偿。",
      "blankText": "以完成一定工作任务为期限的劳动合同因任务完成而终止的，用人单位应当依照劳动合同法第四十七条的规定向劳动者支付经济补偿。"
    },
    {
      "id": 228,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 23,
      "text": "用人单位依法终止工伤职工的劳动合同的，除依照劳动合同法第四十七条的规定支付经济补偿外，还应当依照国家有关工伤保险的规定支付一次性工伤医疗补助金和伤残就业补助金。",
      "blankText": "用人单位依法终止工伤职工的劳动合同的，除依照劳动合同法第四十七条的规定支付经济补偿外，还应当依照国家有关工伤保险的规定支付一次性工伤医疗补助金和伤残就业补助金。"
    },
    {
      "id": 229,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 24,
      "text": "用人单位出具的解除、终止劳动合同的证明，应当写明劳动合同期限、解除或者终止劳动合同的日期、工作岗位、在本单位的工作年限。",
      "blankText": "用人单位出具的解除、终止劳动合同的证明，应当写明劳动合同期限、解除或者终止劳动合同的日期、工作岗位、在本单位的工作年限。"
    },
    {
      "id": 230,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 25,
      "text": "用人单位违反劳动合同法的规定解除或者终止劳动合同，依照劳动合同法第八十七条的规定支付了赔偿金的，不再支付经济补偿。赔偿金的计算年限自用工之日起计算。",
      "blankText": "用人单位违反劳动合同法的规定解除或者终止劳动合同，依照劳动合同法第八十七条的规定支付了赔偿金的，不再支付经济补偿。赔偿金的计算年限自用工之日起计算。"
    },
    {
      "id": 231,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 26,
      "text": "用人单位与劳动者约定了服务期，劳动者依照劳动合同法第三十八条的规定解除劳动合同的，不属于违反服务期的约定，用人单位不得要求劳动者支付违约金。\n有下列情形之一，用人单位与劳动者解除约定了服务期的劳动合同的，劳动者应当按照劳动合同的约定向用人单位支付违约金：\n（一）劳动者严重违反用人单位的规章制度的；\n（二）劳动者严重失职，营私舞弊，给用人单位造成重大损害的；\n（三）劳动者同时与其他用人单位建立劳动关系，对完成本单位的工作任务造成严重影响，或者经用人单位提出，拒不改正的；\n（四）劳动者以欺诈、胁迫的手段或者乘人之危，使用人单位在违背真实意思的情况下订立或者变更劳动合同的；\n（五）劳动者被依法追究刑事责任的。",
      "blankText": "用人单位与劳动者约定了服务期，劳动者依照劳动合同法第三十八条的规定解除劳动合同的，不属于违反服务期的约定，用人单位不得要求劳动者支付违约金。\n有下列情形之一，用人单位与劳动者解除约定了服务期的劳动合同的，劳动者应当按照劳动合同的约定向用人单位支付违约金：\n（一）劳动者严重违反用人单位的规章制度的；\n（二）劳动者严重失职，营私舞弊，给用人单位造成重大损害的；\n（三）劳动者同时与其他用人单位建立劳动关系，对完成本单位的工作任务造成严重影响，或者经用人单位提出，拒不改正的；\n（四）劳动者以欺诈、胁迫的手段或者乘人之危，使用人单位在违背真实意思的情况下订立或者变更劳动合同的；\n（五）劳动者被依法追究刑事责任的。"
    },
    {
      "id": 232,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 27,
      "text": "劳动合同法第四十七条规定的经济补偿的月工资按照劳动者应得工资计算，包括计时工资或者计件工资以及奖金、津贴和补贴等货币性收入。劳动者在劳动合同解除或者终止前12个月的平均工资低于当地最低工资标准的，按照当地最低工资标准计算。劳动者工作不满12个月的，按照实际工作的月数计算平均工资。",
      "blankText": "劳动合同法第四十七条规定的经济补偿的月工资按照劳动者应得工资计算，包括计时工资或者计件工资以及奖金、津贴和补贴等货币性收入。劳动者在劳动合同解除或者终止前______个月的平均工资低于当地最低工资标准的，按照当地最低工资标准计算。劳动者工作不满______个月的，按照实际工作的月数计算平均工资。"
    },
    {
      "id": 233,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 28,
      "text": "用人单位或者其所属单位出资或者合伙设立的劳务派遣单位，向本单位或者所属单位派遣劳动者的，属于劳动合同法第六十七条规定的不得设立的劳务派遣单位。",
      "blankText": "用人单位或者其所属单位出资或者合伙设立的劳务派遣单位，向本单位或者所属单位派遣劳动者的，属于劳动合同法第六十七条规定的不得设立的劳务派遣单位。"
    },
    {
      "id": 234,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 29,
      "text": "用工单位应当履行劳动合同法第六十二条规定的义务，维护被派遣劳动者的合法权益。",
      "blankText": "用工单位应当履行劳动合同法第六十二条规定的义务，维护被派遣劳动者的合法权益。"
    },
    {
      "id": 235,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 30,
      "text": "劳务派遣单位不得以非全日制用工形式招用被派遣劳动者。",
      "blankText": "劳务派遣单位不得以非全日制用工形式招用被派遣劳动者。"
    },
    {
      "id": 236,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 31,
      "text": "劳务派遣单位或者被派遣劳动者依法解除、终止劳动合同的经济补偿，依照劳动合同法第四十六条、第四十七条的规定执行。",
      "blankText": "劳务派遣单位或者被派遣劳动者依法解除、终止劳动合同的经济补偿，依照劳动合同法第四十六条、第四十七条的规定执行。"
    },
    {
      "id": 237,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 32,
      "text": "劳务派遣单位违法解除或者终止被派遣劳动者的劳动合同的，依照劳动合同法第四十八条的规定执行。",
      "blankText": "劳务派遣单位违法解除或者终止被派遣劳动者的劳动合同的，依照劳动合同法第四十八条的规定执行。"
    },
    {
      "id": 238,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 33,
      "text": "用人单位违反劳动合同法有关建立职工名册规定的，由劳动行政部门责令限期改正；逾期不改正的，由劳动行政部门处2000元以上2万元以下的罚款。",
      "blankText": "用人单位违反劳动合同法有关建立职工名册规定的，由劳动行政部门责令限期改正；逾期不改正的，由劳动行政部门处______元以上______万元以下的罚款。"
    },
    {
      "id": 239,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 34,
      "text": "用人单位依照劳动合同法的规定应当向劳动者每月支付两倍的工资或者应当向劳动者支付赔偿金而未支付的，劳动行政部门应当责令用人单位支付。",
      "blankText": "用人单位依照劳动合同法的规定应当向劳动者每月支付两倍的工资或者应当向劳动者支付赔偿金而未支付的，劳动行政部门应当责令用人单位支付。"
    },
    {
      "id": 240,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 35,
      "text": "用工单位违反劳动合同法和本条例有关劳务派遣规定的，由劳动行政部门和其他有关主管部门责令改正；情节严重的，以每位被派遣劳动者1000元以上5000元以下的标准处以罚款；给被派遣劳动者造成损害的，劳务派遣单位和用工单位承担连带赔偿责任。",
      "blankText": "用工单位违反劳动合同法和本条例有关劳务派遣规定的，由劳动行政部门和其他有关主管部门责令改正；情节严重的，以每位被派遣劳动者______元以上______元以下的标准处以罚款；给被派遣劳动者造成损害的，劳务派遣单位和用工单位承担连带赔偿责任。"
    },
    {
      "id": 241,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 36,
      "text": "对违反劳动合同法和本条例的行为的投诉、举报，县级以上地方人民政府劳动行政部门依照《劳动保障监察条例》的规定处理。",
      "blankText": "对违反劳动合同法和本条例的行为的投诉、举报，县级以上地方人民政府劳动行政部门依照《劳动保障监察条例》的规定处理。"
    },
    {
      "id": 242,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 37,
      "text": "劳动者与用人单位因订立、履行、变更、解除或者终止劳动合同发生争议的，依照《中华人民共和国劳动争议调解仲裁法》的规定处理。",
      "blankText": "劳动者与用人单位因订立、履行、变更、解除或者终止劳动合同发生争议的，依照《中华人民共和国劳动争议调解仲裁法》的规定处理。"
    },
    {
      "id": 243,
      "category": "劳动关系基础",
      "law": "劳动合同法实施条例",
      "articleNum": 38,
      "text": "本条例自公布之日起施行。",
      "blankText": "本条例自公布之日起施行。"
    },
    {
      "id": 1,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 1,
      "text": "为了规范社会保险关系，维护公民参加社会保险和享受社会保险待遇的合法权益，使公民共享发展成果，促进社会和谐稳定，根据宪法，制定本法。",
      "blankText": "为了规范社会保险关系，维护公民参加社会保险和享受社会保险待遇的合法权益，使公民共享发展成果，促进社会和谐稳定，根据宪法，制定本法。"
    },
    {
      "id": 2,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 2,
      "text": "国家建立基本养老保险、基本医疗保险、工伤保险、失业保险、生育保险等社会保险制度，保障公民在年老、疾病、工伤、失业、生育等情况下依法从国家和社会获得物质帮助的权利。",
      "blankText": "国家建立基本养老保险、基本医疗保险、工伤保险、失业保险、生育保险等社会保险制度，保障公民在年老、疾病、工伤、失业、生育等情况下依法从国家和社会获得物质帮助的权利。"
    },
    {
      "id": 3,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 3,
      "text": "社会保险制度坚持广覆盖、保基本、多层次、可持续的方针，社会保险水平应当与经济社会发展水平相适应。",
      "blankText": "社会保险制度坚持广覆盖、保基本、多层次、可持续的方针，社会保险水平应当与经济社会发展水平相适应。"
    },
    {
      "id": 4,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 4,
      "text": "中华人民共和国境内的用人单位和个人依法缴纳社会保险费，有权查询缴费记录、个人权益记录，要求社会保险经办机构提供社会保险咨询等相关服务。\n个人依法享受社会保险待遇，有权监督本单位为其缴费情况。",
      "blankText": "中华人民共和国境内的用人单位和个人依法缴纳社会保险费，有权查询缴费记录、个人权益记录，要求社会保险经办机构提供社会保险咨询等相关服务。\n个人依法享受社会保险待遇，有权监督本单位为其缴费情况。"
    },
    {
      "id": 5,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 5,
      "text": "县级以上人民政府将社会保险事业纳入国民经济和社会发展规划。\n国家多渠道筹集社会保险资金。县级以上人民政府对社会保险事业给予必要的经费支持。\n国家通过税收优惠政策支持社会保险事业。",
      "blankText": "县级以上人民政府将社会保险事业纳入国民经济和社会发展规划。\n国家多渠道筹集社会保险资金。县级以上人民政府对社会保险事业给予必要的经费支持。\n国家通过税收优惠政策支持社会保险事业。"
    },
    {
      "id": 6,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 6,
      "text": "国家对社会保险基金实行严格监管。\n国务院和省、自治区、直辖市人民政府建立健全社会保险基金监督管理制度，保障社会保险基金安全、有效运行。\n县级以上人民政府采取措施，鼓励和支持社会各方面参与社会保险基金的监督。",
      "blankText": "国家对社会保险基金实行严格监管。\n国务院和省、自治区、直辖市人民政府建立健全社会保险基金监督管理制度，保障社会保险基金安全、有效运行。\n县级以上人民政府采取措施，鼓励和支持社会各方面参与社会保险基金的监督。"
    },
    {
      "id": 7,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 7,
      "text": "国务院社会保险行政部门负责全国的社会保险管理工作，国务院其他有关部门在各自的职责范围内负责有关的社会保险工作。\n县级以上地方人民政府社会保险行政部门负责本行政区域的社会保险管理工作，县级以上地方人民政府其他有关部门在各自的职责范围内负责有关的社会保险工作。",
      "blankText": "国务院社会保险行政部门负责全国的社会保险管理工作，国务院其他有关部门在各自的职责范围内负责有关的社会保险工作。\n县级以上地方人民政府社会保险行政部门负责本行政区域的社会保险管理工作，县级以上地方人民政府其他有关部门在各自的职责范围内负责有关的社会保险工作。"
    },
    {
      "id": 8,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 8,
      "text": "社会保险经办机构提供社会保险服务，负责社会保险登记、个人权益记录、社会保险待遇支付等工作。",
      "blankText": "社会保险经办机构提供社会保险服务，负责社会保险登记、个人权益记录、社会保险待遇支付等工作。"
    },
    {
      "id": 9,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 9,
      "text": "工会依法维护职工的合法权益，有权参与社会保险重大事项的研究，参加社会保险监督委员会，对与职工社会保险权益有关的事项进行监督。",
      "blankText": "工会依法维护职工的合法权益，有权参与社会保险重大事项的研究，参加社会保险监督委员会，对与职工社会保险权益有关的事项进行监督。"
    },
    {
      "id": 10,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 10,
      "text": "职工应当参加基本养老保险，由用人单位和职工共同缴纳基本养老保险费。\n无雇工的个体工商户、未在用人单位参加基本养老保险的非全日制从业人员以及其他灵活就业人员可以参加基本养老保险，由个人缴纳基本养老保险费。\n公务员和参照公务员法管理的工作人员养老保险的办法由国务院规定。",
      "blankText": "职工应当参加基本养老保险，由用人单位和职工共同缴纳基本养老保险费。\n无雇工的个体工商户、未在用人单位参加基本养老保险的非全日制从业人员以及其他灵活就业人员可以参加基本养老保险，由个人缴纳基本养老保险费。\n公务员和参照公务员法管理的工作人员养老保险的办法由国务院规定。"
    },
    {
      "id": 11,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 11,
      "text": "基本养老保险实行社会统筹与个人账户相结合。\n基本养老保险基金由用人单位和个人缴费以及政府补贴等组成。",
      "blankText": "基本养老保险实行社会统筹与个人账户相结合。\n基本养老保险基金由用人单位和个人缴费以及政府补贴等组成。"
    },
    {
      "id": 12,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 12,
      "text": "用人单位应当按照国家规定的本单位职工工资总额的比例缴纳基本养老保险费，记入基本养老保险统筹基金。\n职工应当按照国家规定的本人工资的比例缴纳基本养老保险费，记入个人账户。\n无雇工的个体工商户、未在用人单位参加基本养老保险的非全日制从业人员以及其他灵活就业人员参加基本养老保险的，应当按照国家规定缴纳基本养老保险费，分别记入基本养老保险统筹基金和个人账户。",
      "blankText": "用人单位应当按照国家规定的本单位职工工资总额的比例缴纳基本养老保险费，记入基本养老保险统筹基金。\n职工应当按照国家规定的本人工资的比例缴纳基本养老保险费，记入个人账户。\n无雇工的个体工商户、未在用人单位参加基本养老保险的非全日制从业人员以及其他灵活就业人员参加基本养老保险的，应当按照国家规定缴纳基本养老保险费，分别记入基本养老保险统筹基金和个人账户。"
    },
    {
      "id": 13,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 13,
      "text": "国有企业、事业单位职工参加基本养老保险前，视同缴费年限期间应当缴纳的基本养老保险费由政府承担。\n基本养老保险基金出现支付不足时，政府给予补贴。",
      "blankText": "国有企业、事业单位职工参加基本养老保险前，视同缴费年限期间应当缴纳的基本养老保险费由政府承担。\n基本养老保险基金出现支付不足时，政府给予补贴。"
    },
    {
      "id": 14,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 14,
      "text": "个人账户不得提前支取，记账利率不得低于银行定期存款利率，免征利息税。个人死亡的，个人账户余额可以继承。",
      "blankText": "个人账户不得提前支取，记账利率不得低于银行定期存款利率，免征利息税。个人死亡的，个人账户余额可以继承。"
    },
    {
      "id": 15,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 15,
      "text": "基本养老金由统筹养老金和个人账户养老金组成。\n基本养老金根据个人累计缴费年限、缴费工资、当地职工平均工资、个人账户金额、城镇人口平均预期寿命等因素确定。",
      "blankText": "基本养老金由统筹养老金和个人账户养老金组成。\n基本养老金根据个人累计缴费年限、缴费工资、当地职工平均工资、个人账户金额、城镇人口平均预期寿命等因素确定。"
    },
    {
      "id": 16,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 16,
      "text": "参加基本养老保险的个人，达到法定退休年龄时累计缴费满十五年的，按月领取基本养老金。\n参加基本养老保险的个人，达到法定退休年龄时累计缴费不足十五年的，可以缴费至满十五年，按月领取基本养老金；也可以转入新型农村社会养老保险或者城镇居民社会养老保险，按照国务院规定享受相应的养老保险待遇。",
      "blankText": "参加基本养老保险的个人，达到法定退休年龄时累计缴费满十五年的，按月领取基本养老金。\n参加基本养老保险的个人，达到法定退休年龄时累计缴费不足十五年的，可以缴费至满十五年，按月领取基本养老金；也可以转入新型农村社会养老保险或者城镇居民社会养老保险，按照国务院规定享受相应的养老保险待遇。"
    },
    {
      "id": 17,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 17,
      "text": "参加基本养老保险的个人，因病或者非因工死亡的，其遗属可以领取丧葬补助金和抚恤金；在未达到法定退休年龄时因病或者非因工致残完全丧失劳动能力的，可以领取病残津贴。所需资金从基本养老保险基金中支付。",
      "blankText": "参加基本养老保险的个人，因病或者非因工死亡的，其遗属可以领取丧葬补助金和抚恤金；在未达到法定退休年龄时因病或者非因工致残完全丧失劳动能力的，可以领取病残津贴。所需资金从基本养老保险基金中支付。"
    },
    {
      "id": 18,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 18,
      "text": "国家建立基本养老金正常调整机制。根据职工平均工资增长、物价上涨情况，适时提高基本养老保险待遇水平。",
      "blankText": "国家建立基本养老金正常调整机制。根据职工平均工资增长、物价上涨情况，适时提高基本养老保险待遇水平。"
    },
    {
      "id": 19,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 19,
      "text": "个人跨统筹地区就业的，其基本养老保险关系随本人转移，缴费年限累计计算。个人达到法定退休年龄时，基本养老金分段计算、统一支付。具体办法由国务院规定。",
      "blankText": "个人跨统筹地区就业的，其基本养老保险关系随本人转移，缴费年限累计计算。个人达到法定退休年龄时，基本养老金分段计算、统一支付。具体办法由国务院规定。"
    },
    {
      "id": 20,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 20,
      "text": "国家建立和完善新型农村社会养老保险制度。\n新型农村社会养老保险实行个人缴费、集体补助和政府补贴相结合。",
      "blankText": "国家建立和完善新型农村社会养老保险制度。\n新型农村社会养老保险实行个人缴费、集体补助和政府补贴相结合。"
    },
    {
      "id": 21,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 21,
      "text": "新型农村社会养老保险待遇由基础养老金和个人账户养老金组成。\n参加新型农村社会养老保险的农村居民，符合国家规定条件的，按月领取新型农村社会养老保险待遇。",
      "blankText": "新型农村社会养老保险待遇由基础养老金和个人账户养老金组成。\n参加新型农村社会养老保险的农村居民，符合国家规定条件的，按月领取新型农村社会养老保险待遇。"
    },
    {
      "id": 22,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 22,
      "text": "国家建立和完善城镇居民社会养老保险制度。\n省、自治区、直辖市人民政府根据实际情况，可以将城镇居民社会养老保险和新型农村社会养老保险合并实施。",
      "blankText": "国家建立和完善城镇居民社会养老保险制度。\n省、自治区、直辖市人民政府根据实际情况，可以将城镇居民社会养老保险和新型农村社会养老保险合并实施。"
    },
    {
      "id": 23,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 23,
      "text": "职工应当参加职工基本医疗保险，由用人单位和职工按照国家规定共同缴纳基本医疗保险费。\n无雇工的个体工商户、未在用人单位参加职工基本医疗保险的非全日制从业人员以及其他灵活就业人员可以参加职工基本医疗保险，由个人按照国家规定缴纳基本医疗保险费。",
      "blankText": "职工应当参加职工基本医疗保险，由用人单位和职工按照国家规定共同缴纳基本医疗保险费。\n无雇工的个体工商户、未在用人单位参加职工基本医疗保险的非全日制从业人员以及其他灵活就业人员可以参加职工基本医疗保险，由个人按照国家规定缴纳基本医疗保险费。"
    },
    {
      "id": 24,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 24,
      "text": "国家建立和完善新型农村合作医疗制度。\n新型农村合作医疗的管理办法，由国务院规定。",
      "blankText": "国家建立和完善新型农村合作医疗制度。\n新型农村合作医疗的管理办法，由国务院规定。"
    },
    {
      "id": 25,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 25,
      "text": "国家建立和完善城镇居民基本医疗保险制度。\n城镇居民基本医疗保险实行个人缴费和政府补贴相结合。\n享受最低生活保障的人、丧失劳动能力的残疾人、低收入家庭六十周岁以上的老年人和未成年人等所需个人缴费部分，由政府给予补贴。",
      "blankText": "国家建立和完善城镇居民基本医疗保险制度。\n城镇居民基本医疗保险实行个人缴费和政府补贴相结合。\n享受最低生活保障的人、丧失劳动能力的残疾人、低收入家庭六十周岁以上的老年人和未成年人等所需个人缴费部分，由政府给予补贴。"
    },
    {
      "id": 26,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 26,
      "text": "职工基本医疗保险、新型农村合作医疗和城镇居民基本医疗保险的待遇标准按照国家规定执行。",
      "blankText": "职工基本医疗保险、新型农村合作医疗和城镇居民基本医疗保险的待遇标准按照国家规定执行。"
    },
    {
      "id": 27,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 27,
      "text": "参加职工基本医疗保险的个人，达到法定退休年龄时累计缴费达到国家规定年限的，退休后不再缴纳基本医疗保险费，按照国家规定享受基本医疗保险待遇；未达到国家规定年限的，可以缴费至国家规定年限。",
      "blankText": "参加职工基本医疗保险的个人，达到法定退休年龄时累计缴费达到国家规定年限的，退休后不再缴纳基本医疗保险费，按照国家规定享受基本医疗保险待遇；未达到国家规定年限的，可以缴费至国家规定年限。"
    },
    {
      "id": 28,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 28,
      "text": "符合基本医疗保险药品目录、诊疗项目、医疗服务设施标准以及急诊、抢救的医疗费用，按照国家规定从基本医疗保险基金中支付。",
      "blankText": "符合基本医疗保险药品目录、诊疗项目、医疗服务设施标准以及急诊、抢救的医疗费用，按照国家规定从基本医疗保险基金中支付。"
    },
    {
      "id": 29,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 29,
      "text": "参保人员医疗费用中应当由基本医疗保险基金支付的部分，由社会保险经办机构与医疗机构、药品经营单位直接结算。\n社会保险行政部门和卫生行政部门应当建立异地就医医疗费用结算制度，方便参保人员享受基本医疗保险待遇。",
      "blankText": "参保人员医疗费用中应当由基本医疗保险基金支付的部分，由社会保险经办机构与医疗机构、药品经营单位直接结算。\n社会保险行政部门和卫生行政部门应当建立异地就医医疗费用结算制度，方便参保人员享受基本医疗保险待遇。"
    },
    {
      "id": 30,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 30,
      "text": "下列医疗费用不纳入基本医疗保险基金支付范围：\n（一）应当从工伤保险基金中支付的；\n（二）应当由第三人负担的；\n（三）应当由公共卫生负担的；\n（四）在境外就医的。\n医疗费用依法应当由第三人负担，第三人不支付或者无法确定第三人的，由基本医疗保险基金先行支付。基本医疗保险基金先行支付后，有权向第三人追偿。",
      "blankText": "下列医疗费用不纳入基本医疗保险基金支付范围：\n（一）应当从工伤保险基金中支付的；\n（二）应当由第三人负担的；\n（三）应当由公共卫生负担的；\n（四）在境外就医的。\n医疗费用依法应当由第三人负担，第三人不支付或者无法确定第三人的，由基本医疗保险基金先行支付。基本医疗保险基金先行支付后，有权向第三人追偿。"
    },
    {
      "id": 31,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 31,
      "text": "社会保险经办机构根据管理服务的需要，可以与医疗机构、药品经营单位签订服务协议，规范医疗服务行为。\n医疗机构应当为参保人员提供合理、必要的医疗服务。",
      "blankText": "社会保险经办机构根据管理服务的需要，可以与医疗机构、药品经营单位签订服务协议，规范医疗服务行为。\n医疗机构应当为参保人员提供合理、必要的医疗服务。"
    },
    {
      "id": 32,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 32,
      "text": "个人跨统筹地区就业的，其基本医疗保险关系随本人转移，缴费年限累计计算。",
      "blankText": "个人跨统筹地区就业的，其基本医疗保险关系随本人转移，缴费年限累计计算。"
    },
    {
      "id": 33,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 33,
      "text": "职工应当参加工伤保险，由用人单位缴纳工伤保险费，职工不缴纳工伤保险费。",
      "blankText": "职工应当参加工伤保险，由用人单位缴纳工伤保险费，职工不缴纳工伤保险费。"
    },
    {
      "id": 34,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 34,
      "text": "国家根据不同行业的工伤风险程度确定行业的差别费率，并根据使用工伤保险基金、工伤发生率等情况在每个行业内确定费率档次。行业差别费率和行业内费率档次由国务院社会保险行政部门制定，报国务院批准后公布施行。\n社会保险经办机构根据用人单位使用工伤保险基金、工伤发生率和所属行业费率档次等情况，确定用人单位缴费费率。",
      "blankText": "国家根据不同行业的工伤风险程度确定行业的差别费率，并根据使用工伤保险基金、工伤发生率等情况在每个行业内确定费率档次。行业差别费率和行业内费率档次由国务院社会保险行政部门制定，报国务院批准后公布施行。\n社会保险经办机构根据用人单位使用工伤保险基金、工伤发生率和所属行业费率档次等情况，确定用人单位缴费费率。"
    },
    {
      "id": 35,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 35,
      "text": "用人单位应当按照本单位职工工资总额，根据社会保险经办机构确定的费率缴纳工伤保险费。",
      "blankText": "用人单位应当按照本单位职工工资总额，根据社会保险经办机构确定的费率缴纳工伤保险费。"
    },
    {
      "id": 36,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 36,
      "text": "职工因工作原因受到事故伤害或者患职业病，且经工伤认定的，享受工伤保险待遇；其中，经劳动能力鉴定丧失劳动能力的，享受伤残待遇。\n工伤认定和劳动能力鉴定应当简捷、方便。",
      "blankText": "职工因工作原因受到事故伤害或者患职业病，且经工伤认定的，享受工伤保险待遇；其中，经劳动能力鉴定丧失劳动能力的，享受伤残待遇。\n工伤认定和劳动能力鉴定应当简捷、方便。"
    },
    {
      "id": 37,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 37,
      "text": "职工因下列情形之一导致本人在工作中伤亡的，不认定为工伤：\n（一）故意犯罪；\n（二）醉酒或者吸毒；\n（三）自残或者自杀；\n（四）法律、行政法规规定的其他情形。",
      "blankText": "职工因下列情形之一导致本人在工作中伤亡的，不认定为工伤：\n（一）故意犯罪；\n（二）醉酒或者吸毒；\n（三）自残或者自杀；\n（四）法律、行政法规规定的其他情形。"
    },
    {
      "id": 38,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 38,
      "text": "因工伤发生的下列费用，按照国家规定从工伤保险基金中支付：\n（一）治疗工伤的医疗费用和康复费用；\n（二）住院伙食补助费；\n（三）到统筹地区以外就医的交通食宿费；\n（四）安装配置伤残辅助器具所需费用；\n（五）生活不能自理的，经劳动能力鉴定委员会确认的生活护理费；\n（六）一次性伤残补助金和一至四级伤残职工按月领取的伤残津贴；\n（七）终止或者解除劳动合同时，应当享受的一次性医疗补助金；\n（八）因工死亡的，其遗属领取的丧葬补助金、供养亲属抚恤金和因工死亡补助金；\n（九）劳动能力鉴定费。",
      "blankText": "因工伤发生的下列费用，按照国家规定从工伤保险基金中支付：\n（一）治疗工伤的医疗费用和康复费用；\n（二）住院伙食补助费；\n（三）到统筹地区以外就医的交通食宿费；\n（四）安装配置伤残辅助器具所需费用；\n（五）生活不能自理的，经劳动能力鉴定委员会确认的生活护理费；\n（六）一次性伤残补助金和一至四级伤残职工按月领取的伤残津贴；\n（七）终止或者解除劳动合同时，应当享受的一次性医疗补助金；\n（八）因工死亡的，其遗属领取的丧葬补助金、供养亲属抚恤金和因工死亡补助金；\n（九）劳动能力鉴定费。"
    },
    {
      "id": 39,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 39,
      "text": "因工伤发生的下列费用，按照国家规定由用人单位支付：\n（一）治疗工伤期间的工资福利；\n（二）五级、六级伤残职工按月领取的伤残津贴；\n（三）终止或者解除劳动合同时，应当享受的一次性伤残就业补助金。",
      "blankText": "因工伤发生的下列费用，按照国家规定由用人单位支付：\n（一）治疗工伤期间的工资福利；\n（二）五级、六级伤残职工按月领取的伤残津贴；\n（三）终止或者解除劳动合同时，应当享受的一次性伤残就业补助金。"
    },
    {
      "id": 40,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 40,
      "text": "工伤职工符合领取基本养老金条件的，停发伤残津贴，享受基本养老保险待遇。基本养老保险待遇低于伤残津贴的，从工伤保险基金中补足差额。",
      "blankText": "工伤职工符合领取基本养老金条件的，停发伤残津贴，享受基本养老保险待遇。基本养老保险待遇低于伤残津贴的，从工伤保险基金中补足差额。"
    },
    {
      "id": 41,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 41,
      "text": "职工所在用人单位未依法缴纳工伤保险费，发生工伤事故的，由用人单位支付工伤保险待遇。用人单位不支付的，从工伤保险基金中先行支付。\n从工伤保险基金中先行支付的工伤保险待遇应当由用人单位偿还。用人单位不偿还的，社会保险经办机构可以依照本法第六十三条的规定追偿。",
      "blankText": "职工所在用人单位未依法缴纳工伤保险费，发生工伤事故的，由用人单位支付工伤保险待遇。用人单位不支付的，从工伤保险基金中先行支付。\n从工伤保险基金中先行支付的工伤保险待遇应当由用人单位偿还。用人单位不偿还的，社会保险经办机构可以依照本法第六十三条的规定追偿。"
    },
    {
      "id": 42,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 42,
      "text": "由于第三人的原因造成工伤，第三人不支付工伤医疗费用或者无法确定第三人的，由工伤保险基金先行支付。工伤保险基金先行支付后，有权向第三人追偿。",
      "blankText": "由于第三人的原因造成工伤，第三人不支付工伤医疗费用或者无法确定第三人的，由工伤保险基金先行支付。工伤保险基金先行支付后，有权向第三人追偿。"
    },
    {
      "id": 43,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 43,
      "text": "工伤职工有下列情形之一的，停止享受工伤保险待遇：\n（一）丧失享受待遇条件的；\n（二）拒不接受劳动能力鉴定的；\n（三）拒绝治疗的。",
      "blankText": "工伤职工有下列情形之一的，停止享受工伤保险待遇：\n（一）丧失享受待遇条件的；\n（二）拒不接受劳动能力鉴定的；\n（三）拒绝治疗的。"
    },
    {
      "id": 44,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 44,
      "text": "职工应当参加失业保险，由用人单位和职工按照国家规定共同缴纳失业保险费。",
      "blankText": "职工应当参加失业保险，由用人单位和职工按照国家规定共同缴纳失业保险费。"
    },
    {
      "id": 45,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 45,
      "text": "失业人员符合下列条件的，从失业保险基金中领取失业保险金：\n（一）失业前用人单位和本人已经缴纳失业保险费满一年的；\n（二）非因本人意愿中断就业的；\n（三）已经进行失业登记，并有求职要求的。",
      "blankText": "失业人员符合下列条件的，从失业保险基金中领取失业保险金：\n（一）失业前用人单位和本人已经缴纳失业保险费满一年的；\n（二）非因本人意愿中断就业的；\n（三）已经进行失业登记，并有求职要求的。"
    },
    {
      "id": 46,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 46,
      "text": "失业人员失业前用人单位和本人累计缴费满一年不足五年的，领取失业保险金的期限最长为十二个月；累计缴费满五年不足十年的，领取失业保险金的期限最长为十八个月；累计缴费十年以上的，领取失业保险金的期限最长为二十四个月。重新就业后，再次失业的，缴费时间重新计算，领取失业保险金的期限与前次失业应当领取而尚未领取的失业保险金的期限合并计算，最长不超过二十四个月。",
      "blankText": "失业人员失业前用人单位和本人累计缴费满一年不足五年的，领取失业保险金的期限最长为十二个月；累计缴费满五年不足十年的，领取失业保险金的期限最长为十八个月；累计缴费十年以上的，领取失业保险金的期限最长为二十四个月。重新就业后，再次失业的，缴费时间重新计算，领取失业保险金的期限与前次失业应当领取而尚未领取的失业保险金的期限合并计算，最长不超过二十四个月。"
    },
    {
      "id": 47,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 47,
      "text": "失业保险金的标准，由省、自治区、直辖市人民政府确定，不得低于城市居民最低生活保障标准。",
      "blankText": "失业保险金的标准，由省、自治区、直辖市人民政府确定，不得低于城市居民最低生活保障标准。"
    },
    {
      "id": 48,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 48,
      "text": "失业人员在领取失业保险金期间，参加职工基本医疗保险，享受基本医疗保险待遇。\n失业人员应当缴纳的基本医疗保险费从失业保险基金中支付，个人不缴纳基本医疗保险费。",
      "blankText": "失业人员在领取失业保险金期间，参加职工基本医疗保险，享受基本医疗保险待遇。\n失业人员应当缴纳的基本医疗保险费从失业保险基金中支付，个人不缴纳基本医疗保险费。"
    },
    {
      "id": 49,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 49,
      "text": "失业人员在领取失业保险金期间死亡的，参照当地对在职职工死亡的规定，向其遗属发给一次性丧葬补助金和抚恤金。所需资金从失业保险基金中支付。\n个人死亡同时符合领取基本养老保险丧葬补助金、工伤保险丧葬补助金和失业保险丧葬补助金条件的，其遗属只能选择领取其中的一项。",
      "blankText": "失业人员在领取失业保险金期间死亡的，参照当地对在职职工死亡的规定，向其遗属发给一次性丧葬补助金和抚恤金。所需资金从失业保险基金中支付。\n个人死亡同时符合领取基本养老保险丧葬补助金、工伤保险丧葬补助金和失业保险丧葬补助金条件的，其遗属只能选择领取其中的一项。"
    },
    {
      "id": 50,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 50,
      "text": "用人单位应当及时为失业人员出具终止或者解除劳动关系的证明，并将失业人员的名单自终止或者解除劳动关系之日起十五日内告知社会保险经办机构。\n失业人员应当持本单位为其出具的终止或者解除劳动关系的证明，及时到指定的公共就业服务机构办理失业登记。\n失业人员凭失业登记证明和个人身份证明，到社会保险经办机构办理领取失业保险金的手续。失业保险金领取期限自办理失业登记之日起计算。",
      "blankText": "用人单位应当及时为失业人员出具终止或者解除劳动关系的证明，并将失业人员的名单自终止或者解除劳动关系之日起十五日内告知社会保险经办机构。\n失业人员应当持本单位为其出具的终止或者解除劳动关系的证明，及时到指定的公共就业服务机构办理失业登记。\n失业人员凭失业登记证明和个人身份证明，到社会保险经办机构办理领取失业保险金的手续。失业保险金领取期限自办理失业登记之日起计算。"
    },
    {
      "id": 51,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 51,
      "text": "失业人员在领取失业保险金期间有下列情形之一的，停止领取失业保险金，并同时停止享受其他失业保险待遇：\n（一）重新就业的；\n（二）应征服兵役的；\n（三）移居境外的；\n（四）享受基本养老保险待遇的；\n（五）无正当理由，拒不接受当地人民政府指定部门或者机构介绍的适当工作或者提供的培训的。",
      "blankText": "失业人员在领取失业保险金期间有下列情形之一的，停止领取失业保险金，并同时停止享受其他失业保险待遇：\n（一）重新就业的；\n（二）应征服兵役的；\n（三）移居境外的；\n（四）享受基本养老保险待遇的；\n（五）无正当理由，拒不接受当地人民政府指定部门或者机构介绍的适当工作或者提供的培训的。"
    },
    {
      "id": 52,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 52,
      "text": "职工跨统筹地区就业的，其失业保险关系随本人转移，缴费年限累计计算。",
      "blankText": "职工跨统筹地区就业的，其失业保险关系随本人转移，缴费年限累计计算。"
    },
    {
      "id": 53,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 53,
      "text": "职工应当参加生育保险，由用人单位按照国家规定缴纳生育保险费，职工不缴纳生育保险费。",
      "blankText": "职工应当参加生育保险，由用人单位按照国家规定缴纳生育保险费，职工不缴纳生育保险费。"
    },
    {
      "id": 54,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 54,
      "text": "用人单位已经缴纳生育保险费的，其职工享受生育保险待遇；职工未就业配偶按照国家规定享受生育医疗费用待遇。所需资金从生育保险基金中支付。\n生育保险待遇包括生育医疗费用和生育津贴。",
      "blankText": "用人单位已经缴纳生育保险费的，其职工享受生育保险待遇；职工未就业配偶按照国家规定享受生育医疗费用待遇。所需资金从生育保险基金中支付。\n生育保险待遇包括生育医疗费用和生育津贴。"
    },
    {
      "id": 55,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 55,
      "text": "生育医疗费用包括下列各项：\n（一）生育的医疗费用；\n（二）计划生育的医疗费用；\n（三）法律、法规规定的其他项目费用。",
      "blankText": "生育医疗费用包括下列各项：\n（一）生育的医疗费用；\n（二）计划生育的医疗费用；\n（三）法律、法规规定的其他项目费用。"
    },
    {
      "id": 56,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 56,
      "text": "职工有下列情形之一的，可以按照国家规定享受生育津贴：\n（一）女职工生育享受产假；\n（二）享受计划生育手术休假；\n（三）法律、法规规定的其他情形。\n生育津贴按照职工所在用人单位上年度职工月平均工资计发。",
      "blankText": "职工有下列情形之一的，可以按照国家规定享受生育津贴：\n（一）女职工生育享受产假；\n（二）享受计划生育手术休假；\n（三）法律、法规规定的其他情形。\n生育津贴按照职工所在用人单位上年度职工月平均工资计发。"
    },
    {
      "id": 57,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 57,
      "text": "用人单位应当自成立之日起三十日内凭营业执照、登记证书或者单位印章，向当地社会保险经办机构申请办理社会保险登记。社会保险经办机构应当自收到申请之日起十五日内予以审核，发给社会保险登记证件。\n用人单位的社会保险登记事项发生变更或者用人单位依法终止的，应当自变更或者终止之日起三十日内，到社会保险经办机构办理变更或者注销社会保险登记。\n市场监督管理部门、民政部门和机构编制管理机关应当及时向社会保险经办机构通报用人单位的成立、终止情况，公安机关应当及时向社会保险经办机构通报个人的出生、死亡以及户口登记、迁移、注销等情况。",
      "blankText": "用人单位应当自成立之日起三十日内凭营业执照、登记证书或者单位印章，向当地社会保险经办机构申请办理社会保险登记。社会保险经办机构应当自收到申请之日起十五日内予以审核，发给社会保险登记证件。\n用人单位的社会保险登记事项发生变更或者用人单位依法终止的，应当自变更或者终止之日起三十日内，到社会保险经办机构办理变更或者注销社会保险登记。\n市场监督管理部门、民政部门和机构编制管理机关应当及时向社会保险经办机构通报用人单位的成立、终止情况，公安机关应当及时向社会保险经办机构通报个人的出生、死亡以及户口登记、迁移、注销等情况。"
    },
    {
      "id": 58,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 58,
      "text": "用人单位应当自用工之日起三十日内为其职工向社会保险经办机构申请办理社会保险登记。未办理社会保险登记的，由社会保险经办机构核定其应当缴纳的社会保险费。\n自愿参加社会保险的无雇工的个体工商户、未在用人单位参加社会保险的非全日制从业人员以及其他灵活就业人员，应当向社会保险经办机构申请办理社会保险登记。\n国家建立全国统一的个人社会保障号码。个人社会保障号码为公民身份号码。",
      "blankText": "用人单位应当自用工之日起三十日内为其职工向社会保险经办机构申请办理社会保险登记。未办理社会保险登记的，由社会保险经办机构核定其应当缴纳的社会保险费。\n自愿参加社会保险的无雇工的个体工商户、未在用人单位参加社会保险的非全日制从业人员以及其他灵活就业人员，应当向社会保险经办机构申请办理社会保险登记。\n国家建立全国统一的个人社会保障号码。个人社会保障号码为公民身份号码。"
    },
    {
      "id": 59,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 59,
      "text": "县级以上人民政府加强社会保险费的征收工作。\n社会保险费实行统一征收，实施步骤和具体办法由国务院规定。",
      "blankText": "县级以上人民政府加强社会保险费的征收工作。\n社会保险费实行统一征收，实施步骤和具体办法由国务院规定。"
    },
    {
      "id": 60,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 60,
      "text": "用人单位应当自行申报、按时足额缴纳社会保险费，非因不可抗力等法定事由不得缓缴、减免。职工应当缴纳的社会保险费由用人单位代扣代缴，用人单位应当按月将缴纳社会保险费的明细情况告知本人。\n无雇工的个体工商户、未在用人单位参加社会保险的非全日制从业人员以及其他灵活就业人员，可以直接向社会保险费征收机构缴纳社会保险费。",
      "blankText": "用人单位应当自行申报、按时足额缴纳社会保险费，非因不可抗力等法定事由不得缓缴、减免。职工应当缴纳的社会保险费由用人单位代扣代缴，用人单位应当按月将缴纳社会保险费的明细情况告知本人。\n无雇工的个体工商户、未在用人单位参加社会保险的非全日制从业人员以及其他灵活就业人员，可以直接向社会保险费征收机构缴纳社会保险费。"
    },
    {
      "id": 61,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 61,
      "text": "社会保险费征收机构应当依法按时足额征收社会保险费，并将缴费情况定期告知用人单位和个人。",
      "blankText": "社会保险费征收机构应当依法按时足额征收社会保险费，并将缴费情况定期告知用人单位和个人。"
    },
    {
      "id": 62,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 62,
      "text": "用人单位未按规定申报应当缴纳的社会保险费数额的，按照该单位上月缴费额的百分之一百一十确定应当缴纳数额；缴费单位补办申报手续后，由社会保险费征收机构按照规定结算。",
      "blankText": "用人单位未按规定申报应当缴纳的社会保险费数额的，按照该单位上月缴费额的百分之一百一十确定应当缴纳数额；缴费单位补办申报手续后，由社会保险费征收机构按照规定结算。"
    },
    {
      "id": 63,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 63,
      "text": "用人单位未按时足额缴纳社会保险费的，由社会保险费征收机构责令其限期缴纳或者补足。\n用人单位逾期仍未缴纳或者补足社会保险费的，社会保险费征收机构可以向银行和其他金融机构查询其存款账户；并可以申请县级以上有关行政部门作出划拨社会保险费的决定，书面通知其开户银行或者其他金融机构划拨社会保险费。用人单位账户余额少于应当缴纳的社会保险费的，社会保险费征收机构可以要求该用人单位提供担保，签订延期缴费协议。\n用人单位未足额缴纳社会保险费且未提供担保的，社会保险费征收机构可以申请人民法院扣押、查封、拍卖其价值相当于应当缴纳社会保险费的财产，以拍卖所得抵缴社会保险费。",
      "blankText": "用人单位未按时足额缴纳社会保险费的，由社会保险费征收机构责令其限期缴纳或者补足。\n用人单位逾期仍未缴纳或者补足社会保险费的，社会保险费征收机构可以向银行和其他金融机构查询其存款账户；并可以申请县级以上有关行政部门作出划拨社会保险费的决定，书面通知其开户银行或者其他金融机构划拨社会保险费。用人单位账户余额少于应当缴纳的社会保险费的，社会保险费征收机构可以要求该用人单位提供担保，签订延期缴费协议。\n用人单位未足额缴纳社会保险费且未提供担保的，社会保险费征收机构可以申请人民法院扣押、查封、拍卖其价值相当于应当缴纳社会保险费的财产，以拍卖所得抵缴社会保险费。"
    },
    {
      "id": 64,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 64,
      "text": "社会保险基金包括基本养老保险基金、基本医疗保险基金、工伤保险基金、失业保险基金和生育保险基金。除基本医疗保险基金与生育保险基金合并建账及核算外，其他各项社会保险基金按照社会保险险种分别建账，分账核算。社会保险基金执行国家统一的会计制度。\n社会保险基金专款专用，任何组织和个人不得侵占或者挪用。\n基本养老保险基金逐步实行全国统筹，其他社会保险基金逐步实行省级统筹，具体时间、步骤由国务院规定。",
      "blankText": "社会保险基金包括基本养老保险基金、基本医疗保险基金、工伤保险基金、失业保险基金和生育保险基金。除基本医疗保险基金与生育保险基金合并建账及核算外，其他各项社会保险基金按照社会保险险种分别建账，分账核算。社会保险基金执行国家统一的会计制度。\n社会保险基金专款专用，任何组织和个人不得侵占或者挪用。\n基本养老保险基金逐步实行全国统筹，其他社会保险基金逐步实行省级统筹，具体时间、步骤由国务院规定。"
    },
    {
      "id": 65,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 65,
      "text": "社会保险基金通过预算实现收支平衡。\n县级以上人民政府在社会保险基金出现支付不足时，给予补贴。",
      "blankText": "社会保险基金通过预算实现收支平衡。\n县级以上人民政府在社会保险基金出现支付不足时，给予补贴。"
    },
    {
      "id": 66,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 66,
      "text": "社会保险基金按照统筹层次设立预算。除基本医疗保险基金与生育保险基金预算合并编制外，其他社会保险基金预算按照社会保险项目分别编制。",
      "blankText": "社会保险基金按照统筹层次设立预算。除基本医疗保险基金与生育保险基金预算合并编制外，其他社会保险基金预算按照社会保险项目分别编制。"
    },
    {
      "id": 67,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 67,
      "text": "社会保险基金预算、决算草案的编制、审核和批准，依照法律和国务院规定执行。",
      "blankText": "社会保险基金预算、决算草案的编制、审核和批准，依照法律和国务院规定执行。"
    },
    {
      "id": 68,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 68,
      "text": "社会保险基金存入财政专户，具体管理办法由国务院规定。",
      "blankText": "社会保险基金存入财政专户，具体管理办法由国务院规定。"
    },
    {
      "id": 69,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 69,
      "text": "社会保险基金在保证安全的前提下，按照国务院规定投资运营实现保值增值。\n社会保险基金不得违规投资运营，不得用于平衡其他政府预算，不得用于兴建、改建办公场所和支付人员经费、运行费用、管理费用，或者违反法律、行政法规规定挪作其他用途。",
      "blankText": "社会保险基金在保证安全的前提下，按照国务院规定投资运营实现保值增值。\n社会保险基金不得违规投资运营，不得用于平衡其他政府预算，不得用于兴建、改建办公场所和支付人员经费、运行费用、管理费用，或者违反法律、行政法规规定挪作其他用途。"
    },
    {
      "id": 70,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 70,
      "text": "社会保险经办机构应当定期向社会公布参加社会保险情况以及社会保险基金的收入、支出、结余和收益情况。",
      "blankText": "社会保险经办机构应当定期向社会公布参加社会保险情况以及社会保险基金的收入、支出、结余和收益情况。"
    },
    {
      "id": 71,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 71,
      "text": "国家设立全国社会保障基金，由中央财政预算拨款以及国务院批准的其他方式筹集的资金构成，用于社会保障支出的补充、调剂。全国社会保障基金由全国社会保障基金管理运营机构负责管理运营，在保证安全的前提下实现保值增值。\n全国社会保障基金应当定期向社会公布收支、管理和投资运营的情况。国务院财政部门、社会保险行政部门、审计机关对全国社会保障基金的收支、管理和投资运营情况实施监督。",
      "blankText": "国家设立全国社会保障基金，由中央财政预算拨款以及国务院批准的其他方式筹集的资金构成，用于社会保障支出的补充、调剂。全国社会保障基金由全国社会保障基金管理运营机构负责管理运营，在保证安全的前提下实现保值增值。\n全国社会保障基金应当定期向社会公布收支、管理和投资运营的情况。国务院财政部门、社会保险行政部门、审计机关对全国社会保障基金的收支、管理和投资运营情况实施监督。"
    },
    {
      "id": 72,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 72,
      "text": "统筹地区设立社会保险经办机构。社会保险经办机构根据工作需要，经所在地的社会保险行政部门和机构编制管理机关批准，可以在本统筹地区设立分支机构和服务网点。\n社会保险经办机构的人员经费和经办社会保险发生的基本运行费用、管理费用，由同级财政按照国家规定予以保障。",
      "blankText": "统筹地区设立社会保险经办机构。社会保险经办机构根据工作需要，经所在地的社会保险行政部门和机构编制管理机关批准，可以在本统筹地区设立分支机构和服务网点。\n社会保险经办机构的人员经费和经办社会保险发生的基本运行费用、管理费用，由同级财政按照国家规定予以保障。"
    },
    {
      "id": 73,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 73,
      "text": "社会保险经办机构应当建立健全业务、财务、安全和风险管理制度。\n社会保险经办机构应当按时足额支付社会保险待遇。",
      "blankText": "社会保险经办机构应当建立健全业务、财务、安全和风险管理制度。\n社会保险经办机构应当按时足额支付社会保险待遇。"
    },
    {
      "id": 74,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 74,
      "text": "社会保险经办机构通过业务经办、统计、调查获取社会保险工作所需的数据，有关单位和个人应当及时、如实提供。\n社会保险经办机构应当及时为用人单位建立档案，完整、准确地记录参加社会保险的人员、缴费等社会保险数据，妥善保管登记、申报的原始凭证和支付结算的会计凭证。\n社会保险经办机构应当及时、完整、准确地记录参加社会保险的个人缴费和用人单位为其缴费，以及享受社会保险待遇等个人权益记录，定期将个人权益记录单免费寄送本人。\n用人单位和个人可以免费向社会保险经办机构查询、核对其缴费和享受社会保险待遇记录，要求社会保险经办机构提供社会保险咨询等相关服务。",
      "blankText": "社会保险经办机构通过业务经办、统计、调查获取社会保险工作所需的数据，有关单位和个人应当及时、如实提供。\n社会保险经办机构应当及时为用人单位建立档案，完整、准确地记录参加社会保险的人员、缴费等社会保险数据，妥善保管登记、申报的原始凭证和支付结算的会计凭证。\n社会保险经办机构应当及时、完整、准确地记录参加社会保险的个人缴费和用人单位为其缴费，以及享受社会保险待遇等个人权益记录，定期将个人权益记录单免费寄送本人。\n用人单位和个人可以免费向社会保险经办机构查询、核对其缴费和享受社会保险待遇记录，要求社会保险经办机构提供社会保险咨询等相关服务。"
    },
    {
      "id": 75,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 75,
      "text": "全国社会保险信息系统按照国家统一规划，由县级以上人民政府按照分级负责的原则共同建设。",
      "blankText": "全国社会保险信息系统按照国家统一规划，由县级以上人民政府按照分级负责的原则共同建设。"
    },
    {
      "id": 76,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 76,
      "text": "各级人民代表大会常务委员会听取和审议本级人民政府对社会保险基金的收支、管理、投资运营以及监督检查情况的专项工作报告，组织执法检查等，依法行使监督职权。",
      "blankText": "各级人民代表大会常务委员会听取和审议本级人民政府对社会保险基金的收支、管理、投资运营以及监督检查情况的专项工作报告，组织执法检查等，依法行使监督职权。"
    },
    {
      "id": 77,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 77,
      "text": "县级以上人民政府社会保险行政部门应当加强对用人单位和个人遵守社会保险法律、法规情况的监督检查。\n社会保险行政部门实施监督检查时，被检查的用人单位和个人应当如实提供与社会保险有关的资料，不得拒绝检查或者谎报、瞒报。",
      "blankText": "县级以上人民政府社会保险行政部门应当加强对用人单位和个人遵守社会保险法律、法规情况的监督检查。\n社会保险行政部门实施监督检查时，被检查的用人单位和个人应当如实提供与社会保险有关的资料，不得拒绝检查或者谎报、瞒报。"
    },
    {
      "id": 78,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 78,
      "text": "财政部门、审计机关按照各自职责，对社会保险基金的收支、管理和投资运营情况实施监督。",
      "blankText": "财政部门、审计机关按照各自职责，对社会保险基金的收支、管理和投资运营情况实施监督。"
    },
    {
      "id": 79,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 79,
      "text": "社会保险行政部门对社会保险基金的收支、管理和投资运营情况进行监督检查，发现存在问题的，应当提出整改建议，依法作出处理决定或者向有关行政部门提出处理建议。社会保险基金检查结果应当定期向社会公布。\n社会保险行政部门对社会保险基金实施监督检查，有权采取下列措施：\n（一）查阅、记录、复制与社会保险基金收支、管理和投资运营相关的资料，对可能被转移、隐匿或者灭失的资料予以封存；\n（二）询问与调查事项有关的单位和个人，要求其对与调查事项有关的问题作出说明、提供有关证明材料；\n（三）对隐匿、转移、侵占、挪用社会保险基金的行为予以制止并责令改正。",
      "blankText": "社会保险行政部门对社会保险基金的收支、管理和投资运营情况进行监督检查，发现存在问题的，应当提出整改建议，依法作出处理决定或者向有关行政部门提出处理建议。社会保险基金检查结果应当定期向社会公布。\n社会保险行政部门对社会保险基金实施监督检查，有权采取下列措施：\n（一）查阅、记录、复制与社会保险基金收支、管理和投资运营相关的资料，对可能被转移、隐匿或者灭失的资料予以封存；\n（二）询问与调查事项有关的单位和个人，要求其对与调查事项有关的问题作出说明、提供有关证明材料；\n（三）对隐匿、转移、侵占、挪用社会保险基金的行为予以制止并责令改正。"
    },
    {
      "id": 80,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 80,
      "text": "统筹地区人民政府成立由用人单位代表、参保人员代表，以及工会代表、专家等组成的社会保险监督委员会，掌握、分析社会保险基金的收支、管理和投资运营情况，对社会保险工作提出咨询意见和建议，实施社会监督。\n社会保险经办机构应当定期向社会保险监督委员会汇报社会保险基金的收支、管理和投资运营情况。社会保险监督委员会可以聘请会计师事务所对社会保险基金的收支、管理和投资运营情况进行年度审计和专项审计。审计结果应当向社会公开。\n社会保险监督委员会发现社会保险基金收支、管理和投资运营中存在问题的，有权提出改正建议；对社会保险经办机构及其工作人员的违法行为，有权向有关部门提出依法处理建议。",
      "blankText": "统筹地区人民政府成立由用人单位代表、参保人员代表，以及工会代表、专家等组成的社会保险监督委员会，掌握、分析社会保险基金的收支、管理和投资运营情况，对社会保险工作提出咨询意见和建议，实施社会监督。\n社会保险经办机构应当定期向社会保险监督委员会汇报社会保险基金的收支、管理和投资运营情况。社会保险监督委员会可以聘请会计师事务所对社会保险基金的收支、管理和投资运营情况进行年度审计和专项审计。审计结果应当向社会公开。\n社会保险监督委员会发现社会保险基金收支、管理和投资运营中存在问题的，有权提出改正建议；对社会保险经办机构及其工作人员的违法行为，有权向有关部门提出依法处理建议。"
    },
    {
      "id": 81,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 81,
      "text": "社会保险行政部门和其他有关行政部门、社会保险经办机构、社会保险费征收机构及其工作人员，应当依法为用人单位和个人的信息保密，不得以任何形式泄露。",
      "blankText": "社会保险行政部门和其他有关行政部门、社会保险经办机构、社会保险费征收机构及其工作人员，应当依法为用人单位和个人的信息保密，不得以任何形式泄露。"
    },
    {
      "id": 82,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 82,
      "text": "任何组织或者个人有权对违反社会保险法律、法规的行为进行举报、投诉。\n社会保险行政部门、卫生行政部门、社会保险经办机构、社会保险费征收机构和财政部门、审计机关对属于本部门、本机构职责范围的举报、投诉，应当依法处理；对不属于本部门、本机构职责范围的，应当书面通知并移交有权处理的部门、机构处理。有权处理的部门、机构应当及时处理，不得推诿。",
      "blankText": "任何组织或者个人有权对违反社会保险法律、法规的行为进行举报、投诉。\n社会保险行政部门、卫生行政部门、社会保险经办机构、社会保险费征收机构和财政部门、审计机关对属于本部门、本机构职责范围的举报、投诉，应当依法处理；对不属于本部门、本机构职责范围的，应当书面通知并移交有权处理的部门、机构处理。有权处理的部门、机构应当及时处理，不得推诿。"
    },
    {
      "id": 83,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 83,
      "text": "用人单位或者个人认为社会保险费征收机构的行为侵害自己合法权益的，可以依法申请行政复议或者提起行政诉讼。\n用人单位或者个人对社会保险经办机构不依法办理社会保险登记、核定社会保险费、支付社会保险待遇、办理社会保险转移接续手续或者侵害其他社会保险权益的行为，可以依法申请行政复议或者提起行政诉讼。\n个人与所在用人单位发生社会保险争议的，可以依法申请调解、仲裁，提起诉讼。用人单位侵害个人社会保险权益的，个人也可以要求社会保险行政部门或者社会保险费征收机构依法处理。",
      "blankText": "用人单位或者个人认为社会保险费征收机构的行为侵害自己合法权益的，可以依法申请行政复议或者提起行政诉讼。\n用人单位或者个人对社会保险经办机构不依法办理社会保险登记、核定社会保险费、支付社会保险待遇、办理社会保险转移接续手续或者侵害其他社会保险权益的行为，可以依法申请行政复议或者提起行政诉讼。\n个人与所在用人单位发生社会保险争议的，可以依法申请调解、仲裁，提起诉讼。用人单位侵害个人社会保险权益的，个人也可以要求社会保险行政部门或者社会保险费征收机构依法处理。"
    },
    {
      "id": 84,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 84,
      "text": "用人单位不办理社会保险登记的，由社会保险行政部门责令限期改正；逾期不改正的，对用人单位处应缴社会保险费数额一倍以上三倍以下的罚款，对其直接负责的主管人员和其他直接责任人员处五百元以上三千元以下的罚款。",
      "blankText": "用人单位不办理社会保险登记的，由社会保险行政部门责令限期改正；逾期不改正的，对用人单位处应缴社会保险费数额一倍以上三倍以下的罚款，对其直接负责的主管人员和其他直接责任人员处五百元以上三千元以下的罚款。"
    },
    {
      "id": 85,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 85,
      "text": "用人单位拒不出具终止或者解除劳动关系证明的，依照《中华人民共和国劳动合同法》的规定处理。",
      "blankText": "用人单位拒不出具终止或者解除劳动关系证明的，依照《中华人民共和国劳动合同法》的规定处理。"
    },
    {
      "id": 86,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 86,
      "text": "用人单位未按时足额缴纳社会保险费的，由社会保险费征收机构责令限期缴纳或者补足，并自欠缴之日起，按日加收万分之五的滞纳金；逾期仍不缴纳的，由有关行政部门处欠缴数额一倍以上三倍以下的罚款。",
      "blankText": "用人单位未按时足额缴纳社会保险费的，由社会保险费征收机构责令限期缴纳或者补足，并自欠缴之日起，按日加收万分之五的滞纳金；逾期仍不缴纳的，由有关行政部门处欠缴数额一倍以上三倍以下的罚款。"
    },
    {
      "id": 87,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 87,
      "text": "社会保险经办机构以及医疗机构、药品经营单位等社会保险服务机构以欺诈、伪造证明材料或者其他手段骗取社会保险基金支出的，由社会保险行政部门责令退回骗取的社会保险金，处骗取金额二倍以上五倍以下的罚款；属于社会保险服务机构的，解除服务协议；直接负责的主管人员和其他直接责任人员有执业资格的，依法吊销其执业资格。",
      "blankText": "社会保险经办机构以及医疗机构、药品经营单位等社会保险服务机构以欺诈、伪造证明材料或者其他手段骗取社会保险基金支出的，由社会保险行政部门责令退回骗取的社会保险金，处骗取金额二倍以上五倍以下的罚款；属于社会保险服务机构的，解除服务协议；直接负责的主管人员和其他直接责任人员有执业资格的，依法吊销其执业资格。"
    },
    {
      "id": 88,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 88,
      "text": "以欺诈、伪造证明材料或者其他手段骗取社会保险待遇的，由社会保险行政部门责令退回骗取的社会保险金，处骗取金额二倍以上五倍以下的罚款。",
      "blankText": "以欺诈、伪造证明材料或者其他手段骗取社会保险待遇的，由社会保险行政部门责令退回骗取的社会保险金，处骗取金额二倍以上五倍以下的罚款。"
    },
    {
      "id": 89,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 89,
      "text": "社会保险经办机构及其工作人员有下列行为之一的，由社会保险行政部门责令改正；给社会保险基金、用人单位或者个人造成损失的，依法承担赔偿责任；对直接负责的主管人员和其他直接责任人员依法给予处分：\n（一）未履行社会保险法定职责的；\n（二）未将社会保险基金存入财政专户的；\n（三）克扣或者拒不按时支付社会保险待遇的；\n（四）丢失或者篡改缴费记录、享受社会保险待遇记录等社会保险数据、个人权益记录的；\n（五）有违反社会保险法律、法规的其他行为的。",
      "blankText": "社会保险经办机构及其工作人员有下列行为之一的，由社会保险行政部门责令改正；给社会保险基金、用人单位或者个人造成损失的，依法承担赔偿责任；对直接负责的主管人员和其他直接责任人员依法给予处分：\n（一）未履行社会保险法定职责的；\n（二）未将社会保险基金存入财政专户的；\n（三）克扣或者拒不按时支付社会保险待遇的；\n（四）丢失或者篡改缴费记录、享受社会保险待遇记录等社会保险数据、个人权益记录的；\n（五）有违反社会保险法律、法规的其他行为的。"
    },
    {
      "id": 90,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 90,
      "text": "社会保险费征收机构擅自更改社会保险费缴费基数、费率，导致少收或者多收社会保险费的，由有关行政部门责令其追缴应当缴纳的社会保险费或者退还不应当缴纳的社会保险费；对直接负责的主管人员和其他直接责任人员依法给予处分。",
      "blankText": "社会保险费征收机构擅自更改社会保险费缴费基数、费率，导致少收或者多收社会保险费的，由有关行政部门责令其追缴应当缴纳的社会保险费或者退还不应当缴纳的社会保险费；对直接负责的主管人员和其他直接责任人员依法给予处分。"
    },
    {
      "id": 91,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 91,
      "text": "违反本法规定，隐匿、转移、侵占、挪用社会保险基金或者违规投资运营的，由社会保险行政部门、财政部门、审计机关责令追回；有违法所得的，没收违法所得；对直接负责的主管人员和其他直接责任人员依法给予处分。",
      "blankText": "违反本法规定，隐匿、转移、侵占、挪用社会保险基金或者违规投资运营的，由社会保险行政部门、财政部门、审计机关责令追回；有违法所得的，没收违法所得；对直接负责的主管人员和其他直接责任人员依法给予处分。"
    },
    {
      "id": 92,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 92,
      "text": "社会保险行政部门和其他有关行政部门、社会保险经办机构、社会保险费征收机构及其工作人员泄露用人单位和个人信息的，对直接负责的主管人员和其他直接责任人员依法给予处分；给用人单位或者个人造成损失的，应当承担赔偿责任。",
      "blankText": "社会保险行政部门和其他有关行政部门、社会保险经办机构、社会保险费征收机构及其工作人员泄露用人单位和个人信息的，对直接负责的主管人员和其他直接责任人员依法给予处分；给用人单位或者个人造成损失的，应当承担赔偿责任。"
    },
    {
      "id": 93,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 93,
      "text": "国家工作人员在社会保险管理、监督工作中滥用职权、玩忽职守、徇私舞弊的，依法给予处分。",
      "blankText": "国家工作人员在社会保险管理、监督工作中滥用职权、玩忽职守、徇私舞弊的，依法给予处分。"
    },
    {
      "id": 94,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 94,
      "text": "违反本法规定，构成犯罪的，依法追究刑事责任。",
      "blankText": "违反本法规定，构成犯罪的，依法追究刑事责任。"
    },
    {
      "id": 95,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 95,
      "text": "进城务工的农村居民依照本法规定参加社会保险。",
      "blankText": "进城务工的农村居民依照本法规定参加社会保险。"
    },
    {
      "id": 96,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 96,
      "text": "征收农村集体所有的土地，应当足额安排被征地农民的社会保险费，按照国务院规定将被征地农民纳入相应的社会保险制度。",
      "blankText": "征收农村集体所有的土地，应当足额安排被征地农民的社会保险费，按照国务院规定将被征地农民纳入相应的社会保险制度。"
    },
    {
      "id": 97,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 97,
      "text": "外国人在中国境内就业的，参照本法规定参加社会保险。",
      "blankText": "外国人在中国境内就业的，参照本法规定参加社会保险。"
    },
    {
      "id": 98,
      "category": "社会保险",
      "law": "社会保险法",
      "articleNum": 98,
      "text": "本法自2011年7月1日起施行。",
      "blankText": "本法自______年______月______日起施行。"
    },
    {
      "id": 99,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 1,
      "text": "为了保障因工作遭受事故伤害或者患职业病的职工获得医疗救治和经济补偿，促进工伤预防和职业康复，分散用人单位的工伤风险，制定本条例。",
      "blankText": "为了保障因工作遭受事故伤害或者患职业病的职工获得医疗救治和经济补偿，促进工伤预防和职业康复，分散用人单位的工伤风险，制定本条例。"
    },
    {
      "id": 100,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 2,
      "text": "中华人民共和国境内的企业、事业单位、社会团体、民办非企业单位、基金会、律师事务所、会计师事务所等组织和有雇工的个体工商户（以下称用人单位）应当依照本条例规定参加工伤保险，为本单位全部职工或者雇工（以下称职工）缴纳工伤保险费。\n中华人民共和国境内的企业、事业单位、社会团体、民办非企业单位、基金会、律师事务所、会计师事务所等组织的职工和个体工商户的雇工，均有依照本条例的规定享受工伤保险待遇的权利。",
      "blankText": "中华人民共和国境内的企业、事业单位、社会团体、民办非企业单位、基金会、律师事务所、会计师事务所等组织和有雇工的个体工商户（以下称用人单位）应当依照本条例规定参加工伤保险，为本单位全部职工或者雇工（以下称职工）缴纳工伤保险费。\n中华人民共和国境内的企业、事业单位、社会团体、民办非企业单位、基金会、律师事务所、会计师事务所等组织的职工和个体工商户的雇工，均有依照本条例的规定享受工伤保险待遇的权利。"
    },
    {
      "id": 101,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 3,
      "text": "工伤保险费的征缴按照《社会保险费征缴暂行条例》关于基本养老保险费、基本医疗保险费、失业保险费的征缴规定执行。",
      "blankText": "工伤保险费的征缴按照《社会保险费征缴暂行条例》关于基本养老保险费、基本医疗保险费、失业保险费的征缴规定执行。"
    },
    {
      "id": 102,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 4,
      "text": "用人单位应当将参加工伤保险的有关情况在本单位内公示。\n用人单位和职工应当遵守有关安全生产和职业病防治的法律法规，执行安全卫生规程和标准，预防工伤事故发生，避免和减少职业病危害。\n职工发生工伤时，用人单位应当采取措施使工伤职工得到及时救治。",
      "blankText": "用人单位应当将参加工伤保险的有关情况在本单位内公示。\n用人单位和职工应当遵守有关安全生产和职业病防治的法律法规，执行安全卫生规程和标准，预防工伤事故发生，避免和减少职业病危害。\n职工发生工伤时，用人单位应当采取措施使工伤职工得到及时救治。"
    },
    {
      "id": 103,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 5,
      "text": "国务院社会保险行政部门负责全国的工伤保险工作。\n县级以上地方各级人民政府社会保险行政部门负责本行政区域内的工伤保险工作。\n社会保险行政部门按照国务院有关规定设立的社会保险经办机构（以下称经办机构）具体承办工伤保险事务。",
      "blankText": "国务院社会保险行政部门负责全国的工伤保险工作。\n县级以上地方各级人民政府社会保险行政部门负责本行政区域内的工伤保险工作。\n社会保险行政部门按照国务院有关规定设立的社会保险经办机构（以下称经办机构）具体承办工伤保险事务。"
    },
    {
      "id": 104,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 6,
      "text": "社会保险行政部门等部门制定工伤保险的政策、标准，应当征求工会组织、用人单位代表的意见。",
      "blankText": "社会保险行政部门等部门制定工伤保险的政策、标准，应当征求工会组织、用人单位代表的意见。"
    },
    {
      "id": 105,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 7,
      "text": "工伤保险基金由用人单位缴纳的工伤保险费、工伤保险基金的利息和依法纳入工伤保险基金的其他资金构成。",
      "blankText": "工伤保险基金由用人单位缴纳的工伤保险费、工伤保险基金的利息和依法纳入工伤保险基金的其他资金构成。"
    },
    {
      "id": 106,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 8,
      "text": "工伤保险费根据以支定收、收支平衡的原则，确定费率。\n国家根据不同行业的工伤风险程度确定行业的差别费率，并根据工伤保险费使用、工伤发生率等情况在每个行业内确定若干费率档次。行业差别费率及行业内费率档次由国务院社会保险行政部门制定，报国务院批准后公布施行。\n统筹地区经办机构根据用人单位工伤保险费使用、工伤发生率等情况，适用所属行业内相应的费率档次确定单位缴费费率。",
      "blankText": "工伤保险费根据以支定收、收支平衡的原则，确定费率。\n国家根据不同行业的工伤风险程度确定行业的差别费率，并根据工伤保险费使用、工伤发生率等情况在每个行业内确定若干费率档次。行业差别费率及行业内费率档次由国务院社会保险行政部门制定，报国务院批准后公布施行。\n统筹地区经办机构根据用人单位工伤保险费使用、工伤发生率等情况，适用所属行业内相应的费率档次确定单位缴费费率。"
    },
    {
      "id": 107,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 9,
      "text": "国务院社会保险行政部门应当定期了解全国各统筹地区工伤保险基金收支情况，及时提出调整行业差别费率及行业内费率档次的方案，报国务院批准后公布施行。",
      "blankText": "国务院社会保险行政部门应当定期了解全国各统筹地区工伤保险基金收支情况，及时提出调整行业差别费率及行业内费率档次的方案，报国务院批准后公布施行。"
    },
    {
      "id": 108,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 10,
      "text": "用人单位应当按时缴纳工伤保险费。职工个人不缴纳工伤保险费。\n用人单位缴纳工伤保险费的数额为本单位职工工资总额乘以单位缴费费率之积。\n对难以按照工资总额缴纳工伤保险费的行业，其缴纳工伤保险费的具体方式，由国务院社会保险行政部门规定。",
      "blankText": "用人单位应当按时缴纳工伤保险费。职工个人不缴纳工伤保险费。\n用人单位缴纳工伤保险费的数额为本单位职工工资总额乘以单位缴费费率之积。\n对难以按照工资总额缴纳工伤保险费的行业，其缴纳工伤保险费的具体方式，由国务院社会保险行政部门规定。"
    },
    {
      "id": 109,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 11,
      "text": "工伤保险基金逐步实行省级统筹。\n跨地区、生产流动性较大的行业，可以采取相对集中的方式异地参加统筹地区的工伤保险。具体办法由国务院社会保险行政部门会同有关行业的主管部门制定。",
      "blankText": "工伤保险基金逐步实行省级统筹。\n跨地区、生产流动性较大的行业，可以采取相对集中的方式异地参加统筹地区的工伤保险。具体办法由国务院社会保险行政部门会同有关行业的主管部门制定。"
    },
    {
      "id": 110,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 12,
      "text": "工伤保险基金存入社会保障基金财政专户，用于本条例规定的工伤保险待遇，劳动能力鉴定，工伤预防的宣传、培训等费用，以及法律、法规规定的用于工伤保险的其他费用的支付。\n工伤预防费用的提取比例、使用和管理的具体办法，由国务院社会保险行政部门会同国务院财政、卫生行政、安全生产监督管理等部门规定。\n任何单位或者个人不得将工伤保险基金用于投资运营、兴建或者改建办公场所、发放奖金，或者挪作其他用途。",
      "blankText": "工伤保险基金存入社会保障基金财政专户，用于本条例规定的工伤保险待遇，劳动能力鉴定，工伤预防的宣传、培训等费用，以及法律、法规规定的用于工伤保险的其他费用的支付。\n工伤预防费用的提取比例、使用和管理的具体办法，由国务院社会保险行政部门会同国务院财政、卫生行政、安全生产监督管理等部门规定。\n任何单位或者个人不得将工伤保险基金用于投资运营、兴建或者改建办公场所、发放奖金，或者挪作其他用途。"
    },
    {
      "id": 111,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 13,
      "text": "工伤保险基金应当留有一定比例的储备金，用于统筹地区重大事故的工伤保险待遇支付；储备金不足支付的，由统筹地区的人民政府垫付。储备金占基金总额的具体比例和储备金的使用办法，由省、自治区、直辖市人民政府规定。",
      "blankText": "工伤保险基金应当留有一定比例的储备金，用于统筹地区重大事故的工伤保险待遇支付；储备金不足支付的，由统筹地区的人民政府垫付。储备金占基金总额的具体比例和储备金的使用办法，由省、自治区、直辖市人民政府规定。"
    },
    {
      "id": 112,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 14,
      "text": "职工有下列情形之一的，应当认定为工伤：\n（一）在工作时间和工作场所内，因工作原因受到事故伤害的；\n（二）工作时间前后在工作场所内，从事与工作有关的预备性或者收尾性工作受到事故伤害的；\n（三）在工作时间和工作场所内，因履行工作职责受到暴力等意外伤害的；\n（四）患职业病的；\n（五）因工外出期间，由于工作原因受到伤害或者发生事故下落不明的；\n（六）在上下班途中，受到非本人主要责任的交通事故或者城市轨道交通、客运轮渡、火车事故伤害的；\n（七）法律、行政法规规定应当认定为工伤的其他情形。",
      "blankText": "职工有下列情形之一的，应当认定为工伤：\n（一）在工作时间和工作场所内，因工作原因受到事故伤害的；\n（二）工作时间前后在工作场所内，从事与工作有关的预备性或者收尾性工作受到事故伤害的；\n（三）在工作时间和工作场所内，因履行工作职责受到暴力等意外伤害的；\n（四）患职业病的；\n（五）因工外出期间，由于工作原因受到伤害或者发生事故下落不明的；\n（六）在上下班途中，受到非本人主要责任的交通事故或者城市轨道交通、客运轮渡、火车事故伤害的；\n（七）法律、行政法规规定应当认定为工伤的其他情形。"
    },
    {
      "id": 113,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 15,
      "text": "职工有下列情形之一的，视同工伤：\n（一）在工作时间和工作岗位，突发疾病死亡或者在48小时之内经抢救无效死亡的；\n（二）在抢险救灾等维护国家利益、公共利益活动中受到伤害的；\n（三）职工原在军队服役，因战、因公负伤致残，已取得革命伤残军人证，到用人单位后旧伤复发的。\n职工有前款第（一）项、第（二）项情形的，按照本条例的有关规定享受工伤保险待遇；职工有前款第（三）项情形的，按照本条例的有关规定享受除一次性伤残补助金以外的工伤保险待遇。",
      "blankText": "职工有下列情形之一的，视同工伤：\n（一）在工作时间和工作岗位，突发疾病死亡或者在______小时之内经抢救无效死亡的；\n（二）在抢险救灾等维护国家利益、公共利益活动中受到伤害的；\n（三）职工原在军队服役，因战、因公负伤致残，已取得革命伤残军人证，到用人单位后旧伤复发的。\n职工有前款第（一）项、第（二）项情形的，按照本条例的有关规定享受工伤保险待遇；职工有前款第（三）项情形的，按照本条例的有关规定享受除一次性伤残补助金以外的工伤保险待遇。"
    },
    {
      "id": 114,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 16,
      "text": "职工符合本条例第十四条、第十五条的规定，但是有下列情形之一的，不得认定为工伤或者视同工伤：\n（一）故意犯罪的；\n（二）醉酒或者吸毒的；\n（三）自残或者自杀的。",
      "blankText": "职工符合本条例第十四条、第十五条的规定，但是有下列情形之一的，不得认定为工伤或者视同工伤：\n（一）故意犯罪的；\n（二）醉酒或者吸毒的；\n（三）自残或者自杀的。"
    },
    {
      "id": 115,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 17,
      "text": "职工发生事故伤害或者按照职业病防治法规定被诊断、鉴定为职业病，所在单位应当自事故伤害发生之日或者被诊断、鉴定为职业病之日起30日内，向统筹地区社会保险行政部门提出工伤认定申请。遇有特殊情况，经报社会保险行政部门同意，申请时限可以适当延长。\n用人单位未按前款规定提出工伤认定申请的，工伤职工或者其近亲属、工会组织在事故伤害发生之日或者被诊断、鉴定为职业病之日起1年内，可以直接向用人单位所在地统筹地区社会保险行政部门提出工伤认定申请。\n按照本条第一款规定应当由省级社会保险行政部门进行工伤认定的事项，根据属地原则由用人单位所在地的设区的市级社会保险行政部门办理。\n用人单位未在本条第一款规定的时限内提交工伤认定申请，在此期间发生符合本条例规定的工伤待遇等有关费用由该用人单位负担。",
      "blankText": "职工发生事故伤害或者按照职业病防治法规定被诊断、鉴定为职业病，所在单位应当自事故伤害发生之日或者被诊断、鉴定为职业病之日起______日内，向统筹地区社会保险行政部门提出工伤认定申请。遇有特殊情况，经报社会保险行政部门同意，申请时限可以适当延长。\n用人单位未按前款规定提出工伤认定申请的，工伤职工或者其近亲属、工会组织在事故伤害发生之日或者被诊断、鉴定为职业病之日起______年内，可以直接向用人单位所在地统筹地区社会保险行政部门提出工伤认定申请。\n按照本条第一款规定应当由省级社会保险行政部门进行工伤认定的事项，根据属地原则由用人单位所在地的设区的市级社会保险行政部门办理。\n用人单位未在本条第一款规定的时限内提交工伤认定申请，在此期间发生符合本条例规定的工伤待遇等有关费用由该用人单位负担。"
    },
    {
      "id": 116,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 18,
      "text": "提出工伤认定申请应当提交下列材料：\n（一）工伤认定申请表；\n（二）与用人单位存在劳动关系（包括事实劳动关系）的证明材料；\n（三）医疗诊断证明或者职业病诊断证明书（或者职业病诊断鉴定书）。\n工伤认定申请表应当包括事故发生的时间、地点、原因以及职工伤害程度等基本情况。\n工伤认定申请人提供材料不完整的，社会保险行政部门应当一次性告知工伤认定申请人需要补正的全部材料。申请人按照书面告知要求补正材料后，社会保险行政部门应当受理。",
      "blankText": "提出工伤认定申请应当提交下列材料：\n（一）工伤认定申请表；\n（二）与用人单位存在劳动关系（包括事实劳动关系）的证明材料；\n（三）医疗诊断证明或者职业病诊断证明书（或者职业病诊断鉴定书）。\n工伤认定申请表应当包括事故发生的时间、地点、原因以及职工伤害程度等基本情况。\n工伤认定申请人提供材料不完整的，社会保险行政部门应当一次性告知工伤认定申请人需要补正的全部材料。申请人按照书面告知要求补正材料后，社会保险行政部门应当受理。"
    },
    {
      "id": 117,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 19,
      "text": "社会保险行政部门受理工伤认定申请后，根据审核需要可以对事故伤害进行调查核实，用人单位、职工、工会组织、医疗机构以及有关部门应当予以协助。职业病诊断和诊断争议的鉴定，依照职业病防治法的有关规定执行。对依法取得职业病诊断证明书或者职业病诊断鉴定书的，社会保险行政部门不再进行调查核实。\n职工或者其近亲属认为是工伤，用人单位不认为是工伤的，由用人单位承担举证责任。",
      "blankText": "社会保险行政部门受理工伤认定申请后，根据审核需要可以对事故伤害进行调查核实，用人单位、职工、工会组织、医疗机构以及有关部门应当予以协助。职业病诊断和诊断争议的鉴定，依照职业病防治法的有关规定执行。对依法取得职业病诊断证明书或者职业病诊断鉴定书的，社会保险行政部门不再进行调查核实。\n职工或者其近亲属认为是工伤，用人单位不认为是工伤的，由用人单位承担举证责任。"
    },
    {
      "id": 118,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 20,
      "text": "社会保险行政部门应当自受理工伤认定申请之日起60日内作出工伤认定的决定，并书面通知申请工伤认定的职工或者其近亲属和该职工所在单位。\n社会保险行政部门对受理的事实清楚、权利义务明确的工伤认定申请，应当在15日内作出工伤认定的决定。\n作出工伤认定决定需要以司法机关或者有关行政主管部门的结论为依据的，在司法机关或者有关行政主管部门尚未作出结论期间，作出工伤认定决定的时限中止。\n社会保险行政部门工作人员与工伤认定申请人有利害关系的，应当回避。",
      "blankText": "社会保险行政部门应当自受理工伤认定申请之日起______日内作出工伤认定的决定，并书面通知申请工伤认定的职工或者其近亲属和该职工所在单位。\n社会保险行政部门对受理的事实清楚、权利义务明确的工伤认定申请，应当在______日内作出工伤认定的决定。\n作出工伤认定决定需要以司法机关或者有关行政主管部门的结论为依据的，在司法机关或者有关行政主管部门尚未作出结论期间，作出工伤认定决定的时限中止。\n社会保险行政部门工作人员与工伤认定申请人有利害关系的，应当回避。"
    },
    {
      "id": 119,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 21,
      "text": "职工发生工伤，经治疗伤情相对稳定后存在残疾、影响劳动能力的，应当进行劳动能力鉴定。",
      "blankText": "职工发生工伤，经治疗伤情相对稳定后存在残疾、影响劳动能力的，应当进行劳动能力鉴定。"
    },
    {
      "id": 120,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 22,
      "text": "劳动能力鉴定是指劳动功能障碍程度和生活自理障碍程度的等级鉴定。\n劳动功能障碍分为十个伤残等级，最重的为一级，最轻的为十级。\n生活自理障碍分为三个等级：生活完全不能自理、生活大部分不能自理和生活部分不能自理。\n劳动能力鉴定标准由国务院社会保险行政部门会同国务院卫生行政部门等部门制定。",
      "blankText": "劳动能力鉴定是指劳动功能障碍程度和生活自理障碍程度的等级鉴定。\n劳动功能障碍分为十个伤残等级，最重的为一级，最轻的为十级。\n生活自理障碍分为三个等级：生活完全不能自理、生活大部分不能自理和生活部分不能自理。\n劳动能力鉴定标准由国务院社会保险行政部门会同国务院卫生行政部门等部门制定。"
    },
    {
      "id": 121,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 23,
      "text": "劳动能力鉴定由用人单位、工伤职工或者其近亲属向设区的市级劳动能力鉴定委员会提出申请，并提供工伤认定决定和职工工伤医疗的有关资料。",
      "blankText": "劳动能力鉴定由用人单位、工伤职工或者其近亲属向设区的市级劳动能力鉴定委员会提出申请，并提供工伤认定决定和职工工伤医疗的有关资料。"
    },
    {
      "id": 122,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 24,
      "text": "省、自治区、直辖市劳动能力鉴定委员会和设区的市级劳动能力鉴定委员会分别由省、自治区、直辖市和设区的市级社会保险行政部门、卫生行政部门、工会组织、经办机构代表以及用人单位代表组成。\n劳动能力鉴定委员会建立医疗卫生专家库。列入专家库的医疗卫生专业技术人员应当具备下列条件：\n（一）具有医疗卫生高级专业技术职务任职资格；\n（二）掌握劳动能力鉴定的相关知识；\n（三）具有良好的职业品德。",
      "blankText": "省、自治区、直辖市劳动能力鉴定委员会和设区的市级劳动能力鉴定委员会分别由省、自治区、直辖市和设区的市级社会保险行政部门、卫生行政部门、工会组织、经办机构代表以及用人单位代表组成。\n劳动能力鉴定委员会建立医疗卫生专家库。列入专家库的医疗卫生专业技术人员应当具备下列条件：\n（一）具有医疗卫生高级专业技术职务任职资格；\n（二）掌握劳动能力鉴定的相关知识；\n（三）具有良好的职业品德。"
    },
    {
      "id": 123,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 25,
      "text": "设区的市级劳动能力鉴定委员会收到劳动能力鉴定申请后，应当从其建立的医疗卫生专家库中随机抽取3名或者5名相关专家组成专家组，由专家组提出鉴定意见。设区的市级劳动能力鉴定委员会根据专家组的鉴定意见作出工伤职工劳动能力鉴定结论；必要时，可以委托具备资格的医疗机构协助进行有关的诊断。\n设区的市级劳动能力鉴定委员会应当自收到劳动能力鉴定申请之日起60日内作出劳动能力鉴定结论，必要时，作出劳动能力鉴定结论的期限可以延长30日。劳动能力鉴定结论应当及时送达申请鉴定的单位和个人。",
      "blankText": "设区的市级劳动能力鉴定委员会收到劳动能力鉴定申请后，应当从其建立的医疗卫生专家库中随机抽取3名或者5名相关专家组成专家组，由专家组提出鉴定意见。设区的市级劳动能力鉴定委员会根据专家组的鉴定意见作出工伤职工劳动能力鉴定结论；必要时，可以委托具备资格的医疗机构协助进行有关的诊断。\n设区的市级劳动能力鉴定委员会应当自收到劳动能力鉴定申请之日起______日内作出劳动能力鉴定结论，必要时，作出劳动能力鉴定结论的期限可以延长______日。劳动能力鉴定结论应当及时送达申请鉴定的单位和个人。"
    },
    {
      "id": 124,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 26,
      "text": "申请鉴定的单位或者个人对设区的市级劳动能力鉴定委员会作出的鉴定结论不服的，可以在收到该鉴定结论之日起15日内向省、自治区、直辖市劳动能力鉴定委员会提出再次鉴定申请。省、自治区、直辖市劳动能力鉴定委员会作出的劳动能力鉴定结论为最终结论。",
      "blankText": "申请鉴定的单位或者个人对设区的市级劳动能力鉴定委员会作出的鉴定结论不服的，可以在收到该鉴定结论之日起______日内向省、自治区、直辖市劳动能力鉴定委员会提出再次鉴定申请。省、自治区、直辖市劳动能力鉴定委员会作出的劳动能力鉴定结论为最终结论。"
    },
    {
      "id": 125,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 27,
      "text": "劳动能力鉴定工作应当客观、公正。劳动能力鉴定委员会组成人员或者参加鉴定的专家与当事人有利害关系的，应当回避。",
      "blankText": "劳动能力鉴定工作应当客观、公正。劳动能力鉴定委员会组成人员或者参加鉴定的专家与当事人有利害关系的，应当回避。"
    },
    {
      "id": 126,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 28,
      "text": "自劳动能力鉴定结论作出之日起1年后，工伤职工或者其近亲属、所在单位或者经办机构认为伤残情况发生变化的，可以申请劳动能力复查鉴定。",
      "blankText": "自劳动能力鉴定结论作出之日起______年后，工伤职工或者其近亲属、所在单位或者经办机构认为伤残情况发生变化的，可以申请劳动能力复查鉴定。"
    },
    {
      "id": 127,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 29,
      "text": "劳动能力鉴定委员会依照本条例第二十六条和第二十八条的规定进行再次鉴定和复查鉴定的期限，依照本条例第二十五条第二款的规定执行。",
      "blankText": "劳动能力鉴定委员会依照本条例第二十六条和第二十八条的规定进行再次鉴定和复查鉴定的期限，依照本条例第二十五条第二款的规定执行。"
    },
    {
      "id": 128,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 30,
      "text": "职工因工作遭受事故伤害或者患职业病进行治疗，享受工伤医疗待遇。\n职工治疗工伤应当在签订服务协议的医疗机构就医，情况紧急时可以先到就近的医疗机构急救。\n治疗工伤所需费用符合工伤保险诊疗项目目录、工伤保险药品目录、工伤保险住院服务标准的，从工伤保险基金支付。工伤保险诊疗项目目录、工伤保险药品目录、工伤保险住院服务标准，由国务院社会保险行政部门会同国务院卫生行政部门、食品药品监督管理部门等部门规定。\n职工住院治疗工伤的伙食补助费，以及经医疗机构出具证明，报经办机构同意，工伤职工到统筹地区以外就医所需的交通、食宿费用从工伤保险基金支付，基金支付的具体标准由统筹地区人民政府规定。\n工伤职工治疗非工伤引发的疾病，不享受工伤医疗待遇，按照基本医疗保险办法处理。\n工伤职工到签订服务协议的医疗机构进行工伤康复的费用，符合规定的，从工伤保险基金支付。",
      "blankText": "职工因工作遭受事故伤害或者患职业病进行治疗，享受工伤医疗待遇。\n职工治疗工伤应当在签订服务协议的医疗机构就医，情况紧急时可以先到就近的医疗机构急救。\n治疗工伤所需费用符合工伤保险诊疗项目目录、工伤保险药品目录、工伤保险住院服务标准的，从工伤保险基金支付。工伤保险诊疗项目目录、工伤保险药品目录、工伤保险住院服务标准，由国务院社会保险行政部门会同国务院卫生行政部门、食品药品监督管理部门等部门规定。\n职工住院治疗工伤的伙食补助费，以及经医疗机构出具证明，报经办机构同意，工伤职工到统筹地区以外就医所需的交通、食宿费用从工伤保险基金支付，基金支付的具体标准由统筹地区人民政府规定。\n工伤职工治疗非工伤引发的疾病，不享受工伤医疗待遇，按照基本医疗保险办法处理。\n工伤职工到签订服务协议的医疗机构进行工伤康复的费用，符合规定的，从工伤保险基金支付。"
    },
    {
      "id": 129,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 31,
      "text": "社会保险行政部门作出认定为工伤的决定后发生行政复议、行政诉讼的，行政复议和行政诉讼期间不停止支付工伤职工治疗工伤的医疗费用。",
      "blankText": "社会保险行政部门作出认定为工伤的决定后发生行政复议、行政诉讼的，行政复议和行政诉讼期间不停止支付工伤职工治疗工伤的医疗费用。"
    },
    {
      "id": 130,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 32,
      "text": "工伤职工因日常生活或者就业需要，经劳动能力鉴定委员会确认，可以安装假肢、矫形器、假眼、假牙和配置轮椅等辅助器具，所需费用按照国家规定的标准从工伤保险基金支付。",
      "blankText": "工伤职工因日常生活或者就业需要，经劳动能力鉴定委员会确认，可以安装假肢、矫形器、假眼、假牙和配置轮椅等辅助器具，所需费用按照国家规定的标准从工伤保险基金支付。"
    },
    {
      "id": 131,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 33,
      "text": "职工因工作遭受事故伤害或者患职业病需要暂停工作接受工伤医疗的，在停工留薪期内，原工资福利待遇不变，由所在单位按月支付。\n停工留薪期一般不超过12个月。伤情严重或者情况特殊，经设区的市级劳动能力鉴定委员会确认，可以适当延长，但延长不得超过12个月。工伤职工评定伤残等级后，停发原待遇，按照本章的有关规定享受伤残待遇。工伤职工在停工留薪期满后仍需治疗的，继续享受工伤医疗待遇。\n生活不能自理的工伤职工在停工留薪期需要护理的，由所在单位负责。",
      "blankText": "职工因工作遭受事故伤害或者患职业病需要暂停工作接受工伤医疗的，在停工留薪期内，原工资福利待遇不变，由所在单位按月支付。\n停工留薪期一般不超过______个月。伤情严重或者情况特殊，经设区的市级劳动能力鉴定委员会确认，可以适当延长，但延长不得超过______个月。工伤职工评定伤残等级后，停发原待遇，按照本章的有关规定享受伤残待遇。工伤职工在停工留薪期满后仍需治疗的，继续享受工伤医疗待遇。\n生活不能自理的工伤职工在停工留薪期需要护理的，由所在单位负责。"
    },
    {
      "id": 132,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 34,
      "text": "工伤职工已经评定伤残等级并经劳动能力鉴定委员会确认需要生活护理的，从工伤保险基金按月支付生活护理费。\n生活护理费按照生活完全不能自理、生活大部分不能自理或者生活部分不能自理3个不同等级支付，其标准分别为统筹地区上年度职工月平均工资的50%、40%或者30%。",
      "blankText": "工伤职工已经评定伤残等级并经劳动能力鉴定委员会确认需要生活护理的，从工伤保险基金按月支付生活护理费。\n生活护理费按照生活完全不能自理、生活大部分不能自理或者生活部分不能自理3个不同等级支付，其标准分别为统筹地区上年度职工月平均工资的______%、______%或者______%。"
    },
    {
      "id": 133,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 35,
      "text": "职工因工致残被鉴定为一级至四级伤残的，保留劳动关系，退出工作岗位，享受以下待遇：\n（一）从工伤保险基金按伤残等级支付一次性伤残补助金，标准为：一级伤残为27个月的本人工资，二级伤残为25个月的本人工资，三级伤残为23个月的本人工资，四级伤残为21个月的本人工资；\n（二）从工伤保险基金按月支付伤残津贴，标准为：一级伤残为本人工资的90%，二级伤残为本人工资的85%，三级伤残为本人工资的80%，四级伤残为本人工资的75%。伤残津贴实际金额低于当地最低工资标准的，由工伤保险基金补足差额；\n（三）工伤职工达到退休年龄并办理退休手续后，停发伤残津贴，按照国家有关规定享受基本养老保险待遇。基本养老保险待遇低于伤残津贴的，由工伤保险基金补足差额。\n职工因工致残被鉴定为一级至四级伤残的，由用人单位和职工个人以伤残津贴为基数，缴纳基本医疗保险费。",
      "blankText": "职工因工致残被鉴定为一级至四级伤残的，保留劳动关系，退出工作岗位，享受以下待遇：\n（一）从工伤保险基金按伤残等级支付一次性伤残补助金，标准为：一级伤残为______个月的本人工资，二级伤残为______个月的本人工资，三级伤残为______个月的本人工资，四级伤残为______个月的本人工资；\n（二）从工伤保险基金按月支付伤残津贴，标准为：一级伤残为本人工资的______%，二级伤残为本人工资的______%，三级伤残为本人工资的______%，四级伤残为本人工资的______%。伤残津贴实际金额低于当地最低工资标准的，由工伤保险基金补足差额；\n（三）工伤职工达到退休年龄并办理退休手续后，停发伤残津贴，按照国家有关规定享受基本养老保险待遇。基本养老保险待遇低于伤残津贴的，由工伤保险基金补足差额。\n职工因工致残被鉴定为一级至四级伤残的，由用人单位和职工个人以伤残津贴为基数，缴纳基本医疗保险费。"
    },
    {
      "id": 134,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 36,
      "text": "职工因工致残被鉴定为五级、六级伤残的，享受以下待遇：\n（一）从工伤保险基金按伤残等级支付一次性伤残补助金，标准为：五级伤残为18个月的本人工资，六级伤残为16个月的本人工资；\n（二）保留与用人单位的劳动关系，由用人单位安排适当工作。难以安排工作的，由用人单位按月发给伤残津贴，标准为：五级伤残为本人工资的70%，六级伤残为本人工资的60%，并由用人单位按照规定为其缴纳应缴纳的各项社会保险费。伤残津贴实际金额低于当地最低工资标准的，由用人单位补足差额。\n经工伤职工本人提出，该职工可以与用人单位解除或者终止劳动关系，由工伤保险基金支付一次性工伤医疗补助金，由用人单位支付一次性伤残就业补助金。一次性工伤医疗补助金和一次性伤残就业补助金的具体标准由省、自治区、直辖市人民政府规定。",
      "blankText": "职工因工致残被鉴定为五级、六级伤残的，享受以下待遇：\n（一）从工伤保险基金按伤残等级支付一次性伤残补助金，标准为：五级伤残为______个月的本人工资，六级伤残为______个月的本人工资；\n（二）保留与用人单位的劳动关系，由用人单位安排适当工作。难以安排工作的，由用人单位按月发给伤残津贴，标准为：五级伤残为本人工资的______%，六级伤残为本人工资的______%，并由用人单位按照规定为其缴纳应缴纳的各项社会保险费。伤残津贴实际金额低于当地最低工资标准的，由用人单位补足差额。\n经工伤职工本人提出，该职工可以与用人单位解除或者终止劳动关系，由工伤保险基金支付一次性工伤医疗补助金，由用人单位支付一次性伤残就业补助金。一次性工伤医疗补助金和一次性伤残就业补助金的具体标准由省、自治区、直辖市人民政府规定。"
    },
    {
      "id": 135,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 37,
      "text": "职工因工致残被鉴定为七级至十级伤残的，享受以下待遇：\n（一）从工伤保险基金按伤残等级支付一次性伤残补助金，标准为：七级伤残为13个月的本人工资，八级伤残为11个月的本人工资，九级伤残为9个月的本人工资，十级伤残为7个月的本人工资；\n（二）劳动、聘用合同期满终止，或者职工本人提出解除劳动、聘用合同的，由工伤保险基金支付一次性工伤医疗补助金，由用人单位支付一次性伤残就业补助金。一次性工伤医疗补助金和一次性伤残就业补助金的具体标准由省、自治区、直辖市人民政府规定。",
      "blankText": "职工因工致残被鉴定为七级至十级伤残的，享受以下待遇：\n（一）从工伤保险基金按伤残等级支付一次性伤残补助金，标准为：七级伤残为______个月的本人工资，八级伤残为______个月的本人工资，九级伤残为______个月的本人工资，十级伤残为______个月的本人工资；\n（二）劳动、聘用合同期满终止，或者职工本人提出解除劳动、聘用合同的，由工伤保险基金支付一次性工伤医疗补助金，由用人单位支付一次性伤残就业补助金。一次性工伤医疗补助金和一次性伤残就业补助金的具体标准由省、自治区、直辖市人民政府规定。"
    },
    {
      "id": 136,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 38,
      "text": "工伤职工工伤复发，确认需要治疗的，享受本条例第三十条、第三十二条和第三十三条规定的工伤待遇。",
      "blankText": "工伤职工工伤复发，确认需要治疗的，享受本条例第三十条、第三十二条和第三十三条规定的工伤待遇。"
    },
    {
      "id": 137,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 39,
      "text": "职工因工死亡，其近亲属按照下列规定从工伤保险基金领取丧葬补助金、供养亲属抚恤金和一次性工亡补助金：\n（一）丧葬补助金为6个月的统筹地区上年度职工月平均工资；\n（二）供养亲属抚恤金按照职工本人工资的一定比例发给由因工死亡职工生前提供主要生活来源、无劳动能力的亲属。标准为：配偶每月40%，其他亲属每人每月30%，孤寡老人或者孤儿每人每月在上述标准的基础上增加10%。核定的各供养亲属的抚恤金之和不应高于因工死亡职工生前的工资。供养亲属的具体范围由国务院社会保险行政部门规定；\n（三）一次性工亡补助金标准为上一年度全国城镇居民人均可支配收入的20倍。\n伤残职工在停工留薪期内因工伤导致死亡的，其近亲属享受本条第一款规定的待遇。\n一级至四级伤残职工在停工留薪期满后死亡的，其近亲属可以享受本条第一款第（一）项、第（二）项规定的待遇。",
      "blankText": "职工因工死亡，其近亲属按照下列规定从工伤保险基金领取丧葬补助金、供养亲属抚恤金和一次性工亡补助金：\n（一）丧葬补助金为______个月的统筹地区上年度职工月平均工资；\n（二）供养亲属抚恤金按照职工本人工资的一定比例发给由因工死亡职工生前提供主要生活来源、无劳动能力的亲属。标准为：配偶每月______%，其他亲属每人每月______%，孤寡老人或者孤儿每人每月在上述标准的基础上增加______%。核定的各供养亲属的抚恤金之和不应高于因工死亡职工生前的工资。供养亲属的具体范围由国务院社会保险行政部门规定；\n（三）一次性工亡补助金标准为上一年度全国城镇居民人均可支配收入的______倍。\n伤残职工在停工留薪期内因工伤导致死亡的，其近亲属享受本条第一款规定的待遇。\n一级至四级伤残职工在停工留薪期满后死亡的，其近亲属可以享受本条第一款第（一）项、第（二）项规定的待遇。"
    },
    {
      "id": 138,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 40,
      "text": "伤残津贴、供养亲属抚恤金、生活护理费由统筹地区社会保险行政部门根据职工平均工资和生活费用变化等情况适时调整。调整办法由省、自治区、直辖市人民政府规定。",
      "blankText": "伤残津贴、供养亲属抚恤金、生活护理费由统筹地区社会保险行政部门根据职工平均工资和生活费用变化等情况适时调整。调整办法由省、自治区、直辖市人民政府规定。"
    },
    {
      "id": 139,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 41,
      "text": "职工因工外出期间发生事故或者在抢险救灾中下落不明的，从事故发生当月起3个月内照发工资，从第4个月起停发工资，由工伤保险基金向其供养亲属按月支付供养亲属抚恤金。生活有困难的，可以预支一次性工亡补助金的50%。职工被人民法院宣告死亡的，按照本条例第三十九条职工因工死亡的规定处理。",
      "blankText": "职工因工外出期间发生事故或者在抢险救灾中下落不明的，从事故发生当月起______个月内照发工资，从第______个月起停发工资，由工伤保险基金向其供养亲属按月支付供养亲属抚恤金。生活有困难的，可以预支一次性工亡补助金的______%。职工被人民法院宣告死亡的，按照本条例第三十九条职工因工死亡的规定处理。"
    },
    {
      "id": 140,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 42,
      "text": "工伤职工有下列情形之一的，停止享受工伤保险待遇：\n（一）丧失享受待遇条件的；\n（二）拒不接受劳动能力鉴定的；\n（三）拒绝治疗的。",
      "blankText": "工伤职工有下列情形之一的，停止享受工伤保险待遇：\n（一）丧失享受待遇条件的；\n（二）拒不接受劳动能力鉴定的；\n（三）拒绝治疗的。"
    },
    {
      "id": 141,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 43,
      "text": "用人单位分立、合并、转让的，承继单位应当承担原用人单位的工伤保险责任；原用人单位已经参加工伤保险的，承继单位应当到当地经办机构办理工伤保险变更登记。\n用人单位实行承包经营的，工伤保险责任由职工劳动关系所在单位承担。\n职工被借调期间受到工伤事故伤害的，由原用人单位承担工伤保险责任，但原用人单位与借调单位可以约定补偿办法。\n企业破产的，在破产清算时依法拨付应当由单位支付的工伤保险待遇费用。",
      "blankText": "用人单位分立、合并、转让的，承继单位应当承担原用人单位的工伤保险责任；原用人单位已经参加工伤保险的，承继单位应当到当地经办机构办理工伤保险变更登记。\n用人单位实行承包经营的，工伤保险责任由职工劳动关系所在单位承担。\n职工被借调期间受到工伤事故伤害的，由原用人单位承担工伤保险责任，但原用人单位与借调单位可以约定补偿办法。\n企业破产的，在破产清算时依法拨付应当由单位支付的工伤保险待遇费用。"
    },
    {
      "id": 142,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 44,
      "text": "职工被派遣出境工作，依据前往国家或者地区的法律应当参加当地工伤保险的，参加当地工伤保险，其国内工伤保险关系中止；不能参加当地工伤保险的，其国内工伤保险关系不中止。",
      "blankText": "职工被派遣出境工作，依据前往国家或者地区的法律应当参加当地工伤保险的，参加当地工伤保险，其国内工伤保险关系中止；不能参加当地工伤保险的，其国内工伤保险关系不中止。"
    },
    {
      "id": 143,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 45,
      "text": "职工再次发生工伤，根据规定应当享受伤残津贴的，按照新认定的伤残等级享受伤残津贴待遇。",
      "blankText": "职工再次发生工伤，根据规定应当享受伤残津贴的，按照新认定的伤残等级享受伤残津贴待遇。"
    },
    {
      "id": 144,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 46,
      "text": "经办机构具体承办工伤保险事务，履行下列职责：\n（一）根据省、自治区、直辖市人民政府规定，征收工伤保险费；\n（二）核查用人单位的工资总额和职工人数，办理工伤保险登记，并负责保存用人单位缴费和职工享受工伤保险待遇情况的记录；\n（三）进行工伤保险的调查、统计；\n（四）按照规定管理工伤保险基金的支出；\n（五）按照规定核定工伤保险待遇；\n（六）为工伤职工或者其近亲属免费提供咨询服务。",
      "blankText": "经办机构具体承办工伤保险事务，履行下列职责：\n（一）根据省、自治区、直辖市人民政府规定，征收工伤保险费；\n（二）核查用人单位的工资总额和职工人数，办理工伤保险登记，并负责保存用人单位缴费和职工享受工伤保险待遇情况的记录；\n（三）进行工伤保险的调查、统计；\n（四）按照规定管理工伤保险基金的支出；\n（五）按照规定核定工伤保险待遇；\n（六）为工伤职工或者其近亲属免费提供咨询服务。"
    },
    {
      "id": 145,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 47,
      "text": "经办机构与医疗机构、辅助器具配置机构在平等协商的基础上签订服务协议，并公布签订服务协议的医疗机构、辅助器具配置机构的名单。具体办法由国务院社会保险行政部门分别会同国务院卫生行政部门、民政部门等部门制定。",
      "blankText": "经办机构与医疗机构、辅助器具配置机构在平等协商的基础上签订服务协议，并公布签订服务协议的医疗机构、辅助器具配置机构的名单。具体办法由国务院社会保险行政部门分别会同国务院卫生行政部门、民政部门等部门制定。"
    },
    {
      "id": 146,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 48,
      "text": "经办机构按照协议和国家有关目录、标准对工伤职工医疗费用、康复费用、辅助器具费用的使用情况进行核查，并按时足额结算费用。",
      "blankText": "经办机构按照协议和国家有关目录、标准对工伤职工医疗费用、康复费用、辅助器具费用的使用情况进行核查，并按时足额结算费用。"
    },
    {
      "id": 147,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 49,
      "text": "经办机构应当定期公布工伤保险基金的收支情况，及时向社会保险行政部门提出调整费率的建议。",
      "blankText": "经办机构应当定期公布工伤保险基金的收支情况，及时向社会保险行政部门提出调整费率的建议。"
    },
    {
      "id": 148,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 50,
      "text": "社会保险行政部门、经办机构应当定期听取工伤职工、医疗机构、辅助器具配置机构以及社会各界对改进工伤保险工作的意见。",
      "blankText": "社会保险行政部门、经办机构应当定期听取工伤职工、医疗机构、辅助器具配置机构以及社会各界对改进工伤保险工作的意见。"
    },
    {
      "id": 149,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 51,
      "text": "社会保险行政部门依法对工伤保险费的征缴和工伤保险基金的支付情况进行监督检查。\n财政部门和审计机关依法对工伤保险基金的收支、管理情况进行监督。",
      "blankText": "社会保险行政部门依法对工伤保险费的征缴和工伤保险基金的支付情况进行监督检查。\n财政部门和审计机关依法对工伤保险基金的收支、管理情况进行监督。"
    },
    {
      "id": 150,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 52,
      "text": "任何组织和个人对有关工伤保险的违法行为，有权举报。社会保险行政部门对举报应当及时调查，按照规定处理，并为举报人保密。",
      "blankText": "任何组织和个人对有关工伤保险的违法行为，有权举报。社会保险行政部门对举报应当及时调查，按照规定处理，并为举报人保密。"
    },
    {
      "id": 151,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 53,
      "text": "工会组织依法维护工伤职工的合法权益，对用人单位的工伤保险工作实行监督。",
      "blankText": "工会组织依法维护工伤职工的合法权益，对用人单位的工伤保险工作实行监督。"
    },
    {
      "id": 152,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 54,
      "text": "职工与用人单位发生工伤待遇方面的争议，按照处理劳动争议的有关规定处理。",
      "blankText": "职工与用人单位发生工伤待遇方面的争议，按照处理劳动争议的有关规定处理。"
    },
    {
      "id": 153,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 55,
      "text": "有下列情形之一的，有关单位或者个人可以依法申请行政复议，也可以依法向人民法院提起行政诉讼：\n（一）申请工伤认定的职工或者其近亲属、该职工所在单位对工伤认定申请不予受理的决定不服的；\n（二）申请工伤认定的职工或者其近亲属、该职工所在单位对工伤认定结论不服的；\n（三）用人单位对经办机构确定的单位缴费费率不服的；\n（四）签订服务协议的医疗机构、辅助器具配置机构认为经办机构未履行有关协议或者规定的；\n（五）工伤职工或者其近亲属对经办机构核定的工伤保险待遇有异议的。",
      "blankText": "有下列情形之一的，有关单位或者个人可以依法申请行政复议，也可以依法向人民法院提起行政诉讼：\n（一）申请工伤认定的职工或者其近亲属、该职工所在单位对工伤认定申请不予受理的决定不服的；\n（二）申请工伤认定的职工或者其近亲属、该职工所在单位对工伤认定结论不服的；\n（三）用人单位对经办机构确定的单位缴费费率不服的；\n（四）签订服务协议的医疗机构、辅助器具配置机构认为经办机构未履行有关协议或者规定的；\n（五）工伤职工或者其近亲属对经办机构核定的工伤保险待遇有异议的。"
    },
    {
      "id": 154,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 56,
      "text": "单位或者个人违反本条例第十二条规定挪用工伤保险基金，构成犯罪的，依法追究刑事责任；尚不构成犯罪的，依法给予处分或者纪律处分。被挪用的基金由社会保险行政部门追回，并入工伤保险基金；没收的违法所得依法上缴国库。",
      "blankText": "单位或者个人违反本条例第十二条规定挪用工伤保险基金，构成犯罪的，依法追究刑事责任；尚不构成犯罪的，依法给予处分或者纪律处分。被挪用的基金由社会保险行政部门追回，并入工伤保险基金；没收的违法所得依法上缴国库。"
    },
    {
      "id": 155,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 57,
      "text": "社会保险行政部门工作人员有下列情形之一的，依法给予处分；情节严重，构成犯罪的，依法追究刑事责任：\n（一）无正当理由不受理工伤认定申请，或者弄虚作假将不符合工伤条件的人员认定为工伤职工的；\n（二）未妥善保管申请工伤认定的证据材料，致使有关证据灭失的；\n（三）收受当事人财物的。",
      "blankText": "社会保险行政部门工作人员有下列情形之一的，依法给予处分；情节严重，构成犯罪的，依法追究刑事责任：\n（一）无正当理由不受理工伤认定申请，或者弄虚作假将不符合工伤条件的人员认定为工伤职工的；\n（二）未妥善保管申请工伤认定的证据材料，致使有关证据灭失的；\n（三）收受当事人财物的。"
    },
    {
      "id": 156,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 58,
      "text": "经办机构有下列行为之一的，由社会保险行政部门责令改正，对直接负责的主管人员和其他责任人员依法给予纪律处分；情节严重，构成犯罪的，依法追究刑事责任；造成当事人经济损失的，由经办机构依法承担赔偿责任：\n（一）未按规定保存用人单位缴费和职工享受工伤保险待遇情况记录的；\n（二）不按规定核定工伤保险待遇的；\n（三）收受当事人财物的。",
      "blankText": "经办机构有下列行为之一的，由社会保险行政部门责令改正，对直接负责的主管人员和其他责任人员依法给予纪律处分；情节严重，构成犯罪的，依法追究刑事责任；造成当事人经济损失的，由经办机构依法承担赔偿责任：\n（一）未按规定保存用人单位缴费和职工享受工伤保险待遇情况记录的；\n（二）不按规定核定工伤保险待遇的；\n（三）收受当事人财物的。"
    },
    {
      "id": 157,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 59,
      "text": "医疗机构、辅助器具配置机构不按服务协议提供服务的，经办机构可以解除服务协议。\n经办机构不按时足额结算费用的，由社会保险行政部门责令改正；医疗机构、辅助器具配置机构可以解除服务协议。",
      "blankText": "医疗机构、辅助器具配置机构不按服务协议提供服务的，经办机构可以解除服务协议。\n经办机构不按时足额结算费用的，由社会保险行政部门责令改正；医疗机构、辅助器具配置机构可以解除服务协议。"
    },
    {
      "id": 158,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 60,
      "text": "用人单位、工伤职工或者其近亲属骗取工伤保险待遇，医疗机构、辅助器具配置机构骗取工伤保险基金支出的，由社会保险行政部门责令退还，处骗取金额2倍以上5倍以下的罚款；情节严重构成犯罪的，依法追究刑事责任。",
      "blankText": "用人单位、工伤职工或者其近亲属骗取工伤保险待遇，医疗机构、辅助器具配置机构骗取工伤保险基金支出的，由社会保险行政部门责令退还，处骗取金额______倍以上______倍以下的罚款；情节严重构成犯罪的，依法追究刑事责任。"
    },
    {
      "id": 159,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 61,
      "text": "从事劳动能力鉴定的组织或者个人有下列情形之一的，由社会保险行政部门责令改正，处2000元以上1万元以下的罚款；情节严重，构成犯罪的，依法追究刑事责任：\n（一）提供虚假鉴定意见的；\n（二）提供虚假诊断证明的；\n（三）收受当事人财物的。",
      "blankText": "从事劳动能力鉴定的组织或者个人有下列情形之一的，由社会保险行政部门责令改正，处______元以上______万元以下的罚款；情节严重，构成犯罪的，依法追究刑事责任：\n（一）提供虚假鉴定意见的；\n（二）提供虚假诊断证明的；\n（三）收受当事人财物的。"
    },
    {
      "id": 160,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 62,
      "text": "用人单位依照本条例规定应当参加工伤保险而未参加的，由社会保险行政部门责令限期参加，补缴应当缴纳的工伤保险费，并自欠缴之日起，按日加收万分之五的滞纳金；逾期仍不缴纳的，处欠缴数额1倍以上3倍以下的罚款。\n依照本条例规定应当参加工伤保险而未参加工伤保险的用人单位职工发生工伤的，由该用人单位按照本条例规定的工伤保险待遇项目和标准支付费用。\n用人单位参加工伤保险并补缴应当缴纳的工伤保险费、滞纳金后，由工伤保险基金和用人单位依照本条例的规定支付新发生的费用。",
      "blankText": "用人单位依照本条例规定应当参加工伤保险而未参加的，由社会保险行政部门责令限期参加，补缴应当缴纳的工伤保险费，并自欠缴之日起，按日加收万分之五的滞纳金；逾期仍不缴纳的，处欠缴数额______倍以上______倍以下的罚款。\n依照本条例规定应当参加工伤保险而未参加工伤保险的用人单位职工发生工伤的，由该用人单位按照本条例规定的工伤保险待遇项目和标准支付费用。\n用人单位参加工伤保险并补缴应当缴纳的工伤保险费、滞纳金后，由工伤保险基金和用人单位依照本条例的规定支付新发生的费用。"
    },
    {
      "id": 161,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 63,
      "text": "用人单位违反本条例第十九条的规定，拒不协助社会保险行政部门对事故进行调查核实的，由社会保险行政部门责令改正，处2000元以上2万元以下的罚款。",
      "blankText": "用人单位违反本条例第十九条的规定，拒不协助社会保险行政部门对事故进行调查核实的，由社会保险行政部门责令改正，处______元以上______万元以下的罚款。"
    },
    {
      "id": 162,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 64,
      "text": "本条例所称工资总额，是指用人单位直接支付给本单位全部职工的劳动报酬总额。\n本条例所称本人工资，是指工伤职工因工作遭受事故伤害或者患职业病前12个月平均月缴费工资。本人工资高于统筹地区职工平均工资300%的，按照统筹地区职工平均工资的300%计算；本人工资低于统筹地区职工平均工资60%的，按照统筹地区职工平均工资的60%计算。",
      "blankText": "本条例所称工资总额，是指用人单位直接支付给本单位全部职工的劳动报酬总额。\n本条例所称本人工资，是指工伤职工因工作遭受事故伤害或者患职业病前______个月平均月缴费工资。本人工资高于统筹地区职工平均工资______%的，按照统筹地区职工平均工资的______%计算；本人工资低于统筹地区职工平均工资______%的，按照统筹地区职工平均工资的______%计算。"
    },
    {
      "id": 163,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 65,
      "text": "公务员和参照公务员法管理的事业单位、社会团体的工作人员因工作遭受事故伤害或者患职业病的，由所在单位支付费用。具体办法由国务院社会保险行政部门会同国务院财政部门规定。",
      "blankText": "公务员和参照公务员法管理的事业单位、社会团体的工作人员因工作遭受事故伤害或者患职业病的，由所在单位支付费用。具体办法由国务院社会保险行政部门会同国务院财政部门规定。"
    },
    {
      "id": 164,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 66,
      "text": "无营业执照或者未经依法登记、备案的单位以及被依法吊销营业执照或者撤销登记、备案的单位的职工受到事故伤害或者患职业病的，由该单位向伤残职工或者死亡职工的近亲属给予一次性赔偿，赔偿标准不得低于本条例规定的工伤保险待遇；用人单位不得使用童工，用人单位使用童工造成童工伤残、死亡的，由该单位向童工或者童工的近亲属给予一次性赔偿，赔偿标准不得低于本条例规定的工伤保险待遇。具体办法由国务院社会保险行政部门规定。\n前款规定的伤残职工或者死亡职工的近亲属就赔偿数额与单位发生争议的，以及前款规定的童工或者童工的近亲属就赔偿数额与单位发生争议的，按照处理劳动争议的有关规定处理。",
      "blankText": "无营业执照或者未经依法登记、备案的单位以及被依法吊销营业执照或者撤销登记、备案的单位的职工受到事故伤害或者患职业病的，由该单位向伤残职工或者死亡职工的近亲属给予一次性赔偿，赔偿标准不得低于本条例规定的工伤保险待遇；用人单位不得使用童工，用人单位使用童工造成童工伤残、死亡的，由该单位向童工或者童工的近亲属给予一次性赔偿，赔偿标准不得低于本条例规定的工伤保险待遇。具体办法由国务院社会保险行政部门规定。\n前款规定的伤残职工或者死亡职工的近亲属就赔偿数额与单位发生争议的，以及前款规定的童工或者童工的近亲属就赔偿数额与单位发生争议的，按照处理劳动争议的有关规定处理。"
    },
    {
      "id": 165,
      "category": "社会保险",
      "law": "工伤保险条例",
      "articleNum": 67,
      "text": "本条例自2004年1月1日起施行。本条例施行前已受到事故伤害或者患职业病的职工尚未完成工伤认定的，按照本条例的规定执行。",
      "blankText": "本条例自______年______月______日起施行。本条例施行前已受到事故伤害或者患职业病的职工尚未完成工伤认定的，按照本条例的规定执行。"
    },
    {
      "id": 166,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 1,
      "text": "为了保障失业人员失业期间的基本生活，促进其再就业，制定本条例。",
      "blankText": "为了保障失业人员失业期间的基本生活，促进其再就业，制定本条例。"
    },
    {
      "id": 167,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 2,
      "text": "城镇企业事业单位、城镇企业事业单位职工依照本条例的规定，缴纳失业保险费。\n城镇企业事业单位失业人员依照本条例的规定，享受失业保险待遇。\n本条所称城镇企业，是指国有企业、城镇集体企业、外商投资企业、城镇私营企业以及其他城镇企业。",
      "blankText": "城镇企业事业单位、城镇企业事业单位职工依照本条例的规定，缴纳失业保险费。\n城镇企业事业单位失业人员依照本条例的规定，享受失业保险待遇。\n本条所称城镇企业，是指国有企业、城镇集体企业、外商投资企业、城镇私营企业以及其他城镇企业。"
    },
    {
      "id": 168,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 3,
      "text": "国务院劳动保障行政部门主管全国的失业保险工作。县级以上地方各级人民政府劳动保障行政部门主管本行政区域内的失业保险工作。劳动保障行政部门按照国务院规定设立的经办失业保险业务的社会保险经办机构依照本条例的规定，具体承办失业保险工作。",
      "blankText": "国务院劳动保障行政部门主管全国的失业保险工作。县级以上地方各级人民政府劳动保障行政部门主管本行政区域内的失业保险工作。劳动保障行政部门按照国务院规定设立的经办失业保险业务的社会保险经办机构依照本条例的规定，具体承办失业保险工作。"
    },
    {
      "id": 169,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 4,
      "text": "失业保险费按照国家有关规定征缴。",
      "blankText": "失业保险费按照国家有关规定征缴。"
    },
    {
      "id": 170,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 5,
      "text": "失业保险基金由下列各项构成：\n（一）城镇企业事业单位、城镇企业事业单位职工缴纳的失业保险费；\n（二）失业保险基金的利息；\n（三）财政补贴；\n（四）依法纳入失业保险基金的其他资金。",
      "blankText": "失业保险基金由下列各项构成：\n（一）城镇企业事业单位、城镇企业事业单位职工缴纳的失业保险费；\n（二）失业保险基金的利息；\n（三）财政补贴；\n（四）依法纳入失业保险基金的其他资金。"
    },
    {
      "id": 171,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 6,
      "text": "城镇企业事业单位按照本单位工资总额的百分之二缴纳失业保险费。城镇企业事业单位职工按照本人工资的百分之一缴纳失业保险费。城镇企业事业单位招用的农民合同制工人本人不缴纳失业保险费。",
      "blankText": "城镇企业事业单位按照本单位工资总额的百分之二缴纳失业保险费。城镇企业事业单位职工按照本人工资的百分之一缴纳失业保险费。城镇企业事业单位招用的农民合同制工人本人不缴纳失业保险费。"
    },
    {
      "id": 172,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 7,
      "text": "失业保险基金在直辖市和设区的市实行全市统筹；其他地区的统筹层次由省、自治区人民政府规定。",
      "blankText": "失业保险基金在直辖市和设区的市实行全市统筹；其他地区的统筹层次由省、自治区人民政府规定。"
    },
    {
      "id": 173,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 8,
      "text": "省、自治区可以建立失业保险调剂金。\n失业保险调剂金以统筹地区依法应当征收的失业保险费为基数，按照省、自治区人民政府规定的比例筹集。\n统筹地区的失业保险基金不敷使用时，由失业保险调剂金调剂、地方财政补贴。\n失业保险调剂金的筹集、调剂使用以及地方财政补贴的具体办法，由省、自治区人民政府规定。",
      "blankText": "省、自治区可以建立失业保险调剂金。\n失业保险调剂金以统筹地区依法应当征收的失业保险费为基数，按照省、自治区人民政府规定的比例筹集。\n统筹地区的失业保险基金不敷使用时，由失业保险调剂金调剂、地方财政补贴。\n失业保险调剂金的筹集、调剂使用以及地方财政补贴的具体办法，由省、自治区人民政府规定。"
    },
    {
      "id": 174,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 9,
      "text": "省、自治区、直辖市人民政府根据本行政区域失业人员数量和失业保险基金数额，报经国务院批准，可以适当调整本行政区域失业保险费的费率。",
      "blankText": "省、自治区、直辖市人民政府根据本行政区域失业人员数量和失业保险基金数额，报经国务院批准，可以适当调整本行政区域失业保险费的费率。"
    },
    {
      "id": 175,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 10,
      "text": "失业保险基金用于下列支出：\n（一）失业保险金；\n（二）领取失业保险金期间的医疗补助金；\n（三）领取失业保险金期间死亡的失业人员的丧葬补助金和其供养的配偶、直系亲属的抚恤金；\n（四）领取失业保险金期间接受职业培训、职业介绍的补贴，补贴的办法和标准由省、自治区、直辖市人民政府规定；\n（五）国务院规定或者批准的与失业保险有关的其他费用。",
      "blankText": "失业保险基金用于下列支出：\n（一）失业保险金；\n（二）领取失业保险金期间的医疗补助金；\n（三）领取失业保险金期间死亡的失业人员的丧葬补助金和其供养的配偶、直系亲属的抚恤金；\n（四）领取失业保险金期间接受职业培训、职业介绍的补贴，补贴的办法和标准由省、自治区、直辖市人民政府规定；\n（五）国务院规定或者批准的与失业保险有关的其他费用。"
    },
    {
      "id": 176,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 11,
      "text": "失业保险基金必须存入财政部门在国有商业银行开设的社会保障基金财政专户，实行收支两条线管理，由财政部门依法进行监督。\n存入银行和按照国家规定购买国债的失业保险基金，分别按照城乡居民同期存款利率和国债利息计息。失业保险基金的利息并入失业保险基金。\n失业保险基金专款专用，不得挪作他用，不得用于平衡财政收支。",
      "blankText": "失业保险基金必须存入财政部门在国有商业银行开设的社会保障基金财政专户，实行收支两条线管理，由财政部门依法进行监督。\n存入银行和按照国家规定购买国债的失业保险基金，分别按照城乡居民同期存款利率和国债利息计息。失业保险基金的利息并入失业保险基金。\n失业保险基金专款专用，不得挪作他用，不得用于平衡财政收支。"
    },
    {
      "id": 177,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 12,
      "text": "失业保险基金收支的预算、决算，由统筹地区社会保险经办机构编制，经同级劳动保障行政部门复核、同级财政部门审核，报同级人民政府审批。",
      "blankText": "失业保险基金收支的预算、决算，由统筹地区社会保险经办机构编制，经同级劳动保障行政部门复核、同级财政部门审核，报同级人民政府审批。"
    },
    {
      "id": 178,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 13,
      "text": "失业保险基金的财务制度和会计制度按照国家有关规定执行。",
      "blankText": "失业保险基金的财务制度和会计制度按照国家有关规定执行。"
    },
    {
      "id": 179,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 14,
      "text": "具备下列条件的失业人员，可以领取失业保险金：\n（一）按照规定参加失业保险，所在单位和本人已按照规定履行缴费义务满1年的；\n（二）非因本人意愿中断就业的；\n（三）已办理失业登记，并有求职要求的。\n失业人员在领取失业保险金期间，按照规定同时享受其他失业保险待遇。",
      "blankText": "具备下列条件的失业人员，可以领取失业保险金：\n（一）按照规定参加失业保险，所在单位和本人已按照规定履行缴费义务满______年的；\n（二）非因本人意愿中断就业的；\n（三）已办理失业登记，并有求职要求的。\n失业人员在领取失业保险金期间，按照规定同时享受其他失业保险待遇。"
    },
    {
      "id": 180,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 15,
      "text": "失业人员在领取失业保险金期间有下列情形之一的，停止领取失业保险金，并同时停止享受其他失业保险待遇：\n（一）重新就业的；\n（二）应征服兵役的；\n（三）移居境外的；\n（四）享受基本养老保险待遇的；\n（五）被判刑收监执行或者被劳动教养的；\n（六）无正当理由，拒不接受当地人民政府指定的部门或者机构介绍的工作的；\n（七）有法律、行政法规规定的其他情形的。",
      "blankText": "失业人员在领取失业保险金期间有下列情形之一的，停止领取失业保险金，并同时停止享受其他失业保险待遇：\n（一）重新就业的；\n（二）应征服兵役的；\n（三）移居境外的；\n（四）享受基本养老保险待遇的；\n（五）被判刑收监执行或者被劳动教养的；\n（六）无正当理由，拒不接受当地人民政府指定的部门或者机构介绍的工作的；\n（七）有法律、行政法规规定的其他情形的。"
    },
    {
      "id": 181,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 16,
      "text": "城镇企业事业单位应当及时为失业人员出具终止或者解除劳动关系的证明，告知其按照规定享受失业保险待遇的权利，并将失业人员的名单自终止或者解除劳动关系之日起7日内报社会保险经办机构备案。\n城镇企业事业单位职工失业后，应当持本单位为其出具的终止或者解除劳动关系的证明，及时到指定的社会保险经办机构办理失业登记。失业保险金自办理失业登记之日起计算。\n失业保险金由社会保险经办机构按月发放。社会保险经办机构为失业人员开具领取失业保险金的单证，失业人员凭单证到指定银行领取失业保险金。",
      "blankText": "城镇企业事业单位应当及时为失业人员出具终止或者解除劳动关系的证明，告知其按照规定享受失业保险待遇的权利，并将失业人员的名单自终止或者解除劳动关系之日起______日内报社会保险经办机构备案。\n城镇企业事业单位职工失业后，应当持本单位为其出具的终止或者解除劳动关系的证明，及时到指定的社会保险经办机构办理失业登记。失业保险金自办理失业登记之日起计算。\n失业保险金由社会保险经办机构按月发放。社会保险经办机构为失业人员开具领取失业保险金的单证，失业人员凭单证到指定银行领取失业保险金。"
    },
    {
      "id": 182,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 17,
      "text": "失业人员失业前所在单位和本人按照规定累计缴费时间满1年不足5年的，领取失业保险金的期限最长为12个月；累计缴费时间满5年不足10年的，领取失业保险金的期限最长为18个月；累计缴费时间10年以上的，领取失业保险金的期限最长为24个月。重新就业后，再次失业的，缴费时间重新计算，领取失业保险金的期限可以与前次失业应领取而尚未领取的失业保险金的期限合并计算，但是最长不得超过24个月。",
      "blankText": "失业人员失业前所在单位和本人按照规定累计缴费时间满______年不足______年的，领取失业保险金的期限最长为______个月；累计缴费时间满______年不足______年的，领取失业保险金的期限最长为______个月；累计缴费时间______年以上的，领取失业保险金的期限最长为______个月。重新就业后，再次失业的，缴费时间重新计算，领取失业保险金的期限可以与前次失业应领取而尚未领取的失业保险金的期限合并计算，但是最长不得超过______个月。"
    },
    {
      "id": 183,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 18,
      "text": "失业保险金的标准，按照低于当地最低工资标准、高于城市居民最低生活保障标准的水平，由省、自治区、直辖市人民政府确定。",
      "blankText": "失业保险金的标准，按照低于当地最低工资标准、高于城市居民最低生活保障标准的水平，由省、自治区、直辖市人民政府确定。"
    },
    {
      "id": 184,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 19,
      "text": "失业人员在领取失业保险金期间患病就医的，可以按照规定向社会保险经办机构申请领取医疗补助金。医疗补助金的标准由省、自治区、直辖市人民政府规定。",
      "blankText": "失业人员在领取失业保险金期间患病就医的，可以按照规定向社会保险经办机构申请领取医疗补助金。医疗补助金的标准由省、自治区、直辖市人民政府规定。"
    },
    {
      "id": 185,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 20,
      "text": "失业人员在领取失业保险金期间死亡的，参照当地对在职职工的规定，对其家属一次性发给丧葬补助金和抚恤金。",
      "blankText": "失业人员在领取失业保险金期间死亡的，参照当地对在职职工的规定，对其家属一次性发给丧葬补助金和抚恤金。"
    },
    {
      "id": 186,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 21,
      "text": "单位招用的农民合同制工人连续工作满1年，本单位并已缴纳失业保险费，劳动合同期满未续订或者提前解除劳动合同的，由社会保险经办机构根据其工作时间长短，对其支付一次性生活补助。补助的办法和标准由省、自治区、直辖市人民政府规定。",
      "blankText": "单位招用的农民合同制工人连续工作满______年，本单位并已缴纳失业保险费，劳动合同期满未续订或者提前解除劳动合同的，由社会保险经办机构根据其工作时间长短，对其支付一次性生活补助。补助的办法和标准由省、自治区、直辖市人民政府规定。"
    },
    {
      "id": 187,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 22,
      "text": "城镇企业事业单位成建制跨统筹地区转移，失业人员跨统筹地区流动的，失业保险关系随之转迁。",
      "blankText": "城镇企业事业单位成建制跨统筹地区转移，失业人员跨统筹地区流动的，失业保险关系随之转迁。"
    },
    {
      "id": 188,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 23,
      "text": "失业人员符合城市居民最低生活保障条件的，按照规定享受城市居民最低生活保障待遇。",
      "blankText": "失业人员符合城市居民最低生活保障条件的，按照规定享受城市居民最低生活保障待遇。"
    },
    {
      "id": 189,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 24,
      "text": "劳动保障行政部门管理失业保险工作，履行下列职责：\n（一）贯彻实施失业保险法律、法规；\n（二）指导社会保险经办机构的工作；\n（三）对失业保险费的征收和失业保险待遇的支付进行监督检查。",
      "blankText": "劳动保障行政部门管理失业保险工作，履行下列职责：\n（一）贯彻实施失业保险法律、法规；\n（二）指导社会保险经办机构的工作；\n（三）对失业保险费的征收和失业保险待遇的支付进行监督检查。"
    },
    {
      "id": 190,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 25,
      "text": "社会保险经办机构具体承办失业保险工作，履行下列职责：\n（一）负责失业人员的登记、调查、统计；\n（二）按照规定负责失业保险基金的管理；\n（三）按照规定核定失业保险待遇，开具失业人员在指定银行领取失业保险金和其他补助金的单证；\n（四）拨付失业人员职业培训、职业介绍补贴费用；\n（五）为失业人员提供免费咨询服务；\n（六）国家规定由其履行的其他职责。",
      "blankText": "社会保险经办机构具体承办失业保险工作，履行下列职责：\n（一）负责失业人员的登记、调查、统计；\n（二）按照规定负责失业保险基金的管理；\n（三）按照规定核定失业保险待遇，开具失业人员在指定银行领取失业保险金和其他补助金的单证；\n（四）拨付失业人员职业培训、职业介绍补贴费用；\n（五）为失业人员提供免费咨询服务；\n（六）国家规定由其履行的其他职责。"
    },
    {
      "id": 191,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 26,
      "text": "财政部门和审计部门依法对失业保险基金的收支、管理情况进行监督。",
      "blankText": "财政部门和审计部门依法对失业保险基金的收支、管理情况进行监督。"
    },
    {
      "id": 192,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 27,
      "text": "社会保险经办机构所需经费列入预算，由财政拨付。",
      "blankText": "社会保险经办机构所需经费列入预算，由财政拨付。"
    },
    {
      "id": 193,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 28,
      "text": "不符合享受失业保险待遇条件，骗取失业保险金和其他失业保险待遇的，由社会保险经办机构责令退还；情节严重的，由劳动保障行政部门处骗取金额1倍以上3倍以下的罚款。",
      "blankText": "不符合享受失业保险待遇条件，骗取失业保险金和其他失业保险待遇的，由社会保险经办机构责令退还；情节严重的，由劳动保障行政部门处骗取金额______倍以上______倍以下的罚款。"
    },
    {
      "id": 194,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 29,
      "text": "社会保险经办机构工作人员违反规定向失业人员开具领取失业保险金或者享受其他失业保险待遇单证，致使失业保险基金损失的，由劳动保障行政部门责令追回；情节严重的，依法给予行政处分。",
      "blankText": "社会保险经办机构工作人员违反规定向失业人员开具领取失业保险金或者享受其他失业保险待遇单证，致使失业保险基金损失的，由劳动保障行政部门责令追回；情节严重的，依法给予行政处分。"
    },
    {
      "id": 195,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 30,
      "text": "劳动保障行政部门和社会保险经办机构的工作人员滥用职权、徇私舞弊、玩忽职守，造成失业保险基金损失的，由劳动保障行政部门追回损失的失业保险基金；构成犯罪的，依法追究刑事责任；尚不构成犯罪的，依法给予行政处分。",
      "blankText": "劳动保障行政部门和社会保险经办机构的工作人员滥用职权、徇私舞弊、玩忽职守，造成失业保险基金损失的，由劳动保障行政部门追回损失的失业保险基金；构成犯罪的，依法追究刑事责任；尚不构成犯罪的，依法给予行政处分。"
    },
    {
      "id": 196,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 31,
      "text": "任何单位、个人挪用失业保险基金的，追回挪用的失业保险基金；有违法所得的，没收违法所得，并入失业保险基金；构成犯罪的，依法追究刑事责任；尚不构成犯罪的，对直接负责的主管人员和其他直接责任人员依法给予行政处分。",
      "blankText": "任何单位、个人挪用失业保险基金的，追回挪用的失业保险基金；有违法所得的，没收违法所得，并入失业保险基金；构成犯罪的，依法追究刑事责任；尚不构成犯罪的，对直接负责的主管人员和其他直接责任人员依法给予行政处分。"
    },
    {
      "id": 197,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 32,
      "text": "省、自治区、直辖市人民政府根据当地实际情况，可以决定本条例适用于本行政区域内的社会团体及其专职人员、民办非企业单位及其职工、有雇工的城镇个体工商户及其雇工。",
      "blankText": "省、自治区、直辖市人民政府根据当地实际情况，可以决定本条例适用于本行政区域内的社会团体及其专职人员、民办非企业单位及其职工、有雇工的城镇个体工商户及其雇工。"
    },
    {
      "id": 198,
      "category": "社会保险",
      "law": "失业保险条例",
      "articleNum": 33,
      "text": "本条例自发布之日起施行。1993年4月12日国务院发布的《国有企业职工待业保险规定》同时废止。",
      "blankText": "本条例自发布之日起施行。______年______月______日国务院发布的《国有企业职工待业保险规定》同时废止。"
    },
    {
      "id": 1,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 1,
      "text": "为了维护劳动者取得劳动报酬的合法权益，保障劳动者个人及其家庭成员的基本生活，根据劳动法和国务院有关规定，制定本规定。",
      "blankText": "为了维护劳动者取得劳动报酬的合法权益，保障劳动者个人及其家庭成员的基本生活，根据劳动法和国务院有关规定，制定本规定。"
    },
    {
      "id": 2,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 2,
      "text": "本规定适用于在中华人民共和国境内的企业、民办非企业单位、有雇工的个体工商户（以下统称用人单位）和与之形成劳动关系的劳动者。\n国家机关、事业单位、社会团体和与之建立劳动合同关系的劳动者，依照本规定执行。",
      "blankText": "本规定适用于在中华人民共和国境内的企业、民办非企业单位、有雇工的个体工商户（以下统称用人单位）和与之形成劳动关系的劳动者。\n国家机关、事业单位、社会团体和与之建立劳动合同关系的劳动者，依照本规定执行。"
    },
    {
      "id": 3,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 3,
      "text": "本规定所称最低工资标准，是指劳动者在法定工作时间或依法签订的劳动合同约定的工作时间内提供了正常劳动的前提下，用人单位依法应支付的最低劳动报酬。\n本规定所称正常劳动，是指劳动者按依法签订的劳动合同约定，在法定工作时间或劳动合同约定的工作时间内从事的劳动。劳动者依法享受带薪年休假、探亲假、婚丧假、生育（产）假、节育手术假等国家规定的假期间，以及法定工作时间内依法参加社会活动期间，视为提供了正常劳动。",
      "blankText": "本规定所称最低工资标准，是指劳动者在法定工作时间或依法签订的劳动合同约定的工作时间内提供了正常劳动的前提下，用人单位依法应支付的最低劳动报酬。\n本规定所称正常劳动，是指劳动者按依法签订的劳动合同约定，在法定工作时间或劳动合同约定的工作时间内从事的劳动。劳动者依法享受带薪年休假、探亲假、婚丧假、生育（产）假、节育手术假等国家规定的假期间，以及法定工作时间内依法参加社会活动期间，视为提供了正常劳动。"
    },
    {
      "id": 4,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 4,
      "text": "县级以上地方人民政府劳动保障行政部门负责对本行政区域内用人单位执行本规定情况进行监督检查。\n各级工会组织依法对本规定执行情况进行监督，发现用人单位支付劳动者工资违反本规定的，有权要求当地劳动保障行政部门处理。",
      "blankText": "县级以上地方人民政府劳动保障行政部门负责对本行政区域内用人单位执行本规定情况进行监督检查。\n各级工会组织依法对本规定执行情况进行监督，发现用人单位支付劳动者工资违反本规定的，有权要求当地劳动保障行政部门处理。"
    },
    {
      "id": 5,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 5,
      "text": "最低工资标准一般采取月最低工资标准和小时最低工资标准的形式。月最低工资标准适用于全日制就业劳动者，小时最低工资标准适用于非全日制就业劳动者。",
      "blankText": "最低工资标准一般采取月最低工资标准和小时最低工资标准的形式。月最低工资标准适用于全日制就业劳动者，小时最低工资标准适用于非全日制就业劳动者。"
    },
    {
      "id": 6,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 6,
      "text": "确定和调整月最低工资标准，应参考当地就业者及其赡养人口的最低生活费用、城镇居民消费价格指数、职工个人缴纳的社会保险费和住房公积金、职工平均工资、经济发展水平、就业状况等因素。\n确定和调整小时最低工资标准，应在颁布的月最低工资标准的基础上，考虑单位应缴纳的基本养老保险费和基本医疗保险费因素，同时还应适当考虑非全日制劳动者在工作稳定性、劳动条件和劳动强度、福利等方面与全日制就业人员之间的差异。\n月最低工资标准和小时最低工资标准具体测算方法见附件。",
      "blankText": "确定和调整月最低工资标准，应参考当地就业者及其赡养人口的最低生活费用、城镇居民消费价格指数、职工个人缴纳的社会保险费和住房公积金、职工平均工资、经济发展水平、就业状况等因素。\n确定和调整小时最低工资标准，应在颁布的月最低工资标准的基础上，考虑单位应缴纳的基本养老保险费和基本医疗保险费因素，同时还应适当考虑非全日制劳动者在工作稳定性、劳动条件和劳动强度、福利等方面与全日制就业人员之间的差异。\n月最低工资标准和小时最低工资标准具体测算方法见附件。"
    },
    {
      "id": 7,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 7,
      "text": "省、自治区、直辖市范围内的不同行政区域可以有不同的最低工资标准。",
      "blankText": "省、自治区、直辖市范围内的不同行政区域可以有不同的最低工资标准。"
    },
    {
      "id": 8,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 8,
      "text": "最低工资标准的确定和调整方案，由省、自治区、直辖市人民政府劳动保障行政部门会同同级工会、企业联合会/企业家协会研究拟订，并将拟订的方案报送劳动保障部。方案内容包括最低工资确定和调整的依据、适用范围、拟订标准和说明。劳动保障部在收到拟订方案后，应征求全国总工会、中国企业联合会/企业家协会的意见。\n劳动保障部对方案可以提出修订意见，若在方案收到后14日内未提出修订意见的，视为同意。",
      "blankText": "最低工资标准的确定和调整方案，由省、自治区、直辖市人民政府劳动保障行政部门会同同级工会、企业联合会/企业家协会研究拟订，并将拟订的方案报送劳动保障部。方案内容包括最低工资确定和调整的依据、适用范围、拟订标准和说明。劳动保障部在收到拟订方案后，应征求全国总工会、中国企业联合会/企业家协会的意见。\n劳动保障部对方案可以提出修订意见，若在方案收到后______日内未提出修订意见的，视为同意。"
    },
    {
      "id": 9,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 9,
      "text": "省、自治区、直辖市劳动保障行政部门应将本地区最低工资标准方案报省、自治区、直辖市人民政府批准，并在批准后7日内在当地政府公报上和至少一种全地区性报纸上发布。省、自治区、直辖市劳动保障行政部门应在发布后10日内将最低工资标准报劳动保障部。",
      "blankText": "省、自治区、直辖市劳动保障行政部门应将本地区最低工资标准方案报省、自治区、直辖市人民政府批准，并在批准后______日内在当地政府公报上和至少一种全地区性报纸上发布。省、自治区、直辖市劳动保障行政部门应在发布后______日内将最低工资标准报劳动保障部。"
    },
    {
      "id": 10,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 10,
      "text": "最低工资标准发布实施后，如本规定第六条所规定的相关因素发生变化，应当适时调整。最低工资标准每两年至少调整一次。",
      "blankText": "最低工资标准发布实施后，如本规定第六条所规定的相关因素发生变化，应当适时调整。最低工资标准每两年至少调整一次。"
    },
    {
      "id": 11,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 11,
      "text": "用人单位应在最低工资标准发布后10日内将该标准向本单位全体劳动者公示。",
      "blankText": "用人单位应在最低工资标准发布后______日内将该标准向本单位全体劳动者公示。"
    },
    {
      "id": 12,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 12,
      "text": "在劳动者提供正常劳动的情况下，用人单位应支付给劳动者的工资在剔除下列各项以后，不得低于当地最低工资标准：\n（一）延长工作时间工资；\n（二）中班、夜班、高温、低温、井下、有毒有害等特殊工作环境、条件下的津贴；\n（三）法律、法规和国家规定的劳动者福利待遇等。\n实行计件工资或提成工资等工资形式的用人单位，在科学合理的劳动定额基础上，其支付劳动者的工资不得低于相应的最低工资标准。\n劳动者由于本人原因造成在法定工作时间内或依法签订的劳动合同约定的工作时间内未提供正常劳动的，不适用于本条规定。",
      "blankText": "在劳动者提供正常劳动的情况下，用人单位应支付给劳动者的工资在剔除下列各项以后，不得低于当地最低工资标准：\n（一）延长工作时间工资；\n（二）中班、夜班、高温、低温、井下、有毒有害等特殊工作环境、条件下的津贴；\n（三）法律、法规和国家规定的劳动者福利待遇等。\n实行计件工资或提成工资等工资形式的用人单位，在科学合理的劳动定额基础上，其支付劳动者的工资不得低于相应的最低工资标准。\n劳动者由于本人原因造成在法定工作时间内或依法签订的劳动合同约定的工作时间内未提供正常劳动的，不适用于本条规定。"
    },
    {
      "id": 13,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 13,
      "text": "用人单位违反本规定第十一条规定的，由劳动保障行政部门责令其限期改正；违反本规定第十二条规定的，由劳动保障行政部门责令其限期补发所欠劳动者工资，并可责令其按所欠工资的1至5倍支付劳动者赔偿金。",
      "blankText": "用人单位违反本规定第十一条规定的，由劳动保障行政部门责令其限期改正；违反本规定第十二条规定的，由劳动保障行政部门责令其限期补发所欠劳动者工资，并可责令其按所欠工资的1至______倍支付劳动者赔偿金。"
    },
    {
      "id": 14,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 14,
      "text": "劳动者与用人单位之间就执行最低工资标准发生争议，按劳动争议处理有关规定处理。",
      "blankText": "劳动者与用人单位之间就执行最低工资标准发生争议，按劳动争议处理有关规定处理。"
    },
    {
      "id": 15,
      "category": "劳动基准",
      "law": "最低工资规定",
      "articleNum": 15,
      "text": "本规定自2004年3月1日起实施。1993年11月24日原劳动部发布的《企业最低工资规定》同时废止。\n附件：最低工资标准测算方法\n一、确定最低工资标准应考虑的因素\n确定最低工资标准一般考虑城镇居民生活费用支出、职工个人缴纳社会保险费、住房公积金、职工平均工资、失业率、经济发展水平等因素。可用公式表示为：\nM＝f（C、S、A、U、E、a）\nM 最低工资标准；\nC 城镇居民人均生活费用；\nS 职工个人缴纳社会保险费、住房公积金；\nA 职工平均工资；\nU 失业率；\nE 经济发展水平；\na 调整因素。\n二、确定最低工资标准的通用方法\n1.比重法 即根据城镇居民家计调查资料，确定一定比例的最低人均收入户为贫困户，统计出贫困户的人均生活费用支出水平，乘以每一就业者的赡养系数，再加上一个调整数。\n2.恩格尔系数法 即根据国家营养学会提供的年度标准食物谱及标准食物摄取量，结合标准食物的市场价格，计算出最低食物支出标准，除以恩格尔系数，得出最低生活费用标准，再乘以每一就业者的赡养系数，再加上一个调整数。\n以上方法计算出月最低工资标准后，再考虑职工个人缴纳社会保险费、住房公积金、职工平均工资水平、社会救济金和失业保险金标准、就业状况、经济发展水平等进行必要的修正。\n举例：某地区最低收入组人均每月生活费支出为210元，每一就业者赡养系数为1.87，最低食物费用为127元，恩格尔系数为0.604，平均工资为900元。\n1.按比重法计算得出该地区月最低工资标准为：\n月最低工资标准=210×1.87+a=393+a（元）（1）\n2.按恩格尔系数法计算得出该地区月最低工资标准为：\n月最低工资标准＝127÷0.604×1.87＋a＝393＋a（元）（2）\n公式（1）与（2）中a的调整因素主要考虑当地个人缴纳养老、失业、医疗保险费和住房公积金等费用。\n另，按照国际上一般月最低工资标准相当于月平均工资的40—60%，则该地区月最低工资标准范围应在360元—540元之间。\n小时最低工资标准=〔（月最低工资标准÷20.92÷8）×（1+单位应当缴纳的基本养老保险费、基本医疗保险费比例之和）〕 ×（1+浮动系数）\n浮动系数的确定主要考虑非全日制就业劳动者工作稳定性、劳动条件和劳动强度、福利等方面与全日制就业人员之间的差异。\n各地可参照以上测算办法，根据当地实际情况合理确定最低工资标准。",
      "blankText": "本规定自______年______月______日起实施。______年______月______日原劳动部发布的《企业最低工资规定》同时废止。\n附件：最低工资标准测算方法\n一、确定最低工资标准应考虑的因素\n确定最低工资标准一般考虑城镇居民生活费用支出、职工个人缴纳社会保险费、住房公积金、职工平均工资、失业率、经济发展水平等因素。可用公式表示为：\nM＝f（C、S、A、U、E、a）\nM 最低工资标准；\nC 城镇居民人均生活费用；\nS 职工个人缴纳社会保险费、住房公积金；\nA 职工平均工资；\nU 失业率；\nE 经济发展水平；\na 调整因素。\n二、确定最低工资标准的通用方法\n______.比重法 即根据城镇居民家计调查资料，确定一定比例的最低人均收入户为贫困户，统计出贫困户的人均生活费用支出水平，乘以每一就业者的赡养系数，再加上一个调整数。\n______.恩格尔系数法 即根据国家营养学会提供的年度标准食物谱及标准食物摄取量，结合标准食物的市场价格，计算出最低食物支出标准，除以恩格尔系数，得出最低生活费用标准，再乘以每一就业者的赡养系数，再加上一个调整数。\n以上方法计算出月最低工资标准后，再考虑职工个人缴纳社会保险费、住房公积金、职工平均工资水平、社会救济金和失业保险金标准、就业状况、经济发展水平等进行必要的修正。\n举例：某地区最低收入组人均每月生活费支出为______元，每一就业者赡养系数为1.______，最低食物费用为______元，恩格尔系数为0.______，平均工资为______元。\n______.按比重法计算得出该地区月最低工资标准为：\n月最低工资标准=______×______.______+a=______+a（元）（______）\n______.按恩格尔系数法计算得出该地区月最低工资标准为：\n月最低工资标准＝______÷______.______×______.______＋a＝______＋a（元）（______）\n公式（______）与（______）中a的调整因素主要考虑当地个人缴纳养老、失业、医疗保险费和住房公积金等费用。\n另，按照国际上一般月最低工资标准相当于月平均工资的40—______%，则该地区月最低工资标准范围应在______元—______元之间。\n小时最低工资标准=〔（月最低工资标准÷______.______÷______）×（______+单位应当缴纳的基本养老保险费、基本医疗保险费比例之和）〕 ×（______+浮动系数）\n浮动系数的确定主要考虑非全日制就业劳动者工作稳定性、劳动条件和劳动强度、福利等方面与全日制就业人员之间的差异。\n各地可参照以上测算办法，根据当地实际情况合理确定最低工资标准。"
    },
    {
      "id": 16,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 1,
      "text": "为维护劳动者通过劳动获得劳动报酬的权利，规范用人单位的工资支付行为，根据《中华人民共和国劳动法》有关规定，制定本规定。",
      "blankText": "为维护劳动者通过劳动获得劳动报酬的权利，规范用人单位的工资支付行为，根据《中华人民共和国劳动法》有关规定，制定本规定。"
    },
    {
      "id": 17,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 2,
      "text": "本规定适用于在中华人民共和国境内的企业、个体经济组织（以下统称用人单位）和与之形成劳动关系的劳动者。\n国家机关、事业组织、社会团体和与之建立劳动合同关系的劳动者，依照本规定执行。",
      "blankText": "本规定适用于在中华人民共和国境内的企业、个体经济组织（以下统称用人单位）和与之形成劳动关系的劳动者。\n国家机关、事业组织、社会团体和与之建立劳动合同关系的劳动者，依照本规定执行。"
    },
    {
      "id": 18,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 3,
      "text": "本规定所称工资是指用人单位依据劳动合同的规定，以各种形式支付给劳动者的工资报酬。",
      "blankText": "本规定所称工资是指用人单位依据劳动合同的规定，以各种形式支付给劳动者的工资报酬。"
    },
    {
      "id": 19,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 4,
      "text": "工资支付主要包括：工资支付项目、工资支付水平、工资支付形式、工资支付对象、工资支付时间以及特殊情况下的工资支付。",
      "blankText": "工资支付主要包括：工资支付项目、工资支付水平、工资支付形式、工资支付对象、工资支付时间以及特殊情况下的工资支付。"
    },
    {
      "id": 20,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 5,
      "text": "工资应当以法定货币支付。不得以实物及有价证券替代货币支付。",
      "blankText": "工资应当以法定货币支付。不得以实物及有价证券替代货币支付。"
    },
    {
      "id": 21,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 6,
      "text": "用人单位应将工资支付给劳动者本人。劳动者本人因故不能领取工资时，可由其亲属或委托他人代领。\n用人单位可委托银行代发工资。\n用人单位必须书面记录支付劳动者工资的数额、时间、领取者的姓名以及签字，并保存两年以上备查。用人单位在支付工资时应向劳动者提供一份其个人的工资清单。",
      "blankText": "用人单位应将工资支付给劳动者本人。劳动者本人因故不能领取工资时，可由其亲属或委托他人代领。\n用人单位可委托银行代发工资。\n用人单位必须书面记录支付劳动者工资的数额、时间、领取者的姓名以及签字，并保存两年以上备查。用人单位在支付工资时应向劳动者提供一份其个人的工资清单。"
    },
    {
      "id": 22,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 7,
      "text": "工资必须在用人单位与劳动者约定的日期支付。如遇节假日或休息日，则应提前在最近的工作日支付。工资至少每月支付一次，实行周、日、小时工资制的可按周、日、小时支付工资。",
      "blankText": "工资必须在用人单位与劳动者约定的日期支付。如遇节假日或休息日，则应提前在最近的工作日支付。工资至少每月支付一次，实行周、日、小时工资制的可按周、日、小时支付工资。"
    },
    {
      "id": 23,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 8,
      "text": "对完成一次性临时劳动或某项具体工作的劳动者，用人单位应按有关协议或合同规定在其完成劳动任务后即支付工资。",
      "blankText": "对完成一次性临时劳动或某项具体工作的劳动者，用人单位应按有关协议或合同规定在其完成劳动任务后即支付工资。"
    },
    {
      "id": 24,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 9,
      "text": "劳动关系双方依法解除或终止劳动合同时，用人单位应在解除或终止劳动合同时一次付清劳动者工资。",
      "blankText": "劳动关系双方依法解除或终止劳动合同时，用人单位应在解除或终止劳动合同时一次付清劳动者工资。"
    },
    {
      "id": 25,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 10,
      "text": "劳动者在法定工作时间内依法参加社会活动期间，用人单位应视同其提供了正常劳动而支付工资。社会活动包括：依法行使选举权或被选举权；当选代表出席乡（镇）、区以上政府、党派、工会、青年团、妇女联合会等组织召开的会议；出任人民法庭证明人；出席劳动模范、先进工作者大会；《工会法》规定的不脱产工会基层委员会委员因工会活动占用的生产或工作时间；其它依法参加的社会活动。",
      "blankText": "劳动者在法定工作时间内依法参加社会活动期间，用人单位应视同其提供了正常劳动而支付工资。社会活动包括：依法行使选举权或被选举权；当选代表出席乡（镇）、区以上政府、党派、工会、青年团、妇女联合会等组织召开的会议；出任人民法庭证明人；出席劳动模范、先进工作者大会；《工会法》规定的不脱产工会基层委员会委员因工会活动占用的生产或工作时间；其它依法参加的社会活动。"
    },
    {
      "id": 26,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 11,
      "text": "劳动者依法享受年休假、探亲假、婚假、丧假期间，用人单位应按劳动合同规定的标准支付劳动者工资。",
      "blankText": "劳动者依法享受年休假、探亲假、婚假、丧假期间，用人单位应按劳动合同规定的标准支付劳动者工资。"
    },
    {
      "id": 27,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 12,
      "text": "非因劳动者原因造成单位停工、停产在一个工资支付周期内的，用人单位应按劳动合同规定的标准支付劳动者工资。超过一个工资支付周期的，若劳动者提供了正常劳动，则支付给劳动者的劳动报酬不得低于当地的最低工资标准；若劳动者没有提供正常劳动，应按国家有关规定办理。",
      "blankText": "非因劳动者原因造成单位停工、停产在一个工资支付周期内的，用人单位应按劳动合同规定的标准支付劳动者工资。超过一个工资支付周期的，若劳动者提供了正常劳动，则支付给劳动者的劳动报酬不得低于当地的最低工资标准；若劳动者没有提供正常劳动，应按国家有关规定办理。"
    },
    {
      "id": 28,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 13,
      "text": "用人单位在劳动者完成劳动定额或规定的工作任务后，根据实际需要安排劳动者在法定标准工作时间以外工作的，应按以下标准支付工资：\n（一）用人单位依法安排劳动者在日法定标准工作时间以外延长工作时间的，按照不低于劳动合同规定的劳动者本人小时工资标准的150%支付劳动者工资；\n（二）用人单位依法安排劳动者在休息日工作，而又不能安排补休的，按照不低于劳动合同规定的劳动者本人日或小时工资标准的200%支付劳动者工资；\n（三）用人单位依法安排劳动者在法定休假节日工作的，按照不低于劳动合同规定的劳动者本人日或小时工资标准的300%支付劳动者工资。\n实行计件工资的劳动者，在完成计件定额任务后，由用人单位安排延长工作时间的，应根据上述规定的原则，分别按照不低于其本人法定工作时间计件单价的150%、200%、300%支付其工资。\n经劳动行政部门批准实行综合计算工时工作制的，其综合计算工作时间超过法定标准工作时间的部分，应视为延长工作时间，并应按本规定支付劳动者延长工作时间的工资。\n实行不定时工时制度的劳动者，不执行上述规定。",
      "blankText": "用人单位在劳动者完成劳动定额或规定的工作任务后，根据实际需要安排劳动者在法定标准工作时间以外工作的，应按以下标准支付工资：\n（一）用人单位依法安排劳动者在日法定标准工作时间以外延长工作时间的，按照不低于劳动合同规定的劳动者本人小时工资标准的______%支付劳动者工资；\n（二）用人单位依法安排劳动者在休息日工作，而又不能安排补休的，按照不低于劳动合同规定的劳动者本人日或小时工资标准的______%支付劳动者工资；\n（三）用人单位依法安排劳动者在法定休假节日工作的，按照不低于劳动合同规定的劳动者本人日或小时工资标准的______%支付劳动者工资。\n实行计件工资的劳动者，在完成计件定额任务后，由用人单位安排延长工作时间的，应根据上述规定的原则，分别按照不低于其本人法定工作时间计件单价的______%、______%、______%支付其工资。\n经劳动行政部门批准实行综合计算工时工作制的，其综合计算工作时间超过法定标准工作时间的部分，应视为延长工作时间，并应按本规定支付劳动者延长工作时间的工资。\n实行不定时工时制度的劳动者，不执行上述规定。"
    },
    {
      "id": 29,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 14,
      "text": "用人单位依法破产时，劳动者有权获得其工资。在破产清偿中用人单位应按《中华人民共和国企业破产法》规定的清偿顺序，首先支付欠付本单位劳动者的工资。",
      "blankText": "用人单位依法破产时，劳动者有权获得其工资。在破产清偿中用人单位应按《中华人民共和国企业破产法》规定的清偿顺序，首先支付欠付本单位劳动者的工资。"
    },
    {
      "id": 30,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 15,
      "text": "用人单位不得克扣劳动者工资。有下列情况之一的，用人单位可以代扣劳动者工资：\n（一）用人单位代扣代缴的个人所得税；\n（二）用人单位代扣代缴的应由劳动者个人负担的各项社会保险费用；\n（三）法院判决、裁定中要求代扣的抚养费、赡养费；\n（四）法律、法规规定可以从劳动者工资中扣除的其他费用。",
      "blankText": "用人单位不得克扣劳动者工资。有下列情况之一的，用人单位可以代扣劳动者工资：\n（一）用人单位代扣代缴的个人所得税；\n（二）用人单位代扣代缴的应由劳动者个人负担的各项社会保险费用；\n（三）法院判决、裁定中要求代扣的抚养费、赡养费；\n（四）法律、法规规定可以从劳动者工资中扣除的其他费用。"
    },
    {
      "id": 31,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 16,
      "text": "因劳动者本人原因给用人单位造成经济损失的，用人单位可按照劳动合同的约定要求其赔偿经济损失。经济损失的赔偿，可从劳动者本人的工资中扣除。但每月扣除的部分不得超过劳动者当月工资的20%。若扣除后的剩余工资部分低于当地月最低工资标准，则按最低工资标准支付。",
      "blankText": "因劳动者本人原因给用人单位造成经济损失的，用人单位可按照劳动合同的约定要求其赔偿经济损失。经济损失的赔偿，可从劳动者本人的工资中扣除。但每月扣除的部分不得超过劳动者当月工资的______%。若扣除后的剩余工资部分低于当地月最低工资标准，则按最低工资标准支付。"
    },
    {
      "id": 32,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 17,
      "text": "用人单位应根据本规定，通过与职工大会、职工代表大会或者其他形式协商制定内部的工资支付制度，并告知本单位全体劳动者，同时抄报当地劳动行政部门备案。",
      "blankText": "用人单位应根据本规定，通过与职工大会、职工代表大会或者其他形式协商制定内部的工资支付制度，并告知本单位全体劳动者，同时抄报当地劳动行政部门备案。"
    },
    {
      "id": 33,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 18,
      "text": "各级劳动行政部门有权监察用人单位工资支付的情况。用人单位有下列侵害劳动者合法权益行为的，由劳动行政部门责令其支付劳动者工资和经济补偿，并可责令其支付赔偿金：\n（一）克扣或者无故拖欠劳动者工资的；\n（二）拒不支付劳动者延长工作时间工资的；\n（三）低于当地最低工资标准支付劳动者工资的。\n经济补偿和赔偿金的标准，按国家有关规定执行。",
      "blankText": "各级劳动行政部门有权监察用人单位工资支付的情况。用人单位有下列侵害劳动者合法权益行为的，由劳动行政部门责令其支付劳动者工资和经济补偿，并可责令其支付赔偿金：\n（一）克扣或者无故拖欠劳动者工资的；\n（二）拒不支付劳动者延长工作时间工资的；\n（三）低于当地最低工资标准支付劳动者工资的。\n经济补偿和赔偿金的标准，按国家有关规定执行。"
    },
    {
      "id": 34,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 19,
      "text": "劳动者与用人单位因工资支付发生劳动争议的，当事人可依法向劳动争议仲裁机关申请仲裁。对仲裁裁决不服的，可以向人民法院提起诉讼。",
      "blankText": "劳动者与用人单位因工资支付发生劳动争议的，当事人可依法向劳动争议仲裁机关申请仲裁。对仲裁裁决不服的，可以向人民法院提起诉讼。"
    },
    {
      "id": 35,
      "category": "劳动基准",
      "law": "工资支付暂行规定",
      "articleNum": 20,
      "text": "本规定自1995年1月1日起施行。",
      "blankText": "本规定自______年______月______日起施行。"
    },
    {
      "id": 36,
      "category": "劳动基准",
      "law": "职工工作时间规定",
      "articleNum": 1,
      "text": "为了合理安排职工的工作和休息时间，维护职工的休息权利，调动职工的积极性，促进社会主义现代化建设事业的发展，根据宪法有关规定，制定本规定。",
      "blankText": "为了合理安排职工的工作和休息时间，维护职工的休息权利，调动职工的积极性，促进社会主义现代化建设事业的发展，根据宪法有关规定，制定本规定。"
    },
    {
      "id": 37,
      "category": "劳动基准",
      "law": "职工工作时间规定",
      "articleNum": 2,
      "text": "本规定适用于在中华人民共和国境内的国家机关、社会团体、企业事业单位以及其他组织的职工。",
      "blankText": "本规定适用于在中华人民共和国境内的国家机关、社会团体、企业事业单位以及其他组织的职工。"
    },
    {
      "id": 38,
      "category": "劳动基准",
      "law": "职工工作时间规定",
      "articleNum": 3,
      "text": "职工每日工作8小时、每周工作40小时。",
      "blankText": "职工每日工作______小时、每周工作______小时。"
    },
    {
      "id": 39,
      "category": "劳动基准",
      "law": "职工工作时间规定",
      "articleNum": 4,
      "text": "在特殊条件下从事劳动和有特殊情况，需要适当缩短工作时间的，按照国家有关规定执行。",
      "blankText": "在特殊条件下从事劳动和有特殊情况，需要适当缩短工作时间的，按照国家有关规定执行。"
    },
    {
      "id": 40,
      "category": "劳动基准",
      "law": "职工工作时间规定",
      "articleNum": 5,
      "text": "因工作性质或者生产特点的限制，不能实行每日工作8小时、每周工作40小时标准工时制度的，按照国家有关规定，可以实行其他工作和休息办法。",
      "blankText": "因工作性质或者生产特点的限制，不能实行每日工作______小时、每周工作______小时标准工时制度的，按照国家有关规定，可以实行其他工作和休息办法。"
    },
    {
      "id": 41,
      "category": "劳动基准",
      "law": "职工工作时间规定",
      "articleNum": 6,
      "text": "任何单位和个人不得擅自延长职工工作时间。因特殊情况和紧急任务确需延长工作时间的，按照国家有关规定执行。",
      "blankText": "任何单位和个人不得擅自延长职工工作时间。因特殊情况和紧急任务确需延长工作时间的，按照国家有关规定执行。"
    },
    {
      "id": 42,
      "category": "劳动基准",
      "law": "职工工作时间规定",
      "articleNum": 7,
      "text": "国家机关、事业单位实行统一的工作时间，星期六和星期日为周休息日。\n企业和不能实行前款规定的统一工作时间的事业单位，可以根据实际情况灵活安排周休息日。",
      "blankText": "国家机关、事业单位实行统一的工作时间，星期六和星期日为周休息日。\n企业和不能实行前款规定的统一工作时间的事业单位，可以根据实际情况灵活安排周休息日。"
    },
    {
      "id": 43,
      "category": "劳动基准",
      "law": "职工工作时间规定",
      "articleNum": 8,
      "text": "本规定由劳动部、人事部负责解释；实施办法由劳动部、人事部制定。",
      "blankText": "本规定由劳动部、人事部负责解释；实施办法由劳动部、人事部制定。"
    },
    {
      "id": 44,
      "category": "劳动基准",
      "law": "职工工作时间规定",
      "articleNum": 9,
      "text": "本规定自1995年5月1日起施行。1995年5月1日施行有困难的企业、事业单位，可以适当延期；但是，事业单位最迟应当自1996年1月1日起施行，企业最迟应当自1997年5月1日起施行。",
      "blankText": "本规定自______年______月______日起施行。______年______月______日施行有困难的企业、事业单位，可以适当延期；但是，事业单位最迟应当自______年______月______日起施行，企业最迟应当自______年______月______日起施行。"
    },
    {
      "id": 45,
      "category": "劳动基准",
      "law": "带薪年休假条例",
      "articleNum": 1,
      "text": "为了维护职工休息休假权利，调动职工工作积极性，根据劳动法和公务员法，制定本条例。",
      "blankText": "为了维护职工休息休假权利，调动职工工作积极性，根据劳动法和公务员法，制定本条例。"
    },
    {
      "id": 46,
      "category": "劳动基准",
      "law": "带薪年休假条例",
      "articleNum": 2,
      "text": "机关、团体、企业、事业单位、民办非企业单位、有雇工的个体工商户等单位的职工连续工作1年以上的，享受带薪年休假（以下简称年休假）。单位应当保证职工享受年休假。职工在年休假期间享受与正常工作期间相同的工资收入。",
      "blankText": "机关、团体、企业、事业单位、民办非企业单位、有雇工的个体工商户等单位的职工连续工作______年以上的，享受带薪年休假（以下简称年休假）。单位应当保证职工享受年休假。职工在年休假期间享受与正常工作期间相同的工资收入。"
    },
    {
      "id": 47,
      "category": "劳动基准",
      "law": "带薪年休假条例",
      "articleNum": 3,
      "text": "职工累计工作已满1年不满10年的，年休假5天；已满10年不满20年的，年休假10天；已满20年的，年休假15天。\n国家法定休假日、休息日不计入年休假的假期。",
      "blankText": "职工累计工作已满______年不满______年的，年休假______天；已满______年不满______年的，年休假______天；已满______年的，年休假______天。\n国家法定休假日、休息日不计入年休假的假期。"
    },
    {
      "id": 48,
      "category": "劳动基准",
      "law": "带薪年休假条例",
      "articleNum": 4,
      "text": "职工有下列情形之一的，不享受当年的年休假：\n（一）职工依法享受寒暑假，其休假天数多于年休假天数的；\n（二）职工请事假累计20天以上且单位按照规定不扣工资的；\n（三）累计工作满1年不满10年的职工，请病假累计2个月以上的；\n（四）累计工作满10年不满20年的职工，请病假累计3个月以上的；\n（五）累计工作满20年以上的职工，请病假累计4个月以上的。",
      "blankText": "职工有下列情形之一的，不享受当年的年休假：\n（一）职工依法享受寒暑假，其休假天数多于年休假天数的；\n（二）职工请事假累计______天以上且单位按照规定不扣工资的；\n（三）累计工作满______年不满______年的职工，请病假累计______个月以上的；\n（四）累计工作满______年不满______年的职工，请病假累计______个月以上的；\n（五）累计工作满______年以上的职工，请病假累计______个月以上的。"
    },
    {
      "id": 49,
      "category": "劳动基准",
      "law": "带薪年休假条例",
      "articleNum": 5,
      "text": "单位根据生产、工作的具体情况，并考虑职工本人意愿，统筹安排职工年休假。\n年休假在1个年度内可以集中安排，也可以分段安排，一般不跨年度安排。单位因生产、工作特点确有必要跨年度安排职工年休假的，可以跨1个年度安排。\n单位确因工作需要不能安排职工休年休假的，经职工本人同意，可以不安排职工休年休假。对职工应休未休的年休假天数，单位应当按照该职工日工资收入的300%支付年休假工资报酬。",
      "blankText": "单位根据生产、工作的具体情况，并考虑职工本人意愿，统筹安排职工年休假。\n年休假在1个年度内可以集中安排，也可以分段安排，一般不跨年度安排。单位因生产、工作特点确有必要跨年度安排职工年休假的，可以跨1个年度安排。\n单位确因工作需要不能安排职工休年休假的，经职工本人同意，可以不安排职工休年休假。对职工应休未休的年休假天数，单位应当按照该职工日工资收入的______%支付年休假工资报酬。"
    },
    {
      "id": 50,
      "category": "劳动基准",
      "law": "带薪年休假条例",
      "articleNum": 6,
      "text": "县级以上地方人民政府人事部门、劳动保障部门应当依据职权对单位执行本条例的情况主动进行监督检查。\n工会组织依法维护职工的年休假权利。",
      "blankText": "县级以上地方人民政府人事部门、劳动保障部门应当依据职权对单位执行本条例的情况主动进行监督检查。\n工会组织依法维护职工的年休假权利。"
    },
    {
      "id": 51,
      "category": "劳动基准",
      "law": "带薪年休假条例",
      "articleNum": 7,
      "text": "单位不安排职工休年休假又不依照本条例规定给予年休假工资报酬的，由县级以上地方人民政府人事部门或者劳动保障部门依据职权责令限期改正；对逾期不改正的，除责令该单位支付年休假工资报酬外，单位还应当按照年休假工资报酬的数额向职工加付赔偿金；对拒不支付年休假工资报酬、赔偿金的，属于公务员和参照公务员法管理的人员所在单位的，对直接负责的主管人员以及其他直接责任人员依法给予处分；属于其他单位的，由劳动保障部门、人事部门或者职工申请人民法院强制执行。",
      "blankText": "单位不安排职工休年休假又不依照本条例规定给予年休假工资报酬的，由县级以上地方人民政府人事部门或者劳动保障部门依据职权责令限期改正；对逾期不改正的，除责令该单位支付年休假工资报酬外，单位还应当按照年休假工资报酬的数额向职工加付赔偿金；对拒不支付年休假工资报酬、赔偿金的，属于公务员和参照公务员法管理的人员所在单位的，对直接负责的主管人员以及其他直接责任人员依法给予处分；属于其他单位的，由劳动保障部门、人事部门或者职工申请人民法院强制执行。"
    },
    {
      "id": 52,
      "category": "劳动基准",
      "law": "带薪年休假条例",
      "articleNum": 8,
      "text": "职工与单位因年休假发生的争议，依照国家有关法律、行政法规的规定处理。",
      "blankText": "职工与单位因年休假发生的争议，依照国家有关法律、行政法规的规定处理。"
    },
    {
      "id": 53,
      "category": "劳动基准",
      "law": "带薪年休假条例",
      "articleNum": 9,
      "text": "国务院人事部门、国务院劳动保障部门依据职权，分别制定本条例的实施办法。",
      "blankText": "国务院人事部门、国务院劳动保障部门依据职权，分别制定本条例的实施办法。"
    },
    {
      "id": 54,
      "category": "劳动基准",
      "law": "带薪年休假条例",
      "articleNum": 10,
      "text": "本条例自2008年1月1日起施行。",
      "blankText": "本条例自______年______月______日起施行。"
    },
    {
      "id": 55,
      "category": "劳动基准",
      "law": "放假办法",
      "articleNum": 1,
      "text": "为统一全国年节及纪念日的假期，制定本办法。",
      "blankText": "为统一全国年节及纪念日的假期，制定本办法。"
    },
    {
      "id": 56,
      "category": "劳动基准",
      "law": "放假办法",
      "articleNum": 2,
      "text": "全体公民放假的节日：\n（一）元旦，放假1天（1月1日）；\n（二）春节，放假4天（农历除夕、正月初一至初三）；\n（三）清明节，放假1天（农历清明当日）；\n（四）劳动节，放假2天（5月1日、2日）；\n（五）端午节，放假1天（农历端午当日）；\n（六）中秋节，放假1天（农历中秋当日）；\n（七）国庆节，放假3天（10月1日至3日）。",
      "blankText": "全体公民放假的节日：\n（一）元旦，放假______天（1月______日）；\n（二）春节，放假______天（农历除夕、正月初一至初三）；\n（三）清明节，放假______天（农历清明当日）；\n（四）劳动节，放假______天（5月______日、______日）；\n（五）端午节，放假______天（农历端午当日）；\n（六）中秋节，放假______天（农历中秋当日）；\n（七）国庆节，放假______天（10月______日至______日）。"
    },
    {
      "id": 57,
      "category": "劳动基准",
      "law": "放假办法",
      "articleNum": 3,
      "text": "部分公民放假的节日及纪念日：\n（一）妇女节（3月8日），妇女放假半天；\n（二）青年节（5月4日），14周岁以上的青年放假半天；\n（三）儿童节（6月1日），不满14周岁的少年儿童放假1天；\n（四）中国人民解放军建军纪念日（8月1日），现役军人放假半天。",
      "blankText": "部分公民放假的节日及纪念日：\n（一）妇女节（3月______日），妇女放假半天；\n（二）青年节（5月______日），______周岁以上的青年放假半天；\n（三）儿童节（6月______日），不满______周岁的少年儿童放假______天；\n（四）中国人民解放军建军纪念日（8月______日），现役军人放假半天。"
    },
    {
      "id": 58,
      "category": "劳动基准",
      "law": "放假办法",
      "articleNum": 4,
      "text": "少数民族习惯的节日，由各少数民族聚居地区的地方人民政府，按照各该民族习惯，规定放假日期。",
      "blankText": "少数民族习惯的节日，由各少数民族聚居地区的地方人民政府，按照各该民族习惯，规定放假日期。"
    },
    {
      "id": 59,
      "category": "劳动基准",
      "law": "放假办法",
      "articleNum": 5,
      "text": "二七纪念日、五卅纪念日、七七抗战纪念日、九三抗战胜利纪念日、九一八纪念日、教师节、护士节、记者节、植树节等其他节日、纪念日，均不放假。",
      "blankText": "二七纪念日、五卅纪念日、七七抗战纪念日、九三抗战胜利纪念日、九一八纪念日、教师节、护士节、记者节、植树节等其他节日、纪念日，均不放假。"
    },
    {
      "id": 60,
      "category": "劳动基准",
      "law": "放假办法",
      "articleNum": 6,
      "text": "全体公民放假的假日，如果适逢星期六、星期日，应当在工作日补假。部分公民放假的假日，如果适逢星期六、星期日，则不补假。",
      "blankText": "全体公民放假的假日，如果适逢星期六、星期日，应当在工作日补假。部分公民放假的假日，如果适逢星期六、星期日，则不补假。"
    },
    {
      "id": 61,
      "category": "劳动基准",
      "law": "放假办法",
      "articleNum": 7,
      "text": "本条例自公布之日起施行。",
      "blankText": "本条例自公布之日起施行。"
    },
    {
      "id": 1,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 1,
      "text": "为了减少和解决女职工在劳动中因生理特点造成的特殊困难，保护女职工健康，制定本规定。",
      "blankText": "为了减少和解决女职工在劳动中因生理特点造成的特殊困难，保护女职工健康，制定本规定。"
    },
    {
      "id": 2,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 2,
      "text": "中华人民共和国境内的国家机关、企业、事业单位、社会团体、个体经济组织以及其他社会组织等用人单位及其女职工，适用本规定。",
      "blankText": "中华人民共和国境内的国家机关、企业、事业单位、社会团体、个体经济组织以及其他社会组织等用人单位及其女职工，适用本规定。"
    },
    {
      "id": 3,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 3,
      "text": "用人单位应当加强女职工劳动保护，采取措施改善女职工劳动安全卫生条件，对女职工进行劳动安全卫生知识培训。",
      "blankText": "用人单位应当加强女职工劳动保护，采取措施改善女职工劳动安全卫生条件，对女职工进行劳动安全卫生知识培训。"
    },
    {
      "id": 4,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 4,
      "text": "用人单位应当遵守女职工禁忌从事的劳动范围的规定。用人单位应当将本单位属于女职工禁忌从事的劳动范围的岗位书面告知女职工。\n女职工禁忌从事的劳动范围由本规定附录列示。国务院安全生产监督管理部门会同国务院人力资源社会保障行政部门、国务院卫生行政部门根据经济社会发展情况，对女职工禁忌从事的劳动范围进行调整。",
      "blankText": "用人单位应当遵守女职工禁忌从事的劳动范围的规定。用人单位应当将本单位属于女职工禁忌从事的劳动范围的岗位书面告知女职工。\n女职工禁忌从事的劳动范围由本规定附录列示。国务院安全生产监督管理部门会同国务院人力资源社会保障行政部门、国务院卫生行政部门根据经济社会发展情况，对女职工禁忌从事的劳动范围进行调整。"
    },
    {
      "id": 5,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 5,
      "text": "用人单位不得因女职工怀孕、生育、哺乳降低其工资、予以辞退、与其解除劳动或者聘用合同。",
      "blankText": "用人单位不得因女职工怀孕、生育、哺乳降低其工资、予以辞退、与其解除劳动或者聘用合同。"
    },
    {
      "id": 6,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 6,
      "text": "女职工在孕期不能适应原劳动的，用人单位应当根据医疗机构的证明，予以减轻劳动量或者安排其他能够适应的劳动。\n对怀孕7个月以上的女职工，用人单位不得延长其劳动时间或者安排其夜班劳动，并应当在劳动时间内安排一定的休息时间。\n怀孕的女职工在劳动时间内进行产前检查，所需时间计入劳动时间。",
      "blankText": "女职工在孕期不能适应原劳动的，用人单位应当根据医疗机构的证明，予以减轻劳动量或者安排其他能够适应的劳动。\n对怀孕______个月以上的女职工，用人单位不得延长其劳动时间或者安排其夜班劳动，并应当在劳动时间内安排一定的休息时间。\n怀孕的女职工在劳动时间内进行产前检查，所需时间计入劳动时间。"
    },
    {
      "id": 7,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 7,
      "text": "女职工生育享受98天产假，其中产前可以休假15天；难产的，增加产假15天；生育多胞胎的，每多生育1个婴儿，增加产假15天。\n女职工怀孕未满4个月流产的，享受15天产假；怀孕满4个月流产的，享受42天产假。",
      "blankText": "女职工生育享受______天产假，其中产前可以休假______天；难产的，增加产假______天；生育多胞胎的，每多生育1个婴儿，增加产假______天。\n女职工怀孕未满______个月流产的，享受______天产假；怀孕满______个月流产的，享受______天产假。"
    },
    {
      "id": 8,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 8,
      "text": "女职工产假期间的生育津贴，对已经参加生育保险的，按照用人单位上年度职工月平均工资的标准由生育保险基金支付；对未参加生育保险的，按照女职工产假前工资的标准由用人单位支付。\n女职工生育或者流产的医疗费用，按照生育保险规定的项目和标准，对已经参加生育保险的，由生育保险基金支付；对未参加生育保险的，由用人单位支付。",
      "blankText": "女职工产假期间的生育津贴，对已经参加生育保险的，按照用人单位上年度职工月平均工资的标准由生育保险基金支付；对未参加生育保险的，按照女职工产假前工资的标准由用人单位支付。\n女职工生育或者流产的医疗费用，按照生育保险规定的项目和标准，对已经参加生育保险的，由生育保险基金支付；对未参加生育保险的，由用人单位支付。"
    },
    {
      "id": 9,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 9,
      "text": "对哺乳未满1周岁婴儿的女职工，用人单位不得延长其劳动时间或者安排其夜班劳动。\n用人单位应当在每天的劳动时间内为哺乳期女职工安排1小时哺乳时间；女职工生育多胞胎的，每多哺乳1个婴儿每天增加1小时哺乳时间。",
      "blankText": "对哺乳未满______周岁婴儿的女职工，用人单位不得延长其劳动时间或者安排其夜班劳动。\n用人单位应当在每天的劳动时间内为哺乳期女职工安排______小时哺乳时间；女职工生育多胞胎的，每多哺乳1个婴儿每天增加______小时哺乳时间。"
    },
    {
      "id": 10,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 10,
      "text": "女职工比较多的用人单位应当根据女职工的需要，建立女职工卫生室、孕妇休息室、哺乳室等设施，妥善解决女职工在生理卫生、哺乳方面的困难。",
      "blankText": "女职工比较多的用人单位应当根据女职工的需要，建立女职工卫生室、孕妇休息室、哺乳室等设施，妥善解决女职工在生理卫生、哺乳方面的困难。"
    },
    {
      "id": 11,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 11,
      "text": "在劳动场所，用人单位应当预防和制止对女职工的性骚扰。",
      "blankText": "在劳动场所，用人单位应当预防和制止对女职工的性骚扰。"
    },
    {
      "id": 12,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 12,
      "text": "县级以上人民政府人力资源社会保障行政部门、安全生产监督管理部门按照各自职责负责对用人单位遵守本规定的情况进行监督检查。\n工会、妇女组织依法对用人单位遵守本规定的情况进行监督。",
      "blankText": "县级以上人民政府人力资源社会保障行政部门、安全生产监督管理部门按照各自职责负责对用人单位遵守本规定的情况进行监督检查。\n工会、妇女组织依法对用人单位遵守本规定的情况进行监督。"
    },
    {
      "id": 13,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 13,
      "text": "用人单位违反本规定第六条第二款、第七条、第九条第一款规定的，由县级以上人民政府人力资源社会保障行政部门责令限期改正，按照受侵害女职工每人1000元以上5000元以下的标准计算，处以罚款。\n用人单位违反本规定附录第一条、第二条规定的，由县级以上人民政府安全生产监督管理部门责令限期改正，按照受侵害女职工每人1000元以上5000元以下的标准计算，处以罚款。用人单位违反本规定附录第三条、第四条规定的，由县级以上人民政府安全生产监督管理部门责令限期治理，处5万元以上30万元以下的罚款；情节严重的，责令停止有关作业，或者提请有关人民政府按照国务院规定的权限责令关闭。",
      "blankText": "用人单位违反本规定第六条第二款、第七条、第九条第一款规定的，由县级以上人民政府人力资源社会保障行政部门责令限期改正，按照受侵害女职工每人______元以上______元以下的标准计算，处以罚款。\n用人单位违反本规定附录第一条、第二条规定的，由县级以上人民政府安全生产监督管理部门责令限期改正，按照受侵害女职工每人______元以上______元以下的标准计算，处以罚款。用人单位违反本规定附录第三条、第四条规定的，由县级以上人民政府安全生产监督管理部门责令限期治理，处______万元以上______万元以下的罚款；情节严重的，责令停止有关作业，或者提请有关人民政府按照国务院规定的权限责令关闭。"
    },
    {
      "id": 14,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 14,
      "text": "用人单位违反本规定，侵害女职工合法权益的，女职工可以依法投诉、举报、申诉，依法向劳动人事争议调解仲裁机构申请调解仲裁，对仲裁裁决不服的，依法向人民法院提起诉讼。",
      "blankText": "用人单位违反本规定，侵害女职工合法权益的，女职工可以依法投诉、举报、申诉，依法向劳动人事争议调解仲裁机构申请调解仲裁，对仲裁裁决不服的，依法向人民法院提起诉讼。"
    },
    {
      "id": 15,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 15,
      "text": "用人单位违反本规定，侵害女职工合法权益，造成女职工损害的，依法给予赔偿；用人单位及其直接负责的主管人员和其他直接责任人员构成犯罪的，依法追究刑事责任。",
      "blankText": "用人单位违反本规定，侵害女职工合法权益，造成女职工损害的，依法给予赔偿；用人单位及其直接负责的主管人员和其他直接责任人员构成犯罪的，依法追究刑事责任。"
    },
    {
      "id": 16,
      "category": "特殊保护",
      "law": "女职工劳动保护特别规定",
      "articleNum": 16,
      "text": "本规定自公布之日起施行。1988年7月21日国务院发布的《女职工劳动保护规定》同时废止。",
      "blankText": "本规定自公布之日起施行。______年______月______日国务院发布的《女职工劳动保护规定》同时废止。"
    },
    {
      "id": 17,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 1,
      "text": "为保护未成年人的身心健康，促进义务教育制度的实施，维护未成年人的合法权益，根据宪法和劳动法、未成年人保护法，制定本规定。",
      "blankText": "为保护未成年人的身心健康，促进义务教育制度的实施，维护未成年人的合法权益，根据宪法和劳动法、未成年人保护法，制定本规定。"
    },
    {
      "id": 18,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 2,
      "text": "国家机关、社会团体、企业事业单位、民办非企业单位或者个体工商户（以下统称用人单位）均不得招用不满16周岁的未成年人（招用不满16周岁的未成年人，以下统称使用童工）。\n禁止任何单位或者个人为不满16周岁的未成年人介绍就业。\n禁止不满16周岁的未成年人开业从事个体经营活动。",
      "blankText": "国家机关、社会团体、企业事业单位、民办非企业单位或者个体工商户（以下统称用人单位）均不得招用不满______周岁的未成年人（招用不满______周岁的未成年人，以下统称使用童工）。\n禁止任何单位或者个人为不满______周岁的未成年人介绍就业。\n禁止不满______周岁的未成年人开业从事个体经营活动。"
    },
    {
      "id": 19,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 3,
      "text": "不满16周岁的未成年人的父母或者其他监护人应当保护其身心健康，保障其接受义务教育的权利，不得允许其被用人单位非法招用。\n不满16周岁的未成年人的父母或者其他监护人允许其被用人单位非法招用的，所在地的乡（镇）人民政府、城市街道办事处以及村民委员会、居民委员会应当给予批评教育。",
      "blankText": "不满______周岁的未成年人的父母或者其他监护人应当保护其身心健康，保障其接受义务教育的权利，不得允许其被用人单位非法招用。\n不满______周岁的未成年人的父母或者其他监护人允许其被用人单位非法招用的，所在地的乡（镇）人民政府、城市街道办事处以及村民委员会、居民委员会应当给予批评教育。"
    },
    {
      "id": 20,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 4,
      "text": "用人单位招用人员时，必须核查被招用人员的身份证；对不满16周岁的未成年人，一律不得录用。用人单位录用人员的录用登记、核查材料应当妥善保管。",
      "blankText": "用人单位招用人员时，必须核查被招用人员的身份证；对不满______周岁的未成年人，一律不得录用。用人单位录用人员的录用登记、核查材料应当妥善保管。"
    },
    {
      "id": 21,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 5,
      "text": "县级以上各级人民政府劳动保障行政部门负责本规定执行情况的监督检查。\n县级以上各级人民政府公安、工商行政管理、教育、卫生等行政部门在各自职责范围内对本规定的执行情况进行监督检查，并对劳动保障行政部门的监督检查给予配合。\n工会、共青团、妇联等群众组织应当依法维护未成年人的合法权益。\n任何单位或者个人发现使用童工的，均有权向县级以上人民政府劳动保障行政部门举报。",
      "blankText": "县级以上各级人民政府劳动保障行政部门负责本规定执行情况的监督检查。\n县级以上各级人民政府公安、工商行政管理、教育、卫生等行政部门在各自职责范围内对本规定的执行情况进行监督检查，并对劳动保障行政部门的监督检查给予配合。\n工会、共青团、妇联等群众组织应当依法维护未成年人的合法权益。\n任何单位或者个人发现使用童工的，均有权向县级以上人民政府劳动保障行政部门举报。"
    },
    {
      "id": 22,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 6,
      "text": "用人单位使用童工的，由劳动保障行政部门按照每使用一名童工每月处5000元罚款的标准给予处罚；在使用有毒物品的作业场所使用童工的，按照《使用有毒物品作业场所劳动保护条例》规定的罚款幅度，或者按照每使用一名童工每月处5000元罚款的标准，从重处罚。劳动保障行政部门并应当责令用人单位限期将童工送回原居住地交其父母或者其他监护人，所需交通和食宿费用全部由用人单位承担。\n用人单位经劳动保障行政部门依照前款规定责令限期改正，逾期仍不将童工送交其父母或者其他监护人的，从责令限期改正之日起，由劳动保障行政部门按照每使用一名童工每月处1万元罚款的标准处罚，并由工商行政管理部门吊销其营业执照或者由民政部门撤销民办非企业单位登记；用人单位是国家机关、事业单位的，由有关单位依法对直接负责的主管人员和其他直接责任人员给予降级或者撤职的行政处分或者纪律处分。",
      "blankText": "用人单位使用童工的，由劳动保障行政部门按照每使用一名童工每月处______元罚款的标准给予处罚；在使用有毒物品的作业场所使用童工的，按照《使用有毒物品作业场所劳动保护条例》规定的罚款幅度，或者按照每使用一名童工每月处______元罚款的标准，从重处罚。劳动保障行政部门并应当责令用人单位限期将童工送回原居住地交其父母或者其他监护人，所需交通和食宿费用全部由用人单位承担。\n用人单位经劳动保障行政部门依照前款规定责令限期改正，逾期仍不将童工送交其父母或者其他监护人的，从责令限期改正之日起，由劳动保障行政部门按照每使用一名童工每月处______万元罚款的标准处罚，并由工商行政管理部门吊销其营业执照或者由民政部门撤销民办非企业单位登记；用人单位是国家机关、事业单位的，由有关单位依法对直接负责的主管人员和其他直接责任人员给予降级或者撤职的行政处分或者纪律处分。"
    },
    {
      "id": 23,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 7,
      "text": "单位或者个人为不满16周岁的未成年人介绍就业的，由劳动保障行政部门按照每介绍一人处5000元罚款的标准给予处罚；职业中介机构为不满16周岁的未成年人介绍就业的，并由劳动保障行政部门吊销其职业介绍许可证。",
      "blankText": "单位或者个人为不满______周岁的未成年人介绍就业的，由劳动保障行政部门按照每介绍一人处______元罚款的标准给予处罚；职业中介机构为不满______周岁的未成年人介绍就业的，并由劳动保障行政部门吊销其职业介绍许可证。"
    },
    {
      "id": 24,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 8,
      "text": "用人单位未按照本规定第四条的规定保存录用登记材料，或者伪造录用登记材料的，由劳动保障行政部门处1万元的罚款。",
      "blankText": "用人单位未按照本规定第四条的规定保存录用登记材料，或者伪造录用登记材料的，由劳动保障行政部门处______万元的罚款。"
    },
    {
      "id": 25,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 9,
      "text": "无营业执照、被依法吊销营业执照的单位以及未依法登记、备案的单位使用童工或者介绍童工就业的，依照本规定第六条、第七条、第八条规定的标准加一倍罚款，该非法单位由有关的行政主管部门予以取缔。",
      "blankText": "无营业执照、被依法吊销营业执照的单位以及未依法登记、备案的单位使用童工或者介绍童工就业的，依照本规定第六条、第七条、第八条规定的标准加一倍罚款，该非法单位由有关的行政主管部门予以取缔。"
    },
    {
      "id": 26,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 10,
      "text": "童工患病或者受伤的，用人单位应当负责送到医疗机构治疗，并负担治疗期间的全部医疗和生活费用。\n童工伤残或者死亡的，用人单位由工商行政管理部门吊销营业执照或者由民政部门撤销民办非企业单位登记；用人单位是国家机关、事业单位的，由有关单位依法对直接负责的主管人员和其他直接责任人员给予降级或者撤职的行政处分或者纪律处分；用人单位还应当一次性地对伤残的童工、死亡童工的直系亲属给予赔偿，赔偿金额按照国家工伤保险的有关规定计算。",
      "blankText": "童工患病或者受伤的，用人单位应当负责送到医疗机构治疗，并负担治疗期间的全部医疗和生活费用。\n童工伤残或者死亡的，用人单位由工商行政管理部门吊销营业执照或者由民政部门撤销民办非企业单位登记；用人单位是国家机关、事业单位的，由有关单位依法对直接负责的主管人员和其他直接责任人员给予降级或者撤职的行政处分或者纪律处分；用人单位还应当一次性地对伤残的童工、死亡童工的直系亲属给予赔偿，赔偿金额按照国家工伤保险的有关规定计算。"
    },
    {
      "id": 27,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 11,
      "text": "拐骗童工，强迫童工劳动，使用童工从事高空、井下、放射性、高毒、易燃易爆以及国家规定的第四级体力劳动强度的劳动，使用不满14周岁的童工，或者造成童工死亡或者严重伤残的，依照刑法关于拐卖儿童罪、强迫劳动罪或者其他罪的规定，依法追究刑事责任。",
      "blankText": "拐骗童工，强迫童工劳动，使用童工从事高空、井下、放射性、高毒、易燃易爆以及国家规定的第四级体力劳动强度的劳动，使用不满______周岁的童工，或者造成童工死亡或者严重伤残的，依照刑法关于拐卖儿童罪、强迫劳动罪或者其他罪的规定，依法追究刑事责任。"
    },
    {
      "id": 28,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 12,
      "text": "国家行政机关工作人员有下列行为之一的，依法给予记大过或者降级的行政处分；情节严重的，依法给予撤职或者开除的行政处分；构成犯罪的，依照刑法关于滥用职权罪、玩忽职守罪或者其他罪的规定，依法追究刑事责任：\n（一）劳动保障等有关部门工作人员在禁止使用童工的监督检查工作中发现使用童工的情况，不予制止、纠正、查处的；\n（二）公安机关的人民警察违反规定发放身份证或者在身份证上登录虚假出生年月的；\n（三）工商行政管理部门工作人员发现申请人是不满16周岁的未成年人，仍然为其从事个体经营发放营业执照的。",
      "blankText": "国家行政机关工作人员有下列行为之一的，依法给予记大过或者降级的行政处分；情节严重的，依法给予撤职或者开除的行政处分；构成犯罪的，依照刑法关于滥用职权罪、玩忽职守罪或者其他罪的规定，依法追究刑事责任：\n（一）劳动保障等有关部门工作人员在禁止使用童工的监督检查工作中发现使用童工的情况，不予制止、纠正、查处的；\n（二）公安机关的人民警察违反规定发放身份证或者在身份证上登录虚假出生年月的；\n（三）工商行政管理部门工作人员发现申请人是不满______周岁的未成年人，仍然为其从事个体经营发放营业执照的。"
    },
    {
      "id": 29,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 13,
      "text": "文艺、体育单位经未成年人的父母或者其他监护人同意，可以招用不满16周岁的专业文艺工作者、运动员。用人单位应当保障被招用的不满16周岁的未成年人的身心健康，保障其接受义务教育的权利。文艺、体育单位招用不满16周岁的专业文艺工作者、运动员的办法，由国务院劳动保障行政部门会同国务院文化、体育行政部门制定。\n学校、其他教育机构以及职业培训机构按照国家有关规定组织不满16周岁的未成年人进行不影响其人身安全和身心健康的教育实践劳动、职业技能培训劳动，不属于使用童工。",
      "blankText": "文艺、体育单位经未成年人的父母或者其他监护人同意，可以招用不满______周岁的专业文艺工作者、运动员。用人单位应当保障被招用的不满______周岁的未成年人的身心健康，保障其接受义务教育的权利。文艺、体育单位招用不满______周岁的专业文艺工作者、运动员的办法，由国务院劳动保障行政部门会同国务院文化、体育行政部门制定。\n学校、其他教育机构以及职业培训机构按照国家有关规定组织不满______周岁的未成年人进行不影响其人身安全和身心健康的教育实践劳动、职业技能培训劳动，不属于使用童工。"
    },
    {
      "id": 30,
      "category": "特殊保护",
      "law": "禁止使用童工规定",
      "articleNum": 14,
      "text": "本规定自2002年12月1日起施行。1991年4月15日国务院发布的《禁止使用童工规定》同时废止。",
      "blankText": "本规定自______年______月______日起施行。______年______月______日国务院发布的《禁止使用童工规定》同时废止。"
    },
    {
      "id": 1,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 1,
      "text": "为了促进就业，促进经济发展与扩大就业相协调，促进社会和谐稳定，制定本法。",
      "blankText": "为了促进就业，促进经济发展与扩大就业相协调，促进社会和谐稳定，制定本法。"
    },
    {
      "id": 2,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 2,
      "text": "国家把扩大就业放在经济社会发展的突出位置，实施积极的就业政策，坚持劳动者自主择业、市场调节就业、政府促进就业的方针，多渠道扩大就业。",
      "blankText": "国家把扩大就业放在经济社会发展的突出位置，实施积极的就业政策，坚持劳动者自主择业、市场调节就业、政府促进就业的方针，多渠道扩大就业。"
    },
    {
      "id": 3,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 3,
      "text": "劳动者依法享有平等就业和自主择业的权利。\n劳动者就业，不因民族、种族、性别、宗教信仰等不同而受歧视。",
      "blankText": "劳动者依法享有平等就业和自主择业的权利。\n劳动者就业，不因民族、种族、性别、宗教信仰等不同而受歧视。"
    },
    {
      "id": 4,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 4,
      "text": "县级以上人民政府把扩大就业作为经济和社会发展的重要目标，纳入国民经济和社会发展规划，并制定促进就业的中长期规划和年度工作计划。",
      "blankText": "县级以上人民政府把扩大就业作为经济和社会发展的重要目标，纳入国民经济和社会发展规划，并制定促进就业的中长期规划和年度工作计划。"
    },
    {
      "id": 5,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 5,
      "text": "县级以上人民政府通过发展经济和调整产业结构、规范人力资源市场、完善就业服务、加强职业教育和培训、提供就业援助等措施，创造就业条件，扩大就业。",
      "blankText": "县级以上人民政府通过发展经济和调整产业结构、规范人力资源市场、完善就业服务、加强职业教育和培训、提供就业援助等措施，创造就业条件，扩大就业。"
    },
    {
      "id": 6,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 6,
      "text": "国务院建立全国促进就业工作协调机制，研究就业工作中的重大问题，协调推动全国的促进就业工作。国务院劳动行政部门具体负责全国的促进就业工作。\n省、自治区、直辖市人民政府根据促进就业工作的需要，建立促进就业工作协调机制，协调解决本行政区域就业工作中的重大问题。\n县级以上人民政府有关部门按照各自的职责分工，共同做好促进就业工作。",
      "blankText": "国务院建立全国促进就业工作协调机制，研究就业工作中的重大问题，协调推动全国的促进就业工作。国务院劳动行政部门具体负责全国的促进就业工作。\n省、自治区、直辖市人民政府根据促进就业工作的需要，建立促进就业工作协调机制，协调解决本行政区域就业工作中的重大问题。\n县级以上人民政府有关部门按照各自的职责分工，共同做好促进就业工作。"
    },
    {
      "id": 7,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 7,
      "text": "国家倡导劳动者树立正确的择业观念，提高就业能力和创业能力；鼓励劳动者自主创业、自谋职业。\n各级人民政府和有关部门应当简化程序，提高效率，为劳动者自主创业、自谋职业提供便利。",
      "blankText": "国家倡导劳动者树立正确的择业观念，提高就业能力和创业能力；鼓励劳动者自主创业、自谋职业。\n各级人民政府和有关部门应当简化程序，提高效率，为劳动者自主创业、自谋职业提供便利。"
    },
    {
      "id": 8,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 8,
      "text": "用人单位依法享有自主用人的权利。\n用人单位应当依照本法以及其他法律、法规的规定，保障劳动者的合法权益。",
      "blankText": "用人单位依法享有自主用人的权利。\n用人单位应当依照本法以及其他法律、法规的规定，保障劳动者的合法权益。"
    },
    {
      "id": 9,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 9,
      "text": "工会、共产主义青年团、妇女联合会、残疾人联合会以及其他社会组织，协助人民政府开展促进就业工作，依法维护劳动者的劳动权利。",
      "blankText": "工会、共产主义青年团、妇女联合会、残疾人联合会以及其他社会组织，协助人民政府开展促进就业工作，依法维护劳动者的劳动权利。"
    },
    {
      "id": 10,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 10,
      "text": "各级人民政府和有关部门对在促进就业工作中作出显著成绩的单位和个人，给予表彰和奖励。",
      "blankText": "各级人民政府和有关部门对在促进就业工作中作出显著成绩的单位和个人，给予表彰和奖励。"
    },
    {
      "id": 11,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 11,
      "text": "县级以上人民政府应当把扩大就业作为重要职责，统筹协调产业政策与就业政策。",
      "blankText": "县级以上人民政府应当把扩大就业作为重要职责，统筹协调产业政策与就业政策。"
    },
    {
      "id": 12,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 12,
      "text": "国家鼓励各类企业在法律、法规规定的范围内，通过兴办产业或者拓展经营，增加就业岗位。\n国家鼓励发展劳动密集型产业、服务业，扶持中小企业，多渠道、多方式增加就业岗位。\n国家鼓励、支持、引导非公有制经济发展，扩大就业，增加就业岗位。",
      "blankText": "国家鼓励各类企业在法律、法规规定的范围内，通过兴办产业或者拓展经营，增加就业岗位。\n国家鼓励发展劳动密集型产业、服务业，扶持中小企业，多渠道、多方式增加就业岗位。\n国家鼓励、支持、引导非公有制经济发展，扩大就业，增加就业岗位。"
    },
    {
      "id": 13,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 13,
      "text": "国家发展国内外贸易和国际经济合作，拓宽就业渠道。",
      "blankText": "国家发展国内外贸易和国际经济合作，拓宽就业渠道。"
    },
    {
      "id": 14,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 14,
      "text": "县级以上人民政府在安排政府投资和确定重大建设项目时，应当发挥投资和重大建设项目带动就业的作用，增加就业岗位。",
      "blankText": "县级以上人民政府在安排政府投资和确定重大建设项目时，应当发挥投资和重大建设项目带动就业的作用，增加就业岗位。"
    },
    {
      "id": 15,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 15,
      "text": "国家实行有利于促进就业的财政政策，加大资金投入，改善就业环境，扩大就业。\n县级以上人民政府应当根据就业状况和就业工作目标，在财政预算中安排就业专项资金用于促进就业工作。\n就业专项资金用于职业介绍、职业培训、公益性岗位、职业技能鉴定、特定就业政策和社会保险等的补贴，小额贷款担保基金和微利项目的小额担保贷款贴息，以及扶持公共就业服务等。就业专项资金的使用管理办法由国务院财政部门和劳动行政部门规定。",
      "blankText": "国家实行有利于促进就业的财政政策，加大资金投入，改善就业环境，扩大就业。\n县级以上人民政府应当根据就业状况和就业工作目标，在财政预算中安排就业专项资金用于促进就业工作。\n就业专项资金用于职业介绍、职业培训、公益性岗位、职业技能鉴定、特定就业政策和社会保险等的补贴，小额贷款担保基金和微利项目的小额担保贷款贴息，以及扶持公共就业服务等。就业专项资金的使用管理办法由国务院财政部门和劳动行政部门规定。"
    },
    {
      "id": 16,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 16,
      "text": "国家建立健全失业保险制度，依法确保失业人员的基本生活，并促进其实现就业。",
      "blankText": "国家建立健全失业保险制度，依法确保失业人员的基本生活，并促进其实现就业。"
    },
    {
      "id": 17,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 17,
      "text": "国家鼓励企业增加就业岗位，扶持失业人员和残疾人就业，对下列企业、人员依法给予税收优惠：\n（一）吸纳符合国家规定条件的失业人员达到规定要求的企业；\n（二）失业人员创办的中小企业；\n（三）安置残疾人员达到规定比例或者集中使用残疾人的企业；\n（四）从事个体经营的符合国家规定条件的失业人员；\n（五）从事个体经营的残疾人；\n（六）国务院规定给予税收优惠的其他企业、人员。",
      "blankText": "国家鼓励企业增加就业岗位，扶持失业人员和残疾人就业，对下列企业、人员依法给予税收优惠：\n（一）吸纳符合国家规定条件的失业人员达到规定要求的企业；\n（二）失业人员创办的中小企业；\n（三）安置残疾人员达到规定比例或者集中使用残疾人的企业；\n（四）从事个体经营的符合国家规定条件的失业人员；\n（五）从事个体经营的残疾人；\n（六）国务院规定给予税收优惠的其他企业、人员。"
    },
    {
      "id": 18,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 18,
      "text": "对本法第十七条第四项、第五项规定的人员，有关部门应当在经营场地等方面给予照顾，免除行政事业性收费。",
      "blankText": "对本法第十七条第四项、第五项规定的人员，有关部门应当在经营场地等方面给予照顾，免除行政事业性收费。"
    },
    {
      "id": 19,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 19,
      "text": "国家实行有利于促进就业的金融政策，增加中小企业的融资渠道；鼓励金融机构改进金融服务，加大对中小企业的信贷支持，并对自主创业人员在一定期限内给予小额信贷等扶持。",
      "blankText": "国家实行有利于促进就业的金融政策，增加中小企业的融资渠道；鼓励金融机构改进金融服务，加大对中小企业的信贷支持，并对自主创业人员在一定期限内给予小额信贷等扶持。"
    },
    {
      "id": 20,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 20,
      "text": "国家实行城乡统筹的就业政策，建立健全城乡劳动者平等就业的制度，引导农业富余劳动力有序转移就业。\n县级以上地方人民政府推进小城镇建设和加快县域经济发展，引导农业富余劳动力就地就近转移就业；在制定小城镇规划时，将本地区农业富余劳动力转移就业作为重要内容。\n县级以上地方人民政府引导农业富余劳动力有序向城市异地转移就业；劳动力输出地和输入地人民政府应当互相配合，改善农村劳动者进城就业的环境和条件。",
      "blankText": "国家实行城乡统筹的就业政策，建立健全城乡劳动者平等就业的制度，引导农业富余劳动力有序转移就业。\n县级以上地方人民政府推进小城镇建设和加快县域经济发展，引导农业富余劳动力就地就近转移就业；在制定小城镇规划时，将本地区农业富余劳动力转移就业作为重要内容。\n县级以上地方人民政府引导农业富余劳动力有序向城市异地转移就业；劳动力输出地和输入地人民政府应当互相配合，改善农村劳动者进城就业的环境和条件。"
    },
    {
      "id": 21,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 21,
      "text": "国家支持区域经济发展，鼓励区域协作，统筹协调不同地区就业的均衡增长。\n国家支持民族地区发展经济，扩大就业。",
      "blankText": "国家支持区域经济发展，鼓励区域协作，统筹协调不同地区就业的均衡增长。\n国家支持民族地区发展经济，扩大就业。"
    },
    {
      "id": 22,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 22,
      "text": "各级人民政府统筹做好城镇新增劳动力就业、农业富余劳动力转移就业和失业人员就业工作。",
      "blankText": "各级人民政府统筹做好城镇新增劳动力就业、农业富余劳动力转移就业和失业人员就业工作。"
    },
    {
      "id": 23,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 23,
      "text": "各级人民政府采取措施，逐步完善和实施与非全日制用工等灵活就业相适应的劳动和社会保险政策，为灵活就业人员提供帮助和服务。",
      "blankText": "各级人民政府采取措施，逐步完善和实施与非全日制用工等灵活就业相适应的劳动和社会保险政策，为灵活就业人员提供帮助和服务。"
    },
    {
      "id": 24,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 24,
      "text": "地方各级人民政府和有关部门应当加强对失业人员从事个体经营的指导，提供政策咨询、就业培训和开业指导等服务。",
      "blankText": "地方各级人民政府和有关部门应当加强对失业人员从事个体经营的指导，提供政策咨询、就业培训和开业指导等服务。"
    },
    {
      "id": 25,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 25,
      "text": "各级人民政府创造公平就业的环境，消除就业歧视，制定政策并采取措施对就业困难人员给予扶持和援助。",
      "blankText": "各级人民政府创造公平就业的环境，消除就业歧视，制定政策并采取措施对就业困难人员给予扶持和援助。"
    },
    {
      "id": 26,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 26,
      "text": "用人单位招用人员、职业中介机构从事职业中介活动，应当向劳动者提供平等的就业机会和公平的就业条件，不得实施就业歧视。",
      "blankText": "用人单位招用人员、职业中介机构从事职业中介活动，应当向劳动者提供平等的就业机会和公平的就业条件，不得实施就业歧视。"
    },
    {
      "id": 27,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 27,
      "text": "国家保障妇女享有与男子平等的劳动权利。\n用人单位招用人员，除国家规定的不适合妇女的工种或者岗位外，不得以性别为由拒绝录用妇女或者提高对妇女的录用标准。\n用人单位录用女职工，不得在劳动合同中规定限制女职工结婚、生育的内容。",
      "blankText": "国家保障妇女享有与男子平等的劳动权利。\n用人单位招用人员，除国家规定的不适合妇女的工种或者岗位外，不得以性别为由拒绝录用妇女或者提高对妇女的录用标准。\n用人单位录用女职工，不得在劳动合同中规定限制女职工结婚、生育的内容。"
    },
    {
      "id": 28,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 28,
      "text": "各民族劳动者享有平等的劳动权利。\n用人单位招用人员，应当依法对少数民族劳动者给予适当照顾。",
      "blankText": "各民族劳动者享有平等的劳动权利。\n用人单位招用人员，应当依法对少数民族劳动者给予适当照顾。"
    },
    {
      "id": 29,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 29,
      "text": "国家保障残疾人的劳动权利。\n各级人民政府应当对残疾人就业统筹规划，为残疾人创造就业条件。\n用人单位招用人员，不得歧视残疾人。",
      "blankText": "国家保障残疾人的劳动权利。\n各级人民政府应当对残疾人就业统筹规划，为残疾人创造就业条件。\n用人单位招用人员，不得歧视残疾人。"
    },
    {
      "id": 30,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 30,
      "text": "用人单位招用人员，不得以是传染病病原携带者为由拒绝录用。但是，经医学鉴定传染病病原携带者在治愈前或者排除传染嫌疑前，不得从事法律、行政法规和国务院卫生行政部门规定禁止从事的易使传染病扩散的工作。",
      "blankText": "用人单位招用人员，不得以是传染病病原携带者为由拒绝录用。但是，经医学鉴定传染病病原携带者在治愈前或者排除传染嫌疑前，不得从事法律、行政法规和国务院卫生行政部门规定禁止从事的易使传染病扩散的工作。"
    },
    {
      "id": 31,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 31,
      "text": "农村劳动者进城就业享有与城镇劳动者平等的劳动权利，不得对农村劳动者进城就业设置歧视性限制。",
      "blankText": "农村劳动者进城就业享有与城镇劳动者平等的劳动权利，不得对农村劳动者进城就业设置歧视性限制。"
    },
    {
      "id": 32,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 32,
      "text": "县级以上人民政府培育和完善统一开放、竞争有序的人力资源市场，为劳动者就业提供服务。",
      "blankText": "县级以上人民政府培育和完善统一开放、竞争有序的人力资源市场，为劳动者就业提供服务。"
    },
    {
      "id": 33,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 33,
      "text": "县级以上人民政府鼓励社会各方面依法开展就业服务活动，加强对公共就业服务和职业中介服务的指导和监督，逐步完善覆盖城乡的就业服务体系。",
      "blankText": "县级以上人民政府鼓励社会各方面依法开展就业服务活动，加强对公共就业服务和职业中介服务的指导和监督，逐步完善覆盖城乡的就业服务体系。"
    },
    {
      "id": 34,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 34,
      "text": "县级以上人民政府加强人力资源市场信息网络及相关设施建设，建立健全人力资源市场信息服务体系，完善市场信息发布制度。",
      "blankText": "县级以上人民政府加强人力资源市场信息网络及相关设施建设，建立健全人力资源市场信息服务体系，完善市场信息发布制度。"
    },
    {
      "id": 35,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 35,
      "text": "县级以上人民政府建立健全公共就业服务体系，设立公共就业服务机构，为劳动者免费提供下列服务：\n（一）就业政策法规咨询；\n（二）职业供求信息、市场工资指导价位信息和职业培训信息发布；\n（三）职业指导和职业介绍；\n（四）对就业困难人员实施就业援助；\n（五）办理就业登记、失业登记等事务；\n（六）其他公共就业服务。\n公共就业服务机构应当不断提高服务的质量和效率，不得从事经营性活动。\n公共就业服务经费纳入同级财政预算。",
      "blankText": "县级以上人民政府建立健全公共就业服务体系，设立公共就业服务机构，为劳动者免费提供下列服务：\n（一）就业政策法规咨询；\n（二）职业供求信息、市场工资指导价位信息和职业培训信息发布；\n（三）职业指导和职业介绍；\n（四）对就业困难人员实施就业援助；\n（五）办理就业登记、失业登记等事务；\n（六）其他公共就业服务。\n公共就业服务机构应当不断提高服务的质量和效率，不得从事经营性活动。\n公共就业服务经费纳入同级财政预算。"
    },
    {
      "id": 36,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 36,
      "text": "县级以上地方人民政府对职业中介机构提供公益性就业服务的，按照规定给予补贴。\n国家鼓励社会各界为公益性就业服务提供捐赠、资助。",
      "blankText": "县级以上地方人民政府对职业中介机构提供公益性就业服务的，按照规定给予补贴。\n国家鼓励社会各界为公益性就业服务提供捐赠、资助。"
    },
    {
      "id": 37,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 37,
      "text": "地方各级人民政府和有关部门不得举办或者与他人联合举办经营性的职业中介机构。\n地方各级人民政府和有关部门、公共就业服务机构举办的招聘会，不得向劳动者收取费用。",
      "blankText": "地方各级人民政府和有关部门不得举办或者与他人联合举办经营性的职业中介机构。\n地方各级人民政府和有关部门、公共就业服务机构举办的招聘会，不得向劳动者收取费用。"
    },
    {
      "id": 38,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 38,
      "text": "县级以上人民政府和有关部门加强对职业中介机构的管理，鼓励其提高服务质量，发挥其在促进就业中的作用。",
      "blankText": "县级以上人民政府和有关部门加强对职业中介机构的管理，鼓励其提高服务质量，发挥其在促进就业中的作用。"
    },
    {
      "id": 39,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 39,
      "text": "从事职业中介活动，应当遵循合法、诚实信用、公平、公开的原则。\n用人单位通过职业中介机构招用人员，应当如实向职业中介机构提供岗位需求信息。\n禁止任何组织或者个人利用职业中介活动侵害劳动者的合法权益。",
      "blankText": "从事职业中介活动，应当遵循合法、诚实信用、公平、公开的原则。\n用人单位通过职业中介机构招用人员，应当如实向职业中介机构提供岗位需求信息。\n禁止任何组织或者个人利用职业中介活动侵害劳动者的合法权益。"
    },
    {
      "id": 40,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 40,
      "text": "设立职业中介机构应当具备下列条件：\n（一）有明确的章程和管理制度；\n（二）有开展业务必备的固定场所、办公设施和一定数额的开办资金；\n（三）有一定数量具备相应职业资格的专职工作人员；\n（四）法律、法规规定的其他条件。\n设立职业中介机构应当在工商行政管理部门办理登记后，向劳动行政部门申请行政许可。\n未经依法许可和登记的机构，不得从事职业中介活动。\n国家对外商投资职业中介机构和向劳动者提供境外就业服务的职业中介机构另有规定的，依照其规定。",
      "blankText": "设立职业中介机构应当具备下列条件：\n（一）有明确的章程和管理制度；\n（二）有开展业务必备的固定场所、办公设施和一定数额的开办资金；\n（三）有一定数量具备相应职业资格的专职工作人员；\n（四）法律、法规规定的其他条件。\n设立职业中介机构应当在工商行政管理部门办理登记后，向劳动行政部门申请行政许可。\n未经依法许可和登记的机构，不得从事职业中介活动。\n国家对外商投资职业中介机构和向劳动者提供境外就业服务的职业中介机构另有规定的，依照其规定。"
    },
    {
      "id": 41,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 41,
      "text": "职业中介机构不得有下列行为：\n（一）提供虚假就业信息；\n（二）为无合法证照的用人单位提供职业中介服务；\n（三）伪造、涂改、转让职业中介许可证；\n（四）扣押劳动者的居民身份证和其他证件，或者向劳动者收取押金；\n（五）其他违反法律、法规规定的行为。",
      "blankText": "职业中介机构不得有下列行为：\n（一）提供虚假就业信息；\n（二）为无合法证照的用人单位提供职业中介服务；\n（三）伪造、涂改、转让职业中介许可证；\n（四）扣押劳动者的居民身份证和其他证件，或者向劳动者收取押金；\n（五）其他违反法律、法规规定的行为。"
    },
    {
      "id": 42,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 42,
      "text": "县级以上人民政府建立失业预警制度，对可能出现的较大规模的失业，实施预防、调节和控制。",
      "blankText": "县级以上人民政府建立失业预警制度，对可能出现的较大规模的失业，实施预防、调节和控制。"
    },
    {
      "id": 43,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 43,
      "text": "国家建立劳动力调查统计制度和就业登记、失业登记制度，开展劳动力资源和就业、失业状况调查统计，并公布调查统计结果。\n统计部门和劳动行政部门进行劳动力调查统计和就业、失业登记时，用人单位和个人应当如实提供调查统计和登记所需要的情况。",
      "blankText": "国家建立劳动力调查统计制度和就业登记、失业登记制度，开展劳动力资源和就业、失业状况调查统计，并公布调查统计结果。\n统计部门和劳动行政部门进行劳动力调查统计和就业、失业登记时，用人单位和个人应当如实提供调查统计和登记所需要的情况。"
    },
    {
      "id": 44,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 44,
      "text": "国家依法发展职业教育，鼓励开展职业培训，促进劳动者提高职业技能，增强就业能力和创业能力。",
      "blankText": "国家依法发展职业教育，鼓励开展职业培训，促进劳动者提高职业技能，增强就业能力和创业能力。"
    },
    {
      "id": 45,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 45,
      "text": "县级以上人民政府根据经济社会发展和市场需求，制定并实施职业能力开发计划。",
      "blankText": "县级以上人民政府根据经济社会发展和市场需求，制定并实施职业能力开发计划。"
    },
    {
      "id": 46,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 46,
      "text": "县级以上人民政府加强统筹协调，鼓励和支持各类职业院校、职业技能培训机构和用人单位依法开展就业前培训、在职培训、再就业培训和创业培训；鼓励劳动者参加各种形式的培训。",
      "blankText": "县级以上人民政府加强统筹协调，鼓励和支持各类职业院校、职业技能培训机构和用人单位依法开展就业前培训、在职培训、再就业培训和创业培训；鼓励劳动者参加各种形式的培训。"
    },
    {
      "id": 47,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 47,
      "text": "县级以上地方人民政府和有关部门根据市场需求和产业发展方向，鼓励、指导企业加强职业教育和培训。\n职业院校、职业技能培训机构与企业应当密切联系，实行产教结合，为经济建设服务，培养实用人才和熟练劳动者。\n企业应当按照国家有关规定提取职工教育经费，对劳动者进行职业技能培训和继续教育培训。",
      "blankText": "县级以上地方人民政府和有关部门根据市场需求和产业发展方向，鼓励、指导企业加强职业教育和培训。\n职业院校、职业技能培训机构与企业应当密切联系，实行产教结合，为经济建设服务，培养实用人才和熟练劳动者。\n企业应当按照国家有关规定提取职工教育经费，对劳动者进行职业技能培训和继续教育培训。"
    },
    {
      "id": 48,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 48,
      "text": "国家采取措施建立健全劳动预备制度，县级以上地方人民政府对有就业要求的初高中毕业生实行一定期限的职业教育和培训，使其取得相应的职业资格或者掌握一定的职业技能。",
      "blankText": "国家采取措施建立健全劳动预备制度，县级以上地方人民政府对有就业要求的初高中毕业生实行一定期限的职业教育和培训，使其取得相应的职业资格或者掌握一定的职业技能。"
    },
    {
      "id": 49,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 49,
      "text": "地方各级人民政府鼓励和支持开展就业培训，帮助失业人员提高职业技能，增强其就业能力和创业能力。失业人员参加就业培训的，按照有关规定享受政府培训补贴。",
      "blankText": "地方各级人民政府鼓励和支持开展就业培训，帮助失业人员提高职业技能，增强其就业能力和创业能力。失业人员参加就业培训的，按照有关规定享受政府培训补贴。"
    },
    {
      "id": 50,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 50,
      "text": "地方各级人民政府采取有效措施，组织和引导进城就业的农村劳动者参加技能培训，鼓励各类培训机构为进城就业的农村劳动者提供技能培训，增强其就业能力和创业能力。",
      "blankText": "地方各级人民政府采取有效措施，组织和引导进城就业的农村劳动者参加技能培训，鼓励各类培训机构为进城就业的农村劳动者提供技能培训，增强其就业能力和创业能力。"
    },
    {
      "id": 51,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 51,
      "text": "国家对从事涉及公共安全、人身健康、生命财产安全等特殊工种的劳动者，实行职业资格证书制度，具体办法由国务院规定。",
      "blankText": "国家对从事涉及公共安全、人身健康、生命财产安全等特殊工种的劳动者，实行职业资格证书制度，具体办法由国务院规定。"
    },
    {
      "id": 52,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 52,
      "text": "各级人民政府建立健全就业援助制度，采取税费减免、贷款贴息、社会保险补贴、岗位补贴等办法，通过公益性岗位安置等途径，对就业困难人员实行优先扶持和重点帮助。\n就业困难人员是指因身体状况、技能水平、家庭因素、失去土地等原因难以实现就业，以及连续失业一定时间仍未能实现就业的人员。就业困难人员的具体范围，由省、自治区、直辖市人民政府根据本行政区域的实际情况规定。",
      "blankText": "各级人民政府建立健全就业援助制度，采取税费减免、贷款贴息、社会保险补贴、岗位补贴等办法，通过公益性岗位安置等途径，对就业困难人员实行优先扶持和重点帮助。\n就业困难人员是指因身体状况、技能水平、家庭因素、失去土地等原因难以实现就业，以及连续失业一定时间仍未能实现就业的人员。就业困难人员的具体范围，由省、自治区、直辖市人民政府根据本行政区域的实际情况规定。"
    },
    {
      "id": 53,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 53,
      "text": "政府投资开发的公益性岗位，应当优先安排符合岗位要求的就业困难人员。被安排在公益性岗位工作的，按照国家规定给予岗位补贴。",
      "blankText": "政府投资开发的公益性岗位，应当优先安排符合岗位要求的就业困难人员。被安排在公益性岗位工作的，按照国家规定给予岗位补贴。"
    },
    {
      "id": 54,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 54,
      "text": "地方各级人民政府加强基层就业援助服务工作，对就业困难人员实施重点帮助，提供有针对性的就业服务和公益性岗位援助。\n地方各级人民政府鼓励和支持社会各方面为就业困难人员提供技能培训、岗位信息等服务。",
      "blankText": "地方各级人民政府加强基层就业援助服务工作，对就业困难人员实施重点帮助，提供有针对性的就业服务和公益性岗位援助。\n地方各级人民政府鼓励和支持社会各方面为就业困难人员提供技能培训、岗位信息等服务。"
    },
    {
      "id": 55,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 55,
      "text": "各级人民政府采取特别扶助措施，促进残疾人就业。\n用人单位应当按照国家规定安排残疾人就业，具体办法由国务院规定。",
      "blankText": "各级人民政府采取特别扶助措施，促进残疾人就业。\n用人单位应当按照国家规定安排残疾人就业，具体办法由国务院规定。"
    },
    {
      "id": 56,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 56,
      "text": "县级以上地方人民政府采取多种就业形式，拓宽公益性岗位范围，开发就业岗位，确保城市有就业需求的家庭至少有一人实现就业。\n法定劳动年龄内的家庭人员均处于失业状况的城市居民家庭，可以向住所地街道、社区公共就业服务机构申请就业援助。街道、社区公共就业服务机构经确认属实的，应当为该家庭中至少一人提供适当的就业岗位。",
      "blankText": "县级以上地方人民政府采取多种就业形式，拓宽公益性岗位范围，开发就业岗位，确保城市有就业需求的家庭至少有一人实现就业。\n法定劳动年龄内的家庭人员均处于失业状况的城市居民家庭，可以向住所地街道、社区公共就业服务机构申请就业援助。街道、社区公共就业服务机构经确认属实的，应当为该家庭中至少一人提供适当的就业岗位。"
    },
    {
      "id": 57,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 57,
      "text": "国家鼓励资源开采型城市和独立工矿区发展与市场需求相适应的产业，引导劳动者转移就业。\n对因资源枯竭或者经济结构调整等原因造成就业困难人员集中的地区，上级人民政府应当给予必要的扶持和帮助。",
      "blankText": "国家鼓励资源开采型城市和独立工矿区发展与市场需求相适应的产业，引导劳动者转移就业。\n对因资源枯竭或者经济结构调整等原因造成就业困难人员集中的地区，上级人民政府应当给予必要的扶持和帮助。"
    },
    {
      "id": 58,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 58,
      "text": "各级人民政府和有关部门应当建立促进就业的目标责任制度。县级以上人民政府按照促进就业目标责任制的要求，对所属的有关部门和下一级人民政府进行考核和监督。",
      "blankText": "各级人民政府和有关部门应当建立促进就业的目标责任制度。县级以上人民政府按照促进就业目标责任制的要求，对所属的有关部门和下一级人民政府进行考核和监督。"
    },
    {
      "id": 59,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 59,
      "text": "审计机关、财政部门应当依法对就业专项资金的管理和使用情况进行监督检查。",
      "blankText": "审计机关、财政部门应当依法对就业专项资金的管理和使用情况进行监督检查。"
    },
    {
      "id": 60,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 60,
      "text": "劳动行政部门应当对本法实施情况进行监督检查，建立举报制度，受理对违反本法行为的举报，并及时予以核实、处理。",
      "blankText": "劳动行政部门应当对本法实施情况进行监督检查，建立举报制度，受理对违反本法行为的举报，并及时予以核实、处理。"
    },
    {
      "id": 61,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 61,
      "text": "违反本法规定，劳动行政等有关部门及其工作人员滥用职权、玩忽职守、徇私舞弊的，对直接负责的主管人员和其他直接责任人员依法给予处分。",
      "blankText": "违反本法规定，劳动行政等有关部门及其工作人员滥用职权、玩忽职守、徇私舞弊的，对直接负责的主管人员和其他直接责任人员依法给予处分。"
    },
    {
      "id": 62,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 62,
      "text": "违反本法规定，实施就业歧视的，劳动者可以向人民法院提起诉讼。",
      "blankText": "违反本法规定，实施就业歧视的，劳动者可以向人民法院提起诉讼。"
    },
    {
      "id": 63,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 63,
      "text": "违反本法规定，地方各级人民政府和有关部门、公共就业服务机构举办经营性的职业中介机构，从事经营性职业中介活动，向劳动者收取费用的，由上级主管机关责令限期改正，将违法收取的费用退还劳动者，并对直接负责的主管人员和其他直接责任人员依法给予处分。",
      "blankText": "违反本法规定，地方各级人民政府和有关部门、公共就业服务机构举办经营性的职业中介机构，从事经营性职业中介活动，向劳动者收取费用的，由上级主管机关责令限期改正，将违法收取的费用退还劳动者，并对直接负责的主管人员和其他直接责任人员依法给予处分。"
    },
    {
      "id": 64,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 64,
      "text": "违反本法规定，未经许可和登记，擅自从事职业中介活动的，由劳动行政部门或者其他主管部门依法予以关闭；有违法所得的，没收违法所得，并处一万元以上五万元以下的罚款。",
      "blankText": "违反本法规定，未经许可和登记，擅自从事职业中介活动的，由劳动行政部门或者其他主管部门依法予以关闭；有违法所得的，没收违法所得，并处一万元以上五万元以下的罚款。"
    },
    {
      "id": 65,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 65,
      "text": "违反本法规定，职业中介机构提供虚假就业信息，为无合法证照的用人单位提供职业中介服务，伪造、涂改、转让职业中介许可证的，由劳动行政部门或者其他主管部门责令改正；有违法所得的，没收违法所得，并处一万元以上五万元以下的罚款；情节严重的，吊销职业中介许可证。",
      "blankText": "违反本法规定，职业中介机构提供虚假就业信息，为无合法证照的用人单位提供职业中介服务，伪造、涂改、转让职业中介许可证的，由劳动行政部门或者其他主管部门责令改正；有违法所得的，没收违法所得，并处一万元以上五万元以下的罚款；情节严重的，吊销职业中介许可证。"
    },
    {
      "id": 66,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 66,
      "text": "违反本法规定，职业中介机构扣押劳动者居民身份证等证件的，由劳动行政部门责令限期退还劳动者，并依照有关法律规定给予处罚。\n违反本法规定，职业中介机构向劳动者收取押金的，由劳动行政部门责令限期退还劳动者，并以每人五百元以上二千元以下的标准处以罚款。",
      "blankText": "违反本法规定，职业中介机构扣押劳动者居民身份证等证件的，由劳动行政部门责令限期退还劳动者，并依照有关法律规定给予处罚。\n违反本法规定，职业中介机构向劳动者收取押金的，由劳动行政部门责令限期退还劳动者，并以每人五百元以上二千元以下的标准处以罚款。"
    },
    {
      "id": 67,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 67,
      "text": "违反本法规定，企业未按照国家规定提取职工教育经费，或者挪用职工教育经费的，由劳动行政部门责令改正，并依法给予处罚。",
      "blankText": "违反本法规定，企业未按照国家规定提取职工教育经费，或者挪用职工教育经费的，由劳动行政部门责令改正，并依法给予处罚。"
    },
    {
      "id": 68,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 68,
      "text": "违反本法规定，侵害劳动者合法权益，造成财产损失或者其他损害的，依法承担民事责任；构成犯罪的，依法追究刑事责任。",
      "blankText": "违反本法规定，侵害劳动者合法权益，造成财产损失或者其他损害的，依法承担民事责任；构成犯罪的，依法追究刑事责任。"
    },
    {
      "id": 69,
      "category": "就业促进",
      "law": "就业促进法",
      "articleNum": 69,
      "text": "本法自2008年1月1日起施行。",
      "blankText": "本法自______年______月______日起施行。"
    },
    {
      "id": 70,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 1,
      "text": "为了加强就业服务和就业管理，培育和完善统一开放、竞争有序的人力资源市场，为劳动者就业和用人单位招用人员提供服务，根据就业促进法等法律、行政法规，制定本规定。",
      "blankText": "为了加强就业服务和就业管理，培育和完善统一开放、竞争有序的人力资源市场，为劳动者就业和用人单位招用人员提供服务，根据就业促进法等法律、行政法规，制定本规定。"
    },
    {
      "id": 71,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 2,
      "text": "劳动者求职与就业，用人单位招用人员，劳动保障行政部门举办的公共就业服务机构和经劳动保障行政部门审批的职业中介机构从事就业服务活动，适用本规定。\n本规定所称用人单位，是指在中华人民共和国境内的企业、个体经济组织、民办非企业单位等组织，以及招用与之建立劳动关系的劳动者的国家机关、事业单位、社会团体。",
      "blankText": "劳动者求职与就业，用人单位招用人员，劳动保障行政部门举办的公共就业服务机构和经劳动保障行政部门审批的职业中介机构从事就业服务活动，适用本规定。\n本规定所称用人单位，是指在中华人民共和国境内的企业、个体经济组织、民办非企业单位等组织，以及招用与之建立劳动关系的劳动者的国家机关、事业单位、社会团体。"
    },
    {
      "id": 72,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 3,
      "text": "县级以上劳动保障行政部门依法开展本行政区域内的就业服务和就业管理工作。",
      "blankText": "县级以上劳动保障行政部门依法开展本行政区域内的就业服务和就业管理工作。"
    },
    {
      "id": 73,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 4,
      "text": "劳动者依法享有平等就业的权利。劳动者就业，不因民族、种族、性别、宗教信仰等不同而受歧视。",
      "blankText": "劳动者依法享有平等就业的权利。劳动者就业，不因民族、种族、性别、宗教信仰等不同而受歧视。"
    },
    {
      "id": 74,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 5,
      "text": "农村劳动者进城就业享有与城镇劳动者平等的就业权利，不得对农村劳动者进城就业设置歧视性限制。",
      "blankText": "农村劳动者进城就业享有与城镇劳动者平等的就业权利，不得对农村劳动者进城就业设置歧视性限制。"
    },
    {
      "id": 75,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 6,
      "text": "劳动者依法享有自主择业的权利。劳动者年满16周岁，有劳动能力且有就业愿望的，可凭本人身份证件，通过公共就业服务机构、职业中介机构介绍或直接联系用人单位等渠道求职。",
      "blankText": "劳动者依法享有自主择业的权利。劳动者年满______周岁，有劳动能力且有就业愿望的，可凭本人身份证件，通过公共就业服务机构、职业中介机构介绍或直接联系用人单位等渠道求职。"
    },
    {
      "id": 76,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 7,
      "text": "劳动者求职时，应当如实向公共就业服务机构或职业中介机构、用人单位提供个人基本情况以及与应聘岗位直接相关的知识技能、工作经历、就业现状等情况，并出示相关证明。",
      "blankText": "劳动者求职时，应当如实向公共就业服务机构或职业中介机构、用人单位提供个人基本情况以及与应聘岗位直接相关的知识技能、工作经历、就业现状等情况，并出示相关证明。"
    },
    {
      "id": 77,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 8,
      "text": "劳动者应当树立正确的择业观念，提高就业能力和创业能力。\n国家鼓励劳动者在就业前接受必要的职业教育或职业培训，鼓励城镇初高中毕业生在就业前参加劳动预备制培训。\n国家鼓励劳动者自主创业、自谋职业。各级劳动保障行政部门应当会同有关部门，简化程序，提高效率，为劳动者自主创业、自谋职业提供便利和相应服务。",
      "blankText": "劳动者应当树立正确的择业观念，提高就业能力和创业能力。\n国家鼓励劳动者在就业前接受必要的职业教育或职业培训，鼓励城镇初高中毕业生在就业前参加劳动预备制培训。\n国家鼓励劳动者自主创业、自谋职业。各级劳动保障行政部门应当会同有关部门，简化程序，提高效率，为劳动者自主创业、自谋职业提供便利和相应服务。"
    },
    {
      "id": 78,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 9,
      "text": "用人单位依法享有自主用人的权利。用人单位招用人员，应当向劳动者提供平等的就业机会和公平的就业条件。",
      "blankText": "用人单位依法享有自主用人的权利。用人单位招用人员，应当向劳动者提供平等的就业机会和公平的就业条件。"
    },
    {
      "id": 79,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 10,
      "text": "用人单位可以通过下列途径自主招用人员：\n（一）委托公共就业服务机构或职业中介机构；\n（二）参加职业招聘洽谈会；\n（三）委托报纸、广播、电视、互联网站等大众传播媒介发布招聘信息；\n（四）利用本企业场所、企业网站等自有途径发布招聘信息；\n（五）其他合法途径。",
      "blankText": "用人单位可以通过下列途径自主招用人员：\n（一）委托公共就业服务机构或职业中介机构；\n（二）参加职业招聘洽谈会；\n（三）委托报纸、广播、电视、互联网站等大众传播媒介发布招聘信息；\n（四）利用本企业场所、企业网站等自有途径发布招聘信息；\n（五）其他合法途径。"
    },
    {
      "id": 80,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 11,
      "text": "用人单位委托公共就业服务机构或职业中介机构招用人员，或者参加招聘洽谈会时，应当提供招用人员简章，并出示营业执照（副本）或者有关部门批准其设立的文件、经办人的身份证件和受用人单位委托的证明。\n招用人员简章应当包括用人单位基本情况、招用人数、工作内容、招录条件、劳动报酬、福利待遇、社会保险等内容，以及法律、法规规定的其他内容。",
      "blankText": "用人单位委托公共就业服务机构或职业中介机构招用人员，或者参加招聘洽谈会时，应当提供招用人员简章，并出示营业执照（副本）或者有关部门批准其设立的文件、经办人的身份证件和受用人单位委托的证明。\n招用人员简章应当包括用人单位基本情况、招用人数、工作内容、招录条件、劳动报酬、福利待遇、社会保险等内容，以及法律、法规规定的其他内容。"
    },
    {
      "id": 81,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 12,
      "text": "用人单位招用人员时，应当依法如实告知劳动者有关工作内容、工作条件、工作地点、职业危害、安全生产状况、劳动报酬以及劳动者要求了解的其他情况。\n用人单位应当根据劳动者的要求，及时向其反馈是否录用的情况。",
      "blankText": "用人单位招用人员时，应当依法如实告知劳动者有关工作内容、工作条件、工作地点、职业危害、安全生产状况、劳动报酬以及劳动者要求了解的其他情况。\n用人单位应当根据劳动者的要求，及时向其反馈是否录用的情况。"
    },
    {
      "id": 82,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 13,
      "text": "用人单位应当对劳动者的个人资料予以保密。公开劳动者的个人资料信息和使用劳动者的技术、智力成果，须经劳动者本人书面同意。",
      "blankText": "用人单位应当对劳动者的个人资料予以保密。公开劳动者的个人资料信息和使用劳动者的技术、智力成果，须经劳动者本人书面同意。"
    },
    {
      "id": 83,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 14,
      "text": "用人单位招用人员不得有下列行为：\n（一）提供虚假招聘信息，发布虚假招聘广告；\n（二）扣押被录用人员的居民身份证和其他证件；\n（三）以担保或者其他名义向劳动者收取财物；\n（四）招用未满16周岁的未成年人以及国家法律、行政法规规定不得招用的其他人员；\n（五）招用无合法身份证件的人员；\n（六）以招用人员为名牟取不正当利益或进行其他违法活动。",
      "blankText": "用人单位招用人员不得有下列行为：\n（一）提供虚假招聘信息，发布虚假招聘广告；\n（二）扣押被录用人员的居民身份证和其他证件；\n（三）以担保或者其他名义向劳动者收取财物；\n（四）招用未满______周岁的未成年人以及国家法律、行政法规规定不得招用的其他人员；\n（五）招用无合法身份证件的人员；\n（六）以招用人员为名牟取不正当利益或进行其他违法活动。"
    },
    {
      "id": 84,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 15,
      "text": "用人单位不得以诋毁其他用人单位信誉、商业贿赂等不正当手段招聘人员。",
      "blankText": "用人单位不得以诋毁其他用人单位信誉、商业贿赂等不正当手段招聘人员。"
    },
    {
      "id": 85,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 16,
      "text": "用人单位在招用人员时，除国家规定的不适合妇女从事的工种或者岗位外，不得以性别为由拒绝录用妇女或者提高对妇女的录用标准。\n用人单位录用女职工，不得在劳动合同中规定限制女职工结婚、生育的内容。",
      "blankText": "用人单位在招用人员时，除国家规定的不适合妇女从事的工种或者岗位外，不得以性别为由拒绝录用妇女或者提高对妇女的录用标准。\n用人单位录用女职工，不得在劳动合同中规定限制女职工结婚、生育的内容。"
    },
    {
      "id": 86,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 17,
      "text": "用人单位招用人员，应当依法对少数民族劳动者给予适当照顾。",
      "blankText": "用人单位招用人员，应当依法对少数民族劳动者给予适当照顾。"
    },
    {
      "id": 87,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 18,
      "text": "用人单位招用人员，不得歧视残疾人。",
      "blankText": "用人单位招用人员，不得歧视残疾人。"
    },
    {
      "id": 88,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 19,
      "text": "用人单位招用人员，不得以是传染病病原携带者为由拒绝录用。但是，经医学鉴定传染病病原携带者在治愈前或者排除传染嫌疑前，不得从事法律、行政法规和国务院卫生行政部门规定禁止从事的易使传染病扩散的工作。\n用人单位招用人员，除国家法律、行政法规和国务院卫生行政部门规定禁止乙肝病原携带者从事的工作外，不得强行将乙肝病毒血清学指标作为体检标准。",
      "blankText": "用人单位招用人员，不得以是传染病病原携带者为由拒绝录用。但是，经医学鉴定传染病病原携带者在治愈前或者排除传染嫌疑前，不得从事法律、行政法规和国务院卫生行政部门规定禁止从事的易使传染病扩散的工作。\n用人单位招用人员，除国家法律、行政法规和国务院卫生行政部门规定禁止乙肝病原携带者从事的工作外，不得强行将乙肝病毒血清学指标作为体检标准。"
    },
    {
      "id": 89,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 20,
      "text": "用人单位发布的招用人员简章或招聘广告，不得包含歧视性内容。",
      "blankText": "用人单位发布的招用人员简章或招聘广告，不得包含歧视性内容。"
    },
    {
      "id": 90,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 21,
      "text": "用人单位招用从事涉及公共安全、人身健康、生命财产安全等特殊工种的劳动者，应当依法招用持相应工种职业资格证书的人员；招用未持相应工种职业资格证书人员的，须组织其在上岗前参加专门培训，使其取得职业资格证书后方可上岗。",
      "blankText": "用人单位招用从事涉及公共安全、人身健康、生命财产安全等特殊工种的劳动者，应当依法招用持相应工种职业资格证书的人员；招用未持相应工种职业资格证书人员的，须组织其在上岗前参加专门培训，使其取得职业资格证书后方可上岗。"
    },
    {
      "id": 91,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 22,
      "text": "用人单位招用台港澳人员后，应当按有关规定到当地劳动保障行政部门备案，并为其办理《台港澳人员就业证》。",
      "blankText": "用人单位招用台港澳人员后，应当按有关规定到当地劳动保障行政部门备案，并为其办理《台港澳人员就业证》。"
    },
    {
      "id": 92,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 23,
      "text": "用人单位招用外国人，应当在外国人入境前，按有关规定到当地劳动保障行政部门为其申请就业许可，经批准并获得《中华人民共和国外国人就业许可证书》后方可招用。\n用人单位招用外国人的岗位必须是有特殊技能要求、国内暂无适当人选的岗位，并且不违反国家有关规定。",
      "blankText": "用人单位招用外国人，应当在外国人入境前，按有关规定到当地劳动保障行政部门为其申请就业许可，经批准并获得《中华人民共和国外国人就业许可证书》后方可招用。\n用人单位招用外国人的岗位必须是有特殊技能要求、国内暂无适当人选的岗位，并且不违反国家有关规定。"
    },
    {
      "id": 93,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 24,
      "text": "县级以上劳动保障行政部门统筹管理本行政区域内的公共就业服务工作，根据政府制定的发展计划，建立健全覆盖城乡的公共就业服务体系。\n公共就业服务机构根据政府确定的就业工作目标任务，制定就业服务计划，推动落实就业扶持政策，组织实施就业服务项目，为劳动者和用人单位提供就业服务，开展人力资源市场调查分析，并受劳动保障行政部门委托经办促进就业的相关事务。",
      "blankText": "县级以上劳动保障行政部门统筹管理本行政区域内的公共就业服务工作，根据政府制定的发展计划，建立健全覆盖城乡的公共就业服务体系。\n公共就业服务机构根据政府确定的就业工作目标任务，制定就业服务计划，推动落实就业扶持政策，组织实施就业服务项目，为劳动者和用人单位提供就业服务，开展人力资源市场调查分析，并受劳动保障行政部门委托经办促进就业的相关事务。"
    },
    {
      "id": 94,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 25,
      "text": "公共就业服务机构应当免费为劳动者提供以下服务：\n（一）就业政策法规咨询；\n（二）职业供求信息、市场工资指导价位信息和职业培训信息发布；\n（三）职业指导和职业介绍；\n（四）对就业困难人员实施就业援助；\n（五）办理就业登记、失业登记等事务；\n（六）其他公共就业服务。",
      "blankText": "公共就业服务机构应当免费为劳动者提供以下服务：\n（一）就业政策法规咨询；\n（二）职业供求信息、市场工资指导价位信息和职业培训信息发布；\n（三）职业指导和职业介绍；\n（四）对就业困难人员实施就业援助；\n（五）办理就业登记、失业登记等事务；\n（六）其他公共就业服务。"
    },
    {
      "id": 95,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 26,
      "text": "公共就业服务机构应当积极拓展服务功能，根据用人单位需求提供以下服务：\n（一）招聘用人指导服务；\n（二）代理招聘服务；\n（三）跨地区人员招聘服务；\n（四）企业人力资源管理咨询等专业性服务；\n（五）劳动保障事务代理服务；\n（六）为满足用人单位需求开发的其他就业服务项目。\n公共就业服务机构从事劳动保障事务代理业务，须经县级以上劳动保障行政部门批准。",
      "blankText": "公共就业服务机构应当积极拓展服务功能，根据用人单位需求提供以下服务：\n（一）招聘用人指导服务；\n（二）代理招聘服务；\n（三）跨地区人员招聘服务；\n（四）企业人力资源管理咨询等专业性服务；\n（五）劳动保障事务代理服务；\n（六）为满足用人单位需求开发的其他就业服务项目。\n公共就业服务机构从事劳动保障事务代理业务，须经县级以上劳动保障行政部门批准。"
    },
    {
      "id": 96,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 27,
      "text": "公共就业服务机构应当加强职业指导工作，配备专（兼）职职业指导工作人员，向劳动者和用人单位提供职业指导服务。\n职业指导工作人员经过专业资格培训并考核合格，获得相应的国家职业资格证书方可上岗。\n公共就业服务机构应当为职业指导工作提供相应的设施和条件，推动职业指导工作的开展，加强对职业指导工作的宣传。",
      "blankText": "公共就业服务机构应当加强职业指导工作，配备专（兼）职职业指导工作人员，向劳动者和用人单位提供职业指导服务。\n职业指导工作人员经过专业资格培训并考核合格，获得相应的国家职业资格证书方可上岗。\n公共就业服务机构应当为职业指导工作提供相应的设施和条件，推动职业指导工作的开展，加强对职业指导工作的宣传。"
    },
    {
      "id": 97,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 28,
      "text": "职业指导工作包括以下内容：\n（一）向劳动者和用人单位提供国家有关劳动保障的法律法规和政策、人力资源市场状况咨询；\n（二）帮助劳动者了解职业状况，掌握求职方法，确定择业方向，增强择业能力；\n（三）向劳动者提出培训建议，为其提供职业培训相关信息；\n（四）开展对劳动者个人职业素质和特点的测试，并对其职业能力进行评价；\n（五）对妇女、残疾人、少数民族人员及退出现役的军人等就业群体提供专门的职业指导服务；\n（六）对大中专学校、职业院校、技工学校学生的职业指导工作提供咨询和服务；\n（七）对准备从事个体劳动或开办私营企业的劳动者提供创业咨询服务；\n（八）为用人单位提供选择招聘方法、确定用人条件和标准等方面的招聘用人指导；\n（九）为职业培训机构确立培训方向和专业设置等提供咨询参考。",
      "blankText": "职业指导工作包括以下内容：\n（一）向劳动者和用人单位提供国家有关劳动保障的法律法规和政策、人力资源市场状况咨询；\n（二）帮助劳动者了解职业状况，掌握求职方法，确定择业方向，增强择业能力；\n（三）向劳动者提出培训建议，为其提供职业培训相关信息；\n（四）开展对劳动者个人职业素质和特点的测试，并对其职业能力进行评价；\n（五）对妇女、残疾人、少数民族人员及退出现役的军人等就业群体提供专门的职业指导服务；\n（六）对大中专学校、职业院校、技工学校学生的职业指导工作提供咨询和服务；\n（七）对准备从事个体劳动或开办私营企业的劳动者提供创业咨询服务；\n（八）为用人单位提供选择招聘方法、确定用人条件和标准等方面的招聘用人指导；\n（九）为职业培训机构确立培训方向和专业设置等提供咨询参考。"
    },
    {
      "id": 98,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 29,
      "text": "公共就业服务机构在劳动保障行政部门的指导下，组织实施劳动力资源调查和就业、失业状况统计工作。",
      "blankText": "公共就业服务机构在劳动保障行政部门的指导下，组织实施劳动力资源调查和就业、失业状况统计工作。"
    },
    {
      "id": 99,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 30,
      "text": "公共就业服务机构应当针对特定就业群体的不同需求，制定并组织实施专项计划。\n公共就业服务机构应当根据服务对象的特点，在一定时期内为不同类型的劳动者、就业困难对象或用人单位集中组织活动，开展专项服务。\n公共就业服务机构受劳动保障行政部门委托，可以组织开展促进就业的专项工作。",
      "blankText": "公共就业服务机构应当针对特定就业群体的不同需求，制定并组织实施专项计划。\n公共就业服务机构应当根据服务对象的特点，在一定时期内为不同类型的劳动者、就业困难对象或用人单位集中组织活动，开展专项服务。\n公共就业服务机构受劳动保障行政部门委托，可以组织开展促进就业的专项工作。"
    },
    {
      "id": 100,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 31,
      "text": "县级以上公共就业服务机构建立综合性服务场所，集中为劳动者和用人单位提供一站式就业服务，并承担劳动保障行政部门安排的其他工作。\n街道、乡镇、社区公共就业服务机构建立基层服务窗口，开展以就业援助为重点的公共就业服务，实施劳动力资源调查统计，并承担上级劳动保障行政部门安排的其他就业服务工作。\n公共就业服务机构使用全国统一标识。",
      "blankText": "县级以上公共就业服务机构建立综合性服务场所，集中为劳动者和用人单位提供一站式就业服务，并承担劳动保障行政部门安排的其他工作。\n街道、乡镇、社区公共就业服务机构建立基层服务窗口，开展以就业援助为重点的公共就业服务，实施劳动力资源调查统计，并承担上级劳动保障行政部门安排的其他就业服务工作。\n公共就业服务机构使用全国统一标识。"
    },
    {
      "id": 101,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 32,
      "text": "公共就业服务机构应当不断提高服务的质量和效率。\n公共就业服务机构应当加强内部管理，完善服务功能，统一服务流程，按照国家制定的服务规范和标准，为劳动者和用人单位提供优质高效的就业服务。\n公共就业服务机构应当加强工作人员的政策、业务和服务技能培训，组织职业指导人员、职业信息分析人员、劳动保障协理员等专业人员参加相应职业资格培训。\n公共就业服务机构应当公开服务制度，主动接受社会监督。",
      "blankText": "公共就业服务机构应当不断提高服务的质量和效率。\n公共就业服务机构应当加强内部管理，完善服务功能，统一服务流程，按照国家制定的服务规范和标准，为劳动者和用人单位提供优质高效的就业服务。\n公共就业服务机构应当加强工作人员的政策、业务和服务技能培训，组织职业指导人员、职业信息分析人员、劳动保障协理员等专业人员参加相应职业资格培训。\n公共就业服务机构应当公开服务制度，主动接受社会监督。"
    },
    {
      "id": 102,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 33,
      "text": "县级以上劳动保障行政部门和公共就业服务机构应当按照劳动保障信息化建设的统一规划、标准和规范，建立完善人力资源市场信息网络及相关设施。\n公共就业服务机构应当逐步实行信息化管理与服务，在城市内实现就业服务、失业保险、就业培训信息共享和公共就业服务全程信息化管理，并逐步实现与劳动工资信息、社会保险信息的互联互通和信息共享。",
      "blankText": "县级以上劳动保障行政部门和公共就业服务机构应当按照劳动保障信息化建设的统一规划、标准和规范，建立完善人力资源市场信息网络及相关设施。\n公共就业服务机构应当逐步实行信息化管理与服务，在城市内实现就业服务、失业保险、就业培训信息共享和公共就业服务全程信息化管理，并逐步实现与劳动工资信息、社会保险信息的互联互通和信息共享。"
    },
    {
      "id": 103,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 34,
      "text": "公共就业服务机构应当建立健全人力资源市场信息服务体系，完善职业供求信息、市场工资指导价位信息、职业培训信息、人力资源市场分析信息的发布制度，为劳动者求职择业、用人单位招用人员以及培训机构开展培训提供支持。",
      "blankText": "公共就业服务机构应当建立健全人力资源市场信息服务体系，完善职业供求信息、市场工资指导价位信息、职业培训信息、人力资源市场分析信息的发布制度，为劳动者求职择业、用人单位招用人员以及培训机构开展培训提供支持。"
    },
    {
      "id": 104,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 35,
      "text": "县级以上劳动保障行政部门应当按照信息化建设统一要求，逐步实现全国人力资源市场信息联网。其中，城市应当按照劳动保障数据中心建设的要求，实现网络和数据资源的集中和共享；省、自治区应当建立人力资源市场信息网省级监测中心，对辖区内人力资源市场信息进行监测；劳动保障部设立人力资源市场信息网全国监测中心，对全国人力资源市场信息进行监测和分析。",
      "blankText": "县级以上劳动保障行政部门应当按照信息化建设统一要求，逐步实现全国人力资源市场信息联网。其中，城市应当按照劳动保障数据中心建设的要求，实现网络和数据资源的集中和共享；省、自治区应当建立人力资源市场信息网省级监测中心，对辖区内人力资源市场信息进行监测；劳动保障部设立人力资源市场信息网全国监测中心，对全国人力资源市场信息进行监测和分析。"
    },
    {
      "id": 105,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 36,
      "text": "县级以上劳动保障行政部门应当对公共就业服务机构加强管理，定期对其完成各项任务情况进行绩效考核。",
      "blankText": "县级以上劳动保障行政部门应当对公共就业服务机构加强管理，定期对其完成各项任务情况进行绩效考核。"
    },
    {
      "id": 106,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 37,
      "text": "公共就业服务经费纳入同级财政预算。各级劳动保障行政部门和公共就业服务机构应当根据财政预算编制的规定，依法编制公共就业服务年度预算，报经同级财政部门审批后执行。\n公共就业服务机构可以按照就业专项资金管理相关规定，依法申请公共就业服务专项扶持经费。\n公共就业服务机构接受社会各界提供的捐赠和资助，按照国家有关法律法规管理和使用。\n公共就业服务机构为用人单位提供的服务，应当规范管理，严格控制服务收费。确需收费的，具体项目由省级劳动保障行政部门会同相关部门规定。",
      "blankText": "公共就业服务经费纳入同级财政预算。各级劳动保障行政部门和公共就业服务机构应当根据财政预算编制的规定，依法编制公共就业服务年度预算，报经同级财政部门审批后执行。\n公共就业服务机构可以按照就业专项资金管理相关规定，依法申请公共就业服务专项扶持经费。\n公共就业服务机构接受社会各界提供的捐赠和资助，按照国家有关法律法规管理和使用。\n公共就业服务机构为用人单位提供的服务，应当规范管理，严格控制服务收费。确需收费的，具体项目由省级劳动保障行政部门会同相关部门规定。"
    },
    {
      "id": 107,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 38,
      "text": "公共就业服务机构不得从事经营性活动。\n公共就业服务机构举办的招聘会，不得向劳动者收取费用。",
      "blankText": "公共就业服务机构不得从事经营性活动。\n公共就业服务机构举办的招聘会，不得向劳动者收取费用。"
    },
    {
      "id": 108,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 39,
      "text": "各级残疾人联合会所属的残疾人就业服务机构是公共就业服务机构的组成部分，负责为残疾劳动者提供相关就业服务，并经劳动保障行政部门委托，承担残疾劳动者的就业登记、失业登记工作。",
      "blankText": "各级残疾人联合会所属的残疾人就业服务机构是公共就业服务机构的组成部分，负责为残疾劳动者提供相关就业服务，并经劳动保障行政部门委托，承担残疾劳动者的就业登记、失业登记工作。"
    },
    {
      "id": 109,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 40,
      "text": "公共就业服务机构应当制定专门的就业援助计划，对就业援助对象实施优先扶持和重点帮助。\n本规定所称就业援助对象包括就业困难人员和零就业家庭。就业困难对象是指因身体状况、技能水平、家庭因素、失去土地等原因难以实现就业，以及连续失业一定时间仍未能实现就业的人员。零就业家庭是指法定劳动年龄内的家庭人员均处于失业状况的城市居民家庭。\n对援助对象的认定办法，由省级劳动保障行政部门依据当地人民政府规定的就业援助对象范围制定。",
      "blankText": "公共就业服务机构应当制定专门的就业援助计划，对就业援助对象实施优先扶持和重点帮助。\n本规定所称就业援助对象包括就业困难人员和零就业家庭。就业困难对象是指因身体状况、技能水平、家庭因素、失去土地等原因难以实现就业，以及连续失业一定时间仍未能实现就业的人员。零就业家庭是指法定劳动年龄内的家庭人员均处于失业状况的城市居民家庭。\n对援助对象的认定办法，由省级劳动保障行政部门依据当地人民政府规定的就业援助对象范围制定。"
    },
    {
      "id": 110,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 41,
      "text": "就业困难人员和零就业家庭可以向所在地街道、社区公共就业服务机构申请就业援助。经街道、社区公共就业服务机构确认属实的，纳入就业援助范围。",
      "blankText": "就业困难人员和零就业家庭可以向所在地街道、社区公共就业服务机构申请就业援助。经街道、社区公共就业服务机构确认属实的，纳入就业援助范围。"
    },
    {
      "id": 111,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 42,
      "text": "公共就业服务机构应当建立就业困难人员帮扶制度，通过落实各项就业扶持政策、提供就业岗位信息、组织技能培训等有针对性的就业服务和公益性岗位援助，对就业困难人员实施优先扶持和重点帮助。\n在公益性岗位上安置的就业困难人员，按照国家规定给予岗位补贴。",
      "blankText": "公共就业服务机构应当建立就业困难人员帮扶制度，通过落实各项就业扶持政策、提供就业岗位信息、组织技能培训等有针对性的就业服务和公益性岗位援助，对就业困难人员实施优先扶持和重点帮助。\n在公益性岗位上安置的就业困难人员，按照国家规定给予岗位补贴。"
    },
    {
      "id": 112,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 43,
      "text": "公共就业服务机构应当建立零就业家庭即时岗位援助制度，通过拓宽公益性岗位范围，开发各类就业岗位等措施，及时向零就业家庭中的失业人员提供适当的就业岗位，确保零就业家庭至少有一人实现就业。",
      "blankText": "公共就业服务机构应当建立零就业家庭即时岗位援助制度，通过拓宽公益性岗位范围，开发各类就业岗位等措施，及时向零就业家庭中的失业人员提供适当的就业岗位，确保零就业家庭至少有一人实现就业。"
    },
    {
      "id": 113,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 44,
      "text": "街道、社区公共就业服务机构应当对辖区内就业援助对象进行登记，建立专门台账，实行就业援助对象动态管理和援助责任制度，提供及时、有效的就业援助。",
      "blankText": "街道、社区公共就业服务机构应当对辖区内就业援助对象进行登记，建立专门台账，实行就业援助对象动态管理和援助责任制度，提供及时、有效的就业援助。"
    },
    {
      "id": 114,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 45,
      "text": "县级以上劳动保障行政部门应当加强对职业中介机构的管理，鼓励其提高服务质量，发挥其在促进就业中的作用。\n本规定所称职业中介机构，是指由法人、其他组织和公民个人举办，为用人单位招用人员和劳动者求职提供中介服务以及其他相关服务的经营性组织。\n政府部门不得举办或者与他人联合举办经营性的职业中介机构。",
      "blankText": "县级以上劳动保障行政部门应当加强对职业中介机构的管理，鼓励其提高服务质量，发挥其在促进就业中的作用。\n本规定所称职业中介机构，是指由法人、其他组织和公民个人举办，为用人单位招用人员和劳动者求职提供中介服务以及其他相关服务的经营性组织。\n政府部门不得举办或者与他人联合举办经营性的职业中介机构。"
    },
    {
      "id": 115,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 46,
      "text": "从事职业中介活动，应当遵循合法、诚实信用、公平、公开的原则。\n禁止任何组织或者个人利用职业中介活动侵害劳动者和用人单位的合法权益。",
      "blankText": "从事职业中介活动，应当遵循合法、诚实信用、公平、公开的原则。\n禁止任何组织或者个人利用职业中介活动侵害劳动者和用人单位的合法权益。"
    },
    {
      "id": 116,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 47,
      "text": "职业中介实行行政许可制度。设立职业中介机构或其他机构开展职业中介活动，须经劳动保障行政部门批准，并获得职业中介许可证。\n未经依法许可和登记的机构，不得从事职业中介活动。\n职业中介许可证由劳动保障部统一印制并加盖省级劳动保障行政部门印章。",
      "blankText": "职业中介实行行政许可制度。设立职业中介机构或其他机构开展职业中介活动，须经劳动保障行政部门批准，并获得职业中介许可证。\n未经依法许可和登记的机构，不得从事职业中介活动。\n职业中介许可证由劳动保障部统一印制并加盖省级劳动保障行政部门印章。"
    },
    {
      "id": 117,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 48,
      "text": "设立职业中介机构应当具备下列条件：\n（一）有明确的机构章程和管理制度；\n（二）有开展业务必备的固定场所、办公设施和一定数额的开办资金；\n（三）有一定数量具备相应职业资格的专职工作人员；\n（四）法律、法规规定的其他条件。",
      "blankText": "设立职业中介机构应当具备下列条件：\n（一）有明确的机构章程和管理制度；\n（二）有开展业务必备的固定场所、办公设施和一定数额的开办资金；\n（三）有一定数量具备相应职业资格的专职工作人员；\n（四）法律、法规规定的其他条件。"
    },
    {
      "id": 118,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 49,
      "text": "设立职业中介机构，应当向当地县级以上劳动保障行政部门提出申请，提交下列文件：\n（一）设立申请书；\n（二）机构章程和管理制度草案；\n（三）场所使用权证明；\n（四）注册资本（金）验资报告；\n（五）拟任负责人的基本情况、身份证明；\n（六）具备相应职业资格的专职工作人员的相关证明；\n（七）法律、法规规定的其他文件。",
      "blankText": "设立职业中介机构，应当向当地县级以上劳动保障行政部门提出申请，提交下列文件：\n（一）设立申请书；\n（二）机构章程和管理制度草案；\n（三）场所使用权证明；\n（四）注册资本（金）验资报告；\n（五）拟任负责人的基本情况、身份证明；\n（六）具备相应职业资格的专职工作人员的相关证明；\n（七）法律、法规规定的其他文件。"
    },
    {
      "id": 119,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 50,
      "text": "劳动保障行政部门接到设立职业中介机构的申请后，应当自受理申请之日起20日内审理完毕。对符合条件的，应当予以批准；不予批准的，应当说明理由。\n劳动保障行政部门对经批准设立的职业中介机构实行年度审验。\n职业中介机构的具体设立条件、审批和年度审验程序，由省级劳动保障行政部门统一规定。",
      "blankText": "劳动保障行政部门接到设立职业中介机构的申请后，应当自受理申请之日起______日内审理完毕。对符合条件的，应当予以批准；不予批准的，应当说明理由。\n劳动保障行政部门对经批准设立的职业中介机构实行年度审验。\n职业中介机构的具体设立条件、审批和年度审验程序，由省级劳动保障行政部门统一规定。"
    },
    {
      "id": 120,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 51,
      "text": "职业中介机构变更名称、住所、法定代表人等或者终止的，应当按照设立许可程序办理变更或者注销登记手续。\n设立分支机构的，应当在征得原审批机关的书面同意后，由拟设立分支机构所在地县级以上劳动保障行政部门审批。",
      "blankText": "职业中介机构变更名称、住所、法定代表人等或者终止的，应当按照设立许可程序办理变更或者注销登记手续。\n设立分支机构的，应当在征得原审批机关的书面同意后，由拟设立分支机构所在地县级以上劳动保障行政部门审批。"
    },
    {
      "id": 121,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 52,
      "text": "职业中介机构可以从事下列业务：\n（一）为劳动者介绍用人单位；\n（二）为用人单位和居民家庭推荐劳动者；\n（三）开展职业指导、人力资源管理咨询服务；\n（四）收集和发布职业供求信息；\n（五）根据国家有关规定从事互联网职业信息服务；\n（六）组织职业招聘洽谈会；\n（七）经劳动保障行政部门核准的其他服务项目。",
      "blankText": "职业中介机构可以从事下列业务：\n（一）为劳动者介绍用人单位；\n（二）为用人单位和居民家庭推荐劳动者；\n（三）开展职业指导、人力资源管理咨询服务；\n（四）收集和发布职业供求信息；\n（五）根据国家有关规定从事互联网职业信息服务；\n（六）组织职业招聘洽谈会；\n（七）经劳动保障行政部门核准的其他服务项目。"
    },
    {
      "id": 122,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 53,
      "text": "职业中介机构应当在服务场所明示营业执照、职业中介许可证、服务项目、收费标准、监督机关名称和监督电话等，并接受劳动保障行政部门及其他有关部门的监督检查。",
      "blankText": "职业中介机构应当在服务场所明示营业执照、职业中介许可证、服务项目、收费标准、监督机关名称和监督电话等，并接受劳动保障行政部门及其他有关部门的监督检查。"
    },
    {
      "id": 123,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 54,
      "text": "职业中介机构应当建立服务台账，记录服务对象、服务过程、服务结果和收费情况等，并接受劳动保障行政部门的监督检查。",
      "blankText": "职业中介机构应当建立服务台账，记录服务对象、服务过程、服务结果和收费情况等，并接受劳动保障行政部门的监督检查。"
    },
    {
      "id": 124,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 55,
      "text": "职业中介机构提供职业中介服务不成功的，应当退还向劳动者收取的中介服务费。",
      "blankText": "职业中介机构提供职业中介服务不成功的，应当退还向劳动者收取的中介服务费。"
    },
    {
      "id": 125,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 56,
      "text": "职业中介机构租用场地举办大规模职业招聘洽谈会，应当制定相应的组织实施办法和安全保卫工作方案，并向批准其设立的机关报告。\n职业中介机构应当对入场招聘用人单位的主体资格真实性和招用人员简章真实性进行核实。",
      "blankText": "职业中介机构租用场地举办大规模职业招聘洽谈会，应当制定相应的组织实施办法和安全保卫工作方案，并向批准其设立的机关报告。\n职业中介机构应当对入场招聘用人单位的主体资格真实性和招用人员简章真实性进行核实。"
    },
    {
      "id": 126,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 57,
      "text": "职业中介机构不得有下列行为：\n（一）提供虚假就业信息；\n（二）发布的就业信息中包含歧视性内容；\n（三）伪造、涂改、转让职业中介许可证；\n（四）为无合法证照的用人单位提供职业中介服务；\n（五）介绍未满16周岁的未成年人就业；\n（六）为无合法身份证件的劳动者提供职业中介服务；\n（七）介绍劳动者从事法律、法规禁止从事的职业；\n（八）扣押劳动者的居民身份证和其他证件，或者向劳动者收取押金；\n（九）以暴力、胁迫、欺诈等方式进行职业中介活动；\n（十）超出核准的业务范围经营；\n（十一）其他违反法律、法规规定的行为。",
      "blankText": "职业中介机构不得有下列行为：\n（一）提供虚假就业信息；\n（二）发布的就业信息中包含歧视性内容；\n（三）伪造、涂改、转让职业中介许可证；\n（四）为无合法证照的用人单位提供职业中介服务；\n（五）介绍未满______周岁的未成年人就业；\n（六）为无合法身份证件的劳动者提供职业中介服务；\n（七）介绍劳动者从事法律、法规禁止从事的职业；\n（八）扣押劳动者的居民身份证和其他证件，或者向劳动者收取押金；\n（九）以暴力、胁迫、欺诈等方式进行职业中介活动；\n（十）超出核准的业务范围经营；\n（十一）其他违反法律、法规规定的行为。"
    },
    {
      "id": 127,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 58,
      "text": "县级以上劳动保障行政部门应当建立健全职业中介机构诚信档案和"黑名单"制度，依法向社会公布职业中介机构的信用信息。",
      "blankText": "县级以上劳动保障行政部门应当建立健全职业中介机构诚信档案和"黑名单"制度，依法向社会公布职业中介机构的信用信息。"
    },
    {
      "id": 128,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 59,
      "text": "县级以上劳动保障行政部门应当依法对经审批设立的职业中介机构进行监督检查。劳动保障行政部门应当加强对职业中介机构实施就业歧视、超出核准的业务经营范围、提供虚假就业信息等违规行为的监督检查。\n劳动保障行政部门应当公布举报投诉电话，依法受理对职业中介机构的举报投诉。",
      "blankText": "县级以上劳动保障行政部门应当依法对经审批设立的职业中介机构进行监督检查。劳动保障行政部门应当加强对职业中介机构实施就业歧视、超出核准的业务经营范围、提供虚假就业信息等违规行为的监督检查。\n劳动保障行政部门应当公布举报投诉电话，依法受理对职业中介机构的举报投诉。"
    },
    {
      "id": 129,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 60,
      "text": "劳动保障行政部门应当对职业中介机构实行信用等级评定制度。具体办法由省级劳动保障行政部门制定。",
      "blankText": "劳动保障行政部门应当对职业中介机构实行信用等级评定制度。具体办法由省级劳动保障行政部门制定。"
    },
    {
      "id": 130,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 62,
      "text": "劳动保障行政部门工作人员有下列情形之一的，依法给予行政处分；构成犯罪的，依法追究刑事责任：\n（一）对符合设立职业中介机构条件的申请人不予批准或者对不符合条件的申请人予以批准的；\n（二）不履行监督职责或者监督不力，造成严重后果的；\n（三）其他滥用职权、玩忽职守、徇私舞弊的行为。",
      "blankText": "劳动保障行政部门工作人员有下列情形之一的，依法给予行政处分；构成犯罪的，依法追究刑事责任：\n（一）对符合设立职业中介机构条件的申请人不予批准或者对不符合条件的申请人予以批准的；\n（二）不履行监督职责或者监督不力，造成严重后果的；\n（三）其他滥用职权、玩忽职守、徇私舞弊的行为。"
    },
    {
      "id": 131,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 63,
      "text": "劳动者被用人单位招用的，由用人单位为劳动者办理就业登记。用人单位招用劳动者和与劳动者终止或者解除劳动关系，应当到当地公共就业服务机构备案，为劳动者办理就业登记手续。用人单位招用人员后，应当于录用之日起30日内办理登记手续；用人单位与职工终止或者解除劳动关系后，应当于15日内办理登记手续。\n劳动者从事个体经营或灵活就业的，由本人在街道、乡镇公共就业服务机构办理就业登记。\n就业登记的内容主要包括劳动者个人信息、就业类型、就业时间、就业单位以及订立、终止或者解除劳动合同情况等。就业登记的具体内容和所需材料由省级劳动保障行政部门规定。\n公共就业服务机构应当对用人单位办理就业登记及相关手续设立专门服务窗口，简化程序，方便用人单位办理。",
      "blankText": "劳动者被用人单位招用的，由用人单位为劳动者办理就业登记。用人单位招用劳动者和与劳动者终止或者解除劳动关系，应当到当地公共就业服务机构备案，为劳动者办理就业登记手续。用人单位招用人员后，应当于录用之日起______日内办理登记手续；用人单位与职工终止或者解除劳动关系后，应当于______日内办理登记手续。\n劳动者从事个体经营或灵活就业的，由本人在街道、乡镇公共就业服务机构办理就业登记。\n就业登记的内容主要包括劳动者个人信息、就业类型、就业时间、就业单位以及订立、终止或者解除劳动合同情况等。就业登记的具体内容和所需材料由省级劳动保障行政部门规定。\n公共就业服务机构应当对用人单位办理就业登记及相关手续设立专门服务窗口，简化程序，方便用人单位办理。"
    },
    {
      "id": 132,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 64,
      "text": "在法定劳动年龄内，有劳动能力，有就业要求，处于无业状态的城镇常住人员，可以到常住地的公共就业服务机构进行失业登记。",
      "blankText": "在法定劳动年龄内，有劳动能力，有就业要求，处于无业状态的城镇常住人员，可以到常住地的公共就业服务机构进行失业登记。"
    },
    {
      "id": 133,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 65,
      "text": "劳动者进行失业登记时，须持本人身份证件和证明原身份的有关证明；有单位就业经历的，还须持与原单位终止、解除劳动关系或者解聘的证明。\n登记失业人员凭登记证享受公共就业服务和就业扶持政策；其中符合条件的，按规定申领失业保险金。\n登记失业人员应当定期向公共就业服务机构报告就业失业状况，积极求职，参加公共就业服务机构安排的就业培训。",
      "blankText": "劳动者进行失业登记时，须持本人身份证件和证明原身份的有关证明；有单位就业经历的，还须持与原单位终止、解除劳动关系或者解聘的证明。\n登记失业人员凭登记证享受公共就业服务和就业扶持政策；其中符合条件的，按规定申领失业保险金。\n登记失业人员应当定期向公共就业服务机构报告就业失业状况，积极求职，参加公共就业服务机构安排的就业培训。"
    },
    {
      "id": 134,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 66,
      "text": "登记失业人员出现下列情形之一的，由公共就业服务机构注销其失业登记：\n（一）被用人单位录用的；\n（二）从事个体经营或创办企业，并领取工商营业执照的；\n（三）已从事有稳定收入的劳动，并且月收入不低于当地最低工资标准的；\n（四）已享受基本养老保险待遇的；\n（五）完全丧失劳动能力的；\n（六）入学、服兵役、移居境外的；\n（七）被判刑收监执行或被劳动教养的；\n（八）终止就业要求或拒绝接受公共就业服务的；\n（九）连续6个月未与公共就业服务机构联系的；\n（十）已进行就业登记的其他人员或各省、自治区、直辖市规定的其他情形。",
      "blankText": "登记失业人员出现下列情形之一的，由公共就业服务机构注销其失业登记：\n（一）被用人单位录用的；\n（二）从事个体经营或创办企业，并领取工商营业执照的；\n（三）已从事有稳定收入的劳动，并且月收入不低于当地最低工资标准的；\n（四）已享受基本养老保险待遇的；\n（五）完全丧失劳动能力的；\n（六）入学、服兵役、移居境外的；\n（七）被判刑收监执行或被劳动教养的；\n（八）终止就业要求或拒绝接受公共就业服务的；\n（九）连续______个月未与公共就业服务机构联系的；\n（十）已进行就业登记的其他人员或各省、自治区、直辖市规定的其他情形。"
    },
    {
      "id": 135,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 67,
      "text": "用人单位违反本规定第十四条第（二）、（三）项规定的，按照劳动合同法第八十四条的规定予以处罚；用人单位违反第十四条第（四）项规定的，按照国家禁止使用童工和其他有关法律、法规的规定予以处罚。用人单位违反第十四条第（一）、（五）、（六）项规定的，由劳动保障行政部门责令改正，并可处以一千元以下的罚款；对当事人造成损害的，应当承担赔偿责任。",
      "blankText": "用人单位违反本规定第十四条第（二）、（三）项规定的，按照劳动合同法第八十四条的规定予以处罚；用人单位违反第十四条第（四）项规定的，按照国家禁止使用童工和其他有关法律、法规的规定予以处罚。用人单位违反第十四条第（一）、（五）、（六）项规定的，由劳动保障行政部门责令改正，并可处以一千元以下的罚款；对当事人造成损害的，应当承担赔偿责任。"
    },
    {
      "id": 136,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 68,
      "text": "用人单位违反本规定第十九条第二款规定，在国家法律、行政法规和国务院卫生行政部门规定禁止乙肝病原携带者从事的工作岗位以外招用人员时，将乙肝病毒血清学指标作为体检标准的，由劳动保障行政部门责令改正，并可处以一千元以下的罚款；对当事人造成损害的，应当承担赔偿责任。",
      "blankText": "用人单位违反本规定第十九条第二款规定，在国家法律、行政法规和国务院卫生行政部门规定禁止乙肝病原携带者从事的工作岗位以外招用人员时，将乙肝病毒血清学指标作为体检标准的，由劳动保障行政部门责令改正，并可处以一千元以下的罚款；对当事人造成损害的，应当承担赔偿责任。"
    },
    {
      "id": 137,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 69,
      "text": "违反本规定第三十八条规定，公共就业服务机构从事经营性职业中介活动向劳动者收取费用的，由劳动保障行政部门责令限期改正，将违法收取的费用退还劳动者，并对直接负责的主管人员和其他直接责任人员依法给予处分。",
      "blankText": "违反本规定第三十八条规定，公共就业服务机构从事经营性职业中介活动向劳动者收取费用的，由劳动保障行政部门责令限期改正，将违法收取的费用退还劳动者，并对直接负责的主管人员和其他直接责任人员依法给予处分。"
    },
    {
      "id": 138,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 70,
      "text": "违反本规定第四十七条规定，未经许可和登记，擅自从事职业中介活动的，由劳动保障行政部门或者其他主管部门按照就业促进法第六十四条规定予以处罚。",
      "blankText": "违反本规定第四十七条规定，未经许可和登记，擅自从事职业中介活动的，由劳动保障行政部门或者其他主管部门按照就业促进法第六十四条规定予以处罚。"
    },
    {
      "id": 139,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 71,
      "text": "职业中介机构违反本规定第五十三条规定，未明示职业中介许可证、监督电话的，由劳动保障行政部门责令改正，并可处以一千元以下的罚款；未明示收费标准的，提请价格主管部门依据国家有关规定处罚；未明示营业执照的，提请工商行政管理部门依据国家有关规定处罚。",
      "blankText": "职业中介机构违反本规定第五十三条规定，未明示职业中介许可证、监督电话的，由劳动保障行政部门责令改正，并可处以一千元以下的罚款；未明示收费标准的，提请价格主管部门依据国家有关规定处罚；未明示营业执照的，提请工商行政管理部门依据国家有关规定处罚。"
    },
    {
      "id": 140,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 72,
      "text": "职业中介机构违反本规定第五十四条规定，未建立服务台账，或虽建立服务台账但未记录服务对象、服务过程、服务结果和收费情况的，由劳动保障行政部门责令改正，并可处以一千元以下的罚款。",
      "blankText": "职业中介机构违反本规定第五十四条规定，未建立服务台账，或虽建立服务台账但未记录服务对象、服务过程、服务结果和收费情况的，由劳动保障行政部门责令改正，并可处以一千元以下的罚款。"
    },
    {
      "id": 141,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 73,
      "text": "职业中介机构违反本规定第五十五条规定，在职业中介服务不成功后未向劳动者退还所收取的中介服务费的，由劳动保障行政部门责令改正，并可处以一千元以下的罚款。",
      "blankText": "职业中介机构违反本规定第五十五条规定，在职业中介服务不成功后未向劳动者退还所收取的中介服务费的，由劳动保障行政部门责令改正，并可处以一千元以下的罚款。"
    },
    {
      "id": 142,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 74,
      "text": "职业中介机构违反本规定第五十八条第（一）、（三）、（四）、（八）项规定的，按照就业促进法第六十五条、第六十六条规定予以处罚。违反本规定第五十八条第（五）项规定的，按照国家禁止使用童工的规定予以处罚。违反本规定第五十八条其他各项规定的，由劳动保障行政部门责令改正，没有违法所得的，可处以一万元以下的罚款；有违法所得的，可处以不超过违法所得三倍的罚款，但最高不得超过三万元；情节严重的，提请工商部门依法吊销营业执照；对当事人造成损害的，应当承担赔偿责任。",
      "blankText": "职业中介机构违反本规定第五十八条第（一）、（三）、（四）、（八）项规定的，按照就业促进法第六十五条、第六十六条规定予以处罚。违反本规定第五十八条第（五）项规定的，按照国家禁止使用童工的规定予以处罚。违反本规定第五十八条其他各项规定的，由劳动保障行政部门责令改正，没有违法所得的，可处以一万元以下的罚款；有违法所得的，可处以不超过违法所得三倍的罚款，但最高不得超过三万元；情节严重的，提请工商部门依法吊销营业执照；对当事人造成损害的，应当承担赔偿责任。"
    },
    {
      "id": 143,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 75,
      "text": "用人单位违反本规定第六十二条规定，未及时为劳动者办理就业登记手续的，由劳动保障行政部门责令改正，并可处以一千元以下的罚款。",
      "blankText": "用人单位违反本规定第六十二条规定，未及时为劳动者办理就业登记手续的，由劳动保障行政部门责令改正，并可处以一千元以下的罚款。"
    },
    {
      "id": 144,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 76,
      "text": "省、自治区、直辖市劳动保障行政部门可以根据本规定制定实施细则。",
      "blankText": "省、自治区、直辖市劳动保障行政部门可以根据本规定制定实施细则。"
    },
    {
      "id": 145,
      "category": "就业促进",
      "law": "就业服务与就业管理规定",
      "articleNum": 77,
      "text": "本规定自2008年1月1日起施行。劳动部1994年10月27日颁布的《职业指导办法》、劳动和社会保障部2000年12月8日颁布的《劳动力市场管理规定》同时废止。",
      "blankText": "本规定自______年______月______日起施行。劳动部______年______月______日颁布的《职业指导办法》、劳动和社会保障部______年______月______日颁布的《劳动力市场管理规定》同时废止。"
    },
    {
      "id": 1,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 1,
      "text": "为了加强安全生产工作，防止和减少生产安全事故，保障人民群众生命和财产安全，促进经济社会持续健康发展，制定本法。",
      "blankText": "为了加强安全生产工作，防止和减少生产安全事故，保障人民群众生命和财产安全，促进经济社会持续健康发展，制定本法。"
    },
    {
      "id": 2,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 2,
      "text": "在中华人民共和国领域内从事生产经营活动的单位（以下统称生产经营单位）的安全生产，适用本法；有关法律、行政法规对消防安全和道路交通安全、铁路交通安全、水上交通安全、民用航空安全以及核与辐射安全、特种设备安全另有规定的，适用其规定。",
      "blankText": "在中华人民共和国领域内从事生产经营活动的单位（以下统称生产经营单位）的安全生产，适用本法；有关法律、行政法规对消防安全和道路交通安全、铁路交通安全、水上交通安全、民用航空安全以及核与辐射安全、特种设备安全另有规定的，适用其规定。"
    },
    {
      "id": 3,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 3,
      "text": "安全生产工作坚持中国共产党的领导。\n安全生产工作应当以人为本，坚持人民至上、生命至上，把保护人民生命安全摆在首位，树牢安全发展理念，坚持安全第一、预防为主、综合治理的方针，从源头上防范化解重大安全风险。\n安全生产工作实行管行业必须管安全、管业务必须管安全、管生产经营必须管安全，强化和落实生产经营单位主体责任与政府监管责任，建立生产经营单位负责、职工参与、政府监管、行业自律和社会监督的机制。",
      "blankText": "安全生产工作坚持中国共产党的领导。\n安全生产工作应当以人为本，坚持人民至上、生命至上，把保护人民生命安全摆在首位，树牢安全发展理念，坚持安全第一、预防为主、综合治理的方针，从源头上防范化解重大安全风险。\n安全生产工作实行管行业必须管安全、管业务必须管安全、管生产经营必须管安全，强化和落实生产经营单位主体责任与政府监管责任，建立生产经营单位负责、职工参与、政府监管、行业自律和社会监督的机制。"
    },
    {
      "id": 4,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 4,
      "text": "生产经营单位必须遵守本法和其他有关安全生产的法律、法规，加强安全生产管理，建立健全全员安全生产责任制和安全生产规章制度，加大对安全生产资金、物资、技术、人员的投入保障力度，改善安全生产条件，加强安全生产标准化、信息化建设，构建安全风险分级管控和隐患排查治理双重预防机制，健全风险防范化解机制，提高安全生产水平，确保安全生产。\n平台经济等新兴行业、领域的生产经营单位应当根据本行业、领域的特点，建立健全并落实全员安全生产责任制，加强从业人员安全生产教育和培训，履行本法和其他法律、法规规定的有关安全生产义务。",
      "blankText": "生产经营单位必须遵守本法和其他有关安全生产的法律、法规，加强安全生产管理，建立健全全员安全生产责任制和安全生产规章制度，加大对安全生产资金、物资、技术、人员的投入保障力度，改善安全生产条件，加强安全生产标准化、信息化建设，构建安全风险分级管控和隐患排查治理双重预防机制，健全风险防范化解机制，提高安全生产水平，确保安全生产。\n平台经济等新兴行业、领域的生产经营单位应当根据本行业、领域的特点，建立健全并落实全员安全生产责任制，加强从业人员安全生产教育和培训，履行本法和其他法律、法规规定的有关安全生产义务。"
    },
    {
      "id": 5,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 5,
      "text": "生产经营单位的主要负责人是本单位安全生产第一责任人，对本单位的安全生产工作全面负责。其他负责人对职责范围内的安全生产工作负责。",
      "blankText": "生产经营单位的主要负责人是本单位安全生产第一责任人，对本单位的安全生产工作全面负责。其他负责人对职责范围内的安全生产工作负责。"
    },
    {
      "id": 6,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 6,
      "text": "生产经营单位的从业人员有依法获得安全生产保障的权利，并应当依法履行安全生产方面的义务。",
      "blankText": "生产经营单位的从业人员有依法获得安全生产保障的权利，并应当依法履行安全生产方面的义务。"
    },
    {
      "id": 7,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 7,
      "text": "工会依法对安全生产工作进行监督。\n生产经营单位的工会依法组织职工参加本单位安全生产工作的民主管理和民主监督，维护职工在安全生产方面的合法权益。生产经营单位制定或者修改有关安全生产的规章制度，应当听取工会的意见。",
      "blankText": "工会依法对安全生产工作进行监督。\n生产经营单位的工会依法组织职工参加本单位安全生产工作的民主管理和民主监督，维护职工在安全生产方面的合法权益。生产经营单位制定或者修改有关安全生产的规章制度，应当听取工会的意见。"
    },
    {
      "id": 8,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 8,
      "text": "国务院和县级以上地方各级人民政府应当根据国民经济和社会发展规划制定安全生产规划，并组织实施。安全生产规划应当与国土空间规划等相关规划相衔接。\n各级人民政府应当加强安全生产基础设施建设和安全生产监管能力建设，所需经费列入本级预算。\n县级以上地方各级人民政府应当组织有关部门建立完善安全风险评估与论证机制，按照安全风险管控要求，进行产业规划和空间布局，并对位置相邻、行业相近、业态相似的生产经营单位实施重大安全风险联防联控。",
      "blankText": "国务院和县级以上地方各级人民政府应当根据国民经济和社会发展规划制定安全生产规划，并组织实施。安全生产规划应当与国土空间规划等相关规划相衔接。\n各级人民政府应当加强安全生产基础设施建设和安全生产监管能力建设，所需经费列入本级预算。\n县级以上地方各级人民政府应当组织有关部门建立完善安全风险评估与论证机制，按照安全风险管控要求，进行产业规划和空间布局，并对位置相邻、行业相近、业态相似的生产经营单位实施重大安全风险联防联控。"
    },
    {
      "id": 9,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 9,
      "text": "国务院和县级以上地方各级人民政府应当加强对安全生产工作的领导，建立健全安全生产工作协调机制，支持、督促各有关部门依法履行安全生产监督管理职责，及时协调、解决安全生产监督管理中存在的重大问题。\n乡镇人民政府和街道办事处，以及开发区、工业园区、港区、风景区等应当明确负责安全生产监督管理的有关工作机构及其职责，加强安全生产监管力量建设，按照职责对本行政区域或者管理区域内生产经营单位安全生产状况进行监督检查，协助人民政府有关部门或者按照授权依法履行安全生产监督管理职责。",
      "blankText": "国务院和县级以上地方各级人民政府应当加强对安全生产工作的领导，建立健全安全生产工作协调机制，支持、督促各有关部门依法履行安全生产监督管理职责，及时协调、解决安全生产监督管理中存在的重大问题。\n乡镇人民政府和街道办事处，以及开发区、工业园区、港区、风景区等应当明确负责安全生产监督管理的有关工作机构及其职责，加强安全生产监管力量建设，按照职责对本行政区域或者管理区域内生产经营单位安全生产状况进行监督检查，协助人民政府有关部门或者按照授权依法履行安全生产监督管理职责。"
    },
    {
      "id": 10,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 10,
      "text": "国务院应急管理部门依照本法，对全国安全生产工作实施综合监督管理；县级以上地方各级人民政府应急管理部门依照本法，对本行政区域内安全生产工作实施综合监督管理。\n国务院交通运输、住房和城乡建设、水利、民航等有关部门依照本法和其他有关法律、行政法规的规定，在各自的职责范围内对有关行业、领域的安全生产工作实施监督管理；县级以上地方各级人民政府有关部门依照本法和其他有关法律、法规的规定，在各自的职责范围内对有关行业、领域的安全生产工作实施监督管理。对新兴行业、领域的安全生产监督管理职责不明确的，由县级以上地方各级人民政府按照业务相近的原则确定监督管理部门。\n应急管理部门和对有关行业、领域的安全生产工作实施监督管理的部门，统称负有安全生产监督管理职责的部门。负有安全生产监督管理职责的部门应当相互配合、齐抓共管、信息共享、资源共用，依法加强安全生产监督管理工作。",
      "blankText": "国务院应急管理部门依照本法，对全国安全生产工作实施综合监督管理；县级以上地方各级人民政府应急管理部门依照本法，对本行政区域内安全生产工作实施综合监督管理。\n国务院交通运输、住房和城乡建设、水利、民航等有关部门依照本法和其他有关法律、行政法规的规定，在各自的职责范围内对有关行业、领域的安全生产工作实施监督管理；县级以上地方各级人民政府有关部门依照本法和其他有关法律、法规的规定，在各自的职责范围内对有关行业、领域的安全生产工作实施监督管理。对新兴行业、领域的安全生产监督管理职责不明确的，由县级以上地方各级人民政府按照业务相近的原则确定监督管理部门。\n应急管理部门和对有关行业、领域的安全生产工作实施监督管理的部门，统称负有安全生产监督管理职责的部门。负有安全生产监督管理职责的部门应当相互配合、齐抓共管、信息共享、资源共用，依法加强安全生产监督管理工作。"
    },
    {
      "id": 11,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 11,
      "text": "国务院有关部门应当按照保障安全生产的要求，依法及时制定有关的国家标准或者行业标准，并根据科技进步和经济发展适时修订。\n生产经营单位必须执行依法制定的保障安全生产的国家标准或者行业标准。",
      "blankText": "国务院有关部门应当按照保障安全生产的要求，依法及时制定有关的国家标准或者行业标准，并根据科技进步和经济发展适时修订。\n生产经营单位必须执行依法制定的保障安全生产的国家标准或者行业标准。"
    },
    {
      "id": 12,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 12,
      "text": "国务院有关部门按照职责分工负责安全生产强制性国家标准的项目提出、组织起草、征求意见、技术审查。国务院应急管理部门统筹提出安全生产强制性国家标准的立项计划。国务院标准化行政主管部门负责安全生产强制性国家标准的立项、编号、对外通报和授权批准发布工作。国务院标准化行政主管部门、有关部门依据法定职责对安全生产强制性国家标准的实施进行监督检查。",
      "blankText": "国务院有关部门按照职责分工负责安全生产强制性国家标准的项目提出、组织起草、征求意见、技术审查。国务院应急管理部门统筹提出安全生产强制性国家标准的立项计划。国务院标准化行政主管部门负责安全生产强制性国家标准的立项、编号、对外通报和授权批准发布工作。国务院标准化行政主管部门、有关部门依据法定职责对安全生产强制性国家标准的实施进行监督检查。"
    },
    {
      "id": 13,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 13,
      "text": "各级人民政府及其有关部门应当采取多种形式，加强对有关安全生产的法律、法规和安全生产知识的宣传，增强全社会的安全生产意识。",
      "blankText": "各级人民政府及其有关部门应当采取多种形式，加强对有关安全生产的法律、法规和安全生产知识的宣传，增强全社会的安全生产意识。"
    },
    {
      "id": 14,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 14,
      "text": "有关协会组织依照法律、行政法规和章程，为生产经营单位提供安全生产方面的信息、培训等服务，发挥自律作用，促进生产经营单位加强安全生产管理。",
      "blankText": "有关协会组织依照法律、行政法规和章程，为生产经营单位提供安全生产方面的信息、培训等服务，发挥自律作用，促进生产经营单位加强安全生产管理。"
    },
    {
      "id": 15,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 15,
      "text": "依法设立的为安全生产提供技术、管理服务的机构，依照法律、行政法规和执业准则，接受生产经营单位的委托为其安全生产工作提供技术、管理服务。\n生产经营单位委托前款规定的机构提供安全生产技术、管理服务的，保证安全生产的责任仍由本单位负责。",
      "blankText": "依法设立的为安全生产提供技术、管理服务的机构，依照法律、行政法规和执业准则，接受生产经营单位的委托为其安全生产工作提供技术、管理服务。\n生产经营单位委托前款规定的机构提供安全生产技术、管理服务的，保证安全生产的责任仍由本单位负责。"
    },
    {
      "id": 16,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 16,
      "text": "国家实行生产安全事故责任追究制度，依照本法和有关法律、法规的规定，追究生产安全事故责任单位和责任人员的法律责任。",
      "blankText": "国家实行生产安全事故责任追究制度，依照本法和有关法律、法规的规定，追究生产安全事故责任单位和责任人员的法律责任。"
    },
    {
      "id": 17,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 17,
      "text": "县级以上各级人民政府应当组织负有安全生产监督管理职责的部门建立、健全生产安全事故预警和应急救援体系，组织有关部门制定生产安全事故应急救援预案，建立应急救援队伍，配备相应的应急救援装备和物资，开展应急救援演练，提高应急救援能力。",
      "blankText": "县级以上各级人民政府应当组织负有安全生产监督管理职责的部门建立、健全生产安全事故预警和应急救援体系，组织有关部门制定生产安全事故应急救援预案，建立应急救援队伍，配备相应的应急救援装备和物资，开展应急救援演练，提高应急救援能力。"
    },
    {
      "id": 18,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 18,
      "text": "国家鼓励生产经营单位投保安全生产责任保险；属于国家规定的高危行业、领域的生产经营单位，应当投保安全生产责任保险。具体范围和实施办法由国务院应急管理部门会同国务院财政部门、国务院保险监督管理机构和相关行业主管部门制定。",
      "blankText": "国家鼓励生产经营单位投保安全生产责任保险；属于国家规定的高危行业、领域的生产经营单位，应当投保安全生产责任保险。具体范围和实施办法由国务院应急管理部门会同国务院财政部门、国务院保险监督管理机构和相关行业主管部门制定。"
    },
    {
      "id": 19,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 19,
      "text": "生产经营单位的安全生产责任制应当明确各岗位的责任人员、责任范围和考核标准等内容。\n生产经营单位应当建立相应的机制，加强对全员安全生产责任制落实情况的监督考核，保证全员安全生产责任制的落实。",
      "blankText": "生产经营单位的安全生产责任制应当明确各岗位的责任人员、责任范围和考核标准等内容。\n生产经营单位应当建立相应的机制，加强对全员安全生产责任制落实情况的监督考核，保证全员安全生产责任制的落实。"
    },
    {
      "id": 20,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 20,
      "text": "生产经营单位应当具备本法和有关法律、行政法规和国家标准或者行业标准规定的安全生产条件；不具备安全生产条件的，不得从事生产经营活动。",
      "blankText": "生产经营单位应当具备本法和有关法律、行政法规和国家标准或者行业标准规定的安全生产条件；不具备安全生产条件的，不得从事生产经营活动。"
    },
    {
      "id": 21,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 21,
      "text": "生产经营单位的主要负责人对本单位安全生产工作负有下列职责：\n（一）建立健全并落实本单位全员安全生产责任制，加强安全生产标准化建设；\n（二）组织制定并实施本单位安全生产规章制度和操作规程；\n（三）组织制定并实施本单位安全生产教育和培训计划；\n（四）保证本单位安全生产投入的有效实施；\n（五）组织建立并落实安全风险分级管控和隐患排查治理双重预防工作机制，督促、检查本单位的安全生产工作，及时消除生产安全事故隐患；\n（六）组织制定并实施本单位的生产安全事故应急救援预案；\n（七）及时、如实报告生产安全事故。",
      "blankText": "生产经营单位的主要负责人对本单位安全生产工作负有下列职责：\n（一）建立健全并落实本单位全员安全生产责任制，加强安全生产标准化建设；\n（二）组织制定并实施本单位安全生产规章制度和操作规程；\n（三）组织制定并实施本单位安全生产教育和培训计划；\n（四）保证本单位安全生产投入的有效实施；\n（五）组织建立并落实安全风险分级管控和隐患排查治理双重预防工作机制，督促、检查本单位的安全生产工作，及时消除生产安全事故隐患；\n（六）组织制定并实施本单位的生产安全事故应急救援预案；\n（七）及时、如实报告生产安全事故。"
    },
    {
      "id": 22,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 22,
      "text": "生产经营单位的全员安全生产责任制应当明确各岗位的责任人员、责任范围和考核标准等内容。\n生产经营单位应当建立相应的机制，加强对全员安全生产责任制落实情况的监督考核，保证全员安全生产责任制的落实。",
      "blankText": "生产经营单位的全员安全生产责任制应当明确各岗位的责任人员、责任范围和考核标准等内容。\n生产经营单位应当建立相应的机制，加强对全员安全生产责任制落实情况的监督考核，保证全员安全生产责任制的落实。"
    },
    {
      "id": 23,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 23,
      "text": "生产经营单位应当具备的安全生产条件所必需的资金投入，由生产经营单位的决策机构、主要负责人或者个人经营的投资人予以保证，并对由于安全生产所必需的资金投入不足导致的后果承担责任。\n有关生产经营单位应当按照规定提取和使用安全生产费用，专门用于改善安全生产条件。安全生产费用在成本中据实列支。安全生产费用提取、使用和监督管理的具体办法由国务院财政部门会同国务院应急管理部门征求国务院有关部门意见后制定。",
      "blankText": "生产经营单位应当具备的安全生产条件所必需的资金投入，由生产经营单位的决策机构、主要负责人或者个人经营的投资人予以保证，并对由于安全生产所必需的资金投入不足导致的后果承担责任。\n有关生产经营单位应当按照规定提取和使用安全生产费用，专门用于改善安全生产条件。安全生产费用在成本中据实列支。安全生产费用提取、使用和监督管理的具体办法由国务院财政部门会同国务院应急管理部门征求国务院有关部门意见后制定。"
    },
    {
      "id": 24,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 24,
      "text": "矿山、金属冶炼、建筑施工、运输单位和危险物品的生产、经营、储存、装卸单位，应当设置安全生产管理机构或者配备专职安全生产管理人员。\n前款规定以外的其他生产经营单位，从业人员超过一百人的，应当设置安全生产管理机构或者配备专职安全生产管理人员；从业人员在一百人以下的，应当配备专职或者兼职的安全生产管理人员。",
      "blankText": "矿山、金属冶炼、建筑施工、运输单位和危险物品的生产、经营、储存、装卸单位，应当设置安全生产管理机构或者配备专职安全生产管理人员。\n前款规定以外的其他生产经营单位，从业人员超过一百人的，应当设置安全生产管理机构或者配备专职安全生产管理人员；从业人员在一百人以下的，应当配备专职或者兼职的安全生产管理人员。"
    },
    {
      "id": 25,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 25,
      "text": "生产经营单位的安全生产管理机构以及安全生产管理人员履行下列职责：\n（一）组织或者参与拟订本单位安全生产规章制度、操作规程和生产安全事故应急救援预案；\n（二）组织或者参与本单位安全生产教育和培训，如实记录安全生产教育和培训情况；\n（三）组织开展危险源辨识和评估，督促落实本单位重大危险源的安全管理措施；\n（四）组织或者参与本单位应急救援演练；\n（五）检查本单位的安全生产状况，及时排查生产安全事故隐患，提出改进安全生产管理的建议；\n（六）制止和纠正违章指挥、强令冒险作业、违反操作规程的行为；\n（七）督促落实本单位安全生产整改措施。\n生产经营单位可以设置专职安全生产分管负责人，协助本单位主要负责人履行安全生产管理职责。",
      "blankText": "生产经营单位的安全生产管理机构以及安全生产管理人员履行下列职责：\n（一）组织或者参与拟订本单位安全生产规章制度、操作规程和生产安全事故应急救援预案；\n（二）组织或者参与本单位安全生产教育和培训，如实记录安全生产教育和培训情况；\n（三）组织开展危险源辨识和评估，督促落实本单位重大危险源的安全管理措施；\n（四）组织或者参与本单位应急救援演练；\n（五）检查本单位的安全生产状况，及时排查生产安全事故隐患，提出改进安全生产管理的建议；\n（六）制止和纠正违章指挥、强令冒险作业、违反操作规程的行为；\n（七）督促落实本单位安全生产整改措施。\n生产经营单位可以设置专职安全生产分管负责人，协助本单位主要负责人履行安全生产管理职责。"
    },
    {
      "id": 26,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 26,
      "text": "生产经营单位的安全生产管理机构以及安全生产管理人员应当恪尽职守，依法履行职责。\n生产经营单位作出涉及安全生产的经营决策，应当听取安全生产管理机构以及安全生产管理人员的意见。\n生产经营单位不得因安全生产管理人员依法履行职责而降低其工资、福利等待遇或者解除与其订立的劳动合同。\n危险物品的生产、储存单位以及矿山、金属冶炼单位的安全生产管理人员的任免，应当告知主管的负有安全生产监督管理职责的部门。",
      "blankText": "生产经营单位的安全生产管理机构以及安全生产管理人员应当恪尽职守，依法履行职责。\n生产经营单位作出涉及安全生产的经营决策，应当听取安全生产管理机构以及安全生产管理人员的意见。\n生产经营单位不得因安全生产管理人员依法履行职责而降低其工资、福利等待遇或者解除与其订立的劳动合同。\n危险物品的生产、储存单位以及矿山、金属冶炼单位的安全生产管理人员的任免，应当告知主管的负有安全生产监督管理职责的部门。"
    },
    {
      "id": 27,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 27,
      "text": "生产经营单位的主要负责人和安全生产管理人员必须具备与本单位所从事的生产经营活动相应的安全生产知识和管理能力。\n危险物品的生产、经营、储存、装卸单位以及矿山、金属冶炼、建筑施工、运输单位的主要负责人和安全生产管理人员，应当由主管的负有安全生产监督管理职责的部门对其安全生产知识和管理能力考核合格。考核不得收费。",
      "blankText": "生产经营单位的主要负责人和安全生产管理人员必须具备与本单位所从事的生产经营活动相应的安全生产知识和管理能力。\n危险物品的生产、经营、储存、装卸单位以及矿山、金属冶炼、建筑施工、运输单位的主要负责人和安全生产管理人员，应当由主管的负有安全生产监督管理职责的部门对其安全生产知识和管理能力考核合格。考核不得收费。"
    },
    {
      "id": 28,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 28,
      "text": "生产经营单位应当对从业人员进行安全生产教育和培训，保证从业人员具备必要的安全生产知识，熟悉有关的安全生产规章制度和安全操作规程，掌握本岗位的安全操作技能，了解事故应急处理措施，知悉自身在安全生产方面的权利和义务。未经安全生产教育和培训合格的从业人员，不得上岗作业。\n生产经营单位使用被派遣劳动者的，应当将被派遣劳动者纳入本单位从业人员统一管理，对被派遣劳动者进行岗位安全操作规程和安全操作技能的教育和培训。劳务派遣单位应当对被派遣劳动者进行必要的安全生产教育和培训。\n生产经营单位接收中等职业学校、高等学校学生实习的，应当对实习学生进行相应的安全生产教育和培训，提供必要的劳动防护用品。学校应当协助生产经营单位对实习学生进行安全生产教育和培训。\n生产经营单位应当建立安全生产教育和培训档案，如实记录安全生产教育和培训的时间、内容、参加人员以及考核结果等情况。",
      "blankText": "生产经营单位应当对从业人员进行安全生产教育和培训，保证从业人员具备必要的安全生产知识，熟悉有关的安全生产规章制度和安全操作规程，掌握本岗位的安全操作技能，了解事故应急处理措施，知悉自身在安全生产方面的权利和义务。未经安全生产教育和培训合格的从业人员，不得上岗作业。\n生产经营单位使用被派遣劳动者的，应当将被派遣劳动者纳入本单位从业人员统一管理，对被派遣劳动者进行岗位安全操作规程和安全操作技能的教育和培训。劳务派遣单位应当对被派遣劳动者进行必要的安全生产教育和培训。\n生产经营单位接收中等职业学校、高等学校学生实习的，应当对实习学生进行相应的安全生产教育和培训，提供必要的劳动防护用品。学校应当协助生产经营单位对实习学生进行安全生产教育和培训。\n生产经营单位应当建立安全生产教育和培训档案，如实记录安全生产教育和培训的时间、内容、参加人员以及考核结果等情况。"
    },
    {
      "id": 29,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 29,
      "text": "生产经营单位采用新工艺、新技术、新材料或者使用新设备，必须了解、掌握其安全技术特性，采取有效的安全防护措施，并对从业人员进行专门的安全生产教育和培训。",
      "blankText": "生产经营单位采用新工艺、新技术、新材料或者使用新设备，必须了解、掌握其安全技术特性，采取有效的安全防护措施，并对从业人员进行专门的安全生产教育和培训。"
    },
    {
      "id": 30,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 30,
      "text": "生产经营单位的特种作业人员必须按照国家有关规定经专门的安全作业培训，取得相应资格，方可上岗作业。\n特种作业人员的范围由国务院应急管理部门会同国务院有关部门确定。",
      "blankText": "生产经营单位的特种作业人员必须按照国家有关规定经专门的安全作业培训，取得相应资格，方可上岗作业。\n特种作业人员的范围由国务院应急管理部门会同国务院有关部门确定。"
    },
    {
      "id": 31,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 31,
      "text": "生产经营单位新建、改建、扩建工程项目（以下统称建设项目）的安全设施，必须与主体工程同时设计、同时施工、同时投入生产和使用。安全设施投资应当纳入建设项目概算。",
      "blankText": "生产经营单位新建、改建、扩建工程项目（以下统称建设项目）的安全设施，必须与主体工程同时设计、同时施工、同时投入生产和使用。安全设施投资应当纳入建设项目概算。"
    },
    {
      "id": 32,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 32,
      "text": "矿山、金属冶炼建设项目和用于生产、储存、装卸危险物品的建设项目，应当按照国家有关规定进行安全评价。",
      "blankText": "矿山、金属冶炼建设项目和用于生产、储存、装卸危险物品的建设项目，应当按照国家有关规定进行安全评价。"
    },
    {
      "id": 33,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 33,
      "text": "建设项目安全设施的设计人、设计单位应当对安全设施设计负责。\n矿山、金属冶炼建设项目和用于生产、储存、装卸危险物品的建设项目的安全设施设计应当按照国家有关规定报经有关部门审查，审查部门及其负责审查的人员对审查结果负责。",
      "blankText": "建设项目安全设施的设计人、设计单位应当对安全设施设计负责。\n矿山、金属冶炼建设项目和用于生产、储存、装卸危险物品的建设项目的安全设施设计应当按照国家有关规定报经有关部门审查，审查部门及其负责审查的人员对审查结果负责。"
    },
    {
      "id": 34,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 34,
      "text": "矿山、金属冶炼建设项目和用于生产、储存、装卸危险物品的建设项目的施工单位必须按照批准的安全设施设计施工，并对安全设施的工程质量负责。\n矿山、金属冶炼建设项目和用于生产、储存、装卸危险物品的建设项目竣工投入生产或者使用前，应当由建设单位负责组织对安全设施进行验收；验收合格后，方可投入生产和使用。负有安全生产监督管理职责的部门应当加强对建设单位验收活动和验收结果的监督核查。",
      "blankText": "矿山、金属冶炼建设项目和用于生产、储存、装卸危险物品的建设项目的施工单位必须按照批准的安全设施设计施工，并对安全设施的工程质量负责。\n矿山、金属冶炼建设项目和用于生产、储存、装卸危险物品的建设项目竣工投入生产或者使用前，应当由建设单位负责组织对安全设施进行验收；验收合格后，方可投入生产和使用。负有安全生产监督管理职责的部门应当加强对建设单位验收活动和验收结果的监督核查。"
    },
    {
      "id": 35,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 35,
      "text": "生产经营单位应当在有较大危险因素的生产经营场所和有关设施、设备上，设置明显的安全警示标志。",
      "blankText": "生产经营单位应当在有较大危险因素的生产经营场所和有关设施、设备上，设置明显的安全警示标志。"
    },
    {
      "id": 36,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 36,
      "text": "安全设备的设计、制造、安装、使用、检测、维修、改造和报废，应当符合国家标准或者行业标准。\n生产经营单位必须对安全设备进行经常性维护、保养，并定期检测，保证正常运转。维护、保养、检测应当作好记录，并由有关人员签字。\n生产经营单位不得关闭、破坏直接关系生产安全的监控、报警、防护、救生设备、设施，或者篡改、隐瞒、销毁其相关数据、信息。\n餐饮等行业的生产经营单位使用燃气的，应当安装可燃气体报警装置，并保障其正常使用。",
      "blankText": "安全设备的设计、制造、安装、使用、检测、维修、改造和报废，应当符合国家标准或者行业标准。\n生产经营单位必须对安全设备进行经常性维护、保养，并定期检测，保证正常运转。维护、保养、检测应当作好记录，并由有关人员签字。\n生产经营单位不得关闭、破坏直接关系生产安全的监控、报警、防护、救生设备、设施，或者篡改、隐瞒、销毁其相关数据、信息。\n餐饮等行业的生产经营单位使用燃气的，应当安装可燃气体报警装置，并保障其正常使用。"
    },
    {
      "id": 37,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 37,
      "text": "生产经营单位使用的危险物品的容器、运输工具，以及涉及人身安全、危险性较大的海洋石油开采特种设备和矿山井下特种设备，必须按照国家有关规定，由专业生产单位生产，并经具有专业资质的检测、检验机构检测、检验合格，取得安全使用证或者安全标志，方可投入使用。检测、检验机构对检测、检验结果负责。",
      "blankText": "生产经营单位使用的危险物品的容器、运输工具，以及涉及人身安全、危险性较大的海洋石油开采特种设备和矿山井下特种设备，必须按照国家有关规定，由专业生产单位生产，并经具有专业资质的检测、检验机构检测、检验合格，取得安全使用证或者安全标志，方可投入使用。检测、检验机构对检测、检验结果负责。"
    },
    {
      "id": 38,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 38,
      "text": "国家对严重危及生产安全的工艺、设备实行淘汰制度，具体目录由国务院应急管理部门会同国务院有关部门制定并公布。法律、行政法规对目录的制定另有规定的，适用其规定。\n省、自治区、直辖市人民政府可以根据本地区实际情况制定并公布具体目录，对前款规定以外的危及生产安全的工艺、设备予以淘汰。\n生产经营单位不得使用应当淘汰的危及生产安全的工艺、设备。",
      "blankText": "国家对严重危及生产安全的工艺、设备实行淘汰制度，具体目录由国务院应急管理部门会同国务院有关部门制定并公布。法律、行政法规对目录的制定另有规定的，适用其规定。\n省、自治区、直辖市人民政府可以根据本地区实际情况制定并公布具体目录，对前款规定以外的危及生产安全的工艺、设备予以淘汰。\n生产经营单位不得使用应当淘汰的危及生产安全的工艺、设备。"
    },
    {
      "id": 39,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 39,
      "text": "生产、经营、运输、储存、使用危险物品或者处置废弃危险物品的，由有关主管部门依照有关法律、法规的规定和国家标准或者行业标准审批并实施监督管理。\n生产经营单位生产、经营、运输、储存、使用危险物品或者处置废弃危险物品，必须执行有关法律、法规和国家标准或者行业标准，建立专门的安全管理制度，采取可靠的安全措施，接受有关主管部门依法实施的监督管理。",
      "blankText": "生产、经营、运输、储存、使用危险物品或者处置废弃危险物品的，由有关主管部门依照有关法律、法规的规定和国家标准或者行业标准审批并实施监督管理。\n生产经营单位生产、经营、运输、储存、使用危险物品或者处置废弃危险物品，必须执行有关法律、法规和国家标准或者行业标准，建立专门的安全管理制度，采取可靠的安全措施，接受有关主管部门依法实施的监督管理。"
    },
    {
      "id": 40,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 40,
      "text": "生产经营单位对重大危险源应当登记建档，进行定期检测、评估、监控，并制定应急预案，告知从业人员和相关人员在紧急情况下应当采取的应急措施。\n生产经营单位应当按照国家有关规定将本单位重大危险源及有关安全措施、应急措施报有关地方人民政府应急管理部门和有关部门备案。有关地方人民政府应急管理部门和有关部门应当通过相关信息系统实现信息共享。",
      "blankText": "生产经营单位对重大危险源应当登记建档，进行定期检测、评估、监控，并制定应急预案，告知从业人员和相关人员在紧急情况下应当采取的应急措施。\n生产经营单位应当按照国家有关规定将本单位重大危险源及有关安全措施、应急措施报有关地方人民政府应急管理部门和有关部门备案。有关地方人民政府应急管理部门和有关部门应当通过相关信息系统实现信息共享。"
    },
    {
      "id": 41,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 41,
      "text": "生产经营单位应当建立安全风险分级管控制度，按照安全风险分级采取相应的管控措施。\n生产经营单位应当建立健全并落实生产安全事故隐患排查治理制度，采取技术、管理措施，及时发现并消除事故隐患。事故隐患排查治理情况应当如实记录，并通过职工大会或者职工代表大会、信息公示栏等方式向从业人员通报。其中，重大事故隐患排查治理情况应当及时向负有安全生产监督管理职责的部门和职工大会或者职工代表大会报告。\n县级以上地方各级人民政府负有安全生产监督管理职责的部门应当将重大事故隐患纳入相关信息系统，建立健全重大事故隐患治理督办制度，督促生产经营单位消除重大事故隐患。",
      "blankText": "生产经营单位应当建立安全风险分级管控制度，按照安全风险分级采取相应的管控措施。\n生产经营单位应当建立健全并落实生产安全事故隐患排查治理制度，采取技术、管理措施，及时发现并消除事故隐患。事故隐患排查治理情况应当如实记录，并通过职工大会或者职工代表大会、信息公示栏等方式向从业人员通报。其中，重大事故隐患排查治理情况应当及时向负有安全生产监督管理职责的部门和职工大会或者职工代表大会报告。\n县级以上地方各级人民政府负有安全生产监督管理职责的部门应当将重大事故隐患纳入相关信息系统，建立健全重大事故隐患治理督办制度，督促生产经营单位消除重大事故隐患。"
    },
    {
      "id": 42,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 42,
      "text": "生产、经营、储存、使用危险物品的车间、商店、仓库不得与员工宿舍在同一座建筑物内，并应当与员工宿舍保持安全距离。\n生产经营场所和员工宿舍应当设有符合紧急疏散要求、标志明显、保持畅通的出口、疏散通道。禁止占用、锁闭、封堵生产经营场所或者员工宿舍的出口、疏散通道。",
      "blankText": "生产、经营、储存、使用危险物品的车间、商店、仓库不得与员工宿舍在同一座建筑物内，并应当与员工宿舍保持安全距离。\n生产经营场所和员工宿舍应当设有符合紧急疏散要求、标志明显、保持畅通的出口、疏散通道。禁止占用、锁闭、封堵生产经营场所或者员工宿舍的出口、疏散通道。"
    },
    {
      "id": 43,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 43,
      "text": "生产经营单位进行爆破、吊装、动火、临时用电以及国务院应急管理部门会同国务院有关部门规定的其他危险作业，应当安排专门人员进行现场安全管理，确保操作规程的遵守和安全措施的落实。",
      "blankText": "生产经营单位进行爆破、吊装、动火、临时用电以及国务院应急管理部门会同国务院有关部门规定的其他危险作业，应当安排专门人员进行现场安全管理，确保操作规程的遵守和安全措施的落实。"
    },
    {
      "id": 44,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 44,
      "text": "生产经营单位应当教育和督促从业人员严格执行本单位的安全生产规章制度和安全操作规程；并向从业人员如实告知作业场所和工作岗位存在的危险因素、防范措施以及事故应急措施。",
      "blankText": "生产经营单位应当教育和督促从业人员严格执行本单位的安全生产规章制度和安全操作规程；并向从业人员如实告知作业场所和工作岗位存在的危险因素、防范措施以及事故应急措施。"
    },
    {
      "id": 45,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 45,
      "text": "生产经营单位必须为从业人员提供符合国家标准或者行业标准的劳动防护用品，并监督、教育从业人员按照使用规则佩戴、使用。",
      "blankText": "生产经营单位必须为从业人员提供符合国家标准或者行业标准的劳动防护用品，并监督、教育从业人员按照使用规则佩戴、使用。"
    },
    {
      "id": 46,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 46,
      "text": "生产经营单位的安全生产管理人员应当根据本单位的生产经营特点，对安全生产状况进行经常性检查；对检查中发现的安全问题，应当立即处理；不能处理的，应当及时报告本单位有关负责人，有关负责人应当及时处理。检查及处理情况应当如实记录在案。\n生产经营单位的安全生产管理人员在检查中发现重大事故隐患，依照前款规定向本单位有关负责人报告，有关负责人不及时处理的，安全生产管理人员可以向主管的负有安全生产监督管理职责的部门报告，接到报告的部门应当依法及时处理。",
      "blankText": "生产经营单位的安全生产管理人员应当根据本单位的生产经营特点，对安全生产状况进行经常性检查；对检查中发现的安全问题，应当立即处理；不能处理的，应当及时报告本单位有关负责人，有关负责人应当及时处理。检查及处理情况应当如实记录在案。\n生产经营单位的安全生产管理人员在检查中发现重大事故隐患，依照前款规定向本单位有关负责人报告，有关负责人不及时处理的，安全生产管理人员可以向主管的负有安全生产监督管理职责的部门报告，接到报告的部门应当依法及时处理。"
    },
    {
      "id": 47,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 47,
      "text": "生产经营单位应当安排用于配备劳动防护用品、进行安全生产培训的经费。",
      "blankText": "生产经营单位应当安排用于配备劳动防护用品、进行安全生产培训的经费。"
    },
    {
      "id": 48,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 48,
      "text": "两个以上生产经营单位在同一作业区域内进行生产经营活动，可能危及对方生产安全的，应当签订安全生产管理协议，明确各自的安全生产管理职责和应当采取的安全措施，并指定专职安全生产管理人员进行安全检查与协调。",
      "blankText": "两个以上生产经营单位在同一作业区域内进行生产经营活动，可能危及对方生产安全的，应当签订安全生产管理协议，明确各自的安全生产管理职责和应当采取的安全措施，并指定专职安全生产管理人员进行安全检查与协调。"
    },
    {
      "id": 49,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 49,
      "text": "生产经营单位不得将生产经营项目、场所、设备发包或者出租给不具备安全生产条件或者相应资质的单位或者个人。\n生产经营项目、场所发包或者出租给其他单位的，生产经营单位应当与承包单位、承租单位签订专门的安全生产管理协议，或者在承包合同、租赁合同中约定各自的安全生产管理职责；生产经营单位对承包单位、承租单位的安全生产工作统一协调、管理，定期进行安全检查，发现安全问题的，应当及时督促整改。\n矿山、金属冶炼建设项目和用于生产、储存、装卸危险物品的建设项目的施工单位应当加强对施工项目的安全管理，不得倒卖、出租、出借、挂靠或者以其他形式非法转让施工资质，不得将其承包的全部建设工程转包给第三人或者将其承包的全部建设工程支解以后，以分包的名义分别转包给第三人，不得将工程分包给不具备相应资质条件的单位。",
      "blankText": "生产经营单位不得将生产经营项目、场所、设备发包或者出租给不具备安全生产条件或者相应资质的单位或者个人。\n生产经营项目、场所发包或者出租给其他单位的，生产经营单位应当与承包单位、承租单位签订专门的安全生产管理协议，或者在承包合同、租赁合同中约定各自的安全生产管理职责；生产经营单位对承包单位、承租单位的安全生产工作统一协调、管理，定期进行安全检查，发现安全问题的，应当及时督促整改。\n矿山、金属冶炼建设项目和用于生产、储存、装卸危险物品的建设项目的施工单位应当加强对施工项目的安全管理，不得倒卖、出租、出借、挂靠或者以其他形式非法转让施工资质，不得将其承包的全部建设工程转包给第三人或者将其承包的全部建设工程支解以后，以分包的名义分别转包给第三人，不得将工程分包给不具备相应资质条件的单位。"
    },
    {
      "id": 50,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 50,
      "text": "生产经营单位发生生产安全事故时，单位的主要负责人应当立即组织抢救，并不得在事故调查处理期间擅离职守。",
      "blankText": "生产经营单位发生生产安全事故时，单位的主要负责人应当立即组织抢救，并不得在事故调查处理期间擅离职守。"
    },
    {
      "id": 51,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 51,
      "text": "生产经营单位必须依法参加工伤保险，为从业人员缴纳保险费。\n国家鼓励生产经营单位投保安全生产责任保险；属于国家规定的高危行业、领域的生产经营单位，应当投保安全生产责任保险。具体范围和实施办法由国务院应急管理部门会同国务院财政部门、国务院保险监督管理机构和相关行业主管部门制定。",
      "blankText": "生产经营单位必须依法参加工伤保险，为从业人员缴纳保险费。\n国家鼓励生产经营单位投保安全生产责任保险；属于国家规定的高危行业、领域的生产经营单位，应当投保安全生产责任保险。具体范围和实施办法由国务院应急管理部门会同国务院财政部门、国务院保险监督管理机构和相关行业主管部门制定。"
    },
    {
      "id": 52,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 52,
      "text": "生产经营单位与从业人员订立的劳动合同，应当载明有关保障从业人员劳动安全、防止职业危害的事项，以及依法为从业人员办理工伤保险的事项。\n生产经营单位不得以任何形式与从业人员订立协议，免除或者减轻其对从业人员因生产安全事故伤亡依法应承担的责任。",
      "blankText": "生产经营单位与从业人员订立的劳动合同，应当载明有关保障从业人员劳动安全、防止职业危害的事项，以及依法为从业人员办理工伤保险的事项。\n生产经营单位不得以任何形式与从业人员订立协议，免除或者减轻其对从业人员因生产安全事故伤亡依法应承担的责任。"
    },
    {
      "id": 53,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 53,
      "text": "生产经营单位的从业人员有权了解其作业场所和工作岗位存在的危险因素、防范措施及事故应急措施，有权对本单位的安全生产工作提出建议。",
      "blankText": "生产经营单位的从业人员有权了解其作业场所和工作岗位存在的危险因素、防范措施及事故应急措施，有权对本单位的安全生产工作提出建议。"
    },
    {
      "id": 54,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 54,
      "text": "从业人员有权对本单位安全生产工作中存在的问题提出批评、检举、控告；有权拒绝违章指挥和强令冒险作业。\n生产经营单位不得因从业人员对本单位安全生产工作提出批评、检举、控告或者拒绝违章指挥、强令冒险作业而降低其工资、福利等待遇或者解除与其订立的劳动合同。",
      "blankText": "从业人员有权对本单位安全生产工作中存在的问题提出批评、检举、控告；有权拒绝违章指挥和强令冒险作业。\n生产经营单位不得因从业人员对本单位安全生产工作提出批评、检举、控告或者拒绝违章指挥、强令冒险作业而降低其工资、福利等待遇或者解除与其订立的劳动合同。"
    },
    {
      "id": 55,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 55,
      "text": "从业人员发现直接危及人身安全的紧急情况时，有权停止作业或者在采取可能的应急措施后撤离作业场所。\n生产经营单位不得因从业人员在前款紧急情况下停止作业或者采取紧急撤离措施而降低其工资、福利等待遇或者解除与其订立的劳动合同。",
      "blankText": "从业人员发现直接危及人身安全的紧急情况时，有权停止作业或者在采取可能的应急措施后撤离作业场所。\n生产经营单位不得因从业人员在前款紧急情况下停止作业或者采取紧急撤离措施而降低其工资、福利等待遇或者解除与其订立的劳动合同。"
    },
    {
      "id": 56,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 56,
      "text": "生产经营单位发生生产安全事故后，应当及时采取措施救治有关人员。\n因生产安全事故受到损害的从业人员，除依法享有工伤保险外，依照有关民事法律尚有获得赔偿的权利的，有权提出赔偿要求。",
      "blankText": "生产经营单位发生生产安全事故后，应当及时采取措施救治有关人员。\n因生产安全事故受到损害的从业人员，除依法享有工伤保险外，依照有关民事法律尚有获得赔偿的权利的，有权提出赔偿要求。"
    },
    {
      "id": 57,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 57,
      "text": "从业人员在作业过程中，应当严格落实岗位安全责任，遵守本单位的安全生产规章制度和操作规程，服从管理，正确佩戴和使用劳动防护用品。",
      "blankText": "从业人员在作业过程中，应当严格落实岗位安全责任，遵守本单位的安全生产规章制度和操作规程，服从管理，正确佩戴和使用劳动防护用品。"
    },
    {
      "id": 58,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 58,
      "text": "从业人员应当接受安全生产教育和培训，掌握本职工作所需的安全生产知识，提高安全生产技能，增强事故预防和应急处理能力。",
      "blankText": "从业人员应当接受安全生产教育和培训，掌握本职工作所需的安全生产知识，提高安全生产技能，增强事故预防和应急处理能力。"
    },
    {
      "id": 59,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 59,
      "text": "从业人员发现事故隐患或者其他不安全因素，应当立即向现场安全生产管理人员或者本单位负责人报告；接到报告的人员应当及时予以处理。",
      "blankText": "从业人员发现事故隐患或者其他不安全因素，应当立即向现场安全生产管理人员或者本单位负责人报告；接到报告的人员应当及时予以处理。"
    },
    {
      "id": 60,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 60,
      "text": "工会有权对建设项目的安全设施与主体工程同时设计、同时施工、同时投入生产和使用进行监督，提出意见。\n工会对生产经营单位违反安全生产法律、法规，侵犯从业人员合法权益的行为，有权要求纠正；发现生产经营单位违章指挥、强令冒险作业或者发现事故隐患时，有权提出解决的建议，生产经营单位应当及时研究答复；发现危及从业人员生命安全的情况时，有权向生产经营单位建议组织从业人员撤离危险场所，生产经营单位必须立即作出处理。\n工会有权依法参加事故调查，向有关部门提出处理意见，并要求追究有关人员的责任。",
      "blankText": "工会有权对建设项目的安全设施与主体工程同时设计、同时施工、同时投入生产和使用进行监督，提出意见。\n工会对生产经营单位违反安全生产法律、法规，侵犯从业人员合法权益的行为，有权要求纠正；发现生产经营单位违章指挥、强令冒险作业或者发现事故隐患时，有权提出解决的建议，生产经营单位应当及时研究答复；发现危及从业人员生命安全的情况时，有权向生产经营单位建议组织从业人员撤离危险场所，生产经营单位必须立即作出处理。\n工会有权依法参加事故调查，向有关部门提出处理意见，并要求追究有关人员的责任。"
    },
    {
      "id": 61,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 61,
      "text": "县级以上地方各级人民政府应当根据本行政区域内的安全生产状况，组织有关部门按照职责分工，对本行政区域内容易发生重大生产安全事故的生产经营单位进行严格检查。\n应急管理部门应当按照分类分级监督管理的要求，制定安全生产年度监督检查计划，并按照年度监督检查计划进行监督检查，发现事故隐患，应当及时处理。",
      "blankText": "县级以上地方各级人民政府应当根据本行政区域内的安全生产状况，组织有关部门按照职责分工，对本行政区域内容易发生重大生产安全事故的生产经营单位进行严格检查。\n应急管理部门应当按照分类分级监督管理的要求，制定安全生产年度监督检查计划，并按照年度监督检查计划进行监督检查，发现事故隐患，应当及时处理。"
    },
    {
      "id": 62,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 62,
      "text": "负有安全生产监督管理职责的部门依照有关法律、法规的规定，对涉及安全生产的事项需要审查批准（包括批准、核准、许可、注册、认证、颁发证照等，下同）或者验收的，必须严格依照有关法律、法规和国家标准或者行业标准规定的安全生产条件和程序进行审查；不符合有关法律、法规和国家标准或者行业标准规定的安全生产条件的，不得批准或者验收通过。对未依法取得批准或者验收合格的单位擅自从事有关活动的，负责行政审批的部门发现或者接到举报后应当立即予以取缔，并依法予以处理。对已经依法取得批准的单位，负责行政审批的部门发现其不再具备安全生产条件的，应当撤销原批准。",
      "blankText": "负有安全生产监督管理职责的部门依照有关法律、法规的规定，对涉及安全生产的事项需要审查批准（包括批准、核准、许可、注册、认证、颁发证照等，下同）或者验收的，必须严格依照有关法律、法规和国家标准或者行业标准规定的安全生产条件和程序进行审查；不符合有关法律、法规和国家标准或者行业标准规定的安全生产条件的，不得批准或者验收通过。对未依法取得批准或者验收合格的单位擅自从事有关活动的，负责行政审批的部门发现或者接到举报后应当立即予以取缔，并依法予以处理。对已经依法取得批准的单位，负责行政审批的部门发现其不再具备安全生产条件的，应当撤销原批准。"
    },
    {
      "id": 63,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 63,
      "text": "负有安全生产监督管理职责的部门在监督检查中，应当互相配合，实行联合检查；确需分别进行检查的，应当互通情况，发现存在的安全问题应当由其他有关部门进行处理的，应当及时移送其他有关部门并形成记录备查，接受移送的部门应当及时进行处理。",
      "blankText": "负有安全生产监督管理职责的部门在监督检查中，应当互相配合，实行联合检查；确需分别进行检查的，应当互通情况，发现存在的安全问题应当由其他有关部门进行处理的，应当及时移送其他有关部门并形成记录备查，接受移送的部门应当及时进行处理。"
    },
    {
      "id": 64,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 64,
      "text": "安全生产监督检查人员应当忠于职守，坚持原则，秉公执法。\n安全生产监督检查人员执行监督检查任务时，必须出示有效的行政执法证件；对涉及被检查单位的技术秘密和业务秘密，应当为其保密。",
      "blankText": "安全生产监督检查人员应当忠于职守，坚持原则，秉公执法。\n安全生产监督检查人员执行监督检查任务时，必须出示有效的行政执法证件；对涉及被检查单位的技术秘密和业务秘密，应当为其保密。"
    },
    {
      "id": 65,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 65,
      "text": "安全生产监督检查人员应当将检查的时间、地点、内容、发现的问题及其处理情况，作出书面记录，并由检查人员和被检查单位的负责人签字；被检查单位的负责人拒绝签字的，检查人员应当将情况记录在案，并向负有安全生产监督管理职责的部门报告。",
      "blankText": "安全生产监督检查人员应当将检查的时间、地点、内容、发现的问题及其处理情况，作出书面记录，并由检查人员和被检查单位的负责人签字；被检查单位的负责人拒绝签字的，检查人员应当将情况记录在案，并向负有安全生产监督管理职责的部门报告。"
    },
    {
      "id": 66,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 66,
      "text": "负有安全生产监督管理职责的部门在监督检查中，对有根据认为不符合保障安全生产的国家标准或者行业标准的设施、设备、器材以及违法生产、储存、使用、经营、运输的危险物品予以查封或者扣押，对违法生产、储存、使用、经营危险物品的作业场所予以查封，并依法作出处理决定。\n监督检查不得影响被检查单位的正常生产经营活动。",
      "blankText": "负有安全生产监督管理职责的部门在监督检查中，对有根据认为不符合保障安全生产的国家标准或者行业标准的设施、设备、器材以及违法生产、储存、使用、经营、运输的危险物品予以查封或者扣押，对违法生产、储存、使用、经营危险物品的作业场所予以查封，并依法作出处理决定。\n监督检查不得影响被检查单位的正常生产经营活动。"
    },
    {
      "id": 67,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 67,
      "text": "生产经营单位对负有安全生产监督管理职责的部门的监督检查人员依法履行监督检查职责，应当予以配合，不得拒绝、阻挠。",
      "blankText": "生产经营单位对负有安全生产监督管理职责的部门的监督检查人员依法履行监督检查职责，应当予以配合，不得拒绝、阻挠。"
    },
    {
      "id": 68,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 68,
      "text": "安全生产监督检查人员应当依法履行职责，忠于职守、坚持原则、秉公执法。\n安全生产监督检查人员执行监督检查任务时，必须出示有效的行政执法证件；对涉及被检查单位的技术秘密和业务秘密，应当为其保密。",
      "blankText": "安全生产监督检查人员应当依法履行职责，忠于职守、坚持原则、秉公执法。\n安全生产监督检查人员执行监督检查任务时，必须出示有效的行政执法证件；对涉及被检查单位的技术秘密和业务秘密，应当为其保密。"
    },
    {
      "id": 69,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 69,
      "text": "负有安全生产监督管理职责的部门在监督检查中，应当互相配合，实行联合检查；确需分别进行检查的，应当互通情况，发现存在的安全问题应当由其他有关部门进行处理的，应当及时移送其他有关部门并形成记录备查，接受移送的部门应当及时进行处理。",
      "blankText": "负有安全生产监督管理职责的部门在监督检查中，应当互相配合，实行联合检查；确需分别进行检查的，应当互通情况，发现存在的安全问题应当由其他有关部门进行处理的，应当及时移送其他有关部门并形成记录备查，接受移送的部门应当及时进行处理。"
    },
    {
      "id": 70,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 70,
      "text": "负有安全生产监督管理职责的部门依法对存在重大事故隐患的生产经营单位作出停产停业、停止施工、停止使用相关设施或者设备的决定，生产经营单位应当依法执行，及时消除事故隐患。生产经营单位拒不执行，有发生生产安全事故的现实危险的，在保证安全的前提下，经本部门主要负责人批准，负有安全生产监督管理职责的部门可以采取通知有关单位停止供电、停止供应民用爆炸物品等措施，强制生产经营单位履行决定。通知应当采用书面形式，有关单位应当予以配合。\n负有安全生产监督管理职责的部门依照前款规定采取停止供电措施，除有危及生产安全的紧急情形外，应当提前二十四小时通知生产经营单位。生产经营单位依法履行行政决定、采取相应措施消除事故隐患的，负有安全生产监督管理职责的部门应当及时解除前款规定的措施。",
      "blankText": "负有安全生产监督管理职责的部门依法对存在重大事故隐患的生产经营单位作出停产停业、停止施工、停止使用相关设施或者设备的决定，生产经营单位应当依法执行，及时消除事故隐患。生产经营单位拒不执行，有发生生产安全事故的现实危险的，在保证安全的前提下，经本部门主要负责人批准，负有安全生产监督管理职责的部门可以采取通知有关单位停止供电、停止供应民用爆炸物品等措施，强制生产经营单位履行决定。通知应当采用书面形式，有关单位应当予以配合。\n负有安全生产监督管理职责的部门依照前款规定采取停止供电措施，除有危及生产安全的紧急情形外，应当提前二十四小时通知生产经营单位。生产经营单位依法履行行政决定、采取相应措施消除事故隐患的，负有安全生产监督管理职责的部门应当及时解除前款规定的措施。"
    },
    {
      "id": 71,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 71,
      "text": "监察机关依照监察法的规定，对负有安全生产监督管理职责的部门及其工作人员履行安全生产监督管理职责实施监察。",
      "blankText": "监察机关依照监察法的规定，对负有安全生产监督管理职责的部门及其工作人员履行安全生产监督管理职责实施监察。"
    },
    {
      "id": 72,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 72,
      "text": "承担安全评价、认证、检测、检验职责的机构应当具备国家规定的资质条件，并对其作出的安全评价、认证、检测、检验结果的合法性、真实性负责。资质条件由国务院应急管理部门会同国务院有关部门制定。\n承担安全评价、认证、检测、检验职责的机构应当建立并实施服务公开和报告公开制度，不得租借资质、挂靠、出具虚假报告。",
      "blankText": "承担安全评价、认证、检测、检验职责的机构应当具备国家规定的资质条件，并对其作出的安全评价、认证、检测、检验结果的合法性、真实性负责。资质条件由国务院应急管理部门会同国务院有关部门制定。\n承担安全评价、认证、检测、检验职责的机构应当建立并实施服务公开和报告公开制度，不得租借资质、挂靠、出具虚假报告。"
    },
    {
      "id": 73,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 73,
      "text": "负有安全生产监督管理职责的部门应当建立举报制度，公开举报电话、信箱或者电子邮件地址等网络举报平台，受理有关安全生产的举报；受理的举报事项经调查核实后，应当形成书面材料；需要落实整改措施的，报经有关负责人签字并督促落实。对不属于本部门职责，需要由其他有关部门进行调查处理的，转交其他有关部门处理。\n涉及人员死亡的举报事项，应当由县级以上人民政府组织核查处理。",
      "blankText": "负有安全生产监督管理职责的部门应当建立举报制度，公开举报电话、信箱或者电子邮件地址等网络举报平台，受理有关安全生产的举报；受理的举报事项经调查核实后，应当形成书面材料；需要落实整改措施的，报经有关负责人签字并督促落实。对不属于本部门职责，需要由其他有关部门进行调查处理的，转交其他有关部门处理。\n涉及人员死亡的举报事项，应当由县级以上人民政府组织核查处理。"
    },
    {
      "id": 74,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 74,
      "text": "任何单位或者个人对事故隐患或者安全生产违法行为，均有权向负有安全生产监督管理职责的部门报告或者举报。\n因安全生产违法行为造成重大事故隐患或者导致重大事故，致使国家利益或者社会公共利益受到侵害的，人民检察院可以根据民事诉讼法、行政诉讼法的相关规定提起公益诉讼。",
      "blankText": "任何单位或者个人对事故隐患或者安全生产违法行为，均有权向负有安全生产监督管理职责的部门报告或者举报。\n因安全生产违法行为造成重大事故隐患或者导致重大事故，致使国家利益或者社会公共利益受到侵害的，人民检察院可以根据民事诉讼法、行政诉讼法的相关规定提起公益诉讼。"
    },
    {
      "id": 75,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 75,
      "text": "居民委员会、村民委员会发现其所在区域内的生产经营单位存在事故隐患或者安全生产违法行为时，应当向当地人民政府或者有关部门报告。",
      "blankText": "居民委员会、村民委员会发现其所在区域内的生产经营单位存在事故隐患或者安全生产违法行为时，应当向当地人民政府或者有关部门报告。"
    },
    {
      "id": 76,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 76,
      "text": "县级以上各级人民政府及其有关部门对报告重大事故隐患或者举报安全生产违法行为的有功人员，给予奖励。具体奖励办法由国务院应急管理部门会同国务院财政部门制定。",
      "blankText": "县级以上各级人民政府及其有关部门对报告重大事故隐患或者举报安全生产违法行为的有功人员，给予奖励。具体奖励办法由国务院应急管理部门会同国务院财政部门制定。"
    },
    {
      "id": 77,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 77,
      "text": "新闻、出版、广播、电影、电视等单位有进行安全生产公益宣传教育的义务，有对违反安全生产法律、法规的行为进行舆论监督的权利。",
      "blankText": "新闻、出版、广播、电影、电视等单位有进行安全生产公益宣传教育的义务，有对违反安全生产法律、法规的行为进行舆论监督的权利。"
    },
    {
      "id": 78,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 78,
      "text": "负有安全生产监督管理职责的部门应当建立安全生产违法行为信息库，如实记录生产经营单位及其有关从业人员的安全生产违法行为信息；对违法行为情节严重的生产经营单位及其有关从业人员，应当及时向社会公告，并通报行业主管部门、投资主管部门、自然资源主管部门、生态环境主管部门、证券监督管理机构以及有关金融机构。有关部门和机构应当对存在失信行为的生产经营单位及其有关从业人员采取加大执法检查频次、暂停项目审批、上调有关保险费率、行业或者职业禁入等联合惩戒措施，并向社会公示。\n负有安全生产监督管理职责的部门应当加强对生产经营单位行政处罚信息的及时归集、共享、应用和公开，对生产经营单位作出处罚决定后七个工作日内在监督管理部门公示系统予以公开曝光，强化对违法失信生产经营单位及其有关从业人员的社会监督，提高全社会安全生产诚信水平。",
      "blankText": "负有安全生产监督管理职责的部门应当建立安全生产违法行为信息库，如实记录生产经营单位及其有关从业人员的安全生产违法行为信息；对违法行为情节严重的生产经营单位及其有关从业人员，应当及时向社会公告，并通报行业主管部门、投资主管部门、自然资源主管部门、生态环境主管部门、证券监督管理机构以及有关金融机构。有关部门和机构应当对存在失信行为的生产经营单位及其有关从业人员采取加大执法检查频次、暂停项目审批、上调有关保险费率、行业或者职业禁入等联合惩戒措施，并向社会公示。\n负有安全生产监督管理职责的部门应当加强对生产经营单位行政处罚信息的及时归集、共享、应用和公开，对生产经营单位作出处罚决定后七个工作日内在监督管理部门公示系统予以公开曝光，强化对违法失信生产经营单位及其有关从业人员的社会监督，提高全社会安全生产诚信水平。"
    },
    {
      "id": 79,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 79,
      "text": "国家加强生产安全事故应急能力建设，在重点行业、领域建立应急救援基地和应急救援队伍，并由国家安全生产应急救援机构统一协调指挥；鼓励生产经营单位和其他社会力量建立应急救援队伍，配备相应的应急救援装备和物资，提高应急救援专业化水平。\n国务院应急管理部门牵头建立全国统一的生产安全事故应急救援信息系统，国务院交通运输、住房和城乡建设、水利、民航等有关部门和县级以上地方人民政府建立健全相关行业、领域、地区的生产安全事故应急救援信息系统，实现互联互通、信息共享，通过推行网上安全信息采集、安全监管和监测预警，提升监管的精准化、智能化水平。",
      "blankText": "国家加强生产安全事故应急能力建设，在重点行业、领域建立应急救援基地和应急救援队伍，并由国家安全生产应急救援机构统一协调指挥；鼓励生产经营单位和其他社会力量建立应急救援队伍，配备相应的应急救援装备和物资，提高应急救援专业化水平。\n国务院应急管理部门牵头建立全国统一的生产安全事故应急救援信息系统，国务院交通运输、住房和城乡建设、水利、民航等有关部门和县级以上地方人民政府建立健全相关行业、领域、地区的生产安全事故应急救援信息系统，实现互联互通、信息共享，通过推行网上安全信息采集、安全监管和监测预警，提升监管的精准化、智能化水平。"
    },
    {
      "id": 80,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 80,
      "text": "县级以上地方各级人民政府应当组织有关部门制定本行政区域内生产安全事故应急救援预案，建立应急救援体系。\n乡镇人民政府和街道办事处，以及开发区、工业园区、港区、风景区等应当制定相应的生产安全事故应急救援预案，协助人民政府有关部门或者按照授权依法履行生产安全事故应急救援工作职责。",
      "blankText": "县级以上地方各级人民政府应当组织有关部门制定本行政区域内生产安全事故应急救援预案，建立应急救援体系。\n乡镇人民政府和街道办事处，以及开发区、工业园区、港区、风景区等应当制定相应的生产安全事故应急救援预案，协助人民政府有关部门或者按照授权依法履行生产安全事故应急救援工作职责。"
    },
    {
      "id": 81,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 81,
      "text": "生产经营单位应当制定本单位生产安全事故应急救援预案，与所在地县级以上地方人民政府组织制定的生产安全事故应急救援预案相衔接，并定期组织演练。",
      "blankText": "生产经营单位应当制定本单位生产安全事故应急救援预案，与所在地县级以上地方人民政府组织制定的生产安全事故应急救援预案相衔接，并定期组织演练。"
    },
    {
      "id": 82,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 82,
      "text": "危险物品的生产、经营、储存单位以及矿山、金属冶炼、城市轨道交通运营、建筑施工单位应当建立应急救援组织；生产经营规模较小的，可以不建立应急救援组织，但应当指定兼职的应急救援人员。\n危险物品的生产、经营、储存、运输单位以及矿山、金属冶炼、城市轨道交通运营、建筑施工单位应当配备必要的应急救援器材、设备和物资，并进行经常性维护、保养，保证正常运转。",
      "blankText": "危险物品的生产、经营、储存单位以及矿山、金属冶炼、城市轨道交通运营、建筑施工单位应当建立应急救援组织；生产经营规模较小的，可以不建立应急救援组织，但应当指定兼职的应急救援人员。\n危险物品的生产、经营、储存、运输单位以及矿山、金属冶炼、城市轨道交通运营、建筑施工单位应当配备必要的应急救援器材、设备和物资，并进行经常性维护、保养，保证正常运转。"
    },
    {
      "id": 83,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 83,
      "text": "生产经营单位发生生产安全事故后，事故现场有关人员应当立即报告本单位负责人。\n单位负责人接到事故报告后，应当迅速采取有效措施，组织抢救，防止事故扩大，减少人员伤亡和财产损失，并按照国家有关规定立即如实报告当地负有安全生产监督管理职责的部门，不得隐瞒不报、谎报或者迟报，不得故意破坏事故现场、毁灭有关证据。",
      "blankText": "生产经营单位发生生产安全事故后，事故现场有关人员应当立即报告本单位负责人。\n单位负责人接到事故报告后，应当迅速采取有效措施，组织抢救，防止事故扩大，减少人员伤亡和财产损失，并按照国家有关规定立即如实报告当地负有安全生产监督管理职责的部门，不得隐瞒不报、谎报或者迟报，不得故意破坏事故现场、毁灭有关证据。"
    },
    {
      "id": 84,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 84,
      "text": "负有安全生产监督管理职责的部门接到事故报告后，应当立即按照国家有关规定上报事故情况。负有安全生产监督管理职责的部门和有关地方人民政府对事故情况不得隐瞒不报、谎报或者迟报。",
      "blankText": "负有安全生产监督管理职责的部门接到事故报告后，应当立即按照国家有关规定上报事故情况。负有安全生产监督管理职责的部门和有关地方人民政府对事故情况不得隐瞒不报、谎报或者迟报。"
    },
    {
      "id": 85,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 85,
      "text": "有关地方人民政府和负有安全生产监督管理职责的部门的负责人接到生产安全事故报告后，应当按照生产安全事故应急救援预案的要求立即赶到事故现场，组织事故抢救。\n参与事故抢救的部门和单位应当服从统一指挥，加强协同联动，采取有效的应急救援措施，并根据事故救援的需要采取警戒、疏散等措施，防止事故扩大和次生灾害的发生，减少人员伤亡和财产损失。\n事故抢救过程中应当采取必要措施，避免或者减少对环境造成的危害。\n任何单位和个人都应当支持、配合事故抢救，并提供一切便利条件。",
      "blankText": "有关地方人民政府和负有安全生产监督管理职责的部门的负责人接到生产安全事故报告后，应当按照生产安全事故应急救援预案的要求立即赶到事故现场，组织事故抢救。\n参与事故抢救的部门和单位应当服从统一指挥，加强协同联动，采取有效的应急救援措施，并根据事故救援的需要采取警戒、疏散等措施，防止事故扩大和次生灾害的发生，减少人员伤亡和财产损失。\n事故抢救过程中应当采取必要措施，避免或者减少对环境造成的危害。\n任何单位和个人都应当支持、配合事故抢救，并提供一切便利条件。"
    },
    {
      "id": 86,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 86,
      "text": "事故调查处理应当按照科学严谨、依法依规、实事求是、注重实效的原则，及时、准确地查清事故原因，查明事故性质和责任，评估应急处置工作，总结事故教训，提出整改措施，并对事故责任单位和人员提出处理建议。事故调查报告应当依法及时向社会公布。事故调查和处理的具体办法由国务院制定。\n事故发生单位应当及时全面落实整改措施，负有安全生产监督管理职责的部门应当加强监督检查。",
      "blankText": "事故调查处理应当按照科学严谨、依法依规、实事求是、注重实效的原则，及时、准确地查清事故原因，查明事故性质和责任，评估应急处置工作，总结事故教训，提出整改措施，并对事故责任单位和人员提出处理建议。事故调查报告应当依法及时向社会公布。事故调查和处理的具体办法由国务院制定。\n事故发生单位应当及时全面落实整改措施，负有安全生产监督管理职责的部门应当加强监督检查。"
    },
    {
      "id": 87,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 87,
      "text": "生产经营单位发生生产安全事故，经调查确定为责任事故的，除了应当查明事故单位的责任并依法予以追究外，还应当查明对安全生产的有关事项负有审查批准和监督职责的行政部门的责任，对有失职、渎职行为的，依照本法第九十条的规定追究法律责任。",
      "blankText": "生产经营单位发生生产安全事故，经调查确定为责任事故的，除了应当查明事故单位的责任并依法予以追究外，还应当查明对安全生产的有关事项负有审查批准和监督职责的行政部门的责任，对有失职、渎职行为的，依照本法第九十条的规定追究法律责任。"
    },
    {
      "id": 88,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 88,
      "text": "任何单位和个人不得阻挠和干涉对事故的依法调查处理。",
      "blankText": "任何单位和个人不得阻挠和干涉对事故的依法调查处理。"
    },
    {
      "id": 89,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 89,
      "text": "县级以上地方各级人民政府应急管理部门应当定期统计分析本行政区域内发生生产安全事故的情况，并定期向社会公布。",
      "blankText": "县级以上地方各级人民政府应急管理部门应当定期统计分析本行政区域内发生生产安全事故的情况，并定期向社会公布。"
    },
    {
      "id": 90,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 90,
      "text": "负有安全生产监督管理职责的部门的工作人员，有下列行为之一的，给予降级或者撤职的处分；构成犯罪的，依照刑法有关规定追究刑事责任：\n（一）对不符合法定安全生产条件的涉及安全生产的事项予以批准或者验收通过的；\n（二）发现未依法取得批准、验收的单位擅自从事有关活动或者接到举报后不予取缔或者不依法予以处理的；\n（三）对已经依法取得批准的单位不履行监督管理职责，发现其不再具备安全生产条件而不撤销原批准或者发现安全生产违法行为不予查处的；\n（四）在监督检查中发现重大事故隐患，不依法及时处理的。\n负有安全生产监督管理职责的部门的工作人员有前款规定以外的滥用职权、玩忽职守、徇私舞弊行为的，依法给予处分；构成犯罪的，依照刑法有关规定追究刑事责任。",
      "blankText": "负有安全生产监督管理职责的部门的工作人员，有下列行为之一的，给予降级或者撤职的处分；构成犯罪的，依照刑法有关规定追究刑事责任：\n（一）对不符合法定安全生产条件的涉及安全生产的事项予以批准或者验收通过的；\n（二）发现未依法取得批准、验收的单位擅自从事有关活动或者接到举报后不予取缔或者不依法予以处理的；\n（三）对已经依法取得批准的单位不履行监督管理职责，发现其不再具备安全生产条件而不撤销原批准或者发现安全生产违法行为不予查处的；\n（四）在监督检查中发现重大事故隐患，不依法及时处理的。\n负有安全生产监督管理职责的部门的工作人员有前款规定以外的滥用职权、玩忽职守、徇私舞弊行为的，依法给予处分；构成犯罪的，依照刑法有关规定追究刑事责任。"
    },
    {
      "id": 91,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 91,
      "text": "负有安全生产监督管理职责的部门，要求被审查、验收的单位购买其指定的安全设备、器材或者其他产品的，在对安全生产事项的审查、验收中收取费用的，由其上级机关或者监察机关责令改正，责令退还收取的费用；情节严重的，对直接负责的主管人员和其他直接责任人员依法给予处分。",
      "blankText": "负有安全生产监督管理职责的部门，要求被审查、验收的单位购买其指定的安全设备、器材或者其他产品的，在对安全生产事项的审查、验收中收取费用的，由其上级机关或者监察机关责令改正，责令退还收取的费用；情节严重的，对直接负责的主管人员和其他直接责任人员依法给予处分。"
    },
    {
      "id": 92,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 92,
      "text": "承担安全评价、认证、检测、检验职责的机构出具失实报告的，责令停业整顿，并处三万元以上十万元以下的罚款；给他人造成损害的，依法承担赔偿责任。\n承担安全评价、认证、检测、检验职责的机构租借资质、挂靠、出具虚假报告的，没收违法所得；违法所得在十万元以上的，并处违法所得二倍以上五倍以下的罚款，没有违法所得或者违法所得不足十万元的，单处或者并处十万元以上二十万元以下的罚款；对其直接负责的主管人员和其他直接责任人员处五万元以上十万元以下的罚款；给他人造成损害的，与生产经营单位承担连带赔偿责任；构成犯罪的，依照刑法有关规定追究刑事责任。\n对有前款违法行为的机构及其直接责任人员，吊销其相应资质和资格，五年内不得从事安全评价、认证、检测、检验等工作；情节严重的，实行终身行业和职业禁入。",
      "blankText": "承担安全评价、认证、检测、检验职责的机构出具失实报告的，责令停业整顿，并处三万元以上十万元以下的罚款；给他人造成损害的，依法承担赔偿责任。\n承担安全评价、认证、检测、检验职责的机构租借资质、挂靠、出具虚假报告的，没收违法所得；违法所得在十万元以上的，并处违法所得二倍以上五倍以下的罚款，没有违法所得或者违法所得不足十万元的，单处或者并处十万元以上二十万元以下的罚款；对其直接负责的主管人员和其他直接责任人员处五万元以上十万元以下的罚款；给他人造成损害的，与生产经营单位承担连带赔偿责任；构成犯罪的，依照刑法有关规定追究刑事责任。\n对有前款违法行为的机构及其直接责任人员，吊销其相应资质和资格，五年内不得从事安全评价、认证、检测、检验等工作；情节严重的，实行终身行业和职业禁入。"
    },
    {
      "id": 93,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 93,
      "text": "生产经营单位的决策机构、主要负责人或者个人经营的投资人不依照本法规定保证安全生产所必需的资金投入，致使生产经营单位不具备安全生产条件的，责令限期改正，提供必需的资金；逾期未改正的，责令生产经营单位停产停业整顿。\n有前款违法行为，导致发生生产安全事故的，对生产经营单位的主要负责人给予撤职处分，对个人经营的投资人处二万元以上二十万元以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任。",
      "blankText": "生产经营单位的决策机构、主要负责人或者个人经营的投资人不依照本法规定保证安全生产所必需的资金投入，致使生产经营单位不具备安全生产条件的，责令限期改正，提供必需的资金；逾期未改正的，责令生产经营单位停产停业整顿。\n有前款违法行为，导致发生生产安全事故的，对生产经营单位的主要负责人给予撤职处分，对个人经营的投资人处二万元以上二十万元以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任。"
    },
    {
      "id": 94,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 94,
      "text": "生产经营单位的主要负责人未履行本法规定的安全生产管理职责的，责令限期改正，处二万元以上五万元以下的罚款；逾期未改正的，处五万元以上十万元以下的罚款，责令生产经营单位停产停业整顿。\n生产经营单位的主要负责人有前款违法行为，导致发生生产安全事故的，给予撤职处分；构成犯罪的，依照刑法有关规定追究刑事责任。\n生产经营单位的主要负责人依照前款规定受刑事处罚或者撤职处分的，自刑罚执行完毕或者受处分之日起，五年内不得担任任何生产经营单位的主要负责人；对重大、特别重大生产安全事故负有责任的，终身不得担任本行业生产经营单位的主要负责人。",
      "blankText": "生产经营单位的主要负责人未履行本法规定的安全生产管理职责的，责令限期改正，处二万元以上五万元以下的罚款；逾期未改正的，处五万元以上十万元以下的罚款，责令生产经营单位停产停业整顿。\n生产经营单位的主要负责人有前款违法行为，导致发生生产安全事故的，给予撤职处分；构成犯罪的，依照刑法有关规定追究刑事责任。\n生产经营单位的主要负责人依照前款规定受刑事处罚或者撤职处分的，自刑罚执行完毕或者受处分之日起，五年内不得担任任何生产经营单位的主要负责人；对重大、特别重大生产安全事故负有责任的，终身不得担任本行业生产经营单位的主要负责人。"
    },
    {
      "id": 95,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 95,
      "text": "生产经营单位的主要负责人未履行本法规定的安全生产管理职责，导致发生生产安全事故的，由应急管理部门依照下列规定处以罚款：\n（一）发生一般事故的，处上一年年收入百分之四十的罚款；\n（二）发生较大事故的，处上一年年收入百分之六十的罚款；\n（三）发生重大事故的，处上一年年收入百分之八十的罚款；\n（四）发生特别重大事故的，处上一年年收入百分之一百的罚款。",
      "blankText": "生产经营单位的主要负责人未履行本法规定的安全生产管理职责，导致发生生产安全事故的，由应急管理部门依照下列规定处以罚款：\n（一）发生一般事故的，处上一年年收入百分之四十的罚款；\n（二）发生较大事故的，处上一年年收入百分之六十的罚款；\n（三）发生重大事故的，处上一年年收入百分之八十的罚款；\n（四）发生特别重大事故的，处上一年年收入百分之一百的罚款。"
    },
    {
      "id": 96,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 96,
      "text": "生产经营单位的其他负责人和安全生产管理人员未履行本法规定的安全生产管理职责的，责令限期改正，处一万元以上三万元以下的罚款；导致发生生产安全事故的，暂停或者吊销其与安全生产有关的资格，并处上一年年收入百分之二十以上百分之五十以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任。",
      "blankText": "生产经营单位的其他负责人和安全生产管理人员未履行本法规定的安全生产管理职责的，责令限期改正，处一万元以上三万元以下的罚款；导致发生生产安全事故的，暂停或者吊销其与安全生产有关的资格，并处上一年年收入百分之二十以上百分之五十以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任。"
    },
    {
      "id": 97,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 97,
      "text": "生产经营单位有下列行为之一的，责令限期改正，处十万元以下的罚款；逾期未改正的，责令停产停业整顿，并处十万元以上二十万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处二万元以上五万元以下的罚款：\n（一）未按照规定设置安全生产管理机构或者配备安全生产管理人员、注册安全工程师的；\n（二）危险物品的生产、经营、储存、装卸单位以及矿山、金属冶炼、建筑施工、运输单位的主要负责人和安全生产管理人员未按照规定经考核合格的；\n（三）未按照规定对从业人员、被派遣劳动者、实习学生进行安全生产教育和培训，或者未按照规定如实告知有关的安全生产事项的；\n（四）未如实记录安全生产教育和培训情况的；\n（五）未将事故隐患排查治理情况如实记录或者未向从业人员通报的；\n（六）未按照规定制定生产安全事故应急救援预案或者未定期组织演练的；\n（七）特种作业人员未按照规定经专门的安全作业培训并取得相应资格，上岗作业的。",
      "blankText": "生产经营单位有下列行为之一的，责令限期改正，处十万元以下的罚款；逾期未改正的，责令停产停业整顿，并处十万元以上二十万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处二万元以上五万元以下的罚款：\n（一）未按照规定设置安全生产管理机构或者配备安全生产管理人员、注册安全工程师的；\n（二）危险物品的生产、经营、储存、装卸单位以及矿山、金属冶炼、建筑施工、运输单位的主要负责人和安全生产管理人员未按照规定经考核合格的；\n（三）未按照规定对从业人员、被派遣劳动者、实习学生进行安全生产教育和培训，或者未按照规定如实告知有关的安全生产事项的；\n（四）未如实记录安全生产教育和培训情况的；\n（五）未将事故隐患排查治理情况如实记录或者未向从业人员通报的；\n（六）未按照规定制定生产安全事故应急救援预案或者未定期组织演练的；\n（七）特种作业人员未按照规定经专门的安全作业培训并取得相应资格，上岗作业的。"
    },
    {
      "id": 98,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 98,
      "text": "生产经营单位有下列行为之一的，责令停止建设或者停产停业整顿，限期改正，并处十万元以上五十万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处二万元以上五万元以下的罚款；逾期未改正的，处五十万元以上一百万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处五万元以上十万元以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任：\n（一）未按照规定对矿山、金属冶炼建设项目或者用于生产、储存、装卸危险物品的建设项目进行安全评价的；\n（二）矿山、金属冶炼建设项目或者用于生产、储存、装卸危险物品的建设项目没有安全设施设计或者安全设施设计未按照规定报经有关部门审查同意的；\n（三）矿山、金属冶炼建设项目或者用于生产、储存、装卸危险物品的建设项目的施工单位未按照批准的安全设施设计施工的；\n（四）矿山、金属冶炼建设项目或者用于生产、储存、装卸危险物品的建设项目竣工投入生产或者使用前，安全设施未经验收合格的。",
      "blankText": "生产经营单位有下列行为之一的，责令停止建设或者停产停业整顿，限期改正，并处十万元以上五十万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处二万元以上五万元以下的罚款；逾期未改正的，处五十万元以上一百万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处五万元以上十万元以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任：\n（一）未按照规定对矿山、金属冶炼建设项目或者用于生产、储存、装卸危险物品的建设项目进行安全评价的；\n（二）矿山、金属冶炼建设项目或者用于生产、储存、装卸危险物品的建设项目没有安全设施设计或者安全设施设计未按照规定报经有关部门审查同意的；\n（三）矿山、金属冶炼建设项目或者用于生产、储存、装卸危险物品的建设项目的施工单位未按照批准的安全设施设计施工的；\n（四）矿山、金属冶炼建设项目或者用于生产、储存、装卸危险物品的建设项目竣工投入生产或者使用前，安全设施未经验收合格的。"
    },
    {
      "id": 99,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 99,
      "text": "生产经营单位有下列行为之一的，责令限期改正，处五万元以下的罚款；逾期未改正的，处五万元以上二十万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处一万元以上二万元以下的罚款；情节严重的，责令停产停业整顿；构成犯罪的，依照刑法有关规定追究刑事责任：\n（一）未在有较大危险因素的生产经营场所和有关设施、设备上设置明显的安全警示标志的；\n（二）安全设备的安装、使用、检测、改造和报废不符合国家标准或者行业标准的；\n（三）未对安全设备进行经常性维护、保养和定期检测的；\n（四）关闭、破坏直接关系生产安全的监控、报警、防护、救生设备、设施，或者篡改、隐瞒、销毁其相关数据、信息的；\n（五）未为从业人员提供符合国家标准或者行业标准的劳动防护用品的；\n（六）危险物品的容器、运输工具，以及涉及人身安全、危险性较大的海洋石油开采特种设备和矿山井下特种设备未经具有专业资质的机构检测、检验合格，取得安全使用证或者安全标志，投入使用的；\n（七）使用应当淘汰的危及生产安全的工艺、设备的；\n（八）餐饮等行业的生产经营单位使用燃气未安装可燃气体报警装置的。",
      "blankText": "生产经营单位有下列行为之一的，责令限期改正，处五万元以下的罚款；逾期未改正的，处五万元以上二十万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处一万元以上二万元以下的罚款；情节严重的，责令停产停业整顿；构成犯罪的，依照刑法有关规定追究刑事责任：\n（一）未在有较大危险因素的生产经营场所和有关设施、设备上设置明显的安全警示标志的；\n（二）安全设备的安装、使用、检测、改造和报废不符合国家标准或者行业标准的；\n（三）未对安全设备进行经常性维护、保养和定期检测的；\n（四）关闭、破坏直接关系生产安全的监控、报警、防护、救生设备、设施，或者篡改、隐瞒、销毁其相关数据、信息的；\n（五）未为从业人员提供符合国家标准或者行业标准的劳动防护用品的；\n（六）危险物品的容器、运输工具，以及涉及人身安全、危险性较大的海洋石油开采特种设备和矿山井下特种设备未经具有专业资质的机构检测、检验合格，取得安全使用证或者安全标志，投入使用的；\n（七）使用应当淘汰的危及生产安全的工艺、设备的；\n（八）餐饮等行业的生产经营单位使用燃气未安装可燃气体报警装置的。"
    },
    {
      "id": 100,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 100,
      "text": "未经依法批准，擅自生产、经营、运输、储存、使用危险物品或者处置废弃危险物品的，依照有关危险物品安全管理的法律、行政法规的规定予以处罚；构成犯罪的，依照刑法有关规定追究刑事责任。",
      "blankText": "未经依法批准，擅自生产、经营、运输、储存、使用危险物品或者处置废弃危险物品的，依照有关危险物品安全管理的法律、行政法规的规定予以处罚；构成犯罪的，依照刑法有关规定追究刑事责任。"
    },
    {
      "id": 101,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 101,
      "text": "生产经营单位有下列行为之一的，责令限期改正，处十万元以下的罚款；逾期未改正的，责令停产停业整顿，并处十万元以上二十万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处二万元以上五万元以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任：\n（一）生产、经营、运输、储存、使用危险物品或者处置废弃危险物品，未建立专门安全管理制度、未采取可靠的安全措施的；\n（二）对重大危险源未登记建档，未进行定期检测、评估、监控，未制定应急预案，或者未告知应急措施的；\n（三）进行爆破、吊装、动火、临时用电以及国务院应急管理部门会同国务院有关部门规定的其他危险作业，未安排专门人员进行现场安全管理的；\n（四）未建立安全风险分级管控制度或者未按照安全风险分级采取相应管控措施的；\n（五）未建立事故隐患排查治理制度，或者重大事故隐患排查治理情况未按照规定报告的。",
      "blankText": "生产经营单位有下列行为之一的，责令限期改正，处十万元以下的罚款；逾期未改正的，责令停产停业整顿，并处十万元以上二十万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处二万元以上五万元以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任：\n（一）生产、经营、运输、储存、使用危险物品或者处置废弃危险物品，未建立专门安全管理制度、未采取可靠的安全措施的；\n（二）对重大危险源未登记建档，未进行定期检测、评估、监控，未制定应急预案，或者未告知应急措施的；\n（三）进行爆破、吊装、动火、临时用电以及国务院应急管理部门会同国务院有关部门规定的其他危险作业，未安排专门人员进行现场安全管理的；\n（四）未建立安全风险分级管控制度或者未按照安全风险分级采取相应管控措施的；\n（五）未建立事故隐患排查治理制度，或者重大事故隐患排查治理情况未按照规定报告的。"
    },
    {
      "id": 102,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 102,
      "text": "生产经营单位未采取措施消除事故隐患的，责令立即消除或者限期消除，处五万元以下的罚款；生产经营单位拒不执行的，责令停产停业整顿，对其直接负责的主管人员和其他直接责任人员处五万元以上十万元以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任。",
      "blankText": "生产经营单位未采取措施消除事故隐患的，责令立即消除或者限期消除，处五万元以下的罚款；生产经营单位拒不执行的，责令停产停业整顿，对其直接负责的主管人员和其他直接责任人员处五万元以上十万元以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任。"
    },
    {
      "id": 103,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 103,
      "text": "生产经营单位将生产经营项目、场所、设备发包或者出租给不具备安全生产条件或者相应资质的单位或者个人的，责令限期改正，没收违法所得；违法所得十万元以上的，并处违法所得二倍以上五倍以下的罚款；没有违法所得或者违法所得不足十万元的，单处或者并处十万元以上二十万元以下的罚款；对其直接负责的主管人员和其他直接责任人员处一万元以上二万元以下的罚款；导致发生生产安全事故给他人造成损害的，与承包方、承租方承担连带赔偿责任。\n生产经营单位未与承包单位、承租单位签订专门的安全生产管理协议或者未在承包合同、租赁合同中明确各自的安全生产管理职责，或者未对承包单位、承租单位的安全生产统一协调、管理的，责令限期改正，处五万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处一万元以下的罚款；逾期未改正的，责令停产停业整顿。\n矿山、金属冶炼建设项目和用于生产、储存、装卸危险物品的建设项目的施工单位未按照规定对施工项目进行安全管理的，责令限期改正，处十万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处二万元以下的罚款；逾期未改正的，责令停产停业整顿。以上施工单位倒卖、出租、出借、挂靠或者以其他形式非法转让施工资质的，责令停产停业整顿，吊销资质证书，没收违法所得；违法所得十万元以上的，并处违法所得二倍以上五倍以下的罚款，没有违法所得或者违法所得不足十万元的，单处或者并处十万元以上二十万元以下的罚款；对其直接负责的主管人员和其他直接责任人员处五万元以上十万元以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任。",
      "blankText": "生产经营单位将生产经营项目、场所、设备发包或者出租给不具备安全生产条件或者相应资质的单位或者个人的，责令限期改正，没收违法所得；违法所得十万元以上的，并处违法所得二倍以上五倍以下的罚款；没有违法所得或者违法所得不足十万元的，单处或者并处十万元以上二十万元以下的罚款；对其直接负责的主管人员和其他直接责任人员处一万元以上二万元以下的罚款；导致发生生产安全事故给他人造成损害的，与承包方、承租方承担连带赔偿责任。\n生产经营单位未与承包单位、承租单位签订专门的安全生产管理协议或者未在承包合同、租赁合同中明确各自的安全生产管理职责，或者未对承包单位、承租单位的安全生产统一协调、管理的，责令限期改正，处五万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处一万元以下的罚款；逾期未改正的，责令停产停业整顿。\n矿山、金属冶炼建设项目和用于生产、储存、装卸危险物品的建设项目的施工单位未按照规定对施工项目进行安全管理的，责令限期改正，处十万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处二万元以下的罚款；逾期未改正的，责令停产停业整顿。以上施工单位倒卖、出租、出借、挂靠或者以其他形式非法转让施工资质的，责令停产停业整顿，吊销资质证书，没收违法所得；违法所得十万元以上的，并处违法所得二倍以上五倍以下的罚款，没有违法所得或者违法所得不足十万元的，单处或者并处十万元以上二十万元以下的罚款；对其直接负责的主管人员和其他直接责任人员处五万元以上十万元以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任。"
    },
    {
      "id": 104,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 104,
      "text": "两个以上生产经营单位在同一作业区域内进行可能危及对方安全生产的生产经营活动，未签订安全生产管理协议或者未指定专职安全生产管理人员进行安全检查与协调的，责令限期改正，处五万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处一万元以下的罚款；逾期未改正的，责令停产停业。",
      "blankText": "两个以上生产经营单位在同一作业区域内进行可能危及对方安全生产的生产经营活动，未签订安全生产管理协议或者未指定专职安全生产管理人员进行安全检查与协调的，责令限期改正，处五万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处一万元以下的罚款；逾期未改正的，责令停产停业。"
    },
    {
      "id": 105,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 105,
      "text": "生产经营单位有下列行为之一的，责令限期改正，处五万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处一万元以下的罚款；逾期未改正的，责令停产停业整顿；构成犯罪的，依照刑法有关规定追究刑事责任：\n（一）生产、经营、储存、使用危险物品的车间、商店、仓库与员工宿舍在同一座建筑内，或者与员工宿舍的距离不符合安全要求的；\n（二）生产经营场所和员工宿舍未设有符合紧急疏散需要、标志明显、保持畅通的出口、疏散通道，或者占用、锁闭、封堵生产经营场所或者员工宿舍出口、疏散通道的。",
      "blankText": "生产经营单位有下列行为之一的，责令限期改正，处五万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处一万元以下的罚款；逾期未改正的，责令停产停业整顿；构成犯罪的，依照刑法有关规定追究刑事责任：\n（一）生产、经营、储存、使用危险物品的车间、商店、仓库与员工宿舍在同一座建筑内，或者与员工宿舍的距离不符合安全要求的；\n（二）生产经营场所和员工宿舍未设有符合紧急疏散需要、标志明显、保持畅通的出口、疏散通道，或者占用、锁闭、封堵生产经营场所或者员工宿舍出口、疏散通道的。"
    },
    {
      "id": 106,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 106,
      "text": "生产经营单位与从业人员订立协议，免除或者减轻其对从业人员因生产安全事故伤亡依法应承担的责任的，该协议无效；对生产经营单位的主要负责人、个人经营的投资人处二万元以上十万元以下的罚款。",
      "blankText": "生产经营单位与从业人员订立协议，免除或者减轻其对从业人员因生产安全事故伤亡依法应承担的责任的，该协议无效；对生产经营单位的主要负责人、个人经营的投资人处二万元以上十万元以下的罚款。"
    },
    {
      "id": 107,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 107,
      "text": "生产经营单位的从业人员不落实岗位安全责任，不服从管理，违反安全生产规章制度或者操作规程的，由生产经营单位给予批评教育，依照有关规章制度给予处分；构成犯罪的，依照刑法有关规定追究刑事责任。",
      "blankText": "生产经营单位的从业人员不落实岗位安全责任，不服从管理，违反安全生产规章制度或者操作规程的，由生产经营单位给予批评教育，依照有关规章制度给予处分；构成犯罪的，依照刑法有关规定追究刑事责任。"
    },
    {
      "id": 108,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 108,
      "text": "违反本法规定，生产经营单位拒绝、阻碍负有安全生产监督管理职责的部门依法实施监督检查的，责令改正；拒不改正的，处二万元以上二十万元以下的罚款；对其直接负责的主管人员和其他直接责任人员处一万元以上二万元以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任。",
      "blankText": "违反本法规定，生产经营单位拒绝、阻碍负有安全生产监督管理职责的部门依法实施监督检查的，责令改正；拒不改正的，处二万元以上二十万元以下的罚款；对其直接负责的主管人员和其他直接责任人员处一万元以上二万元以下的罚款；构成犯罪的，依照刑法有关规定追究刑事责任。"
    },
    {
      "id": 109,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 109,
      "text": "高危行业、领域的生产经营单位未按照国家规定投保安全生产责任保险的，责令限期改正，处五万元以上十万元以下的罚款；逾期未改正的，处十万元以上二十万元以下的罚款。",
      "blankText": "高危行业、领域的生产经营单位未按照国家规定投保安全生产责任保险的，责令限期改正，处五万元以上十万元以下的罚款；逾期未改正的，处十万元以上二十万元以下的罚款。"
    },
    {
      "id": 110,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 110,
      "text": "生产经营单位的主要负责人在本单位发生生产安全事故时，不立即组织抢救或者在事故调查处理期间擅离职守或者逃匿的，给予降级、撤职的处分，并由应急管理部门处上一年年收入百分之六十至百分之一百的罚款；对逃匿的处十五日以下拘留；构成犯罪的，依照刑法有关规定追究刑事责任。\n生产经营单位的主要负责人对生产安全事故隐瞒不报、谎报或者迟报的，依照前款规定处罚。",
      "blankText": "生产经营单位的主要负责人在本单位发生生产安全事故时，不立即组织抢救或者在事故调查处理期间擅离职守或者逃匿的，给予降级、撤职的处分，并由应急管理部门处上一年年收入百分之六十至百分之一百的罚款；对逃匿的处十五日以下拘留；构成犯罪的，依照刑法有关规定追究刑事责任。\n生产经营单位的主要负责人对生产安全事故隐瞒不报、谎报或者迟报的，依照前款规定处罚。"
    },
    {
      "id": 111,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 111,
      "text": "有关地方人民政府、负有安全生产监督管理职责的部门，对生产安全事故隐瞒不报、谎报或者迟报的，对直接负责的主管人员和其他直接责任人员依法给予处分；构成犯罪的，依照刑法有关规定追究刑事责任。",
      "blankText": "有关地方人民政府、负有安全生产监督管理职责的部门，对生产安全事故隐瞒不报、谎报或者迟报的，对直接负责的主管人员和其他直接责任人员依法给予处分；构成犯罪的，依照刑法有关规定追究刑事责任。"
    },
    {
      "id": 112,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 112,
      "text": "生产经营单位违反本法规定，被责令改正且受到罚款处罚，拒不改正的，负有安全生产监督管理职责的部门可以自作出责令改正之日的次日起，按照原处罚数额按日连续处罚。",
      "blankText": "生产经营单位违反本法规定，被责令改正且受到罚款处罚，拒不改正的，负有安全生产监督管理职责的部门可以自作出责令改正之日的次日起，按照原处罚数额按日连续处罚。"
    },
    {
      "id": 113,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 113,
      "text": "生产经营单位存在下列情形之一的，负有安全生产监督管理职责的部门应当提请地方人民政府予以关闭，有关部门应当依法吊销其有关证照。生产经营单位主要负责人五年内不得担任任何生产经营单位的主要负责人；情节严重的，终身不得担任本行业生产经营单位的主要负责人：\n（一）存在重大事故隐患，一百八十日内三次或者一年内四次受到本法规定的行政处罚的；\n（二）经停产停业整顿，仍不具备法律、行政法规和国家标准或者行业标准规定的安全生产条件的；\n（三）不具备法律、行政法规和国家标准或者行业标准规定的安全生产条件，导致发生重大、特别重大生产安全事故的；\n（四）拒不执行负有安全生产监督管理职责的部门作出的停产停业整顿决定的。",
      "blankText": "生产经营单位存在下列情形之一的，负有安全生产监督管理职责的部门应当提请地方人民政府予以关闭，有关部门应当依法吊销其有关证照。生产经营单位主要负责人五年内不得担任任何生产经营单位的主要负责人；情节严重的，终身不得担任本行业生产经营单位的主要负责人：\n（一）存在重大事故隐患，一百八十日内三次或者一年内四次受到本法规定的行政处罚的；\n（二）经停产停业整顿，仍不具备法律、行政法规和国家标准或者行业标准规定的安全生产条件的；\n（三）不具备法律、行政法规和国家标准或者行业标准规定的安全生产条件，导致发生重大、特别重大生产安全事故的；\n（四）拒不执行负有安全生产监督管理职责的部门作出的停产停业整顿决定的。"
    },
    {
      "id": 114,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 114,
      "text": "发生生产安全事故，对负有责任的生产经营单位除要求其依法承担相应的赔偿等责任外，由应急管理部门依照下列规定处以罚款：\n（一）发生一般事故的，处三十万元以上一百万元以下的罚款；\n（二）发生较大事故的，处一百万元以上二百万元以下的罚款；\n（三）发生重大事故的，处二百万元以上一千万元以下的罚款；\n（四）发生特别重大事故的，处一千万元以上二千万元以下的罚款。\n发生生产安全事故，情节特别严重、影响特别恶劣的，应急管理部门可以按照前款罚款数额的二倍以上五倍以下对负有责任的生产经营单位处以罚款。",
      "blankText": "发生生产安全事故，对负有责任的生产经营单位除要求其依法承担相应的赔偿等责任外，由应急管理部门依照下列规定处以罚款：\n（一）发生一般事故的，处三十万元以上一百万元以下的罚款；\n（二）发生较大事故的，处一百万元以上二百万元以下的罚款；\n（三）发生重大事故的，处二百万元以上一千万元以下的罚款；\n（四）发生特别重大事故的，处一千万元以上二千万元以下的罚款。\n发生生产安全事故，情节特别严重、影响特别恶劣的，应急管理部门可以按照前款罚款数额的二倍以上五倍以下对负有责任的生产经营单位处以罚款。"
    },
    {
      "id": 115,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 115,
      "text": "生产经营单位违反本法规定，导致发生生产安全事故，给他人造成损害的，应当依法承担赔偿责任。\n生产经营单位发生生产安全事故造成人员伤亡、他人财产损失的，应当依法承担赔偿责任；拒不承担或者其负责人逃匿的，由人民法院依法强制执行。\n生产安全事故的责任人未依法承担赔偿责任，经人民法院依法采取执行措施后，仍不能对受害人给予足额赔偿的，应当继续履行赔偿义务；受害人发现责任人有其他财产的，可以随时请求人民法院执行。",
      "blankText": "生产经营单位违反本法规定，导致发生生产安全事故，给他人造成损害的，应当依法承担赔偿责任。\n生产经营单位发生生产安全事故造成人员伤亡、他人财产损失的，应当依法承担赔偿责任；拒不承担或者其负责人逃匿的，由人民法院依法强制执行。\n生产安全事故的责任人未依法承担赔偿责任，经人民法院依法采取执行措施后，仍不能对受害人给予足额赔偿的，应当继续履行赔偿义务；受害人发现责任人有其他财产的，可以随时请求人民法院执行。"
    },
    {
      "id": 116,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 116,
      "text": "本法下列用语的含义：\n危险物品，是指易燃易爆物品、危险化学品、放射性物品等能够危及人身安全和财产安全的物品。\n重大危险源，是指长期地或者临时地生产、搬运、使用或者储存危险物品，且危险物品的数量等于或者超过临界量的单元（包括场所和设施）。",
      "blankText": "本法下列用语的含义：\n危险物品，是指易燃易爆物品、危险化学品、放射性物品等能够危及人身安全和财产安全的物品。\n重大危险源，是指长期地或者临时地生产、搬运、使用或者储存危险物品，且危险物品的数量等于或者超过临界量的单元（包括场所和设施）。"
    },
    {
      "id": 117,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 117,
      "text": "本法规定的行政处罚，由应急管理部门和其他负有安全生产监督管理职责的部门按照职责分工决定；其中，根据本法第九十五条、第一百一十条、第一百一十四条的规定应当给予民航、铁路、电力行业的生产经营单位及其主要负责人行政处罚的，也可以由主管的负有安全生产监督管理职责的部门进行处罚。予以关闭的行政处罚，由负有安全生产监督管理职责的部门报请县级以上人民政府按照国务院规定的权限决定；给予拘留的行政处罚，由公安机关依照治安管理处罚法的规定决定。",
      "blankText": "本法规定的行政处罚，由应急管理部门和其他负有安全生产监督管理职责的部门按照职责分工决定；其中，根据本法第九十五条、第一百一十条、第一百一十四条的规定应当给予民航、铁路、电力行业的生产经营单位及其主要负责人行政处罚的，也可以由主管的负有安全生产监督管理职责的部门进行处罚。予以关闭的行政处罚，由负有安全生产监督管理职责的部门报请县级以上人民政府按照国务院规定的权限决定；给予拘留的行政处罚，由公安机关依照治安管理处罚法的规定决定。"
    },
    {
      "id": 118,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 118,
      "text": "本法自2002年11月1日起施行。",
      "blankText": "本法自______年______月______日起施行。"
    },
    {
      "id": 119,
      "category": "劳动安全",
      "law": "安全生产法",
      "articleNum": 119,
      "text": "本法修正案自2021年9月1日起施行。",
      "blankText": "本法修正案自______年______月______日起施行。"
    },
    {
      "id": 120,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 1,
      "text": "为了预防、控制和消除职业病危害，防治职业病，保护劳动者健康及其相关权益，促进经济社会发展，根据宪法，制定本法。",
      "blankText": "为了预防、控制和消除职业病危害，防治职业病，保护劳动者健康及其相关权益，促进经济社会发展，根据宪法，制定本法。"
    },
    {
      "id": 121,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 2,
      "text": "本法适用于中华人民共和国领域内的职业病防治活动。\n本法所称职业病，是指企业、事业单位和个体经济组织等用人单位的劳动者在职业活动中，因接触粉尘、放射性物质和其他有毒、有害因素而引起的疾病。\n职业病的分类和目录由国务院卫生行政部门会同国务院劳动保障行政部门制定、调整并公布。",
      "blankText": "本法适用于中华人民共和国领域内的职业病防治活动。\n本法所称职业病，是指企业、事业单位和个体经济组织等用人单位的劳动者在职业活动中，因接触粉尘、放射性物质和其他有毒、有害因素而引起的疾病。\n职业病的分类和目录由国务院卫生行政部门会同国务院劳动保障行政部门制定、调整并公布。"
    },
    {
      "id": 122,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 3,
      "text": "职业病防治工作坚持预防为主、防治结合的方针，建立用人单位负责、行政机关监管、行业自律、职工参与和社会监督的机制，实行分类管理、综合治理。",
      "blankText": "职业病防治工作坚持预防为主、防治结合的方针，建立用人单位负责、行政机关监管、行业自律、职工参与和社会监督的机制，实行分类管理、综合治理。"
    },
    {
      "id": 123,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 4,
      "text": "劳动者依法享有职业卫生保护的权利。\n用人单位应当为劳动者创造符合国家职业卫生标准和卫生要求的工作环境和条件，并采取措施保障劳动者获得职业卫生保护。\n工会组织依法对职业病防治工作进行监督，维护劳动者的合法权益。用人单位制定或者修改有关职业病防治的规章制度，应当听取工会组织的意见。",
      "blankText": "劳动者依法享有职业卫生保护的权利。\n用人单位应当为劳动者创造符合国家职业卫生标准和卫生要求的工作环境和条件，并采取措施保障劳动者获得职业卫生保护。\n工会组织依法对职业病防治工作进行监督，维护劳动者的合法权益。用人单位制定或者修改有关职业病防治的规章制度，应当听取工会组织的意见。"
    },
    {
      "id": 124,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 5,
      "text": "用人单位应当建立、健全职业病防治责任制，加强对职业病防治的管理，提高职业病防治水平，对本单位产生的职业病危害承担责任。",
      "blankText": "用人单位应当建立、健全职业病防治责任制，加强对职业病防治的管理，提高职业病防治水平，对本单位产生的职业病危害承担责任。"
    },
    {
      "id": 125,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 6,
      "text": "用人单位的主要负责人对本单位的职业病防治工作全面负责。",
      "blankText": "用人单位的主要负责人对本单位的职业病防治工作全面负责。"
    },
    {
      "id": 126,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 7,
      "text": "用人单位必须依法参加工伤保险。\n国务院和县级以上地方人民政府劳动保障行政部门应当加强对工伤保险的监督管理，确保劳动者依法享受工伤保险待遇。",
      "blankText": "用人单位必须依法参加工伤保险。\n国务院和县级以上地方人民政府劳动保障行政部门应当加强对工伤保险的监督管理，确保劳动者依法享受工伤保险待遇。"
    },
    {
      "id": 127,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 8,
      "text": "国家鼓励和支持研制、开发、推广、应用有利于职业病防治和保护劳动者健康的新技术、新工艺、新设备、新材料，加强对职业病的机理和发生规律的基础研究，提高职业病防治科学技术水平；积极采用有效的职业病防治技术、工艺、设备、材料；限制使用或者淘汰职业病危害严重的技术、工艺、设备、材料。\n国家鼓励和支持职业病医疗康复机构的建设。",
      "blankText": "国家鼓励和支持研制、开发、推广、应用有利于职业病防治和保护劳动者健康的新技术、新工艺、新设备、新材料，加强对职业病的机理和发生规律的基础研究，提高职业病防治科学技术水平；积极采用有效的职业病防治技术、工艺、设备、材料；限制使用或者淘汰职业病危害严重的技术、工艺、设备、材料。\n国家鼓励和支持职业病医疗康复机构的建设。"
    },
    {
      "id": 128,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 9,
      "text": "国家实行职业卫生监督制度。\n国务院卫生行政部门、劳动保障行政部门依照本法和国务院确定的职责，负责全国职业病防治的监督管理工作。国务院有关部门在各自的职责范围内负责职业病防治的有关监督管理工作。\n县级以上地方人民政府卫生行政部门、劳动保障行政部门依据各自职责，负责本行政区域内职业病防治的监督管理工作。县级以上地方人民政府有关部门在各自的职责范围内负责职业病防治的有关监督管理工作。\n县级以上人民政府卫生行政部门、劳动保障行政部门（以下统称职业卫生监督管理部门）应当加强沟通，密切配合，按照各自职责分工，依法行使职权，承担责任。",
      "blankText": "国家实行职业卫生监督制度。\n国务院卫生行政部门、劳动保障行政部门依照本法和国务院确定的职责，负责全国职业病防治的监督管理工作。国务院有关部门在各自的职责范围内负责职业病防治的有关监督管理工作。\n县级以上地方人民政府卫生行政部门、劳动保障行政部门依据各自职责，负责本行政区域内职业病防治的监督管理工作。县级以上地方人民政府有关部门在各自的职责范围内负责职业病防治的有关监督管理工作。\n县级以上人民政府卫生行政部门、劳动保障行政部门（以下统称职业卫生监督管理部门）应当加强沟通，密切配合，按照各自职责分工，依法行使职权，承担责任。"
    },
    {
      "id": 129,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 10,
      "text": "国务院和县级以上地方人民政府应当制定职业病防治规划，将其纳入国民经济和社会发展计划，并组织实施。\n县级以上地方人民政府统一负责、领导、组织、协调本行政区域的职业病防治工作，建立健全职业病防治工作体制、机制，统一领导、指挥职业卫生突发事件应对工作；加强职业病防治能力建设和服务体系建设，完善、落实职业病防治工作责任制。\n乡、民族乡、镇的人民政府应当认真执行本法，支持职业卫生监督管理部门依法履行职责。",
      "blankText": "国务院和县级以上地方人民政府应当制定职业病防治规划，将其纳入国民经济和社会发展计划，并组织实施。\n县级以上地方人民政府统一负责、领导、组织、协调本行政区域的职业病防治工作，建立健全职业病防治工作体制、机制，统一领导、指挥职业卫生突发事件应对工作；加强职业病防治能力建设和服务体系建设，完善、落实职业病防治工作责任制。\n乡、民族乡、镇的人民政府应当认真执行本法，支持职业卫生监督管理部门依法履行职责。"
    },
    {
      "id": 130,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 11,
      "text": "县级以上人民政府职业卫生监督管理部门应当加强对职业病防治的宣传教育，普及职业病防治的知识，增强用人单位的职业病防治观念，提高劳动者的职业健康意识、自我保护意识和行使职业卫生保护权利的能力。",
      "blankText": "县级以上人民政府职业卫生监督管理部门应当加强对职业病防治的宣传教育，普及职业病防治的知识，增强用人单位的职业病防治观念，提高劳动者的职业健康意识、自我保护意识和行使职业卫生保护权利的能力。"
    },
    {
      "id": 131,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 12,
      "text": "有关防治职业病的国家职业卫生标准，由国务院卫生行政部门组织制定并公布。\n国务院卫生行政部门应当组织开展重点职业病监测和专项调查，对职业健康风险进行评估，为制定职业卫生标准和职业病防治政策提供科学依据。\n县级以上地方人民政府卫生行政部门应当定期对本行政区域的职业病防治情况进行统计和调查分析。",
      "blankText": "有关防治职业病的国家职业卫生标准，由国务院卫生行政部门组织制定并公布。\n国务院卫生行政部门应当组织开展重点职业病监测和专项调查，对职业健康风险进行评估，为制定职业卫生标准和职业病防治政策提供科学依据。\n县级以上地方人民政府卫生行政部门应当定期对本行政区域的职业病防治情况进行统计和调查分析。"
    },
    {
      "id": 132,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 13,
      "text": "任何单位和个人有权对违反本法的行为进行检举和控告。有关部门收到相关的检举和控告后，应当及时处理。\n对防治职业病成绩显著的单位和个人，给予奖励。",
      "blankText": "任何单位和个人有权对违反本法的行为进行检举和控告。有关部门收到相关的检举和控告后，应当及时处理。\n对防治职业病成绩显著的单位和个人，给予奖励。"
    },
    {
      "id": 133,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 14,
      "text": "用人单位应当依照法律、法规要求，严格遵守国家职业卫生标准，落实职业病预防措施，从源头上控制和消除职业病危害。",
      "blankText": "用人单位应当依照法律、法规要求，严格遵守国家职业卫生标准，落实职业病预防措施，从源头上控制和消除职业病危害。"
    },
    {
      "id": 134,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 15,
      "text": "产生职业病危害的用人单位的设立除应当符合法律、行政法规规定的设立条件外，其工作场所还应当符合下列职业卫生要求：\n（一）职业病危害因素的强度或者浓度符合国家职业卫生标准；\n（二）有与职业病危害防护相适应的设施；\n（三）生产布局合理，符合有害与无害作业分开的原则；\n（四）有配套的更衣间、洗浴间、孕妇休息间等卫生设施；\n（五）设备、工具、用具等设施符合保护劳动者生理、心理健康的要求；\n（六）法律、行政法规和国务院卫生行政部门、劳动保障行政部门关于保护劳动者健康的其他要求。",
      "blankText": "产生职业病危害的用人单位的设立除应当符合法律、行政法规规定的设立条件外，其工作场所还应当符合下列职业卫生要求：\n（一）职业病危害因素的强度或者浓度符合国家职业卫生标准；\n（二）有与职业病危害防护相适应的设施；\n（三）生产布局合理，符合有害与无害作业分开的原则；\n（四）有配套的更衣间、洗浴间、孕妇休息间等卫生设施；\n（五）设备、工具、用具等设施符合保护劳动者生理、心理健康的要求；\n（六）法律、行政法规和国务院卫生行政部门、劳动保障行政部门关于保护劳动者健康的其他要求。"
    },
    {
      "id": 135,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 16,
      "text": "国家建立职业病危害项目申报制度。\n用人单位工作场所存在职业病目录所列职业病的危害因素的，应当及时、如实向所在地卫生行政部门申报危害项目，接受监督。\n职业病危害因素分类目录由国务院卫生行政部门制定、调整并公布。职业病危害项目申报的具体办法由国务院卫生行政部门制定。",
      "blankText": "国家建立职业病危害项目申报制度。\n用人单位工作场所存在职业病目录所列职业病的危害因素的，应当及时、如实向所在地卫生行政部门申报危害项目，接受监督。\n职业病危害因素分类目录由国务院卫生行政部门制定、调整并公布。职业病危害项目申报的具体办法由国务院卫生行政部门制定。"
    },
    {
      "id": 136,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 17,
      "text": "新建、扩建、改建建设项目和技术改造、技术引进项目（以下统称建设项目）可能产生职业病危害的，建设单位在可行性论证阶段应当进行职业病危害预评价。\n医疗机构建设项目可能产生放射性职业病危害的，建设单位应当向卫生行政部门提交放射性职业病危害预评价报告。卫生行政部门应当自收到预评价报告之日起三十日内，作出审核决定并书面通知建设单位。未提交预评价报告或者预评价报告未经卫生行政部门审核同意的，不得开工建设。\n职业病危害预评价和职业病危害控制效果评价应当由依法设立的取得国务院卫生行政部门或者设区的市级以上地方人民政府卫生行政部门按照职责分工给予资质认可的职业卫生技术服务机构进行。职业卫生技术服务机构所作评价应当客观、真实。",
      "blankText": "新建、扩建、改建建设项目和技术改造、技术引进项目（以下统称建设项目）可能产生职业病危害的，建设单位在可行性论证阶段应当进行职业病危害预评价。\n医疗机构建设项目可能产生放射性职业病危害的，建设单位应当向卫生行政部门提交放射性职业病危害预评价报告。卫生行政部门应当自收到预评价报告之日起三十日内，作出审核决定并书面通知建设单位。未提交预评价报告或者预评价报告未经卫生行政部门审核同意的，不得开工建设。\n职业病危害预评价和职业病危害控制效果评价应当由依法设立的取得国务院卫生行政部门或者设区的市级以上地方人民政府卫生行政部门按照职责分工给予资质认可的职业卫生技术服务机构进行。职业卫生技术服务机构所作评价应当客观、真实。"
    },
    {
      "id": 137,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 18,
      "text": "建设项目的职业病防护设施所需费用应当纳入建设项目工程预算，并与主体工程同时设计，同时施工，同时投入生产和使用。\n建设项目的职业病防护设施设计应当符合国家职业卫生标准和卫生要求；其中，医疗机构放射性职业病危害严重的建设项目的防护设施设计，应当经卫生行政部门审查同意后，方可施工。\n建设项目在竣工验收前，建设单位应当进行职业病危害控制效果评价。\n医疗机构可能产生放射性职业病危害的建设项目竣工验收时，其放射性职业病防护设施经卫生行政部门验收合格后，方可投入使用；其他建设项目的职业病防护设施应当由建设单位负责依法组织验收，验收合格后，方可投入生产和使用。卫生行政部门应当加强对建设单位组织的验收活动和验收结果的监督核查。",
      "blankText": "建设项目的职业病防护设施所需费用应当纳入建设项目工程预算，并与主体工程同时设计，同时施工，同时投入生产和使用。\n建设项目的职业病防护设施设计应当符合国家职业卫生标准和卫生要求；其中，医疗机构放射性职业病危害严重的建设项目的防护设施设计，应当经卫生行政部门审查同意后，方可施工。\n建设项目在竣工验收前，建设单位应当进行职业病危害控制效果评价。\n医疗机构可能产生放射性职业病危害的建设项目竣工验收时，其放射性职业病防护设施经卫生行政部门验收合格后，方可投入使用；其他建设项目的职业病防护设施应当由建设单位负责依法组织验收，验收合格后，方可投入生产和使用。卫生行政部门应当加强对建设单位组织的验收活动和验收结果的监督核查。"
    },
    {
      "id": 138,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 19,
      "text": "国家对从事放射性、高毒、高危粉尘等作业实行特殊管理。具体管理办法由国务院制定。",
      "blankText": "国家对从事放射性、高毒、高危粉尘等作业实行特殊管理。具体管理办法由国务院制定。"
    },
    {
      "id": 139,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 20,
      "text": "用人单位应当采取下列职业病防治管理措施：\n（一）设置或者指定职业卫生管理机构或者组织，配备专职或者兼职的职业卫生管理人员，负责本单位的职业病防治工作；\n（二）制定职业病防治计划和实施方案；\n（三）建立、健全职业卫生管理制度和操作规程；\n（四）建立、健全职业卫生档案和劳动者健康监护档案；\n（五）建立、健全工作场所职业病危害因素监测及评价制度；\n（六）建立、健全职业病危害事故应急救援预案。",
      "blankText": "用人单位应当采取下列职业病防治管理措施：\n（一）设置或者指定职业卫生管理机构或者组织，配备专职或者兼职的职业卫生管理人员，负责本单位的职业病防治工作；\n（二）制定职业病防治计划和实施方案；\n（三）建立、健全职业卫生管理制度和操作规程；\n（四）建立、健全职业卫生档案和劳动者健康监护档案；\n（五）建立、健全工作场所职业病危害因素监测及评价制度；\n（六）建立、健全职业病危害事故应急救援预案。"
    },
    {
      "id": 140,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 21,
      "text": "用人单位应当保障职业病防治所需的资金投入，不得挤占、挪用，并对因资金投入不足导致的后果承担责任。",
      "blankText": "用人单位应当保障职业病防治所需的资金投入，不得挤占、挪用，并对因资金投入不足导致的后果承担责任。"
    },
    {
      "id": 141,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 22,
      "text": "用人单位必须采用有效的职业病防护设施，并为劳动者提供个人使用的职业病防护用品。\n用人单位为劳动者个人提供的职业病防护用品必须符合防治职业病的要求；不符合要求的，不得使用。",
      "blankText": "用人单位必须采用有效的职业病防护设施，并为劳动者提供个人使用的职业病防护用品。\n用人单位为劳动者个人提供的职业病防护用品必须符合防治职业病的要求；不符合要求的，不得使用。"
    },
    {
      "id": 142,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 23,
      "text": "用人单位应当优先采用有利于防治职业病和保护劳动者健康的新技术、新工艺、新设备、新材料，逐步替代职业病危害严重的技术、工艺、设备、材料。",
      "blankText": "用人单位应当优先采用有利于防治职业病和保护劳动者健康的新技术、新工艺、新设备、新材料，逐步替代职业病危害严重的技术、工艺、设备、材料。"
    },
    {
      "id": 143,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 24,
      "text": "产生职业病危害的用人单位，应当在醒目位置设置公告栏，公布有关职业病防治的规章制度、操作规程、职业病危害事故应急救援措施和工作场所职业病危害因素检测结果。\n对产生严重职业病危害的作业岗位，应当在其醒目位置，设置警示标识和中文警示说明。警示说明应当载明产生职业病危害的种类、后果、预防以及应急救治措施等内容。",
      "blankText": "产生职业病危害的用人单位，应当在醒目位置设置公告栏，公布有关职业病防治的规章制度、操作规程、职业病危害事故应急救援措施和工作场所职业病危害因素检测结果。\n对产生严重职业病危害的作业岗位，应当在其醒目位置，设置警示标识和中文警示说明。警示说明应当载明产生职业病危害的种类、后果、预防以及应急救治措施等内容。"
    },
    {
      "id": 144,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 25,
      "text": "对可能发生急性职业损伤的有毒、有害工作场所，用人单位应当设置报警装置，配置现场急救用品、冲洗设备、应急撤离通道和必要的泄险区。\n对放射工作场所和放射性同位素的运输、贮存，用人单位必须配置防护设备和报警装置，保证接触放射线的工作人员佩戴个人剂量计。\n对职业病防护设备、应急救援设施和个人使用的职业病防护用品，用人单位应当进行经常性的维护、检修，定期检测其性能和效果，确保其处于正常状态，不得擅自拆除或者停止使用。",
      "blankText": "对可能发生急性职业损伤的有毒、有害工作场所，用人单位应当设置报警装置，配置现场急救用品、冲洗设备、应急撤离通道和必要的泄险区。\n对放射工作场所和放射性同位素的运输、贮存，用人单位必须配置防护设备和报警装置，保证接触放射线的工作人员佩戴个人剂量计。\n对职业病防护设备、应急救援设施和个人使用的职业病防护用品，用人单位应当进行经常性的维护、检修，定期检测其性能和效果，确保其处于正常状态，不得擅自拆除或者停止使用。"
    },
    {
      "id": 145,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 26,
      "text": "用人单位应当实施由专人负责的职业病危害因素日常监测，并确保监测系统处于正常运行状态。\n用人单位应当按照国务院卫生行政部门的规定，定期对工作场所进行职业病危害因素检测、评价。检测、评价结果存入用人单位职业卫生档案，定期向所在地卫生行政部门报告并向劳动者公布。\n职业病危害因素检测、评价由依法设立的取得国务院卫生行政部门或者设区的市级以上地方人民政府卫生行政部门按照职责分工给予资质认可的职业卫生技术服务机构进行。职业卫生技术服务机构所作检测、评价应当客观、真实。\n发现工作场所职业病危害因素不符合国家职业卫生标准和卫生要求时，用人单位应当立即采取相应治理措施，仍然达不到国家职业卫生标准和卫生要求的，必须停止存在职业病危害因素的作业；职业病危害因素经治理后，符合国家职业卫生标准和卫生要求的，方可重新作业。",
      "blankText": "用人单位应当实施由专人负责的职业病危害因素日常监测，并确保监测系统处于正常运行状态。\n用人单位应当按照国务院卫生行政部门的规定，定期对工作场所进行职业病危害因素检测、评价。检测、评价结果存入用人单位职业卫生档案，定期向所在地卫生行政部门报告并向劳动者公布。\n职业病危害因素检测、评价由依法设立的取得国务院卫生行政部门或者设区的市级以上地方人民政府卫生行政部门按照职责分工给予资质认可的职业卫生技术服务机构进行。职业卫生技术服务机构所作检测、评价应当客观、真实。\n发现工作场所职业病危害因素不符合国家职业卫生标准和卫生要求时，用人单位应当立即采取相应治理措施，仍然达不到国家职业卫生标准和卫生要求的，必须停止存在职业病危害因素的作业；职业病危害因素经治理后，符合国家职业卫生标准和卫生要求的，方可重新作业。"
    },
    {
      "id": 146,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 27,
      "text": "职业卫生技术服务机构依法从事职业病危害因素检测、评价工作，接受卫生行政部门的监督检查。卫生行政部门应当依法履行监督职责。",
      "blankText": "职业卫生技术服务机构依法从事职业病危害因素检测、评价工作，接受卫生行政部门的监督检查。卫生行政部门应当依法履行监督职责。"
    },
    {
      "id": 147,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 28,
      "text": "向用人单位提供可能产生职业病危害的设备的，应当提供中文说明书，并在设备的醒目位置设置警示标识和中文警示说明。警示说明应当载明设备性能、可能产生的职业病危害、安全操作和维护注意事项、职业病防护以及应急救治措施等内容。",
      "blankText": "向用人单位提供可能产生职业病危害的设备的，应当提供中文说明书，并在设备的醒目位置设置警示标识和中文警示说明。警示说明应当载明设备性能、可能产生的职业病危害、安全操作和维护注意事项、职业病防护以及应急救治措施等内容。"
    },
    {
      "id": 148,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 29,
      "text": "向用人单位提供可能产生职业病危害的化学品、放射性同位素和含有放射性物质的材料的，应当提供中文说明书。说明书应当载明产品特性、主要成份、存在的有害因素、可能产生的危害后果、安全使用注意事项、职业病防护以及应急救治措施等内容。产品包装应当有醒目的警示标识和中文警示说明。贮存上述材料的场所应当在规定的部位设置危险物品标识或者放射性警示标识。\n国内首次使用或者首次进口与职业病危害有关的化学材料，使用单位或者进口单位按照国家规定经国务院有关部门批准后，应当向国务院卫生行政部门报送该化学材料的毒性鉴定以及经有关部门登记注册或者批准进口的文件等资料。\n进口放射性同位素、射线装置和含有放射性物质的物品的，按照国家有关规定办理。",
      "blankText": "向用人单位提供可能产生职业病危害的化学品、放射性同位素和含有放射性物质的材料的，应当提供中文说明书。说明书应当载明产品特性、主要成份、存在的有害因素、可能产生的危害后果、安全使用注意事项、职业病防护以及应急救治措施等内容。产品包装应当有醒目的警示标识和中文警示说明。贮存上述材料的场所应当在规定的部位设置危险物品标识或者放射性警示标识。\n国内首次使用或者首次进口与职业病危害有关的化学材料，使用单位或者进口单位按照国家规定经国务院有关部门批准后，应当向国务院卫生行政部门报送该化学材料的毒性鉴定以及经有关部门登记注册或者批准进口的文件等资料。\n进口放射性同位素、射线装置和含有放射性物质的物品的，按照国家有关规定办理。"
    },
    {
      "id": 149,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 30,
      "text": "任何单位和个人不得生产、经营、进口和使用国家明令禁止使用的可能产生职业病危害的设备或者材料。",
      "blankText": "任何单位和个人不得生产、经营、进口和使用国家明令禁止使用的可能产生职业病危害的设备或者材料。"
    },
    {
      "id": 150,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 31,
      "text": "任何单位和个人不得将产生职业病危害的作业转移给不具备职业病防护条件的单位和个人。不具备职业病防护条件的单位和个人不得接受产生职业病危害的作业。",
      "blankText": "任何单位和个人不得将产生职业病危害的作业转移给不具备职业病防护条件的单位和个人。不具备职业病防护条件的单位和个人不得接受产生职业病危害的作业。"
    },
    {
      "id": 151,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 32,
      "text": "用人单位对采用的技术、工艺、设备、材料，应当知悉其产生的职业病危害，对有职业病危害的技术、工艺、设备、材料，故意隐瞒其危害而采用的，对所造成的职业病危害后果承担责任。",
      "blankText": "用人单位对采用的技术、工艺、设备、材料，应当知悉其产生的职业病危害，对有职业病危害的技术、工艺、设备、材料，故意隐瞒其危害而采用的，对所造成的职业病危害后果承担责任。"
    },
    {
      "id": 152,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 33,
      "text": "用人单位与劳动者订立劳动合同（含聘用合同，下同）时，应当将工作过程中可能产生的职业病危害及其后果、职业病防护措施和待遇等如实告知劳动者，并在劳动合同中写明，不得隐瞒或者欺骗。\n劳动者在已订立劳动合同期间因工作岗位或者工作内容变更，从事与所订立劳动合同中未告知的存在职业病危害的作业时，用人单位应当依照前款规定，向劳动者履行如实告知的义务，并协商变更原劳动合同相关条款。\n用人单位违反前两款规定的，劳动者有权拒绝从事存在职业病危害的作业，用人单位不得因此解除与劳动者所订立的劳动合同。",
      "blankText": "用人单位与劳动者订立劳动合同（含聘用合同，下同）时，应当将工作过程中可能产生的职业病危害及其后果、职业病防护措施和待遇等如实告知劳动者，并在劳动合同中写明，不得隐瞒或者欺骗。\n劳动者在已订立劳动合同期间因工作岗位或者工作内容变更，从事与所订立劳动合同中未告知的存在职业病危害的作业时，用人单位应当依照前款规定，向劳动者履行如实告知的义务，并协商变更原劳动合同相关条款。\n用人单位违反前两款规定的，劳动者有权拒绝从事存在职业病危害的作业，用人单位不得因此解除与劳动者所订立的劳动合同。"
    },
    {
      "id": 153,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 34,
      "text": "用人单位的主要负责人和职业卫生管理人员应当接受职业卫生培训，遵守职业病防治法律、法规，依法组织本单位的职业病防治工作。\n用人单位应当对劳动者进行上岗前的职业卫生培训和在岗期间的定期职业卫生培训，普及职业卫生知识，督促劳动者遵守职业病防治法律、法规、规章和操作规程，指导劳动者正确使用职业病防护设备和个人使用的职业病防护用品。\n劳动者应当学习和掌握相关的职业卫生知识，增强职业病防范意识，遵守职业病防治法律、法规、规章和操作规程，正确使用、维护职业病防护设备和个人使用的职业病防护用品，发现职业病危害事故隐患应当及时报告。\n劳动者不履行前款规定义务的，用人单位应当对其进行教育。",
      "blankText": "用人单位的主要负责人和职业卫生管理人员应当接受职业卫生培训，遵守职业病防治法律、法规，依法组织本单位的职业病防治工作。\n用人单位应当对劳动者进行上岗前的职业卫生培训和在岗期间的定期职业卫生培训，普及职业卫生知识，督促劳动者遵守职业病防治法律、法规、规章和操作规程，指导劳动者正确使用职业病防护设备和个人使用的职业病防护用品。\n劳动者应当学习和掌握相关的职业卫生知识，增强职业病防范意识，遵守职业病防治法律、法规、规章和操作规程，正确使用、维护职业病防护设备和个人使用的职业病防护用品，发现职业病危害事故隐患应当及时报告。\n劳动者不履行前款规定义务的，用人单位应当对其进行教育。"
    },
    {
      "id": 154,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 35,
      "text": "对从事接触职业病危害的作业的劳动者，用人单位应当按照国务院卫生行政部门的规定组织上岗前、在岗期间和离岗时的职业健康检查，并将检查结果书面告知劳动者。职业健康检查费用由用人单位承担。\n用人单位不得安排未经上岗前职业健康检查的劳动者从事接触职业病危害的作业；不得安排有职业禁忌的劳动者从事其所禁忌的作业；对在职业健康检查中发现有与所从事的职业相关的健康损害的劳动者，应当调离原工作岗位，并妥善安置；对未进行离岗前职业健康检查的劳动者不得解除或者终止与其订立的劳动合同。\n职业健康检查应当由取得《医疗机构执业许可证》的医疗卫生机构承担。卫生行政部门应当加强对职业健康检查工作的规范管理，具体管理办法由国务院卫生行政部门制定。",
      "blankText": "对从事接触职业病危害的作业的劳动者，用人单位应当按照国务院卫生行政部门的规定组织上岗前、在岗期间和离岗时的职业健康检查，并将检查结果书面告知劳动者。职业健康检查费用由用人单位承担。\n用人单位不得安排未经上岗前职业健康检查的劳动者从事接触职业病危害的作业；不得安排有职业禁忌的劳动者从事其所禁忌的作业；对在职业健康检查中发现有与所从事的职业相关的健康损害的劳动者，应当调离原工作岗位，并妥善安置；对未进行离岗前职业健康检查的劳动者不得解除或者终止与其订立的劳动合同。\n职业健康检查应当由取得《医疗机构执业许可证》的医疗卫生机构承担。卫生行政部门应当加强对职业健康检查工作的规范管理，具体管理办法由国务院卫生行政部门制定。"
    },
    {
      "id": 155,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 36,
      "text": "用人单位应当为劳动者建立职业健康监护档案，并按照规定的期限妥善保存。\n职业健康监护档案应当包括劳动者的职业史、职业病危害接触史、职业健康检查结果和职业病诊疗等有关个人健康资料。\n劳动者离开用人单位时，有权索取本人职业健康监护档案复印件，用人单位应当如实、无偿提供，并在所提供的复印件上签章。",
      "blankText": "用人单位应当为劳动者建立职业健康监护档案，并按照规定的期限妥善保存。\n职业健康监护档案应当包括劳动者的职业史、职业病危害接触史、职业健康检查结果和职业病诊疗等有关个人健康资料。\n劳动者离开用人单位时，有权索取本人职业健康监护档案复印件，用人单位应当如实、无偿提供，并在所提供的复印件上签章。"
    },
    {
      "id": 156,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 37,
      "text": "发生或者可能发生急性职业病危害事故时，用人单位应当立即采取应急救援和控制措施，并及时报告所在地卫生行政部门和有关部门。卫生行政部门接到报告后，应当及时会同有关部门组织调查处理；必要时，可以采取临时控制措施。卫生行政部门应当组织做好医疗救治工作。\n对遭受或者可能遭受急性职业病危害的劳动者，用人单位应当及时组织救治、进行健康检查和医学观察，所需费用由用人单位承担。",
      "blankText": "发生或者可能发生急性职业病危害事故时，用人单位应当立即采取应急救援和控制措施，并及时报告所在地卫生行政部门和有关部门。卫生行政部门接到报告后，应当及时会同有关部门组织调查处理；必要时，可以采取临时控制措施。卫生行政部门应当组织做好医疗救治工作。\n对遭受或者可能遭受急性职业病危害的劳动者，用人单位应当及时组织救治、进行健康检查和医学观察，所需费用由用人单位承担。"
    },
    {
      "id": 157,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 38,
      "text": "用人单位不得安排未成年工从事接触职业病危害的作业；不得安排孕期、哺乳期的女职工从事对本人和胎儿、婴儿有危害的作业。",
      "blankText": "用人单位不得安排未成年工从事接触职业病危害的作业；不得安排孕期、哺乳期的女职工从事对本人和胎儿、婴儿有危害的作业。"
    },
    {
      "id": 158,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 39,
      "text": "劳动者享有下列职业卫生保护权利：\n（一）获得职业卫生教育、培训；\n（二）获得职业健康检查、职业病诊疗、康复等职业病防治服务；\n（三）了解工作场所产生或者可能产生的职业病危害因素、危害后果和应当采取的职业病防护措施；\n（四）要求用人单位提供符合防治职业病要求的职业病防护设施和个人使用的职业病防护用品，改善工作条件；\n（五）对违反职业病防治法律、法规以及危及生命健康的行为提出批评、检举和控告；\n（六）拒绝违章指挥和强令进行没有职业病防护措施的作业；\n（七）参与用人单位职业卫生工作的民主管理，对职业病防治工作提出意见和建议。\n用人单位应当保障劳动者行使前款所列权利。因劳动者依法行使正当权利而降低其工资、福利等待遇或者解除、终止与其订立的劳动合同的，其行为无效。",
      "blankText": "劳动者享有下列职业卫生保护权利：\n（一）获得职业卫生教育、培训；\n（二）获得职业健康检查、职业病诊疗、康复等职业病防治服务；\n（三）了解工作场所产生或者可能产生的职业病危害因素、危害后果和应当采取的职业病防护措施；\n（四）要求用人单位提供符合防治职业病要求的职业病防护设施和个人使用的职业病防护用品，改善工作条件；\n（五）对违反职业病防治法律、法规以及危及生命健康的行为提出批评、检举和控告；\n（六）拒绝违章指挥和强令进行没有职业病防护措施的作业；\n（七）参与用人单位职业卫生工作的民主管理，对职业病防治工作提出意见和建议。\n用人单位应当保障劳动者行使前款所列权利。因劳动者依法行使正当权利而降低其工资、福利等待遇或者解除、终止与其订立的劳动合同的，其行为无效。"
    },
    {
      "id": 159,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 40,
      "text": "工会组织应当督促并协助用人单位开展职业卫生宣传教育和培训，有权对用人单位的职业病防治工作提出意见和建议，依法代表劳动者与用人单位签订劳动安全卫生专项集体合同，与用人单位就劳动者反映的有关职业病防治的问题进行协调并督促解决。\n工会组织对用人单位违反职业病防治法律、法规，侵犯劳动者合法权益的行为，有权要求纠正；产生严重职业病危害时，有权要求采取防护措施，或者向政府有关部门建议采取强制性措施；发生职业病危害事故时，有权参与事故调查处理；发现危及劳动者生命健康的情形时，有权向用人单位建议组织劳动者撤离危险现场，用人单位应当立即作出处理。",
      "blankText": "工会组织应当督促并协助用人单位开展职业卫生宣传教育和培训，有权对用人单位的职业病防治工作提出意见和建议，依法代表劳动者与用人单位签订劳动安全卫生专项集体合同，与用人单位就劳动者反映的有关职业病防治的问题进行协调并督促解决。\n工会组织对用人单位违反职业病防治法律、法规，侵犯劳动者合法权益的行为，有权要求纠正；产生严重职业病危害时，有权要求采取防护措施，或者向政府有关部门建议采取强制性措施；发生职业病危害事故时，有权参与事故调查处理；发现危及劳动者生命健康的情形时，有权向用人单位建议组织劳动者撤离危险现场，用人单位应当立即作出处理。"
    },
    {
      "id": 160,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 41,
      "text": "用人单位按照职业病防治要求，用于预防和治理职业病危害、工作场所卫生检测、健康监护和职业卫生培训等费用，按照国家有关规定，在生产成本中据实列支。",
      "blankText": "用人单位按照职业病防治要求，用于预防和治理职业病危害、工作场所卫生检测、健康监护和职业卫生培训等费用，按照国家有关规定，在生产成本中据实列支。"
    },
    {
      "id": 161,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 42,
      "text": "职业卫生监督管理部门应当按照职责分工，加强对用人单位职业病防治工作的监督检查，重点监督检查用人单位以下情况：\n（一）职业病防治管理措施落实情况；\n（二）建设项目职业病危害预评价、防护设施设计、控制效果评价情况；\n（三）职业病危害项目申报情况；\n（四）工作场所职业病危害因素监测、检测、评价及结果报告和公布情况；\n（五）职业病防护设施和个人使用的职业病防护用品配备、使用、维护情况；\n（六）职业健康监护情况；\n（七）职业卫生培训和职业病危害告知情况；\n（八）职业病危害事故报告和应急处置情况；\n（九）劳动者职业健康权益保障情况。",
      "blankText": "职业卫生监督管理部门应当按照职责分工，加强对用人单位职业病防治工作的监督检查，重点监督检查用人单位以下情况：\n（一）职业病防治管理措施落实情况；\n（二）建设项目职业病危害预评价、防护设施设计、控制效果评价情况；\n（三）职业病危害项目申报情况；\n（四）工作场所职业病危害因素监测、检测、评价及结果报告和公布情况；\n（五）职业病防护设施和个人使用的职业病防护用品配备、使用、维护情况；\n（六）职业健康监护情况；\n（七）职业卫生培训和职业病危害告知情况；\n（八）职业病危害事故报告和应急处置情况；\n（九）劳动者职业健康权益保障情况。"
    },
    {
      "id": 162,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 43,
      "text": "职业病诊断应当由取得《医疗机构执业许可证》的医疗卫生机构承担。卫生行政部门应当加强对职业病诊断工作的规范管理，具体管理办法由国务院卫生行政部门制定。\n承担职业病诊断的医疗卫生机构还应当具备下列条件：\n（一）具有与开展职业病诊断相适应的医疗卫生技术人员；\n（二）具有与开展职业病诊断相适应的仪器、设备；\n（三）具有健全的职业病诊断质量管理制度。\n承担职业病诊断的医疗卫生机构不得拒绝劳动者进行职业病诊断的要求。",
      "blankText": "职业病诊断应当由取得《医疗机构执业许可证》的医疗卫生机构承担。卫生行政部门应当加强对职业病诊断工作的规范管理，具体管理办法由国务院卫生行政部门制定。\n承担职业病诊断的医疗卫生机构还应当具备下列条件：\n（一）具有与开展职业病诊断相适应的医疗卫生技术人员；\n（二）具有与开展职业病诊断相适应的仪器、设备；\n（三）具有健全的职业病诊断质量管理制度。\n承担职业病诊断的医疗卫生机构不得拒绝劳动者进行职业病诊断的要求。"
    },
    {
      "id": 163,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 44,
      "text": "劳动者可以在用人单位所在地、本人户籍所在地或者经常居住地依法承担职业病诊断的医疗卫生机构进行职业病诊断。",
      "blankText": "劳动者可以在用人单位所在地、本人户籍所在地或者经常居住地依法承担职业病诊断的医疗卫生机构进行职业病诊断。"
    },
    {
      "id": 164,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 45,
      "text": "职业病诊断标准和职业病诊断、鉴定办法由国务院卫生行政部门制定。职业病伤残等级的鉴定办法由国务院劳动保障行政部门会同国务院卫生行政部门制定。",
      "blankText": "职业病诊断标准和职业病诊断、鉴定办法由国务院卫生行政部门制定。职业病伤残等级的鉴定办法由国务院劳动保障行政部门会同国务院卫生行政部门制定。"
    },
    {
      "id": 165,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 46,
      "text": "职业病诊断，应当综合分析下列因素：\n（一）病人的职业史；\n（二）职业病危害接触史和工作场所职业病危害因素情况；\n（三）临床表现以及辅助检查结果等。\n没有证据否定职业病危害因素与病人临床表现之间的必然联系的，应当诊断为职业病。\n职业病诊断证明书应当由参与诊断的取得职业病诊断资格的执业医师签署，并经承担职业病诊断的医疗卫生机构审核盖章。",
      "blankText": "职业病诊断，应当综合分析下列因素：\n（一）病人的职业史；\n（二）职业病危害接触史和工作场所职业病危害因素情况；\n（三）临床表现以及辅助检查结果等。\n没有证据否定职业病危害因素与病人临床表现之间的必然联系的，应当诊断为职业病。\n职业病诊断证明书应当由参与诊断的取得职业病诊断资格的执业医师签署，并经承担职业病诊断的医疗卫生机构审核盖章。"
    },
    {
      "id": 166,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 47,
      "text": "用人单位应当如实提供职业病诊断、鉴定所需的劳动者职业史和职业病危害接触史、工作场所职业病危害因素检测结果等资料；卫生行政部门应当监督检查和督促用人单位提供上述资料；劳动者和有关机构也应当提供与职业病诊断、鉴定有关的资料。\n职业病诊断、鉴定机构需要了解工作场所职业病危害因素情况时，可以对工作场所进行现场调查，也可以向卫生行政部门提出，卫生行政部门应当在十日内组织现场调查。用人单位不得拒绝、阻挠。",
      "blankText": "用人单位应当如实提供职业病诊断、鉴定所需的劳动者职业史和职业病危害接触史、工作场所职业病危害因素检测结果等资料；卫生行政部门应当监督检查和督促用人单位提供上述资料；劳动者和有关机构也应当提供与职业病诊断、鉴定有关的资料。\n职业病诊断、鉴定机构需要了解工作场所职业病危害因素情况时，可以对工作场所进行现场调查，也可以向卫生行政部门提出，卫生行政部门应当在十日内组织现场调查。用人单位不得拒绝、阻挠。"
    },
    {
      "id": 167,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 48,
      "text": "职业病诊断、鉴定过程中，用人单位不提供工作场所职业病危害因素检测结果等资料的，诊断、鉴定机构应当结合劳动者的临床表现、辅助检查结果和劳动者的职业史、职业病危害接触史，并参考劳动者的自述、卫生行政部门提供的日常监督检查信息等，作出职业病诊断、鉴定结论。\n劳动者对用人单位提供的工作场所职业病危害因素检测结果等资料有异议，或者因劳动者的用人单位解散、破产，无用人单位提供上述资料的，诊断、鉴定机构应当提请卫生行政部门进行调查，卫生行政部门应当自接到申请之日起三十日内对存在异议的资料或者工作场所职业病危害因素情况作出判定；有关部门应当配合。",
      "blankText": "职业病诊断、鉴定过程中，用人单位不提供工作场所职业病危害因素检测结果等资料的，诊断、鉴定机构应当结合劳动者的临床表现、辅助检查结果和劳动者的职业史、职业病危害接触史，并参考劳动者的自述、卫生行政部门提供的日常监督检查信息等，作出职业病诊断、鉴定结论。\n劳动者对用人单位提供的工作场所职业病危害因素检测结果等资料有异议，或者因劳动者的用人单位解散、破产，无用人单位提供上述资料的，诊断、鉴定机构应当提请卫生行政部门进行调查，卫生行政部门应当自接到申请之日起三十日内对存在异议的资料或者工作场所职业病危害因素情况作出判定；有关部门应当配合。"
    },
    {
      "id": 168,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 49,
      "text": "职业病诊断、鉴定过程中，在确认劳动者职业史、职业病危害接触史时，当事人对劳动关系、工种、工作岗位或者在岗时间有争议的，可以向当地的劳动人事争议仲裁委员会申请仲裁；接到申请的劳动人事争议仲裁委员会应当受理，并在三十日内作出裁决。\n当事人在仲裁过程中对自己提出的主张，有责任提供证据。劳动者无法提供由用人单位掌握管理的与仲裁主张有关的证据的，仲裁庭应当要求用人单位在指定期限内提供；用人单位在指定期限内不提供的，应当承担不利后果。\n劳动者对仲裁裁决不服的，可以依法向人民法院提起诉讼。\n用人单位对仲裁裁决不服的，可以在职业病诊断、鉴定程序结束之日起十五日内依法向人民法院提起诉讼；诉讼期间，劳动者的治疗费用按照依法应承担的责任比例，由相关方先行垫付。",
      "blankText": "职业病诊断、鉴定过程中，在确认劳动者职业史、职业病危害接触史时，当事人对劳动关系、工种、工作岗位或者在岗时间有争议的，可以向当地的劳动人事争议仲裁委员会申请仲裁；接到申请的劳动人事争议仲裁委员会应当受理，并在三十日内作出裁决。\n当事人在仲裁过程中对自己提出的主张，有责任提供证据。劳动者无法提供由用人单位掌握管理的与仲裁主张有关的证据的，仲裁庭应当要求用人单位在指定期限内提供；用人单位在指定期限内不提供的，应当承担不利后果。\n劳动者对仲裁裁决不服的，可以依法向人民法院提起诉讼。\n用人单位对仲裁裁决不服的，可以在职业病诊断、鉴定程序结束之日起十五日内依法向人民法院提起诉讼；诉讼期间，劳动者的治疗费用按照依法应承担的责任比例，由相关方先行垫付。"
    },
    {
      "id": 169,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 50,
      "text": "用人单位和医疗卫生机构发现职业病病人或者疑似职业病病人时，应当及时向所在地卫生行政部门报告。确诊为职业病的，用人单位还应当向所在地劳动保障行政部门报告。接到报告的部门应当依法作出处理。",
      "blankText": "用人单位和医疗卫生机构发现职业病病人或者疑似职业病病人时，应当及时向所在地卫生行政部门报告。确诊为职业病的，用人单位还应当向所在地劳动保障行政部门报告。接到报告的部门应当依法作出处理。"
    },
    {
      "id": 170,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 51,
      "text": "县级以上地方人民政府卫生行政部门负责本行政区域内的职业病统计报告的管理工作，并按照规定上报。",
      "blankText": "县级以上地方人民政府卫生行政部门负责本行政区域内的职业病统计报告的管理工作，并按照规定上报。"
    },
    {
      "id": 171,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 52,
      "text": "当事人对职业病诊断有异议的，可以向作出诊断的医疗卫生机构所在地地方人民政府卫生行政部门申请鉴定。\n职业病诊断争议由设区的市级以上地方人民政府卫生行政部门根据当事人的申请，组织职业病诊断鉴定委员会进行鉴定。\n当事人对设区的市级职业病诊断鉴定委员会的鉴定结论不服的，可以向省、自治区、直辖市人民政府卫生行政部门申请再鉴定。",
      "blankText": "当事人对职业病诊断有异议的，可以向作出诊断的医疗卫生机构所在地地方人民政府卫生行政部门申请鉴定。\n职业病诊断争议由设区的市级以上地方人民政府卫生行政部门根据当事人的申请，组织职业病诊断鉴定委员会进行鉴定。\n当事人对设区的市级职业病诊断鉴定委员会的鉴定结论不服的，可以向省、自治区、直辖市人民政府卫生行政部门申请再鉴定。"
    },
    {
      "id": 172,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 53,
      "text": "职业病诊断鉴定委员会由相关专业的专家组成。\n省、自治区、直辖市人民政府卫生行政部门应当设立相关的专家库，需要对职业病争议作出诊断鉴定时，由当事人或者当事人委托有关卫生行政部门从专家库中以随机抽取的方式确定参加诊断鉴定委员会的专家。\n职业病诊断鉴定委员会应当按照国务院卫生行政部门颁布的职业病诊断标准和职业病诊断、鉴定办法进行职业病诊断鉴定，向当事人出具职业病诊断鉴定书。职业病诊断、鉴定费用由用人单位承担。",
      "blankText": "职业病诊断鉴定委员会由相关专业的专家组成。\n省、自治区、直辖市人民政府卫生行政部门应当设立相关的专家库，需要对职业病争议作出诊断鉴定时，由当事人或者当事人委托有关卫生行政部门从专家库中以随机抽取的方式确定参加诊断鉴定委员会的专家。\n职业病诊断鉴定委员会应当按照国务院卫生行政部门颁布的职业病诊断标准和职业病诊断、鉴定办法进行职业病诊断鉴定，向当事人出具职业病诊断鉴定书。职业病诊断、鉴定费用由用人单位承担。"
    },
    {
      "id": 173,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 54,
      "text": "职业病诊断鉴定委员会组成人员应当遵守职业道德，客观、公正地进行诊断鉴定，并承担相应的责任。职业病诊断鉴定委员会组成人员不得私下接触当事人，不得收受当事人的财物或者其他好处，与当事人有利害关系的，应当回避。\n人民法院受理职业病诊断鉴定案件，需要委托职业病诊断鉴定委员会进行鉴定的，应当从省、自治区、直辖市人民政府卫生行政部门依法设立的相关的专家库中选取参加鉴定的专家。",
      "blankText": "职业病诊断鉴定委员会组成人员应当遵守职业道德，客观、公正地进行诊断鉴定，并承担相应的责任。职业病诊断鉴定委员会组成人员不得私下接触当事人，不得收受当事人的财物或者其他好处，与当事人有利害关系的，应当回避。\n人民法院受理职业病诊断鉴定案件，需要委托职业病诊断鉴定委员会进行鉴定的，应当从省、自治区、直辖市人民政府卫生行政部门依法设立的相关的专家库中选取参加鉴定的专家。"
    },
    {
      "id": 174,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 55,
      "text": "医疗卫生机构发现疑似职业病病人时，应当告知劳动者本人并及时通知用人单位。\n用人单位应当及时安排对疑似职业病病人进行诊断；在疑似职业病病人诊断或者医学观察期间，不得解除或者终止与其订立的劳动合同。\n疑似职业病病人在诊断、医学观察期间的费用，由用人单位承担。",
      "blankText": "医疗卫生机构发现疑似职业病病人时，应当告知劳动者本人并及时通知用人单位。\n用人单位应当及时安排对疑似职业病病人进行诊断；在疑似职业病病人诊断或者医学观察期间，不得解除或者终止与其订立的劳动合同。\n疑似职业病病人在诊断、医学观察期间的费用，由用人单位承担。"
    },
    {
      "id": 175,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 56,
      "text": "用人单位应当保障职业病病人依法享受国家规定的职业病待遇。\n用人单位应当按照国家有关规定，安排职业病病人进行治疗、康复和定期检查。\n用人单位对不适宜继续从事原工作的职业病病人，应当调离原岗位，并妥善安置。\n用人单位对从事接触职业病危害的作业的劳动者，应当给予适当岗位津贴。",
      "blankText": "用人单位应当保障职业病病人依法享受国家规定的职业病待遇。\n用人单位应当按照国家有关规定，安排职业病病人进行治疗、康复和定期检查。\n用人单位对不适宜继续从事原工作的职业病病人，应当调离原岗位，并妥善安置。\n用人单位对从事接触职业病危害的作业的劳动者，应当给予适当岗位津贴。"
    },
    {
      "id": 176,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 57,
      "text": "职业病病人的诊疗、康复费用，伤残以及丧失劳动能力的职业病病人的社会保障，按照国家有关工伤保险的规定执行。",
      "blankText": "职业病病人的诊疗、康复费用，伤残以及丧失劳动能力的职业病病人的社会保障，按照国家有关工伤保险的规定执行。"
    },
    {
      "id": 177,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 58,
      "text": "职业病病人除依法享有工伤保险外，依照有关民事法律，尚有获得赔偿的权利的，有权向用人单位提出赔偿要求。",
      "blankText": "职业病病人除依法享有工伤保险外，依照有关民事法律，尚有获得赔偿的权利的，有权向用人单位提出赔偿要求。"
    },
    {
      "id": 178,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 59,
      "text": "劳动者被诊断患有职业病，但用人单位没有依法参加工伤保险的，其医疗和生活保障由该用人单位承担。",
      "blankText": "劳动者被诊断患有职业病，但用人单位没有依法参加工伤保险的，其医疗和生活保障由该用人单位承担。"
    },
    {
      "id": 179,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 60,
      "text": "职业病病人变动工作单位，其依法享有的待遇不变。\n用人单位在发生分立、合并、解散、破产等情形时，应当对从事接触职业病危害的作业的劳动者进行健康检查，并按照国家有关规定妥善安置职业病病人。",
      "blankText": "职业病病人变动工作单位，其依法享有的待遇不变。\n用人单位在发生分立、合并、解散、破产等情形时，应当对从事接触职业病危害的作业的劳动者进行健康检查，并按照国家有关规定妥善安置职业病病人。"
    },
    {
      "id": 180,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 61,
      "text": "用人单位已经不存在或者无法确认劳动关系的职业病病人，可以向地方人民政府医疗保障、民政部门申请医疗救助和生活等方面的救助。\n地方各级人民政府应当根据本地区的实际情况，采取其他措施，使前款规定的职业病病人获得医疗救治。",
      "blankText": "用人单位已经不存在或者无法确认劳动关系的职业病病人，可以向地方人民政府医疗保障、民政部门申请医疗救助和生活等方面的救助。\n地方各级人民政府应当根据本地区的实际情况，采取其他措施，使前款规定的职业病病人获得医疗救治。"
    },
    {
      "id": 181,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 62,
      "text": "县级以上人民政府职业卫生监督管理部门依照职业病防治法律、法规、国家职业卫生标准和卫生要求，依据职责划分，对职业病防治工作进行监督检查。",
      "blankText": "县级以上人民政府职业卫生监督管理部门依照职业病防治法律、法规、国家职业卫生标准和卫生要求，依据职责划分，对职业病防治工作进行监督检查。"
    },
    {
      "id": 182,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 63,
      "text": "卫生行政部门履行监督检查职责时，有权采取下列措施：\n（一）进入被检查单位和职业病危害现场，了解情况，调查取证；\n（二）查阅或者复制与违反职业病防治法律、法规的行为有关的资料和采集样品；\n（三）责令违反职业病防治法律、法规的单位和个人停止违法行为。",
      "blankText": "卫生行政部门履行监督检查职责时，有权采取下列措施：\n（一）进入被检查单位和职业病危害现场，了解情况，调查取证；\n（二）查阅或者复制与违反职业病防治法律、法规的行为有关的资料和采集样品；\n（三）责令违反职业病防治法律、法规的单位和个人停止违法行为。"
    },
    {
      "id": 183,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 64,
      "text": "发生职业病危害事故或者有证据证明危害状态可能导致职业病危害事故发生时，卫生行政部门可以采取下列临时控制措施：\n（一）责令暂停导致职业病危害事故的作业；\n（二）封存造成职业病危害事故或者可能导致职业病危害事故发生的材料和设备；\n（三）组织控制职业病危害事故现场。\n在职业病危害事故或者危害状态得到有效控制后，卫生行政部门应当及时解除控制措施。",
      "blankText": "发生职业病危害事故或者有证据证明危害状态可能导致职业病危害事故发生时，卫生行政部门可以采取下列临时控制措施：\n（一）责令暂停导致职业病危害事故的作业；\n（二）封存造成职业病危害事故或者可能导致职业病危害事故发生的材料和设备；\n（三）组织控制职业病危害事故现场。\n在职业病危害事故或者危害状态得到有效控制后，卫生行政部门应当及时解除控制措施。"
    },
    {
      "id": 184,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 65,
      "text": "职业卫生监督执法人员依法执行职务时，应当出示监督执法证件。\n职业卫生监督执法人员应当忠于职守，秉公执法，严格遵守执法规范；涉及用人单位的秘密的，应当为其保密。",
      "blankText": "职业卫生监督执法人员依法执行职务时，应当出示监督执法证件。\n职业卫生监督执法人员应当忠于职守，秉公执法，严格遵守执法规范；涉及用人单位的秘密的，应当为其保密。"
    },
    {
      "id": 185,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 66,
      "text": "职业卫生监督执法人员依法执行职务时，被检查单位应当接受检查并予以支持配合，不得拒绝和阻碍。",
      "blankText": "职业卫生监督执法人员依法执行职务时，被检查单位应当接受检查并予以支持配合，不得拒绝和阻碍。"
    },
    {
      "id": 186,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 67,
      "text": "卫生行政部门及其职业卫生监督执法人员履行职责时，不得有下列行为：\n（一）对不符合法定条件的，发给建设项目有关证明文件、资质证明文件或者予以批准；\n（二）对已经取得有关证明文件的用人单位不履行监督检查职责；\n（三）发现用人单位存在职业病危害的，可能造成职业病危害事故，不及时依法采取控制措施；\n（四）其他违反本法的行为。",
      "blankText": "卫生行政部门及其职业卫生监督执法人员履行职责时，不得有下列行为：\n（一）对不符合法定条件的，发给建设项目有关证明文件、资质证明文件或者予以批准；\n（二）对已经取得有关证明文件的用人单位不履行监督检查职责；\n（三）发现用人单位存在职业病危害的，可能造成职业病危害事故，不及时依法采取控制措施；\n（四）其他违反本法的行为。"
    },
    {
      "id": 187,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 68,
      "text": "职业卫生监督执法人员应当依法经过资格认定。\n职业卫生监督管理部门应当加强队伍建设，提高职业卫生监督执法人员的政治、业务素质，依照本法和其他有关法律、法规的规定，建立、健全内部监督制度，对其工作人员执行法律、法规和遵守纪律的情况，进行监督检查。",
      "blankText": "职业卫生监督执法人员应当依法经过资格认定。\n职业卫生监督管理部门应当加强队伍建设，提高职业卫生监督执法人员的政治、业务素质，依照本法和其他有关法律、法规的规定，建立、健全内部监督制度，对其工作人员执行法律、法规和遵守纪律的情况，进行监督检查。"
    },
    {
      "id": 188,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 69,
      "text": "建设单位违反本法规定，有下列行为之一的，由卫生行政部门给予警告，责令限期改正；逾期不改正的，处十万元以上五十万元以下的罚款；情节严重的，责令停止产生职业病危害的作业，或者提请有关人民政府按照国务院规定的权限责令停建、关闭：\n（一）未按照规定进行职业病危害预评价的；\n（二）医疗机构放射性职业病危害严重的建设项目的防护设施设计未经卫生行政部门审查同意擅自施工的；\n（三）未按照规定对职业病防护设施进行职业病危害控制效果评价的；\n（四）建设项目竣工投入生产和使用前，职业病防护设施未按照规定验收合格的。",
      "blankText": "建设单位违反本法规定，有下列行为之一的，由卫生行政部门给予警告，责令限期改正；逾期不改正的，处十万元以上五十万元以下的罚款；情节严重的，责令停止产生职业病危害的作业，或者提请有关人民政府按照国务院规定的权限责令停建、关闭：\n（一）未按照规定进行职业病危害预评价的；\n（二）医疗机构放射性职业病危害严重的建设项目的防护设施设计未经卫生行政部门审查同意擅自施工的；\n（三）未按照规定对职业病防护设施进行职业病危害控制效果评价的；\n（四）建设项目竣工投入生产和使用前，职业病防护设施未按照规定验收合格的。"
    },
    {
      "id": 189,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 70,
      "text": "违反本法规定，有下列行为之一的，由卫生行政部门给予警告，责令限期改正；逾期不改正的，处十万元以下的罚款：\n（一）工作场所职业病危害因素检测、评价结果没有存档、上报、公布的；\n（二）未采取本法第二十条规定的职业病防治管理措施的；\n（三）未按照规定公布有关职业病防治的规章制度、操作规程、职业病危害事故应急救援措施的；\n（四）未按照规定组织劳动者进行职业卫生培训，或者未对劳动者个人职业病防护采取指导、督促措施的；\n（五）国内首次使用或者首次进口与职业病危害有关的化学材料，未按照规定报送毒性鉴定资料以及经有关部门登记注册或者批准进口的文件的。",
      "blankText": "违反本法规定，有下列行为之一的，由卫生行政部门给予警告，责令限期改正；逾期不改正的，处十万元以下的罚款：\n（一）工作场所职业病危害因素检测、评价结果没有存档、上报、公布的；\n（二）未采取本法第二十条规定的职业病防治管理措施的；\n（三）未按照规定公布有关职业病防治的规章制度、操作规程、职业病危害事故应急救援措施的；\n（四）未按照规定组织劳动者进行职业卫生培训，或者未对劳动者个人职业病防护采取指导、督促措施的；\n（五）国内首次使用或者首次进口与职业病危害有关的化学材料，未按照规定报送毒性鉴定资料以及经有关部门登记注册或者批准进口的文件的。"
    },
    {
      "id": 190,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 71,
      "text": "用人单位违反本法规定，有下列行为之一的，由卫生行政部门责令限期改正，给予警告，可以并处五万元以上十万元以下的罚款：\n（一）未按照规定及时、如实向卫生行政部门申报产生职业病危害的项目的；\n（二）未实施由专人负责的职业病危害因素日常监测，或者监测系统不能正常监测的；\n（三）订立或者变更劳动合同时，未告知劳动者职业病危害真实情况的；\n（四）未按照规定组织职业健康检查、建立职业健康监护档案或者未将检查结果书面告知劳动者的；\n（五）未依照本法规定在劳动者离开用人单位时提供职业健康监护档案复印件的。",
      "blankText": "用人单位违反本法规定，有下列行为之一的，由卫生行政部门责令限期改正，给予警告，可以并处五万元以上十万元以下的罚款：\n（一）未按照规定及时、如实向卫生行政部门申报产生职业病危害的项目的；\n（二）未实施由专人负责的职业病危害因素日常监测，或者监测系统不能正常监测的；\n（三）订立或者变更劳动合同时，未告知劳动者职业病危害真实情况的；\n（四）未按照规定组织职业健康检查、建立职业健康监护档案或者未将检查结果书面告知劳动者的；\n（五）未依照本法规定在劳动者离开用人单位时提供职业健康监护档案复印件的。"
    },
    {
      "id": 191,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 72,
      "text": "用人单位违反本法规定，有下列行为之一的，由卫生行政部门给予警告，责令限期改正，逾期不改正的，处五万元以上二十万元以下的罚款；情节严重的，责令停止产生职业病危害的作业，或者提请有关人民政府按照国务院规定的权限责令关闭：\n（一）工作场所职业病危害因素的强度或者浓度超过国家职业卫生标准的；\n（二）未提供职业病防护设施和个人使用的职业病防护用品，或者提供的职业病防护设施和个人使用的职业病防护用品不符合国家职业卫生标准和卫生要求的；\n（三）对职业病防护设备、应急救援设施和个人使用的职业病防护用品未按照规定进行维护、检修、检测，或者不能保持正常运行、使用状态的；\n（四）未按照规定对工作场所职业病危害因素进行检测、评价的；\n（五）工作场所职业病危害因素经治理仍然达不到国家职业卫生标准和卫生要求时，未停止存在职业病危害因素的作业的；\n（六）未按照规定安排职业病病人、疑似职业病病人进行诊治的；\n（七）发生或者可能发生急性职业病危害事故时，未立即采取应急救援和控制措施或者未按照规定及时报告的；\n（八）未按照规定在产生严重职业病危害的作业岗位醒目位置设置警示标识和中文警示说明的；\n（九）拒绝职业卫生监督管理部门监督检查的；\n（十）隐瞒、伪造、篡改、毁损职业健康监护档案、工作场所职业病危害因素检测评价结果等相关资料，或者拒不提供职业病诊断、鉴定所需资料的；\n（十一）未按照规定承担职业病诊断、鉴定费用和职业病病人的医疗、生活保障费用的。",
      "blankText": "用人单位违反本法规定，有下列行为之一的，由卫生行政部门给予警告，责令限期改正，逾期不改正的，处五万元以上二十万元以下的罚款；情节严重的，责令停止产生职业病危害的作业，或者提请有关人民政府按照国务院规定的权限责令关闭：\n（一）工作场所职业病危害因素的强度或者浓度超过国家职业卫生标准的；\n（二）未提供职业病防护设施和个人使用的职业病防护用品，或者提供的职业病防护设施和个人使用的职业病防护用品不符合国家职业卫生标准和卫生要求的；\n（三）对职业病防护设备、应急救援设施和个人使用的职业病防护用品未按照规定进行维护、检修、检测，或者不能保持正常运行、使用状态的；\n（四）未按照规定对工作场所职业病危害因素进行检测、评价的；\n（五）工作场所职业病危害因素经治理仍然达不到国家职业卫生标准和卫生要求时，未停止存在职业病危害因素的作业的；\n（六）未按照规定安排职业病病人、疑似职业病病人进行诊治的；\n（七）发生或者可能发生急性职业病危害事故时，未立即采取应急救援和控制措施或者未按照规定及时报告的；\n（八）未按照规定在产生严重职业病危害的作业岗位醒目位置设置警示标识和中文警示说明的；\n（九）拒绝职业卫生监督管理部门监督检查的；\n（十）隐瞒、伪造、篡改、毁损职业健康监护档案、工作场所职业病危害因素检测评价结果等相关资料，或者拒不提供职业病诊断、鉴定所需资料的；\n（十一）未按照规定承担职业病诊断、鉴定费用和职业病病人的医疗、生活保障费用的。"
    },
    {
      "id": 192,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 73,
      "text": "向用人单位提供可能产生职业病危害的设备、材料，未按照规定提供中文说明书或者设置警示标识和中文警示说明的，由卫生行政部门责令限期改正，给予警告，并处五万元以上二十万元以下的罚款。",
      "blankText": "向用人单位提供可能产生职业病危害的设备、材料，未按照规定提供中文说明书或者设置警示标识和中文警示说明的，由卫生行政部门责令限期改正，给予警告，并处五万元以上二十万元以下的罚款。"
    },
    {
      "id": 193,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 74,
      "text": "用人单位和医疗卫生机构未按照规定报告职业病、疑似职业病的，由有关主管部门依据职责分工责令限期改正，给予警告，可以并处一万元以下的罚款；弄虚作假的，并处二万元以上五万元以下的罚款；对直接负责的主管人员和其他直接责任人员，可以依法给予降级或者撤职的处分。",
      "blankText": "用人单位和医疗卫生机构未按照规定报告职业病、疑似职业病的，由有关主管部门依据职责分工责令限期改正，给予警告，可以并处一万元以下的罚款；弄虚作假的，并处二万元以上五万元以下的罚款；对直接负责的主管人员和其他直接责任人员，可以依法给予降级或者撤职的处分。"
    },
    {
      "id": 194,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 75,
      "text": "违反本法规定，有下列情形之一的，由卫生行政部门责令限期治理，并处五万元以上三十万元以下的罚款；情节严重的，责令停止产生职业病危害的作业，或者提请有关人民政府按照国务院规定的权限责令关闭：\n（一）隐瞒技术、工艺、设备、材料所产生的职业病危害而采用的；\n（二）隐瞒本单位职业卫生真实情况的；\n（三）可能发生急性职业损伤的有毒、有害工作场所、放射工作场所或者放射性同位素的运输、贮存不符合本法第二十五条规定的；\n（四）使用国家明令禁止使用的可能产生职业病危害的设备或者材料的；\n（五）将产生职业病危害的作业转移给没有职业病防护条件的单位和个人，或者没有职业病防护条件的单位和个人接受产生职业病危害的作业的；\n（六）擅自拆除、停止使用职业病防护设备或者应急救援设施的；\n（七）安排未经职业健康检查的劳动者、有职业禁忌的劳动者、未成年工或者孕期、哺乳期女职工从事接触职业病危害的作业或者禁忌作业的；\n（八）违章指挥和强令劳动者进行没有职业病防护措施的作业的。",
      "blankText": "违反本法规定，有下列情形之一的，由卫生行政部门责令限期治理，并处五万元以上三十万元以下的罚款；情节严重的，责令停止产生职业病危害的作业，或者提请有关人民政府按照国务院规定的权限责令关闭：\n（一）隐瞒技术、工艺、设备、材料所产生的职业病危害而采用的；\n（二）隐瞒本单位职业卫生真实情况的；\n（三）可能发生急性职业损伤的有毒、有害工作场所、放射工作场所或者放射性同位素的运输、贮存不符合本法第二十五条规定的；\n（四）使用国家明令禁止使用的可能产生职业病危害的设备或者材料的；\n（五）将产生职业病危害的作业转移给没有职业病防护条件的单位和个人，或者没有职业病防护条件的单位和个人接受产生职业病危害的作业的；\n（六）擅自拆除、停止使用职业病防护设备或者应急救援设施的；\n（七）安排未经职业健康检查的劳动者、有职业禁忌的劳动者、未成年工或者孕期、哺乳期女职工从事接触职业病危害的作业或者禁忌作业的；\n（八）违章指挥和强令劳动者进行没有职业病防护措施的作业的。"
    },
    {
      "id": 195,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 76,
      "text": "生产、经营或者进口国家明令禁止使用的可能产生职业病危害的设备或者材料，情节严重的，依法责令停业、关闭。",
      "blankText": "生产、经营或者进口国家明令禁止使用的可能产生职业病危害的设备或者材料，情节严重的，依法责令停业、关闭。"
    },
    {
      "id": 196,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 77,
      "text": "用人单位违反本法规定，已经对劳动者生命健康造成严重损害的，由卫生行政部门责令停止产生职业病危害的作业，或者提请有关人民政府按照国务院规定的权限责令关闭，并处十万元以上五十万元以下的罚款。",
      "blankText": "用人单位违反本法规定，已经对劳动者生命健康造成严重损害的，由卫生行政部门责令停止产生职业病危害的作业，或者提请有关人民政府按照国务院规定的权限责令关闭，并处十万元以上五十万元以下的罚款。"
    },
    {
      "id": 197,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 78,
      "text": "用人单位违反本法规定，造成重大职业病危害事故或者其他严重后果，构成犯罪的，对直接负责的主管人员和其他直接责任人员，依法追究刑事责任。",
      "blankText": "用人单位违反本法规定，造成重大职业病危害事故或者其他严重后果，构成犯罪的，对直接负责的主管人员和其他直接责任人员，依法追究刑事责任。"
    },
    {
      "id": 198,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 79,
      "text": "未取得职业卫生技术服务资质认可擅自从事职业卫生技术服务的，由卫生行政部门责令立即停止违法行为，没收违法所得；违法所得五千元以上的，并处违法所得二倍以上十倍以下的罚款；没有违法所得或者违法所得不足五千元的，并处五千元以上五万元以下的罚款；情节严重的，对直接负责的主管人员和其他直接责任人员，依法给予降级、撤职或者开除的处分。",
      "blankText": "未取得职业卫生技术服务资质认可擅自从事职业卫生技术服务的，由卫生行政部门责令立即停止违法行为，没收违法所得；违法所得五千元以上的，并处违法所得二倍以上十倍以下的罚款；没有违法所得或者违法所得不足五千元的，并处五千元以上五万元以下的罚款；情节严重的，对直接负责的主管人员和其他直接责任人员，依法给予降级、撤职或者开除的处分。"
    },
    {
      "id": 199,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 80,
      "text": "从事职业卫生技术服务的机构和承担职业病诊断的医疗卫生机构违反本法规定，有下列行为之一的，由卫生行政部门责令立即停止违法行为，给予警告，没收违法所得；违法所得五千元以上的，并处违法所得二倍以上五倍以下的罚款；没有违法所得或者违法所得不足五千元的，并处五千元以上二万元以下的罚款；情节严重的，由原认可或者登记机关取消其相应的资格；对直接负责的主管人员和其他直接责任人员，依法给予降级、撤职或者开除的处分；构成犯罪的，依法追究刑事责任：\n（一）超出资质认可或者诊疗项目登记范围从事职业卫生技术服务或者职业病诊断的；\n（二）不按照本法规定履行法定职责的；\n（三）出具虚假证明文件的。",
      "blankText": "从事职业卫生技术服务的机构和承担职业病诊断的医疗卫生机构违反本法规定，有下列行为之一的，由卫生行政部门责令立即停止违法行为，给予警告，没收违法所得；违法所得五千元以上的，并处违法所得二倍以上五倍以下的罚款；没有违法所得或者违法所得不足五千元的，并处五千元以上二万元以下的罚款；情节严重的，由原认可或者登记机关取消其相应的资格；对直接负责的主管人员和其他直接责任人员，依法给予降级、撤职或者开除的处分；构成犯罪的，依法追究刑事责任：\n（一）超出资质认可或者诊疗项目登记范围从事职业卫生技术服务或者职业病诊断的；\n（二）不按照本法规定履行法定职责的；\n（三）出具虚假证明文件的。"
    },
    {
      "id": 200,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 81,
      "text": "职业病诊断鉴定委员会组成人员收受职业病诊断争议当事人的财物或者其他好处的，给予警告，没收收受的财物，可以并处三千元以上五万元以下的罚款，取消其担任职业病诊断鉴定委员会组成人员的资格，并从省、自治区、直辖市人民政府卫生行政部门设立的专家库中予以除名。",
      "blankText": "职业病诊断鉴定委员会组成人员收受职业病诊断争议当事人的财物或者其他好处的，给予警告，没收收受的财物，可以并处三千元以上五万元以下的罚款，取消其担任职业病诊断鉴定委员会组成人员的资格，并从省、自治区、直辖市人民政府卫生行政部门设立的专家库中予以除名。"
    },
    {
      "id": 201,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 82,
      "text": "卫生行政部门不按照规定报告职业病和职业病危害事故的，由上一级行政部门责令改正，通报批评，给予警告；虚报、瞒报的，对单位负责人、直接负责的主管人员和其他直接责任人员依法给予降级、撤职或者开除的处分。",
      "blankText": "卫生行政部门不按照规定报告职业病和职业病危害事故的，由上一级行政部门责令改正，通报批评，给予警告；虚报、瞒报的，对单位负责人、直接负责的主管人员和其他直接责任人员依法给予降级、撤职或者开除的处分。"
    },
    {
      "id": 202,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 83,
      "text": "县级以上地方人民政府在职业病防治工作中未依照本法履行职责，本行政区域出现重大职业病危害事故、造成严重社会影响的，依法对直接负责的主管人员和其他直接责任人员给予记大过直至开除的处分。\n县级以上人民政府职业卫生监督管理部门不履行本法规定的职责，滥用职权、玩忽职守、徇私舞弊，依法对直接负责的主管人员和其他直接责任人员给予记大过或者降级的处分；造成职业病危害事故或者其他严重后果的，依法给予撤职或者开除的处分。",
      "blankText": "县级以上地方人民政府在职业病防治工作中未依照本法履行职责，本行政区域出现重大职业病危害事故、造成严重社会影响的，依法对直接负责的主管人员和其他直接责任人员给予记大过直至开除的处分。\n县级以上人民政府职业卫生监督管理部门不履行本法规定的职责，滥用职权、玩忽职守、徇私舞弊，依法对直接负责的主管人员和其他直接责任人员给予记大过或者降级的处分；造成职业病危害事故或者其他严重后果的，依法给予撤职或者开除的处分。"
    },
    {
      "id": 203,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 84,
      "text": "违反本法规定，构成犯罪的，依法追究刑事责任。",
      "blankText": "违反本法规定，构成犯罪的，依法追究刑事责任。"
    },
    {
      "id": 204,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 85,
      "text": "本法下列用语的含义：\n职业病危害，是指对从事职业活动的劳动者可能导致职业病的各种危害。职业病危害因素包括：职业活动中存在的各种有害的化学、物理、生物因素以及在作业过程中产生的其他职业有害因素。\n职业禁忌，是指劳动者从事特定职业或者接触特定职业病危害因素时，比一般职业人群更易于遭受职业病危害和罹患职业病或者可能导致原有自身疾病病情加重，或者在从事作业过程中诱发可能导致对他人生命健康构成危险的疾病的个人特殊生理或者病理状态。",
      "blankText": "本法下列用语的含义：\n职业病危害，是指对从事职业活动的劳动者可能导致职业病的各种危害。职业病危害因素包括：职业活动中存在的各种有害的化学、物理、生物因素以及在作业过程中产生的其他职业有害因素。\n职业禁忌，是指劳动者从事特定职业或者接触特定职业病危害因素时，比一般职业人群更易于遭受职业病危害和罹患职业病或者可能导致原有自身疾病病情加重，或者在从事作业过程中诱发可能导致对他人生命健康构成危险的疾病的个人特殊生理或者病理状态。"
    },
    {
      "id": 205,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 86,
      "text": "本法第二条规定的用人单位以外的单位，产生职业病危害的，其职业病防治活动可以参照本法执行。\n劳务派遣用工单位应当履行本法规定的用人单位的义务。\n中国人民解放军参照执行本法的办法，由国务院、中央军事委员会制定。",
      "blankText": "本法第二条规定的用人单位以外的单位，产生职业病危害的，其职业病防治活动可以参照本法执行。\n劳务派遣用工单位应当履行本法规定的用人单位的义务。\n中国人民解放军参照执行本法的办法，由国务院、中央军事委员会制定。"
    },
    {
      "id": 206,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 87,
      "text": "对医疗机构放射性职业病危害控制的监督管理，由卫生行政部门依照本法的规定实施。",
      "blankText": "对医疗机构放射性职业病危害控制的监督管理，由卫生行政部门依照本法的规定实施。"
    },
    {
      "id": 207,
      "category": "劳动安全",
      "law": "职业病防治法",
      "articleNum": 88,
      "text": "本法自2002年5月1日起施行。",
      "blankText": "本法自______年______月______日起施行。"
    },
    {
      "id": 1,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 1,
      "text": "为了公正及时解决劳动争议，保护当事人合法权益，促进劳动关系和谐稳定，制定本法。",
      "blankText": "为了公正及时解决劳动争议，保护当事人合法权益，促进劳动关系和谐稳定，制定本法。"
    },
    {
      "id": 2,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 2,
      "text": "中华人民共和国境内的用人单位与劳动者发生的下列劳动争议，适用本法：\n（一）因确认劳动关系发生的争议；\n（二）因订立、履行、变更、解除和终止劳动合同发生的争议；\n（三）因除名、辞退和辞职、离职发生的争议；\n（四）因工作时间、休息休假、社会保险、福利、培训以及劳动保护发生的争议；\n（五）因劳动报酬、工伤医疗费、经济补偿或者赔偿金等发生的争议；\n（六）法律、法规规定的其他劳动争议。",
      "blankText": "中华人民共和国境内的用人单位与劳动者发生的下列劳动争议，适用本法：\n（一）因确认劳动关系发生的争议；\n（二）因订立、履行、变更、解除和终止劳动合同发生的争议；\n（三）因除名、辞退和辞职、离职发生的争议；\n（四）因工作时间、休息休假、社会保险、福利、培训以及劳动保护发生的争议；\n（五）因劳动报酬、工伤医疗费、经济补偿或者赔偿金等发生的争议；\n（六）法律、法规规定的其他劳动争议。"
    },
    {
      "id": 3,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 3,
      "text": "解决劳动争议，应当根据事实，遵循合法、公正、及时、着重调解的原则，依法保护当事人的合法权益。",
      "blankText": "解决劳动争议，应当根据事实，遵循合法、公正、及时、着重调解的原则，依法保护当事人的合法权益。"
    },
    {
      "id": 4,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 4,
      "text": "发生劳动争议，劳动者可以与用人单位协商，也可以请工会或者第三方共同与用人单位协商，达成和解协议。",
      "blankText": "发生劳动争议，劳动者可以与用人单位协商，也可以请工会或者第三方共同与用人单位协商，达成和解协议。"
    },
    {
      "id": 5,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 5,
      "text": "发生劳动争议，当事人不愿协商、协商不成或者达成和解协议后不履行的，可以向调解组织申请调解；不愿调解、调解不成或者达成调解协议后不履行的，可以向劳动争议仲裁委员会申请仲裁；对仲裁裁决不服的，除本法另有规定的外，可以向人民法院提起诉讼。",
      "blankText": "发生劳动争议，当事人不愿协商、协商不成或者达成和解协议后不履行的，可以向调解组织申请调解；不愿调解、调解不成或者达成调解协议后不履行的，可以向劳动争议仲裁委员会申请仲裁；对仲裁裁决不服的，除本法另有规定的外，可以向人民法院提起诉讼。"
    },
    {
      "id": 6,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 6,
      "text": "发生劳动争议，当事人对自己提出的主张，有责任提供证据。与争议事项有关的证据属于用人单位掌握管理的，用人单位应当提供；用人单位不提供的，应当承担不利后果。",
      "blankText": "发生劳动争议，当事人对自己提出的主张，有责任提供证据。与争议事项有关的证据属于用人单位掌握管理的，用人单位应当提供；用人单位不提供的，应当承担不利后果。"
    },
    {
      "id": 7,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 7,
      "text": "发生劳动争议的劳动者一方在十人以上，并有共同请求的，可以推举代表参加调解、仲裁或者诉讼活动。",
      "blankText": "发生劳动争议的劳动者一方在十人以上，并有共同请求的，可以推举代表参加调解、仲裁或者诉讼活动。"
    },
    {
      "id": 8,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 8,
      "text": "县级以上人民政府劳动行政部门会同工会和企业方面代表建立协调劳动关系三方机制，共同研究解决劳动争议的重大问题。",
      "blankText": "县级以上人民政府劳动行政部门会同工会和企业方面代表建立协调劳动关系三方机制，共同研究解决劳动争议的重大问题。"
    },
    {
      "id": 9,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 9,
      "text": "用人单位违反国家规定，拖欠或者未足额支付劳动报酬，或者拖欠工伤医疗费、经济补偿或者赔偿金的，劳动者可以向劳动行政部门投诉，劳动行政部门应当依法处理。",
      "blankText": "用人单位违反国家规定，拖欠或者未足额支付劳动报酬，或者拖欠工伤医疗费、经济补偿或者赔偿金的，劳动者可以向劳动行政部门投诉，劳动行政部门应当依法处理。"
    },
    {
      "id": 10,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 10,
      "text": "发生劳动争议，当事人可以到下列调解组织申请调解：\n（一）企业劳动争议调解委员会；\n（二）依法设立的基层人民调解组织；\n（三）在乡镇、街道设立的具有劳动争议调解职能的组织。\n企业劳动争议调解委员会由职工代表和企业代表组成。职工代表由工会成员担任或者由全体职工推举产生，企业代表由企业负责人指定。企业劳动争议调解委员会主任由工会成员或者双方推举的人员担任。",
      "blankText": "发生劳动争议，当事人可以到下列调解组织申请调解：\n（一）企业劳动争议调解委员会；\n（二）依法设立的基层人民调解组织；\n（三）在乡镇、街道设立的具有劳动争议调解职能的组织。\n企业劳动争议调解委员会由职工代表和企业代表组成。职工代表由工会成员担任或者由全体职工推举产生，企业代表由企业负责人指定。企业劳动争议调解委员会主任由工会成员或者双方推举的人员担任。"
    },
    {
      "id": 11,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 11,
      "text": "劳动争议调解组织的调解员应当由公道正派、联系群众、热心调解工作，并具有一定法律知识、政策水平和文化水平的成年公民担任。",
      "blankText": "劳动争议调解组织的调解员应当由公道正派、联系群众、热心调解工作，并具有一定法律知识、政策水平和文化水平的成年公民担任。"
    },
    {
      "id": 12,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 12,
      "text": "当事人申请劳动争议调解可以书面申请，也可以口头申请。口头申请的，调解组织应当当场记录申请人基本情况、申请调解的争议事项、理由和时间。",
      "blankText": "当事人申请劳动争议调解可以书面申请，也可以口头申请。口头申请的，调解组织应当当场记录申请人基本情况、申请调解的争议事项、理由和时间。"
    },
    {
      "id": 13,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 13,
      "text": "调解劳动争议，应当充分听取双方当事人对事实和理由的陈述，耐心疏导，帮助其达成协议。",
      "blankText": "调解劳动争议，应当充分听取双方当事人对事实和理由的陈述，耐心疏导，帮助其达成协议。"
    },
    {
      "id": 14,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 14,
      "text": "经调解达成协议的，应当制作调解协议书。\n调解协议书由双方当事人签名或者盖章，经调解员签名并加盖调解组织印章后生效，对双方当事人具有约束力，当事人应当履行。\n自劳动争议调解组织收到调解申请之日起十五日内未达成调解协议的，当事人可以依法申请仲裁。",
      "blankText": "经调解达成协议的，应当制作调解协议书。\n调解协议书由双方当事人签名或者盖章，经调解员签名并加盖调解组织印章后生效，对双方当事人具有约束力，当事人应当履行。\n自劳动争议调解组织收到调解申请之日起十五日内未达成调解协议的，当事人可以依法申请仲裁。"
    },
    {
      "id": 15,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 15,
      "text": "达成调解协议后，一方当事人在协议约定期限内不履行调解协议的，另一方当事人可以依法申请仲裁。",
      "blankText": "达成调解协议后，一方当事人在协议约定期限内不履行调解协议的，另一方当事人可以依法申请仲裁。"
    },
    {
      "id": 16,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 16,
      "text": "因支付拖欠劳动报酬、工伤医疗费、经济补偿或者赔偿金事项达成调解协议，用人单位在协议约定期限内不履行的，劳动者可以持调解协议书依法向人民法院申请支付令。人民法院应当依法发出支付令。",
      "blankText": "因支付拖欠劳动报酬、工伤医疗费、经济补偿或者赔偿金事项达成调解协议，用人单位在协议约定期限内不履行的，劳动者可以持调解协议书依法向人民法院申请支付令。人民法院应当依法发出支付令。"
    },
    {
      "id": 17,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 17,
      "text": "劳动争议仲裁委员会按照统筹规划、合理布局和适应实际需要的原则设立。省、自治区人民政府可以决定在市、县设立；直辖市人民政府可以决定在区、县设立。直辖市、设区的市也可以设立一个或者若干个劳动争议仲裁委员会。劳动争议仲裁委员会不按行政区划层层设立。",
      "blankText": "劳动争议仲裁委员会按照统筹规划、合理布局和适应实际需要的原则设立。省、自治区人民政府可以决定在市、县设立；直辖市人民政府可以决定在区、县设立。直辖市、设区的市也可以设立一个或者若干个劳动争议仲裁委员会。劳动争议仲裁委员会不按行政区划层层设立。"
    },
    {
      "id": 18,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 18,
      "text": "国务院劳动行政部门依照本法有关规定制定仲裁规则。省、自治区、直辖市人民政府劳动行政部门对本行政区域的劳动争议仲裁工作进行指导。",
      "blankText": "国务院劳动行政部门依照本法有关规定制定仲裁规则。省、自治区、直辖市人民政府劳动行政部门对本行政区域的劳动争议仲裁工作进行指导。"
    },
    {
      "id": 19,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 19,
      "text": "劳动争议仲裁委员会由劳动行政部门代表、工会代表和企业方面代表组成。劳动争议仲裁委员会组成人员应当是单数。\n劳动争议仲裁委员会依法履行下列职责：\n（一）聘任、解聘专职或者兼职仲裁员；\n（二）受理劳动争议案件；\n（三）讨论重大或者疑难的劳动争议案件；\n（四）对仲裁活动进行监督。\n劳动争议仲裁委员会下设办事机构，负责办理劳动争议仲裁委员会的日常工作。",
      "blankText": "劳动争议仲裁委员会由劳动行政部门代表、工会代表和企业方面代表组成。劳动争议仲裁委员会组成人员应当是单数。\n劳动争议仲裁委员会依法履行下列职责：\n（一）聘任、解聘专职或者兼职仲裁员；\n（二）受理劳动争议案件；\n（三）讨论重大或者疑难的劳动争议案件；\n（四）对仲裁活动进行监督。\n劳动争议仲裁委员会下设办事机构，负责办理劳动争议仲裁委员会的日常工作。"
    },
    {
      "id": 20,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 20,
      "text": "劳动争议仲裁委员会应当设仲裁员名册。\n仲裁员应当公道正派并符合下列条件之一：\n（一）曾任审判员的；\n（二）从事法律研究、教学工作并具有中级以上职称的；\n（三）具有法律知识、从事人力资源管理或者工会等专业工作满五年的；\n（四）律师执业满三年的。",
      "blankText": "劳动争议仲裁委员会应当设仲裁员名册。\n仲裁员应当公道正派并符合下列条件之一：\n（一）曾任审判员的；\n（二）从事法律研究、教学工作并具有中级以上职称的；\n（三）具有法律知识、从事人力资源管理或者工会等专业工作满五年的；\n（四）律师执业满三年的。"
    },
    {
      "id": 21,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 21,
      "text": "劳动争议仲裁委员会负责管辖本区域内发生的劳动争议。\n劳动争议由劳动合同履行地或者用人单位所在地的劳动争议仲裁委员会管辖。双方当事人分别向劳动合同履行地和用人单位所在地的劳动争议仲裁委员会申请仲裁的，由劳动合同履行地的劳动争议仲裁委员会管辖。",
      "blankText": "劳动争议仲裁委员会负责管辖本区域内发生的劳动争议。\n劳动争议由劳动合同履行地或者用人单位所在地的劳动争议仲裁委员会管辖。双方当事人分别向劳动合同履行地和用人单位所在地的劳动争议仲裁委员会申请仲裁的，由劳动合同履行地的劳动争议仲裁委员会管辖。"
    },
    {
      "id": 22,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 22,
      "text": "发生劳动争议的劳动者和用人单位为劳动争议仲裁案件的双方当事人。\n劳务派遣单位或者用工单位与劳动者发生劳动争议的，劳务派遣单位和用工单位为共同当事人。",
      "blankText": "发生劳动争议的劳动者和用人单位为劳动争议仲裁案件的双方当事人。\n劳务派遣单位或者用工单位与劳动者发生劳动争议的，劳务派遣单位和用工单位为共同当事人。"
    },
    {
      "id": 23,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 23,
      "text": "与劳动争议案件的处理结果有利害关系的第三人，可以申请参加仲裁活动或者由劳动争议仲裁委员会通知其参加仲裁活动。",
      "blankText": "与劳动争议案件的处理结果有利害关系的第三人，可以申请参加仲裁活动或者由劳动争议仲裁委员会通知其参加仲裁活动。"
    },
    {
      "id": 24,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 24,
      "text": "当事人可以委托代理人参加仲裁活动。委托他人参加仲裁活动，应当向劳动争议仲裁委员会提交有委托人签名或者盖章的委托书，委托书应当载明委托事项和权限。",
      "blankText": "当事人可以委托代理人参加仲裁活动。委托他人参加仲裁活动，应当向劳动争议仲裁委员会提交有委托人签名或者盖章的委托书，委托书应当载明委托事项和权限。"
    },
    {
      "id": 25,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 25,
      "text": "丧失或者部分丧失民事行为能力的劳动者，由其法定代理人代为参加仲裁活动；无法定代理人的，由劳动争议仲裁委员会为其指定代理人。劳动者死亡的，由其近亲属或者代理人参加仲裁活动。",
      "blankText": "丧失或者部分丧失民事行为能力的劳动者，由其法定代理人代为参加仲裁活动；无法定代理人的，由劳动争议仲裁委员会为其指定代理人。劳动者死亡的，由其近亲属或者代理人参加仲裁活动。"
    },
    {
      "id": 26,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 26,
      "text": "劳动争议仲裁公开进行，但当事人协议不公开进行或者涉及国家秘密、商业秘密和个人隐私的除外。",
      "blankText": "劳动争议仲裁公开进行，但当事人协议不公开进行或者涉及国家秘密、商业秘密和个人隐私的除外。"
    },
    {
      "id": 27,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 27,
      "text": "劳动争议申请仲裁的时效期间为一年。仲裁时效期间从当事人知道或者应当知道其权利被侵害之日起计算。\n前款规定的仲裁时效，因当事人一方向对方当事人主张权利，或者向有关部门请求权利救济，或者对方当事人同意履行义务而中断。从中断时起，仲裁时效期间重新计算。\n因不可抗力或者有其他正当理由，当事人不能在本条第一款规定的仲裁时效期间申请仲裁的，仲裁时效中止。从中止时效的原因消除之日起，仲裁时效期间继续计算。\n劳动关系存续期间因拖欠劳动报酬发生争议的，劳动者申请仲裁不受本条第一款规定的仲裁时效期间的限制；但是，劳动关系终止的，应当自劳动关系终止之日起一年内提出。",
      "blankText": "劳动争议申请仲裁的时效期间为一年。仲裁时效期间从当事人知道或者应当知道其权利被侵害之日起计算。\n前款规定的仲裁时效，因当事人一方向对方当事人主张权利，或者向有关部门请求权利救济，或者对方当事人同意履行义务而中断。从中断时起，仲裁时效期间重新计算。\n因不可抗力或者有其他正当理由，当事人不能在本条第一款规定的仲裁时效期间申请仲裁的，仲裁时效中止。从中止时效的原因消除之日起，仲裁时效期间继续计算。\n劳动关系存续期间因拖欠劳动报酬发生争议的，劳动者申请仲裁不受本条第一款规定的仲裁时效期间的限制；但是，劳动关系终止的，应当自劳动关系终止之日起一年内提出。"
    },
    {
      "id": 28,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 28,
      "text": "申请人申请仲裁应当提交书面仲裁申请，并按照被申请人人数提交副本。\n仲裁申请书应当载明下列事项：\n（一）劳动者的姓名、性别、年龄、职业、工作单位和住所，用人单位的名称、住所和法定代表人或者主要负责人的姓名、职务；\n（二）仲裁请求和所根据的事实、理由；\n（三）证据和证据来源、证人姓名和住所。\n书写仲裁申请确有困难的，可以口头申请，由劳动争议仲裁委员会记入笔录，并告知对方当事人。",
      "blankText": "申请人申请仲裁应当提交书面仲裁申请，并按照被申请人人数提交副本。\n仲裁申请书应当载明下列事项：\n（一）劳动者的姓名、性别、年龄、职业、工作单位和住所，用人单位的名称、住所和法定代表人或者主要负责人的姓名、职务；\n（二）仲裁请求和所根据的事实、理由；\n（三）证据和证据来源、证人姓名和住所。\n书写仲裁申请确有困难的，可以口头申请，由劳动争议仲裁委员会记入笔录，并告知对方当事人。"
    },
    {
      "id": 29,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 29,
      "text": "劳动争议仲裁委员会收到仲裁申请之日起五日内，认为符合受理条件的，应当受理，并通知申请人；认为不符合受理条件的，应当书面通知申请人不予受理，并说明理由。对劳动争议仲裁委员会不予受理或者逾期未作出决定的，申请人可以就该劳动争议事项向人民法院提起诉讼。",
      "blankText": "劳动争议仲裁委员会收到仲裁申请之日起五日内，认为符合受理条件的，应当受理，并通知申请人；认为不符合受理条件的，应当书面通知申请人不予受理，并说明理由。对劳动争议仲裁委员会不予受理或者逾期未作出决定的，申请人可以就该劳动争议事项向人民法院提起诉讼。"
    },
    {
      "id": 30,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 30,
      "text": "劳动争议仲裁委员会受理仲裁申请后，应当在五日内将仲裁申请书副本送达被申请人。\n被申请人收到仲裁申请书副本后，应当在十日内向劳动争议仲裁委员会提交答辩书。劳动争议仲裁委员会收到答辩书后，应当在五日内将答辩书副本送达申请人。被申请人未提交答辩书的，不影响仲裁程序的进行。",
      "blankText": "劳动争议仲裁委员会受理仲裁申请后，应当在五日内将仲裁申请书副本送达被申请人。\n被申请人收到仲裁申请书副本后，应当在十日内向劳动争议仲裁委员会提交答辩书。劳动争议仲裁委员会收到答辩书后，应当在五日内将答辩书副本送达申请人。被申请人未提交答辩书的，不影响仲裁程序的进行。"
    },
    {
      "id": 31,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 31,
      "text": "劳动争议仲裁委员会裁决劳动争议案件实行仲裁庭制。仲裁庭由三名仲裁员组成，设首席仲裁员。简单劳动争议案件可以由一名仲裁员独任仲裁。",
      "blankText": "劳动争议仲裁委员会裁决劳动争议案件实行仲裁庭制。仲裁庭由三名仲裁员组成，设首席仲裁员。简单劳动争议案件可以由一名仲裁员独任仲裁。"
    },
    {
      "id": 32,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 32,
      "text": "劳动争议仲裁委员会应当在受理仲裁申请之日起五日内将仲裁庭的组成情况书面通知当事人。",
      "blankText": "劳动争议仲裁委员会应当在受理仲裁申请之日起五日内将仲裁庭的组成情况书面通知当事人。"
    },
    {
      "id": 33,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 33,
      "text": "仲裁员有下列情形之一，应当回避，当事人也有权以口头或者书面方式提出回避申请：\n（一）是本案当事人或者当事人、代理人的近亲属的；\n（二）与本案有利害关系的；\n（三）与本案当事人、代理人有其他关系，可能影响公正裁决的；\n（四）私自会见当事人、代理人，或者接受当事人、代理人的请客送礼的。\n劳动争议仲裁委员会对回避申请应当及时作出决定，并以口头或者书面方式通知当事人。",
      "blankText": "仲裁员有下列情形之一，应当回避，当事人也有权以口头或者书面方式提出回避申请：\n（一）是本案当事人或者当事人、代理人的近亲属的；\n（二）与本案有利害关系的；\n（三）与本案当事人、代理人有其他关系，可能影响公正裁决的；\n（四）私自会见当事人、代理人，或者接受当事人、代理人的请客送礼的。\n劳动争议仲裁委员会对回避申请应当及时作出决定，并以口头或者书面方式通知当事人。"
    },
    {
      "id": 34,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 34,
      "text": "仲裁员有本法第三十三条第四项规定情形，或者有索贿受贿、徇私舞弊、枉法裁决行为的，应当依法承担法律责任。劳动争议仲裁委员会应当将其解聘。",
      "blankText": "仲裁员有本法第三十三条第四项规定情形，或者有索贿受贿、徇私舞弊、枉法裁决行为的，应当依法承担法律责任。劳动争议仲裁委员会应当将其解聘。"
    },
    {
      "id": 35,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 35,
      "text": "仲裁庭应当在开庭五日前，将开庭日期、地点书面通知双方当事人。当事人有正当理由的，可以在开庭三日前请求延期开庭。是否延期，由劳动争议仲裁委员会决定。",
      "blankText": "仲裁庭应当在开庭五日前，将开庭日期、地点书面通知双方当事人。当事人有正当理由的，可以在开庭三日前请求延期开庭。是否延期，由劳动争议仲裁委员会决定。"
    },
    {
      "id": 36,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 36,
      "text": "申请人收到书面通知，无正当理由拒不到庭或者未经仲裁庭同意中途退庭的，可以视为撤回仲裁申请。\n被申请人收到书面通知，无正当理由拒不到庭或者未经仲裁庭同意中途退庭的，可以缺席裁决。",
      "blankText": "申请人收到书面通知，无正当理由拒不到庭或者未经仲裁庭同意中途退庭的，可以视为撤回仲裁申请。\n被申请人收到书面通知，无正当理由拒不到庭或者未经仲裁庭同意中途退庭的，可以缺席裁决。"
    },
    {
      "id": 37,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 37,
      "text": "仲裁庭对专门性问题认为需要鉴定的，可以交由当事人约定的鉴定机构鉴定；当事人没有约定或者无法达成约定的，由仲裁庭指定的鉴定机构鉴定。\n根据当事人的请求或者仲裁庭的要求，鉴定机构应当派鉴定人参加开庭。当事人经仲裁庭许可，可以向鉴定人提问。",
      "blankText": "仲裁庭对专门性问题认为需要鉴定的，可以交由当事人约定的鉴定机构鉴定；当事人没有约定或者无法达成约定的，由仲裁庭指定的鉴定机构鉴定。\n根据当事人的请求或者仲裁庭的要求，鉴定机构应当派鉴定人参加开庭。当事人经仲裁庭许可，可以向鉴定人提问。"
    },
    {
      "id": 38,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 38,
      "text": "当事人在仲裁过程中有权进行质证和辩论。质证和辩论终结时，首席仲裁员或者独任仲裁员应当征询当事人的最后意见。",
      "blankText": "当事人在仲裁过程中有权进行质证和辩论。质证和辩论终结时，首席仲裁员或者独任仲裁员应当征询当事人的最后意见。"
    },
    {
      "id": 39,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 39,
      "text": "当事人提供的证据经查证属实的，仲裁庭应当将其作为认定事实的根据。\n劳动者无法提供由用人单位掌握管理的与仲裁请求有关的证据，仲裁庭可以要求用人单位在指定期限内提供。用人单位在指定期限内不提供的，应当承担不利后果。",
      "blankText": "当事人提供的证据经查证属实的，仲裁庭应当将其作为认定事实的根据。\n劳动者无法提供由用人单位掌握管理的与仲裁请求有关的证据，仲裁庭可以要求用人单位在指定期限内提供。用人单位在指定期限内不提供的，应当承担不利后果。"
    },
    {
      "id": 40,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 40,
      "text": "仲裁庭应当将开庭情况记入笔录。当事人和其他仲裁参加人认为对自己陈述的记录有遗漏或者差错的，有权申请补正。如果不予补正，应当记录该申请。\n笔录由仲裁员、记录人员、当事人和其他仲裁参加人签名或者盖章。",
      "blankText": "仲裁庭应当将开庭情况记入笔录。当事人和其他仲裁参加人认为对自己陈述的记录有遗漏或者差错的，有权申请补正。如果不予补正，应当记录该申请。\n笔录由仲裁员、记录人员、当事人和其他仲裁参加人签名或者盖章。"
    },
    {
      "id": 41,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 41,
      "text": "当事人申请劳动争议仲裁后，可以自行和解。达成和解协议的，可以撤回仲裁申请。",
      "blankText": "当事人申请劳动争议仲裁后，可以自行和解。达成和解协议的，可以撤回仲裁申请。"
    },
    {
      "id": 42,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 42,
      "text": "仲裁庭在作出裁决前，应当先行调解。\n调解达成协议的，仲裁庭应当制作调解书。\n调解书应当写明仲裁请求和当事人协议的结果。调解书由仲裁员签名，加盖劳动争议仲裁委员会印章，送达双方当事人。调解书经双方当事人签收后，发生法律效力。\n调解不成或者调解书送达前，一方当事人反悔的，仲裁庭应当及时作出裁决。",
      "blankText": "仲裁庭在作出裁决前，应当先行调解。\n调解达成协议的，仲裁庭应当制作调解书。\n调解书应当写明仲裁请求和当事人协议的结果。调解书由仲裁员签名，加盖劳动争议仲裁委员会印章，送达双方当事人。调解书经双方当事人签收后，发生法律效力。\n调解不成或者调解书送达前，一方当事人反悔的，仲裁庭应当及时作出裁决。"
    },
    {
      "id": 43,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 43,
      "text": "仲裁庭裁决劳动争议案件，应当自劳动争议仲裁委员会受理仲裁申请之日起四十五日内结束。案情复杂需要延期的，经劳动争议仲裁委员会主任批准，可以延期并书面通知当事人，但是延长期限不得超过十五日。逾期未作出仲裁裁决的，当事人可以就该劳动争议事项向人民法院提起诉讼。\n仲裁庭裁决劳动争议案件时，其中一部分事实已经清楚，可以就该部分先行裁决。",
      "blankText": "仲裁庭裁决劳动争议案件，应当自劳动争议仲裁委员会受理仲裁申请之日起四十五日内结束。案情复杂需要延期的，经劳动争议仲裁委员会主任批准，可以延期并书面通知当事人，但是延长期限不得超过十五日。逾期未作出仲裁裁决的，当事人可以就该劳动争议事项向人民法院提起诉讼。\n仲裁庭裁决劳动争议案件时，其中一部分事实已经清楚，可以就该部分先行裁决。"
    },
    {
      "id": 44,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 44,
      "text": "仲裁庭对追索劳动报酬、工伤医疗费、经济补偿或者赔偿金的案件，根据当事人的申请，可以裁决先予执行，移送人民法院执行。\n仲裁庭裁决先予执行的，应当符合下列条件：\n（一）当事人之间权利义务关系明确；\n（二）不先予执行将严重影响申请人的生活。\n劳动者申请先予执行的，可以不提供担保。",
      "blankText": "仲裁庭对追索劳动报酬、工伤医疗费、经济补偿或者赔偿金的案件，根据当事人的申请，可以裁决先予执行，移送人民法院执行。\n仲裁庭裁决先予执行的，应当符合下列条件：\n（一）当事人之间权利义务关系明确；\n（二）不先予执行将严重影响申请人的生活。\n劳动者申请先予执行的，可以不提供担保。"
    },
    {
      "id": 45,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 45,
      "text": "裁决应当按照多数仲裁员的意见作出，少数仲裁员的不同意见应当记入笔录。仲裁庭不能形成多数意见时，裁决应当按照首席仲裁员的意见作出。",
      "blankText": "裁决应当按照多数仲裁员的意见作出，少数仲裁员的不同意见应当记入笔录。仲裁庭不能形成多数意见时，裁决应当按照首席仲裁员的意见作出。"
    },
    {
      "id": 46,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 46,
      "text": "裁决书应当载明仲裁请求、争议事实、裁决理由、裁决结果和裁决日期。裁决书由仲裁员签名，加盖劳动争议仲裁委员会印章。对裁决持不同意见的仲裁员，可以签名，也可以不签名。",
      "blankText": "裁决书应当载明仲裁请求、争议事实、裁决理由、裁决结果和裁决日期。裁决书由仲裁员签名，加盖劳动争议仲裁委员会印章。对裁决持不同意见的仲裁员，可以签名，也可以不签名。"
    },
    {
      "id": 47,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 47,
      "text": "下列劳动争议，除本法另有规定的外，仲裁裁决为终局裁决，裁决书自作出之日起发生法律效力：\n（一）追索劳动报酬、工伤医疗费、经济补偿或者赔偿金，不超过当地月最低工资标准十二个月金额的争议；\n（二）因执行国家的劳动标准在工作时间、休息休假、社会保险等方面发生的争议。",
      "blankText": "下列劳动争议，除本法另有规定的外，仲裁裁决为终局裁决，裁决书自作出之日起发生法律效力：\n（一）追索劳动报酬、工伤医疗费、经济补偿或者赔偿金，不超过当地月最低工资标准十二个月金额的争议；\n（二）因执行国家的劳动标准在工作时间、休息休假、社会保险等方面发生的争议。"
    },
    {
      "id": 48,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 48,
      "text": "劳动者对本法第四十七条规定的仲裁裁决不服的，可以自收到仲裁裁决书之日起十五日内向人民法院提起诉讼。",
      "blankText": "劳动者对本法第四十七条规定的仲裁裁决不服的，可以自收到仲裁裁决书之日起十五日内向人民法院提起诉讼。"
    },
    {
      "id": 49,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 49,
      "text": "用人单位有证据证明本法第四十七条规定的仲裁裁决有下列情形之一，可以自收到仲裁裁决书之日起三十日内向劳动争议仲裁委员会所在地的中级人民法院申请撤销裁决：\n（一）适用法律、法规确有错误的；\n（二）劳动争议仲裁委员会无管辖权的；\n（三）违反法定程序的；\n（四）裁决所根据的证据是伪造的；\n（五）对方当事人隐瞒了足以影响公正裁决的证据的；\n（六）仲裁员在仲裁该案时有索贿受贿、徇私舞弊、枉法裁决行为的。\n人民法院经组成合议庭审查核实裁决有前款规定情形之一的，应当裁定撤销。\n仲裁裁决被人民法院裁定撤销的，当事人可以自收到裁定书之日起十五日内就该劳动争议事项向人民法院提起诉讼。",
      "blankText": "用人单位有证据证明本法第四十七条规定的仲裁裁决有下列情形之一，可以自收到仲裁裁决书之日起三十日内向劳动争议仲裁委员会所在地的中级人民法院申请撤销裁决：\n（一）适用法律、法规确有错误的；\n（二）劳动争议仲裁委员会无管辖权的；\n（三）违反法定程序的；\n（四）裁决所根据的证据是伪造的；\n（五）对方当事人隐瞒了足以影响公正裁决的证据的；\n（六）仲裁员在仲裁该案时有索贿受贿、徇私舞弊、枉法裁决行为的。\n人民法院经组成合议庭审查核实裁决有前款规定情形之一的，应当裁定撤销。\n仲裁裁决被人民法院裁定撤销的，当事人可以自收到裁定书之日起十五日内就该劳动争议事项向人民法院提起诉讼。"
    },
    {
      "id": 50,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 50,
      "text": "当事人对本法第四十七条规定以外的其他劳动争议案件的仲裁裁决不服的，可以自收到仲裁裁决书之日起十五日内向人民法院提起诉讼；期满不起诉的，裁决书发生法律效力。",
      "blankText": "当事人对本法第四十七条规定以外的其他劳动争议案件的仲裁裁决不服的，可以自收到仲裁裁决书之日起十五日内向人民法院提起诉讼；期满不起诉的，裁决书发生法律效力。"
    },
    {
      "id": 51,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 51,
      "text": "当事人对发生法律效力的调解书、裁决书，应当依照规定的期限履行。一方当事人逾期不履行的，另一方当事人可以依照民事诉讼法的有关规定向人民法院申请执行。受理申请的人民法院应当依法执行。",
      "blankText": "当事人对发生法律效力的调解书、裁决书，应当依照规定的期限履行。一方当事人逾期不履行的，另一方当事人可以依照民事诉讼法的有关规定向人民法院申请执行。受理申请的人民法院应当依法执行。"
    },
    {
      "id": 52,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 52,
      "text": "事业单位实行聘用制的工作人员与本单位发生劳动争议的，依照本法执行；法律、行政法规或者国务院另有规定的，依照其规定。",
      "blankText": "事业单位实行聘用制的工作人员与本单位发生劳动争议的，依照本法执行；法律、行政法规或者国务院另有规定的，依照其规定。"
    },
    {
      "id": 53,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 53,
      "text": "劳动争议仲裁不收费。劳动争议仲裁委员会的经费由财政予以保障。",
      "blankText": "劳动争议仲裁不收费。劳动争议仲裁委员会的经费由财政予以保障。"
    },
    {
      "id": 54,
      "category": "争议处理与监察",
      "law": "劳动争议调解仲裁法",
      "articleNum": 54,
      "text": "本法自2008年5月1日起施行。",
      "blankText": "本法自______年______月______日起施行。"
    },
    {
      "id": 55,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 1,
      "text": "为了贯彻实施劳动和社会保障（以下称劳动保障）法律、法规和规章，规范劳动保障监察工作，维护劳动者的合法权益，根据劳动法和有关法律，制定本条例。",
      "blankText": "为了贯彻实施劳动和社会保障（以下称劳动保障）法律、法规和规章，规范劳动保障监察工作，维护劳动者的合法权益，根据劳动法和有关法律，制定本条例。"
    },
    {
      "id": 56,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 2,
      "text": "对企业和个体工商户（以下称用人单位）进行劳动保障监察，适用本条例。\n对职业介绍机构、职业技能培训机构和职业技能考核鉴定机构进行劳动保障监察，依照本条例执行。",
      "blankText": "对企业和个体工商户（以下称用人单位）进行劳动保障监察，适用本条例。\n对职业介绍机构、职业技能培训机构和职业技能考核鉴定机构进行劳动保障监察，依照本条例执行。"
    },
    {
      "id": 57,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 3,
      "text": "国务院劳动保障行政部门主管全国的劳动保障监察工作。县级以上地方各级人民政府劳动保障行政部门主管本行政区域内的劳动保障监察工作。\n县级以上各级人民政府有关部门根据各自职责，支持、协助劳动保障行政部门的劳动保障监察工作。",
      "blankText": "国务院劳动保障行政部门主管全国的劳动保障监察工作。县级以上地方各级人民政府劳动保障行政部门主管本行政区域内的劳动保障监察工作。\n县级以上各级人民政府有关部门根据各自职责，支持、协助劳动保障行政部门的劳动保障监察工作。"
    },
    {
      "id": 58,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 4,
      "text": "县级、设区的市级人民政府劳动保障行政部门可以委托符合监察执法条件的组织实施劳动保障监察。\n劳动保障行政部门和受委托实施劳动保障监察的组织中的劳动保障监察员应当经过相应的考核或者考试录用。\n劳动保障监察证件由国务院劳动保障行政部门监制。",
      "blankText": "县级、设区的市级人民政府劳动保障行政部门可以委托符合监察执法条件的组织实施劳动保障监察。\n劳动保障行政部门和受委托实施劳动保障监察的组织中的劳动保障监察员应当经过相应的考核或者考试录用。\n劳动保障监察证件由国务院劳动保障行政部门监制。"
    },
    {
      "id": 59,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 5,
      "text": "县级以上地方各级人民政府应当加强劳动保障监察工作。劳动保障监察所需经费列入本级财政预算。",
      "blankText": "县级以上地方各级人民政府应当加强劳动保障监察工作。劳动保障监察所需经费列入本级财政预算。"
    },
    {
      "id": 60,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 6,
      "text": "用人单位应当遵守劳动保障法律、法规和规章，接受并配合劳动保障监察。",
      "blankText": "用人单位应当遵守劳动保障法律、法规和规章，接受并配合劳动保障监察。"
    },
    {
      "id": 61,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 7,
      "text": "各级工会依法维护劳动者的合法权益，对用人单位遵守劳动保障法律、法规和规章的情况进行监督。\n劳动保障行政部门在劳动保障监察工作中应当注意听取工会组织的意见和建议。",
      "blankText": "各级工会依法维护劳动者的合法权益，对用人单位遵守劳动保障法律、法规和规章的情况进行监督。\n劳动保障行政部门在劳动保障监察工作中应当注意听取工会组织的意见和建议。"
    },
    {
      "id": 62,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 8,
      "text": "劳动保障监察遵循公正、公开、高效、便民的原则。\n实施劳动保障监察，坚持教育与处罚相结合，接受社会监督。",
      "blankText": "劳动保障监察遵循公正、公开、高效、便民的原则。\n实施劳动保障监察，坚持教育与处罚相结合，接受社会监督。"
    },
    {
      "id": 63,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 9,
      "text": "任何组织或者个人对违反劳动保障法律、法规或者规章的行为，有权向劳动保障行政部门举报。\n劳动者认为用人单位侵犯其劳动保障合法权益的，有权向劳动保障行政部门投诉。\n劳动保障行政部门应当为举报人保密；对举报属实，为查处重大违反劳动保障法律、法规或者规章的行为提供主要线索和证据的举报人，给予奖励。",
      "blankText": "任何组织或者个人对违反劳动保障法律、法规或者规章的行为，有权向劳动保障行政部门举报。\n劳动者认为用人单位侵犯其劳动保障合法权益的，有权向劳动保障行政部门投诉。\n劳动保障行政部门应当为举报人保密；对举报属实，为查处重大违反劳动保障法律、法规或者规章的行为提供主要线索和证据的举报人，给予奖励。"
    },
    {
      "id": 64,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 10,
      "text": "劳动保障行政部门实施劳动保障监察，履行下列职责：\n（一）宣传劳动保障法律、法规和规章，督促用人单位贯彻执行；\n（二）检查用人单位遵守劳动保障法律、法规和规章的情况；\n（三）受理对违反劳动保障法律、法规或者规章的行为的举报、投诉；\n（四）依法纠正和查处违反劳动保障法律、法规或者规章的行为。",
      "blankText": "劳动保障行政部门实施劳动保障监察，履行下列职责：\n（一）宣传劳动保障法律、法规和规章，督促用人单位贯彻执行；\n（二）检查用人单位遵守劳动保障法律、法规和规章的情况；\n（三）受理对违反劳动保障法律、法规或者规章的行为的举报、投诉；\n（四）依法纠正和查处违反劳动保障法律、法规或者规章的行为。"
    },
    {
      "id": 65,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 11,
      "text": "劳动保障行政部门对下列事项实施劳动保障监察：\n（一）用人单位制定内部劳动保障规章制度的情况；\n（二）用人单位与劳动者订立劳动合同的情况；\n（三）用人单位遵守禁止使用童工规定的情况；\n（四）用人单位遵守女职工和未成年工特殊劳动保护规定的情况；\n（五）用人单位遵守工作时间和休息休假规定的情况；\n（六）用人单位支付劳动者工资和执行最低工资标准的情况；\n（七）用人单位参加各项社会保险和缴纳社会保险费的情况；\n（八）职业介绍机构、职业技能培训机构和职业技能考核鉴定机构遵守国家有关职业介绍、职业技能培训和职业技能考核鉴定的规定的情况；\n（九）法律、法规规定的其他劳动保障监察事项。",
      "blankText": "劳动保障行政部门对下列事项实施劳动保障监察：\n（一）用人单位制定内部劳动保障规章制度的情况；\n（二）用人单位与劳动者订立劳动合同的情况；\n（三）用人单位遵守禁止使用童工规定的情况；\n（四）用人单位遵守女职工和未成年工特殊劳动保护规定的情况；\n（五）用人单位遵守工作时间和休息休假规定的情况；\n（六）用人单位支付劳动者工资和执行最低工资标准的情况；\n（七）用人单位参加各项社会保险和缴纳社会保险费的情况；\n（八）职业介绍机构、职业技能培训机构和职业技能考核鉴定机构遵守国家有关职业介绍、职业技能培训和职业技能考核鉴定的规定的情况；\n（九）法律、法规规定的其他劳动保障监察事项。"
    },
    {
      "id": 66,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 12,
      "text": "劳动保障监察员依法履行劳动保障监察职责，受法律保护。\n劳动保障监察员应当忠于职守，秉公执法，勤政廉洁，保守秘密。\n任何组织或者个人对劳动保障监察员的违法违纪行为，有权向劳动保障行政部门或者有关机关检举、控告。",
      "blankText": "劳动保障监察员依法履行劳动保障监察职责，受法律保护。\n劳动保障监察员应当忠于职守，秉公执法，勤政廉洁，保守秘密。\n任何组织或者个人对劳动保障监察员的违法违纪行为，有权向劳动保障行政部门或者有关机关检举、控告。"
    },
    {
      "id": 67,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 13,
      "text": "对用人单位的劳动保障监察，由用人单位用工所在地的县级或者设区的市级劳动保障行政部门管辖。\n上级劳动保障行政部门根据工作需要，可以调查处理下级劳动保障行政部门管辖的案件。劳动保障行政部门对劳动保障监察管辖发生争议的，报请共同的上一级劳动保障行政部门指定管辖。\n省、自治区、直辖市人民政府可以对劳动保障监察的管辖制定具体办法。",
      "blankText": "对用人单位的劳动保障监察，由用人单位用工所在地的县级或者设区的市级劳动保障行政部门管辖。\n上级劳动保障行政部门根据工作需要，可以调查处理下级劳动保障行政部门管辖的案件。劳动保障行政部门对劳动保障监察管辖发生争议的，报请共同的上一级劳动保障行政部门指定管辖。\n省、自治区、直辖市人民政府可以对劳动保障监察的管辖制定具体办法。"
    },
    {
      "id": 68,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 14,
      "text": "劳动保障监察以日常巡视检查、审查用人单位按照要求报送的书面材料以及接受举报投诉等形式进行。\n劳动保障行政部门应当主动对用人单位遵守劳动保障法律、法规和规章的情况进行监督检查，制定日常巡视检查制度并组织实施。",
      "blankText": "劳动保障监察以日常巡视检查、审查用人单位按照要求报送的书面材料以及接受举报投诉等形式进行。\n劳动保障行政部门应当主动对用人单位遵守劳动保障法律、法规和规章的情况进行监督检查，制定日常巡视检查制度并组织实施。"
    },
    {
      "id": 69,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 15,
      "text": "劳动保障行政部门对用人单位按照要求报送的遵守劳动保障法律、法规、规章情况的书面材料进行审查。",
      "blankText": "劳动保障行政部门对用人单位按照要求报送的遵守劳动保障法律、法规、规章情况的书面材料进行审查。"
    },
    {
      "id": 70,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 16,
      "text": "劳动保障监察员进行调查、检查，不得少于2人，并应当佩戴劳动保障监察标志、出示劳动保障监察证件。\n劳动保障监察员办理的劳动保障监察事项与本人或者其近亲属有直接利害关系的，应当回避。",
      "blankText": "劳动保障监察员进行调查、检查，不得少于______人，并应当佩戴劳动保障监察标志、出示劳动保障监察证件。\n劳动保障监察员办理的劳动保障监察事项与本人或者其近亲属有直接利害关系的，应当回避。"
    },
    {
      "id": 71,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 17,
      "text": "劳动保障行政部门对违反劳动保障法律、法规或者规章的行为的调查，应当自立案之日起60个工作日内完成；对情况复杂的，经劳动保障行政部门负责人批准，可以延长30个工作日。",
      "blankText": "劳动保障行政部门对违反劳动保障法律、法规或者规章的行为的调查，应当自立案之日起60个工作日内完成；对情况复杂的，经劳动保障行政部门负责人批准，可以延长30个工作日。"
    },
    {
      "id": 72,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 18,
      "text": "劳动保障行政部门对违反劳动保障法律、法规或者规章的行为，根据调查、检查的结果，作出以下处理：\n（一）对依法应当受到行政处罚的，依法作出行政处罚决定；\n（二）对应当改正未改正的，依法责令改正或者作出相应的行政处理决定；\n（三）对情节轻微且已改正的，撤销立案。\n发现违法案件不属于劳动保障监察事项的，应当及时移送有关部门处理；涉嫌犯罪的，应当依法移送司法机关。",
      "blankText": "劳动保障行政部门对违反劳动保障法律、法规或者规章的行为，根据调查、检查的结果，作出以下处理：\n（一）对依法应当受到行政处罚的，依法作出行政处罚决定；\n（二）对应当改正未改正的，依法责令改正或者作出相应的行政处理决定；\n（三）对情节轻微且已改正的，撤销立案。\n发现违法案件不属于劳动保障监察事项的，应当及时移送有关部门处理；涉嫌犯罪的，应当依法移送司法机关。"
    },
    {
      "id": 73,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 19,
      "text": "劳动保障行政部门对违反劳动保障法律、法规或者规章的行为作出行政处罚或者行政处理决定前，应当听取用人单位的陈述、申辩；作出行政处罚或者行政处理决定，应当告知用人单位依法享有申请行政复议或者提起行政诉讼的权利。",
      "blankText": "劳动保障行政部门对违反劳动保障法律、法规或者规章的行为作出行政处罚或者行政处理决定前，应当听取用人单位的陈述、申辩；作出行政处罚或者行政处理决定，应当告知用人单位依法享有申请行政复议或者提起行政诉讼的权利。"
    },
    {
      "id": 74,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 20,
      "text": "违反劳动保障法律、法规或者规章的行为在2年内未被劳动保障行政部门发现，也未被举报、投诉的，劳动保障行政部门不再查处。\n前款规定的期限，自违反劳动保障法律、法规或者规章的行为发生之日起计算；违反劳动保障法律、法规或者规章的行为有连续或者继续状态的，自行为终了之日起计算。",
      "blankText": "违反劳动保障法律、法规或者规章的行为在______年内未被劳动保障行政部门发现，也未被举报、投诉的，劳动保障行政部门不再查处。\n前款规定的期限，自违反劳动保障法律、法规或者规章的行为发生之日起计算；违反劳动保障法律、法规或者规章的行为有连续或者继续状态的，自行为终了之日起计算。"
    },
    {
      "id": 75,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 21,
      "text": "用人单位违反劳动保障法律、法规或者规章，对劳动者造成损害的，依法承担赔偿责任。劳动者与用人单位就赔偿发生争议的，依照国家有关劳动争议处理的规定处理。\n对应当通过劳动争议处理程序解决的事项或者已经按照劳动争议处理程序申请调解、仲裁或者已经提起诉讼的事项，劳动保障行政部门应当告知投诉人依照劳动争议处理或者诉讼的程序办理。",
      "blankText": "用人单位违反劳动保障法律、法规或者规章，对劳动者造成损害的，依法承担赔偿责任。劳动者与用人单位就赔偿发生争议的，依照国家有关劳动争议处理的规定处理。\n对应当通过劳动争议处理程序解决的事项或者已经按照劳动争议处理程序申请调解、仲裁或者已经提起诉讼的事项，劳动保障行政部门应当告知投诉人依照劳动争议处理或者诉讼的程序办理。"
    },
    {
      "id": 76,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 22,
      "text": "劳动保障行政部门应当建立用人单位劳动保障守法诚信档案。用人单位有重大违反劳动保障法律、法规或者规章的行为的，由有关的劳动保障行政部门向社会公布。",
      "blankText": "劳动保障行政部门应当建立用人单位劳动保障守法诚信档案。用人单位有重大违反劳动保障法律、法规或者规章的行为的，由有关的劳动保障行政部门向社会公布。"
    },
    {
      "id": 77,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 23,
      "text": "用人单位有下列行为之一的，由劳动保障行政部门责令改正，按照受侵害的劳动者人数以每人1000元以上5000元以下的标准计算，处以罚款：\n（一）安排女职工从事矿山井下劳动、国家规定的第四级体力劳动强度的劳动或者其他禁忌从事的劳动的；\n（二）安排女职工在经期从事高处、低温、冷水作业或者国家规定的第三级体力劳动强度的劳动的；\n（三）安排女职工在怀孕期间从事国家规定的第三级体力劳动强度的劳动或者孕期禁忌从事的劳动的；\n（四）安排怀孕7个月以上的女职工夜班劳动或者延长其工作时间的；\n（五）女职工生育享受产假少于90天的；\n（六）安排女职工在哺乳未满1周岁的婴儿期间从事国家规定的第三级体力劳动强度的劳动或者哺乳期禁忌从事的其他劳动，或者安排其延长工作时间和夜班劳动的；\n（七）安排未成年工从事矿山井下、有毒有害、国家规定的第四级体力劳动强度的劳动或者其他禁忌从事的劳动的；\n（八）未对未成年工定期进行健康检查的。",
      "blankText": "用人单位有下列行为之一的，由劳动保障行政部门责令改正，按照受侵害的劳动者人数以每人______元以上______元以下的标准计算，处以罚款：\n（一）安排女职工从事矿山井下劳动、国家规定的第四级体力劳动强度的劳动或者其他禁忌从事的劳动的；\n（二）安排女职工在经期从事高处、低温、冷水作业或者国家规定的第三级体力劳动强度的劳动的；\n（三）安排女职工在怀孕期间从事国家规定的第三级体力劳动强度的劳动或者孕期禁忌从事的劳动的；\n（四）安排怀孕______个月以上的女职工夜班劳动或者延长其工作时间的；\n（五）女职工生育享受产假少于______天的；\n（六）安排女职工在哺乳未满______周岁的婴儿期间从事国家规定的第三级体力劳动强度的劳动或者哺乳期禁忌从事的其他劳动，或者安排其延长工作时间和夜班劳动的；\n（七）安排未成年工从事矿山井下、有毒有害、国家规定的第四级体力劳动强度的劳动或者其他禁忌从事的劳动的；\n（八）未对未成年工定期进行健康检查的。"
    },
    {
      "id": 78,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 24,
      "text": "用人单位与劳动者建立劳动关系不依法订立劳动合同的，由劳动保障行政部门责令改正。",
      "blankText": "用人单位与劳动者建立劳动关系不依法订立劳动合同的，由劳动保障行政部门责令改正。"
    },
    {
      "id": 79,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 25,
      "text": "用人单位违反劳动保障法律、法规或者规章延长劳动者工作时间的，由劳动保障行政部门给予警告，责令限期改正，并可以按照受侵害的劳动者人数以每人100元以上500元以下的标准计算，处以罚款。",
      "blankText": "用人单位违反劳动保障法律、法规或者规章延长劳动者工作时间的，由劳动保障行政部门给予警告，责令限期改正，并可以按照受侵害的劳动者人数以每人______元以上______元以下的标准计算，处以罚款。"
    },
    {
      "id": 80,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 26,
      "text": "用人单位有下列行为之一的，由劳动保障行政部门分别责令限期支付劳动者的工资报酬、劳动者工资低于当地最低工资标准的差额或者解除劳动合同的经济补偿；逾期不支付的，责令用人单位按照应付金额50%以上1倍以下的标准计算，向劳动者加付赔偿金：\n（一）克扣或者无故拖欠劳动者工资报酬的；\n（二）支付劳动者的工资低于当地最低工资标准的；\n（三）解除劳动合同未依法给予劳动者经济补偿的。",
      "blankText": "用人单位有下列行为之一的，由劳动保障行政部门分别责令限期支付劳动者的工资报酬、劳动者工资低于当地最低工资标准的差额或者解除劳动合同的经济补偿；逾期不支付的，责令用人单位按照应付金额______%以上______倍以下的标准计算，向劳动者加付赔偿金：\n（一）克扣或者无故拖欠劳动者工资报酬的；\n（二）支付劳动者的工资低于当地最低工资标准的；\n（三）解除劳动合同未依法给予劳动者经济补偿的。"
    },
    {
      "id": 81,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 27,
      "text": "用人单位向社会保险经办机构申报应缴纳的社会保险费数额时，瞒报工资总额或者职工人数的，由劳动保障行政部门责令改正，并处瞒报工资数额1倍以上3倍以下的罚款。\n骗取社会保险待遇或者骗取社会保险基金支出的，由劳动保障行政部门责令退还，并处骗取金额1倍以上3倍以下的罚款；构成犯罪的，依法追究刑事责任。",
      "blankText": "用人单位向社会保险经办机构申报应缴纳的社会保险费数额时，瞒报工资总额或者职工人数的，由劳动保障行政部门责令改正，并处瞒报工资数额______倍以上______倍以下的罚款。\n骗取社会保险待遇或者骗取社会保险基金支出的，由劳动保障行政部门责令退还，并处骗取金额______倍以上______倍以下的罚款；构成犯罪的，依法追究刑事责任。"
    },
    {
      "id": 82,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 28,
      "text": "职业介绍机构、职业技能培训机构或者职业技能考核鉴定机构违反国家有关职业介绍、职业技能培训或者职业技能考核鉴定的规定的，由劳动保障行政部门责令改正，没收违法所得，并处1万元以上5万元以下的罚款；情节严重的，吊销许可证。\n未经劳动保障行政部门许可，从事职业介绍、职业技能培训或者职业技能考核鉴定的组织或者个人，由劳动保障行政部门、工商行政管理部门依照国家有关无照经营查处取缔的规定查处取缔。",
      "blankText": "职业介绍机构、职业技能培训机构或者职业技能考核鉴定机构违反国家有关职业介绍、职业技能培训或者职业技能考核鉴定的规定的，由劳动保障行政部门责令改正，没收违法所得，并处______万元以上______万元以下的罚款；情节严重的，吊销许可证。\n未经劳动保障行政部门许可，从事职业介绍、职业技能培训或者职业技能考核鉴定的组织或者个人，由劳动保障行政部门、工商行政管理部门依照国家有关无照经营查处取缔的规定查处取缔。"
    },
    {
      "id": 83,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 29,
      "text": "用人单位违反《中华人民共和国工会法》，有下列行为之一的，由劳动保障行政部门责令改正：\n（一）阻挠劳动者依法参加和组织工会，或者阻挠上级工会帮助、指导劳动者筹建工会的；\n（二）无正当理由调动依法履行职责的工会工作人员的工作岗位，进行打击报复的；\n（三）劳动者因参加工会活动而被解除劳动合同的；\n（四）工会工作人员因依法履行职责被解除劳动合同的。",
      "blankText": "用人单位违反《中华人民共和国工会法》，有下列行为之一的，由劳动保障行政部门责令改正：\n（一）阻挠劳动者依法参加和组织工会，或者阻挠上级工会帮助、指导劳动者筹建工会的；\n（二）无正当理由调动依法履行职责的工会工作人员的工作岗位，进行打击报复的；\n（三）劳动者因参加工会活动而被解除劳动合同的；\n（四）工会工作人员因依法履行职责被解除劳动合同的。"
    },
    {
      "id": 84,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 30,
      "text": "有下列行为之一的，由劳动保障行政部门责令改正；对有第（一）项、第（二）项或者第（三）项规定的行为的，处2000元以上2万元以下的罚款：\n（一）无理抗拒、阻挠劳动保障行政部门依照本条例的规定实施劳动保障监察的；\n（二）不按照劳动保障行政部门的要求报送书面材料，隐瞒事实真相，出具伪证或者隐匿、转移、篡改、毁灭证据的；\n（三）经劳动保障行政部门责令改正拒不改正，或者拒不履行劳动保障行政部门的行政处理决定的；\n（四）打击报复举报人、投诉人的。\n违反前款规定，构成违反治安管理行为的，由公安机关依法给予治安管理处罚；构成犯罪的，依法追究刑事责任。",
      "blankText": "有下列行为之一的，由劳动保障行政部门责令改正；对有第（一）项、第（二）项或者第（三）项规定的行为的，处______元以上______万元以下的罚款：\n（一）无理抗拒、阻挠劳动保障行政部门依照本条例的规定实施劳动保障监察的；\n（二）不按照劳动保障行政部门的要求报送书面材料，隐瞒事实真相，出具伪证或者隐匿、转移、篡改、毁灭证据的；\n（三）经劳动保障行政部门责令改正拒不改正，或者拒不履行劳动保障行政部门的行政处理决定的；\n（四）打击报复举报人、投诉人的。\n违反前款规定，构成违反治安管理行为的，由公安机关依法给予治安管理处罚；构成犯罪的，依法追究刑事责任。"
    },
    {
      "id": 85,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 31,
      "text": "劳动保障监察员滥用职权、玩忽职守、徇私舞弊或者泄露在履行职责过程中知悉的商业秘密的，依法给予行政处分；构成犯罪的，依法追究刑事责任。\n劳动保障行政部门和劳动保障监察员违法行使职权，侵犯用人单位或者劳动者的合法权益的，依法承担赔偿责任。",
      "blankText": "劳动保障监察员滥用职权、玩忽职守、徇私舞弊或者泄露在履行职责过程中知悉的商业秘密的，依法给予行政处分；构成犯罪的，依法追究刑事责任。\n劳动保障行政部门和劳动保障监察员违法行使职权，侵犯用人单位或者劳动者的合法权益的，依法承担赔偿责任。"
    },
    {
      "id": 86,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 32,
      "text": "属于本条例规定的劳动保障监察事项，法律、其他行政法规对处罚另有规定的，从其规定。",
      "blankText": "属于本条例规定的劳动保障监察事项，法律、其他行政法规对处罚另有规定的，从其规定。"
    },
    {
      "id": 87,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 33,
      "text": "对无营业执照或者已被依法吊销营业执照，有劳动用工行为的，由劳动保障行政部门依照本条例实施劳动保障监察，并及时通报工商行政管理部门予以查处取缔。",
      "blankText": "对无营业执照或者已被依法吊销营业执照，有劳动用工行为的，由劳动保障行政部门依照本条例实施劳动保障监察，并及时通报工商行政管理部门予以查处取缔。"
    },
    {
      "id": 88,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 34,
      "text": "国家机关、事业单位、社会团体执行劳动保障法律、法规和规章的情况，由劳动保障行政部门根据其职责，依照本条例实施劳动保障监察。",
      "blankText": "国家机关、事业单位、社会团体执行劳动保障法律、法规和规章的情况，由劳动保障行政部门根据其职责，依照本条例实施劳动保障监察。"
    },
    {
      "id": 89,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 35,
      "text": "劳动安全卫生的监督检查，由卫生部门、安全生产监督管理部门、特种设备安全监督管理部门等有关部门依照有关法律、行政法规的规定执行。",
      "blankText": "劳动安全卫生的监督检查，由卫生部门、安全生产监督管理部门、特种设备安全监督管理部门等有关部门依照有关法律、行政法规的规定执行。"
    },
    {
      "id": 90,
      "category": "争议处理与监察",
      "law": "劳动保障监察条例",
      "articleNum": 36,
      "text": "本条例自2004年12月1日起施行。",
      "blankText": "本条例自______年______月______日起施行。"
    },
    {
      "id": 91,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 1,
      "text": "为了规范农民工工资支付行为，保障农民工按时足额获得工资，根据《中华人民共和国劳动法》及有关法律规定，制定本条例。",
      "blankText": "为了规范农民工工资支付行为，保障农民工按时足额获得工资，根据《中华人民共和国劳动法》及有关法律规定，制定本条例。"
    },
    {
      "id": 92,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 2,
      "text": "保障农民工工资支付，适用本条例。\n本条例所称农民工，是指为用人单位提供劳动的农村居民。\n本条例所称工资，是指农民工为用人单位提供劳动后应当获得的劳动报酬。",
      "blankText": "保障农民工工资支付，适用本条例。\n本条例所称农民工，是指为用人单位提供劳动的农村居民。\n本条例所称工资，是指农民工为用人单位提供劳动后应当获得的劳动报酬。"
    },
    {
      "id": 93,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 3,
      "text": "农民工有按时足额获得工资的权利。任何单位和个人不得拖欠农民工工资。\n农民工应当遵守劳动纪律和职业道德，执行劳动安全卫生规程，完成劳动任务。",
      "blankText": "农民工有按时足额获得工资的权利。任何单位和个人不得拖欠农民工工资。\n农民工应当遵守劳动纪律和职业道德，执行劳动安全卫生规程，完成劳动任务。"
    },
    {
      "id": 94,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 4,
      "text": "县级以上地方人民政府对本行政区域内保障农民工工资支付工作负责，建立保障农民工工资支付工作协调机制，加强监管能力建设，健全保障农民工工资支付工作目标责任制，并纳入对本级人民政府有关部门和下级人民政府进行考核和监督的内容。\n乡镇人民政府、街道办事处应当加强对拖欠农民工工资矛盾的排查和调处工作，防范和化解矛盾，及时调解纠纷。",
      "blankText": "县级以上地方人民政府对本行政区域内保障农民工工资支付工作负责，建立保障农民工工资支付工作协调机制，加强监管能力建设，健全保障农民工工资支付工作目标责任制，并纳入对本级人民政府有关部门和下级人民政府进行考核和监督的内容。\n乡镇人民政府、街道办事处应当加强对拖欠农民工工资矛盾的排查和调处工作，防范和化解矛盾，及时调解纠纷。"
    },
    {
      "id": 95,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 5,
      "text": "保障农民工工资支付，应当坚持市场主体负责、政府依法监管、社会协同监督，按照源头治理、预防为主、防治结合、标本兼治的要求，依法根治拖欠农民工工资问题。",
      "blankText": "保障农民工工资支付，应当坚持市场主体负责、政府依法监管、社会协同监督，按照源头治理、预防为主、防治结合、标本兼治的要求，依法根治拖欠农民工工资问题。"
    },
    {
      "id": 96,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 6,
      "text": "用人单位实行农民工劳动用工实名制管理，与招用的农民工书面约定或者通过依法制定的规章制度规定工资支付标准、支付时间、支付方式等内容。",
      "blankText": "用人单位实行农民工劳动用工实名制管理，与招用的农民工书面约定或者通过依法制定的规章制度规定工资支付标准、支付时间、支付方式等内容。"
    },
    {
      "id": 97,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 7,
      "text": "人力资源社会保障行政部门负责保障农民工工资支付工作的组织协调、管理指导和农民工工资支付情况的监督检查，查处有关拖欠农民工工资案件。\n住房城乡建设、交通运输、水利等相关行业工程建设主管部门按照职责履行行业监管责任，督办因违法发包、转包、违法分包、挂靠、拖欠工程款等导致的拖欠农民工工资案件。\n发展改革等部门按照职责负责政府投资项目的审批管理，依法审查政府投资项目的资金来源和筹措方式，按规定及时安排政府投资，加强社会信用体系建设，组织对拖欠农民工工资失信联合惩戒对象依法依规予以限制和惩戒。\n财政部门负责政府投资资金的预算管理，根据经批准的预算按规定及时足额拨付政府投资资金。\n公安机关负责及时受理、侦办涉嫌拒不支付劳动报酬刑事案件，依法处置因拖欠农民工工资引发的社会治安案件。\n司法行政、自然资源、人民银行、审计、国有资产管理、税务、市场监管、金融监管等部门，按照职责做好与保障农民工工资支付相关的工作。",
      "blankText": "人力资源社会保障行政部门负责保障农民工工资支付工作的组织协调、管理指导和农民工工资支付情况的监督检查，查处有关拖欠农民工工资案件。\n住房城乡建设、交通运输、水利等相关行业工程建设主管部门按照职责履行行业监管责任，督办因违法发包、转包、违法分包、挂靠、拖欠工程款等导致的拖欠农民工工资案件。\n发展改革等部门按照职责负责政府投资项目的审批管理，依法审查政府投资项目的资金来源和筹措方式，按规定及时安排政府投资，加强社会信用体系建设，组织对拖欠农民工工资失信联合惩戒对象依法依规予以限制和惩戒。\n财政部门负责政府投资资金的预算管理，根据经批准的预算按规定及时足额拨付政府投资资金。\n公安机关负责及时受理、侦办涉嫌拒不支付劳动报酬刑事案件，依法处置因拖欠农民工工资引发的社会治安案件。\n司法行政、自然资源、人民银行、审计、国有资产管理、税务、市场监管、金融监管等部门，按照职责做好与保障农民工工资支付相关的工作。"
    },
    {
      "id": 98,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 8,
      "text": "工会、共产主义青年团、妇女联合会、残疾人联合会等组织按照职责依法维护农民工获得工资的权利。",
      "blankText": "工会、共产主义青年团、妇女联合会、残疾人联合会等组织按照职责依法维护农民工获得工资的权利。"
    },
    {
      "id": 99,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 9,
      "text": "新闻媒体应当开展保障农民工工资支付法律法规政策的公益宣传和先进典型的报道，依法加强对拖欠农民工工资违法行为的舆论监督，引导用人单位增强依法用工、按时足额支付工资的法律意识，引导农民工依法维权。",
      "blankText": "新闻媒体应当开展保障农民工工资支付法律法规政策的公益宣传和先进典型的报道，依法加强对拖欠农民工工资违法行为的舆论监督，引导用人单位增强依法用工、按时足额支付工资的法律意识，引导农民工依法维权。"
    },
    {
      "id": 100,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 10,
      "text": "被拖欠工资的农民工有权依法投诉，或者申请劳动争议调解仲裁和提起诉讼。\n任何单位和个人对拖欠农民工工资的行为，有权向人力资源社会保障行政部门或者其他有关部门举报。\n人力资源社会保障行政部门和其他有关部门应当公开举报投诉电话、网站等渠道，依法接受对拖欠农民工工资行为的举报、投诉。对于举报、投诉的处理实行首问负责制，属于本部门受理的，应当依法及时处理；不属于本部门受理的，应当及时转送相关部门，相关部门应当依法及时处理，并将处理结果告知举报、投诉人。",
      "blankText": "被拖欠工资的农民工有权依法投诉，或者申请劳动争议调解仲裁和提起诉讼。\n任何单位和个人对拖欠农民工工资的行为，有权向人力资源社会保障行政部门或者其他有关部门举报。\n人力资源社会保障行政部门和其他有关部门应当公开举报投诉电话、网站等渠道，依法接受对拖欠农民工工资行为的举报、投诉。对于举报、投诉的处理实行首问负责制，属于本部门受理的，应当依法及时处理；不属于本部门受理的，应当及时转送相关部门，相关部门应当依法及时处理，并将处理结果告知举报、投诉人。"
    },
    {
      "id": 101,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 11,
      "text": "农民工工资应当以货币形式，通过银行转账或者现金支付给农民工本人，不得以实物或者有价证券等其他形式替代。",
      "blankText": "农民工工资应当以货币形式，通过银行转账或者现金支付给农民工本人，不得以实物或者有价证券等其他形式替代。"
    },
    {
      "id": 102,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 12,
      "text": "用人单位应当按照与农民工书面约定或者依法制定的规章制度规定的工资支付周期和具体支付日期足额支付工资。",
      "blankText": "用人单位应当按照与农民工书面约定或者依法制定的规章制度规定的工资支付周期和具体支付日期足额支付工资。"
    },
    {
      "id": 103,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 13,
      "text": "实行月、周、日、小时工资制的，按照月、周、日、小时为周期支付工资；实行计件工资制的，工资支付周期由双方依法约定。",
      "blankText": "实行月、周、日、小时工资制的，按照月、周、日、小时为周期支付工资；实行计件工资制的，工资支付周期由双方依法约定。"
    },
    {
      "id": 104,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 14,
      "text": "用人单位与农民工书面约定或者依法制定的规章制度规定的具体支付日期，可以在农民工提供劳动的当期或者次期。具体支付日期遇法定节假日或者休息日的，应当在法定节假日或者休息日前支付。\n用人单位因不可抗力未能在支付日期支付工资的，应当在不可抗力消除后及时支付。",
      "blankText": "用人单位与农民工书面约定或者依法制定的规章制度规定的具体支付日期，可以在农民工提供劳动的当期或者次期。具体支付日期遇法定节假日或者休息日的，应当在法定节假日或者休息日前支付。\n用人单位因不可抗力未能在支付日期支付工资的，应当在不可抗力消除后及时支付。"
    },
    {
      "id": 105,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 15,
      "text": "用人单位应当按照工资支付周期编制书面工资支付台账，并至少保存3年。\n书面工资支付台账应当包括用人单位名称，支付周期，支付日期，支付对象姓名、身份证号码、联系方式，工作时间，应发工资项目及数额，代扣、代缴、扣除项目和数额，实发工资数额，银行代发工资凭证或者农民工签字等内容。\n用人单位向农民工支付工资时，应当提供农民工本人的工资清单。",
      "blankText": "用人单位应当按照工资支付周期编制书面工资支付台账，并至少保存______年。\n书面工资支付台账应当包括用人单位名称，支付周期，支付日期，支付对象姓名、身份证号码、联系方式，工作时间，应发工资项目及数额，代扣、代缴、扣除项目和数额，实发工资数额，银行代发工资凭证或者农民工签字等内容。\n用人单位向农民工支付工资时，应当提供农民工本人的工资清单。"
    },
    {
      "id": 106,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 16,
      "text": "用人单位拖欠农民工工资的，应当依法予以清偿。",
      "blankText": "用人单位拖欠农民工工资的，应当依法予以清偿。"
    },
    {
      "id": 107,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 17,
      "text": "不具备合法经营资格的单位招用农民工，农民工已经付出劳动而未获得工资的，依照有关法律规定执行。",
      "blankText": "不具备合法经营资格的单位招用农民工，农民工已经付出劳动而未获得工资的，依照有关法律规定执行。"
    },
    {
      "id": 108,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 18,
      "text": "用工单位使用个人、不具备合法经营资格的单位或者未依法取得劳务派遣许可证的单位派遣的农民工，拖欠农民工工资的，由用工单位清偿，并可以依法进行追偿。",
      "blankText": "用工单位使用个人、不具备合法经营资格的单位或者未依法取得劳务派遣许可证的单位派遣的农民工，拖欠农民工工资的，由用工单位清偿，并可以依法进行追偿。"
    },
    {
      "id": 109,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 19,
      "text": "用人单位将工作任务发包给个人或者不具备合法经营资格的单位，导致拖欠所招用农民工工资的，依照有关法律规定执行。\n用人单位允许个人、不具备合法经营资格或者未取得相应资质的单位以用人单位的名义对外经营，导致拖欠所招用农民工工资的，由用人单位清偿，并可以依法进行追偿。",
      "blankText": "用人单位将工作任务发包给个人或者不具备合法经营资格的单位，导致拖欠所招用农民工工资的，依照有关法律规定执行。\n用人单位允许个人、不具备合法经营资格或者未取得相应资质的单位以用人单位的名义对外经营，导致拖欠所招用农民工工资的，由用人单位清偿，并可以依法进行追偿。"
    },
    {
      "id": 110,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 20,
      "text": "合伙企业、个人独资企业、个体经济组织等用人单位拖欠农民工工资的，应当依法予以清偿；不清偿的，由出资人依法清偿。",
      "blankText": "合伙企业、个人独资企业、个体经济组织等用人单位拖欠农民工工资的，应当依法予以清偿；不清偿的，由出资人依法清偿。"
    },
    {
      "id": 111,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 21,
      "text": "用人单位合并或者分立时，应当在实施合并或者分立前依法清偿拖欠的农民工工资；经与农民工书面协商一致的，可以由合并或者分立后承继其权利和义务的用人单位清偿。",
      "blankText": "用人单位合并或者分立时，应当在实施合并或者分立前依法清偿拖欠的农民工工资；经与农民工书面协商一致的，可以由合并或者分立后承继其权利和义务的用人单位清偿。"
    },
    {
      "id": 112,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 22,
      "text": "用人单位被依法吊销营业执照或者登记证书、被责令关闭、被撤销或者依法解散的，应当在申请注销登记前依法清偿拖欠的农民工工资。\n未依据前款规定清偿农民工工资的用人单位实际控制人、主要出资人，在拖欠农民工工资和拖欠的工程款的清偿方面承担连带责任。",
      "blankText": "用人单位被依法吊销营业执照或者登记证书、被责令关闭、被撤销或者依法解散的，应当在申请注销登记前依法清偿拖欠的农民工工资。\n未依据前款规定清偿农民工工资的用人单位实际控制人、主要出资人，在拖欠农民工工资和拖欠的工程款的清偿方面承担连带责任。"
    },
    {
      "id": 113,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 23,
      "text": "建设单位应当有满足施工所需要的资金安排。没有满足施工所需要的资金安排的，工程建设项目不得开工建设；依法需要办理施工许可证的，相关行业工程建设主管部门不予颁发施工许可证。\n政府投资项目所需资金，应当按照国家有关规定落实到位，不得由施工单位垫资建设。",
      "blankText": "建设单位应当有满足施工所需要的资金安排。没有满足施工所需要的资金安排的，工程建设项目不得开工建设；依法需要办理施工许可证的，相关行业工程建设主管部门不予颁发施工许可证。\n政府投资项目所需资金，应当按照国家有关规定落实到位，不得由施工单位垫资建设。"
    },
    {
      "id": 114,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 24,
      "text": "建设单位应当向施工单位提供工程款支付担保。\n建设单位与施工总承包单位依法订立书面工程施工合同，应当约定工程款计量周期、工程款进度结算办法以及人工费用拨付周期，并按照保障农民工工资按时足额支付的要求约定人工费用。人工费用拨付周期不得超过1个月。\n建设单位与施工总承包单位应当将工程施工合同保存备查。",
      "blankText": "建设单位应当向施工单位提供工程款支付担保。\n建设单位与施工总承包单位依法订立书面工程施工合同，应当约定工程款计量周期、工程款进度结算办法以及人工费用拨付周期，并按照保障农民工工资按时足额支付的要求约定人工费用。人工费用拨付周期不得超过______个月。\n建设单位与施工总承包单位应当将工程施工合同保存备查。"
    },
    {
      "id": 115,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 25,
      "text": "施工总承包单位与分包单位依法订立书面分包合同，应当约定工程款计量周期、工程款进度结算办法。",
      "blankText": "施工总承包单位与分包单位依法订立书面分包合同，应当约定工程款计量周期、工程款进度结算办法。"
    },
    {
      "id": 116,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 26,
      "text": "施工总承包单位应当按照有关规定开设农民工工资专用账户，专项用于支付该工程建设项目农民工工资。\n开设、使用农民工工资专用账户有关资料应当由施工总承包单位妥善保存备查。",
      "blankText": "施工总承包单位应当按照有关规定开设农民工工资专用账户，专项用于支付该工程建设项目农民工工资。\n开设、使用农民工工资专用账户有关资料应当由施工总承包单位妥善保存备查。"
    },
    {
      "id": 117,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 27,
      "text": "金融机构应当优化农民工工资专用账户开设服务流程，做好农民工工资专用账户的日常管理工作；发现资金未按约定拨付等情况的，及时通知施工总承包单位，由施工总承包单位报告人力资源社会保障行政部门和相关行业工程建设主管部门，并纳入欠薪预警系统。\n工程完工且未拖欠农民工工资的，施工总承包单位公示30日后，可以申请注销农民工工资专用账户，账户内余额归施工总承包单位所有。",
      "blankText": "金融机构应当优化农民工工资专用账户开设服务流程，做好农民工工资专用账户的日常管理工作；发现资金未按约定拨付等情况的，及时通知施工总承包单位，由施工总承包单位报告人力资源社会保障行政部门和相关行业工程建设主管部门，并纳入欠薪预警系统。\n工程完工且未拖欠农民工工资的，施工总承包单位公示______日后，可以申请注销农民工工资专用账户，账户内余额归施工总承包单位所有。"
    },
    {
      "id": 118,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 28,
      "text": "施工总承包单位或者分包单位应当依法与所招用的农民工订立劳动合同并进行用工实名登记，具备条件的行业应当通过相应的管理服务信息平台进行用工实名登记、管理。未与施工总承包单位或者分包单位订立劳动合同并进行用工实名登记的人员，不得进入项目现场施工。\n施工总承包单位应当在工程项目部配备劳资专管员，对分包单位劳动用工实施监督管理，掌握施工现场用工、考勤、工资支付等情况，审核分包单位编制的农民工工资支付表，分包单位应当予以配合。\n施工总承包单位、分包单位应当建立用工管理台账，并保存至工程完工且工资全部结清后至少3年。",
      "blankText": "施工总承包单位或者分包单位应当依法与所招用的农民工订立劳动合同并进行用工实名登记，具备条件的行业应当通过相应的管理服务信息平台进行用工实名登记、管理。未与施工总承包单位或者分包单位订立劳动合同并进行用工实名登记的人员，不得进入项目现场施工。\n施工总承包单位应当在工程项目部配备劳资专管员，对分包单位劳动用工实施监督管理，掌握施工现场用工、考勤、工资支付等情况，审核分包单位编制的农民工工资支付表，分包单位应当予以配合。\n施工总承包单位、分包单位应当建立用工管理台账，并保存至工程完工且工资全部结清后至少______年。"
    },
    {
      "id": 119,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 29,
      "text": "建设单位应当按照合同约定及时拨付工程款，并将人工费用及时足额拨付至农民工工资专用账户，加强对施工总承包单位按时足额支付农民工工资的监督。\n因建设单位未按照合同约定及时拨付工程款导致农民工工资拖欠的，建设单位应当以未结清的工程款为限先行垫付被拖欠的农民工工资。",
      "blankText": "建设单位应当按照合同约定及时拨付工程款，并将人工费用及时足额拨付至农民工工资专用账户，加强对施工总承包单位按时足额支付农民工工资的监督。\n因建设单位未按照合同约定及时拨付工程款导致农民工工资拖欠的，建设单位应当以未结清的工程款为限先行垫付被拖欠的农民工工资。"
    },
    {
      "id": 120,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 30,
      "text": "分包单位对所招用农民工的实名制管理和工资支付负直接责任。\n施工总承包单位对分包单位劳动用工和工资发放等情况进行监督。\n分包单位拖欠农民工工资的，由施工总承包单位先行清偿，再依法进行追偿。\n工程建设项目转包，拖欠农民工工资的，由施工总承包单位先行清偿，再依法进行追偿。",
      "blankText": "分包单位对所招用农民工的实名制管理和工资支付负直接责任。\n施工总承包单位对分包单位劳动用工和工资发放等情况进行监督。\n分包单位拖欠农民工工资的，由施工总承包单位先行清偿，再依法进行追偿。\n工程建设项目转包，拖欠农民工工资的，由施工总承包单位先行清偿，再依法进行追偿。"
    },
    {
      "id": 121,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 31,
      "text": "工程建设领域推行分包单位农民工工资委托施工总承包单位代发制度。\n分包单位应当按月考核农民工工作量并编制工资支付表，经农民工本人签字确认后，与当月工程进度等情况一并交施工总承包单位。\n施工总承包单位根据分包单位编制的工资支付表，通过农民工工资专用账户直接将工资支付到农民工本人的银行账户，并向分包单位提供代发工资凭证。\n用于支付农民工工资的银行账户所绑定的农民工本人社会保障卡或者银行卡，用人单位或者其他人员不得以任何理由扣押或者变相扣押。",
      "blankText": "工程建设领域推行分包单位农民工工资委托施工总承包单位代发制度。\n分包单位应当按月考核农民工工作量并编制工资支付表，经农民工本人签字确认后，与当月工程进度等情况一并交施工总承包单位。\n施工总承包单位根据分包单位编制的工资支付表，通过农民工工资专用账户直接将工资支付到农民工本人的银行账户，并向分包单位提供代发工资凭证。\n用于支付农民工工资的银行账户所绑定的农民工本人社会保障卡或者银行卡，用人单位或者其他人员不得以任何理由扣押或者变相扣押。"
    },
    {
      "id": 122,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 32,
      "text": "施工总承包单位应当按照有关规定存储工资保证金，专项用于支付为所承包工程提供劳动的农民工被拖欠的工资。\n工资保证金实行差异化存储办法，对一定时期内未发生工资拖欠的单位实行减免措施，对发生工资拖欠的单位适当提高存储比例。工资保证金可以用金融机构保函替代。\n工资保证金的存储比例、存储形式、减免措施等具体办法，由国务院人力资源社会保障行政部门会同有关部门制定。",
      "blankText": "施工总承包单位应当按照有关规定存储工资保证金，专项用于支付为所承包工程提供劳动的农民工被拖欠的工资。\n工资保证金实行差异化存储办法，对一定时期内未发生工资拖欠的单位实行减免措施，对发生工资拖欠的单位适当提高存储比例。工资保证金可以用金融机构保函替代。\n工资保证金的存储比例、存储形式、减免措施等具体办法，由国务院人力资源社会保障行政部门会同有关部门制定。"
    },
    {
      "id": 123,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 33,
      "text": "除法律另有规定外，农民工工资专用账户资金和工资保证金不得因支付为本项目提供劳动的农民工工资之外的原因被查封、冻结或者划拨。",
      "blankText": "除法律另有规定外，农民工工资专用账户资金和工资保证金不得因支付为本项目提供劳动的农民工工资之外的原因被查封、冻结或者划拨。"
    },
    {
      "id": 124,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 34,
      "text": "施工总承包单位应当在施工现场醒目位置设立维权信息告示牌，明示下列事项：\n（一）建设单位、施工总承包单位及所在项目部、分包单位、相关行业工程建设主管部门、劳资专管员等基本信息；\n（二）当地最低工资标准、工资支付日期等基本信息；\n（三）相关行业工程建设主管部门和劳动保障监察投诉举报电话、劳动争议调解仲裁申请渠道、法律援助申请渠道、公共法律服务热线等信息。",
      "blankText": "施工总承包单位应当在施工现场醒目位置设立维权信息告示牌，明示下列事项：\n（一）建设单位、施工总承包单位及所在项目部、分包单位、相关行业工程建设主管部门、劳资专管员等基本信息；\n（二）当地最低工资标准、工资支付日期等基本信息；\n（三）相关行业工程建设主管部门和劳动保障监察投诉举报电话、劳动争议调解仲裁申请渠道、法律援助申请渠道、公共法律服务热线等信息。"
    },
    {
      "id": 125,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 35,
      "text": "建设单位与施工总承包单位或者承包单位与分包单位因工程数量、质量、造价等产生争议的，建设单位不得因争议不按照本条例第二十四条的规定拨付工程款中的人工费用，施工总承包单位也不得因争议不按照规定代发工资。",
      "blankText": "建设单位与施工总承包单位或者承包单位与分包单位因工程数量、质量、造价等产生争议的，建设单位不得因争议不按照本条例第二十四条的规定拨付工程款中的人工费用，施工总承包单位也不得因争议不按照规定代发工资。"
    },
    {
      "id": 126,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 36,
      "text": "建设单位或者施工总承包单位将建设工程发包或者分包给个人或者不具备合法经营资格的单位，导致拖欠农民工工资的，由建设单位或者施工总承包单位清偿。\n施工单位允许其他单位和个人以施工单位的名义对外承揽建设工程，导致拖欠农民工工资的，由施工单位清偿。",
      "blankText": "建设单位或者施工总承包单位将建设工程发包或者分包给个人或者不具备合法经营资格的单位，导致拖欠农民工工资的，由建设单位或者施工总承包单位清偿。\n施工单位允许其他单位和个人以施工单位的名义对外承揽建设工程，导致拖欠农民工工资的，由施工单位清偿。"
    },
    {
      "id": 127,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 37,
      "text": "工程建设项目违反国土空间规划、工程建设等法律法规，导致拖欠农民工工资的，由建设单位清偿。",
      "blankText": "工程建设项目违反国土空间规划、工程建设等法律法规，导致拖欠农民工工资的，由建设单位清偿。"
    },
    {
      "id": 128,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 38,
      "text": "县级以上地方人民政府应当建立农民工工资支付监控预警平台，实现人力资源社会保障、发展改革、司法行政、财政、住房城乡建设、交通运输、水利等部门的工程项目审批、资金落实、施工许可、劳动用工、工资支付等信息及时共享。\n人力资源社会保障行政部门根据水电燃气供应、物业管理、信贷、税收等反映企业生产经营相关指标的变化情况，及时监控和预警工资支付隐患并做好调查核实，科学评估欠薪风险，依法防范、化解欠薪风险。",
      "blankText": "县级以上地方人民政府应当建立农民工工资支付监控预警平台，实现人力资源社会保障、发展改革、司法行政、财政、住房城乡建设、交通运输、水利等部门的工程项目审批、资金落实、施工许可、劳动用工、工资支付等信息及时共享。\n人力资源社会保障行政部门根据水电燃气供应、物业管理、信贷、税收等反映企业生产经营相关指标的变化情况，及时监控和预警工资支付隐患并做好调查核实，科学评估欠薪风险，依法防范、化解欠薪风险。"
    },
    {
      "id": 129,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 39,
      "text": "人力资源社会保障行政部门、相关行业工程建设主管部门和其他有关部门应当按照职责，加强对用人单位与农民工签订劳动合同、工资支付以及工程建设项目实行农民工实名制管理、农民工工资专用账户管理、施工总承包单位代发工资、工资保证金存储、维权信息公示等情况的监督检查，预防和减少拖欠农民工工资行为的发生。",
      "blankText": "人力资源社会保障行政部门、相关行业工程建设主管部门和其他有关部门应当按照职责，加强对用人单位与农民工签订劳动合同、工资支付以及工程建设项目实行农民工实名制管理、农民工工资专用账户管理、施工总承包单位代发工资、工资保证金存储、维权信息公示等情况的监督检查，预防和减少拖欠农民工工资行为的发生。"
    },
    {
      "id": 130,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 40,
      "text": "人力资源社会保障行政部门在查处拖欠农民工工资案件时，需要依法查询相关单位金融账户和相关当事人拥有房产、车辆等情况的，应当经设区的市级以上地方人民政府人力资源社会保障行政部门负责人批准，有关金融机构和登记部门应当予以配合。",
      "blankText": "人力资源社会保障行政部门在查处拖欠农民工工资案件时，需要依法查询相关单位金融账户和相关当事人拥有房产、车辆等情况的，应当经设区的市级以上地方人民政府人力资源社会保障行政部门负责人批准，有关金融机构和登记部门应当予以配合。"
    },
    {
      "id": 131,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 41,
      "text": "人力资源社会保障行政部门在查处拖欠农民工工资案件时，发生用人单位拒不配合调查、清偿责任主体及相关当事人无法联系等情形的，可以请求公安机关和其他有关部门协助处理。",
      "blankText": "人力资源社会保障行政部门在查处拖欠农民工工资案件时，发生用人单位拒不配合调查、清偿责任主体及相关当事人无法联系等情形的，可以请求公安机关和其他有关部门协助处理。"
    },
    {
      "id": 132,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 42,
      "text": "人力资源社会保障行政部门发现拖欠农民工工资的违法行为涉嫌构成拒不支付劳动报酬罪的，应当按照有关规定及时移送公安机关审查并作出决定。",
      "blankText": "人力资源社会保障行政部门发现拖欠农民工工资的违法行为涉嫌构成拒不支付劳动报酬罪的，应当按照有关规定及时移送公安机关审查并作出决定。"
    },
    {
      "id": 133,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 43,
      "text": "相关行业工程建设主管部门应当依法规范本领域建设市场秩序，对违法发包、转包、违法分包、挂靠等行为进行查处，并对导致拖欠农民工工资的违法行为及时予以制止、纠正。",
      "blankText": "相关行业工程建设主管部门应当依法规范本领域建设市场秩序，对违法发包、转包、违法分包、挂靠等行为进行查处，并对导致拖欠农民工工资的违法行为及时予以制止、纠正。"
    },
    {
      "id": 134,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 44,
      "text": "财政部门、审计机关和相关行业工程建设主管部门按照职责，依法对政府投资项目建设单位按照工程施工合同约定向农民工工资专用账户拨付资金情况进行监督。",
      "blankText": "财政部门、审计机关和相关行业工程建设主管部门按照职责，依法对政府投资项目建设单位按照工程施工合同约定向农民工工资专用账户拨付资金情况进行监督。"
    },
    {
      "id": 135,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 45,
      "text": "司法行政部门和法律援助机构应当将农民工列为法律援助的重点对象，并依法为请求支付工资的农民工提供便捷的法律援助。\n公共法律服务相关机构应当积极参与相关诉讼、咨询、调解等活动，帮助解决拖欠农民工工资问题。",
      "blankText": "司法行政部门和法律援助机构应当将农民工列为法律援助的重点对象，并依法为请求支付工资的农民工提供便捷的法律援助。\n公共法律服务相关机构应当积极参与相关诉讼、咨询、调解等活动，帮助解决拖欠农民工工资问题。"
    },
    {
      "id": 136,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 46,
      "text": "人力资源社会保障行政部门、相关行业工程建设主管部门和其他有关部门应当按照"谁执法谁普法"普法责任制的要求，通过以案释法等多种形式，加大对保障农民工工资支付相关法律法规的普及宣传。",
      "blankText": "人力资源社会保障行政部门、相关行业工程建设主管部门和其他有关部门应当按照"谁执法谁普法"普法责任制的要求，通过以案释法等多种形式，加大对保障农民工工资支付相关法律法规的普及宣传。"
    },
    {
      "id": 137,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 47,
      "text": "人力资源社会保障行政部门应当建立用人单位及相关责任人劳动保障守法诚信档案，对用人单位开展守法诚信等级评价。\n用人单位有严重拖欠农民工工资违法行为的，由人力资源社会保障行政部门向社会公布，必要时可以通过召开新闻发布会等形式向媒体公开曝光。",
      "blankText": "人力资源社会保障行政部门应当建立用人单位及相关责任人劳动保障守法诚信档案，对用人单位开展守法诚信等级评价。\n用人单位有严重拖欠农民工工资违法行为的，由人力资源社会保障行政部门向社会公布，必要时可以通过召开新闻发布会等形式向媒体公开曝光。"
    },
    {
      "id": 138,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 48,
      "text": "用人单位拖欠农民工工资，情节严重或者造成严重不良社会影响的，有关部门应当将该用人单位及其法定代表人或者主要负责人、直接负责的主管人员和其他直接责任人员列入拖欠农民工工资失信联合惩戒对象名单，在政府资金支持、政府采购、招投标、融资贷款、市场准入、税收优惠、评优评先、交通出行等方面依法依规予以限制。\n拖欠农民工工资需要列入失信联合惩戒名单的具体情形，由国务院人力资源社会保障行政部门规定。",
      "blankText": "用人单位拖欠农民工工资，情节严重或者造成严重不良社会影响的，有关部门应当将该用人单位及其法定代表人或者主要负责人、直接负责的主管人员和其他直接责任人员列入拖欠农民工工资失信联合惩戒对象名单，在政府资金支持、政府采购、招投标、融资贷款、市场准入、税收优惠、评优评先、交通出行等方面依法依规予以限制。\n拖欠农民工工资需要列入失信联合惩戒名单的具体情形，由国务院人力资源社会保障行政部门规定。"
    },
    {
      "id": 139,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 49,
      "text": "建设单位未依法提供工程款支付担保或者政府投资项目拖欠工程款，导致拖欠农民工工资的，县级以上地方人民政府应当限制其新建项目，并记入信用记录，纳入国家信用信息系统进行公示。",
      "blankText": "建设单位未依法提供工程款支付担保或者政府投资项目拖欠工程款，导致拖欠农民工工资的，县级以上地方人民政府应当限制其新建项目，并记入信用记录，纳入国家信用信息系统进行公示。"
    },
    {
      "id": 140,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 50,
      "text": "农民工与用人单位就拖欠工资存在争议，用人单位应当提供依法由其保存的劳动合同、职工名册、工资支付台账和清单等材料；不提供的，依法承担不利后果。",
      "blankText": "农民工与用人单位就拖欠工资存在争议，用人单位应当提供依法由其保存的劳动合同、职工名册、工资支付台账和清单等材料；不提供的，依法承担不利后果。"
    },
    {
      "id": 141,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 51,
      "text": "工会依法维护农民工工资权益，对用人单位工资支付情况进行监督；发现拖欠农民工工资的，可以要求用人单位改正，拒不改正的，可以请求人力资源社会保障行政部门和其他有关部门依法处理。",
      "blankText": "工会依法维护农民工工资权益，对用人单位工资支付情况进行监督；发现拖欠农民工工资的，可以要求用人单位改正，拒不改正的，可以请求人力资源社会保障行政部门和其他有关部门依法处理。"
    },
    {
      "id": 142,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 52,
      "text": "单位或者个人编造虚假事实或者采取非法手段讨要农民工工资，或者以拖欠农民工工资为名讨要工程款的，依法予以处理。",
      "blankText": "单位或者个人编造虚假事实或者采取非法手段讨要农民工工资，或者以拖欠农民工工资为名讨要工程款的，依法予以处理。"
    },
    {
      "id": 143,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 53,
      "text": "违反本条例规定拖欠农民工工资的，依照有关法律规定执行。",
      "blankText": "违反本条例规定拖欠农民工工资的，依照有关法律规定执行。"
    },
    {
      "id": 144,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 54,
      "text": "有下列情形之一的，由人力资源社会保障行政部门责令限期改正；逾期不改正的，对单位处2万元以上5万元以下的罚款，对法定代表人或者主要负责人、直接负责的主管人员和其他直接责任人员处1万元以上3万元以下的罚款：\n（一）以实物、有价证券等形式代替货币支付农民工工资；\n（二）未编制工资支付台账并依法保存，或者未向农民工提供工资清单；\n（三）扣押或者变相扣押用于支付农民工工资的银行账户所绑定的农民工本人社会保障卡或者银行卡。",
      "blankText": "有下列情形之一的，由人力资源社会保障行政部门责令限期改正；逾期不改正的，对单位处______万元以上______万元以下的罚款，对法定代表人或者主要负责人、直接负责的主管人员和其他直接责任人员处______万元以上______万元以下的罚款：\n（一）以实物、有价证券等形式代替货币支付农民工工资；\n（二）未编制工资支付台账并依法保存，或者未向农民工提供工资清单；\n（三）扣押或者变相扣押用于支付农民工工资的银行账户所绑定的农民工本人社会保障卡或者银行卡。"
    },
    {
      "id": 145,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 55,
      "text": "有下列情形之一的，由人力资源社会保障行政部门、相关行业工程建设主管部门按照职责责令限期改正；逾期不改正的，责令项目停工，并处5万元以上10万元以下的罚款；情节严重的，给予施工单位限制承接新工程、降低资质等级、吊销资质证书等处罚：\n（一）施工总承包单位未按规定开设或者使用农民工工资专用账户；\n（二）施工总承包单位未按规定存储工资保证金或者未提供金融机构保函；\n（三）施工总承包单位、分包单位未实行劳动用工实名制管理。",
      "blankText": "有下列情形之一的，由人力资源社会保障行政部门、相关行业工程建设主管部门按照职责责令限期改正；逾期不改正的，责令项目停工，并处______万元以上______万元以下的罚款；情节严重的，给予施工单位限制承接新工程、降低资质等级、吊销资质证书等处罚：\n（一）施工总承包单位未按规定开设或者使用农民工工资专用账户；\n（二）施工总承包单位未按规定存储工资保证金或者未提供金融机构保函；\n（三）施工总承包单位、分包单位未实行劳动用工实名制管理。"
    },
    {
      "id": 146,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 56,
      "text": "有下列情形之一的，由人力资源社会保障行政部门、相关行业工程建设主管部门按照职责责令限期改正；逾期不改正的，处5万元以上10万元以下的罚款：\n（一）分包单位未按月考核农民工工作量、编制工资支付表并经农民工本人签字确认；\n（二）施工总承包单位未对分包单位劳动用工实施监督管理；\n（三）分包单位未配合施工总承包单位对其劳动用工进行监督管理；\n（四）施工总承包单位未实行施工现场维权信息公示制度。",
      "blankText": "有下列情形之一的，由人力资源社会保障行政部门、相关行业工程建设主管部门按照职责责令限期改正；逾期不改正的，处______万元以上______万元以下的罚款：\n（一）分包单位未按月考核农民工工作量、编制工资支付表并经农民工本人签字确认；\n（二）施工总承包单位未对分包单位劳动用工实施监督管理；\n（三）分包单位未配合施工总承包单位对其劳动用工进行监督管理；\n（四）施工总承包单位未实行施工现场维权信息公示制度。"
    },
    {
      "id": 147,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 57,
      "text": "有下列情形之一的，由人力资源社会保障行政部门、相关行业工程建设主管部门按照职责责令限期改正；逾期不改正的，责令项目停工，并处5万元以上10万元以下的罚款：\n（一）建设单位未依法提供工程款支付担保；\n（二）建设单位未按约定及时足额向农民工工资专用账户拨付工程款中的人工费用；\n（三）建设单位或者施工总承包单位拒不提供或者无法提供工程施工合同、农民工工资专用账户有关资料。",
      "blankText": "有下列情形之一的，由人力资源社会保障行政部门、相关行业工程建设主管部门按照职责责令限期改正；逾期不改正的，责令项目停工，并处______万元以上______万元以下的罚款：\n（一）建设单位未依法提供工程款支付担保；\n（二）建设单位未按约定及时足额向农民工工资专用账户拨付工程款中的人工费用；\n（三）建设单位或者施工总承包单位拒不提供或者无法提供工程施工合同、农民工工资专用账户有关资料。"
    },
    {
      "id": 148,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 58,
      "text": "不依法配合人力资源社会保障行政部门查询相关单位金融账户的，由金融监管部门责令改正；拒不改正的，处2万元以上5万元以下的罚款。",
      "blankText": "不依法配合人力资源社会保障行政部门查询相关单位金融账户的，由金融监管部门责令改正；拒不改正的，处______万元以上______万元以下的罚款。"
    },
    {
      "id": 149,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 59,
      "text": "政府投资项目政府投资资金不到位拖欠农民工工资的，由人力资源社会保障行政部门报本级人民政府批准后，责令限期足额拨付所拖欠的资金；逾期不拨付的，由上一级人民政府人力资源社会保障行政部门约谈直接责任部门和相关监管部门负责人，必要时进行通报，约谈地方人民政府负责人。情节严重的，对地方人民政府及其有关部门负责人、直接负责的主管人员和其他直接责任人员依法依规给予处分。",
      "blankText": "政府投资项目政府投资资金不到位拖欠农民工工资的，由人力资源社会保障行政部门报本级人民政府批准后，责令限期足额拨付所拖欠的资金；逾期不拨付的，由上一级人民政府人力资源社会保障行政部门约谈直接责任部门和相关监管部门负责人，必要时进行通报，约谈地方人民政府负责人。情节严重的，对地方人民政府及其有关部门负责人、直接负责的主管人员和其他直接责任人员依法依规给予处分。"
    },
    {
      "id": 150,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 60,
      "text": "政府投资项目建设单位未经批准立项建设、擅自扩大建设规模、擅自增加投资概算、未及时拨付工程款等导致拖欠农民工工资的，除依法承担责任外，由人力资源社会保障行政部门、其他有关部门按照职责约谈建设单位负责人，并作为其业绩考核、薪酬分配、评优评先、职务晋升等的重要依据。",
      "blankText": "政府投资项目建设单位未经批准立项建设、擅自扩大建设规模、擅自增加投资概算、未及时拨付工程款等导致拖欠农民工工资的，除依法承担责任外，由人力资源社会保障行政部门、其他有关部门按照职责约谈建设单位负责人，并作为其业绩考核、薪酬分配、评优评先、职务晋升等的重要依据。"
    },
    {
      "id": 151,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 61,
      "text": "对于建设资金不到位、违法违规开工建设的社会投资工程建设项目拖欠农民工工资的，由人力资源社会保障行政部门、其他有关部门按照职责依法对建设单位处工程款额5%—10%的罚款，并对建设单位负责人依法依规给予处分。",
      "blankText": "对于建设资金不到位、违法违规开工建设的社会投资工程建设项目拖欠农民工工资的，由人力资源社会保障行政部门、其他有关部门按照职责依法对建设单位处工程款额______%—______%的罚款，并对建设单位负责人依法依规给予处分。"
    },
    {
      "id": 152,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 62,
      "text": "县级以上地方人民政府人力资源社会保障、发展改革、财政、公安等部门和相关行业工程建设主管部门的工作人员，在履行农民工工资支付监督管理职责过程中滥用职权、玩忽职守、徇私舞弊的，依法依规给予处分；构成犯罪的，依法追究刑事责任。",
      "blankText": "县级以上地方人民政府人力资源社会保障、发展改革、财政、公安等部门和相关行业工程建设主管部门的工作人员，在履行农民工工资支付监督管理职责过程中滥用职权、玩忽职守、徇私舞弊的，依法依规给予处分；构成犯罪的，依法追究刑事责任。"
    },
    {
      "id": 153,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 63,
      "text": "用人单位一时难以支付拖欠的农民工工资或者拖欠农民工工资逃匿的，县级以上地方人民政府可以动用应急周转金，先行垫付用人单位拖欠的农民工部分工资或者基本生活费。对已经垫付的应急周转金，应当依法向拖欠农民工工资的用人单位进行追偿。",
      "blankText": "用人单位一时难以支付拖欠的农民工工资或者拖欠农民工工资逃匿的，县级以上地方人民政府可以动用应急周转金，先行垫付用人单位拖欠的农民工部分工资或者基本生活费。对已经垫付的应急周转金，应当依法向拖欠农民工工资的用人单位进行追偿。"
    },
    {
      "id": 154,
      "category": "争议处理与监察",
      "law": "保障农民工工资支付条例",
      "articleNum": 64,
      "text": "本条例自2020年5月1日起施行。",
      "blankText": "本条例自______年______月______日起施行。"
    }
];