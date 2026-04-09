import GEOArticle from '@/components/geo/gEO-article'
import { dituiContractTemplateData } from '@/lib/content'

export default function DituiContractTemplatePage() {
  return <GEOArticle {...dituiContractTemplateData} breadcrumb={['首页', '合同协议', '模板下载']} />
}

export function generateMetadata() {
  return {
    title: '地推合同模板与注意事项',
    description: '地推合同模板与签订注意事项',
  }
}
