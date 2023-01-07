import React from 'react'
import { Route, Routes } from 'react-router';
import CSS  from '../Pages/CSS';
import Home from '../Pages/Home';
import HTML from '../Pages/HTML';
import Javascript from '../Pages/Javascript';
import NotFound from '../Pages/NotFound';
import SingleDetailPage from '../Pages/SingleDetailPage';
import PrivateRoute from './PrivateRoute';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/html" element={
                <PrivateRoute>
                    <HTML />
                </PrivateRoute>
            } />

            <Route
                path="/html/:id"
                element={
                <PrivateRoute>
                    <SingleDetailPage />
                </PrivateRoute>
                }
            />

            <Route path="/css" element={
            <PrivateRoute>
                <CSS />
            </PrivateRoute>} />

            <Route
                path="/css/:id"
                element={
                <PrivateRoute>
                    <SingleDetailPage />
                </PrivateRoute>
                }
            />


            <Route path="/javascript" element={
            <PrivateRoute>
                <Javascript />
            </PrivateRoute>
            } />

            <Route
                path="/javascript/:id"
                element={
                <PrivateRoute>
                    <SingleDetailPage />
                </PrivateRoute>
                }
            />
          <Route path="*" element={<NotFound />} />
        </Routes>
      );
}

export default AllRoutes