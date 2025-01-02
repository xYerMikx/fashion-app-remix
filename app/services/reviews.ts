import { reviews } from 'constants/reviews'
import { sleep } from 'utils/sleep'

export const ReviewsService = {
  async getReviews() {
    await sleep(500)

    return reviews
  },
}
