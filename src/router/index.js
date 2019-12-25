exports.routes = [
  {
    path: '/',
    component: '../layouts/index',
    'routes': [
      {
        path: '/',
        component: '../pages/User/LoginScreen',
      },
      {
        path: '/home',
        component: '../pages/Home/HomeScreen',
      },
    ]
  }
];
