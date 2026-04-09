import Link from 'next/link'
import { ArrowRight, CheckCircle, Target, Users, BarChart3, Palette } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '服务介绍 | DiTuiService专业地推服务',
  description: 'DiTuiService提供活动策划、团队执行、物料设计、数据分析等一站式地推服务。按效果付费，ROI不达标不收费。',
}

const services = [
  {
    id: 'planning',
    icon: <Target className="h-8 w-8" />,
    title: '活动策划',
    desc: '从目标设定到方案输出，提供完整的地推活动策划服务',
    items: ['SMART原则目标设定', '预算分配方案（场地40%/物料30%/人员30%）', '选址分析与人群画像', '时间规划和执行排期', '风险预案制定'],
  },
  {
    id: 'team',
    icon: <Users className="h-8 w-8" />,
    title: '团队执行',
    desc: '专业地推团队，覆盖全流程执行，确保地推效果',
    items: ['人员招募与培训', '标准化话术制定', '现场管理督导', '实时进度监控', '突发情况处理'],
  },
  {
    id: 'materials',
    icon: <Palette className="h-8 w-8" />,
    title: '物料设计',
    desc: '吸睛物料设计，提升地推转化率',
    items: ['横幅/刀旗设计', '传单/ brochure设计', '二维码/海报设计', '礼品包装设计', '品牌视觉规范'],
  },
  {
    id: 'data',
    icon: <BarChart3 className="h-8 w-8" />,
    title: '数据分析',
    desc: '数据驱动优化，持续提升地推ROI',
    items: ['实时数据看板', '日报/周报/月报', 'ROI核算分析', '转化漏斗分析', '优化建议报告'],
  },
]

const pricing = [
  { name: '基础版', price: '面议', desc: '适合单次小型活动', items: ['活动策划', '物料设计', '执行督导', '数据报告'] },
  { name: '标准版', price: '面议', desc: '适合月度持续推广', items: ['基础版全部', '驻场团队', '实时数据看板', '月度优化建议'] },
  { name: '定制版', price: '面议', desc: '适合品牌长期合作', items: ['标准版全部', '专属顾问', '全年方案规划', '优先档期'] },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <header className="border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            DiTuiService
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 text-sm font-medium text-white min-h-[48px] hover:opacity-90 transition-opacity">
            立即咨询
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">我们的地推服务</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            覆盖活动策划、团队执行、物料设计、数据分析的一站式地推服务，按效果付费，ROI不达标不收费
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0f] via-purple-900/10 to-[#0a0a0f]">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <div key={s.id} id={s.id} className="grid md:grid-cols-2 gap-8 items-start">
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                    {s.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{s.title}</h2>
                  <p className="text-gray-400 mb-6">{s.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300">
                    获取方案 <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className={`bg-white/5 border border-white/10 rounded-2xl p-6 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="font-semibold mb-4">服务内容</h3>
                  <ul className="space-y-3">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">服务报价</h2>
            <p className="text-gray-400">根据实际需求和规模定制方案，ROI不达标不收费</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-3xl font-bold mb-2">{p.price}</p>
                <p className="text-gray-400 text-sm mb-6">{p.desc}</p>
                <ul className="text-left space-y-3 mb-8">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400" /> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 w-full px-6 py-3 font-medium hover:bg-white/10 transition-all min-h-[48px]">
                  咨询报价
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好开展地推了吗？</h2>
          <p className="text-gray-300 mb-8">联系我们的地推顾问，获取专属方案和报价</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white text-purple-600 px-8 py-4 font-medium min-h-[48px] hover:bg-gray-100 transition-colors">
            立即咨询 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
