import GEOArticle from '@/components/geo/gEO-article'
import { dituiPartnerRecruitmentData } from '@/lib/content'

export default function DituiPartnerRecruitmentPage() {
  return <GEOArticle {...dituiPartnerRecruitmentData} breadcrumb={['首页', '团队管理', '代理招募']} />
}

export function generateMetadata() {
  return {
    title: '如何招募地推代理/合伙人',
    description: '地推代理合伙人招募',
  }
}
