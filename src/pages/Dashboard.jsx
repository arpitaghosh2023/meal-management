import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';


const Dashboard = () => {
  return (
    <div className="main-wrapper">
      {/* Header */}
      <header className="main-header">
        {/* Header content */}
        <Header />
      </header>

      {/* Sidebar */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Sidebar content */}
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="content">
        {/* Main content goes here */}
      </main>

      {/* Footer */}
      <footer className="main-footer">
        {/* Footer content */}
        <Footer />
      </footer>
    </div>
  );
};

export default Dashboard;
