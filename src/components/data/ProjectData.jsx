export const ProjectData = [
  {
    id: 1,
    title: 'Places App',
    about:
      'Built a places app where the client can get authorized, provide images, manage places, and view other users provided places. Built the app with React, Node and used MongoDB as the database. Implemented Mapbox API for the forward geolocation and for viewing on map and used multer for the file upload.',
    tags: ['ReactJs', 'NodeJs', 'MongoDB'],
    demo: 'https://mern-proj-places-app.web.app/',
    github: 'https://github.com/KunalPV/places-backend',
    image: require('../../assets/project-websites/places-app.png').default,
  },
  {
    id: 2,
    title: 'eShopping',
    about:
      'Built a eCommerce website where users can signup/login, manage individual products and order them.                    Built the app with Node and MongoDB, and used ejs to render the individual html pages. Implemented bcryptJS for hashing and used multer to store the file uploads.',
    tags: ['EJS', 'NodeJs', 'MongoDB'],
    demo: 'https://eshopping-nodejs.herokuapp.com/',
    github: 'https://github.com/KunalPV/eShopping',
    image: require('../../assets/project-websites/eShopping.png').default,
  },
];
