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
