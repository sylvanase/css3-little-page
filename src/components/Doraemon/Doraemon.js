import React from 'react';
import {connect} from 'dva';
import styles from './Doraemon.scss';
import {Link} from 'dva/router';
import {Breadcrumb} from 'antd';

const queryString = require('query-string');

function Doraemon({dispatch, list: dataSource, loading, total, page: current}) {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item><Link to="/">home</Link></Breadcrumb.Item>
        <Breadcrumb.Item>哆啦A梦</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.doraemon}>
        <div className={styles.head}>
          <div className={styles.eyes}>
            <div className={`${styles.eye} ${styles.left}`}>
              <div className={`${styles.black} ${styles.bleft}`}></div>
            </div>
              <div className={`${styles.eye} ${styles.right}`}>
              <div className={`${styles.black} ${styles.bright}`}></div>
            </div>
          </div>
          <div className={styles.face}>
            <div className={styles.white}></div>
            <div className={styles.nose}>
              <div className={styles.light}></div>
            </div>
            <div className={styles.nose_line}></div>
            <div className={styles.mouth}></div>
            <div className={`${styles.whiskers} ${styles.rTop} ${styles.r160}`}>
              <div className={`${styles.whisker} ${styles.rTop} ${styles.r160}`}></div>
              <div className={`${styles.whisker} ${styles.rt}`}></div>
              <div className={`${styles.whisker} ${styles.rBottom} ${styles.r20}`}></div>
              <div className={`${styles.whisker} ${styles.lTop} ${styles.r20}`}></div>
              <div className={`${styles.whisker} ${styles.lt}`}></div>
              <div className={`${styles.whisker} ${styles.lBottom} ${styles.r160}`}></div>
            </div>
          </div>
        </div>
        <div className={styles.choker}>
          <div className={styles.bell}>
            <div className={styles.bell_line}></div>
            <div className={styles.bell_circle}></div>
            <div className={styles.bell_under}></div>
            <div className={styles.bell_light}></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default connect()(Doraemon);
