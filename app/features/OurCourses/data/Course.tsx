export type CourseLevel = {
  name: string; // "Certificate" | "Diploma"
  duration: string; // "6 Months"
  fee: string; // "Ksh 5,500 per month"
  focus: string; // one line on what this level covers
  units: string[];
};

export type Course = {
  id: number;
  slug: string;
  title: string;
  images: string[];
  description: string;
  levels: CourseLevel[];
  note?: string; // optional caveat shown under the levels (e.g. contact admin for detail)
};

export const courses: Course[] = [
  {
    id: 1,
    slug: 'cosmetology',
    title: 'Cosmetology',
    images: [
      '/Cosmetology/Cosmetology.jpeg',
      '/Cosmetology/Cosmetology-2.jpeg',
      '/Cosmetology/Cosmetology-3.jpeg',
    ],
    description: 'A comprehensive diploma integrating hair, nail and skin units for a broader scope of practice.',
    levels: [
      {
        name: 'Diploma',
        duration: '12 Months',
        fee: 'Ksh 6,500 per month',
        focus: 'Hair, nail and skin units combined for a full scope of practice',
        units: [
          'Manicure and pedicure',
          'Facial treatments',
          'Make up',
          'Professional massage',
          'Hair removal',
          'Nail technology',
          'Henna tattooing',
          'Waxing & piercing',
          'Micro blading',
          'Cornrows',
          'Piece lines',
          'Ghanaians',
          'Bridal spiral extensions',
          'Natural perm rods',
          'Wash and blow dry',
          'Braiding',
          'Hair coloring',
          'Gel styling',
          'Drop lines',
          'Blow outs',
          'Zulu knots',
          'Weaving',
          'Crocheting',
          'Dread locks',
          'Flat iron & tong',
          'Hair chemical and relaxing',
          'Permanent waves',
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'hair-dressing',
    title: 'Hair dressing',
    images: [
      '/HairDressing/HairDressing.jpeg',
      '/HairDressing/HairDressing-1.jpeg',
      '/HairDressing/HairDressing-2.jpeg',
      '/HairDressing/HairDressing-3.jpeg',
    ],
    description: 'Professional cutting, styling and treatment techniques from working stylists.',
    levels: [
      {
        name: 'Certificate',
        duration: '6 Months',
        fee: 'Ksh 5,500 per month',
        focus: 'Fundamentals of styling and braiding',
        units: [
          'Cornrows',
          'Updo',
          'Piece lines',
          'Ghanaians',
          'Wash and set blow-drying',
          'Braiding (twisting, over hand, under hand, knotless and Jamaican)',
          'Gel styling',
          'Drop lines',
          'Blow out',
          'Zulu knots',
        ],
      },
      {
        name: 'Diploma',
        duration: '8 Months',
        fee: 'Ksh 6,500 per month',
        focus: 'Advanced techniques including weaving and chemical treatments',
        units: [
          'Weaving',
          'Wig technics',
          'Crocheting',
          'Creativity',
          'Curl kit',
          'Dread locks',
          'Flat iron',
          'Tongs',
          'Hair chemical and relaxing',
          'Bridal spiral extensions',
          'Natural perm rods',
          'Hair cutting',
          'Permanent waves',
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'beauty-therapy',
    title: 'Beauty therapy',
    images: [
      '/BeautyTherapy/BeautyTherapy.jpeg',
      '/BeautyTherapy/BeautyTherapy-1.jpeg',
      '/BeautyTherapy/BeautyTherapy-2.jpeg',
    ],
    description: 'Facials, body treatments and wellness practice, taught to salon standard.',
    levels: [
      {
        name: 'Certificate',
        duration: '6 Months',
        fee: 'Ksh 5,500 per month',
        focus: 'Fundamentals such as manicures and basic facials',
        units: [
          'Manicure',
          'Pedicure',
          'Basics in facials',
          'Make up',
          'Hair removal (tweezing, threading, waxing and razoring)',
          'Piercing',
          'Body massage',
          'Henna tattooing',
          'Nail technology (normal polish applications, gel applications, tips and stick-ons)',
        ],
      },
      {
        name: 'Diploma',
        duration: '8 Months',
        fee: 'Ksh 6,500 per month',
        focus: 'Advanced techniques such as hot stone massage, reflexology and microblading',
        units: [
          'Hot stone massage',
          'Aroma therapy massage',
          'Reflexology massage',
          'Deep tissue massage',
          'Swedish massage',
          'Holistic massage',
          'Full body scrub',
          'Antimental massage',
          'Baboo',
          'Indian massage',
          'Lashes',
          'Micro blading',
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'nail-technology',
    title: 'Nail technology',
    images: [
      '/NailTechnology/NailTechnology.jpeg',
      '/NailTechnology/NailTechnology-1.jpeg',
      '/NailTechnology/NailTechnology-2.jpeg',
       '/NailTechnology/NailTechnology-3.jpeg',
    ],
    description: 'Manicure, pedicure, acrylics, gels and nail art, from basics to advanced work.',
    levels: [
      {
        name: 'Diploma',
        duration: '6 Months',
        fee: 'Ksh 6,500 per month',
        focus: 'Everything from basic polish to advanced acrylics and dipping powder',
        units: [
          'Normal polish applications',
          'Gel applications',
          'Tips & stick-ons',
          'Henna tattooing',
          'Nail art',
          'Acrylics',
          'Builder gel',
          'Matte gel',
          'Gum gel',
          'Ombre nails',
          'Magnetics',
          'Dipping powder',
          'Nail sculpting',
          'New nail technics in the market',
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'barbering',
    title: 'Barbering',
    images: [
      '/Barbering/Barbering.jpeg',
      '/Barbering/Barbering-1.jpeg',
      '/Barbering/Barbering-2.jpeg',
    ],
    description: 'Traditional and modern cuts, fades and beard grooming for the working barber.',
    levels: [
      {
        name: 'Certificate',
        duration: '4 Months',
        fee: 'Ksh 6,500 per month',
        focus: 'Fundamentals of clipper work and fading',
        units: [
          'Maintenance of tools',
          'Fundamental clippering with and without attachments',
          'Clipper over comb',
          'Scissor over comb',
          'Layering and tapering',
          'Fading and blending',
          'Beard shaping',
          'Shave services',
          'Blow drying',
          'Health & safety',
          'Products',
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'diploma-in-tot',
    title: 'Diploma in TOT (Training of Trainers)',
    images: ['/Hero/skills.jpeg'],
    description: 'Prepares students to become educators in the beauty industry, not just practitioners.',
    levels: [
      {
        name: 'Diploma',
        duration: '6 Months',
        fee: 'Ksh 12,000 per month',
        focus: 'Instructional skills, pedagogy and curriculum development for teaching in the beauty industry',
        units: [],
      },
    ],
    note: 'For a specific unit breakdown of this course, contact the administration directly.',
  },
];

export const highlights = ['Practical, hands-on training', 'Instructors from the industry', 'Certificate on completion'];

export const getCourseBySlug = (slug: string): Course | undefined =>
  courses.find((course) => course.slug === slug);