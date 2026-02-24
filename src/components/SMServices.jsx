// src/components/SMServices.jsx
import React from 'react';
import './SMServices.css';
import { motion } from 'framer-motion';
const servicesData = [
  {
    id: 1,
    image: "/images/smart-home-services/nzxtgen-smart-home-voice-control-alexa.webp",
    title: 'Voice Control',
    subtitle: 'Integration of Alexa & Google',
    description:
      'Voice commands let users manage lighting, thermostats, security cameras, and more. Voice routines allow for automation, such as dimming lights and adjusting temperatures at bedtime.',
  },
  {
    id: 2,
    image: "/images/smart-home-services/nzxtgen-smart-home-smartphone-control.webp",
    title: 'Smart Phone',
    subtitle: 'Smartphone Integration',
    description:
      'Smartphone integration with home automation lets users control and monitor devices remotely through apps. This enhances convenience by providing real-time updates, notifications, and personalized automation on the go.',
  },
  {
    id: 3,
    image: "/images/smart-home-services/nzxtgen-smart-home-tablet-integration.webp",
    title: 'Tablet Integration',
    subtitle: 'Home Hub with Large Interface',
    description:
      'A tablet configured for home automation serves as a dedicated hub, offering an optimized interface to control lighting, security, climate, and entertainment. Its large screen and custom setup provide seamless access to all devices and routines.',
  },
  {
    id: 4,
    image: "/images/smart-home-services/nzxtgen-smart-home-automated-programming.webp",
    title: 'Automated Programming',
    subtitle: 'Time & Event Based Automation',
    description:
      'Schedule lights and devices to operate based on time, date, temperature, sunlight levels, or events such as locking up or leaving the home. Create personalized voice command phrases to control multiple devices simultaneously.',
  },
  {
    id: 5,
    image: "/images/smart-home-services/nzxtgen-smart-home-user-friendly-interface.webp",
    title: 'User Friendly',
    subtitle: 'Easy & Seamless Interface',
    description:
      'Professionally installed home automation systems are user-friendly, with devices seamlessly integrated for optimal performance. Users can control and customize their system through intuitive apps, voice commands, or interfaces.',
  },
  {
    id: 6,
    image: "/images/smart-home-services/nzxtgen-smart-home-app-control.webp",
    title: 'Back up',
    subtitle: 'Cloud & Local Settings Backup',
    description:
      'We ensure all configurations—including integrations, customizations, and data—are backed up. These backups can be stored locally or in the cloud, making it easy to restore your settings when needed.',
  },
];

const SMServices = () => {
  return (
    <section className="smservices-section">
      <div className="smservices-wrapper">
        {servicesData.map((item, index) => (
          <motion.div
            className="smservices-card"
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="smservices-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="smservices-text">
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SMServices;
