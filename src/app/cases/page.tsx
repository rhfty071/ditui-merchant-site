import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Star } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '成功案例 | DiTuiService专业地推服务',
  description: 'DiTuiService已为500+餐饮、教育、美容、零售等各行业商户提供地推服务，平均ROI提升3倍。查看真实案例，了解地推效果。',
}

const cases = [
  { industry: '餐饮', name: '某火锅连锁', result: '月均获客3000+', detail: '覆盖北京、上海、深圳20家门店，地推团队50人/城市，月均留资10000+，转化率30%', icon: '🍲' },
  { industry: '餐饮', name: '某川菜馆', result: '开业月获客500+', detail: '新开业地推活动，持续3天，到店人次500+，会员转化200+', icon: '🍲' },
  { industry: '教育', name: '某K12机构', result: '月均留资500+', detail: '覆盖50所中小学门口，地推周执行，暑假旺季月留资800+', icon: '📚' },
  { industry: '教育', name: '某少儿英语', result: '到店率60%', detail: '社区+校区联动，到店体验率60%，转化正价课28%', icon: '📚' },
  { industry: '美容', name: '某美容连锁', result: '到店率提升200%', detail: '新店开业+会员招募，到店率提升200%，月均新增会员150+', icon: '💆' },
  { industry: '零售', name: '某购物中心', result: '活动参与10000+', detail: '周年庆地推活动，3天覆盖10万人次，参与互动5000+', icon: '🏪' },
  { industry: '银行', name: '某股份制银行', result: '月均开卡2000+', detail: '社区+写字楼摆摊，月均开卡2000+，活跃率75%', icon: '🏦' },
  { industry: '健身', name: '某健身工作室', result: '月均获客100+', detail: '新店开业地推，地推转化率35%，月均获客100+', icon: '💪' },
]

const industries = ['全部', '餐饮', '教育', '美容', '零售', '银行', '健身', '其他']

export default function CasesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'DiTuiService成功案例',
    description: '各行业商户地推服务成功案例展示',
    numberOfItems: cases.length,
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">成功案例</h1>
            <p className="text-xl text-gray-400">已为500+各行业商户提供专业地推服务</p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map(ind => (
              <button key={ind} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 text-gray-300 hover:text-white transition-all min-h-[44px]">
                {ind}
              </button>
            ))}
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {cases.map((c, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{c.icon}</span>
                  <div>
                    <p className="text-sm text-purple-400">{c.industry}行业</p>
                    <p className="font-semibold text-lg">{c.name}</p>
                  </div>
                </div>
                <p className="text-purple-400 font-medium mb-3">{c.result}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{c.detail}</p>
                <Link href="/contact" className="inline-flex items-center gap-1 text-purple-400 text-sm mt-4 hover:text-purple-300">
                  获取类似方案 <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">您的行业不在列表中？联系我们获取专属方案</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-medium text-white min-h-[48px] hover:opacity-90 transition-opacity">
              立即咨询 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
