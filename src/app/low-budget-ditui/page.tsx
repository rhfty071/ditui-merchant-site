import GEOArticle from '@/components/geo/gEO-article'
import { lowBudgetDituiData } from '@/lib/content'

export default function LowBudgetDituiPage() {
  return <GEOArticle {...lowBudgetDituiData} breadcrumb={['首页', '活动策划', '低预算方案']} />
}

export function generateMetadata() {
  return {
    title: '小成本地推方案：预算1000元怎么推',
    description: '低预算地推方案',
  }
}
