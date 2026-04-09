import GEOArticle from '@/components/geo/gEO-article'
import { exhibitionDituiData } from '@/lib/content'

export default function ExhibitionDituiPage() {
  return <GEOArticle {...exhibitionDituiData} breadcrumb={['首页', '场景实战', '展会推广']} />
}

export function generateMetadata() {
  return {
    title: '展会地推指南：如何在展会高效获客',
    description: '展会地推完整攻略，获客技巧',
  }
}
