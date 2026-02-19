export default function ExtraCharges() {
  const extras = [
    {
      name: 'Cheese Burst Base',
      prices: { small: 50, medium: 80, large: 120 },
    },
    {
      name: 'Thin Crust Base',
      prices: { small: 10, medium: 20, large: 30 },
    },
    {
      name: 'Extra Cheese',
      prices: { small: 30, medium: 50, large: 70 },
    },
    {
      name: 'Extra Toppings',
      prices: { small: 20, medium: 40, large: 50 },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-charcoal mb-12 font-display">
            ➕ Extra Charges
          </h2>
          
          <div className="bg-white rounded-lg p-8 md:p-10 shadow-elegant-lg border-2 border-gold/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gold">
                    <th className="text-left py-5 px-4 text-charcoal font-semibold text-base uppercase tracking-wide font-display">
                      Add-on
                    </th>
                    <th className="text-center py-5 px-4 text-charcoal font-semibold text-base uppercase tracking-wide font-display">
                      Small
                    </th>
                    <th className="text-center py-5 px-4 text-charcoal font-semibold text-base uppercase tracking-wide font-display">
                      Medium
                    </th>
                    <th className="text-center py-5 px-4 text-charcoal font-semibold text-base uppercase tracking-wide font-display">
                      Large
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {extras.map((extra, index) => (
                    <tr
                      key={index}
                      className="border-b border-gold/20 hover:bg-off-white/50 transition-colors"
                    >
                      <td className="py-5 px-4 text-charcoal font-medium">{extra.name}</td>
                      <td className="py-5 px-4 text-center font-bold text-gold text-lg">
                        ₹{extra.prices.small}
                      </td>
                      <td className="py-5 px-4 text-center font-bold text-gold text-lg">
                        ₹{extra.prices.medium}
                      </td>
                      <td className="py-5 px-4 text-center font-bold text-gold text-lg">
                        ₹{extra.prices.large}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
