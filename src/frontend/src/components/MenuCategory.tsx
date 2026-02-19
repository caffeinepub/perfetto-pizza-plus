interface MenuItem {
  name: string;
  price?: number;
  prices?: {
    small: number;
    medium: number;
    large: number;
  };
}

interface MenuCategoryProps {
  category: {
    name: string;
    emoji: string;
    items: MenuItem[];
  };
}

export default function MenuCategory({ category }: MenuCategoryProps) {
  const hasSizePricing = category.items[0]?.prices !== undefined;

  return (
    <div className="bg-off-white rounded-lg p-8 md:p-10 shadow-elegant border border-gold/20">
      {/* Category Header */}
      <div className="mb-8 pb-6 border-b-2 border-gold/30">
        <h3 className="text-3xl md:text-4xl font-bold text-charcoal font-display flex items-center gap-3">
          <span className="text-4xl">{category.emoji}</span>
          {category.name}
        </h3>
      </div>

      {/* Items */}
      {hasSizePricing ? (
        // Table layout for size-based pricing
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold/30">
                <th className="text-left py-4 px-3 text-soft-charcoal font-semibold text-sm uppercase tracking-wide">
                  Item
                </th>
                <th className="text-center py-4 px-3 text-soft-charcoal font-semibold text-sm uppercase tracking-wide">
                  Small
                </th>
                <th className="text-center py-4 px-3 text-soft-charcoal font-semibold text-sm uppercase tracking-wide">
                  Medium
                </th>
                <th className="text-center py-4 px-3 text-soft-charcoal font-semibold text-sm uppercase tracking-wide">
                  Large
                </th>
              </tr>
            </thead>
            <tbody>
              {category.items.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gold/10 hover:bg-white/60 transition-colors"
                >
                  <td className="py-5 px-3 text-charcoal font-medium">{item.name}</td>
                  <td className="py-5 px-3 text-center font-bold text-gold text-lg">
                    ₹{item.prices!.small}
                  </td>
                  <td className="py-5 px-3 text-center font-bold text-gold text-lg">
                    ₹{item.prices!.medium}
                  </td>
                  <td className="py-5 px-3 text-center font-bold text-gold text-lg">
                    ₹{item.prices!.large}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Grid layout for single pricing
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {category.items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 px-5 bg-white rounded-md hover:shadow-md transition-all border border-gold/10"
            >
              <span className="text-charcoal font-medium">{item.name}</span>
              <span className="font-bold text-gold text-xl ml-4">₹{item.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
