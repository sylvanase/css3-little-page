import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import DoraemonComponent from '../components/Doraemon/Doraemon';
import MainLayout from '../components/MainLayout/MainLayout';

function Doraemon(location) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <DoraemonComponent />
      </div>
    </MainLayout>
  );
}


export default connect()(Doraemon);
