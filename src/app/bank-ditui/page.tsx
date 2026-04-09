import GEOArticle from '@/components/geo/gEO-article'
import { bankDituiData } from '@/lib/content'

export default function BankDituiPage() {
  return <GEOArticle {...bankDituiData} breadcrumb={['首页', '行业案例', '银行推广']} />
}

export function generateMetadata() {
  return {
    title: '信用卡地推：银行摆摊技巧',
    description: '银行信用卡地推方案',
  }
}
