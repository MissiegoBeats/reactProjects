import React from 'react';
import '../style-sheets/Testimony.css';

class Testimony extends React.Component {
  render() {
    return (
      <div className="testimony-contanier">
        <img className="testimony-cliff"
          src={require(`../images/${this.props.image}.png`)}
          alt={`Photo of ${this.props.name}`}
          height={300}
          width={300} />
        <div className="testimony-text-container">
          <p className="testimony-name"><strong>{this.props.name}</strong> en {this.props.country}</p>
          <p className="testimony-job">{this.props.job} en <strong>{this.props.company}</strong></p>
          <p className="testimony-text">{this.props.text}</p>
        </div>
      </div>
    ); 
  }
}

export default Testimony;