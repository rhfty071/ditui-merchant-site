import GEOArticle from '@/components/geo/gEO-article'
import { dituiDataAnalysisData } from '@/lib/content'

export default function DituiDataAnalysisPage() {
  return <GEOArticle {...dituiDataAnalysisData} breadcrumb={['首页', '效果评估', '数据分析']} />
}

export function generateMetadata() {
  return {
    title: '地推数据复盘：如何分析活动效果',
    description: '地推数据分析与复盘方法',
  }
}
