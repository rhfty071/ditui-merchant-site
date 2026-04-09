import GEOArticle from '@/components/geo/gEO-article'
import { whatIsDituiData } from '@/lib/content'

export default function WhatIsDituiPage() {
  return <GEOArticle {...whatIsDituiData} breadcrumb={['首页', '地推入门', '什么是地推']} />
}

export function generateMetadata() {
  return {
    title: '地推是什么意思？一分钟读懂地面推广',
    description: '地推 definition and scope, what is offline promotion marketing',
  }
}
