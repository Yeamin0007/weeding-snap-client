import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const HomeServCard = ({service}) => {
    const {_id, img, name, price, description} = service;
    return (
//         <div className="card w-96  shadow-xl image-full">
//   <figure><img src={img} alt="weddingPhoto" /></figure>
//   <div className="card-body">
//     <h2 className="text-3xl text-center m-6 font-bold">{name}</h2>
//     <p> {description.slice(0, 90)}...</p>
//     <div className="card-actions justify-end">
//     <p className='font-bold text-slate-300'>Tk. {price}</p>
//       <button className="btn btn-outline text-white">Details <FaAngleRight></FaAngleRight></button>
//     </div>
//   </div>
// </div>
<div>

<div className="card w-96 glass">
<figure>
<PhotoProvider>
      <PhotoView src={img}>
      <img className=' rounded-md' src={img} alt="wedding"/>
      </PhotoView>
    </PhotoProvider>
</figure>

<div className="card-body">
  <h2 className="text-3xl text-center m-6 font-bold">{name}</h2>
  <p>{description.slice(0, 90)}...</p>
  <div className="card-actions justify-end">
  <p className='font-bold mt-2'>Tk. {price}</p>
    <button className="btn btn-outline ">Details<FaAngleRight></FaAngleRight></button>
  </div>
</div>
</div>
    
</div>
);
};

export default HomeServCard;