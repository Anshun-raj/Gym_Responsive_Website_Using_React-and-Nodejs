import React from 'react'
import AboutImg from '../Images/about.jpg';
import AboutInfo from '../Images/aboutInfo.jpg';
function About() {
    return (
        <div className='section bg-info'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h2 className='heading fs-1 fw-bold mb-2'>About</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 mb-2'>
                        <div className='card w-75 h-90 m-auto text-center'>
                            <div className='card-body'>
                                <img src={AboutImg} className="img-thumbnail img-fluid aboutImg" alt='' />

                            </div>
                        </div>
                    </div>
                    <div className=' col-md-6 col-sm-12 '>
                        <div className='container'>
                            <div className='card m-auto w-75 text-center '>
                                <div className='card-body'>
                                    <h4 className='fw-bold  text-center text-danger'>WHY YOU SHOULD CHOOSE US?</h4>

                                    <img src={AboutInfo} className="img-fluid  img-thumbnail mb-3" alt='' />
                                    <p className='fw-semibold'>Lorem ipsum dolor sit consectetur adipiscing elit.Gym is good for health and it keeps us fit so do this activity everyday.</p>
                                    <div className='container'>
                                        <div className='col-md-12 mt-2'>
                                            <h4 className='text-center fw-bold text-dark'>-OUR SLOGAN-</h4>
                                        </div>
                                        <div className='col-md-12'>
                                            <p className='fw-bold text-center text-danger'>EAT,SLEEP GYM REPEAT</p>
                                            <button className='btn bg-dark text-white fw-bold'>Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
