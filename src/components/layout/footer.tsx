import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
                <span className="text-sm font-bold">DT</span>
              </div>
              <span className="text-xl font-bold">DiTuiMaster</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              专业地推知识平台，涵盖活动策划、团队管理、物料工具、场景实战等全方位内容。
            </p>
            <div className="flex gap-4">
              <span className="text-xs text-gray-500">© 2024 DiTuiMaster</span>
            </div>
          </div>

          {/* Core Content */}
          <div>
            <h4 className="font-semibold mb-4">核心内容</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/ditui-planning" className="hover:text-white transition-colors">地推活动策划</Link></li>
              <li><Link href="/ditui-team" className="hover:text-white transition-colors">团队组建管理</Link></li>
              <li><Link href="/ditui-materials" className="hover:text-white transition-colors">物料清单工具</Link></li>
              <li><Link href="/ditui-scenes" className="hover:text-white transition-colors">场景实战指南</Link></li>
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h4 className="font-semibold mb-4">热门文章</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/ditui-cost-guide" className="hover:text-white transition-colors">收费价格参考</Link></li>
              <li><Link href="/ditui-sales-script" className="hover:text-white transition-colors">话术大全</Link></li>
              <li><Link href="/app-ditui-guide" className="hover:text-white transition-colors">APP地推指南</Link></li>
              <li><Link href="/ditui-roi-calculation" className="hover:text-white transition-colors">ROI计算</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">关于</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">关于我们</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">联系我们</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">隐私政策</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">使用条款</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Built with Next.js | GEO SEO Optimized
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            <Link href="/rss" className="hover:text-white transition-colors">RSS</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
