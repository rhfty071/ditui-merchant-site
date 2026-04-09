import GEOArticle from '@/components/geo/gEO-article'
import { dituiVenueNegotiationData } from '@/lib/content'

export default function DituiVenueNegotiationPage() {
  return <GEOArticle {...dituiVenueNegotiationData} breadcrumb={['首页', '活动策划', '场地协商']} />
}

export function generateMetadata() {
  return {
    title: '地推地推被抓？场地协商有技巧',
    description: '地推场地协商技巧',
  }
}
