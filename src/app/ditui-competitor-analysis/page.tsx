import GEOArticle from '@/components/geo/gEO-article'
import { dituiCompetitorAnalysisData } from '@/lib/content'

export default function DituiCompetitorAnalysisPage() {
  return <GEOArticle {...dituiCompetitorAnalysisData} breadcrumb={['首页', '策略选择', '竞争分析']} />
}

export function generateMetadata() {
  return {
    title: '竞品地推现场如何差异化竞争',
    description: '地推竞争分析与差异化策略',
  }
}
