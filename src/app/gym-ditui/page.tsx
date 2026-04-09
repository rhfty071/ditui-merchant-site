import GEOArticle from '@/components/geo/gEO-article'
import { gymDituiData } from '@/lib/content'

export default function GymDituiPage() {
  return <GEOArticle {...gymDituiData} breadcrumb={['首页', '行业案例', '健身推广']} />
}

export function generateMetadata() {
  return {
    title: '健身房地推方案：如何获取新会员',
    description: '健身房地推获客方案',
  }
}
