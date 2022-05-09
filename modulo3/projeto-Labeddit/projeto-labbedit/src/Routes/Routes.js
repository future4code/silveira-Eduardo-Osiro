import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FeedPage from '../Pages/FeedPage/FeedPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import PostPage from '../Pages/PostPage/PostPage'
import SignUpPage from '../Pages/SignUpPage/SignUpPage'


function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<LoginPage/>} />
            <Route path='/signup' element={<SignUpPage/>} />
            <Route path='/feed' element={<FeedPage/>} />
            <Route path='/post' element={<PostPage/>} />
        </Routes>
    </BrowserRouter>
       
  )
}

export default Router