import Link from 'next/link'
import { MessageCircle, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '联系我们 | DiTuiService专业地推服务',
  description: '联系DiTuiService，获取专属地推方案。电话：400-XXX-XXXX，微信/邮件均可。24小时内响应，免费出具方案。',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <header className="border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            DiTuiService
          </Link>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
              <p className="text-xl text-gray-400">留下您的联系方式，专业顾问将在24小时内联系您</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-8">联系方式</h2>
                <div className="space-y-6">
                  {[
                    { icon: <Phone className="h-5 w-5" />, label: '电话', value: '400-XXX-XXXX（工作日9:00-18:00）' },
                    { icon: <MessageCircle className="h-5 w-5" />, label: '微信', value: 'dituiservice（长按识别）' },
                    { icon: <Mail className="h-5 w-5" />, label: '邮箱', value: 'contact@dituiservice.com' },
                    { icon: <MapPin className="h-5 w-5" />, label: '地址', value: '全国可服务，支持远程方案沟通' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                  <h3 className="font-semibold mb-4">为什么选择DiTuiService？</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400" /> 10年专注地推，服务500+商户</p>
                    <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400" /> 按效果付费，ROI不达标不收费</p>
                    <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400" /> 24小时出具初步方案</p>
                    <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400" /> 签订保密协议，信息安全保障</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-xl font-bold mb-6">免费获取方案</h2>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">您的行业 *</label>
                    <select className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-purple-500 focus:outline-none min-h-[48px]">
                      <option value="">请选择行业</option>
                      <option>餐饮</option>
                      <option>教育培训</option>
                      <option>美容健身</option>
                      <option>零售</option>
                      <option>银行金融</option>
                      <option>房地产</option>
                      <option>其他</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">商户名称 / 品牌名 *</label>
                    <input type="text" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-purple-500 focus:outline-none min-h-[48px]" placeholder="请输入" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">联系方式（手机/微信）*</label>
                    <input type="text" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-purple-500 focus:outline-none min-h-[48px]" placeholder="请输入" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">地推需求描述</label>
                    <textarea rows={4} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-purple-500 focus:outline-none resize-none" placeholder="请描述您的地推需求，如：开业推广、会员招募、目标城市等" />
                  </div>
                  <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 py-4 font-medium text-white hover:opacity-90 transition-opacity min-h-[48px] flex items-center justify-center gap-2">
                    提交咨询 <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-gray-500 text-center">提交后24小时内将有专属顾问联系您，信息将被严格保密</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
