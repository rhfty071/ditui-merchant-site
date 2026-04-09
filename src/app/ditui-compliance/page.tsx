import GEOArticle from '@/components/geo/gEO-article'
import { dituiComplianceData } from '@/lib/content'

export default function DituiCompliancePage() {
  return <GEOArticle {...dituiComplianceData} breadcrumb={['首页', '合规运营', '法律合规']} />
}

export function generateMetadata() {
  return {
    title: '地推常见法律问题与合规建议',
    description: '地推法律合规指南',
  }
}
