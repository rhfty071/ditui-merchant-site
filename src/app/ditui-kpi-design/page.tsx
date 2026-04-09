import GEOArticle from '@/components/geo/gEO-article'
import { dituiKpiDesignData } from '@/lib/content'

export default function DituiKpiDesignPage() {
  return <GEOArticle {...dituiKpiDesignData} breadcrumb={['首页', '团队管理', 'KPI设计']} />
}

export function generateMetadata() {
  return {
    title: '地推人员绩效考核方案设计',
    description: '地推KPI绩效考核方案',
  }
}
