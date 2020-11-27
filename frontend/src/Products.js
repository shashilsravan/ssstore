const products = [
  {
    _id:0,
    name: 'Plain Tshirts Sample - 1',
    image: '/images/airpods.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/alexa.jpg',
    imageFour: '/images/mouse.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'plaintees',
    category: 'tshirts',
    gender: 'male',
    price: 99,
    actualPrice: 199,
    countInStock: 0,
    rating: 0.7,
    numReviews: 2,
  },
  {
    _id:1,
    name: 'Plain Tshirts Sample - 2',
    image: '/images/airpods.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/alexa.jpg',
    imageFour: '/images/mouse.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'plaintees',
    category: 'tshirts',
    gender: 'female',
    price: 99,
    actualPrice: 199,
    countInStock: 10,
    rating: 0.7,
    numReviews: 2,
  },
  {
    _id:2,
    name: 'Plain Tshirts Sample - 3',
    image: '/images/airpods.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/alexa.jpg',
    imageFour: '/images/mouse.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'plaintees',
    category: 'tshirts',
    gender: 'female',
    price: 99,
    actualPrice: 199,
    countInStock: 10,
    rating: 0.7,
    numReviews: 2,
  },
  {
    _id:5,
    name: 'Animie Tshirts sample - 1',
    image: '/images/phone.jpg',
    imageTwo: '/images/playstation.jpg',
    imageThree: '/images/airpods.jpg',
    imageFour: '/images/alexa.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'animie',
    category: 'tshirts',
    gender: 'male',
    price: 599,
    actualPrice: 699,
    countInStock: 10,
    rating: 3.7,
    numReviews: 20,
  },
  {
    _id:6,
    name: 'Animie Tshirts sample - 2',
    image: '/images/phone.jpg',
    imageTwo: '/images/playstation.jpg',
    imageThree: '/images/airpods.jpg',
    imageFour: '/images/alexa.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'animie',
    category: 'tshirts',
    gender: 'male',
    price: 599,
    actualPrice: 699,
    countInStock: 10,
    rating: 3.7,
    numReviews: 20,
  },
  {
    _id:7,
    name: 'Animie Tshirts sample - 3',
    image: '/images/phone.jpg',
    imageTwo: '/images/playstation.jpg',
    imageThree: '/images/airpods.jpg',
    imageFour: '/images/alexa.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'animie',
    category: 'tshirts',
    gender: 'male',
    price: 599,
    actualPrice: 699,
    countInStock: 10,
    rating: 3.7,
    numReviews: 20,
  },
  {
    _id:10,
    name: 'webseries Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'webseries',
    category: 'tshirts',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:11,
    name: 'Webseries Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'webseries',
    category: 'tshirts',
    gender: 'female',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:15,
    name: 'movies tshirts',
    image: '/images/playstation.jpg',
    imageTwo: '/images/airpods.jpg',
    imageThree: '/images/alexa.jpg',
    imageFour: '/images/camera.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'movies',
    category: 'tshirts',
    gender: 'male',
    price: 399,
    actualPrice: 699,
    countInStock: 10,
    rating: 5,
    numReviews: 1,
  },
  {
    _id:20,
    name: 'wwe tshirts',
    image: '/images/mouse.jpg',
    imageTwo: '/images/phone.jpg',
    imageThree: '/images/playstation.jpg',
    imageFour: '/images/airpods.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'wwe',
    category: 'tshirts',
    gender: 'male',
    price: 499,
    actualPrice: 999,
    countInStock: 7,
    rating: 4.7,
    numReviews: 10,
  },
  {
    _id:21,
    name: 'wwe tshirts - 2',
    image: '/images/mouse.jpg',
    imageTwo: '/images/phone.jpg',
    imageThree: '/images/playstation.jpg',
    imageFour: '/images/airpods.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'wwe',
    category: 'tshirts',
    gender: 'male',
    price: 499,
    actualPrice: 999,
    countInStock: 7,
    rating: 4.7,
    numReviews: 10,
  },
  {
    _id:30,
    name: 'graffiti tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'graffiti',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:35,
    name: 'cartoons tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'cartoons',
    category: 'tshirts',
    gender: 'female',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:40,
    name: 'memes tshirts - 1',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'graffiti',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:41,
    name: 'memes tshirts - 2',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'graffiti',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:50,
    name: 'quotes tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'quotes',
    category: 'tshirts',
    gender: 'female',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:55,
    name: 'sports tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'sports',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:60,
    name: 'music tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'music',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:70,
    name: 'hiphop tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'hiphop',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:75,
    name: 'spiritual tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'spiritual',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:80,
    name: 'games tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'games',
    category: 'tshirts',
    gender: 'female',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:85,
    name: 'alchemy tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'alchemy',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:90,
    name: 'literature tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'literature',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:95,
    name: 'photography tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'photography',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:100,
    name: 'superheroes tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'superheroes',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:105,
    name: 'regional tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'regional',
    category: 'tshirts',
    gender: 'female',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:110,
    name: 'wanderers tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'wanderers',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:115,
    name: 'hightees tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'hightees',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:120,
    name: 'combo tshirts',
    image: '/images/alexa.jpg',
    imageTwo: '/images/camera.jpg',
    imageThree: '/images/mouse.jpg',
    imageFour: '/images/phone.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'combo',
    category: 'tshirts',
    gender: 'male',
    price: 299,
    actualPrice: 399,
    countInStock: 1,
    rating: 2.3,
    numReviews: 30,
  },
  {
    _id:125,
    name: 'plain hoodies',
    image: '/images/phone.jpg',
    imageTwo: '/images/playstation.jpg',
    imageThree: '/images/airpods.jpg',
    imageFour: '/images/alexa.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'plain',
    category: 'hoodies',
    gender: 'male',
    price: 599,
    actualPrice: 699,
    countInStock: 10,
    rating: 3.7,
    numReviews: 20,
  },
  {
    _id:126,
    name: 'animie hoodies',
    image: '/images/phone.jpg',
    imageTwo: '/images/playstation.jpg',
    imageThree: '/images/airpods.jpg',
    imageFour: '/images/alexa.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'animie',
    category: 'hoodies',
    gender: 'male',
    price: 599,
    actualPrice: 699,
    countInStock: 10,
    rating: 3.7,
    numReviews: 20,
  },
  {
    _id:127,
    name: 'webseries hoodies',
    image: '/images/phone.jpg',
    imageTwo: '/images/playstation.jpg',
    imageThree: '/images/airpods.jpg',
    imageFour: '/images/alexa.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'webseries',
    category: 'hoodies',
    gender: 'female',
    price: 599,
    actualPrice: 699,
    countInStock: 10,
    rating: 3.7,
    numReviews: 20,
  },
  {
    _id:129,
    name: 'cartoons hoodies',
    image: '/images/phone.jpg',
    imageTwo: '/images/playstation.jpg',
    imageThree: '/images/airpods.jpg',
    imageFour: '/images/alexa.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'cartoons',
    category: 'hoodies',
    gender: 'male',
    price: 599,
    actualPrice: 699,
    countInStock: 10,
    rating: 3.7,
    numReviews: 20,
  },
  {
    _id:130,
    name: 'superhero hoodies',
    image: '/images/phone.jpg',
    imageTwo: '/images/playstation.jpg',
    imageThree: '/images/airpods.jpg',
    imageFour: '/images/alexa.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'superhero',
    category: 'hoodies',
    gender: 'male',
    price: 599,
    actualPrice: 699,
    countInStock: 10,
    rating: 3.7,
    numReviews: 20,
  },
  {
    _id:131,
    name: 'memes hoodies',
    image: '/images/phone.jpg',
    imageTwo: '/images/playstation.jpg',
    imageThree: '/images/airpods.jpg',
    imageFour: '/images/alexa.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'memes',
    category: 'hoodies',
    gender: 'male',
    price: 599,
    actualPrice: 699,
    countInStock: 10,
    rating: 3.7,
    numReviews: 20,
  },
  {
    _id:132,
    name: 'music hoodies',
    image: '/images/phone.jpg',
    imageTwo: '/images/playstation.jpg',
    imageThree: '/images/airpods.jpg',
    imageFour: '/images/alexa.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'music',
    category: 'hoodies',
    gender: 'male',
    price: 599,
    actualPrice: 699,
    countInStock: 10,
    rating: 3.7,
    numReviews: 20,
  },
  {
    _id:133,
    name: 'games hoodies',
    image: '/images/phone.jpg',
    imageTwo: '/images/playstation.jpg',
    imageThree: '/images/airpods.jpg',
    imageFour: '/images/alexa.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'games',
    category: 'hoodies',
    gender: 'male',
    price: 599,
    actualPrice: 699,
    countInStock: 10,
    rating: 3.7,
    numReviews: 20,
  },
  {
    _id:134,
    name: 'alchemy hoodies',
    image: '/images/phone.jpg',
    imageTwo: '/images/playstation.jpg',
    imageThree: '/images/airpods.jpg',
    imageFour: '/images/alexa.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'alchemy',
    category: 'hoodies',
    gender: 'male',
    price: 599,
    actualPrice: 699,
    countInStock: 10,
    rating: 3.7,
    numReviews: 20,
  },
  {
    _id:140,
    name: 'animie Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'animie',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:141,
    name: 'webseries Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'webseries',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:142,
    name: 'movies Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'movies',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:143,
    name: 'wwe Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'wwe',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:144,
    name: 'graffiti Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'graffiti',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:145,
    name: 'cartoons Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'cartoons',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:146,
    name: 'memes Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'memes',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:147,
    name: 'quotes Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'quotes',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:148,
    name: 'sports Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'sports',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:149,
    name: 'music Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'music',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:150,
    name: 'hiphop Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'hiphop',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:151,
    name: 'spiritual Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'spiritual',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:152,
    name: 'games Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'games',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:153,
    name: 'literature Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'literature',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:154,
    name: 'photography Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'photography',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:155,
    name: 'superheroes Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'superheroes',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:156,
    name: 'regional Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'regional',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:157,
    name: 'wanderers Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'wanderers',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:160,
    name: 'wanderers Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'wanderers',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:161,
    name: 'high Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'high',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:162,
    name: 'motivational Tshirts',
    image: '/images/camera.jpg',
    imageTwo: '/images/mouse.jpg',
    imageThree: '/images/phone.jpg',
    imageFour: '/images/playstation.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'motivational',
    category: 'posters',
    gender: 'male',
    price: 929,
    actualPrice: 999,
    countInStock: 4,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id:201,
    name: 'stickers - 1',
    image: '/images/mouse.jpg',
    imageTwo: '/images/phone.jpg',
    imageThree: '/images/playstation.jpg',
    imageFour: '/images/airpods.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'stickers',
    category: 'stickers',
    gender: 'male',
    price: 499,
    actualPrice: 999,
    countInStock: 7,
    rating: 4.7,
    numReviews: 10,
  },
  {
    _id:251,
    name: 'plain mask',
    image: '/images/mouse.jpg',
    imageTwo: '/images/phone.jpg',
    imageThree: '/images/playstation.jpg',
    imageFour: '/images/airpods.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'plain',
    category: 'mask',
    gender: 'male',
    price: 499,
    actualPrice: 999,
    countInStock: 7,
    rating: 4.7,
    numReviews: 10,
  },
  {
    _id:252,
    name: 'printed masks',
    image: '/images/mouse.jpg',
    imageTwo: '/images/phone.jpg',
    imageThree: '/images/playstation.jpg',
    imageFour: '/images/airpods.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'printed',
    category: 'mask',
    gender: 'male',
    price: 499,
    actualPrice: 999,
    countInStock: 7,
    rating: 4.7,
    numReviews: 10,
  },{
    _id:253,
    name: 'Tote bags',
    image: '/images/mouse.jpg',
    imageTwo: '/images/phone.jpg',
    imageThree: '/images/playstation.jpg',
    imageFour: '/images/airpods.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'tote',
    category: 'tote',
    gender: 'male',
    price: 499,
    actualPrice: 999,
    countInStock: 7,
    rating: 4.7,
    numReviews: 10,
  },
  {
    _id:301,
    name: 'laptop skins',
    image: '/images/mouse.jpg',
    imageTwo: '/images/phone.jpg',
    imageThree: '/images/playstation.jpg',
    imageFour: '/images/airpods.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'laptop',
    category: 'laptop',
    gender: 'male',
    price: 499,
    actualPrice: 999,
    countInStock: 7,
    rating: 4.7,
    numReviews: 10,
  },
]

export default products