import GEOArticle from '@/components/geo/gEO-article'
import { nightMarketDituiData } from '@/lib/content'

export default function NightMarketDituiPage() {
  return <GEOArticle {...nightMarketDituiData} breadcrumb={['首页', '场景实战', '夜市推广']} />
}

export function generateMetadata() {
  return {
    title: '夜市地推指南：如何在夜市摆摊获客',
    description: '夜市地推获客指南',
  }
}
