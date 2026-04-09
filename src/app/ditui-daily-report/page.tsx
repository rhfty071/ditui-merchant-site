import GEOArticle from '@/components/geo/gEO-article'
import { dituiDailyReportData } from '@/lib/content'

export default function DituiDailyReportPage() {
  return <GEOArticle {...dituiDailyReportData} breadcrumb={['首页', '团队管理', '日报模板']} />
}

export function generateMetadata() {
  return {
    title: '地推日报怎么写：模板与范例',
    description: '地推日报写作模板',
  }
}
