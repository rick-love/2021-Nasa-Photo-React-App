import React, { Component } from 'react';
import PhotoItem from './PhotoItem';

class Photos extends Component {
  state = {
    photos: [
      {
        copyright: 'Panther Observatory',
        date: '2006-04-15',
        explanation:
          "In this stunning cosmic vista, galaxy M81 is on the left surrounded by blue spiral arms.  On the right marked by massive gas and dust clouds, is M82.  These two mammoth galaxies have been locked in gravitational combat for the past billion years.   The gravity from each galaxy dramatically affects the other during each hundred million-year pass.  Last go-round, M82's gravity likely raised density waves rippling around M81, resulting in the richness of M81's spiral arms.  But M81 left M82 with violent star forming regions and colliding gas clouds so energetic the galaxy glows in X-rays.  In a few billion years only one galaxy will remain.",
        hdurl: 'https://apod.nasa.gov/apod/image/0604/M81_M82_schedler_c80.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Galaxy Wars: M81 versus M82',
        url: 'https://apod.nasa.gov/apod/image/0604/M81_M82_schedler_c25.jpg',
      },
      {
        date: '2013-07-22',
        explanation:
          "You are here.  Everyone you've ever known is here. Every human who has ever lived -- is here. Pictured above is the Earth-Moon system as captured by the Cassini mission orbiting Saturn in the outer Solar System. Earth is the brighter and bluer of the two spots near the center, while the Moon is visible to its lower right. Images of Earth from Saturn were taken on Friday. Quickly released unprocessed images were released Saturday showing several streaks that are not stars but rather cosmic rays that struck the digital camera while it was taking the image.  The above processed image was released earlier today.  At nearly the same time, many humans on Earth were snapping their own pictures of Saturn.   Note: Today's APOD has been updated.",
        hdurl:
          'https://apod.nasa.gov/apod/image/1307/earthmoon2_cassini_946.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Earth and Moon from Saturn',
        url: 'https://apod.nasa.gov/apod/image/1307/earthmoon2_cassini_960.jpg',
      },
      {
        copyright: 'Joe Orman',
        date: '2000-04-06',
        explanation:
          "Rising before the Sun on February 2nd, astrophotographer Joe Orman anticipated this apparition of the bright morning star Venus near a lovely crescent Moon above a neighbor's house in suburban Phoenix, Arizona, USA. Fortunately, the alignment of bright planets and the Moon is one of the most inspiring sights in the night sky and one that is often easy to enjoy and share without any special equipment. Take tonight, for example. Those blessed with clear skies can simply step outside near sunset and view a young crescent Moon very near three bright planets in the west Jupiter, Mars, and Saturn. Jupiter will be the unmistakable brightest star near the Moon with a reddish Mars just to Jupiter's north and pale yellow Saturn directly above. Of course, these sky shows create an evocative picture but the planets and Moon just appear to be near each other -- they are actually only approximately lined up and lie in widely separated orbits. Unfortunately, next month's highly publicized alignment of planets on May 5th will be lost from view in the Sun's glare but such planetary alignments occur repeatedly and pose no danger to planet Earth.",
        hdurl: 'https://apod.nasa.gov/apod/image/0004/vm_orman_big.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Venus, Moon, and Neighbors',
        url: 'https://apod.nasa.gov/apod/image/0004/vm_orman.jpg',
      },
    ],
  };

  render() {
    return (
      <div className='grid grid-flow-col justify-center gap-4'>
        {this.state.photos.map((photo) => (
          <PhotoItem key={photo.title} photo={photo} />
        ))}
      </div>
    );
  }
}

export default Photos;
