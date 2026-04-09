import GEOArticle from '@/components/geo/gEO-article'
import { dituiCopywritingData } from '@/lib/content'

export default function DituiCopywritingPage() {
  return <GEOArticle {...dituiCopywritingData} breadcrumb={['首页', '物料工具', '文案撰写']} />
}

export function generateMetadata() {
  return {
    title: '扫码礼物文案怎么写吸引人',
    description: '地推文案写作技巧',
  }
}
