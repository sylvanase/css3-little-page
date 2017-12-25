import React from 'react';
import { connect } from 'dva';
import DoraemonComponent from '../components/Doraemon/Doraemon';
import MainLayout from '../components/MainLayout/MainLayout';

function Doraemon(location) {
  return (
    <MainLayout location={location}>
      <DoraemonComponent />
    </MainLayout>
  );
}


export default connect()(Doraemon);
