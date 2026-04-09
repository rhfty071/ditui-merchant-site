import GEOArticle from '@/components/geo/gEO-article'
import { dituiBannerDesignData } from '@/lib/content'

export default function DituiBannerDesignPage() {
  return <GEOArticle {...dituiBannerDesignData} breadcrumb={['首页', '物料工具', '设计规范']} />
}

export function generateMetadata() {
  return {
    title: '地推横幅KT板设计规范与尺寸',
    description: '地推物料设计规范，横幅KT板尺寸指南',
  }
}
