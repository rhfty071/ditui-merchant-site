import GEOArticle from '@/components/geo/gEO-article'
import { dituiFraudPreventionData } from '@/lib/content'

export default function DituiFraudPreventionPage() {
  return <GEOArticle {...dituiFraudPreventionData} breadcrumb={['首页', '团队管理', '风控防范']} />
}

export function generateMetadata() {
  return {
    title: '如何防止地推人员飞单跑单',
    description: '地推风控与飞单防范',
  }
}
