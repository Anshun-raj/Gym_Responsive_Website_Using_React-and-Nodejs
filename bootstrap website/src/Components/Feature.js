import React from 'react'
import Heavy from '../Images/heavy.jpg';
import Trainer from '../Images/trainer.jpg';
import GymEnv from '../Images/gymEnv.jpg';
function Feature() {
    return (
        <section className='section bg-info'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 text-center'>
                        <h2 className='heading fs-1 fw-bold mb-4'>Features</h2>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                        <div className='card mb-4'>
                            <div className='card-body text-center'>
                                <img src={Heavy} className=" w-100 img-thumbnail img-fluid" alt='' />
                                <h3 className=' fw-bold m-2'>HEAVY WEIGHT</h3>
                                <p className='fw-semibold'>Lorem Ipsum is simply text of the printing and typesetting industry.</p>
                                <button className='fw-bold p-1 bg-dark text-white rounded'>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                        <div className='card mb-4'>
                            <div className='card-body text-center'>
                                <img src={Trainer} className=" w-100 img-thumbnail img-fluid" alt='' />
                                <h3 className=' fw-bold m-2'>EXPERT TRAINERS</h3>
                                <p className='fw-semibold'>Lorem Ipsum is simply text of the printing and typesetting industry.</p>
                                <button className='fw-bold p-1 bg-dark text-white rounded'>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4 mb-4'>
                        <div className='card'>
                            <div className='card-body text-center'>
                                <img src={GymEnv} className=" w-100 img-thumbnail img-fluid" alt='' />
                                <h3 className=' fw-bold m-2'>ECO FRIENDLY</h3>
                                <p className='fw-semibold'>Lorem Ipsum is simply text of the printing and typesetting industry.</p>
                                <button className='fw-bold p-1 bg-dark text-white rounded'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature;
