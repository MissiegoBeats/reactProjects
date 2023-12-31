import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Discography.css';
import cover1 from '../images/cover1.jpg';
import cover2 from '../images/cover2.jpg';
import cover3 from '../images/cover3.jpg';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import Card from './Card.js';
import { BsSpotify } from 'react-icons/bs';

function Discography() {
  const albums = [
    {
      title: 'The Abyss',
      year: '2022',
      cover: cover1,
      url: 'https://open.spotify.com/album/2zZvOehxeUYhWfrBbEPq3w?si=vs2itylBSrWitAGQLVGY0w',
    },
    {
      title: 'Dear Depression',
      year: '2022',
      cover: cover2,
      url: 'https://open.spotify.com/album/7GCEaBjroac3uWbBoatNE3?si=8f15Us5jRoC3GSdwOC4Asg',
    },
    {
      title: 'rockstar in the making',
      year: 'Soon (link to single)',
      cover: cover3,
      url: 'https://open.spotify.com/track/6z1DxDmWTkWvHSGhZRYAmK?si=c2691a89c6704624',
    },
  ];

  const cards = [
    {
      title: 'Florida',
      image: image1,
      url: 'https://youtu.be/KZtbAWjpKHE',
    },
    {
      title: 'This Weekend',
      image: image2,
      url: 'https://youtu.be/xhfrtlTylJw',
    },
    {
      title: 'Thoughts',
      image: image3,
      url: 'https://youtu.be/1zvGHLummI4',
    },
    {
      title: 'In my other life',
      image: image4,
      url: 'https://youtu.be/1zvGHLummI4',
    },
  ]

  return (
    <div className="container bg-dark pt-3 text-white">
      <h2 className="text-center pb-5">Discography</h2>
      <div className="d-flex justify-content-center" style={{marginLeft:"20px"}}>
        {cards.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-2 mb-4 pt-3">
             <Card 
              image={card.image}
              name={card.title}
              url={card.url} />
            </div>
          ))}
      </div>
      <div className="row discography">
        {albums.map((album, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4 pt-3">
            <div className="card discography-card bg-dark text-white">
              <img src={album.cover} className="card-img-top" alt={album.title} />
              <div className="card-body">
                <h5 className="card-title">{album.title}</h5>
                <p className="card-text">Year: {album.year}</p>
                <a href={album.url} target="_blank" className="btn btn-light d-flex justify-content-center listen-button-spotify"><BsSpotify /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discography;
