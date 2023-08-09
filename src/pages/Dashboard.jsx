import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="content-wrapper">

        <div className="content-header">
          <Header />
          <div className="container-fluid">

            <h1>Dashboard</h1>
          </div>
        </div>
        <section className="content">
          {/* Your content goes here */}
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
