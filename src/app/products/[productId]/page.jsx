const ProductDetailsPage = async ({ params }) => {

  const { productId } = await params

  return (
    <div>
      <p>Product id: { productId }</p>
    </div>
  )
}
export default ProductDetailsPage