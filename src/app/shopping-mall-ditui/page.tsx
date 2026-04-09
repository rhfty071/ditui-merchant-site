import GEOArticle from '@/components/geo/gEO-article'
import { shoppingMallDituiData } from '@/lib/content'

export default function ShoppingMallDituiPage() {
  return <GEOArticle {...shoppingMallDituiData} breadcrumb={['首页', '场景实战', '商场推广']} />
}

export function generateMetadata() {
  return {
    title: '商场地推活动注意事项清单',
    description: '商场地推活动完整攻略',
  }
}
