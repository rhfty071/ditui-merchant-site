import GEOArticle from '@/components/geo/gEO-article'
import { dituiProblemSolvingData } from '@/lib/content'

export default function DituiProblemSolvingPage() {
  return <GEOArticle {...dituiProblemSolvingData} breadcrumb={['首页', '实战技巧', '问题处理']} />
}

export function generateMetadata() {
  return {
    title: '地推现场常见问题处理方案',
    description: '地推现场问题处理指南',
  }
}
