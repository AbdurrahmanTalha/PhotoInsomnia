import React from 'react';

const Gallery = () => {
    return (
        <div className="w-50 mx-auto">
            <h2 className="text-center">Gallery</h2>
            <div className="gallery">
                <div className="row d-flex justify-content-evenly ">
                    
                    <div className='gallery col-md-4 mb-5'>
                        <div className='d-flex justify-content-center align-items-center '>
                            <img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHx8MHx8&w=1000&q=80" className='img-fluid img-thumbnail w-100' alt="" ></img>
                        </div>
                    </div>
                   
                    <div className='gallery col-md-4 mb-5'>
                        <div className='d-flex justify-content-center align-items-center '>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0hoSVqXHhM1BGjtznKUfNDwNxCnGiDChiw&usqp=CAU" className='img-fluid img-thumbnail w-100' alt=""></img>
                        </div>
                    </div>
                    <div className='gallery col-md-4 mb-5'>
                        <div className='d-flex justify-content-center align-items-center '>
                            <img src="https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ec/ef/ecef009b-6fb4-4f5b-8957-f09e11baed92/1_jek0846-edit-edit_web_mobile.jpg" className='img-fluid img-thumbnail w-100' alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;