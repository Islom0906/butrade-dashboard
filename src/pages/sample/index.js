import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';


const AdvantagesTitle = React.lazy(() => import('./Advantages Title'));
const Order = React.lazy(() => import('./Order'));
const AdvantagesTitlePostEdit = React.lazy(() => import('./Advantages Title/AdvantagesTitlePostEdit'));
const Advantages = React.lazy(() => import('./Advantages'));
const AdvantagesPostEdit = React.lazy(() => import('./Advantages/AdvantagesPostEdit'));
const Banner = React.lazy(() => import('./Banner'));
const BannerPostEdit = React.lazy(() => import('./Banner/BannerPostEdit'));
const Contact = React.lazy(() => import('./Contact'));
const ContactPostEdit = React.lazy(() => import('./Contact/ContactPostEdit'));
const AboutIndex = React.lazy(() => import('./About Index'));
const AboutIndexPostEdit = React.lazy(() => import('./About Index/AboutIndexPostEdit'));
const Category = React.lazy(() => import('./Category'));
const CategoryPostEdit = React.lazy(() => import('./Category/CategoryPostEdit'));
const Product = React.lazy(() => import('./Product'));
const ProductPostEdit = React.lazy(() => import('./Product/ProductPostEdit'));
const Partners = React.lazy(() => import('./Partners'));
const PartnersPostEdit = React.lazy(() => import('./Partners/PartnersPostEdit'));



export const samplePagesConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/order',
    element: <Order/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/advantage-title',
    element: <AdvantagesTitle/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/advantage-title/add',
    element: <AdvantagesTitlePostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/advantage',
    element: <Advantages/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/advantage/add',
    element: <AdvantagesPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner',
    element: <Banner/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner/add',
    element: <BannerPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/contact',
    element: <Contact/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/contact/add',
    element: <ContactPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-index',
    element: <AboutIndex/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-index/add',
    element: <AboutIndexPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/category',
    element: <Category/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/category/add',
    element: <CategoryPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/product',
    element: <Product/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/product/add',
    element: <ProductPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/partners',
    element: <Partners/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/partners/add',
    element: <PartnersPostEdit/>,
  },
];
