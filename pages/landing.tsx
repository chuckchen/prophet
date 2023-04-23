import React from 'react';
import Link from 'next/link';
import style from './landing.module.css';

function Landing() {
  return (
    <div>
      {/* Hero section */}
      <section className={style.heroSection}>
        <h1 className={style.gradientTitle}>ChatBitcoin</h1>
        <p className="flex flex-row items-center justify-center">Join the Bitcoin Boom - Let Our Chatbot Help You Make Smart Investment Decisions!</p>
        {/* Add chatbot component here */}
        <div className="flex flex-row">
          <Link href="/trends" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-4">Preview</Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join the waitlist</button>
        </div>
      </section>

      {/* Feature sections */}
      <section className={style.featureSection}>
        <h2>Up-to-Date Information</h2>
        <div className="flex flex-row items-center justify-center">
          <img className="mr-4" src="https://via.placeholder.com/500x300.png?text=Feature+1+Placeholder" alt="Feature 1 Placeholder" />
          <p>A chatbot trained on bitcoin market data can give you the latest information on the current price of bitcoin and other cryptocurrencies. This can help you stay informed about the market and make better decisions about buying, selling, or holding your digital assets.</p>
        </div>
      </section>

      <section className={style.featureSection}>
        <h2>Predictions for the Future</h2>
        <div className="flex flex-row items-center justify-center">
          <p>Using data from the past, a chatbot can make predictions about what might happen in the market. This can help you understand the trends and opportunities in the market, and potentially help you make better investment decisions.</p>
          <img className="ml-4" src="https://via.placeholder.com/500x300.png?text=Feature+2+Placeholder" alt="Feature 2 Placeholder" />
        </div>
      </section>

      <section className={style.featureSection}>
        <h2>Personalized Advice</h2>
        <div className="flex flex-row items-center justify-center">
          <img className="mr-4" src="https://via.placeholder.com/500x300.png?text=Feature+3+Placeholder" alt="Feature 3 Placeholder" />
          <p>A chatbot can analyze your investment preferences and goals, and give you personalized advice on how to invest in bitcoin and other cryptocurrencies. This can help you make more informed decisions about your investments and potentially earn more money over time.</p>
        </div>
      </section>
    </div>
  );
}

export default Landing;

