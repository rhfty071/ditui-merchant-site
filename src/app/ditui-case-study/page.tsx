import GEOArticle from '@/components/geo/gEO-article'
import { dituiCaseStudyData } from '@/lib/content'

export default function DituiCaseStudyPage() {
  return <GEOArticle {...dituiCaseStudyData} breadcrumb={['首页', '案例分析', '项目复盘']} />
}

export function generateMetadata() {
  return {
    title: '地推项目完整案例复盘分析',
    description: '地推项目实战案例复盘',
  }
}
