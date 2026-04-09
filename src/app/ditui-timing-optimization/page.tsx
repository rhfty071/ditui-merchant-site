import GEOArticle from '@/components/geo/gEO-article'
import { dituiTimingOptimizationData } from '@/lib/content'

export default function DituiTimingOptimizationPage() {
  return <GEOArticle {...dituiTimingOptimizationData} breadcrumb={['首页', '活动策划', '时间选择']} />
}

export function generateMetadata() {
  return {
    title: '地推时间选择：什么时候推广效果最好',
    description: '地推最佳时间选择',
  }
}
