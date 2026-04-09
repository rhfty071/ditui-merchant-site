import GEOArticle from '@/components/geo/gEO-article'
import { restaurantDituiData } from '@/lib/content'

export default function RestaurantDituiPage() {
  return <GEOArticle {...restaurantDituiData} breadcrumb={['首页', '行业案例', '餐饮推广']} />
}

export function generateMetadata() {
  return {
    title: '餐饮店地推方案：如何吸引新客到店',
    description: '餐饮行业地推方案',
  }
}
