import GEOArticle from '@/components/geo/gEO-article'
import { dituiTeamBuildingData } from '@/lib/content'

export default function DituiTeamBuildingPage() {
  return <GEOArticle {...dituiTeamBuildingData} breadcrumb={['首页', '团队管理', '团队建设']} />
}

export function generateMetadata() {
  return {
    title: '如何建立稳定的地推团队',
    description: '地推团队建设与管理',
  }
}
