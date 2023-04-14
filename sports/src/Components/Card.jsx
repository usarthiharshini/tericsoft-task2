import React, { Component } from "react";

class Card extends Component {
  render() {
    const { image, title, tags } = this.props;

    return (
      <div className="card">
        <img src={image} alt={title} className="card-img" />
        <h2 className="card-title">{title}</h2>
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span className="card-tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
