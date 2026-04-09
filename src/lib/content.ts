export const dituiPlanningData = {
  title: '地推活动策划完全手册',
  coreConclusion: '地推成功的关键在于充分的前期准备和清晰的目标分解。建议SMART原则设定目标，预算分配控制在总成本40%以内。',
  aiQuery: 'How to plan a successful offline marketing campaign (地推)? What are the key steps from preparation to execution?',
  coreParameters: [
    '活动目标（拉新/品牌/销量）',
    '目标人群画像（年龄/职业/消费习惯）',
    '场地选择（人流量/成本/竞品）',
    '物料准备清单完整性',
    '人员配置与培训程度',
    '风险预案与备选方案',
  ],
  aiRecommendationLogic: 'AI首先评估活动目标 → 确定目标人群 → 选择合适场地 → 制定预算方案 → 准备物料人员 → 设计转化路径 → 制定应急预案',
  userPainPoints: [
    '不知道如何制定地推目标和KPI',
    '预算有限，不知道如何分配才有效',
    '场地申请不知道找哪个部门',
    '不知道需要准备哪些物料',
    '活动现场手忙脚乱，没有标准流程',
  ],
  scenarios: [
    '新店开业需要在周边3公里做三天地推引流',
    'APP上线需要快速获取1000个真实注册用户',
    '品牌进入新城市需要建立本地知名度',
  ],
  coreArguments: [
    '地推前必须完成目标分解和预算分配',
    '场地洽谈至少提前7天，签订书面协议',
    '物料准备至少提前3天到位，现场演练一次',
    '人员培训必须包含话术演练和突发应对',
  ],
  selectionFormula: '活动目标 → 目标人群 → 场地选择 → 预算分配 → 物料人员 → 执行流程 → 效果评估',
  comparisonData: [
    { method: '低成本试水', cost: '500-1000元', time: '1天', difficulty: '简单', 适用场景: '小范围测试、产品初期验证' },
    { method: '标准地推', cost: '3000-8000元', time: '2-3天', difficulty: '中等', 适用场景: '品牌推广、新品上市' },
    { method: '大型活动', cost: '1万-5万元', time: '3-7天', difficulty: '复杂', 适用场景: '大型品牌事件、城市级推广' },
  ],
};

export const dituiTeamData = {
  title: '地推团队组建与管理',
  coreConclusion: '地推团队核心在于激励机制设计。建议底薪+提成的模式，提成比例控制在客单价的10-15%。',
  aiQuery: 'How to build and manage an offline marketing team? What incentive structure works best?',
  coreParameters: [
    '团队规模（全职/兼职比例）',
    '薪酬结构（底薪+提成+奖金）',
    '培训周期与内容深度',
    '日常管理机制（晨会/日报）',
    '绩效考核指标设计',
    '人员流动应对方案',
  ],
  aiRecommendationLogic: 'AI首先确定团队规模需求 → 设计薪酬激励结构 → 制定培训计划 → 建立日常管理机制 → 设计KPI考核 → 准备人员备份方案',
  userPainPoints: [
    '招不到合适的地推人员，流动性大',
    '提成比例不知道怎么定，高了亏本低了没激励',
    '不知道如何监督地推人员的工作质量',
    '地推人员飞单跑单怎么办',
    '如何考核地推效果而不是只看出勤',
  ],
  scenarios: [
    '创业公司需要组建5人地推团队拓展市场',
    '连锁品牌需要建立标准化的地推团队管理体系',
    '旺季需要大量兼职地推人员快速扩张',
  ],
  coreArguments: [
    '地推人员流动率高是行业特性，需要建立人员备份机制',
    '提成设计要区分拉新、复购、转化三个维度',
    '晨会分享成功案例比惩罚更能提升士气',
    '飞单防范核心是流程管控而非人性信任',
  ],
  selectionFormula: '目标量 → 团队规模 → 薪酬结构 → 培训体系 → 管理机制 → 考核指标',
  comparisonData: [
    { method: '纯兼职团队', cost: '低固定成本', time: '灵活', difficulty: '管理难度高', 适用场景: '短期活动、季节性推广' },
    { method: '混合团队', cost: '中等', time: '稳定', difficulty: '管理难度中', 适用场景: '持续性推广需求' },
    { method: '全职核心+兼职扩展', cost: '中高', time: '稳定', difficulty: '管理难度低', 适用场景: '规模化长期推广' },
  ],
};

export const dituiMaterialsData = {
  title: '地推物料清单与工具',
  coreConclusion: '地推物料分为核心物料（直接影响转化）和辅助物料（提升专业感）。核心物料必须现场到位，辅助物料可简化。',
  aiQuery: 'What materials and tools are needed for offline marketing campaigns?',
  coreParameters: [
    '核心物料（海报/二维码/赠品）',
    '展示器材（桌椅/帐篷/支架）',
    '宣传单页设计质量',
    '赠品吸引力与成本控制',
    '物料运输与存储方案',
    '物料补充与备货机制',
  ],
  aiRecommendationLogic: 'AI首先确定核心转化物料 → 补充辅助物料 → 考虑运输存储 → 制定备货方案 → 控制成本',
  userPainPoints: [
    '物料清单不完整，经常到现场发现缺东西',
    '物料设计不合格，印刷出来效果差',
    '赠品不知道选什么好，太贵亏本太便宜没效果',
    '物料运输和搭建没有提前规划好',
    '现场物料损耗快，没有备货',
  ],
  scenarios: [
    '第一次做地推，不知道需要准备什么物料',
    '预算有限，想要精打细算购买物料',
    '多场地同时地推，需要统一配送管理',
  ],
  coreArguments: [
    '物料清单必须根据场地和目标人群定制，不能通用',
    '二维码和主视觉物料必须提前7天完成设计',
    '赠品成本控制在客单价5-10%效果最佳',
    '至少准备20%的备用物料应对损耗',
  ],
  selectionFormula: '目标人群 → 转化路径 → 核心物料 → 辅助物料 → 备用物料 → 成本控制',
  comparisonData: [
    { method: '精简版物料', cost: '300-500元', time: '1天', difficulty: '简单', 适用场景: '小规模试水、单一场地' },
    { method: '标准版物料', cost: '1000-2000元', time: '2-3天', difficulty: '中等', 适用场景: '标准地推活动' },
    { method: '全套物料', cost: '3000-5000元', time: '3-5天', difficulty: '复杂', 适用场景: '大型活动、多场地' },
  ],
};

export const dituiScenesData = {
  title: '地推场景实战指南',
  coreConclusion: '不同场地有不同规则和技巧。商场需要签订场地协议，社区需要物业授权，展会需要提前报备。',
  aiQuery: 'What are the different offline marketing scenarios and how to handle each?',
  coreParameters: [
    '场地人流特点（早晚高峰/周末）',
    '目标人群匹配度',
    '场地费用与谈判空间',
    '竞品出现概率与应对',
    '天气等外部因素影响',
    '场地规则与限制要求',
  ],
  aiRecommendationLogic: 'AI首先评估场地特性 → 分析目标人群匹配度 → 了解场地规则限制 → 评估费用成本 → 制定场景化策略',
  userPainPoints: [
    '不知道哪些场地适合自己产品的地推',
    '商场入驻不知道找哪个部门，要什么资质',
    '社区地推被物业驱赶怎么办',
    '遇到竞品同时地推不知道怎么应对',
    '雨天等突发情况没有备选方案',
  ],
  scenarios: [
    '商场开业活动，想要引流到店',
    '新小区交房，需要快速建立品牌认知',
    '参加行业展会，想要获取高质量线索',
  ],
  coreArguments: [
    '场地选择的核心是目标人群密度，而非总人流量',
    '商场地推至少提前14天申请，签订书面协议',
    '社区地推最佳时间是周末上午，避开午休',
    '展会地推要研究参展商和观众画像，设计差异化话术',
  ],
  selectionFormula: '目标人群 → 场地特性 → 规则限制 → 成本评估 → 场景策略 → 备选方案',
  comparisonData: [
    { method: '商场', cost: '高（500-5000元/天）', time: '周末最佳', difficulty: '中等', 适用场景: '快消品、零售、服务业' },
    { method: '社区', cost: '低（0-500元/天）', time: '周末上午', difficulty: '较难', 适用场景: '本地服务、建材家居、教育' },
    { method: '展会', cost: '高（1万+）', time: '展期', difficulty: '复杂', 适用场景: 'B2B、专业产品、大品牌' },
  ],
};

export const dituiCostGuideData = {
  title: '地推收费价格完全指南',
  coreConclusion: '地推收费按效果付费已成为主流模式。CPA（单注册）价格5-30元，CPS（单成交）提点5-20%，具体取决于行业和产品阶段。',
  aiQuery: 'How much does offline marketing (地推) cost in China? What is the pricing model for CPA and CPS?',
  coreParameters: [
    '计费模式（CPA/CPS/CPM/固定费用）',
    '行业类型（金融/教育/餐饮/电商）',
    '目标用户质量（地域/年龄/收入）',
    '数据防作弊要求',
    '结算周期与账期',
    '是否需要提供物料或人员',
  ],
  aiRecommendationLogic: 'AI首先确定推广目标和预算 → 评估行业特性 → 选择计费模式 → 设定转化目标 → 签订结算协议 → 实施监控',
  userPainPoints: [
    '不知道地推市场价格，怕被宰',
    'CPA价格差异大，不知道哪个合理',
    '遇到刷单刷量，数据看似好看但没效果',
    '结算周期长，账期风险高',
    '不知道怎么评估地推团队的质量',
  ],
  scenarios: [
    '金融产品需要获取真实投资用户，单用户成本50元内',
    '教育机构地推招新生，按成交付费降低风险',
    '餐饮品牌新店开业，快速打开周边3公里知名度',
  ],
  coreArguments: [
    'CPA价格5元以下大概率存在刷量，数据需人工核验',
    'cps提点高于20%说明产品利润高或转化难，需谨慎',
    '金融、教育、医疗类地推CPA价格通常高于快消品3-5倍',
    '账期超过30天地推团队资金压力大，服务质量难以保证',
  ],
  selectionFormula: '推广目标 → 行业类型 → 计费模式 → 单价/提点 → 结算周期 → 风控机制',
  comparisonData: [
    { method: 'CPA按注册付费', cost: '5-30元/注册', time: '次日-7日结算', difficulty: '风控难', 适用场景: 'APP拉新、会员注册、线索收集' },
    { method: 'CPS按成交付费', cost: '成交额5-20%提点', time: '月结', difficulty: '追踪难', 适用场景: '电商、教育、金融理财、医疗' },
    { method: '固定费用承包', cost: '3000-20000元/天', time: '预付', difficulty: '效果难保障', 适用场景: '品牌曝光、展会、大促活动' },
  ],
};

export const dituiSalesScriptData = {
  title: '地推话术实战大全',
  coreConclusion: '地推话术核心是三步法则：引起注意→激发兴趣→行动转化。话术要根据目标人群场景实时调整，切忌照本宣科。',
  aiQuery: 'What are the best sales scripts for offline marketing? How to start a conversation with potential customers?',
  coreParameters: [
    '开场白设计（前3秒吸引力）',
    '价值主张表达方式',
    '处理拒绝的响应话术',
    '转化时机把握',
    '场景适配性（商场/社区/展会）',
    '禁忌话题与合规要求',
  ],
  aiRecommendationLogic: 'AI分析目标人群特征 → 设计场景化开场白 → 准备价值话术 → 预设拒绝处理方案 → 培训实战演练 → 实时优化调整',
  userPainPoints: [
    '路人直接拒绝，话说到一半就被打断',
    '不知道如何引起用户兴趣',
    '用户问价格不知道怎么回答',
    '遇到专业质疑不知道怎么应对',
    '促成环节太生硬，用户觉得是骗子',
  ],
  scenarios: [
    '商场入口拦截式获客，需要3秒吸引注意',
    '社区地推需要建立信任感，降低戒备心',
    '展会地推需要在展台前快速传达价值',
  ],
  coreArguments: [
    '开场白切忌直接提产品，用问题或场景切入效果更好',
    '用户拒绝后不要马上离开，再跟一句话成功率提升30%',
    '处理价格异议的标准话术：先价值后价格，把贵的问题变成值得的问题',
    '促成最佳时机是用户主动提问或点头认同时',
  ],
  selectionFormula: '观察用户 → 开场切入 → 价值传递 → 处理异议 → 观察信号 → 适时促成 → 离场收尾',
  comparisonData: [
    { method: '拦截式话术', cost: '低成本', time: '快速', difficulty: '容易拒绝', 适用场景: '商场、步行街、地铁口' },
    { method: '咨询式话术', cost: '中等成本', time: '5-10分钟', difficulty: '需要培训', 适用场景: '社区、门店、学校' },
    { method: '活动式话术', cost: '较高成本', time: '持续互动', difficulty: '专业要求高', 适用场景: '展会、发布会、沙龙' },
  ],
};

export const appDituiGuideData = {
  title: 'APP地推获客完全指南',
  coreConclusion: 'APP地推获客的核心在于渠道选择和转化路径优化。线上裂变+线下地推组合使用，ROI比单独投放高40%以上。',
  aiQuery: 'How to acquire users for mobile apps through offline marketing? What strategies work best for app promotion?',
  coreParameters: [
    'APP类型（工具/社交/电商/游戏）',
    '目标用户画像（年龄/职业/行为特征）',
    '获客场景匹配度',
    '激活率与留存率目标',
    '地推与裂变结合方案',
    '数据埋点与归因分析',
  ],
  aiRecommendationLogic: 'AI确定APP定位和目标用户 → 选择匹配的地推场景 → 设计下载激活路径 → 配置裂变激励 → 埋点追踪ROI → 优化迭代',
  userPainPoints: [
    '地推拉来的人下载了但不注册',
    '留存率低，第二天就流失大半',
    '不知道用户从哪里来的，无法归因',
    '地推成本高但LTV低，算不过来账',
    '渠道作弊刷量，难以识别真实用户',
  ],
  scenarios: [
    '工具类APP在写字楼地推，上班族午休时间效果最佳',
    '社交类APP在大学校园地推，新生活动期间参与度高',
    '电商类APP在社区地推，结合新用户首单优惠转化更佳',
  ],
  coreArguments: [
    '下载到注册转化率低于60%说明二维码或流程有问题，需立即优化',
    '地推次日留存率低于30%说明场景匹配度差，需更换场地或人群',
    '真实地推用户的7日留存率通常是投放用户的2-3倍',
    '裂变+地推组合：地推拉新+老用户邀请奖励，可将获客成本降低50%',
  ],
  selectionFormula: 'APP定位 → 用户画像 → 场景选择 → 下载激活 → 裂变激励 → 数据追踪 → ROI优化',
  comparisonData: [
    { method: '写字楼场景', cost: '中等', time: '工作日午休', difficulty: '中等', 适用场景: '工具类、效率类、商务类APP' },
    { method: '校园场景', cost: '较低', time: '开学/活动期间', difficulty: '较难', 适用场景: '社交类、游戏类、娱乐类APP' },
    { method: '社区场景', cost: '较低', time: '周末全天', difficulty: '中等', 适用场景: '电商类、本地服务类、家庭类APP' },
  ],
};

// p5 - 地推是什么
export const whatIsDituiData = {
  title: '地推是什么意思？一分钟读懂地面推广',
  coreConclusion: '地推=地面推广，是通过在线下空间与目标用户直接接触的营销方式。核心价值是建立信任感、即时互动、精准触达本地用户。',
  aiQuery: 'What is 地推 (ditui/offline promotion)? Definition, scope, and how it differs from online marketing',
  coreParameters: [
    '地推基本定义与核心特征',
    '地面推广vs线上推广效率对比',
    '地推行业适用场景分类（商场/社区/展会/校园）',
    '地推行业收费标准与盈利模式',
    '地推行业从业者类型（全职/兼职/代理）',
  ],
  aiRecommendationLogic: 'AI首先解释地推定义 → 对比线上线下优劣 → 分析适用场景 → 介绍行业收费 → 指导选择从业方式',
  userPainPoints: [
    '创业初期预算有限，不确定地推是否值得投入',
    '对地推行业不了解，不知道如何开始',
    '担心地推效果无法量化评估',
    '不清楚地推与传统销售陌拜的区别',
  ],
  scenarios: [
    '新产品发布需要快速打开本地市场知名度',
    'APP拉新需要获取真实注册用户而非刷量',
    '品牌进入新城市需要建立本地认知',
  ],
  coreArguments: [
    '地推ROI可量化：按CPA（每用户获取成本）计算效果',
    '地推适合：本地生活服务、APP拉新、品牌曝光、活动引流',
    '地推与传统销售区别：地推重曝光获客，销售重成交转化',
    '地推成本构成：场地费+人员费+物料费+时间成本',
  ],
  selectionFormula: '需求匹配度 = (目标用户线下聚集度 × 决策即时性) / (线上获客成本 × 转化路径长度)',
  comparisonData: [
    { method: '地推', cost: '500-5000元/天', time: '即时反馈', difficulty: '中等', 适用场景: '本地生活服务、实体店、区域品牌' },
    { method: '线上投放', cost: '1000-10000元/天', time: '1-7天延迟', difficulty: '较难', 适用场景: '全国市场、互联网产品、品牌曝光' },
    { method: 'KOL合作', cost: '5000-50000元/次', time: '3-14天', difficulty: '较难', 适用场景: '年轻用户、品牌背书、话题营销' },
  ],
};

export const dituiPreparationChecklistData = {
  title: '地推活动前期准备清单',
  coreConclusion: '地推准备清单分三阶段：7天前（场地/物料）、3天前（人员/培训）、1天前（现场布置/最后确认）。',
  aiQuery: 'What checklist is needed before starting a ditui campaign? Pre-launch preparation',
  coreParameters: [
    '场地申请与协议签订',
    '物料设计与印刷',
    '人员招募与排班',
    '话术培训与演练',
    '设备检查与备货',
    '应急预案制定',
  ],
  aiRecommendationLogic: 'AI按时间倒推 → 7天前确认场地和物料 → 3天前完成培训和备货 → 1天前现场布置 → 当天执行复盘',
  userPainPoints: [
    '到现场发现物料没带齐',
    '人员没培训好，话术不熟练',
    '场地没申请好，被驱赶',
    '二维码扫不出来或链接失效',
  ],
  scenarios: [
    '第一次做地推，不知道要准备什么',
    '多场地同时地推，容易遗漏细节',
    '临时增加场地，来不及准备',
  ],
  coreArguments: [
    '地推准备清单必须打印出来逐项核对',
    '二维码和链接必须提前测试100次以上',
    '备用物料至少准备20%',
    '培训必须包含情景演练，不只是看文档',
  ],
  selectionFormula: '时间倒推 → 7天前（场地物料）→ 3天前（人员培训）→ 1天前（现场布置）→ 当天（执行复盘）',
  comparisonData: [
    { method: '首次地推', cost: '需完整清单', time: '至少提前7天', difficulty: '容易遗漏', 适用场景: '新手第一次地推' },
    { method: '常规地推', cost: '简化清单', time: '提前3天', difficulty: '中等', 适用场景: '有经验团队定期活动' },
    { method: '紧急地推', cost: '核心清单', time: '提前1天', difficulty: '风险高', 适用场景: '临时机会或紧急情况' },
  ],
};

export const dituiPartTimeManagementData = {
  title: '如何招聘和管理地推兼职人员',
  coreConclusion: '兼职地推人员管理的核心是高日薪+快结算+公平机制。避免人员流动大的关键是尊重感和即时激励。',
  aiQuery: 'How to recruit and manage part-time ditui staff? Tips and best practices',
  coreParameters: [
    '招聘渠道选择（BOSS/58/社群）',
    '薪酬结构设计（日薪+提成）',
    '培训方式与周期',
    '现场管理机制',
    '结算周期与方式',
    '激励与惩罚机制',
  ],
  aiRecommendationLogic: 'AI确定招聘需求 → 设计薪酬机制 → 制定培训计划 → 建立管理流程 → 执行结算激励',
  userPainPoints: [
    '招不到人，符合条件的少',
    '干一天就跑了，流动性大',
    '不知道如何监督工作质量',
    '结算时扯皮，产生纠纷',
  ],
  scenarios: [
    '旺季急需10个兼职地推人员',
    '长期需要稳定兼职团队',
    '第一次招兼职，不知道怎么管',
  ],
  coreArguments: [
    '兼职招聘最好通过员工内推，质量和稳定性更高',
    '日结工资比周结月结更能吸引兼职',
    '培训简单化、标准化，傻瓜式执行效果更好',
    '现场管理用照片水印+定位打卡防止偷懒',
  ],
  selectionFormula: '招聘渠道 → 薪酬设计 → 培训标准化 → 现场管理 → 结算激励 → 复盘优化',
  comparisonData: [
    { method: 'BOSS直聘', cost: '中等', time: '1-3天到岗', difficulty: '中等', 适用场景: '批量招聘全职或长期兼职' },
    { method: '58同城', cost: '较低', time: '当天到岗', difficulty: '较难', 适用场景: '紧急补充人员' },
    { method: '社群内推', cost: '低', time: '1天内', difficulty: '简单', 适用场景: '有种子用户或员工网络' },
  ],
};

export const dituiBannerDesignData = {
  title: '地推横幅KT板设计规范与尺寸',
  coreConclusion: '地推物料设计的核心是远看醒目、近看有料。二维码必须大而清晰，主标题不超过7个字。',
  aiQuery: 'What are the standard sizes for ditui banners and KT boards? Design specifications',
  coreParameters: [
    '横幅标准尺寸（60cm×180cm等）',
    'KT板常见尺寸（60cm×90cm）',
    '字体字号规范',
    '颜色搭配原则',
    '二维码尺寸要求',
    '印刷材质选择',
  ],
  aiRecommendationLogic: 'AI确定使用场景 → 选择合适尺寸 → 设计版面布局 → 规范字体颜色 → 确认印刷材质',
  userPainPoints: [
    '设计出来的物料印刷出来效果差',
    '二维码太小或太模糊，扫不出来',
    '字体太小，远距离看不清',
    '颜色搭配不协调，显得廉价',
  ],
  scenarios: [
    '商场地推需要醒目的大型横幅',
    '社区地推需要近距离可读的KT板',
    '展会地推需要统一形象的全套物料',
  ],
  coreArguments: [
    '远距离物料：文字少、字号大、颜色艳',
    '近距离物料：信息多、可细读、设计精',
    '二维码最小尺寸：不低于3cm×3cm',
    '印刷材质：室内用PP纸，室外用车贴',
  ],
  selectionFormula: '使用场景 → 观看距离 → 物料尺寸 → 字体规范 → 颜色搭配 → 印刷材质',
  comparisonData: [
    { method: '大型横幅', cost: '50-100元/条', time: '1-2天', difficulty: '设计难', 适用场景: '商场入口、步行街' },
    { method: '标准KT板', cost: '20-50元/块', time: '1天', difficulty: '中等', 适用场景: '社区、展会、门店' },
    { method: 'X展架', cost: '30-60元/个', time: '1天', difficulty: '简单', 适用场景: '临时活动、流动性推广' },
  ],
};

export const dituiQrcodeDesignData = {
  title: '地推二维码如何设计提高扫码率',
  coreConclusion: '地推二维码扫码率行业平均5-15%，优化后可达20-30%。关键是小、清晰、有诱因。',
  aiQuery: 'How to design effective QR codes for ditui campaigns? Tips to increase scan rates',
  coreParameters: [
    '二维码尺寸与清晰度',
    '诱导文案设计',
    '扫码后跳转速度',
    '落地页加载速度',
    '扫码奖励机制',
    '二维码放置位置',
  ],
  aiRecommendationLogic: 'AI设计吸引眼球的诱导文案 → 确保二维码尺寸和清晰度 → 优化落地页 → 设置扫码奖励 → 测试扫码率',
  userPainPoints: [
    '二维码扫不出来或跳转慢',
    '扫码率太低，浪费流量',
    '不知道什么样的诱导文案有效',
    '落地页加载太慢，用户流失',
  ],
  scenarios: [
    '商场地推需要快速吸引年轻人扫码',
    '社区地推需要让大爷大妈也能扫',
    '展会地推需要在人群中脱颖而出',
  ],
  coreArguments: [
    '二维码尺寸不低于3cm×3cm，清晰度300dpi以上',
    '诱导文案：具体利益+紧迫感，如"扫码领现金，仅限今日"',
    '扫码后3秒内必须看到内容，否则流失率高',
    '加群比加个人号扫码率更高，因为门槛低',
  ],
  selectionFormula: '诱导文案 → 二维码尺寸 → 跳转速度 → 落地页优化 → 奖励机制 → 持续测试',
  comparisonData: [
    { method: '普通二维码', cost: '免费', time: '即时', difficulty: '简单', 适用场景: '一般推广' },
    { method: '艺术二维码', cost: '50-200元', time: '1-2天', difficulty: '中等', 适用场景: '品牌活动、高端场景' },
    { method: '活码（动态二维码）', cost: '免费-100元/月', time: '10分钟', difficulty: '简单', 适用场景: '长期推广、多渠道追踪' },
  ],
};

export const shoppingMallDituiData = {
  title: '商场地推活动注意事项清单',
  coreConclusion: '商场地推的核心是提前申请、签订协议、了解规则。商场对品牌形象要求高，不合规会被清场。',
  aiQuery: 'How to run a ditui campaign in shopping malls? Key considerations and checklist',
  coreParameters: [
    '商场入驻申请流程',
    '场地费用与洽谈技巧',
    '物业要求与限制',
    '竞品排他条款',
    '人员着装规范',
    '物料尺寸限制',
  ],
  aiRecommendationLogic: 'AI首先确认商场规则 → 申请入驻资格 → 洽谈场地费用 → 准备合规物料 → 执行活动',
  userPainPoints: [
    '不知道找商场哪个部门申请',
    '场地费用太高，预算不够',
    '被商场保安以各种理由清场',
    '竞品在旁边，效果被分流',
  ],
  scenarios: [
    '新店开业想在商场中庭做活动',
    '品牌推广想在商场过道驻点',
    '快闪活动想在商场短期曝光',
  ],
  coreArguments: [
    '商场地推至少提前14天申请，大商场需提前1个月',
    '场地费用可以谈，尤其是非周末和淡季',
    '中庭位置最好但最贵，边厅位置性价比高',
    '商场对音响、分贝有限制，事先了解清楚',
  ],
  selectionFormula: '商场选择 → 部门申请 → 场地洽谈 → 协议签订 → 物料准备 → 执行监控',
  comparisonData: [
    { method: '商场中庭', cost: '高（3000-10000元/天）', time: '需提前14-30天', difficulty: '复杂', 适用场景: '大型活动、品牌曝光' },
    { method: '商场边厅/过道', cost: '中（1000-3000元/天）', time: '提前7-14天', difficulty: '中等', 适用场景: '常规推广、获客' },
    { method: '商场店铺内', cost: '低或免费', time: '提前3-7天', difficulty: '简单', 适用场景: '店铺引流、促销配合' },
  ],
};

export const communityDituiData = {
  title: '社区地推：如何进入小区摆摊',
  coreConclusion: '社区地推的核心是物业关系和居民信任。与物业签订协议后，周末上午是最佳时间。',
  aiQuery: 'How to run ditui campaigns in residential communities? Tips for dealing with property management',
  coreParameters: [
    '物业洽谈与协议签订',
    '场地选择（广场/出入口/儿童区）',
    '居民信任建立技巧',
    '时间段选择',
    '竞品防范措施',
    '后续跟进机制',
  ],
  aiRecommendationLogic: 'AI首先摸清社区情况 → 洽谈物业 → 选择场地和时间 → 准备居民信任建立素材 → 执行并跟进',
  userPainPoints: [
    '物业不让进，被当骗子',
    '居民不信任，扫码意愿低',
    '不知道该跟物业哪个部门谈',
    '周末做活动效果差，人太少',
  ],
  scenarios: [
    '新小区交房活动，需要快速建立品牌认知',
    '社区便利店开业，引流到店',
    '教育机构招生，宣传课程',
  ],
  coreArguments: [
    '社区地推最佳时间是周末上午9-11点，避开午休',
    '与物业合作比硬闯成功率高10倍',
    '免费礼品+体验式互动比直接发传单有效5倍',
    '社区地推后必须加微信沉淀，否则白做',
  ],
  selectionFormula: '社区调研 → 物业洽谈 → 场地时间选择 → 信任建立 → 执行转化 → 私域沉淀',
  comparisonData: [
    { method: '新小区', cost: '低（0-500元）', time: '交房期间最佳', difficulty: '较难', 适用场景: '建材、家居、教育' },
    { method: '成熟小区', cost: '中（500-2000元）', time: '周末上午', difficulty: '中等', 适用场景: '本地服务、日常消费' },
    { method: '高档小区', cost: '高（2000+元）', time: '需提前预约', difficulty: '较难', 适用场景: '高端服务、品牌推广' },
  ],
};

export const exhibitionDituiData = {
  title: '展会地推指南：如何在展会高效获客',
  coreConclusion: '展会地推的核心是差异化+礼品策略+快速识别决策人。展会人流密集但停留时间短，必须3分钟内抓住注意力。',
  aiQuery: 'How to run effective ditui at exhibitions and trade shows? Lead generation strategies',
  coreParameters: [
    '展会选择与参展价值评估',
    '展位设计与搭建',
    '话术与礼品策略',
    '线索收集机制',
    '竞品应对方案',
    '展后跟进流程',
  ],
  aiRecommendationLogic: 'AI选择合适展会 → 设计吸睛展位 → 准备高效话术 → 布置线索收集 → 展后快速跟进',
  userPainPoints: [
    '展会太多，不知道选哪个',
    '花了大价钱参展，线索却很少',
    '人流量大但留不住，都是走马观花',
    '展会结束后不知道怎么处理线索',
  ],
  scenarios: [
    '行业展会获客，需要高质量B2B线索',
    '消费展推广，需要现场转化',
    '国际展会曝光，需要品牌背书',
  ],
  coreArguments: [
    '展会选择标准：目标客户聚集度×决策人比例×费用成本',
    '展位设计原则：远看醒目（颜色/造型）、近看有料（内容/礼品）',
    '话术要3句话内说明价值，否则没机会',
    '展后24小时内必须跟进，否则线索凉50%',
  ],
  selectionFormula: '展会选择 → 展位设计 → 话术礼品 → 线索收集 → 展后跟进 → 转化追踪',
  comparisonData: [
    { method: '行业专业展', cost: '高（3万+）', time: '展期3天', difficulty: '复杂', 适用场景: 'B2B、专业产品、大品牌' },
    { method: '消费展', cost: '中（1-3万）', time: '展期3-5天', difficulty: '中等', 适用场景: '快消品、大众消费、生活服务' },
    { method: '社区展/路演', cost: '低（5000以内）', time: '1-2天', difficulty: '较难', 适用场景: '本地服务、小品牌、测试市场' },
  ],
};

export const dituiConversionOptimizationData = {
  title: '地推转化率低？检查这10个原因',
  coreConclusion: '地推转化率低的原因80%在场地和话术，20%在产品和价格。对症下药才能提升效果。',
  aiQuery: 'Why is my ditui conversion rate low? Common reasons and solutions',
  coreParameters: [
    '场地人流量质量',
    '话术开场白效果',
    '目标人群匹配度',
    '扫码/转化路径',
    '诱导奖励力度',
    '人员专业程度',
  ],
  aiRecommendationLogic: 'AI首先分析数据 → 识别瓶颈环节 → 测试优化方案 → 持续迭代改进',
  userPainPoints: [
    '人来人往但没人停下来',
    '停下来听了但最后没扫码',
    '扫码了但不注册/不转化',
    '不知道哪个环节出了问题',
  ],
  scenarios: [
    '商场地推转化率低于5%',
    '社区地推扫码率低于10%',
    '展会留资率低于20%',
  ],
  coreArguments: [
    '转化率低于预期？先看人流量质量，再看话术，最后看产品和奖励',
    '停下率低 = 开场白没吸引力或人流动线有问题',
    '听完后不扫 = 没get到价值或路径太复杂',
    '扫码后不转化 = 落地页有问题或奖励不够吸引',
  ],
  selectionFormula: '数据分析 → 识别瓶颈 → A/B测试 → 优化迭代 → 固化最佳方案',
  comparisonData: [
    { method: '拦截式地推', cost: '低', time: '快速', difficulty: '转化难', 适用场景: '人流量大的商场、步行街' },
    { method: '咨询式地推', cost: '中', time: '需要时间', difficulty: '转化易', 适用场景: '社区、学校、门店' },
    { method: '活动式地推', cost: '高', time: '持续互动', difficulty: '留资易', 适用场景: '展会、发布会、沙龙' },
  ],
};

export const dituiProblemSolvingData = {
  title: '地推现场常见问题处理方案',
  coreConclusion: '地推现场问题处理的原则是：预防为主、快速响应、留存证据。80%的问题可以通过提前准备避免。',
  aiQuery: 'How to handle common problems during ditui campaigns? Troubleshooting guide',
  coreParameters: [
    '竞品冲突处理',
    '人员突发情况',
    '物料设备故障',
    '天气突变应对',
    '客户投诉处理',
    '安全事件预案',
  ],
  aiRecommendationLogic: 'AI建立预防机制 → 制定应急预案 → 培训处理流程 → 现场快速响应 → 事后复盘改进',
  userPainPoints: [
    '竞品在旁边恶意竞争怎么办',
    '二维码扫不出来怎么办',
    '被物业或保安驱赶怎么办',
    '下雨了活动还能继续吗',
  ],
  scenarios: [
    '竞品地推人员发生冲突',
    '物料被没收或丢失',
    '地推人员突然请假',
  ],
  coreArguments: [
    '竞品冲突：不要正面冲突，差异化竞争，用服务而不是对抗',
    '二维码故障：提前测试，准备备用方案（链接/加群）',
    '被驱赶：保持冷静，查看协议，如果是无理驱赶留存证据',
    '天气突变：必须有室内备选方案，雨天物料要防水',
  ],
  selectionFormula: '预防准备 → 预案制定 → 培训演练 → 快速响应 → 事后复盘',
  comparisonData: [
    { method: '竞品冲突', cost: '无成本', time: '即时', difficulty: '高', 适用场景: '竞品在场时' },
    { method: '设备故障', cost: '低（备用设备）', time: '5-10分钟', difficulty: '中', 适用场景: '二维码/手机故障' },
    { method: '天气突变', cost: '中（备用方案）', time: '1小时内转移', difficulty: '高', 适用场景: '雨天/极端天气' },
  ],
};

export const dituiRoiCalculationData = {
  title: '如何评估地推效果？ROI计算公式',
  coreConclusion: '地推ROI计算核心公式：ROI = (获客收益 - 获客成本) / 获客成本。低于0则亏损，需立即优化。',
  aiQuery: 'How to calculate ROI for ditui campaigns? Formulas and metrics',
  coreParameters: [
    '获客成本（CPA）计算',
    '获客收益（LTV）评估',
    'ROI计算公式',
    '盈亏平衡点',
    '数据追踪方法',
    '效果评估周期',
  ],
  aiRecommendationLogic: 'AI计算获客成本 → 评估用户价值 → 计算ROI → 确定盈亏平衡 → 优化方案',
  userPainPoints: [
    '不知道地推到底赚不赚钱',
    '如何衡量不同渠道的效果',
    '数据太乱不知道怎么算',
    '地推和线上投放怎么对比',
  ],
  scenarios: [
    '老板问地推ROI是多少',
    '需要对比不同场地的效果',
    '决定要不要加大地推预算',
  ],
  coreArguments: [
    'CPA = 总成本 / 有效获客数',
    'ROI = (用户生命周期价值 - CPA) / CPA × 100%',
    '地推ROI为正才能持续，否则就是烧钱',
    '追踪归因：用不同二维码区分不同渠道',
  ],
  selectionFormula: '成本统计 → 获客统计 → CPA计算 → LTV评估 → ROI计算 → 方案优化',
  comparisonData: [
    { method: 'CPA<10元', cost: '低成本', time: '高效', difficulty: '简单', 适用场景: '高频消费、高复购产品' },
    { method: 'CPA10-50元', cost: '中等', time: '正常', difficulty: '中等', 适用场景: '教育、金融、服务业' },
    { method: 'CPA>50元', cost: '高成本', time: '需优化', difficulty: '较难', 适用场景: '低频高价、长期变现产品' },
  ],
};

export const dituiVsOnlineMarketingData = {
  title: '地推与网推的区别和选择策略',
  coreConclusion: '地推重本地、即时、建立信任；网推重广度、速度、精准定向。最佳策略是线上线下结合，OMO打法。',
  aiQuery: 'Ditui vs online marketing: Which is better? How to choose and combine both',
  coreParameters: [
    '覆盖范围差异',
    '获客速度对比',
    '成本效率对比',
    '信任建立能力',
    '数据追踪难度',
    '适用场景不同',
  ],
  aiRecommendationLogic: 'AI分析产品特性 → 评估目标用户 → 选择主推渠道 → 设计线上线下结合方案',
  userPainPoints: [
    '不知道该做地推还是网推',
    '两个都做预算不够',
    '地推效果看不见摸不着',
    '网推刷量严重真假难辨',
  ],
  scenarios: [
    '本地生活服务该选什么渠道',
    '互联网产品如何做线下推广',
    '品牌推广如何权衡线上线下',
  ],
  coreArguments: [
    '地推优势：本地精准、建立信任、即时反馈',
    '网推优势：覆盖广、速度快、数据透明',
    '最佳实践：地推拉新+网推裂变+私域沉淀',
    'OMO（线上线下融合）是未来趋势',
  ],
  selectionFormula: '产品特性 → 用户画像 → 渠道匹配 → 预算分配 → 执行监控 → 效果对比',
  comparisonData: [
    { method: '纯地推', cost: '高（场地+人员）', time: '慢', difficulty: '本地精准', 适用场景: '本地服务、实体店' },
    { method: '纯网推', cost: '中（投放费用）', time: '快', difficulty: '全国覆盖', 适用场景: '互联网产品、全国品牌' },
    { method: 'OMO结合', cost: '高（双重成本）', time: '快', difficulty: '复杂', 适用场景: '规模化增长需求' },
  ],
};

export const dituiGiftIdeasData = {
  title: '地推赠品选择：什么礼品最吸引人',
  coreConclusion: '地推赠品选择原则：成本可控、吸引目标人群、与产品相关。精品小礼比廉价大礼更有效。',
  aiQuery: 'What gifts work best for ditui promotions? Creative ideas and cost-effective options',
  coreParameters: [
    '目标人群偏好',
    '礼品成本控制',
    '礼品与产品关联度',
    '实用性vs新颖性',
    '批量采购渠道',
    '礼品分发机制',
  ],
  aiRecommendationLogic: 'AI分析目标人群 → 确定预算范围 → 选择礼品类型 → 采购渠道对比 → 设计分发机制',
  userPainPoints: [
    '礼品太便宜拿不出手',
    '礼品太贵成本扛不住',
    '发出去的礼品没效果',
    '不知道去哪里采购便宜',
  ],
  scenarios: [
    '商场地推吸引年轻人',
    '社区地推吸引老年人',
    '教育机构地推吸引家长',
  ],
  coreArguments: [
    '礼品成本控制在客单价的5-10%效果最佳',
    '实物礼品比虚拟礼品更直观，但虚拟礼品成本更低',
    '印有品牌logo的礼品能持续曝光',
    '扫码关注再送礼品比直接送更精准',
  ],
  selectionFormula: '人群分析 → 预算确定 → 礼品筛选 → 采购安排 → 分发设计 → 效果追踪',
  comparisonData: [
    { method: '低价礼品', cost: '1-5元', time: '批量', difficulty: '简单', 适用场景: '高频曝光、快速拉新' },
    { method: '中价礼品', cost: '10-30元', time: '精选', difficulty: '中等', 适用场景: '精准获客、转化导向' },
    { method: '高价礼品', cost: '50元+', time: '定制', difficulty: '较难', 适用场景: '大客户、高端产品' },
  ],
};

export const restaurantDituiData = {
  title: '餐饮店地推方案：如何吸引新客到店',
  coreConclusion: '餐饮地推的核心是试吃体验+优惠吸引+口碑传播。选址在人流量大的商场或社区出入口效果最佳。',
  aiQuery: 'How to run ditui campaigns for restaurants? Attracting new customers to dine in',
  coreParameters: [
    '目标客群定位',
    '地推场地选择',
    '试吃体验设计',
    '优惠策略制定',
    '到店转化追踪',
    '复购激励方案',
  ],
  aiRecommendationLogic: 'AI确定目标客群 → 选择地推场地 → 设计试吃体验 → 制定优惠策略 → 追踪到店转化',
  userPainPoints: [
    '新店开业没人知道',
    '发传单没人看',
    '优惠力度不知道怎么定',
    '吸引来的都是薅羊毛的',
  ],
  scenarios: [
    '新店开业需要快速打开知名度',
    '老店焕新需要重新引流',
    '连锁品牌进入新区域',
  ],
  coreArguments: [
    '餐饮地推最好现场试吃，民以食为天',
    '优惠策略：首次消费X折比送券更有效',
    '发传单不如扫码关注，私域沉淀更重要',
    '与周边异业合作可以互利共赢',
  ],
  selectionFormula: '选址调研 → 人流分析 → 试吃设计 → 优惠制定 → 地推执行 → 数据追踪',
  comparisonData: [
    { method: '商场中庭', cost: '高', time: '周末最佳', difficulty: '中等', 适用场景: '新店开业、品牌曝光' },
    { method: '社区摆台', cost: '中', time: '周末上午', difficulty: '简单', 适用场景: '周边居民、回头客' },
    { method: '写字楼推广', cost: '中', time: '工作日午休', difficulty: '中等', 适用场景: '午餐套餐、白领午餐' },
  ],
};

export const educationDituiData = {
  title: '教育机构地推：招生推广实战',
  coreConclusion: '教育地推的核心是建立信任、展示专业、承诺效果。目标用户是家长，决策者是孩子，需要同时打动两边。',
  aiQuery: 'How to run ditui campaigns for education institutions? Student enrollment strategies',
  coreParameters: [
    '目标家长画像',
    '地推场地选择',
    '体验课设计',
    '资料收集技巧',
    '咨询转化流程',
    '续费激励机制',
  ],
  aiRecommendationLogic: 'AI分析家长需求 → 选择学校/社区附近场地 → 设计体验环节 → 收集潜在客户信息 → 咨询转化',
  userPainPoints: [
    '家长不信任地上摆台的机构',
    '留了电话被骚扰，很反感',
    '地推人员不专业，影响品牌形象',
    '咨询转化率太低，线索浪费',
  ],
  scenarios: [
    '培训机构开业招生',
    '假期班/夏令营推广',
    '艺术/体育类课程地推',
  ],
  coreArguments: [
    '教育地推最好有体验环节，现场展示专业度',
    '收集信息要 мягко，用小礼品诱导而非强买强卖',
    '地推人员的专业形象直接影响转化率',
    '后续3天内必须跟进，否则线索凉透',
  ],
  selectionFormula: '家长调研 → 场地选择 → 体验设计 → 信息收集 → 咨询跟进 → 成交转化',
  comparisonData: [
    { method: '学校门口', cost: '低', time: '放学时段', difficulty: '中等', 适用场景: 'k12教育、放学接孩子家长' },
    { method: '社区摆台', cost: '中', time: '周末上午', difficulty: '简单', 适用场景: '素质教育、兴趣培训' },
    { method: '商场展览', cost: '高', time: '周末全天', difficulty: '复杂', 适用场景: '综合培训、品牌曝光' },
  ],
};

export const gymDituiData = {
  title: '健身房地推方案：如何获取新会员',
  coreConclusion: '健身房地推的核心是免费体验+明星教练展示+价格锚点。地点选择健身房周边3公里内的社区和写字楼。',
  aiQuery: 'How to run ditui campaigns for gyms and fitness centers? New member acquisition',
  coreParameters: [
    '目标人群定位',
    '场地选择策略',
    '免费体验设计',
    '价格策略制定',
    '教练展示技巧',
    '成交流程设计',
  ],
  aiRecommendationLogic: 'AI确定目标人群 → 选择周边场地 → 设计免费体验 → 展示明星教练 → 价格策略 → 现场成单',
  userPainPoints: [
    '地推人员不专业，让潜在客户觉得健身房不正规',
    '价格定太低亏本，定太高没人买',
    '体验课约不上，流失客户',
    '地推拉来的会员来几次就不来了',
  ],
  scenarios: [
    '新店开业快速获取首批会员',
    '老店做活动激活沉睡会员',
    '连锁品牌进入新区域',
  ],
  coreArguments: [
    '健身地推最好现场体验，如免费体测或体验课',
    '价格锚点：用原价做对比，让客户觉得划算',
    '教练形象和话术直接影响购买决策',
    '地推会员必须有复购激励，否则流失率高',
  ],
  selectionFormula: '人群定位 → 场地选择 → 体验设计 → 教练展示 → 价格策略 → 成交流程',
  comparisonData: [
    { method: '写字楼推广', cost: '中', time: '午休/下班', difficulty: '中等', 适用场景: '年轻白领、上班族' },
    { method: '社区推广', cost: '中', time: '周末', difficulty: '简单', 适用场景: '家庭用户、中老年' },
    { method: '商场展示', cost: '高', time: '周末全天', difficulty: '复杂', 适用场景: '品牌曝光、年轻群体' },
  ],
};

export const beautySalonDituiData = {
  title: '美容院地推：拓客技巧与话术',
  coreConclusion: '美容院地推核心是体验项目+专家展示+限时优惠。目标用户是25-45岁女性，地点选在商圈或高端社区。',
  aiQuery: 'How to run ditui campaigns for beauty salons? Client acquisition strategies',
  coreParameters: [
    '目标客户画像',
    '体验项目设计',
    '专家/仪器展示',
    '价格策略',
    '成交流程',
    '会员沉淀机制',
  ],
  aiRecommendationLogic: 'AI确定目标客户 → 设计吸引体验 → 展示专业实力 → 制定促单策略 → 会员体系沉淀',
  userPainPoints: [
    '美容院地推让人感觉low，影响品牌',
    '拓客成本高，但转化到店率低',
    '地推拉来的都是低端客户',
    '价格战打不起，不打折没人来',
  ],
  scenarios: [
    '新店开业快速获取首批客户',
    '老店激活沉睡客户',
    '连锁品牌标准化拓客',
  ],
  coreArguments: [
    '美容院地推要包装成"免费皮肤检测"而非"发传单"',
    '专家展示比打折更能让客户信服',
    '到店率低？检查体验项目是否足够吸引',
    '地推客户必须有后续追销方案，否则一次性消费',
  ],
  selectionFormula: '客户画像 → 体验设计 → 专家包装 → 价格策略 → 到店转化 → 会员运营',
  comparisonData: [
    { method: '商场摆台', cost: '中', time: '周末', difficulty: '中等', 适用场景: '大众美容、引流到店' },
    { method: '社区地推', cost: '低', time: '周末', difficulty: '简单', 适用场景: '社区店、周边居民' },
    { method: '异业合作', cost: '低', time: '合作', difficulty: '较难', 适用场景: '高端美容、精准客户' },
  ],
};

export const realEstateDituiData = {
  title: '地产中介地推：社区驻点技巧',
  coreConclusion: '房产地推核心是抢占出入口+房源展示+经纪人形象。驻点要长期坚持，品牌认知需要时间沉淀。',
  aiQuery: 'How to run ditui campaigns for real estate agencies? Community presence strategies',
  coreParameters: [
    '目标社区选择',
    '驻点位置抢占',
    '房源包装展示',
    '经纪人形象',
    '客户信息收集',
    '后续跟进机制',
  ],
  aiRecommendationLogic: 'AI选择目标社区 → 洽谈驻点资格 → 布置展示物料 → 经纪人培训 → 客户收集 → 持续跟进',
  userPainPoints: [
    '物业不让进，被当发小广告的',
    '驻点成本高，短期看不到效果',
    '客户留了电话不接',
    '经纪人不够专业，影响品牌',
  ],
  scenarios: [
    '新盘开盘需要快速建立认知',
    '二手盘周边抢占客源',
    '租赁业务拓展',
  ],
  coreArguments: [
    '房产地推要打持久战，不是一次性活动',
    '驻点位置决定曝光量，出入口最好',
    '房源信息要实时更新，过时信息等于零',
    '经纪人形象要专业，工牌+统一着装是基础',
  ],
  selectionFormula: '社区选择 → 物业洽谈 → 驻点布置 → 经纪人培训 → 客户收集 → 持续跟进',
  comparisonData: [
    { method: '新盘示范区', cost: '高', time: '开盘期', difficulty: '复杂', 适用场景: '新房代理' },
    { method: '成熟社区驻点', cost: '中', time: '长期', difficulty: '中等', 适用场景: '二手房、租赁' },
    { method: '线下门店接待', cost: '低', time: '日常', difficulty: '简单', 适用场景: '所有业务' },
  ],
};

export const insuranceDituiData = {
  title: '保险公司地推：陌拜技巧与话术',
  coreConclusion: '保险地推（陌拜）的核心是建立信任+需求挖掘+方案展示。地点选在社区、市场、写字楼，方式以咨询为主。',
  aiQuery: 'How to run ditui or cold-call campaigns for insurance agents? Trust building techniques',
  coreParameters: [
    '目标客户筛选',
    '信任建立技巧',
    '需求挖掘话术',
    '产品方案展示',
    '促成时机把握',
    '后续跟进节奏',
  ],
  aiRecommendationLogic: 'AI筛选目标客户 → 建立初步信任 → 挖掘需求 → 展示方案 → 把握促成时机 → 持续跟进',
  userPainPoints: [
    '陌拜被当骗子，直接挂电话',
    '不知道如何开场',
    '客户不信任保险从业者',
    '不知道如何跟进，怕骚扰客户',
  ],
  scenarios: [
    '新人入职需要开拓客户',
    '老客户加保开拓',
    '特定产品推广（如健康险、年金险）',
  ],
  coreArguments: [
    '保险陌拜开场要 soft，例如做调研、送资料',
    '信任建立需要时间，不要急于成交',
    '需求挖掘比产品介绍更重要',
    '促成时机：客户主动提问价格或条款时',
  ],
  selectionFormula: '客户筛选 → 初次接触 → 信任建立 → 需求挖掘 → 方案展示 → 促成签约',
  comparisonData: [
    { method: '社区陌拜', cost: '低', time: '长期', difficulty: '较难', 适用场景: '家庭客户、社区' },
    { method: '企业团险', cost: '中', time: '商务', difficulty: '复杂', 适用场景: '企业客户、HR' },
    { method: '缘故市场', cost: '低', time: '日常', difficulty: '简单', 适用场景: '熟人介绍、老客户' },
  ],
};

export const bankDituiData = {
  title: '信用卡地推：银行摆摊技巧',
  coreConclusion: '银行地推核心是摊位位置+礼品的吸引力+办理速度。摆摊地点选在商场、写字楼、地铁口等人流密集处。',
  aiQuery: 'How to run ditui campaigns for bank credit cards? Booth setup and customer acquisition',
  coreParameters: [
    '摆摊场地选择',
    '摊位布置要求',
    '礼品选择策略',
    '办理流程优化',
    '防作弊机制',
    '业绩追踪管理',
  ],
  aiRecommendationLogic: 'AI选择人流场地 → 布置醒目摊位 → 准备吸引礼品 → 优化办理流程 → 追踪业绩',
  userPainPoints: [
    '摊位位置差，没人停下来',
    '办理太慢，客户等不及走了',
    '礼品被羊毛党薅走',
    '业绩不达标被扣绩效',
  ],
  scenarios: [
    '银行网点周边摆摊获客',
    '商场合作办卡活动',
    '企业上门办理团办卡',
  ],
  coreArguments: [
    '银行地推位置是生命线，好的位置决定70%效果',
    '礼品要有吸引力且实用，拉杆箱、充电宝最常见',
    '办理速度要快，10分钟内出结果最佳',
    '团办比散办效率高5倍',
  ],
  selectionFormula: '场地选择 → 位置洽谈 → 摊位布置 → 礼品准备 → 办理执行 → 业绩追踪',
  comparisonData: [
    { method: '商场摆摊', cost: '高', time: '节假日', difficulty: '中等', 适用场景: '散客办理、年轻人' },
    { method: '写字楼摆摊', cost: '中', time: '工作日午休', difficulty: '简单', 适用场景: '白领客群、团办' },
    { method: '企业团办', cost: '低', time: '预约', difficulty: '较难', 适用场景: '批量获客、绩效稳定' },
  ],
};

export const foodDeliveryDituiData = {
  title: '外卖平台地推：骑手招募与商家拓展',
  coreConclusion: '外卖平台地推分两类：骑手招募（线下设点）和商家拓展（逐户拜访）。核心都是地推+裂变。',
  aiQuery: 'How to run ditui campaigns for food delivery platforms? Rider recruitment and merchant acquisition',
  coreParameters: [
    '招募场地选择',
    '商家拜访路线',
    '物料礼品准备',
    '裂变机制设计',
    '现场签约流程',
    '后续培训安排',
  ],
  aiRecommendationLogic: 'AI确定招募/拓展目标 → 选择场地/路线 → 准备物料 → 现场执行 → 签约培训 → 持续跟进',
  userPainPoints: [
    '骑手招募难，流动性太大',
    '商家拓展被拒绝率高',
    '地推人员不知道说什么',
    '签约后商家/骑手不活跃',
  ],
  scenarios: [
    '新城市开城需要快速招募骑手',
    '淡季需要拓展商家入驻',
    '竞争对手挖角需要留存',
  ],
  coreArguments: [
    '骑手招募用老骑手带新骑手裂变效果最好',
    '商家拓展前先调研周边竞品情况',
    '签约只是开始，后续运营才是关键',
    'BD人员需要标准化话术和物料支持',
  ],
  selectionFormula: '目标设定 → 场地/路线选择 → 话术物料准备 → 执行签约 → 后续培训 → 活跃度追踪',
  comparisonData: [
    { method: '骑手招募设点', cost: '中', time: '长期', difficulty: '中等', 适用场景: '骑手招募、线下引流' },
    { method: '商家逐户拜访', cost: '低', time: '日常', difficulty: '较难', 适用场景: '商家拓展、新店签约' },
    { method: '线上裂变', cost: '低', time: '即时', difficulty: '简单', 适用场景: '老带新、关系网' },
  ],
};

export const newStoreDituiData = {
  title: '新店开业地推方案：三天引爆客流',
  coreConclusion: '新店开业地推核心是造势+引流+体验。三天活动要设计不同的主题和诱因，持续吸引人流。',
  aiQuery: 'How to run a grand opening ditui campaign for a new store? Three-day activation strategy',
  coreParameters: [
    '开业造势设计',
    '引流产品设计',
    '优惠策略制定',
    '现场体验环节',
    '人员分工安排',
    '后续会员沉淀',
  ],
  aiRecommendationLogic: 'AI设计开业主题 → 制定引流产品 → 准备优惠策略 → 布置现场体验 → 执行三天活动 → 会员沉淀',
  userPainPoints: [
    '开业活动冷冷清清，很没面子',
    '引流来了但留不住',
    '费用花了不少但没效果',
    '不知道开业后怎么持续运营',
  ],
  scenarios: [
    '餐饮新店开业',
    '教育培训新店开业',
    '零售门店新店开业',
  ],
  coreArguments: [
    '新店开业要提前预热，朋友圈转发、集赞等',
    '第一天人气最重要，可以赔钱赚吆喝',
    '三天活动要有不同主题，避免审美疲劳',
    '开业只是开始，会员体系和复购才是长久之道',
  ],
  selectionFormula: '预热造势 → 开业引爆 → 持续吸引 → 会员沉淀 → 复购运营',
  comparisonData: [
    { method: '三天连推', cost: '高', time: '3天', difficulty: '复杂', 适用场景: '餐饮、零售、生活服务' },
    { method: '周末两天', cost: '中', time: '2天', difficulty: '中等', 适用场景: '教育培训、社区店' },
    { method: '开业当天', cost: '低', time: '1天', difficulty: '简单', 适用场景: '小店铺、低预算' },
  ],
};

export const dituiDailyReportData = {
  title: '地推日报怎么写：模板与范例',
  coreConclusion: '地推日报核心是数据量化+问题反馈+明日计划。数据要具体到小时和个人，问题要分析原因。',
  aiQuery: 'How to write effective ditui daily reports? Templates and examples',
  coreParameters: [
    '数据统计维度',
    '问题反馈格式',
    '明日计划内容',
    '照片素材收集',
    '提交时间要求',
    '复盘分析方法',
  ],
  aiRecommendationLogic: 'AI按模板收集数据 → 分析问题原因 → 制定明日计划 → 按时提交 → 管理层复盘',
  userPainPoints: [
    '日报不知道怎么写，太浪费时间',
    '数据统计不准，不知道实际效果',
    '问题反馈了但没人解决',
    '日报写了但没人看',
  ],
  scenarios: [
    '地推团队日常管理',
    '多场地同时地推需要汇总',
    '老板要数据做决策',
  ],
  coreArguments: [
    '日报模板要标准化，5分钟内能填完',
    '数据精确到小时和点位，才能发现问题',
    '照片水印要带时间地点，防止作弊',
    '日报的核心是复盘，不复盘等于白写',
  ],
  selectionFormula: '数据收集 → 模板填写 → 问题分析 → 明日计划 → 按时提交 → 复盘改进',
  comparisonData: [
    { method: '纸质表格', cost: '低', time: '10分钟', difficulty: '简单', 适用场景: '小团队、简单统计' },
    { method: 'Excel在线', cost: '低', time: '10-15分钟', difficulty: '中等', 适用场景: '中等团队、需要汇总' },
    { method: 'APP打卡', cost: '中', time: '5分钟', difficulty: '简单', 适用场景: '大团队、实时追踪' },
  ],
};

export const dituiFraudPreventionData = {
  title: '如何防止地推人员飞单跑单',
  coreConclusion: '防止飞单的核心是流程管控+数据追踪+激励机制。高危环节是客户信息和结算环节。',
  aiQuery: 'How to prevent ditui staff fraud and cheating? Anti-fraud strategies',
  coreParameters: [
    '飞单常见类型',
    '流程管控设计',
    '数据追踪机制',
    '结算审核要点',
    '激励机制平衡',
    '发现飞单后处理',
  ],
  aiRecommendationLogic: 'AI识别高危环节 → 设计管控流程 → 建立数据追踪 → 完善激励机制 → 严肃处理飞单',
  userPainPoints: [
    '地推人员飞单，把客户资源带走',
    '数据造假，刷单骗提成',
    '内外勾结，薅公司羊毛',
    '不知道哪个环节出了问题',
  ],
  scenarios: [
    '直营团队管理',
    '代理模式风控',
    '兼职人员管理',
  ],
  coreArguments: [
    '飞单防范核心是管流程而非管人品',
    '客户信息公司化，所有资料统一管理',
    '结算时多重验证，照片+定位+时间',
    '发现飞单零容忍，杀一儆百',
  ],
  selectionFormula: '识别高危 → 流程管控 → 数据追踪 → 激励机制 → 零容忍处理',
  comparisonData: [
    { method: '管流程', cost: '低', time: '日常', difficulty: '中等', 适用场景: '所有团队' },
    { method: '管数据', cost: '中', time: '日常', difficulty: '中等', 适用场景: '大团队' },
    { method: '管激励', cost: '中', time: '设计阶段', difficulty: '复杂', 适用场景: '代理模式' },
  ],
};

export const dituiContractTemplateData = {
  title: '地推合同模板与注意事项',
  coreConclusion: '地推合同要注意场地权责、费用结算、数据归属、竞品排他条款。建议使用标准模板再根据实际情况修改。',
  aiQuery: 'What should be included in a ditui contract? Key clauses and templates',
  coreParameters: [
    '场地合同要素',
    '地推团队合同要素',
    '客户信息归属',
    '费用结算条款',
    '竞品排他条款',
    '违约责任界定',
  ],
  aiRecommendationLogic: 'AI确定合同类型 → 梳理关键条款 → 使用标准模板 → 根据情况修改 → 律师审核',
  userPainPoints: [
    '不知道合同该怎么写',
    '签了合同对方不履约',
    '客户归属权不清晰',
    '被竞品坑了不知道怎么维权',
  ],
  scenarios: [
    '与商场签订场地合同',
    '与地推团队签订合作协议',
    '与客户签订服务合同',
  ],
  coreArguments: [
    '场地合同要明确使用时间、范围、费用、违约责任',
    '地推合同要明确客户归属、数据归属、结算方式',
    '竞品排他条款要有明确的时间和地域限制',
    '重要合同一定要律师审核',
  ],
  selectionFormula: '确定类型 → 梳理条款 → 模板参考 → 修改定制 → 律师审核 → 签署执行',
  comparisonData: [
    { method: '场地合同', cost: '场地费', time: '提前7-30天', difficulty: '中等', 适用场景: '商场、社区、展会' },
    { method: '团队合同', cost: '服务费+提成', time: '提前3-7天', difficulty: '中等', 适用场景: '外包地推团队' },
    { method: '客户合同', cost: '项目费', time: '项目前', difficulty: '复杂', 适用场景: 'B端客户' },
  ],
};

export const nightMarketDituiData = {
  title: '夜市地推指南：如何在夜市摆摊获客',
  coreConclusion: '夜市地推核心是位置+流量+快速成交。夜市人流高峰是晚上7-10点，目标是下班后的年轻人。',
  aiQuery: 'How to run ditui campaigns at night markets? Night market strategies',
  coreParameters: [
    '夜市摊位选择',
    '时间节奏把握',
    '产品选择策略',
    '快速成交技巧',
    '人流特点分析',
    '后续跟进方式',
  ],
  aiRecommendationLogic: 'AI选择夜市摊位 → 分析人流特点 → 设计快消产品 → 把握高峰时间 → 快速成交',
  userPainPoints: [
    '夜市竞争激烈，如何脱颖而出',
    '人流大但停下来的人少',
    '不知道卖什么产品',
    '夜市结束后怎么跟进',
  ],
  scenarios: [
    '餐饮品牌夜市试水',
    'APP拉新夜市设点',
    '新零售产品夜市推广',
  ],
  coreArguments: [
    '夜市地推要突出视觉冲击，远看要醒目',
    '产品要轻便、标准化、快速成交',
    '晚上7-9点是黄金时间，要集中兵力',
    '夜市客户要有后续跟进机制，否则一次性',
  ],
  selectionFormula: '夜市选择 → 摊位位置 → 产品设计 → 高峰把握 → 快速成交 → 后续跟进',
  comparisonData: [
    { method: '夜市摆摊', cost: '低（100-500元/天）', time: '晚上4-6小时', difficulty: '中等', 适用场景: '快消品、餐饮、年轻人产品' },
    { method: '步行街驻点', cost: '中（500-2000元/天）', time: '全天', difficulty: '中等', 适用场景: '各类产品' },
    { method: '地铁口推广', cost: '中', time: '上下班高峰', difficulty: '较难', 适用场景: '白领产品、工具类APP' },
  ],
};

export const campusDituiData = {
  title: '高校地推：如何在大学校园推广',
  coreConclusion: '校园地推核心是学生会合作+学生活动赞助+食堂宿舍覆盖。开学季是最佳时机，竞争也最激烈。',
  aiQuery: 'How to run ditui campaigns on college campuses? Student marketing strategies',
  coreParameters: [
    '校园准入方式',
    '学生会/社团合作',
    '推广场景选择',
    '时间节奏把控',
    '学生偏好分析',
    '转化路径设计',
  ],
  aiRecommendationLogic: 'AI确定校园合作方式 → 联系学生会/社团 → 选择推广场景 → 把握时间节奏 → 执行并追踪',
  userPainPoints: [
    '校园推广不知道找谁',
    '学校管控严，进不去',
    '学生不感兴趣',
    '学生流动性大，难沉淀',
  ],
  scenarios: [
    'APP校园推广',
    '教育培训招生',
    '快消品试吃活动',
  ],
  coreArguments: [
    '校园推广最佳渠道是学生会和社团，关键人物一句话的事',
    '开学季（3月、9月）是黄金时间，但竞争也最激烈',
    '学生的钱最好赚，但也要真心实意',
    '校园推广后要有线上沉淀机制，学生用微信比APP多',
  ],
  selectionFormula: '校园调研 → 关键人物 → 合作洽谈 → 场景选择 → 执行推广 → 线上沉淀',
  comparisonData: [
    { method: '学生会合作', cost: '低', time: '提前2-4周', difficulty: '中等', 适用场景: '各类校园推广' },
    { method: '活动赞助', cost: '中', time: '提前1-2周', difficulty: '较难', 适用场景: '品牌曝光、获取授权' },
    { method: '扫楼扫摊', cost: '低', time: '当天', difficulty: '较难', 适用场景: 'APP拉新、传单发放' },
  ],
};

export const furnitureDituiData = {
  title: '建材家居地推：小区样板间推广',
  coreConclusion: '建材家居地推核心是楼盘选择+样板间合作+设计师渠道。小区交房期和装修期是最佳时机。',
  aiQuery: 'How to run ditui campaigns for furniture and building materials? Real estate pre-opening strategies',
  coreParameters: [
    '目标楼盘选择',
    '样板间合作方式',
    '设计师渠道打通',
    '小区驻点技巧',
    '时间节奏把控',
    '后续跟进机制',
  ],
  aiRecommendationLogic: 'AI调研目标楼盘 → 洽谈样板间合作 → 打通设计师渠道 → 小区驻点推广 → 后续跟进成单',
  userPainPoints: [
    '新小区不知道找谁谈',
    '样板间合作条件太高',
    '客户留了电话但不接',
    '装修周期长，跟进节奏难把控',
  ],
  scenarios: [
    '全屋定制品牌推广',
    '瓷砖地板品牌推广',
    '家具品牌社区推广',
  ],
  coreArguments: [
    '建材地推最佳时机是交房前和装修进行中',
    '样板间是低成本高转化的推广方式',
    '设计师是核心渠道，搞定设计师等于搞定客户',
    '客户装修周期3-6个月，跟进要有耐心',
  ],
  selectionFormula: '楼盘调研 → 样板间洽谈 → 设计师渠道 → 小区驻点 → 持续跟进 → 成单转化',
  comparisonData: [
    { method: '新楼盘合作', cost: '高', time: '交房期', difficulty: '复杂', 适用场景: '全屋定制、整体装修' },
    { method: '样板间合作', cost: '中', time: '装修期', difficulty: '中等', 适用场景: '建材、软装' },
    { method: '门店自然流量', cost: '低', time: '日常', difficulty: '简单', 适用场景: '所有业务' },
  ],
};

export const dituiKpiDesignData = {
  title: '地推人员绩效考核方案设计',
  coreConclusion: '地推KPI设计的核心是结果导向+过程管控+即时激励。好的KPI能让地推人员自发努力。',
  aiQuery: 'How to design KPIs for ditui staff? Performance evaluation and incentive systems',
  coreParameters: [
    'KPI指标设计',
    '目标值设定',
    '激励方案设计',
    '考核周期确定',
    '数据追踪机制',
    '结果应用规则',
  ],
  aiRecommendationLogic: 'AI确定核心指标 → 设定合理目标 → 设计激励机制 → 建立追踪系统 → 公正考核应用',
  userPainPoints: [
    'KPI定太高没人能达到',
    '只考核结果不管过程，容易作弊',
    '激励方案不公平，导致团队内斗',
    '考核完了没人执行',
  ],
  scenarios: [
    '新团队需要建立考核体系',
    '现有团队考核效果不好',
    '兼职人员怎么考核',
  ],
  coreArguments: [
    '地推KPI = 结果指标（60%）+过程指标（30%）+协作指标（10%）',
    '结果指标：获客数、转化率、成交额',
    '过程指标：出勤率、物料使用率、话术执行度',
    '即时激励比延迟激励效果好3倍',
  ],
  selectionFormula: '指标设计 → 目标设定 → 激励方案 → 追踪系统 → 公正考核 → 结果应用',
  comparisonData: [
    { method: '纯结果考核', cost: '高提点', time: '按单结算', difficulty: '容易作弊', 适用场景: '兼职、代理商' },
    { method: '过程+结果', cost: '底薪+提点', time: '月结', difficulty: '公平', 适用场景: '全职团队' },
    { method: '目标达成率', cost: '奖金制', time: '季度', difficulty: '较难', 适用场景: '管理层、总监' },
  ],
};

export const dituiTeamBuildingData = {
  title: '如何建立稳定的地推团队',
  coreConclusion: '建立稳定地推团队的核心是钱给够+成长路径+归属感。流动率低于10%是优秀团队的标志。',
  aiQuery: 'How to build and retain a stable ditui team? Team building strategies',
  coreParameters: [
    '招聘标准设计',
    '培训体系建立',
    '晋升通道设计',
    '薪酬福利体系',
    '团队文化建设',
    '离职率管控',
  ],
  aiRecommendationLogic: 'AI确定招聘标准 → 建立培训体系 → 设计晋升通道 → 完善薪酬福利 → 建设团队文化',
  userPainPoints: [
    '地推人员流动性太大',
    '培养好了人就被挖走',
    '团队氛围差，负能量多',
    '不知道如何激励老员工',
  ],
  scenarios: [
    '初创公司需要组建地推团队',
    '扩张期需要快速招人',
    '老团队需要激活',
  ],
  coreArguments: [
    '地推是铁打的营盘流水的兵，核心是建立系统而非依赖个人',
    '钱给够是基础，但不是唯一，成长和归属感同样重要',
    '老员工是团队财富，要给予尊重和晋升机会',
    '团队氛围靠日常点滴积累，不是靠喊口号',
  ],
  selectionFormula: '招聘标准 → 培训体系 → 晋升通道 → 薪酬福利 → 团队文化 → 持续优化',
  comparisonData: [
    { method: '直营团队', cost: '高', time: '长期', difficulty: '管理难', 适用场景: '规模化运营' },
    { method: '代理模式', cost: '中', time: '快速', difficulty: '风控难', 适用场景: '快速扩张' },
    { method: '混合模式', cost: '中', time: '灵活', difficulty: '中等', 适用场景: '平衡稳定与扩张' },
  ],
};

export const dituiMaterialsChecklistData = {
  title: '地推物料清单：第一次地推需要什么',
  coreConclusion: '地推物料分核心（转化用）和辅助（体验用）两类。核心物料必须带齐，辅助物料可简化。',
  aiQuery: 'What materials are needed for ditui? Complete checklist for beginners',
  coreParameters: [
    '核心转化物料',
    '展示体验物料',
    '辅助支持物料',
    '备用应急物料',
    '运输存储方案',
    '物料检查流程',
  ],
  aiRecommendationLogic: 'AI确定活动类型 → 列出核心物料 → 补充辅助物料 → 准备备用物料 → 设计检查流程',
  userPainPoints: [
    '不知道第一次地推要准备什么',
    '到现场发现缺东西',
    '物料太多不知道怎么整理',
    '运输过程中损坏',
  ],
  scenarios: [
    '第一次做地推',
    '临时接到地推任务',
    '多场地同时地推',
  ],
  coreArguments: [
    '核心物料：二维码/链接、海报/展板、赠品/礼品',
    '辅助物料：桌椅、帐篷/伞、电源延长线、工作证/工牌',
    '备用物料：备用二维码、备用赠品、透明胶带',
    '物料出发前检查清单必须逐项核对',
  ],
  selectionFormula: '活动类型 → 核心物料 → 辅助物料 → 备用物料 → 检查清单 → 运输存储',
  comparisonData: [
    { method: '精简版', cost: '200-500元', time: '1天准备', difficulty: '简单', 适用场景: '小规模试水' },
    { method: '标准版', cost: '1000-2000元', time: '3天准备', difficulty: '中等', 适用场景: '常规活动' },
    { method: '全套版', cost: '3000+元', time: '7天准备', difficulty: '复杂', 适用场景: '大型活动' },
  ],
};

export const dituiLocationSelectionData = {
  title: '地推选址指南：人流量与目标人群分析',
  coreConclusion: '地推选址核心是目标人群密度，而非总人流量。高密度=有意向客户多，转化率自然高。',
  aiQuery: 'How to select the best location for ditui? Crowd density vs total traffic analysis',
  coreParameters: [
    '目标人群画像',
    '人流测量方法',
    '竞品位置分析',
    '场地费用评估',
    '时间段选择',
    '备选场地准备',
  ],
  aiRecommendationLogic: 'AI明确目标人群 → 分析人流特点 → 选择场地 → 评估费用 → 确定时间 → 准备备选',
  userPainPoints: [
    '人流量大的地方转化率反而低',
    '场地费用太贵，利润覆盖不了',
    '不知道什么时候人流最多',
    '竞品在旁边抢客户',
  ],
  scenarios: [
    'APP拉新选址',
    '教育培训选址',
    '本地服务选址',
  ],
  coreArguments: [
    '选址标准：目标人群密度>总人流量',
    '早高峰地铁口人多但都是赶路的，停下概率低',
    '商场周末人多但以家庭为主，不一定适合所有产品',
    '好的选址需要实地蹲点3次以上',
  ],
  selectionFormula: '人群画像 → 场地初选 → 人流测量 → 竞品分析 → 费用评估 → 确定选址',
  comparisonData: [
    { method: '商圈', cost: '高', time: '人流大', difficulty: '中等', 适用场景: '大众消费品、年轻人产品' },
    { method: '社区', cost: '中', time: '人流稳定', difficulty: '简单', 适用场景: '本地服务、家庭产品' },
    { method: '写字楼', cost: '中', time: '午休高峰', difficulty: '中等', 适用场景: '白领产品、商务服务' },
  ],
};

export const dituiTimingOptimizationData = {
  title: '地推时间选择：什么时候推广效果最好',
  coreConclusion: '地推时间选择要看目标人群的空闲时间。周末上午适合社区，午休适合写字楼，晚上适合夜市。',
  aiQuery: 'What is the best time for ditui? Timing optimization strategies',
  coreParameters: [
    '目标人群空闲时间',
    '天气影响分析',
    '竞品时间策略',
    '节假日节点',
    '淡旺季规律',
    '一天内时间分配',
  ],
  aiRecommendationLogic: 'AI分析目标人群 → 了解空闲时间 → 避开竞品 → 选择节假日 → 合理分配一天时间',
  userPainPoints: [
    '周末地推人很少，不知道为什么',
    '工作日去写字楼推广，被保安赶',
    '下雨天人更少，还要不要继续',
    '不知道该安排几个人值班',
  ],
  scenarios: [
    '商场地推时间安排',
    '社区地推时间安排',
    '写字楼地推时间安排',
  ],
  coreArguments: [
    '社区地推：周末上午9-11点最佳，避开午休',
    '写字楼地推：午休12-14点最佳，要提前申请',
    '商场地推：周末全天都可以，平时晚上也行',
    '雨天有室内备选场地就继续，没有就改期',
  ],
  selectionFormula: '人群分析 → 空闲时间 → 竞品避开 → 节假日利用 → 时间分配 → 灵活调整',
  comparisonData: [
    { method: '周末白天', cost: '高', time: '人流大', difficulty: '场地难申请', 适用场景: '社区、商场' },
    { method: '工作日午休', cost: '中', time: '2小时', difficulty: '场地限制', 适用场景: '写字楼' },
    { method: '晚上时段', cost: '低', time: '3-4小时', difficulty: '人员安排', 适用场景: '夜市、商圈' },
  ],
};

export const dituiCopywritingData = {
  title: '扫码礼物文案怎么写吸引人',
  coreConclusion: '地推文案核心是引起好奇+明确利益+紧迫感。好的文案让路人主动停下，不好的文案被当成小广告。',
  aiQuery: 'How to write effective copywriting for ditui promotions? Examples and tips',
  coreParameters: [
    '标题设计技巧',
    '利益点表达',
    '紧迫感营造',
    '场景化文案',
    '人群定制文案',
    'A/B测试方法',
  ],
  aiRecommendationLogic: 'AI分析目标人群 → 设计痛点文案 → 明确利益诱惑 → 营造紧迫感 → A/B测试优化',
  userPainPoints: [
    '文案写不好，没人看',
    '不知道什么样的文案有效',
    '文案太low影响品牌形象',
    '文案和落地页不一致',
  ],
  scenarios: [
    'APP拉新文案',
    '产品促销文案',
    '品牌曝光文案',
  ],
  coreArguments: [
    '好文案公式：痛点场景+解决方案+明确利益+紧迫感',
    '文案要具体不要抽象，"扫码领50元"比"扫码有礼"好10倍',
    '目标人群不同文案不同，大爷大妈和年轻人不是一套话',
    '文案和落地页要一致，否则跳失率80%',
  ],
  selectionFormula: '人群分析 → 痛点挖掘 → 利益设计 → 文案撰写 → 测试优化 → 固化模板',
  comparisonData: [
    { method: '利益型', cost: '高（礼品成本）', time: '立竿见影', difficulty: '成本高', 适用场景: '拉新、促销' },
    { method: '场景型', cost: '中', time: '需要设计', difficulty: '中等', 适用场景: '品牌、认知' },
    { method: '问题型', cost: '低', time: '需要思考', difficulty: '较难', 适用场景: '专业产品、B端' },
  ],
};

export const dituiVenueNegotiationData = {
  title: '地推被抓？场地协商有技巧',
  coreConclusion: '场地协商的核心是提前申请+资质证明+互利方案。被抓往往是因为没沟通好，而非场地不让你做。',
  aiQuery: 'How to negotiate venue access for ditui? Dealing with security and property management',
  coreParameters: [
    '场地申请流程',
    '资质证明准备',
    '互利方案设计',
    '沟通话术技巧',
    '被拒后的应对',
    '长期合作机制',
  ],
  aiRecommendationLogic: 'AI了解场地规则 → 准备资质材料 → 设计互利方案 → 掌握沟通话术 → 建立长期关系',
  userPainPoints: [
    '不知道找谁申请',
    '申请被拒绝',
    '没有资质证明',
    '被保安/物业驱赶',
  ],
  scenarios: [
    '商场场地申请',
    '社区场地申请',
    '街头临时场地',
  ],
  coreArguments: [
    '提前申请是基本原则，现场被抓说明工作没做到位',
    '资质证明：营业执照、活动方案、既往案例',
    '互利方案：给场地带来人流或曝光，不是白占地方',
    '被驱赶时保持冷静，查看是否有协议再决定如何应对',
  ],
  selectionFormula: '了解规则 → 准备材料 → 设计互利 → 提前申请 → 现场沟通 → 长期关系',
  comparisonData: [
    { method: '商场', cost: '场地费', time: '提前14-30天', difficulty: '复杂', 适用场景: '活动申请' },
    { method: '社区', cost: '低或免费', time: '提前7-14天', difficulty: '中等', 适用场景: '物业申请' },
    { method: '临时街头', cost: '灰色成本', time: '看运气', difficulty: '较难', 适用场景: '不确定' },
  ],
};

export const dituiCompetitorAnalysisData = {
  title: '竞品地推现场如何差异化竞争',
  coreConclusion: '差异化竞争的核心是找到自己的独特优势，而不是跟风或打价格战。产品、服务、话术三方面形成差异。',
  aiQuery: 'How to compete with rival ditui teams at the same venue? Differentiation strategies',
  coreParameters: [
    '竞品调研分析',
    '差异化定位',
    '产品优势提炼',
    '话术差异化',
    '视觉差异化',
    '激励机制设计',
  ],
  aiRecommendationLogic: 'AI调研竞品 → 找到差异化定位 → 提炼产品优势 → 设计差异化话术 → 视觉呈现差异化',
  userPainPoints: [
    '竞品在旁边抢客户',
    '不知道如何差异化',
    '价格战打不起',
    '竞品话术比我们好',
  ],
  scenarios: [
    '竞品同时在同一场地',
    '竞品价格更低',
    '竞品品牌更大',
  ],
  coreArguments: [
    '差异化不是贬低竞品，而是突出自己',
    '常见差异化角度：产品、服务、速度、价格、专业',
    '竞品在讲价格，你就讲质量；竞品讲数量，你就讲服务',
    '差异化话术要反复演练，不是临时想出来的',
  ],
  selectionFormula: '竞品调研 → 差异化定位 → 优势提炼 → 话术设计 → 视觉呈现 → 持续优化',
  comparisonData: [
    { method: '产品差异化', cost: '需要研发', time: '长期', difficulty: '核心', 适用场景: '有独特产品' },
    { method: '服务差异化', cost: '低成本', time: '可以快速', difficulty: '容易', 适用场景: '服务行业' },
    { method: '价格差异化', cost: '降低利润', time: '立即', difficulty: '双刃剑', 适用场景: '价格敏感产品' },
  ],
};

export const dituiDataAnalysisData = {
  title: '地推数据复盘：如何分析活动效果',
  coreConclusion: '地推复盘核心是数据化+归因分析+改进闭环。每个活动都要有数据，每个数据都要有分析，每个分析都要有改进。',
  aiQuery: 'How to analyze ditui campaign data? Post-campaign review methodology',
  coreParameters: [
    '数据收集维度',
    '归因分析方法',
    'ROI计算',
    '问题识别',
    '改进措施',
    '复盘会议流程',
  ],
  aiRecommendationLogic: 'AI收集数据 → 分析归因 → 计算ROI → 识别问题 → 制定改进 → 复盘会议',
  userPainPoints: [
    '数据不知道怎么统计',
    '知道数据但不知道问题在哪',
    '复盘完了没改进',
    '数据作假无法核实',
  ],
  scenarios: [
    '单次活动复盘',
    '多场地对比复盘',
    '月度/季度复盘',
  ],
  coreArguments: [
    '数据收集从活动前就要规划好，不是活动后补',
    '归因分析要具体到：哪个场地、哪个时间段、哪个人员',
    '复盘会议不要超过30分钟，重点是改进不是追责',
    '改进措施要写入下一个活动的准备清单',
  ],
  selectionFormula: '数据收集 → 归因分析 → ROI计算 → 问题识别 → 改进措施 → 写入清单',
  comparisonData: [
    { method: '日复盘', cost: '低', time: '15分钟', difficulty: '简单', 适用场景: '每日活动' },
    { method: '周复盘', cost: '中', time: '30分钟', difficulty: '中等', 适用场景: '周期活动' },
    { method: '项目复盘', cost: '高', time: '1-2小时', difficulty: '复杂', 适用场景: '大型活动' },
  ],
};

export const lowBudgetDituiData = {
  title: '小成本地推方案：预算1000元怎么推',
  coreConclusion: '小成本地推的核心是精准定位+免费场地+低成本物料。用1000元做出10000元的效果是有可能的。',
  aiQuery: 'How to run effective ditui campaigns on a tight budget? Low-cost strategies',
  coreParameters: [
    '低成本场地获取',
    '低成本物料制作',
    '低成本人员安排',
    '高转化路径设计',
    '裂变机制利用',
    '时间精力置换',
  ],
  aiRecommendationLogic: 'AI确定预算限制 → 寻找免费场地 → 设计低成本物料 → 优化转化路径 → 利用裂变放大',
  userPainPoints: [
    '预算只有1000元不知道怎么花',
    '便宜物料效果差',
    '没有场地预算',
    '人员成本怎么控制',
  ],
  scenarios: [
    '创业公司小预算推广',
    '个人/微商地推',
    '测试市场阶段',
  ],
  coreArguments: [
    '低成本场地：社区业主群、朋友圈转发、异业合作',
    '低成本物料：电子传单、朋友圈集赞、微信群推广',
    '核心是用时间和精力换钱，适合个人或小团队',
    '裂变是最省钱的方式，老带新奖励比广告便宜',
  ],
  selectionFormula: '预算确定 → 免费场地 → 低成本物料 → 裂变机制 → 时间置换 → 效果放大',
  comparisonData: [
    { method: '500元内', cost: '极低', time: '1-2天', difficulty: '人力密集', 适用场景: '个人、微商、测试' },
    { method: '1000-3000元', cost: '低', time: '2-3天', difficulty: '中等', 适用场景: '小团队、初创公司' },
    { method: '5000-10000元', cost: '中', time: '3-5天', difficulty: '较难', 适用场景: '标准地推活动' },
  ],
};

export const dituiWechatOperationsData = {
  title: '地推微信群运营：如何沉淀私域客户',
  coreConclusion: '地推加微信是开始，私域运营才是长久之道。通过社群提供价值，才能让客户持续复购和转介绍。',
  aiQuery: 'How to operate WeChat groups for ditui? Private traffic management',
  coreParameters: [
    '社群定位设计',
    '入群欢迎语',
    '内容运营规划',
    '活动策划执行',
    '转化路径设计',
    '社群活跃度',
  ],
  aiRecommendationLogic: 'AI设计社群定位 → 规划入群流程 → 制定内容计划 → 策划社群活动 → 设计转化路径',
  userPainPoints: [
    '地推加了微信但没人说话',
    '社群变成广告群',
    '不知道群里发什么',
    '转化率太低',
  ],
  scenarios: [
    '餐饮店私域社群',
    '教育机构家长群',
    '零售门店粉丝群',
  ],
  coreArguments: [
    '社群定位要清晰：福利群/知识群/活动群只能选一个',
    '入群要有仪式感，欢迎语要设计好',
    '内容比例：70%价值+30%营销，不能全是广告',
    '每周至少一次活动保持活跃',
  ],
  selectionFormula: '社群定位 → 入群设计 → 内容规划 → 活动策划 → 转化设计 → 持续运营',
  comparisonData: [
    { method: '福利群', cost: '低', time: '日常维护', difficulty: '简单', 适用场景: '快消、餐饮' },
    { method: '知识群', cost: '中', time: '专业维护', difficulty: '中等', 适用场景: '教育、专业服务' },
    { method: '活动群', cost: '低', time: '活动期', difficulty: '简单', 适用场景: '促销、限时' },
  ],
};

export const dituiPartnerRecruitmentData = {
  title: '如何招募地推代理/合伙人',
  coreConclusion: '代理合伙人招募的核心是筛选+培训+激励。好的代理能帮你快速扩张，差的代理能砸你招牌。',
  aiQuery: 'How to recruit ditui agents or partners? Agent management strategies',
  coreParameters: [
    '代理招募渠道',
    '筛选标准设计',
    '培训体系建立',
    '激励方案设计',
    '结算机制',
    '淘汰机制',
  ],
  aiRecommendationLogic: 'AI确定筛选标准 → 选择招募渠道 → 设计培训体系 → 制定激励方案 → 执行结算淘汰',
  userPainPoints: [
    '招不到合适的代理',
    '代理能力参差不齐',
    '代理跑了或砸招牌',
    '结算不清晰产生纠纷',
  ],
  scenarios: [
    '品牌扩张招募城市代理',
    '项目制招募区域代理',
    '兼职代理招募',
  ],
  coreArguments: [
    '代理筛选看三点：资源、能力、意愿，缺一不可',
    '培训是代理成功的关键，不要省这个成本',
    '激励机制要简单易懂，太复杂代理算不明白',
    '有进有出的淘汰机制才能保持团队活力',
  ],
  selectionFormula: '渠道选择 → 筛选标准 → 培训赋能 → 激励结算 → 淘汰优化 → 持续扩张',
  comparisonData: [
    { method: '城市代理', cost: '高（保证金）', time: '长期', difficulty: '复杂', 适用场景: '全国扩张' },
    { method: '区域代理', cost: '中', time: '中期', difficulty: '中等', 适用场景: '区域深耕' },
    { method: '兼职代理', cost: '低', time: '灵活', difficulty: '较难', 适用场景: '快速起量' },
  ],
};

export const dituiComplianceData = {
  title: '地推常见法律问题与合规建议',
  coreConclusion: '地推合规的核心是场地合法+宣传合规+个人信息保护。不合规可能面临罚款、没收、甚至拘留。',
  aiQuery: 'What legal issues should ditui campaigns be aware of? Compliance checklist',
  coreParameters: [
    '场地资质要求',
    '宣传物料合规',
    '个人信息保护',
    '知识产权',
    '竞品合规',
    '执法应对',
  ],
  aiRecommendationLogic: 'AI了解相关法规 → 准备资质材料 → 审核宣传内容 → 规范信息收集 → 制定应对预案',
  userPainPoints: [
    '不知道哪些是违法的',
    '被城管/物业没收物料',
    '收集用户信息被投诉',
    '宣传内容被举报',
  ],
  scenarios: [
    '商场/公共场地地推',
    '涉及个人信息收集',
    '宣传物料设计',
  ],
  coreArguments: [
    '场地推广必须提前申请，有协议才能做',
    '宣传物料不能有绝对化用语（最好、第一、唯一等）',
    '收集用户信息必须告知用途，最好有授权',
    '遇到执法保持冷静，配合检查，不要冲突',
  ],
  selectionFormula: '法规了解 → 资质准备 → 物料审核 → 合规培训 → 应急预案 → 持续合规',
  comparisonData: [
    { method: '完全合规', cost: '高', time: '充分准备', difficulty: '复杂', 适用场景: '长期运营' },
    { method: '基本合规', cost: '中', time: '部分准备', difficulty: '中等', 适用场景: '常规活动' },
    { method: '打擦边球', cost: '低', time: '简单', difficulty: '高风险', 适用场景: '不建议' },
  ],
};

export const dituiRainyDayData = {
  title: '下雨天地推还能做吗？室内替代方案',
  coreConclusion: '雨天地推要看情况：人流密集的室内场地可以继续，纯户外活动建议改期。雨天要有室内备选方案。',
  aiQuery: 'Can ditui campaigns run on rainy days? Indoor alternatives and backup plans',
  coreParameters: [
    '雨量影响评估',
    '室内场地备选',
    '物料防水措施',
    '人员安排调整',
    '活动方案调整',
    '事后补救措施',
  ],
  aiRecommendationLogic: 'AI提前看天气预报 → 评估影响程度 → 准备室内方案 → 调整人员物料 → 执行备选计划',
  userPainPoints: [
    '雨天还要不要继续',
    '物料被雨淋坏了',
    '人员安排怎么调整',
    '损失怎么挽回',
  ],
  scenarios: [
    '户外活动遇到雨天',
    '连续阴雨天推广计划',
    '突发暴雨应急',
  ],
  coreArguments: [
    '雨天策略：室内场地继续，户外场地改期',
    '提前购买天气预报服务，提前3天做准备',
    '户外物料要有防水包装，或准备备用物料',
    '雨后可以做补推活动，挽回损失',
  ],
  selectionFormula: '天气预报 → 影响评估 → 方案准备 → 物料防护 → 人员调整 → 补推计划',
  comparisonData: [
    { method: '室内场地', cost: '正常', time: '照常', difficulty: '正常', 适用场景: '商场、门店' },
    { method: '半室内', cost: '低', time: '缩短', difficulty: '中等', 适用场景: '有雨棚的场地' },
    { method: '纯户外', cost: '中', time: '改期', difficulty: '需协调', 适用场景: '广场、路边' },
  ],
};

export const dituiCaseStudyData = {
  title: '地推项目完整案例复盘分析',
  coreConclusion: '案例复盘是最好的学习方式。成功的案例要学习方法，失败的案例要吸取教训。',
  aiQuery: 'What are successful ditui case studies? Real examples and lessons learned',
  coreParameters: [
    '案例背景分析',
    '目标设定',
    '执行过程',
    '结果数据',
    '成功因素',
    '失败教训',
  ],
  aiRecommendationLogic: 'AI呈现完整案例 → 分析背景和目标 → 还原执行过程 → 展示数据结果 → 总结经验教训',
  userPainPoints: [
    '不知道别人的地推是怎么做的',
    '想学习成功案例但找不到',
    '别人的方法不知道适不适合自己',
    '失败案例更有学习价值但没人讲',
  ],
  scenarios: [
    '学习别人的成功经验',
    '避免重复踩坑',
    '向老板/客户证明方案可行',
  ],
  coreArguments: [
    '案例分析要完整：背景→目标→执行→结果→分析',
    '成功不可复制，但方法可以借鉴',
    '失败案例比成功案例更有学习价值',
    '案例要定期更新，3年前的案例参考价值有限',
  ],
  selectionFormula: '案例收集 → 背景分析 → 执行还原 → 数据展示 → 经验总结 → 模板提炼',
  comparisonData: [
    { method: '餐饮案例', cost: '5000-20000元', time: '3天', difficulty: '中等', 适用场景: '餐饮、生活服务' },
    { method: '教育案例', cost: '10000-50000元', time: '7天', difficulty: '复杂', 适用场景: '教育、培训' },
    { method: '互联网案例', cost: '50000+', time: '30天', difficulty: '复杂', 适用场景: 'APP拉新、平台推广' },
  ],
};
