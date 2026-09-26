export interface ServiceItem {
  id: string; // Slug used in URL: /services/:slug
  name: string;
  pageHeading: string;
  intro: string;
  shortDescription: string;
  fullDescription: string;
  category: 'residential' | 'commercial' | 'turnkey';
  highlights: string[];
  scopePoints: { title: string; detail: string }[];
  imageType: 'living' | 'kitchen' | 'wardrobe' | 'tv-unit' | 'bedroom' | 'ceiling' | 'pooja' | 'office' | 'restaurant' | 'turnkey';
  secondaryImageType: 'living' | 'kitchen' | 'wardrobe' | 'tv-unit' | 'bedroom' | 'ceiling' | 'pooja' | 'office' | 'restaurant' | 'turnkey';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InspirationItem {
  id: string;
  title: string;
  category: 'living' | 'kitchen' | 'bedroom' | 'wardrobe' | 'tv-unit' | 'commercial';
  categoryLabel: string;
  caption: string;
  features: string[];
}

export const BUSINESS_INFO = {
  name: 'Krishnaveni Interiors',
  tagline: 'Designing Dreams. Creating Beautiful Spaces.',
  serviceArea: 'Hyderabad',
  phone: '+91 90100 91915',
  phoneLink: 'tel:+919010091915',
  whatsappUrl: 'https://wa.me/919010091915',
  whatsappNumber: '919010091915',
  defaultWhatsAppMessage: 'Hello Krishnaveni Interiors, I would like to discuss an interior project. Please help me with the next steps.',
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'complete-home-interiors',
    name: 'Complete Home Interiors',
    pageHeading: 'Coordinated Complete Home Interiors in Hyderabad',
    intro: 'Transform your flat, villa, or independent house into a harmonious, well-proportioned living environment designed around your daily lifestyle.',
    shortDescription: 'Bring your home together with coordinated designs for living areas, bedrooms, kitchens and storage.',
    fullDescription: 'Bring your home together with coordinated designs for living areas, bedrooms, kitchens and storage. We plan end-to-end layouts tailored to your family’s lifestyle, ensuring harmonious aesthetics, durable materials, and functional space utilisation across your entire Hyderabad residence.',
    category: 'residential',
    highlights: ['End-to-end space planning', 'Coordinated colour palettes & finishes', 'Integrated lighting & storage'],
    scopePoints: [
      { title: 'Harmonious Flow', detail: 'Consistent material and colour language connecting entryways, living zones, bedrooms, and dining spaces.' },
      { title: 'Space Optimisation', detail: 'Tailored floor plans that make the most of every square foot with ergonomic movement paths.' },
      { title: 'Integrated Storage', detail: 'Built-in cabinets, wardrobes, and utility solutions designed to reduce clutter without dominating the room.' },
    ],
    imageType: 'living',
    secondaryImageType: 'turnkey',
  },
  {
    id: 'modular-kitchens',
    name: 'Modular Kitchens',
    pageHeading: 'Ergonomic Modular Kitchens for Indian Cooking',
    intro: 'Modern kitchen layouts balancing durability, efficient storage access, and beautiful aesthetics tailored to everyday cooking needs.',
    shortDescription: 'Create a kitchen with practical work areas, accessible storage and finishes that complement your home.',
    fullDescription: 'Create a kitchen with practical work areas, accessible storage and finishes that complement your home. Designed for Indian cooking requirements with ergonomic work triangles, high-durability countertops, soft-close hardware, pull-out larders, and easy-to-clean finishes.',
    category: 'residential',
    highlights: ['Ergonomic work triangle design', 'Moisture & heat resistant materials', 'Customised modular cabinetry'],
    scopePoints: [
      { title: 'The Golden Triangle', detail: 'Optimal distance and layout connecting hob, refrigerator, and sink for seamless preparation.' },
      { title: 'Smart Pull-Outs & Larders', detail: 'Deep tandem boxes, spice pullouts, cutlery trays, and corner carousel units.' },
      { title: 'Resilient Finishes', detail: 'Heat and steam-resistant acrylic, laminate, and PU finishes suited for everyday cooking.' },
    ],
    imageType: 'kitchen',
    secondaryImageType: 'living',
  },
  {
    id: 'wardrobes',
    name: 'Custom Wardrobes',
    pageHeading: 'Built-to-Measure Custom Wardrobes & Closets',
    intro: 'Maximise storage with wardrobe configurations custom-sized to room height and tailored to your clothing, accessories, and daily routines.',
    shortDescription: 'Make room for your belongings with wardrobe designs suited to your space and storage needs.',
    fullDescription: 'Make room for your belongings with wardrobe designs suited to your space and storage needs. From sliding and openable wardrobes to walk-in closets with integrated lighting, internal organisers, and premium glass or wood laminate shutters.',
    category: 'residential',
    highlights: ['Sliding & hinged configurations', 'Specialised internal organisers', 'Tinted glass, laminate & veneer options'],
    scopePoints: [
      { title: 'Custom Internal Sections', detail: 'Dedicated long-hang, short-hang, trouser racks, jewellery trays, and lockable security drawers.' },
      { title: 'Floor-to-Ceiling Height', detail: 'Loft storage seamlessly built to ceiling level to utilise vertical volume.' },
      { title: 'Shutter Variety', detail: 'Contemporary tinted fluted glass, matte laminates, mirrored panels, or rich textured veneers.' },
    ],
    imageType: 'wardrobe',
    secondaryImageType: 'bedroom',
  },
  {
    id: 'tv-units',
    name: 'Designer TV Units',
    pageHeading: 'Focal TV Consoles & Entertainment Walls',
    intro: 'Create a clean, stunning visual anchor for your living room or family lounge with concealed cable routing and elegant materials.',
    shortDescription: 'Combine display, storage and a stylish focal point for your living room.',
    fullDescription: 'Combine display, storage and a stylish focal point for your living room. We craft entertainment consoles featuring concealed wire management, marble or fluted acoustic backdrops, floating cabinetry, and ambient cove lighting.',
    category: 'residential',
    highlights: ['Concealed cable routing', 'Marble, fluted & wooden backdrops', 'Floating display consoles with cove lighting'],
    scopePoints: [
      { title: 'Wire Concealment', detail: 'Hidden conduit pathways keeping all power strips, set-top boxes, and gaming consoles tidy.' },
      { title: 'Feature Wall Panels', detail: 'Fluted wood slats, Italian marble slabs, or acoustic fabric backsplashes.' },
      { title: 'Floating Storage', detail: 'Cantilevered credenzas that preserve clear floor space and facilitate automated robot vacuuming.' },
    ],
    imageType: 'tv-unit',
    secondaryImageType: 'living',
  },
  {
    id: 'living-room-interiors',
    name: 'Living Room Interiors',
    pageHeading: 'Welcoming Living Rooms Designed for Living & Entertaining',
    intro: 'The centerpiece of your home. We blend comfortable seating arrangements, curated accent walls, and atmospheric lighting for relaxing with family and hosting guests.',
    shortDescription: 'Design welcoming spaces to spend time together and comfortable rooms to unwind.',
    fullDescription: 'Create a comfortable setting for family time and entertaining, with coordinated seating layouts, storage and finishes. Thoughtfully positioned accents, wall paneling, and warm lighting create an atmosphere of understated elegance.',
    category: 'residential',
    highlights: ['Custom seating & layout zoning', 'Accent wall panelling & textures', 'Balanced ambient and task lighting'],
    scopePoints: [
      { title: 'Conversation Layouts', detail: 'Seating plans that facilitate easy discussion and comfortable sightlines.' },
      { title: 'Layered Illumination', detail: 'A combination of ceiling coves, spotlight accents, and wall sconces to adjust mood effortlessly.' },
      { title: 'Textured Finishes', detail: 'Subtle wall mouldings, veneer paneling, and tactile upholstery chosen for enduring appeal.' },
    ],
    imageType: 'living',
    secondaryImageType: 'tv-unit',
  },
  {
    id: 'bedroom-interiors',
    name: 'Bedroom Interiors',
    pageHeading: 'Restful & Serene Bedroom Sanctuaries',
    intro: 'Personal retreats crafted with quiet colour palettes, soft-touch headboards, clutter-free dressers, and calming illumination.',
    shortDescription: 'Bring together restful colours, practical furniture layouts and storage suited to your daily routine.',
    fullDescription: 'Bring together restful colours, practical furniture layouts and storage suited to your daily routine. We create calm, peaceful personal sanctuaries featuring custom headboards, bedside integration, dressing zones, and acoustic comfort.',
    category: 'residential',
    highlights: ['Restful, warm colour palettes', 'Custom upholstered headboards & beds', 'Dressing nooks & coordinated nightstands'],
    scopePoints: [
      { title: 'Bed & Headboard Integration', detail: 'Custom padded headboards extending across bedside tables with integrated reading lights and switches.' },
      { title: 'Dedicated Vanity Dressing', detail: 'Concealed cosmetic storage with full-length LED back-lit mirrors.' },
      { title: 'Calming Palettes', detail: 'Earthy warms, champagne tones, and neutral ivories designed to encourage restorative sleep.' },
    ],
    imageType: 'bedroom',
    secondaryImageType: 'wardrobe',
  },
  {
    id: 'false-ceilings',
    name: 'False Ceiling Designs',
    pageHeading: 'Architectural False Ceilings & Lighting Integration',
    intro: 'Elevate room proportions with gypsum and wooden ceiling profiles that conceal AC wiring while creating soft indirect ambient illumination.',
    shortDescription: 'Add definition to your rooms with ceiling designs that complement the layout and lighting plan.',
    fullDescription: 'Add definition to your rooms with ceiling designs that complement the layout and lighting plan. Gypsum and wooden ceiling treatments with warm indirect cove lighting, magnetic track lights, and seamless AC ducting integration.',
    category: 'residential',
    highlights: ['Architectural gypsum & wooden beams', 'Indirect warm cove & profile lighting', 'Clean acoustic & height zoning'],
    scopePoints: [
      { title: 'Indirect Cove Glow', detail: 'Warm 3000K LED strips hidden in perimeter recesses for soft, non-glare illumination.' },
      { title: 'Zone Definition', detail: 'Ceiling recesses subtly delineate dining and living sections within open-plan spaces.' },
      { title: 'Duct & Wiring Concealment', detail: 'Flawless flush mounting of HVAC vents, chandeliers, and magnetic track light fittings.' },
    ],
    imageType: 'ceiling',
    secondaryImageType: 'living',
  },
  {
    id: 'pooja-units',
    name: 'Pooja Units',
    pageHeading: 'Sacred Pooja Units & Mandir Enclosures',
    intro: 'Dedicated prayer sanctuaries designed in harmony with traditional reverence and modern contemporary aesthetics.',
    shortDescription: 'Plan a dedicated prayer space that fits naturally into your home.',
    fullDescription: 'Plan a dedicated prayer space that fits naturally into your home. Designed in harmony with traditional sensibilities and modern interior styles, featuring intricate laser-cut jali work, brass bells, drawers for pooja samagri, and serene ambient illumination.',
    category: 'residential',
    highlights: ['Laser-cut jali & CNC backdrops', 'Concealed storage for sacred essentials', 'Serene brass & warm backlighting details'],
    scopePoints: [
      { title: 'Traditional Craftsmanship', detail: 'Precision CNC cut jali patterns, bell inlays, and warm teak wood or brass accents.' },
      { title: 'Samagri Organisation', detail: 'Dedicated drawers with incense and oil-resistant laminate linings.' },
      { title: 'Sanctified Lighting', detail: 'Soft golden backlighting illuminating sacred deities and symbols.' },
    ],
    imageType: 'pooja',
    secondaryImageType: 'living',
  },
  {
    id: 'office-interiors',
    name: 'Office Interiors',
    pageHeading: 'Productive & Professional Workspace Interiors',
    intro: 'Commercial office environments in Hyderabad planned around workflow efficiency, acoustic privacy, and executive brand presence.',
    shortDescription: 'Shape a workspace around the way your team works, meets and welcomes visitors.',
    fullDescription: 'Shape a workspace around the way your team works, meets and welcomes visitors. Professional office layouts featuring executive cabins, ergonomic workstations, acoustic conference rooms, and reception lounges that communicate credibility.',
    category: 'commercial',
    highlights: ['Functional workstation planning', 'Acoustic conference & cabin partitions', 'Branded reception & breakout zones'],
    scopePoints: [
      { title: 'Acoustic Privacy', detail: 'Double-glazed glass partitions and acoustic wall panels for productive meeting rooms.' },
      { title: 'Ergonomic Workstations', detail: 'Linear and cluster desk layouts with integrated power trunking and comfortable task lighting.' },
      { title: 'Executive Presence', detail: 'Sophisticated director cabins and reception waiting areas that impress corporate clients.' },
    ],
    imageType: 'office',
    secondaryImageType: 'turnkey',
  },
  {
    id: 'hotel-restaurant-interiors',
    name: 'Hotel & Restaurant Interiors',
    pageHeading: 'Distinctive Hospitality, Hotel & Dining Spaces',
    intro: 'Captivating dining rooms, cafes, and hospitality spaces balancing memorable guest ambiance with high-traffic commercial durability.',
    shortDescription: 'Create inviting spaces that reflect your business and support everyday operations.',
    fullDescription: 'Create inviting spaces that reflect your business and support everyday operations. We design hospitality interiors that balance memorable patron atmosphere, smart service circulation, durable commercial materials, and mood lighting.',
    category: 'commercial',
    highlights: ['Atmospheric dining zoning & booth seating', 'Durable, high-traffic commercial finishes', 'Operational flow & service coordination'],
    scopePoints: [
      { title: 'Circulation & Seating Density', detail: 'Optimised table spacing allowing swift waiter movement and guest privacy.' },
      { title: 'Atmospheric Mood Lighting', detail: 'Dimmable zoned lights creating distinct daytime and evening dining experiences.' },
      { title: 'High-Durability Surfaces', detail: 'Stain-resistant laminates, commercial-grade upholstery, and durable wall claddings.' },
    ],
    imageType: 'restaurant',
    secondaryImageType: 'office',
  },
  {
    id: 'turnkey-interiors',
    name: 'Turnkey Interior Solutions',
    pageHeading: 'End-to-End Turnkey Interior Execution in Hyderabad',
    intro: 'A cohesive design-and-build experience. From initial 2D layout planning and 3D visualisations through on-site execution and final handover.',
    shortDescription: 'Discuss a complete interior project that brings design and execution together, with the included services and responsibilities defined in your proposal.',
    fullDescription: 'Discuss a complete interior project that brings design and execution together, with the included services and responsibilities defined in your proposal. Experience end-to-end design coordination from 2D/3D planning and material sourcing through site execution and handover.',
    category: 'turnkey',
    highlights: ['Single-point design coordination', 'Structured site execution schedule', 'Defined scope & transparent material specs'],
    scopePoints: [
      { title: 'Single Point of Responsibility', detail: 'Eliminate coordination headaches with our consolidated project management and site oversight.' },
      { title: 'Documented Specifications', detail: 'Every board, hardware fitting, and paint shade is clearly documented in your approved proposal.' },
      { title: 'Milestone-Based Execution', detail: 'Phased site work covering civil, electrical, carpentry, false ceiling, painting, and handover.' },
    ],
    imageType: 'turnkey',
    secondaryImageType: 'living',
  },
];

export const HOME_SERVICES_CARDS = [
  {
    id: 'complete-home-interiors',
    title: 'Complete Home Interiors',
    description: 'Bring your home together with coordinated designs for living areas, bedrooms, kitchens and storage.',
    slug: 'complete-home-interiors',
    imageType: 'living' as const,
  },
  {
    id: 'modular-kitchens',
    title: 'Modular Kitchens',
    description: 'Create a kitchen with practical work areas, accessible storage and finishes that complement your home.',
    slug: 'modular-kitchens',
    imageType: 'kitchen' as const,
  },
  {
    id: 'wardrobes',
    title: 'Custom Wardrobes',
    description: 'Make room for your belongings with wardrobe designs suited to your space and storage needs.',
    slug: 'wardrobes',
    imageType: 'wardrobe' as const,
  },
  {
    id: 'tv-units',
    title: 'Designer TV Units',
    description: 'Combine display, storage and a stylish focal point for your living room.',
    slug: 'tv-units',
    imageType: 'tv-unit' as const,
  },
  {
    id: 'living-room-interiors',
    title: 'Living Rooms & Bedrooms',
    description: 'Design welcoming spaces to spend time together and comfortable rooms to unwind.',
    slug: 'living-room-interiors',
    imageType: 'bedroom' as const,
  },
  {
    id: 'false-ceilings',
    title: 'False Ceilings & Pooja Units',
    description: 'Complete your home with ceiling details and a thoughtfully planned space for prayer.',
    slug: 'false-ceilings',
    imageType: 'pooja' as const,
  },
  {
    id: 'office-interiors',
    title: 'Office Interiors',
    description: 'Shape a workspace around the way your team works, meets and welcomes visitors.',
    slug: 'office-interiors',
    imageType: 'office' as const,
  },
  {
    id: 'hotel-restaurant-interiors',
    title: 'Hotel & Restaurant Interiors',
    description: 'Create inviting spaces that reflect your business and support everyday operations.',
    slug: 'hotel-restaurant-interiors',
    imageType: 'restaurant' as const,
  },
];

export const DESIGN_APPROACH = [
  {
    number: '01',
    title: 'Personal Style',
    description: 'Colours, textures and finishes that reflect your preferences.',
  },
  {
    number: '02',
    title: 'Practical Layouts',
    description: 'Spaces planned around movement, furniture and daily use.',
  },
  {
    number: '03',
    title: 'Useful Storage',
    description: 'Considered storage ideas that help keep your rooms organised.',
  },
  {
    number: '04',
    title: 'A Coordinated Look',
    description: 'Details that work together across your interiors.',
  },
];

export const GETTING_STARTED_STEPS = [
  {
    step: 'Step 1',
    title: 'Share Your Space',
    description: 'Tell us about your property, location and the interiors you need.',
  },
  {
    step: 'Step 2',
    title: 'Discuss Your Ideas',
    description: 'Share your preferred style, floor plan and budget range.',
  },
  {
    step: 'Step 3',
    title: 'Request a Proposal',
    description: 'Discuss the scope, estimate and proposed timeline for your project.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'What services do you offer?',
    answer: 'We offer complete home interiors, modular kitchens, wardrobes, TV units, living rooms, bedrooms, false ceilings, pooja units and commercial interior solutions.',
  },
  {
    question: 'Can I enquire about a single room?',
    answer: 'Yes. You can enquire about individual rooms or interior elements as well as a complete property.',
  },
  {
    question: 'Do you offer commercial interiors?',
    answer: 'Yes. Our services include office, hotel and restaurant interiors.',
  },
  {
    question: 'What should I share when requesting a quote?',
    answer: 'Share your property location, approximate size, required services, preferred budget and a floor plan if available.',
  },
  {
    question: 'How much will my interiors cost?',
    answer: 'The estimate depends on the scope, measurements, materials, finishes and customisation. Contact us for a project-specific discussion.',
  },
  {
    question: 'How long will the project take?',
    answer: 'Timelines depend on the confirmed scope, approvals, material availability and site readiness. Discuss the proposed schedule when requesting your quote.',
  },
];

export const INSPIRATION_GALLERY: InspirationItem[] = [
  {
    id: 'insp-1',
    title: 'Contemporary Hyderabad Living Suite',
    category: 'living',
    categoryLabel: 'Living Rooms',
    caption: 'Warm ivory textures, custom curved sectional seating, fluted marble accents, and warm recessed cove lighting.',
    features: ['Recessed Cove Lighting', 'Fluted Wall Paneling', 'Champagne Brass Accents'],
  },
  {
    id: 'insp-2',
    title: 'Warm Ivory & Charcoal Modular Kitchen',
    category: 'kitchen',
    categoryLabel: 'Kitchens',
    caption: 'Parallel modular kitchen with quartz waterfall countertop, soft-close charcoal cabinetry, and warm task lighting.',
    features: ['Parallel Layout', 'Quartz Countertop', 'Soft-Close Hardware'],
  },
  {
    id: 'insp-3',
    title: 'Serene Master Suite with Tinted Glass Wardrobe',
    category: 'bedroom',
    categoryLabel: 'Bedrooms',
    caption: 'Restful master bedroom with floor-to-ceiling tinted glass wardrobe, integrated LED wardrobe strips, and upholstered acoustic headboard.',
    features: ['Tinted Glass Shutters', 'Acoustic Headboard', 'Integrated Wardrobe Lighting'],
  },
  {
    id: 'insp-4',
    title: 'Full-Height Built-In Walk-Through Wardrobe',
    category: 'wardrobe',
    categoryLabel: 'Wardrobes',
    caption: 'Custom floor-to-ceiling wardrobe design with specialised accessories drawers, vanity mirror integration, and matte veneer finish.',
    features: ['Floor-to-Ceiling Storage', 'Concealed Vanity Nook', 'Matte Veneer Finish'],
  },
  {
    id: 'insp-5',
    title: 'Fluted Marble & Teak Entertainment Wall',
    category: 'tv-unit',
    categoryLabel: 'TV Units',
    caption: 'Backlit floating entertainment unit with Italian marble slab backdrop, concealed cable chase, and warm ambient glow.',
    features: ['Concealed Wire Management', 'Italian Marble Backdrop', 'Floating Credenza'],
  },
  {
    id: 'insp-6',
    title: 'Modern Corporate Executive Suite',
    category: 'commercial',
    categoryLabel: 'Commercial',
    caption: 'Collaborative executive workspace featuring acoustic glass partitions, ergonomic meeting tables, and architectural track lighting.',
    features: ['Acoustic Partitions', 'Ergonomic Layout', 'Track Lighting'],
  },
  {
    id: 'insp-7',
    title: 'Minimalist Dining & Open Living Concept',
    category: 'living',
    categoryLabel: 'Living Rooms',
    caption: 'Open floor plan uniting dining and lounging with unified champagne gold metal inlays and natural sunlight.',
    features: ['Open Floor Plan', 'Champagne Metal Inlays', 'Coordinated Finishes'],
  },
  {
    id: 'insp-8',
    title: 'Modern Island Kitchen with Breakfast Bar',
    category: 'kitchen',
    categoryLabel: 'Kitchens',
    caption: 'Spacious island kitchen featuring overhead brass stem pendant lighting, built-in microwave tower, and acrylic finish cabinets.',
    features: ['Kitchen Island', 'Pendant Lighting', 'Built-in Appliance Tower'],
  },
  {
    id: 'insp-9',
    title: 'Warm Teak Pooja Mandir with Backlit Jali',
    category: 'living',
    categoryLabel: 'Living Rooms',
    caption: 'Dedicated sacred pooja alcove featuring brass bells, laser-cut wooden jali backdrop, and quiet ambient warm lighting.',
    features: ['Laser-Cut Jali', 'Sacred Brass Accents', 'Teak Wood Craftsmanship'],
  },
  {
    id: 'insp-10',
    title: 'Boutique Restaurant & Dining Lounge',
    category: 'commercial',
    categoryLabel: 'Commercial',
    caption: 'Intimate dining experience with fluted booth seating, warm directional spotlights, and high-durability commercial materials.',
    features: ['Custom Booth Seating', 'Zoned Mood Lighting', 'Commercial Durability'],
  },
  {
    id: 'insp-11',
    title: 'Minimalist Guest Bedroom with Floating Storage',
    category: 'bedroom',
    categoryLabel: 'Bedrooms',
    caption: 'Space-saving guest bedroom with floating bedside ledges, clean sliding wardrobe, and warm neutral linens.',
    features: ['Sliding Wardrobe', 'Floating Nightstands', 'Neutral Palette'],
  },
  {
    id: 'insp-12',
    title: 'Architectural False Ceiling with Perimeter Cove',
    category: 'living',
    categoryLabel: 'Living Rooms',
    caption: 'Double-tier gypsum false ceiling design with soft indirect 3000K warm LED lighting and sleek black magnetic channels.',
    features: ['3000K Warm LED Cove', 'Magnetic Light Channels', 'Clean Geometric Recess'],
  },
];

export const PROPERTY_TYPES = [
  'Apartment',
  'Independent House',
  'Villa',
  'Office',
  'Hotel',
  'Restaurant',
  'Other',
];
