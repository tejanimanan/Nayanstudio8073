import React from 'react'

export default function Contactus() {
  return (
    <>
      <div className="container my-5 back">
        <div className="row">
          <div className="col-md-6">
            <img src="image/office.jpg" height="300px" className="img-fluid rounded" alt="Contact Nayan Studio" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h1 className="display-4">Contact Us</h1>
              <p className="lead">
                Welcome to Nayan Studio! We are located in the heart of the city, ready to capture your precious moments.
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>  <strong>Location:</strong> A13 Silver valley Complex,Ring Road,Bhavnagar,364002
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> <strong>Phone Number:</strong> <a href="tel:+918980888981">(91) 89 80 88 89 81</a>
              </p>

              <p>
                <i className="fab fa-instagram"></i> <strong>Instagram:</strong> <a href="https://www.instagram.com/nayanstudio.8073" target="_blank" rel="noopener noreferrer">@nayanstudio8073</a> <a href="https://www.instagram.com/bharat_nayan" target="_blank" rel="noopener noreferrer">@Bharatdabhi</a>
              </p>
              <p>
                <i className="fab fa-youtube"></i> <strong>YouTube:</strong> <a href="https://www.youtube.com/@NayanStudio-po2wv" target="_blank" rel="noopener noreferrer">Nayan Studio YouTube Channel</a>
              </p>
              <p>
                <i className="fab fa-whatsapp"></i> <strong>WhatsApp:</strong> <a href="https://wa.me/(91)8980888981" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
              </p>

              <div className="my-4 card shadow" >
                <iframe
                  title="Nayan Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.09399374374254!2d72.16722805865876!3d21.745891874137982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5b00113a74bf%3A0x4f3b8b2f1ffdf3d4!2sSilver%20Valley!5e1!3m2!1sgu!2sin!4v1719401880221!5m2!1sgu!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 100 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}
