import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';

function MenuItem({ title, imageUrl, size, history, match, linkUrl }) {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <div className="subtitle">Shop now</div>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
