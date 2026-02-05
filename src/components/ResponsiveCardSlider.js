import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ResponsiveCardSlider.css';

const items = [
  { img: "/images/servicePage/nzxtgen-ev-car-charger-installation.webp", title: 'EV Car Chargers', description: 'Quick & Fast Charging Options Available' },
  { img: "/images/servicePage/nzxtgen-smoke-alarm-installation.webp", title: 'Smoke Alarms', description: 'Smoke Alarms With Battery Backup', link: '/smoke-alarms-electrical-safety-checks' },
  { img: "/images/servicePage/nzxtgen-speaker-mounting-installation.webp", title: 'Speaker Mounting & Installation', description: 'Wall & Ceilings Mounts / Surface & Flush Mounts' },
  { img: "/images/servicePage/nzxtgen-downlight-installation.webp", title: 'Downlights', description: 'Switchable 3000k, 4000k, 6000k & Option To Smart Control' },
  { img: "/images/servicePage/nzxtgen-smart-home-control-smartphone.webp", title: 'Home Control With Smartphone or Tablet', description: 'Control & Monitor Your Home Remotely With Your Smartphone or Tablet' },
  { img: "/images/servicePage/nzxtgen-data-patch-panel-switch.webp", title: 'Data Patch Panels & Switches', description: 'Centralise All Your Data Points To One Place' },
  { img: "/images/servicePage/nzxtgen-data-point-cat6-installation.webp", title: 'Data Points', description: 'Cat 5,6,7 / Extension & Internet Ports' },
  { img: "/images/servicePage/nzxtgen-motion-sensor-installation.webp", title: 'Sensors', description: 'Pir Sensor, Motion Sensor, Day & Night Sensor (lights), Temp Sensor' },
  { img: "/images/servicePage/nzxtgen-smart-switch-installation.webp", title: 'Switches', description: 'Smart Switches, 2way, 3way+ more' },
  { img: "/images/servicePage/nzxtgen-powerpoint-usb-installation.webp", title: 'Powerpoints', description: 'Internal & External With USB Fast Charge' },
  { img: "/images/servicePage/nzxtgen-led-strip-lighting-installation.webp", title: 'Led Strip Lighting', description: 'Kitchen, Signage, Bathroom, Recessed Shelves Etc.' },
  { img: "/images/servicePage/nzxtgen-outdoor-lighting-installation.webp", title: 'Outdoor Lighting', description: 'On Switch, Sensor, Timer Or Smart Control' },
  { img: "/images/servicePage/nzxtgen-intercom-video-installation.webp", title: 'Intercom', description: 'Video Calling, Remote Access, Smart Phone Integration' },
  { img: "/images/servicePage/nzxtgen-rgb-downlight-smart-control.webp", title: 'RGB Downlights', description: 'Smart Controlled, Remote Controlled, Multi Controlled' },
  { img: "/images/servicePage/nzxtgen-cctv-security-camera-installation.webp", title: 'CCTV', description: 'Coloured Night Vision, Motion Detection, Remote Access, 4K, 1080p' },
  { img: "/images/servicePage/nzxtgen-tv-mounting-cable-management.webp", title: 'TV Mounting & Installation', description: 'Hidden & Organised Cable Management' },
  { img: "/images/servicePage/nzxtgen-video-audio-cabling.webp", title: 'Video & Audio Cabling', description: 'Long Range Cabling, Wireless, Bluetooth' },
  { img: "/images/servicePage/nzxtgen-alarm-system-installation.webp", title: 'Alarms', description: 'Remote Monitoring, Smartphone Integration' },
  { img: "/images/servicePage/nzxtgen-wall-chasing-concealed-cabling.webp", title: 'Wall Chasing', description: 'New Builds & Renovations' },
  { img: "/images/servicePage/nzxtgen-aircon-cabling-connection.webp", title: 'A/C Cabling & Connections', description: 'Run & Connect Power To A/C Units' },
  { img: "/images/servicePage/nzxtgen-bathroom-ixl-exhaust-fan.webp", title: 'Bathroom IXL Units', description: 'Now With New Cool Fan, Heat Fan Options & Smart Control' },
  { img: "/images/servicePage/nzxtgen-antenna-coax-installation.webp", title: 'Antenna & Coax', description: 'Free To Air Antenna Install & Coax Cabling' },
  { img: "/images/servicePage/nzxtgen-gate-motor-connection.webp", title: 'Gate Connections', description: 'Run & Connect Power To Gate Motors' },
  { img: "/images/servicePage/nzxtgen-electrical-maintenance-service.webp", title: 'Maintenance & Service', description: 'Preventive Maintenance & Inspections' },
  { img: "/images/servicePage/nzxtgen-kitchen-appliance-installation.webp", title: 'Kitchen Appliances', description: 'In Built & Free Standing Ovens, Grills, Range Hoods Etc.' },
  { img: "/images/servicePage/nzxtgen-electrical-renovation-rewiring.webp", title: 'Renovations', description: 'Repair, Rewire, Renew' },
  { img: "/images/servicePage/nzxtgen-emergency-exit-lighting.webp", title: 'Emergency & Exits', description: 'Lighting For Emergency & Exits' },
  { img: "/images/servicePage/nzxtgen-granny-flat-electrical-wiring.webp", title: 'Grannyflat', description: 'Granny Flat Mains Wiring & Internal Wiring' },
  { img: "/images/servicePage/nzxtgen-server-rack-mounting.webp", title: 'Mountable Server Racks', description: 'Mount & Cable Server Racks' },
  { img: "/images/servicePage/nzxtgen-voice-control-smart-home.webp", title: 'Voice Control Home', description: 'Voice Control Your Lights, Garage Door, Curtains & Setup Short Phrased Commands' },
  { img: "/images/servicePage/nzxtgen-three-phase-industrial-outlet.webp", title: 'Single, Dual & 3 Phases Connections & Outlets', description: 'Industrial Outlets' },
  { img: "/images/servicePage/nzxtgen-water-heater-electrical-connection.webp", title: 'Water Heater Connections', description: 'Water Heater Cabling & Connections' },
  { img: "/images/servicePage/nzxtgen-garage-electrical-installation.webp", title: 'Garage', description: 'Garage Cabling & Connections' },
  { img: "/images/servicePage/nzxtgen-kitchen-lighting-installation.webp", title: 'Kitchen Lighting', description: 'Kitchen Lighting' },
  { img: "/images/servicePage/nzxtgen-new-build-electrical-wiring.webp", title: 'New Builds', description: 'Wire From Scratch With Smart Controls' },
  { img: "/images/servicePage/nzxtgen-touch-control-panel-smart-home.webp", title: 'Touch Control Panel (Smart Home)', description: 'Control & Monitor Your Home From One Place, To Do List & Reminders' },
  { img: "/images/servicePage/nzxtgen-ceiling-fan-installation.webp", title: 'Ceiling Fans', description: 'Ceiling & Wall Mounted, Retractable & Non Retractable Blades' },
  { img: "/images/servicePage/nzxtgen-strata-electrical-maintenance.webp", title: 'Strata', description: 'Replacements, Maintenance, Fault Finding, Repairs' },
  { img: "/images/servicePage/nzxtgen-outdoor-area-electrical.webp", title: 'Outdoor Area', description: 'Lightings, Fans, Speakers, Appliances' },
  { img: "/images/servicePage/nzxtgen-pergola-lighting-installation.webp", title: 'Pergola', description: 'Various Lightings' },
  { img: "/images/servicePage/nzxtgen-customer-mains-upgrade.webp", title: 'Customer Mains', description: 'Renew, Replace, Relocate' },
  { img: "/images/servicePage/nzxtgen-main-service-fuse-replacement.webp", title: 'Main Service Fuses', description: 'Renew, Replace, Relocate' },
  { img: "/images/servicePage/nzxtgen-nbn-installation-expert.webp", title: 'NBN', description: 'Expertise & Knowledge' },
];

const ResponsiveCardSlider = () => {
  // Favorites functionality - kept for future use
  // eslint-disable-next-line no-unused-vars
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="responsive-card-slider">
      <h2 className="slider-title">Our Signature Services</h2>

      {/* Desktop View */}
      <div className="desktop-view">
        {items.map((item, index) => {
          const CardContent = (
            <>
              <div className="card-img-wrapper">
                <img src={item.img} alt={item.title} className="card-img" />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </>
          );
          
          return (
            <div key={index} className="card">
              {item.link ? (
                <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {CardContent}
                </Link>
              ) : (
                CardContent
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile View */}
      <div className="mobile-view">
        {items.map((item, index) => {
          const CardContent = (
            <div className="card-img-wrapper">
              <img src={item.img} alt={item.title} className="card-img" />
              <h3 className="card-title">{item.title}</h3>
              {/*<div
                className={`favorite-icon ${isFavorite(item.title) ? 'active' : ''}`}
                onClick={() => toggleFavorite(item.title)}
              >
                ♥
              </div>*/}
            </div>
          );
          
          return (
            <div key={index} className="card mobile-card">
              {item.link ? (
                <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  {CardContent}
                </Link>
              ) : (
                CardContent
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResponsiveCardSlider;
