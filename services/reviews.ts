
export const ReviewsService = {
  async getReviews() {
    const reviewsResponse = await fetch(`${process.env.API_URL}/reviews`)

    if (!reviewsResponse.ok) {
      throw new Error('Failed to fetch products')
    }

    return reviewsResponse.json()
  },
}
