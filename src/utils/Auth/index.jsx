import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const Main = lazy(() => import('../../partials/Mainpage'))
const Home = lazy(() => import('../../pages/Home'))
const Contact = lazy(() => import('../../pages/Contact'))
const About = lazy(() => import('../../pages/About'))
const Blog = lazy(() => import('../../pages/Blog'))
const Portfolio = lazy(() => import('../../pages/Portfolio'))
const Service = lazy(() => import('../../pages/Service'))
const Loading = lazy(() => import('../../pages/Loading'))
const NotFound = lazy(() => import('../../pages/NotFound'))
const Auth = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
       <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
               <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
              
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  ) 
}
export default Auth