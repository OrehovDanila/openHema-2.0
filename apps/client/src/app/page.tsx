import styles from './page.module.scss';
import React from "react";

export default function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome client 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
