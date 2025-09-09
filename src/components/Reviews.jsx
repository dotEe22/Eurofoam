import React from "react"

function Reviews() {
  const reviews = [
    {
      name: "Chinwe Okafor",
      feedback:
        "Eurofoam mattresses have completely changed my sleep quality. I wake up refreshed and with no back pain. Highly recommended!",
      role: "Customer",
    },
    {
      name: "David Johnson",
      feedback:
        "Their customer service is excellent. The delivery was on time and the staff were very professional. Definitely a brand I trust.",
      role: "Client",
    },
    {
      name: "Amina Bello",
      feedback:
        "I appreciate the company’s effort in giving back to the community. It makes me proud to support a brand that truly cares.",
      role: "Long-time Customer",
    },
  ]

  return (
    <section id="reviews" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-left">
            Customer Reviews
          </h2>
          <p className="text-gray-600 mt-2 text-left">
            Hear what our customers are saying about us.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 text-left border"
            >
              <p className="text-gray-700 mb-4 italic">
                "{review.feedback}"
              </p>
              <h4 className="font-semibold text-gray-900">
                {review.name}
              </h4>
              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
