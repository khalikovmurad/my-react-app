import React from 'react';
import ReactDom from 'react-dom/client'
import Head from './components/header/Head';
import styles from './main.module.css'
import Footer from './components/footer/Footer';
import MenuContent from './components/menu/MenuContent'




ReactDom.createRoot(document.getElementById('root')).render(
    <div className={styles.container}>
        <Head/>
        <MenuContent/>
        <Footer/>
    </div>
)