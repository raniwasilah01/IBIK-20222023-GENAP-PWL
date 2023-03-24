import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import Explore from '../modules/components/Explore/Explore'
import Home from '../modules/components/Homes/Home'
import Messages from '../modules/components/Messages/Messages'

export default function BasePath() {
    return (
        <Routes>
            <Route index element={<Layouts><Home /></Layouts>} />
            {/* <Route path='home' element={<Home />}>
                    <Route path="test" element={<Test />} />
                </Route> */}
            <Route path='home' element={<Home />} />
            <Route path='explore' element={<Explore />} />
            <Route path='messages' element={<Messages />} />
        </Routes>
    )
}
