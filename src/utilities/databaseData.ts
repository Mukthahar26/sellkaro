import {postStatus} from '../constants/contants';

export const searchTags = [
  'Jupiter 125cc 2017 model',
  'Duplex house for sell',
  'Ferari car 2020 model',
  'Online Data entry Job',
];

export const exloreCategoryList = [
  {
    id: '322983940832',
    label: 'Mobile',
    imageUrl: 'https://img.icons8.com/ios-glyphs/30/smartphone--v1.png',
  },
  {
    id: '322983940832',
    label: 'EState',
    imageUrl: 'https://img.icons8.com/ios-filled/50/home.png',
  },
  {
    id: 'fkaksfdj3890820',
    label: 'Vehcles',
    imageUrl: 'https://img.icons8.com/metro/26/car.png',
  },
  {
    id: 'skdlkaoperw343',
    label: 'Electronics',
    imageUrl: 'https://img.icons8.com/material-outlined/24/tv.png',
  },
  {
    id: '2312lk;k',
    label: 'Furniture',
    imageUrl: 'https://img.icons8.com/ios-filled/50/sofa.png',
  },
  {
    id: 'hjo9090',
    label: 'Clothes',
    imageUrl: 'https://img.icons8.com/ios-glyphs/30/clothes.png',
  },
  {
    id: 'opafiodpas',
    label: 'pets',
    imageUrl: 'https://img.icons8.com/plumpy/24/pets.png',
  },
  {
    id: '2o3i4o2ip4',
    label: 'Services',
    imageUrl: 'https://img.icons8.com/ios-glyphs/30/service--v2.png',
  },
];

export const AdPostProperties = [
  {
    id: 1,
    name: 'Brand Name',
    data: [],
  },
  {
    id: 2,
    name: 'Fuel Type',
    data: ['CNG', 'diesel', 'Electric', 'LPG', 'Petrol'],
  },
  {
    id: 3,
    name: 'Transmission',
    data: ['Automatic', 'Manual'],
  },
  {
    id: 4,
    name: 'Driven',
    data: [],
  },
  {
    id: 5,
    name: 'Year',
    data: [],
  },
  {
    id: 6,
    name: 'Nof of Rooms',
    data: [],
  },
  {
    id: 7,
    name: 'Model',
    data: [],
  },
];

export const subCategoryList: any = {
  Vehcles: [
    {id: '9329jaesdjo', label: 'Cars'},
    {id: '9329jaesdjo', label: 'Bikes'},
    {id: '9329jaesdjo', label: 'Scooters'},
    {id: '9329jaesdjo', label: 'Bicycles'},
    {id: '9329jaesdjo', label: 'Spare Parts'},
    {id: '9329jaesdjo', label: 'View All'},
  ],
  Mobile: [
    {id: '9329jaesdjo', label: 'Phones'},
    {id: '9329jaesdjo', label: 'Accessories'},
    {id: '9329jaesdjo', label: 'View All'},
  ],
  EState: [
    {id: '9329jaesdjo', label: 'Rent'},
    {id: '9329jaesdjo', label: 'Buy'},
    {id: '9329jaesdjo', label: 'Plot'},
    {id: '9329jaesdjo', label: 'Apartment'},
    {id: '9329jaesdjo', label: 'View All'},
  ],
};

export const carsList = [
  {
    ADId: '12123234324343543534',
    title: 'Mercedez-Benz 2020 model in excellent condition',
    description: 'Best in class. Excellent look and condition.',
    type: 'VEHICLES',
    subType: 'CARS',
    price: '40,00,000',
    date: '2023-08-24T04:06:43.226Z',
    location: 'Maruthi nagar, Kadapa',
    isFavorite: false,
    imageUrl: [
      'https://imgd.aeplcdn.com/600x337/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=75',
      'https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75',
      'https://imgd.aeplcdn.com/370x208/n/cw/ec/145815/maruti-suzuki-fronx-right-front-three-quarter2.jpeg?isig=0&q=75',
      'https://img.freepik.com/free-photo/blue-blackBackgroundColor-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000',
      'https://m.economictimes.com/thumb/msid-96559100,width-1200,height-900,resizemode-4,imgsize-92902/the-rimac-nevera-is-now-the-fastest-electric-car-in-the-world-image-rimac.jpg',
    ],
    properties: [
      {label: 'Driven', value: '200000'},
      {label: 'Fuel Type', value: 'Petrol'},
      {label: 'No Of Owners', value: '1st'},
      {label: 'Transmission', value: 'Automatic'},
      {label: 'Brand Name', value: 'Suzuki'},
      {label: 'Year', value: '2014'},
      {label: 'Model', value: 'Swift'},
    ],
  },
];

export const bikesList = [
  {
    ADId: '12123234324343543534',
    title: 'Excellent conditions',
    description: 'Best in class. Excellent look and condition.',
    type: 'VEHICLES',
    subType: 'BIKES',
    price: '22000',
    date: '2023-08-24T04:06:43.226Z',
    location: 'Gandhi nagar, Kadapa',
    isFavorite: false,
    imageUrl: [
      'https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375',
    ],
    properties: [
      {label: 'Driven', value: '8000'},
      {label: 'Fuel Type', value: 'Petrol'},
      {label: 'No Of Owners', value: '1st'},
      {label: 'Brand Name', value: 'TVS'},
      {label: 'Year', value: '2014'},
      {label: 'Model', value: 'Jupiter'},
    ],
  },
];

export const vehicleSparePartsList = [
  {
    ADId: '12123234324343543534',
    title: 'Suzuki Suspension for sale',
    description: 'Best in class. Excellent look and condition.',
    type: 'VEHICLES',
    subType: 'VEHICLESSPAREPARTS',
    price: '22,000',
    date: '2023-08-24T04:06:43.226Z',
    location: 'Gandhi nagar, Kadapa',
    isFavorite: false,
    imageUrl: [
      'https://ap.boschcarservice.com/in/media/images/16_9/bosch_blogs/bcs_sep_blog_2_image_640w_360h.jpg',
    ],
  },
];

export const phonesList = [
  {
    ADId: '12123234324343543534',
    title: 'Iqoo 7 in excellent condition and ladies used with less used state',
    description:
      'Best in class. Excellent look and condition. Ladies used at home. No gaming, No heavy use. Just used for calls and social media. Nice phone. Best in class. Excellent look and condition. Ladies used at home. No gaming, No heavy use. Just used for calls and social media. Nice phone.',
    type: 'MOBILES',
    subType: 'PHONES',
    price: '43,500',
    date: '2023-08-24T04:06:43.226Z',
    location: 'Gandhi nagar, Kadapa',
    isFavorite: false,
    imageUrl: [
      'https://cdn.thewirecutter.com/wp-content/media/2023/04/budgetandroidphones-2048px-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200',
    ],
    properties: [
      {label: 'RAM', value: '8'},
      {label: 'Storage', value: '128GB'},
      {label: 'Brand Name', value: 'IQOO'},
      {label: 'How old', value: '6 Months'},
    ],
  },
];

export const houseList = [
  {
    ADId: '12123234324343543534',
    title: 'Good facility house for rent',
    description: 'Best in class. Excellent look and condition.',
    type: 'PROPERTIES',
    subType: 'HOUSE',
    price: '9,43,500',
    date: '2023-08-24T04:06:43.226Z',
    location: 'Gandhi nagar, Kadapa',
    isFavorite: false,
    imageUrl: [
      'https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg',
    ],
    properties: {
      bhk: '2 BHK',
      parking: 'YES',
    },
  },
];

export const landList = [
  {
    ADId: '12123234324343543534',
    title: 'Land for sell',
    description: 'Best in class. Excellent look and condition.',
    type: 'PROPERTIES',
    subType: 'LAND',
    price: '9,43,500',
    date: '2023-08-24T04:06:43.226Z',
    location: 'Gandhi nagar, Kadapa',
    isFavorite: false,
    imageUrl: [
      'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Land_plot_290321_Picxy.comAniBee_290321_1200.jpeg?itok=oIGvUN6z',
    ],
    properties: [{label: 'Cents', value: '8 Cents'}],
  },
];

export const shopsList = [
  {
    ADId: '12123234324343543534',
    title: 'Shop for rent for office purpose',
    description: 'Best in class. Excellent look and condition.',
    type: 'PROPERTIES',
    subType: 'SHOP',
    price: '9,43,500',
    date: '2023-08-24T04:06:43.226Z',
    location: 'Gandhi nagar, Kadapa',
    isFavorite: false,
    imageUrl: [
      'https://images.nobroker.in/images/8a9fcf82840e98fa01840eb05e830bef/8a9fcf82840e98fa01840eb05e830bef_50813_84749_medium.jpg',
    ],
    properties: [
      {label: 'SQFT', value: '400000'},
      {label: 'Parking', value: 'YES'},
    ],
  },
];

export const pgList = [
  {
    ADId: '12123234324343543534',
    title: 'Student PG in Indira Nagar',
    description: 'Best in class. Excellent look and condition.',
    type: 'PROPERTIES',
    subType: 'PAYINGGUEST',
    price: '9,43,500',
    date: '2023-08-24T04:06:43.226Z',
    location: 'Indira nagar, Kadapa',
    isFavorite: false,
    imageUrl: [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/280366728.jpg?k=75016b6853cbaf7403fb740a9be170124a04ad9ca70a09a6250c16c79c6f4595&o=&hp=1',
    ],
    properties: [
      {label: 'Meals', value: '3 Times'},
      {label: 'Parking', value: 'YES'},
      {label: 'Gyser', value: 'YES'},
    ],
  },
];

export const entertainmentList = [
  {
    ADId: '12123234324343543534',
    title: 'Home theater with 120W audio power',
    description: 'Best in class. Excellent look and condition.',
    type: 'ELECTRONICS',
    subType: 'Home theater',
    price: '3400',
    date: '2023-08-24T04:06:43.226Z',
    location: 'Indira nagar, Kadapa',
    isFavorite: false,
    imageUrl: [
      'https://images.philips.com/is/image/PhilipsConsumer/HTD5570_94-IMS-en_IN?$jpglarge$&wid=960',
    ],
    properties: [{label: 'How old', value: '6 Months'}],
  },
];

export const conversationList = [
  {
    id: '93ej3k2lj4kl32',
    conversationID: '123454322',
    message: 'is this mobile available?',
    subject:
      'Iqoo 7 in excellent condition and ladies used with less used state',
    imageUrl: null,
    title: 'Venkata Reddy',
    date: '2023-08-24T04:06:43.226Z',
    isRead: true,
  },
  {
    id: '32232323242435466',
    conversationID: '233292929040',
    message: 'what is the last price?',
    subject: 'Skoda car for sale 2019 model',
    imageUrl:
      'https://e1.pxfuel.com/desktop-wallpaper/225/460/desktop-wallpaper-baby-mickey-mouse-iphone-mickey-mouse-baby.jpg',
    title: 'Venkata Reddy',
    date: '2023-09-29T04:06:43.226Z',
    isRead: false,
  },
  {
    id: '93ej3k2lj4kl32',
    conversationID: '123454322',
    message: 'is this mobile available?',
    subject:
      'Iqoo 7 in excellent condition and ladies used with less used state',
    imageUrl: null,
    title: 'Venkata Reddy',
    date: '2023-08-24T04:06:43.226Z',
    isRead: true,
  },
  {
    id: '32232323242435466',
    conversationID: '233292929040',
    message: 'what is the last price?',
    subject: 'Skoda car for sale 2019 model',
    imageUrl:
      'https://e1.pxfuel.com/desktop-wallpaper/225/460/desktop-wallpaper-baby-mickey-mouse-iphone-mickey-mouse-baby.jpg',
    title: 'Venkata Reddy',
    date: '2023-09-29T04:06:43.226Z',
    isRead: false,
  },
  {
    id: '93ej3k2lj4kl32',
    conversationID: '123454322',
    message: 'is this mobile available?',
    subject:
      'Iqoo 7 in excellent condition and ladies used with less used state',
    imageUrl: null,
    title: 'Venkata Reddy',
    date: '2023-08-24T04:06:43.226Z',
    isRead: true,
  },
  {
    id: '32232323242435466',
    conversationID: '233292929040',
    message: 'what is the last price?',
    subject: 'Skoda car for sale 2019 model',
    imageUrl:
      'https://e1.pxfuel.com/desktop-wallpaper/225/460/desktop-wallpaper-baby-mickey-mouse-iphone-mickey-mouse-baby.jpg',
    title: 'Venkata Reddy',
    date: '2023-09-29T04:06:43.226Z',
    isRead: false,
  },
  {
    id: '93ej3k2lj4kl32',
    conversationID: '123454322',
    message: 'is this mobile available?',
    subject:
      'Iqoo 7 in excellent condition and ladies used with less used state',
    imageUrl: null,
    title: 'Venkata Reddy',
    date: '2023-08-24T04:06:43.226Z',
    isRead: true,
  },
  {
    id: '32232323242435466',
    conversationID: '233292929040',
    message: 'what is the last price?',
    subject: 'Skoda car for sale 2019 model',
    imageUrl:
      'https://e1.pxfuel.com/desktop-wallpaper/225/460/desktop-wallpaper-baby-mickey-mouse-iphone-mickey-mouse-baby.jpg',
    title: 'Venkata Reddy',
    date: '2023-09-29T04:06:43.226Z',
    isRead: false,
  },
  {
    id: '93ej3k2lj4kl32',
    conversationID: '123454322',
    message: 'is this mobile available?',
    subject:
      'Iqoo 7 in excellent condition and ladies used with less used state',
    imageUrl: null,
    title: 'Venkata Reddy',
    date: '2023-08-24T04:06:43.226Z',
    isRead: true,
  },
  {
    id: '32232323242435466',
    conversationID: '233292929040',
    message: 'what is the last price?',
    subject: 'Skoda car for sale 2019 model',
    imageUrl:
      'https://e1.pxfuel.com/desktop-wallpaper/225/460/desktop-wallpaper-baby-mickey-mouse-iphone-mickey-mouse-baby.jpg',
    title: 'Venkata Reddy',
    date: '2023-09-29T04:06:43.226Z',
    isRead: false,
  },
  {
    id: '93ej3k2lj4kl32',
    conversationID: '123454322',
    message: 'is this mobile available?',
    subject:
      'Iqoo 7 in excellent condition and ladies used with less used state',
    imageUrl: null,
    title: 'Venkata Reddy',
    date: '2023-08-24T04:06:43.226Z',
    isRead: true,
  },
  {
    id: '32232323242435466',
    conversationID: '233292929040',
    message: 'what is the last price?',
    subject: 'Skoda car for sale 2019 model',
    imageUrl:
      'https://e1.pxfuel.com/desktop-wallpaper/225/460/desktop-wallpaper-baby-mickey-mouse-iphone-mickey-mouse-baby.jpg',
    title: 'Venkata Reddy',
    date: '2023-09-29T04:06:43.226Z',
    isRead: false,
  },
];

export const chatMessagesList = [
  {
    id: 1,
    text: 'Hello!',
    me: true,
    createdAt: new Date(),
    user: {
      id: 1,
      username: 'John Doe',
      avatar: {uri: 'https://i.pravatar.cc/300'},
    },
  },
  {
    id: 2,
    text: 'Hello john! how are you?',
    me: false,
    createdAt: new Date(),
    user: {
      id: 2,
      username: 'Jane Doe',
      avatar: {uri: 'https://i.pravatar.cc/300'},
    },
    repliedTo: {
      id: 1,
      text: 'Hello!',
      me: true,
      createdAt: new Date(),
      user: {
        id: 1,
        username: 'John Doe',
        avatar: {uri: 'https://i.pravatar.cc/300'},
      },
    },
  },
  {
    id: 8,
    text: "I'm fine thanks! What about you?",
    me: true,
    createdAt: new Date(),
    user: {
      id: 2,
      username: 'Jane Doe',
      avatar: {uri: 'https://i.pravatar.cc/300'},
    },
  },
];

export const profileData = {
  id: 2328374834,
  name: 'Mukthahar Shaik',
  mobileNo: '+91 86880 28066',
  imageUrl:
    'https://media.licdn.com/dms/image/D5603AQH66vg3biOeCA/profile-displayphoto-shrink_400_400/0/1696938619351?e=1702512000&v=beta&t=BPOuGnXuf1sXIjn1-C6bGLKhBYgvmsWbqeF-z--4BtA',
};

export const myAdsList = [
  {
    imageUrl:
      'https://images.nobroker.in/images/8a9fcf82840e98fa01840eb05e830bef/8a9fcf82840e98fa01840eb05e830bef_50813_84749_medium.jpg',
    title: 'excellent space shop with all grocerries and tables',
    price: '40,00,000',
    viewCount: '158',
    favoriteCount: '145',
    status: postStatus.ACTIVE,
    createdDate: '2023-09-29T04:06:43.226Z',
    expiryDate: '2023-10-29T04:06:43.226Z',
    id: 'jf9f89af89sf8saf7sdf68a7f8a7sdf98',
  },
  {
    imageUrl:
      'https://images.nobroker.in/images/8a9fcf82840e98fa01840eb05e830bef/8a9fcf82840e98fa01840eb05e830bef_50813_84749_medium.jpg',
    title: 'Shop for sale',
    price: '40,00,000',
    viewCount: '158',
    favoriteCount: '145',
    status: postStatus.SOLD,
    createdDate: '2023-09-29T04:06:43.226Z',
    expiryDate: '2023-10-29T04:06:43.226Z',
    id: '8929849028',
  },
  {
    imageUrl:
      'https://images.nobroker.in/images/8a9fcf82840e98fa01840eb05e830bef/8a9fcf82840e98fa01840eb05e830bef_50813_84749_medium.jpg',
    title: 'Shop for sale',
    price: '40,00,000',
    viewCount: '158',
    favoriteCount: '145',
    status: postStatus.EXPIRED,
    createdDate: '2023-09-29T04:06:43.226Z',
    expiryDate: '2023-10-29T04:06:43.226Z',
    id: 'jf9f89af89sf8saf7sdf68a7f8a7sdf98',
  },
  {
    imageUrl:
      'https://images.nobroker.in/images/8a9fcf82840e98fa01840eb05e830bef/8a9fcf82840e98fa01840eb05e830bef_50813_84749_medium.jpg',
    title: 'Shop for sale',
    price: '40,00,000',
    viewCount: '158',
    favoriteCount: '145',
    status: postStatus.DEACTIVATED,
    createdDate: '2023-09-29T04:06:43.226Z',
    expiryDate: '2023-10-29T04:06:43.226Z',
    id: 'ieworieriwoeir290342',
  },
  {
    imageUrl:
      'https://images.nobroker.in/images/8a9fcf82840e98fa01840eb05e830bef/8a9fcf82840e98fa01840eb05e830bef_50813_84749_medium.jpg',
    title: 'Shop for sale',
    price: '40,00,000',
    viewCount: '158',
    favoriteCount: '145',
    status: postStatus.ACTIVE,
    createdDate: '2023-09-29T04:06:43.226Z',
    expiryDate: '2023-10-29T04:06:43.226Z',
    id: 'jfjkajfadfuiasof',
  },
];

export const notiicationsList = [
  {
    imageUrl:
      'https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375',
    title: 'Masthan Valli added your ad as a favorite.',
    date: new Date(),
    userName: 'Masthan Valli',
    type: 'FAVORITES',
  },
  {
    imageUrl: '',
    title: 'Masthan Valli added your ad as a favorite.',
    date: new Date(),
    userName: 'Masthan Valli',
    type: 'FAVORITES',
  },
  {
    imageUrl:
      'https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375',
    title:
      'Mobile123 Reported on your ad. We are reviewing it. Tap to learn more.',
    date: new Date(),
    userName: 'Masthan Valli',
    type: 'REPORT',
    reportText:
      'This ad was shown based on your activity or preferences. If you believe this ad is inappropriate, misleading, or violates our guidelines, you can report it. Your feedback helps us ensure a safe and relevant advertising experience.',
  },
  {
    imageUrl:
      'https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375',
    title: 'Masthan Valli added your ad as a favorite.',
    date: new Date(),
    userName: 'Masthan Valli',
    type: 'FAVORITES',
  },
  {
    imageUrl:
      'https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375',
    title: 'Masthan Valli added your ad as a favorite.',
    date: new Date(),
    userName: 'Masthan Valli',
    type: 'FAVORITES',
  },
  {
    imageUrl:
      'https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375',
    title: 'Masthan Valli added your ad as a favorite.',
    date: new Date(),
    userName: 'Masthan Valli',
    type: 'FAVORITES',
  },
  {
    imageUrl:
      'https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375',
    title: 'Masthan Valli added your ad as a favorite.',
    date: new Date(),
    userName: 'Masthan Valli',
    type: 'FAVORITES',
  },
  {
    imageUrl:
      'https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375',
    title: 'Masthan Valli added your ad as a favorite.',
    date: new Date(),
    userName: 'Masthan Valli',
    type: 'FAVORITES',
  },
  {
    imageUrl: '',
    title: 'Masthan Valli added your ad as a favorite.',
    date: new Date(),
    userName: 'Masthan Valli',
    type: 'FAVORITES',
  },
  {
    imageUrl:
      'https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375',
    title: 'Masthan Valli added your ad as a favorite.',
    date: new Date(),
    userName: 'Masthan Valli',
    type: 'FAVORITES',
  },
  {
    imageUrl:
      'https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375',
    title: 'Masthan Valli added your ad as a favorite.',
    date: new Date(),
    userName: 'Masthan Valli',
    type: 'FAVORITES',
  },
];

export const recentlyAddedList = [
  ...entertainmentList,
  ...pgList,
  ...shopsList,
  ...landList,
  ...houseList,
  ...phonesList,
  ...vehicleSparePartsList,
  ...bikesList,
  ...carsList,
];
