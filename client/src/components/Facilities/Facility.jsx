import React from 'react';
import "./Facility.css"

const facilities = [
  { id: 1, title: 'Awesome Pool', desc: 'Relax and enjoy our rooftop pool with city views.' },
  { id: 2, title: 'Prime Location', desc: 'Stay in the heart of the city, near attractions.' },
  { id: 3, title: 'Easy Reservations', desc: 'Book rooms online easily with instant confirmation.' },
  { id: 4, title: 'Delicious Menu', desc: 'Savor a wide variety of cuisines at our restaurant.' },
  { id: 5, title: 'On-site Parking', desc: 'Safe and secure parking available for guests.' },
  { id: 6, title: 'Gym Access 24/7', desc: 'Stay fit with our fully equipped gym, open all day.' },
];

const Facility = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Explore Our <span className="text-yellow-500">Facilities</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Our hotel offers a range of amenities to make your stay unforgettable.
          </p>
        </div>

        {/* Facility Cards */}
        <div className="row">
          {facilities.map((facility) => (
            <div className="col-md-4 col-sm-12 mb-3 ">
                <div className="card p-3 p-lg-5 p-md-4 facility_cards">
                <div className="card-body">
                    <h5 className="text-warning p-lg-3 p-md-4">{facility.id}</h5>
                    <p className="fw-semibold text-muted mb-3">{facility.title}</p>
                    <p className="text-center text-secondary mb-3">
                    {facility.desc}
                    </p>
                </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;
