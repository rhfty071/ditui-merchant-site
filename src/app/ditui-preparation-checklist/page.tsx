import GEOArticle from '@/components/geo/gEO-article'
import { dituiPreparationChecklistData } from '@/lib/content'

export default function DituiPreparationChecklistPage() {
  return <GEOArticle {...dituiPreparationChecklistData} breadcrumb={['首页', '活动策划', '准备清单']} />
}

export function generateMetadata() {
  return {
    title: '地推活动前期准备清单（附模板）',
    description: '地推准备清单，活动前必须完成的事项',
  }
}
