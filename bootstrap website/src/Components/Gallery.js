import React from 'react'
import Primo from '../Images/primo.webp';
import Push from '../Images/push.jpg';
import Wheel from '../Images/wheel.jpg'
import Pushup from '../Images/pushUp.jpeg';
import Hurtle from '../Images/hurtle.jpg';
import Situp from '../Images/situp.jpg';
function Gallery() {
    return (
        <section className='section bg-info'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h2 className='heading fs-1 fw-bold mb-3'>Gallery</h2>
                    </div>

                    <div className='col-sm-12 col-md-4 col-lg-4 mb-4'>
                        <div className='card '>
                            <div className='card-body text-center'>
                                <img src={Primo} className="img-thumbnail galImg" alt='' />
                            </div>
                        </div>

                    </div>

                    <div className='col-sm-12 col-md-4 col-lg-4 mb-4'>
                        <div className='card '>
                            <div className='card-body text-center'>
                                <img src={Wheel} className="img-thumbnail galImg" alt='' />
                            </div>
                        </div>

                    </div>

                    <div className='col-sm-4 col-md-4 col-lg-4 mb-4'>
                        <div className='card '>
                            <div className='card-body text-center'>
                                <img src={Push} className="img-thumbnail galImg" alt='' />
                            </div>
                        </div>

                    </div>

                    <div className='col-sm-4 col-md-4 col-lg-4 mb-4'>
                        <div className='card '>
                            <div className='card-body text-center'>
                                <img src={Pushup} className="img-thumbnail galImg" alt='' />
                            </div>
                        </div>

                    </div>

                    <div className='col-sm-4 col-md-4 col-lg-4 mb-4'>
                        <div className='card '>
                            <div className='card-body text-center'>
                                <img src={Hurtle} className="img-thumbnail galImg" alt='' />
                            </div>
                        </div>

                    </div>

                    <div className='col-sm-4 col-md-4 col-lg-4'>
                        <div className='card '>
                            <div className='card-body text-center'>
                                <img src={Situp} className="img-thumbnail galImg" alt='' />
                            </div>
                        </div>

                    </div>


                    
                    

                </div>

            </div>

        </section>
    )
}

export default Gallery;