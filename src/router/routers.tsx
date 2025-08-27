import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"
import PrivateRoute from "./privateRoute"

const Layout = React.lazy(() => import('@/layout'))
const Login = React.lazy(() => import('@/pages/login'))
const Home = React.lazy(() => import('@/pages/home/index'))
const About = React.lazy(() => import('@/pages/about/index'))
const Mine = React.lazy(() => import('@/pages/mine/index'))
const ArticleList = React.lazy(() => import("@/pages/article/list"))

const getUserInfo = ({ appToken, userToken }: {
  appToken: string,
  userToken: string
}): Promise<{
  appToken: string,
  userToken: string
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        appToken,
        userToken
      })
    }, 3000)
  })
}

const authMiddleware = async (params) => {
  const url: URL = new URL(params.request.url);
  const appToken: string | null = url.searchParams.get('appToken');
  const userToken: string | null = url.searchParams.get('userToken');
  console.log('params: ', params, appToken, userToken);
  if (appToken && userToken) {
    const res = await getUserInfo({
      appToken,
      userToken
    })
    console.log(res);
  }
  return {};
  // console.log('params, next: ', params);
  // const isAuth = !!localStorage.getItem('token');

  // const publicPaths = ["/login", "/register"]; // 明确列出不需要验证的路径
  // const { pathname } = new URL(params.request.url);

  // if (publicPaths.includes(pathname)) {
  //   return {};
  // }
  // if (!isAuth) {
  //   console.log("准备重定向到登录页");
  //   throw redirect('/login');
  // }
  // return {};
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PrivateRoute><Home /></PrivateRoute>,
        loader: authMiddleware,
        // element: <About />
      },
      {
        path: "about",
        element: <PrivateRoute><About /></PrivateRoute>,
        loader: authMiddleware,
        // element: <About />
      },
      {
        path: "mine",
        element: <PrivateRoute><Mine /></PrivateRoute>,
        loader: authMiddleware,
        // element: <Mine />
      },
      {
        path: "article",
        children: [
          {
            index: true,
            element: <PrivateRoute><ArticleList /></PrivateRoute>,
            loader: authMiddleware,
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
], {
  basename: import.meta.env.VITE_PUBLIC_PATH // 这里设置基础路径
})

const Routers = () => {
  return <RouterProvider router={router} />
}

export default Routers