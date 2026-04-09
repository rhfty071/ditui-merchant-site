import Link from 'next/link'
import { ArrowRight, BookOpen, Building2 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: { title: string; description: string } = {
  title: '关于我们 | DiTuiService专业地推服务',
  description: 'DiTuiService专注地推服务10年，团队50+人，服务500+商户，覆盖餐饮、教育、美容、零售等17个行业。提供专业地推解决方案。',
}

export default function AboutPage() {
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

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">关于DiTuiService</h1>
          <p className="text-xl text-gray-400 text-center mb-16">专注地推服务10年，为各行业商户提供专业地推解决方案</p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { label: '成立时间', value: '2014年' },
              { label: '专注行业', value: '10年' },
              { label: '服务商户', value: '500+' },
              { label: '覆盖城市', value: '20+' },
              { label: '地推团队', value: '50人+' },
              { label: '客户好评', value: '98%' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-gray-400 text-sm mb-2">{item.label}</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">我们的故事</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              DiTuiService成立于2014年，创始团队来自线下营销和活动执行领域。我们发现大量商户有地推需求，但缺乏专业团队和执行经验。地推看似简单，实则涉及选址、人群分析、话术设计、数据追踪等大量专业细节。
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              10年来，我们服务了500+各行业商户，从街边小店到连锁品牌，从单次活动到年度合作，积累了丰富的地推实战经验。我们坚信：好的地推服务不只是让人看到，更是让人记住、让人行动、让人回来。
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-10">为什么选择我们</h2>
            <ul className="space-y-3 text-gray-300">
              {[
                '按效果付费：ROI不达标不收费，让商户零风险尝试',
                '专业团队：持证培训师+标准化执行流程，确保质量稳定',
                '数据透明：实时看板+日报/周报/月报，告别盲投',
                '快速响应：需求沟通24小时内出方案，执行中问题2小时内处理',
                '行业覆盖广：17个行业经验，知道每个行业的地推重点在哪里',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-purple-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-10">合作流程</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {['需求沟通', '方案制定', '执行落地', '效果交付'].map((step, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-purple-400 font-bold mb-1">0{i+1}</p>
                  <p className="font-medium text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-medium text-white min-h-[48px] hover:opacity-90 transition-opacity">
              与我们合作 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
