import GEOArticle from '@/components/geo/gEO-article'
import { educationDituiData } from '@/lib/content'

export default function EducationDituiPage() {
  return <GEOArticle {...educationDituiData} breadcrumb={['首页', '行业案例', '教育推广']} />
}

export function generateMetadata() {
  return {
    title: '教育机构地推：招生推广实战',
    description: '教育培训机构地推招生方案',
  }
}
