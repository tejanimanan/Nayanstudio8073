import React from 'react'

export default function Aboutus() {
    return (
        <>
            <div className="container my-5 back">
                <div className="row">
                    <div className="col-md-6">
                        <img src="image/logook.png" className="img-fluid rounded" alt="Nayan Studio" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className="display-4">About Nayan Studio</h1>
                            <p className="lead">
                                Welcome to Nayan Studio, where we capture your most cherished moments with creativity and passion. Our team of professional photographers and videographers is dedicated to providing exceptional service and high-quality images that you will treasure forever.
                            </p>
                            <p>
                                At Nayan Studio, we believe in the power of visual storytelling. Our mission is to turn your special occasions into timeless memories through our lens. Whether it's a wedding, a family portrait, or a corporate event, we are here to make your vision come to life.
                            </p>
                            <p>
                                Thank you for choosing Nayan Studio. We look forward to working with you and creating beautiful memories together.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="card mb-3">
                            <div class="row g-4 back">
                                <div class="col-md-4">
                                    <img src="image/owner.png" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Bharat Dabhi</h5>
                                        <p class="card-text">A passionate photographer and founder of Nayan Studio, driven by capturing emotions and creating timeless memories. Nayan skillfully blends creativity with technical expertise to deliver stunning results that exceed expectations.
                                        </p>
                                        <p class="card-text"><small class="text-body-secondary">10+ Years of Photography Experience</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div class="card mb-3 shadow-lg">
                           <div className="card-header   text-bg-secondary">
                                <h2 className='fw-bold'>Our New Office At Bhavanagar</h2> 
                                <span className=" fw-bolder">
                                    <i class="fa fa-map-marker"></i> A13 Silver valley Complex,Ring Road,Bhavnagar,364002,Gujarat, India
                                </span>
                            </div> 
                            <div className="card-body">

                            <video className="d-block w-100" src="image/video/nayanOffice.mp4" height="600px"  loop  controls></video>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

