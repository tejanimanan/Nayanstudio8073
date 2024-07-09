import React from 'react';

const services = [
  { src: "image/wedding/wed35.png", alt: "Wedding" },
  { src: "image/pre-wedding/pre7.png", alt: "Pre-Wedding" },
  { src: "image/haldirasm/haldi11.png", alt: "Haldi Rasam" },
  { src: "image/sagai/sagai16.png", alt: "Engagement" },
  { src: "image/cemero.jpg", alt: "" },
  { src: "image/bridal/b5.jpg", alt: "Bridal" },
  { src: "image/babyshower.png", alt: "Baby Shower" },
  { src: "image/babyshoot/baby4.png", alt: "Baby Shoot" },
  { src: "image/droneshoot/d2.png", alt: "Drone Shoot" }
  // Add more images as needed
];

const GalleryService = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bolder mb-4">Nayan Studio Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100" id='mymove'>
              <img
                src={service.src}
                className="card-img-top"
                alt={service.alt}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{service.alt}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryService;
