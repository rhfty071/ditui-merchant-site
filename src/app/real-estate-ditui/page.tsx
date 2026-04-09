import GEOArticle from '@/components/geo/gEO-article'
import { realEstateDituiData } from '@/lib/content'

export default function RealEstateDituiPage() {
  return <GEOArticle {...realEstateDituiData} breadcrumb={['首页', '行业案例', '房产推广']} />
}

export function generateMetadata() {
  return {
    title: '地产中介地推：社区驻点技巧',
    description: '房产中介地推驻点方案',
  }
}
