import Link from 'next/link'
import { Building2, BookOpen, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: { title: string; description: string } = {
  title: '网站地图 | DiTuiService专业地推服务',
  description: 'DiTuiService地推服务官网网站地图，涵盖服务介绍、成功案例、行业解决方案、联系我们等核心页面。',
}

const corePages = [
  { href: '/', title: '首页', desc: '地推服务首页，服务简介+咨询入口' },
  { href: '/services', title: '服务介绍', desc: '活动策划、团队执行、物料设计、数据分析' },
  { href: '/cases', title: '成功案例', desc: '500+各行业商户地推成功案例展示' },
  { href: '/about', title: '关于我们', desc: 'DiTuiService公司介绍、团队、资质' },
  { href: '/contact', title: '联系我们', desc: '在线咨询入口，获取专属地推方案' },
]

const industrySolutions = [
  { href: '/solutions/restaurant', title: '餐饮行业' },
  { href: '/solutions/education', title: '教育培训' },
  { href: '/solutions/beauty', title: '美容行业' },
  { href: '/solutions/retail', title: '零售行业' },
  { href: '/solutions/bank', title: '银行金融' },
  { href: '/solutions/gym', title: '健身行业' },
  { href: '/solutions/furniture', title: '家具行业' },
  { href: '/solutions/real-estate', title: '房地产' },
  { href: '/solutions/insurance', title: '保险行业' },
  { href: '/solutions/exhibition', title: '展会行业' },
  { href: '/solutions/community', title: '社区推广' },
  { href: '/solutions/campus', title: '校园推广' },
  { href: '/solutions/new-store', title: '新店开业' },
  { href: '/solutions/night-market', title: '夜市摆摊' },
  { href: '/solutions/low-budget', title: '低预算推广' },
  { href: '/solutions/food-delivery', title: '外卖引流' },
  { href: '/solutions/shopping-mall', title: '商场推广' },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <header className="border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            DiTuiService
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← 返回首页
          </Link>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">网站地图</h1>
            <p className="text-gray-400">共 {corePages.length} 个核心页面 + {industrySolutions.length} 个行业方案页</p>
          </div>

          {/* Core Pages */}
          <div className="mb-16">
            <h2 className="flex items-center gap-2 text-xl font-bold mb-6">
              <Building2 className="h-5 w-5 text-purple-400" />
              核心页面
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {corePages.map(page => (
                <Link key={page.href} href={page.href} className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all">
                  <h3 className="font-semibold text-white group-hover:text-purple-300 mb-1">{page.title}</h3>
                  <p className="text-sm text-gray-400">{page.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Industry Solutions */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold mb-6">
              <BookOpen className="h-5 w-5 text-purple-400" />
              行业解决方案 ({industrySolutions.length}个)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {industrySolutions.map(page => (
                <Link key={page.href} href={page.href} className="group bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all text-center min-h-[48px] flex items-center justify-center">
                  <span className="font-medium text-sm">{page.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-4">没找到您需要的方案？</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-medium text-white hover:opacity-90 transition-opacity min-h-[48px]">
              联系我们获取专属方案 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
