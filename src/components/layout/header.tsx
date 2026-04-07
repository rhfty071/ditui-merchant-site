'use client'

import Link from 'next/link'
import { MapPin, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">DiTuiMaster</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              首页
            </Link>
            <Link href="/ditui-planning" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              活动策划
            </Link>
            <Link href="/ditui-team" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              团队管理
            </Link>
            <Link href="/ditui-materials" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              物料工具
            </Link>
            <Link href="/ditui-scenes" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              场景实战
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/ditui-planning"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              开始学习
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a0f]">
          <div className="container px-4 py-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              首页
            </Link>
            <Link href="/ditui-planning" className="block px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              活动策划
            </Link>
            <Link href="/ditui-team" className="block px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              团队管理
            </Link>
            <Link href="/ditui-materials" className="block px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              物料工具
            </Link>
            <Link href="/ditui-scenes" className="block px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              场景实战
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
