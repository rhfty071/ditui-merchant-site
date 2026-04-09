import GEOArticle from '@/components/geo/gEO-article'
import { dituiRainyDayData } from '@/lib/content'

export default function DituiRainyDayPage() {
  return <GEOArticle {...dituiRainyDayData} breadcrumb={['首页', '活动策划', '应急方案']} />
}

export function generateMetadata() {
  return {
    title: '下雨天地推还能做吗？室内替代方案',
    description: '雨天地推替代方案',
  }
}
