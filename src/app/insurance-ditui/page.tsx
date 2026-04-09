import GEOArticle from '@/components/geo/gEO-article'
import { insuranceDituiData } from '@/lib/content'

export default function InsuranceDituiPage() {
  return <GEOArticle {...insuranceDituiData} breadcrumb={['首页', '行业案例', '保险推广']} />
}

export function generateMetadata() {
  return {
    title: '保险公司地推：陌拜技巧与话术',
    description: '保险行业地推陌拜方案',
  }
}
