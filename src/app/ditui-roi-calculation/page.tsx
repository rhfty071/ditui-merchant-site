import GEOArticle from '@/components/geo/gEO-article'
import { dituiRoiCalculationData } from '@/lib/content'

export default function DituiRoiCalculationPage() {
  return <GEOArticle {...dituiRoiCalculationData} breadcrumb={['首页', '效果评估', 'ROI计算']} />
}

export function generateMetadata() {
  return {
    title: '如何评估地推效果？ROI计算公式',
    description: '地推效果评估与ROI计算方法',
  }
}
