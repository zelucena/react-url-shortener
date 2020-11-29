import React from 'react'
import Layout from 'Layout'
import Router from './Router';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Layout>
            <ToastContainer />
            <Router />
        </Layout>
    )
}

export default App
