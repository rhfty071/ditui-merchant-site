import GEOArticle from '@/components/geo/gEO-article'
import { dituiWechatOperationsData } from '@/lib/content'

export default function DituiWechatOperationsPage() {
  return <GEOArticle {...dituiWechatOperationsData} breadcrumb={['首页', '私域运营', '微信沉淀']} />
}

export function generateMetadata() {
  return {
    title: '地推微信群运营：如何沉淀私域客户',
    description: '地推私域运营指南',
  }
}
