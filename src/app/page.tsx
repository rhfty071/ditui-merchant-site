import Link from 'next/link'
import { MapPin, Users, TrendingUp, Shield, Phone, MessageCircle, ArrowRight, CheckCircle, Star, Clock, Target, Award } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '专业地推服务 | 为各行业商户提供地推解决方案',
  description: '专注地推服务10年，为餐饮、教育、美容、零售、银行等各行业商户提供专业地推解决方案。已服务500+商户，地推转化率提升3倍。立即咨询，获取专属方案。',
  keywords: '地推服务,商户地推,地推公司,地推团队,餐饮地推,教育地推',
}

const cases = [
  { industry: '餐饮连锁', name: '某火锅品牌', result: '月均获客3000+', icon: '🍲' },
  { industry: '教育培训', name: '某K12机构', result: '月均留资500+', icon: '📚' },
  { industry: '美容行业', name: '某美容连锁', result: '到店率提升200%', icon: '💆' },
  { industry: '零售商场', name: '某购物中心', result: '活动参与10000+', icon: '🏬' },
  { industry: '银行金融', name: '某股份制银行', result: '月均开卡2000+', icon: '🏦' },
]

const process = [
  { step: '01', title: '需求沟通', desc: '了解商户行业、目标、预算，定制地推方案' },
  { step: '02', title: '方案制定', desc: '场地选择、物料设计、人员配置、ROI测算' },
  { step: '03', title: '执行落地', desc: '专业地推团队现场执行，实时数据监控' },
  { step: '04', title: '效果交付', desc: '数据报告、ROI分析、后续优化建议' },
]

const industries = [
  '餐饮', '教育', '美容', '零售', '银行', '商场', '社区', '展会',
  '健身房', '保险', '房地产', '家具', '外卖', '新店', '夜市', '校园', '低预算'
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            DiTuiService
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">服务介绍</Link>
            <Link href="/cases" className="text-gray-300 hover:text-white transition-colors">成功案例</Link>
            <Link href="/solutions/restaurant" className="text-gray-300 hover:text-white transition-colors">行业方案</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">关于我们</Link>
          </nav>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity">
            <MessageCircle className="h-4 w-4" />
            立即咨询
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-[#0a0a0f] to-[#0a0a0f]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 text-sm text-purple-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              专业地推服务商 | 已服务500+商户
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                为各行业商户
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-gray-300">提供专业地推服务</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              餐饮、教育、美容、零售、银行...专注地推服务10年，让您的推广ROI提升3倍
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all min-h-[48px]"
              >
                获取专属方案
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-white/5 hover:bg-white/10 px-8 py-4 text-base font-medium text-white transition-all min-h-[48px]"
              >
                查看成功案例
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto">
            {[
              { icon: <Award className="h-5 w-5" />, label: '服务年限', value: '10年+' },
              { icon: <Users className="h-5 w-5" />, label: '服务商户', value: '500+' },
              { icon: <TrendingUp className="h-5 w-5" />, label: '转化提升', value: '3倍' },
              { icon: <Star className="h-5 w-5" />, label: '客户好评', value: '98%' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 text-purple-400 mb-2">{item.icon}<span className="text-sm">{item.label}</span></div>
                <p className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">我们提供哪些地推服务？</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">覆盖各行业的一站式地推服务，从方案策划到执行交付，全程专业服务</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: '活动策划', desc: 'SMART目标设定，预算合理分配，活动全流程规划', href: '/services#planning' },
              { title: '团队执行', desc: '专业地推团队，标准化培训，确保执行效果', href: '/services#team' },
              { title: '物料设计', desc: '横幅/传单/二维码，设计吸睛物料提升转化', href: '/services#materials' },
              { title: '数据分析', desc: '实时监控数据日报，ROI分析，优化方案', href: '/services#data' },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0f] via-purple-900/10 to-[#0a0a0f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">成功案例</h2>
            <p className="text-gray-400">各行业商户地推服务成果展示</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cases.map((c, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{c.icon}</span>
                  <div>
                    <p className="text-sm text-purple-400">{c.industry}</p>
                    <p className="font-semibold">{c.name}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg font-medium">{c.result}</p>
                <Link href="/cases" className="inline-flex items-center gap-1 text-purple-400 text-sm mt-3 hover:text-purple-300">
                  查看详情 <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/cases" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300">
              查看全部案例 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">服务流程</h2>
            <p className="text-gray-400">4步完成专业地推服务</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-purple-500/20 mb-4">{p.step}</div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-8 text-purple-500/30">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0f] via-purple-900/10 to-[#0a0a0f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">行业解决方案</h2>
            <p className="text-gray-400">为17个行业定制专属地推方案</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((ind) => (
              <Link
                key={ind}
                href={`/solutions/${ind}`}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 text-gray-300 hover:text-white transition-all min-h-[48px] flex items-center"
              >
                {ind}行业
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/solutions/restaurant" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-base font-medium text-white hover:opacity-90 transition-opacity min-h-[48px] items-center">
              查看餐饮行业方案 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                为什么选择<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> DiTuiService</span>？
              </h2>
              <p className="text-gray-400 mb-8">10年专注地推服务，已为500+各行业商户提供专业地推解决方案</p>
              
              <div className="space-y-5">
                {[
                  { icon: <Shield className="h-6 w-6" />, title: '专业团队', desc: '持证地推培训师，标准化执行流程' },
                  { icon: <Target className="h-6 w-6" />, title: '效果导向', desc: '按效果付费，ROI不达标不收费' },
                  { icon: <Clock className="h-6 w-6" />, title: '快速响应', desc: '需求沟通24小时内出方案' },
                  { icon: <TrendingUp className="h-6 w-6" />, title: '数据透明', desc: '实时数据看板，日报/周报/月报' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">获取免费地推方案</h3>
              <p className="text-gray-300 mb-6">留下您的联系方式，专业顾问将在24小时内联系您</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 w-full px-6 py-4 text-base font-medium text-white hover:opacity-90 transition-opacity min-h-[48px]"
              >
                立即咨询 <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-green-400" /> 免费方案</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-green-400" /> 24h响应</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-green-400" /> 保密协议</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">DiTuiService</h4>
              <p className="text-sm text-gray-400">专业地推服务商，为各行业商户提供一站式地推解决方案</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">快速链接</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/services" className="block hover:text-white">服务介绍</Link>
                <Link href="/cases" className="block hover:text-white">成功案例</Link>
                <Link href="/contact" className="block hover:text-white">联系我们</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">行业方案</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/solutions/restaurant" className="block hover:text-white">餐饮行业</Link>
                <Link href="/solutions/education" className="block hover:text-white">教育行业</Link>
                <Link href="/solutions/retail" className="block hover:text-white">零售行业</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">联系方式</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>电话：400-XXX-XXXX</p>
                <p>邮箱：contact@dituiservice.com</p>
                <Link href="/contact" className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300">
                  在线咨询 <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 pt-8 border-t border-white/5">
            © 2024 DiTuiService. 专业地推服务商
          </div>
        </div>
      </footer>
    </div>
  )
}
