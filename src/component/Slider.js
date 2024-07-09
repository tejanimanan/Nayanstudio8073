import React from 'react';

export default function Slider() {
    return (
        <>
            <div className="row">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={3} aria-label="Slide 4" />
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={4} aria-label="Slide 5" />
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={5} aria-label="Slide 6" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={2000}>
                            <div className="carousel-caption custom-caption">
                                <h1>Welcome Nayan Studio</h1>
                            </div>
                            <img src="image/bridal/b4.jpg" height="600px" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="image/sagai/sagai00.jpg" height="600px" className="d-block w-100" alt="..." />
                            <div className="carousel-caption custom-caption">
                                <h2>We Focus On Your Emotion</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="image/pre-wedding/pre-wed1.jpg" height="600px" className="d-block w-100" alt="..." />
                            <div className="carousel-caption custom-caption">
                                <h3 className="text-center">Pre-wedding</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="image/haldirasm/haldi01.jpg" height="600px" className="d-block w-100" alt="..." />
                            <div className="carousel-caption custom-caption">
                                <h3>Haldi Rasam</h3>
                            </div>
                        </div>
                        <div className="carousel-item">

                            <video className="d-block w-100" src="image/video/video1.mp4" height="600px" preload="auto" loop  controls></video>

                            <div className="carousel-caption custom-caption">
                                <h1><img src="image/nayanlogo.png" width="150px" alt="Logo" /></h1>
                            </div>
                        </div>
                        <div className="carousel-item">

                            <video className="d-block w-100" src="image/video/v3.mp4" height="600px" preload="auto" loop  controls></video>

                        </div>

                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
            </div>
        </>
    );
}
