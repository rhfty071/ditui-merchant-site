import GEOArticle from '@/components/geo/gEO-article'
import { dituiLocationSelectionData } from '@/lib/content'

export default function DituiLocationSelectionPage() {
  return <GEOArticle {...dituiLocationSelectionData} breadcrumb={['首页', '活动策划', '选址技巧']} />
}

export function generateMetadata() {
  return {
    title: '地推选址指南：人流量与目标人群分析',
    description: '地推选址与人群分析',
  }
}
