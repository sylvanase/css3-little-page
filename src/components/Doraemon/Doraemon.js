import React from 'react';
import {connect} from 'dva';
import styles from './Doraemon.scss';
import {routerRedux} from 'dva/router';

const queryString = require('query-string');

function Doraemon({dispatch, list: dataSource, loading, total, page: current}) {
  return (
    <div className={styles.doraemon}>
      <div>
        1
      </div>
    </div>
  );
}


export default connect()(Doraemon);
