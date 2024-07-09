import React from "react";

export default function Video() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom">
               
                <div className="h-100 p-4 bg-light border rounded-3">
                    <h2 className="fw-bold">Welcome to Nayan Studio !</h2>
                    <p>
                        Nayan Studio is a creative space dedicated to (describe Nayan Studio's focus: photography, videography, design, etc.). We offer a range of services to help you bring your vision to life.
                    </p>
                    <a href="/aboutus" className="btn btn-primary">Learn More</a>
                </div>
            </header>

            <div className="row g-4">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/Fr_abY3Q-hA?si=f732CLydfRBWqAfe"
                                title="YouTube video player"
                                className="video-border"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/QO_GK8yWqj4?si=c7pkIjdxTrildWqU"
                                title="YouTube video player"
                                frameBorder="0"
                                className="video-border"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/mfe58nbkvSU?si=XHrhuVxVlOvfpzNj"
                                title="YouTube video player"
                                className="video-border"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/Ww2tJPqPywA?si=UmSFPwMY-CpdpIim"
                                title="YouTube video player"
                                className="video-border"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/aWB9b4rpb1Q?si=p2NvwbuFmrR17CfQ"
                                title="YouTube video player"
                                className="video-border"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
