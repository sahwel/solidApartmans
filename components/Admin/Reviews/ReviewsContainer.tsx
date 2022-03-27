import React from 'react'
import Review from '../../Common/Review'

const ReviewsContainer = () => {
  return (
    <div className="grid max-h-[83vh] w-2/3 grid-cols-2 gap-4 overflow-auto">
      <Review
        review=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet
        quibusdam placeat assumenda quia commodi iusto incidunt, earum culpa
        corrupti laboriosam? Quos aspernatur cum explicabo rerum quod nesciunt
        unde soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facilis eveniet quibusdam placeat assumenda quia commodi iusto incidunt,
        earum culpa corrupti laboriosam? Quos aspernatur cum explicabo rerum
        quod nesciunt unde soluta."
        apartment="B aparman"
      />
      <Review
        apartment="B aparman"
        review=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet
        quibusdam p"
      />
      <Review
        review=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet
        quibusdam "
        apartment="B aparman"
      />
      <Review
        review=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet
        quibusdam "
        apartment="B aparman"
      />
      <Review
        review=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet
        quibusdam placeat assumenda quia commodi iusto incidunt, earum culpa
        corrupti laboriosam? Quos aspernatur cum explicabo rerum quod nesciunt
        unde soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facilis eveniet quibusdam placeat assumenda quia commodi iusto incidunt,
        earum culpa corrupti laboriosam? Quos aspernatur cum explicabo rerum
        quod nesciunt unde soluta."
        apartment="B aparman"
      />
    </div>
  )
}

export default ReviewsContainer
