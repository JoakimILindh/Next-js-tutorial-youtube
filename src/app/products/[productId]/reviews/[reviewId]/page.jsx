async function ProductReviewPage({ params }) {

  const { productId, reviewId } = await params

  return (
    <div>
      ProductReviewPage
      <p>reviewId: { reviewId }</p>
      <p>productId: { productId }</p>
    </div>
  )
}
export default ProductReviewPage
