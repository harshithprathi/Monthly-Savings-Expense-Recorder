import React from 'react'
import Header from "../components/Header";
import Footer from "../components/footer";
import '../../src/styles.css';
import ContentCard from '../components/contentcards';
import Content  from '../components/content';

const Home = () => {
  return (
    <div className='homestyle'>
        <Header />
        <Content />
        <ContentCard />
        <Footer />
    </div>
  )
}

export default Home