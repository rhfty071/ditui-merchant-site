import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, Users, TrendingUp, Target } from 'lucide-react'
import type { Metadata } from 'next'

const industryData: Record<string, {
  title: string
  desc: string
  scenarios: { title: string; desc: string }[]
  cases: { name: string; result: string }[]
  faqs: { q: string; a: string }[]
}> = {
  restaurant: {
    title: '餐饮行业地推方案',
    desc: '为餐饮连锁、单店提供开业促销、会员招募、外卖引流等场景地推服务',
    scenarios: [
      { title: '开业引流', desc: '新店开业地推，快速打开知名度，吸引首批顾客' },
      { title: '会员招募', desc: '会员卡推广，提升复购率和顾客粘性' },
      { title: '外卖引流', desc: '外卖平台曝光提升，增加线上订单' },
      { title: '节日促销', desc: '节假日主题活动，提升客流和营业额' },
    ],
    cases: [
      { name: '某火锅连锁品牌', result: '月均获客3000+，会员转化率提升150%' },
      { name: '某川菜馆', result: '开业月、地推3天，到店顾客500+人次' },
      { name: '某网红餐厅', result: '小红书+地推联动，到店率提升200%' },
    ],
    faqs: [
      { q: '餐饮地推适合哪些场景？', a: '开业引流、会员招募、外卖平台推广、节日促销、团购推广等场景均可。' },
      { q: '地推效果如何衡量？', a: '按到店人数、留资数量、会员转化、营业额增量等指标核算ROI。' },
      { q: '最低预算多少？', a: '根据场地和规模，5000元起即可开展一次小型地推活动。' },
    ],
  },
  education: {
    title: '教育培训行业地推方案',
    desc: '为K12、职业教育、艺术培训等教育机构提供招生地推服务',
    scenarios: [
      { title: '课程推广', desc: '地推团队在目标人群聚集地推广课程' },
      { title: '体验课招募', desc: '免费/低价体验课引流，转化为正价课' },
      { title: '校区扩张', desc: '新校区开业，快速建立知名度' },
      { title: '季末招生', desc: '寒暑假前招生旺季，集中推广' },
    ],
    cases: [
      { name: '某K12机构', result: '月均留资500+，体验课转化率35%' },
      { name: '某少儿英语', result: '地推+口碑，到店率60%，转化率28%' },
    ],
    faqs: [
      { q: '教育机构地推有效吗？', a: '教育行业重体验和口碑，地推能精准触达目标家长群体，效果显著。' },
      { q: '地推对象是谁？', a: '3-12岁孩子的家长（K12）、18-25岁年轻人（职业教育）等。' },
    ],
  },
}

const industries = [
  { slug: 'restaurant', name: '餐饮', icon: '🍲' },
  { slug: 'education', name: '教育', icon: '📚' },
  { slug: 'beauty', name: '美容', icon: '💆' },
  { slug: 'retail', name: '零售', icon: '🏪' },
  { slug: 'bank', name: '银行', icon: '🏦' },
  { slug: 'gym', name: '健身', icon: '💪' },
  { slug: 'furniture', name: '家具', icon: '🛋️' },
  { slug: 'real-estate', name: '房产', icon: '🏠' },
  { slug: 'insurance', name: '保险', icon: '🛡️' },
  { slug: 'exhibition', name: '展会', icon: '🎪' },
  { slug: 'community', name: '社区', icon: '🏘️' },
  { slug: 'campus', name: '校园', icon: '🎓' },
  { slug: 'new-store', name: '新店', icon: '🆕' },
  { slug: 'night-market', name: '夜市', icon: '🌙' },
  { slug: 'low-budget', name: '低预算', icon: '💰' },
  { slug: 'food-delivery', name: '外卖', icon: '🍜' },
  { slug: 'shopping-mall', name: '商场', icon: '🏬' },
]

type Props = { params: Promise<{ industry: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params
  const data = industryData[industry] || { title: '行业解决方案', desc: '专业的地推服务方案' }
  return {
    title: `${data.title} | DiTuiService`,
    description: data.desc,
  }
}

export default async function SolutionPage({ params }: Props) {
  const { industry } = await params
  const data = industryData[industry] || {
    title: `${industry}行业地推方案`,
    desc: `为${industry}行业商户提供专业地推服务解决方案`,
    scenarios: [
      { title: '目标客群推广', desc: '精准触达目标客户群体' },
      { title: '品牌曝光', desc: '提升品牌知名度和影响力' },
      { title: '获客转化', desc: '将曝光转化为实际客户' },
    ],
    cases: [],
    faqs: [
      { q: `${industry}行业适合地推吗？`, a: '地推能精准触达目标客户，是有效的线下获客方式。' },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    description: data.desc,
    provider: { '@type': 'Organization', name: 'DiTuiService' },
    areaServed: '全国',
    serviceType: '地推服务',
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            DiTuiService
          </Link>
          <Link href="/solutions/restaurant" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> 返回方案列表
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">首页</Link>
          <span>/</span>
          <Link href="/solutions/restaurant" className="hover:text-white">行业方案</Link>
          <span>/</span>
          <span className="text-white">{data.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.title}</h1>
          <p className="text-xl text-gray-400 max-w-3xl">{data.desc}</p>
          
          <div className="flex gap-4 mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-medium text-white min-h-[48px] hover:opacity-90 transition-opacity">
              获取专属方案 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0f] via-purple-900/10 to-[#0a0a0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{industry}行业适合哪些地推场景？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {data.scenarios.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{s.title}</h3>
                    <p className="text-gray-400 text-sm">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      {data.cases.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">成功案例</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {data.cases.map((c, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="font-semibold mb-2">{c.name}</p>
                  <p className="text-purple-400">{c.result}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/cases" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300">
                查看全部案例 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Other Industries */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0f] via-purple-900/10 to-[#0a0a0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">更多行业方案</h2>
          <div className="flex flex-wrap gap-3">
            {industries.filter(ind => ind.slug !== industry).map(ind => (
              <Link
                key={ind.slug}
                href={`/solutions/${ind.slug}`}
                className="px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 text-gray-300 hover:text-white transition-all min-h-[48px] flex items-center"
              >
                {ind.icon} {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">常见问题</h2>
          <div className="max-w-3xl space-y-4">
            {data.faqs.map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold mb-2 flex items-start gap-2">
                  <span className="text-purple-400">Q:</span> {f.q}
                </h3>
                <p className="text-gray-400 text-sm pl-5">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好开展地推了吗？</h2>
          <p className="text-gray-300 mb-8">留下您的联系方式，获取专属{industry}行业地推方案</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white text-purple-600 px-8 py-4 font-medium min-h-[48px] hover:bg-gray-100 transition-colors">
            立即咨询 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
