import { ThumbsUp, MessageSquare, Star } from 'lucide-react';

export default function ReviewsSection() {
  const positiveReviews = [
    {
      text: 'Delicious and fresh food',
      author: 'Happy Customer',
      rating: 5,
    },
    {
      text: 'Cozy and trendy atmosphere',
      author: 'Local Foodie',
      rating: 5,
    },
    {
      text: 'Good for students and families',
      author: 'Family Visitor',
      rating: 4,
    },
  ];

  const constructiveReviews = [
    {
      text: 'Cheese quantity concern',
      author: 'Pizza Lover',
      rating: 3,
      response: 'Thank you for your feedback! We are working on ensuring consistent cheese portions across all our pizzas.',
    },
    {
      text: 'Delivery service issues',
      author: 'Regular Customer',
      rating: 3,
      response: 'We apologize for the inconvenience. We have improved our delivery process and added more delivery partners.',
    },
    {
      text: 'Some pricing feedback',
      author: 'Student',
      rating: 3,
      response: 'We appreciate your input! We offer student-friendly combos and regular discounts. Check with us for current offers!',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-charcoal mb-4 font-display">
          🌟 What Our Customers Say
        </h2>
        <p className="text-center text-soft-charcoal mb-16 max-w-2xl mx-auto text-lg">
          We value every piece of feedback and continuously strive to improve your dining experience
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Positive Reviews */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <ThumbsUp className="w-7 h-7 text-gold" />
              <h3 className="text-3xl font-bold text-charcoal font-display">Positive Highlights</h3>
            </div>
            <div className="space-y-5">
              {positiveReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-off-white rounded-lg p-7 shadow-elegant hover:shadow-elegant-lg transition-all border border-gold/10"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-charcoal font-medium mb-3 text-lg">&ldquo;{review.text}&rdquo;</p>
                  <p className="text-sm text-soft-charcoal">— {review.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Constructive Feedback */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="w-7 h-7 text-gold" />
              <h3 className="text-3xl font-bold text-charcoal font-display">We're Listening</h3>
            </div>
            <div className="space-y-5">
              {constructiveReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-off-white rounded-lg p-7 shadow-elegant hover:shadow-elegant-lg transition-all border border-gold/10"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-charcoal font-medium mb-3 text-lg">&ldquo;{review.text}&rdquo;</p>
                  <p className="text-sm text-soft-charcoal mb-5">— {review.author}</p>
                  
                  {/* Owner Response */}
                  <div className="bg-white border-l-4 border-gold rounded-r-md p-5 mt-5 shadow-sm">
                    <p className="text-xs font-semibold text-gold mb-2 uppercase tracking-wide">Owner Response:</p>
                    <p className="text-sm text-soft-charcoal leading-relaxed">{review.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
