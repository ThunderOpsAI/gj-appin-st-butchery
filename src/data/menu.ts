export type MenuCategory = 'packs' | 'beef' | 'lamb-pork' | 'poultry' | 'sausages' | 'xmas';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  description?: string;
  tags?: string[];
  popular?: boolean;
  unit?: string;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Cuts & Packs', icon: '🥩' },
  { id: 'packs', label: 'Weekly Meat Packs ($50/$100)', icon: '📦' },
  { id: 'beef', label: 'Prime Beef & Steaks', icon: '🥩' },
  { id: 'lamb-pork', label: 'Local Lamb & Pork', icon: '🍖' },
  { id: 'poultry', label: 'Free-Range Poultry', icon: '🍗' },
  { id: 'sausages', label: 'House Sausages & Bacon', icon: '🌭' },
  { id: 'xmas', label: 'Christmas Hams & Roasts', icon: '🎄' },
] as const;

export const MENU_TAGS = ['All', 'Best Seller', 'Value Pack', 'Prime Cut', 'Locally Sourced', 'Xmas Favourite', 'Award Winner'] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Packs
  {
    id: 'pack-50',
    name: '$50 Tradie & Smoko BBQ Pack',
    price: 50.00,
    description: '1kg Premium Beef Mince, 1kg Thin BBQ Sausages, 1kg Marinated Chicken Drumsticks, 6 Thick-Cut Loin Pork Chops.',
    category: 'packs',
    tags: ['Best Seller', 'Value Pack'],
    popular: true,
    unit: 'pack'
  },
  {
    id: 'pack-100',
    name: '$100 Jumbo Family Meat Pack',
    price: 100.00,
    description: '1.5kg Rump Steak, 1.5kg Beef Mince, 1.5kg Gourmet Sausages, 1kg Chicken Breast Fillets, 1kg Pork Chops, 8 Beef Burger Patties.',
    category: 'packs',
    tags: ['Best Seller', 'Value Pack'],
    popular: true,
    unit: 'pack'
  },
  {
    id: 'pack-150',
    name: '$150 Ultimate Freezer Stuffer Pack',
    price: 150.00,
    description: '2kg Scotch Fillet / Ribeye, 2kg Premium Mince, 2kg Gourmet Sausages, 2kg Chicken Breast, 1.5kg Lamb Chops, 1 Rolled Roast Beef (approx 1.5kg).',
    category: 'packs',
    tags: ['Value Pack'],
    unit: 'pack'
  },
  {
    id: 'pack-bbq',
    name: '$75 Weekend Footy BBQ Crate',
    price: 75.00,
    description: '12 House-made Beef Sausages, 10 Marinated Lamb Forequarter Chops, 8 Wagyu Burger Patties, 1kg BBQ Honey-Soy Wings.',
    category: 'packs',
    tags: ['Value Pack'],
    unit: 'pack'
  },

  // Beef
  {
    id: 'beef-scotch',
    name: 'Grass-Fed Victorian Scotch Fillet',
    price: 44.99,
    description: 'Hand-selected North East Victorian grass-fed beef. Exceptionally marbled and aged for 28 days.',
    category: 'beef',
    tags: ['Prime Cut', 'Locally Sourced'],
    popular: true,
    unit: 'per kg'
  },
  {
    id: 'beef-rump',
    name: 'Aged Grass-Fed Rump Steak',
    price: 29.99,
    description: 'Tender, flavourful everyday steak perfect for the pan or grill.',
    category: 'beef',
    tags: ['Locally Sourced'],
    unit: 'per kg'
  },
  {
    id: 'beef-mince',
    name: 'Premium Lean Beef Mince',
    price: 17.99,
    description: 'Freshly minced twice daily from whole muscle beef cuts with less than 10% fat.',
    category: 'beef',
    tags: ['Best Seller'],
    popular: true,
    unit: 'per kg'
  },
  {
    id: 'beef-roast',
    name: 'Rolled Topside Roast Beef',
    price: 24.99,
    description: 'Tied and trimmed ready for the Sunday roast with rosemary and sea salt rubbing.',
    category: 'beef',
    unit: 'per kg'
  },

  // Lamb & Pork
  {
    id: 'lamb-chops',
    name: 'Rosemary & Garlic Marinated Lamb Chops',
    price: 26.99,
    description: 'Local Victorian prime lamb forequarter chops steeped in garlic, olive oil, and rosemary.',
    category: 'lamb-pork',
    tags: ['Locally Sourced'],
    popular: true,
    unit: 'per kg'
  },
  {
    id: 'lamb-cutlets',
    name: 'French-Trimmed Lamb Cutlets',
    price: 48.99,
    description: 'Sweet, tender lamb cutlets trimmed down to the bone.',
    category: 'lamb-pork',
    tags: ['Prime Cut'],
    unit: 'per kg'
  },
  {
    id: 'pork-chops',
    name: 'Free-Range Pork Loin Chops',
    price: 21.99,
    description: 'Moist, tender pork loin chops with crispy crackling edge.',
    category: 'lamb-pork',
    unit: 'per kg'
  },

  // Poultry
  {
    id: 'poultry-breast',
    name: 'Free-Range Chicken Breast Fillets',
    price: 16.99,
    description: 'Skinless, boneless tender chicken breast sourced from Victorian humane free-range farms.',
    category: 'poultry',
    tags: ['Best Seller'],
    unit: 'per kg'
  },
  {
    id: 'poultry-schnitzel',
    name: 'Hand-Crumbed Herb & Parmesan Schnitzels',
    price: 19.99,
    description: 'Tenderised chicken breast coated in fresh sourdough breadcrumbs and parmesan.',
    category: 'poultry',
    unit: 'per kg'
  },

  // Sausages
  {
    id: 'snag-traditional',
    name: 'G&J Traditional Thin Beef Sausages',
    price: 15.99,
    description: 'Our iconic recipe that Wangaratta families have loved for decades. Natural casings.',
    category: 'sausages',
    tags: ['Award Winner', 'Best Seller'],
    popular: true,
    unit: 'per kg'
  },
  {
    id: 'snag-pork-fennel',
    name: 'Gourmet Pork, Apple & Fennel Sausages',
    price: 18.99,
    description: 'Coarse ground pork with roasted fennel seed and diced granny smith apples.',
    category: 'sausages',
    tags: ['Award Winner'],
    unit: 'per kg'
  },
  {
    id: 'snag-hickory-bacon',
    name: 'Wood-Smoked Rindless Short Cut Bacon',
    price: 22.99,
    description: 'Smoked on redgum chips in-house. Minimal shrinkage, rich golden smoke.',
    category: 'sausages',
    tags: ['Award Winner'],
    unit: 'per kg'
  },

  // Christmas Hams
  {
    id: 'xmas-ham-half',
    name: 'Traditional Bone-In Christmas Ham (Half 4-5kg)',
    price: 85.00,
    description: 'Slow-cured Australian pork leg smoked over redgum wood. Tender, juicy, with golden glaze rind. $30 deposit required to reserve.',
    category: 'xmas',
    tags: ['Xmas Favourite'],
    popular: true,
    unit: 'per half ham'
  },
  {
    id: 'xmas-ham-full',
    name: 'Traditional Bone-In Christmas Ham (Full 8-10kg)',
    price: 160.00,
    description: 'Full feast size for large family Christmas celebrations. Slow redgum wood smoked. $50 deposit required to reserve.',
    category: 'xmas',
    tags: ['Xmas Favourite'],
    popular: true,
    unit: 'per whole ham'
  },
  {
    id: 'xmas-pork-roll',
    name: 'Rolled Pork Leg Roast with Perfect Crackling (2.5kg)',
    price: 55.00,
    description: 'Score-lined and salted ready for unbeatable crunchy crackling on Christmas Day.',
    category: 'xmas',
    unit: 'per roast'
  }
];
