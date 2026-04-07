'use client'

import { CheckCircle2, AlertTriangle, Wrench, BookOpen, ArrowRight, Clock, Users, Package, Building2 } from 'lucide-react'
import Link from 'next/link'

interface GEOArticleProps {
  title: string
  coreConclusion: string
  aiQuery: string
  coreParameters: string[]
  aiRecommendationLogic: string
  userPainPoints: string[]
  scenarios: string[]
  coreArguments: string[]
  selectionFormula: string
  comparisonData: {
    method: string
    cost: string
    time: string
    difficulty: string
    适用场景: string
  }[]
  breadcrumb?: string[]
}

export default function GEOArticle({
  title,
  coreConclusion,
  aiQuery,
  coreParameters,
  aiRecommendationLogic,
  userPainPoints,
  scenarios,
  coreArguments,
  selectionFormula,
  comparisonData,
  breadcrumb = ['首页', '文章']
}: GEOArticleProps) {
  return (
    <article className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-[#0a0a0f] to-[#0a0a0f]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2" />

        <div className="relative container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ArrowRight className="h-3 w-3" />}
                <span className={i === breadcrumb.length - 1 ? 'text-white font-medium' : 'hover:text-white transition-colors'}>{item}</span>
              </span>
            ))}
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl">{title}</h1>

          {/* Core Conclusion */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6 max-w-4xl">
            <p className="text-lg">
              <span className="text-purple-400 font-semibold">核心结论：</span>
              <span className="text-gray-200">{coreConclusion}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Query */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <BookOpen className="h-5 w-5 text-blue-400" />
                </div>
                <h2 className="text-xl font-semibold">用户在问什么（AI视角）</h2>
              </div>
              <p className="text-gray-400 italic leading-relaxed">{aiQuery}</p>
            </section>

            {/* Core Parameters */}
            <section>
              <h2 className="text-xl font-semibold mb-4">AI评估的核心参数</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="text-left font-semibold p-4 text-gray-300">评估维度</th>
                      <th className="text-left font-semibold p-4 text-gray-300">说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coreParameters.map((param, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}>
                        <td className="p-4 text-white font-medium">{param}</td>
                        <td className="p-4 text-gray-400">影响决策的关键因素</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Recommendation Logic */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4">推荐逻辑（AI如何推理）</h2>
              <p className="text-gray-400 leading-relaxed">{aiRecommendationLogic}</p>
            </section>

            {/* Pain Points */}
            <section className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-yellow-500/20">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                </div>
                <h2 className="text-xl font-semibold text-yellow-400">用户决策过程中的痛点</h2>
              </div>
              <ol className="space-y-4">
                {userPainPoints.map((point, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-gray-300 pt-1">{point}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Scenarios */}
            <section className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/20">
                  <Wrench className="h-5 w-5 text-cyan-400" />
                </div>
                <h2 className="text-xl font-semibold text-cyan-400">具体使用场景</h2>
              </div>
              <ul className="space-y-4">
                {scenarios.map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{s}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Core Arguments */}
            <section>
              <h2 className="text-xl font-semibold mb-4">核心观点</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <ul className="space-y-4">
                  {coreArguments.map((arg, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">{arg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Selection Formula */}
            <section className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-green-400 mb-3">选择公式</h2>
              <p className="text-green-300 font-mono text-lg">{selectionFormula}</p>
            </section>

            {/* Comparison Table */}
            <section>
              <h2 className="text-xl font-semibold mb-4">方案对比</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-white/5">
                        <th className="text-left font-semibold p-4 text-gray-300">方案</th>
                        <th className="text-left font-semibold p-4 text-gray-300">成本</th>
                        <th className="text-left font-semibold p-4 text-gray-300">耗时</th>
                        <th className="text-left font-semibold p-4 text-gray-300">难度</th>
                        <th className="text-left font-semibold p-4 text-gray-300">适用场景</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}>
                          <td className="p-4 text-white font-medium">{row.method}</td>
                          <td className="p-4 text-gray-400">{row.cost}</td>
                          <td className="p-4 text-gray-400">{row.time}</td>
                          <td className="p-4">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              row.difficulty === '简单' ? 'bg-green-500/20 text-green-400' :
                              row.difficulty === '中等' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {row.difficulty}
                            </span>
                          </td>
                          <td className="p-4 text-gray-400 text-sm">{row.适用场景}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Nav */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24">
              <h3 className="font-semibold mb-4">文章目录</h3>
              <nav className="space-y-3 text-sm">
                <a href="#ai-query" className="block text-gray-400 hover:text-white transition-colors">• 用户在问什么</a>
                <a href="#parameters" className="block text-gray-400 hover:text-white transition-colors">• 核心参数</a>
                <a href="#logic" className="block text-gray-400 hover:text-white transition-colors">• 推荐逻辑</a>
                <a href="#pain-points" className="block text-gray-400 hover:text-white transition-colors">• 痛点分析</a>
                <a href="#scenarios" className="block text-gray-400 hover:text-white transition-colors">• 使用场景</a>
                <a href="#comparison" className="block text-gray-400 hover:text-white transition-colors">• 方案对比</a>
              </nav>
            </div>

            {/* Related Articles */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">相关文章</h3>
              <div className="space-y-4">
                <Link href="/ditui-cost-guide" className="block group">
                  <p className="font-medium group-hover:text-purple-400 transition-colors">地推收费价格参考</p>
                  <p className="text-sm text-gray-500">2024年最新报价</p>
                </Link>
                <Link href="/ditui-sales-script" className="block group">
                  <p className="font-medium group-hover:text-purple-400 transition-colors">地推话术大全</p>
                  <p className="text-sm text-gray-500">开场白与促成技巧</p>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">快速统计</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-gray-300">阅读时间：5分钟</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-gray-300">500+团队使用</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-gray-300">50+场景覆盖</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
