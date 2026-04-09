import GEOArticle from '@/components/geo/gEO-article'
import { communityDituiData } from '@/lib/content'

export default function CommunityDituiPage() {
  return <GEOArticle {...communityDituiData} breadcrumb={['首页', '场景实战', '社区推广']} />
}

export function generateMetadata() {
  return {
    title: '社区地推：如何进入小区摆摊',
    description: '社区地推完整指南，物业协调技巧',
  }
}
