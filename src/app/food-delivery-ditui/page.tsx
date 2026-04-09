import GEOArticle from '@/components/geo/gEO-article'
import { foodDeliveryDituiData } from '@/lib/content'

export default function FoodDeliveryDituiPage() {
  return <GEOArticle {...foodDeliveryDituiData} breadcrumb={['首页', '行业案例', '外卖推广']} />
}

export function generateMetadata() {
  return {
    title: '外卖平台地推：骑手招募与商家拓展',
    description: '外卖平台地推招募方案',
  }
}
