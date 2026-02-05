import React from 'react';
import ServiceCard from './ServiceCard';
import './ServiceCardsGrid.css';

const ServiceCardsGrid = ({ services }) => {
  return (
    <div className="service-cards-grid">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  );
};

export default ServiceCardsGrid;
