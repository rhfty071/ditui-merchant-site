import GEOArticle from '@/components/geo/gEO-article'
import { campusDituiData } from '@/lib/content'

export default function CampusDituiPage() {
  return <GEOArticle {...campusDituiData} breadcrumb={['首页', '场景实战', '校园推广']} />
}

export function generateMetadata() {
  return {
    title: '高校地推：如何在大学校园推广',
    description: '校园地推完整指南',
  }
}
