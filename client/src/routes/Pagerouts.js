import React from 'react';
import { Route, Routes } from 'react-router-dom'

import SignUp from '../components/auth/signup'
import SignIn from '../components/auth/signin'
import PostPage from '../components/pages'
import NotFound from '../components/pages/Notfound/notfound'

function PageRoutes() {
    return (

        <Routes>
            <Route path='/' exact element={<SignIn />} />
            <Route path='/signin' exact element={<SignIn />}/>
            <Route path='/signup' exact element={<SignUp />}/>
            <Route path='/post' exact element={<PostPage />}/>
            <Route path='/*' exact element={<NotFound />}/>
        </Routes>
    )

}

export default PageRoutes