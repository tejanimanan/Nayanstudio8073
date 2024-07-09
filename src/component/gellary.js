import React from 'react';
//import './Gallery.css';  // Create this CSS file for custom styles

const images = [
  { src: "image/wedding/wed0.jpg", alt: "Wedding 1" },
  { src: "image/wedding/wed18.png", alt: "Wedding 2" },
  { src: "image/bridal/bridal01.jpg", alt: "Wedding 2" },
  { src: "image/wedding/wed35.png", alt: "Wedding 2" },
  { src: "image/wedding/wed20.png", alt: "Wedding 2" },
  { src: "image/wedding/wed34.png", alt: "Wedding 2" },
  { src: "image/sagai/sagai00.jpg", alt: "Sagai 2" },
  { src: "image/sagai/sagai2.png", alt: "Sagai 5" },
  { src: "image/sagai/sagai19.png", alt: "Sagai 12" },
  { src: "image/pre-wedding/pre13.png", alt: "Sagai 12" },
  { src: "image/pre-wedding/pre11.png", alt: "Sagai 12" },
  { src: "image/pre-wedding/pre16.png", alt: "Sagai 12" },
  // Add more images as needed
];

const Gallery = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bolder mb-4">Nayan Studio Gallery</h2>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card h-100 image-card">
              <img
                src={image.src}
                className="card-img-top"
                alt={image.alt}
                data-bs-toggle="modal"
                data-bs-target={`#imageModal${index}`}
                style={{ cursor: 'pointer' }}
              />
            </div>

            {/* Modal for each image */}
            <div
              className="modal fade"
              id={`imageModal${index}`}
              tabIndex="-1"
              aria-labelledby={`imageModalLabel${index}`}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id={`imageModalLabel${index}`}>{image.alt}</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img src={image.src} className="img-fluid" alt={image.alt} />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      <p>
             <b>For More Follow Our Insta ID:</b>    <i className="fab fa-instagram"></i> <strong>Instagram:</strong> <a href="https://www.instagram.com/nayanstudio.8073" target="_blank" rel="noopener noreferrer">@nayanstudio8073</a> 
              </p>
    </div>
  );
};

export default Gallery;
