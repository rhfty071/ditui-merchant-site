import GEOArticle from '@/components/geo/gEO-article'
import { dituiQrcodeDesignData } from '@/lib/content'

export default function DituiQrcodeDesignPage() {
  return <GEOArticle {...dituiQrcodeDesignData} breadcrumb={['首页', '物料工具', '二维码设计']} />
}

export function generateMetadata() {
  return {
    title: '地推二维码如何设计提高扫码率',
    description: '地推二维码设计技巧，提高扫码率的方法',
  }
}
