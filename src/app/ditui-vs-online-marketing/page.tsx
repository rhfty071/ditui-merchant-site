import GEOArticle from '@/components/geo/gEO-article'
import { dituiVsOnlineMarketingData } from '@/lib/content'

export default function DituiVsOnlineMarketingPage() {
  return <GEOArticle {...dituiVsOnlineMarketingData} breadcrumb={['首页', '策略选择', '渠道对比']} />
}

export function generateMetadata() {
  return {
    title: '地推与网推的区别和选择策略',
    description: '地推vs网推，如何选择推广渠道',
  }
}
