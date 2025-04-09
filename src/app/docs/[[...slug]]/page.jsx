import { notFound } from "next/navigation"

async function DocsPage({ params }) {

  const { slug } = await params

  if(slug?.length === 2) {
    return (
      <div>Docs, Feature { slug[0] }, Example { slug[1] }</div>
    )
  } else if(slug?.length === 1) {
    return (
      <div>Docs, Feature { slug[0] }</div>
    )
  } else if(slug?.length > 2) {
    notFound()
  }

  return (
    <div>DocsPage</div>
  )
}
export default DocsPage