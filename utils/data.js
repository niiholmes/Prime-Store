import bcrypt from 'bcryptjs';


const data = {
  users: [
    {
      name: 'Kelvin',
      email: 'admin@dev.com',
      password: bcrypt.hashSync('nii007'),
      isAdmin: true,
    },
    {
      name: 'Holmes',
      email: 'user@dev.com',
      password: bcrypt.hashSync('nii007'),
      isAdmin: false,
    },
  ],
  categories: [
    {
      id: '1',
      img: '/assets/sneaks.JPG',
      item: 'Sneakers',
      width: 300,
      height: 390,
    },
    {
      id: '2',
      img: '/assets/clothes.JPG',
      item: 'Apparels',
      width: 300,
      height: 460,
    },
    {
      id: '3',
      img: '/assets/watch.JPG',
      item: 'Watches',
      width: 300,
      height: 500,
    },
    {
      id: '4',
      img: '/assets/phones.JPG',
      item: 'Phones',
      width: 300,
      height: 390,
    },
    {
      id: '5',
      img: '/assets/lap.JPG',
      item: 'Laptops',
      width: 300,
      height: 460,
    },
    {
      id: '6',
      img: '/assets/tv.JPG',
      item: 'TVs',
      width: 300,
      height: 500,
    },
    {
      id: '7',
      img: '/assets/accessories.JPG',
      item: 'Accesories',
      width: 300,
      height: 390,
    },
    {
      id: '8',
      img: '/assets/bks.JPG',
      item: 'Books',
      width: 300,
      height: 460,
    },
    {
      id: '9',
      img: '/assets/fav.JPG',
      item: 'Fruits & Vegetables',
      width: 300,
      height: 460,
    },
  ],

  products: [
    {
      id: '1',
      slug: 'iphone13-pro',
      product_name: 'IPHONE 13 PRO',
      category:'Phones',
      tagline: 'Oh. So. Pro.',
      brief: 'Now in Alpine Blue',
      price: 1000,
      image: '/assets/iphone_13.JPG',
      description:
        'loremOfficia elit laborum ad nostrud consectetur id nulla nostrud anim. Sint duis exercitation cupidatat ad nulla. Ex do ad aliquip veniam in quis culpa adipisicing pariatur.Lorem amet culpa veniam officia aliqua. Nisi ullamco ipsum reprehenderit ut velit. Elit sit ex consectetur veniam eu elit adipisicing id voluptate tempor elit elit in duis.',
      countInStock: 20,
    },

    {
      id: '2',
      slug: 'yeezy-jacket',
      product_name: 'YEEZY SZN JACKET',
      category: 'Apparels',
      tagline: 'Cold.Winter',
      brief: 'Now in Army Green',
      price: 150,
      image: '/assets/yzy_top2.JPG',
      description:
        'loremOfficia elit laborum ad nostrud consectetur id nulla nostrud anim. Sint duis exercitation cupidatat ad nulla. Ex do ad aliquip veniam in quis culpa adipisicing pariatur.Lorem amet culpa veniam officia aliqua. Nisi ullamco ipsum reprehenderit ut velit. Elit sit ex consectetur veniam eu elit adipisicing id voluptate tempor elit elit in duis.',
      countInStock: 20,
    },
    {
      id: '3',
      slug: 'sapiens-book',
      product_name: 'SAPIENS',
      category: 'Books',
      tagline: 'The History of Mankind',
      brief: 'Now in Prime Stores',
      price: 40,
      image: '/assets/sapiens.JPG',
      description:
        'loremOfficia elit laborum ad nostrud consectetur id nulla nostrud anim. Sint duis exercitation cupidatat ad nulla. Ex do ad aliquip veniam in quis culpa adipisicing pariatur.Lorem amet culpa veniam officia aliqua. Nisi ullamco ipsum reprehenderit ut velit. Elit sit ex consectetur veniam eu elit adipisicing id voluptate tempor elit elit in duis.',
      countInStock: 20,
    },
    {
      id: '4',
      slug: 'yeezy-t-shirt',
      product_name: 'YEEZY SZN T-SHIRT',
      category: 'Apparels',
      tagline: 'Keepin it real.',
      brief: 'Now in Prime Stores',
      price: 50,
      image: '/assets/yzy_top.JPG',
      description:
        'loremOfficia elit laborum ad nostrud consectetur id nulla nostrud anim. Sint duis exercitation cupidatat ad nulla. Ex do ad aliquip veniam in quis culpa adipisicing pariatur.Lorem amet culpa veniam officia aliqua. Nisi ullamco ipsum reprehenderit ut velit. Elit sit ex consectetur veniam eu elit adipisicing id voluptate tempor elit elit in duis.',
      countInStock: 20,
    },
  ],
};

export default data;
