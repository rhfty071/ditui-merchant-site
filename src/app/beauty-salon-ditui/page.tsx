import GEOArticle from '@/components/geo/gEO-article'
import { beautySalonDituiData } from '@/lib/content'

export default function BeautySalonDituiPage() {
  return <GEOArticle {...beautySalonDituiData} breadcrumb={['首页', '行业案例', '美容推广']} />
}

export function generateMetadata() {
  return {
    title: '美容院地推：拓客技巧与话术',
    description: '美容院地推拓客方案',
  }
}
