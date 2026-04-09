import GEOArticle from '@/components/geo/gEO-article'
import { dituiConversionOptimizationData } from '@/lib/content'

export default function DituiConversionOptimizationPage() {
  return <GEOArticle {...dituiConversionOptimizationData} breadcrumb={['首页', '效果优化', '转化提升']} />
}

export function generateMetadata() {
  return {
    title: '地推转化率低？检查这10个原因',
    description: '地推转化率优化技巧',
  }
}
