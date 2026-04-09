import GEOArticle from '@/components/geo/gEO-article'
import { dituiMaterialsChecklistData } from '@/lib/content'

export default function DituiMaterialsChecklistPage() {
  return <GEOArticle {...dituiMaterialsChecklistData} breadcrumb={['首页', '物料工具', '物料清单']} />
}

export function generateMetadata() {
  return {
    title: '地推物料清单：第一次地推需要什么',
    description: '地推必备物料清单',
  }
}
