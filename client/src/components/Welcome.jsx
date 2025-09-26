import React,{useState} from "react";

import icon1 from "../assets/img/icon/icon1.png";
import icon2 from "../assets/img/icon/icon2.png";
import icon3 from "../assets/img/icon/icon3.png";
import icon4 from "../assets/img/icon/icon4.png";
import icon5 from "../assets/img/icon/icon5.png";
import icon6 from "../assets/img/icon/icon6.png";

import pool1 from "../assets/img/gallery/pool1.png";
import pool2 from "../assets/img/gallery/pool2.png";
import pool3 from "../assets/img/gallery/pool3.png";
import pool4 from "../assets/img/gallery/pool4.png";

import loaction1 from "../assets/img/gallery/location1.png";
import loaction2 from "../assets/img/gallery/location2.png";
import loaction3 from "../assets/img/gallery/location3.png";
import loaction4 from "../assets/img/gallery/location4.png";

import food1 from "../assets/img/gallery/food1.png";
import food2 from "../assets/img/gallery/food2.png";
import food3 from "../assets/img/gallery/food3.png";
import food4 from "../assets/img/gallery/food4.png";

import parking1 from "../assets/img/gallery/parking1.png";
import parking2 from "../assets/img/gallery/parking2.png";
import parking3 from "../assets/img/gallery/parking3.png";
import parking4 from "../assets/img/gallery/parking4.png";

import gym1 from "../assets/img/gallery/gym1.png";
import gym2 from "../assets/img/gallery/gym2.png";
import gym3 from "../assets/img/gallery/gym3.png";
import gym4 from "../assets/img/gallery/gym4.png";

import room1 from "../assets/img/gallery/room1.png";
import room2 from "../assets/img/gallery/room2.jpg";
import room3 from "../assets/img/gallery/room3.jpg";
import room4 from "../assets/img/gallery/room4.jpg";


const Welcome = ()=>{

    const properties = [
        {id:1,image:pool1,category:"pool"},
        {id:2,image:pool2,category:"pool"},
        {id:3,image:pool3,category:"pool"},
        {id:4,image:pool4,category:"pool"},
        {id:5,image:loaction1,category:"location"},
        {id:6,image:loaction2,category:"location"},
        {id:7,image:loaction3,category:"location"},
        {id:8,image:loaction4,category:"location"},
        {id:9,image:food1,category:"food"},
        {id:10,image:food2,category:"food"},
        {id:11,image:food3,category:"food"},
        {id:12,image:food4,category:"food"},
        {id:13,image:parking1,category:"parking"},
        {id:14,image:parking2,category:"parking"},
        {id:15,image:parking3,category:"parking"},
        {id:16,image:parking4,category:"parking"},
        {id:17,image:gym1,category:"gym"},
        {id:18,image:gym2,category:"gym"},
        {id:19,image:gym3,category:"gym"},
        {id:20,image:gym4,category:"gym"},
        {id:21,image:room1,category:"room"},
        {id:22,image:room2,category:"room"},
        {id:23,image:room3,category:"room"},
        {id:24,image:room4,category:"room"}
    ]; 

    const listfilters = [
        {id:1,icon:icon1,filter:"pool",title:"Awesome Pool"},
        {id:2,icon:icon2,filter:"location",title:"Enjoy Best Location"},
        {id:3,icon:icon3,filter:"food",title:"Best Food Menu"},
        {id:4,icon:icon4,filter:"parking",title:"On-site Parking"},
        {id:5,icon:icon5,filter:"gym",title:"Gym Access 24/7"},
        {id:6,icon:icon6,filter:"room",title:"Easy Reservations"}
    ];

    const [activeFilter,setActiveFilter] = useState("pool");
    
    const filterproperties = properties.filter(property=>property.category === activeFilter);

    // console.log(filterproperties);

  return(

    <>

        {/* Start Welcome Section */}
         <section className="py-5 welcomesections">
            <div className="container-lg">

                {/* start title */}
                <div className="row text-center pt-3 mb-3">
                    <div className="col">
                        <h5 className="display-5 fw-semibold pt-5 titles" style={{color: 'rgba(20, 20, 70, 0.8)'}}>Welcome To <span className="text-warning">Golden Inn</span></h5>
                    </div>
                </div>
                {/* end title */}

                <div className="row p-sm-3">
                    <div className="col-lg-3 col-md-4 g-0">
                        <ul className="list-group">
                            {/* <li className="list-group-item fw-semibold text-nowrap py-3 mb-4 welcomelists activeitems" data-filter="pool"><img src={icon1} className="img-fluid me-3" alt="icon1" /> Awesome Pool</li>
                            <li className="list-group-item fw-semibold text-nowrap py-3 mb-4 welcomelists" data-filter="location"><img src={icon2} className="img-fluid me-3" alt="icon2" /> Enjoy Best Location</li>
                            <li className="list-group-item fw-semibold text-nowrap py-3 mb-4 welcomelists" data-filter="food"><img src={icon3} className="img-fluid me-3" alt="icon3" /> Best Food Menu</li>
                            <li className="list-group-item fw-semibold text-nowrap py-3 mb-4 welcomelists" data-filter="parking"><img src={icon4} className="img-fluid me-3" alt="icon4" /> On-site Parking</li>
                            <li className="list-group-item fw-semibold text-nowrap py-3 mb-4 welcomelists" data-filter="gym"><img src={icon5} className="img-fluid me-3" alt="icon5" /> Gym Access 24/7</li>
                            <li className="list-group-item fw-semibold text-nowrap py-3 mb-4 welcomelists" data-filter="room"><img src={icon6} className="img-fluid me-3" alt="icon6" /> Easy Reservations</li> */}

                            {
                                listfilters.map((listfilter,idx)=>(
                                    <li key={idx} className={`list-group-item fw-semibold text-nowrap py-3 mb-4 welcomelists ${activeFilter === listfilter.filter ? 'activeitems' : ''}`} onClick={()=>setActiveFilter(listfilter.filter)}>
                                        <img src={listfilter.icon} className="img-fluid me-3" alt={listfilter.filter} /> 
                                        {listfilter.title}
                                    </li>
                                ))
                            }


                        </ul>
                    </div>
    
                    <div className="col-lg-9 col-md-8 g-0">
                        <div className="row">

                            {filterproperties.length > 0 ? (
                                <div className={`col-12 filters ${filterproperties[0].category}`}>
                                    <img src={filterproperties[0].image} width="100%" className="img-fluid mb-3" alt={filterproperties[0].category} />
                                </div>
                            ) : null}

                            <div className="col-md-4 col-sm-12 d-flex flex-column flex-md-row gap-3 images">
                                {filterproperties.slice(1).map(property=>(
                                    <div key={property.id} className={`filters ${property.category}`}>
                                        <img src={property.image} width="100%" className="img-fluid" alt={property.category} />
                                    </div>
                                ))}
                            </div>
 
                        </div>

                    </div>

                </div>

            </div>
         </section>
        {/* End Welcome Section */}

    </>
        
  )
};

export default Welcome;