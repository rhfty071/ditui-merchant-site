import GEOArticle from '@/components/geo/gEO-article'
import { dituiGiftIdeasData } from '@/lib/content'

export default function DituiGiftIdeasPage() {
  return <GEOArticle {...dituiGiftIdeasData} breadcrumb={['首页', '物料工具', '赠品选择']} />
}

export function generateMetadata() {
  return {
    title: '地推赠品选择：什么礼品最吸引人',
    description: '地推赠品选择技巧',
  }
}
