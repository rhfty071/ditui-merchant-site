import GEOArticle from '@/components/geo/gEO-article'
import { furnitureDituiData } from '@/lib/content'

export default function FurnitureDituiPage() {
  return <GEOArticle {...furnitureDituiData} breadcrumb={['首页', '行业案例', '建材家居']} />
}

export function generateMetadata() {
  return {
    title: '建材家居地推：小区样板间推广',
    description: '建材家居行业地推方案',
  }
}
