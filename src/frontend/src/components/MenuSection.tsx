import MenuCategory from './MenuCategory';

export default function MenuSection() {
  const pizzaCategories = [
    {
      name: 'BASIC PIZZA',
      emoji: '🟢',
      items: [
        { name: 'DBL Cheese Margherita', prices: { small: 130, medium: 250, large: 340 } },
        { name: 'Green Veggie', prices: { small: 130, medium: 250, large: 340 } },
        { name: 'Cheese-n-Mushroom', prices: { small: 130, medium: 250, large: 340 } },
        { name: 'Cheese-n-Corn', prices: { small: 130, medium: 250, large: 340 } },
      ],
    },
    {
      name: 'SILVER PIZZA',
      emoji: '🟡',
      items: [
        { name: 'Delight Pizza', prices: { small: 160, medium: 320, large: 480 } },
        { name: 'Achaari Pizza', prices: { small: 160, medium: 320, large: 480 } },
        { name: 'Tandoori Pizza', prices: { small: 160, medium: 320, large: 480 } },
        { name: 'Makhani Pizza', prices: { small: 160, medium: 320, large: 480 } },
        { name: 'Spicy Pizza', prices: { small: 160, medium: 320, large: 480 } },
      ],
    },
    {
      name: 'GOLD PIZZA',
      emoji: '🟠',
      items: [
        { name: 'Lovers Pizza', prices: { small: 200, medium: 380, large: 520 } },
        { name: 'Chipotle Pizza', prices: { small: 200, medium: 380, large: 520 } },
        { name: 'Harissa Pizza', prices: { small: 200, medium: 380, large: 520 } },
      ],
    },
    {
      name: 'PLATINUM PIZZA',
      emoji: '🔵',
      items: [
        { name: 'Paradise Pizza', prices: { small: 240, medium: 440, large: 560 } },
        { name: 'Supreme Pizza', prices: { small: 240, medium: 440, large: 560 } },
        { name: 'Deluxe Pizza', prices: { small: 240, medium: 440, large: 560 } },
      ],
    },
    {
      name: 'SUPER PIZZA',
      emoji: '🔴',
      items: [
        { name: 'Farm House', prices: { small: 280, medium: 480, large: 580 } },
        { name: 'Hot Country', prices: { small: 280, medium: 480, large: 580 } },
        { name: 'Indian Veggie', prices: { small: 280, medium: 480, large: 580 } },
      ],
    },
    {
      name: 'SPECIAL PIZZA',
      emoji: '⭐',
      items: [
        { name: 'Perfetto Special Pizza', prices: { small: 300, medium: 500, large: 600 } },
      ],
    },
  ];

  const otherCategories = [
    {
      name: 'BURGERS',
      emoji: '🍔',
      items: [
        { name: 'Veg Burger', price: 90 },
        { name: 'Cheese Burger', price: 100 },
        { name: 'Tandoori Burger', price: 120 },
        { name: 'Achari Burger', price: 130 },
        { name: 'Peri Peri Burger', price: 140 },
        { name: 'Crispy Paneer Burger', price: 160 },
        { name: 'Special Burger', price: 180 },
      ],
    },
    {
      name: 'WRAPS',
      emoji: '🌯',
      items: [
        { name: 'Aloo Patty Wrap', price: 100 },
        { name: 'Cheesy Wrap', price: 100 },
        { name: 'Spicy Wrap', price: 110 },
        { name: 'Crispy Paneer Wrap', price: 120 },
        { name: 'Tandoori Wrap', price: 140 },
        { name: 'Cheesy & Saucy Wrap', price: 140 },
      ],
    },
    {
      name: 'SANDWICH (2 pcs)',
      emoji: '🥪',
      items: [
        { name: 'Grilled Sandwich', price: 80 },
        { name: 'Spicy Sandwich', price: 90 },
        { name: 'Cheesy Sandwich', price: 100 },
        { name: 'Paneer Sandwich', price: 120 },
        { name: 'Double Decker Sandwich', price: 150 },
      ],
    },
    {
      name: 'BREAD',
      emoji: '🍞',
      items: [
        { name: 'Garlic Bread', price: 80 },
        { name: 'Cheese Corn Bread', price: 110 },
        { name: 'Stuffed Bread', price: 120 },
        { name: 'Cheese Garlic Bread', price: 120 },
      ],
    },
    {
      name: 'PASTA',
      emoji: '🍝',
      items: [
        { name: 'White Sauce Pasta', price: 120 },
        { name: 'Red Sauce Pasta', price: 120 },
        { name: 'Pink Sauce Pasta', price: 140 },
        { name: 'Cheesy Pasta', price: 150 },
      ],
    },
    {
      name: 'MOMOS (8 pcs)',
      emoji: '🥟',
      items: [
        { name: 'Steamed Momos', price: 80 },
        { name: 'Fried Momos', price: 100 },
        { name: 'Tandoori Momos', price: 120 },
        { name: 'Kurkure Momos', price: 130 },
        { name: 'Afghani Momos', price: 140 },
        { name: 'Cheese Momos', price: 150 },
      ],
    },
    {
      name: 'NOODLES',
      emoji: '🍜',
      items: [
        { name: 'Veg Noodles', price: 100 },
        { name: 'Hakka Noodles', price: 120 },
        { name: 'Schezwan Noodles', price: 130 },
        { name: 'Singapore Noodles', price: 140 },
      ],
    },
    {
      name: 'RICE',
      emoji: '🍚',
      items: [
        { name: 'Veg Fried Rice', price: 100 },
        { name: 'Schezwan Rice', price: 120 },
        { name: 'Singapore Rice', price: 130 },
      ],
    },
    {
      name: 'SHAKES',
      emoji: '🥤',
      items: [
        { name: 'Chocolate Shake', price: 80 },
        { name: 'Vanilla Shake', price: 80 },
        { name: 'Strawberry Shake', price: 80 },
        { name: 'Mango Shake', price: 80 },
        { name: 'Oreo Shake', price: 100 },
        { name: 'KitKat Shake', price: 100 },
      ],
    },
    {
      name: 'MOJITOS',
      emoji: '🍹',
      items: [
        { name: 'Blue Lagoon', price: 80 },
        { name: 'Mint Mojito', price: 80 },
        { name: 'Lemon Mojito', price: 80 },
        { name: 'Watermelon Mojito', price: 90 },
        { name: 'Virgin Mojito', price: 100 },
      ],
    },
    {
      name: 'DESSERTS',
      emoji: '🍰',
      items: [
        { name: 'Brownie with Ice Cream', price: 120 },
        { name: 'Chocolate Lava Cake', price: 100 },
        { name: 'Gulab Jamun (2 pcs)', price: 40 },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Menu Hero Image */}
        <div className="relative mb-16 rounded-xl overflow-hidden shadow-elegant-lg border-2 border-gold/30">
          <img
            src="/assets/generated/menu-hero.dim_1200x600.png"
            alt="Our Menu"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent flex items-end justify-center pb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white font-display tracking-tight">
              Our Menu
            </h2>
          </div>
        </div>

        {/* Pizza Categories */}
        <div className="mb-20">
          <div className="max-w-6xl mx-auto space-y-12">
            {pizzaCategories.map((category, index) => (
              <MenuCategory key={index} category={category} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        </div>

        {/* Other Categories */}
        <div className="max-w-6xl mx-auto space-y-12">
          {otherCategories.map((category, index) => (
            <MenuCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
