import Home from '../pages/Home';

const mainRoutes = [
  {
    path: "/",
    name: "Home",
    layout: "/",
    exact: true,
    component: <Home/>,
  },
];

export  {
  mainRoutes
}