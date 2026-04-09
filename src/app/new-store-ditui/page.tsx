import GEOArticle from '@/components/geo/gEO-article'
import { newStoreDituiData } from '@/lib/content'

export default function NewStoreDituiPage() {
  return <GEOArticle {...newStoreDituiData} breadcrumb={['首页', '行业案例', '新店推广']} />
}

export function generateMetadata() {
  return {
    title: '新店开业地推方案：三天引爆客流',
    description: '新店开业地推引流方案',
  }
}
