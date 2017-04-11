import React, { PropTypes } from 'react';
import Dashboard from './dashboard/Dashboard';
import HeaderComponent from 'Header';
import FooterComponent from 'Footer';

//may not necessarily be functional based, could be class based

const _Root = (props) => {

  // if (Login is active) {
  //   CurrentPage = Login;
  // }
  return (
    <div>
      <HeaderComponent />
      <div>
      <Dashboard />
      </div>
      <FooterComponent />
    </div>
  );
};

export default _Root;
