import GEOArticle from '@/components/geo/gEO-article'
import { dituiPartTimeManagementData } from '@/lib/content'

export default function DituiPartTimeManagementPage() {
  return <GEOArticle {...dituiPartTimeManagementData} breadcrumb={['首页', '团队管理', '兼职管理']} />
}

export function generateMetadata() {
  return {
    title: '如何招聘和管理地推兼职人员',
    description: '地推兼职招聘与管理技巧',
  }
}
