import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ResponsiveCardSlider.css';

const items = [
  { img: "/images/servicePage/nzxtgen-ev-car-charger-installation.webp", title: 'EV Car Chargers', description: 'Quick & Fast Charging Options Available', link: '/services/electrical-services#ev' },
  { img: "/images/servicePage/nzxtgen-smoke-alarm-installation.webp", title: 'Smoke Alarms', description: 'Smoke Alarms With Battery Backup', link: '/smoke-alarms-electrical-safety-checks' },
  { img: "/images/servicePage/nzxtgen-speaker-mounting-installation.webp", title: 'Speaker Mounting & Installation', description: 'Wall & Ceilings Mounts / Surface & Flush Mounts', link: '/services/entertainment-technology#speakers' },
  { img: "/images/servicePage/nzxtgen-downlight-installation.webp", title: 'Downlights', description: 'Switchable 3000k, 4000k, 6000k & Option To Smart Control', link: '/lighting-installation#indoor' },
  { img: "/images/servicePage/nzxtgen-smart-home-control-smartphone.webp", title: 'Home Control With Smartphone or Tablet', description: 'Control & Monitor Your Home Remotely With Your Smartphone or Tablet', link: '/smart-home/more-info' },
  { img: "/images/servicePage/nzxtgen-data-patch-panel-switch.webp", title: 'Data Patch Panels & Switches', description: 'Centralise All Your Data Points To One Place', link: '/services/data-networking#patch-panels' },
  { img: "/images/servicePage/nzxtgen-data-point-cat6-installation.webp", title: 'Data Points', description: 'Cat 5,6,7 / Extension & Internet Ports', link: '/services/data-networking#data-points' },
  { img: "/images/servicePage/nzxtgen-motion-sensor-installation.webp", title: 'Sensors', description: 'Pir Sensor, Motion Sensor, Day & Night Sensor (lights), Temp Sensor', link: '/lighting-installation#sensor' },
  { img: "/images/servicePage/nzxtgen-smart-switch-installation.webp", title: 'Switches', description: 'Smart Switches, 2way, 3way+ more', link: '/lighting-installation' },
  { img: "/images/servicePage/nzxtgen-powerpoint-usb-installation.webp", title: 'Powerpoints', description: 'Internal & External With USB Fast Charge', link: '/services/power-points-electrical-upgrades' },
  { img: "/images/servicePage/nzxtgen-led-strip-lighting-installation.webp", title: 'Led Strip Lighting', description: 'Kitchen, Signage, Bathroom, Recessed Shelves Etc.', link: '/lighting-installation#led-strips' },
  { img: "/images/servicePage/nzxtgen-outdoor-lighting-installation.webp", title: 'Outdoor Lighting', description: 'On Switch, Sensor, Timer Or Smart Control', link: '/lighting-installation#outdoor' },
  { img: "/images/servicePage/nzxtgen-intercom-video-installation.webp", title: 'Intercom', description: 'Video Calling, Remote Access, Smart Phone Integration', link: '/services/security-systems#intercom' },
  { img: "/images/servicePage/nzxtgen-rgb-downlight-smart-control.webp", title: 'RGB Downlights', description: 'Smart Controlled, Remote Controlled, Multi Controlled', link: '/lighting-installation#smart' },
  { img: "/images/servicePage/nzxtgen-cctv-security-camera-installation.webp", title: 'CCTV', description: 'Coloured Night Vision, Motion Detection, Remote Access, 4K, 1080p', link: '/services/security-systems#cctv' },
  { img: "/images/servicePage/nzxtgen-tv-mounting-cable-management.webp", title: 'TV Mounting & Installation', description: 'Hidden & Organised Cable Management', link: '/services/entertainment-technology#tv-mounting' },
  { img: "/images/servicePage/nzxtgen-video-audio-cabling.webp", title: 'Video & Audio Cabling', description: 'Long Range Cabling, Wireless, Bluetooth', link: '/services/entertainment-technology#audio-av' },
  { img: "/images/servicePage/nzxtgen-alarm-system-installation.webp", title: 'Alarms', description: 'Remote Monitoring, Smartphone Integration', link: '/services/security-systems#alarms' },
  { img: "/images/servicePage/nzxtgen-wall-chasing-concealed-cabling.webp", title: 'Wall Chasing', description: 'New Builds & Renovations', link: '/new-builds-renovations#wall-chasing' },
  { img: "/images/servicePage/nzxtgen-aircon-cabling-connection.webp", title: 'A/C Cabling & Connections', description: 'Run & Connect Power To A/C Units', link: '/new-builds-renovations#aircon' },
  { img: "/images/servicePage/nzxtgen-bathroom-ixl-exhaust-fan.webp", title: 'Bathroom IXL Units', description: 'Now With New Cool Fan, Heat Fan Options & Smart Control', link: '/new-builds-renovations#bathroom' },
  { img: "/images/servicePage/nzxtgen-antenna-coax-installation.webp", title: 'Antenna & Coax', description: 'Free To Air Antenna Install & Coax Cabling', link: '/services/data-networking#data-cabling' },
  { img: "/images/servicePage/nzxtgen-gate-motor-connection.webp", title: 'Gate Connections', description: 'Run & Connect Power To Gate Motors', link: '/new-builds-renovations#gate-garage' },
  { img: "/images/servicePage/nzxtgen-electrical-maintenance-service.webp", title: 'Maintenance & Service', description: 'Preventive Maintenance & Inspections', link: '/electrical-fault-finding-repairs' },
  { img: "/images/servicePage/nzxtgen-kitchen-appliance-installation.webp", title: 'Kitchen Appliances', description: 'In Built & Free Standing Ovens, Grills, Range Hoods Etc.', link: '/new-builds-renovations#kitchen' },
  { img: "/images/servicePage/nzxtgen-electrical-renovation-rewiring.webp", title: 'Renovations', description: 'Repair, Rewire, Renew', link: '/new-builds-renovations' },
  { img: "/images/servicePage/nzxtgen-emergency-exit-lighting.webp", title: 'Emergency & Exits', description: 'Lighting For Emergency & Exits', link: '/lighting-installation#emergency' },
  { img: "/images/servicePage/nzxtgen-granny-flat-electrical-wiring.webp", title: 'Grannyflat', description: 'Granny Flat Mains Wiring & Internal Wiring', link: '/new-builds-renovations' },
  { img: "/images/servicePage/nzxtgen-server-rack-mounting.webp", title: 'Mountable Server Racks', description: 'Mount & Cable Server Racks', link: '/services/data-networking#network-racks' },
  { img: "/images/servicePage/nzxtgen-voice-control-smart-home.webp", title: 'Voice Control Home', description: 'Voice Control Your Lights, Garage Door, Curtains & Setup Short Phrased Commands', link: '/smart-home/more-info#smart-lights' },
  { img: "/images/servicePage/nzxtgen-three-phase-industrial-outlet.webp", title: 'Single, Dual & 3 Phases Connections & Outlets', description: 'Industrial Outlets', link: '/services/electrical-services#power' },
  { img: "/images/servicePage/nzxtgen-water-heater-electrical-connection.webp", title: 'Water Heater Connections', description: 'Water Heater Cabling & Connections', link: '/new-builds-renovations#water-heating' },
  { img: "/images/servicePage/nzxtgen-garage-electrical-installation.webp", title: 'Garage', description: 'Garage Cabling & Connections', link: '/new-builds-renovations#gate-garage' },
  { img: "/images/servicePage/nzxtgen-kitchen-lighting-installation.webp", title: 'Kitchen Lighting', description: 'Kitchen Lighting', link: '/lighting-installation#indoor' },
  { img: "/images/servicePage/nzxtgen-new-build-electrical-wiring.webp", title: 'New Builds', description: 'Wire From Scratch With Smart Controls', link: '/new-builds-renovations' },
  { img: "/images/servicePage/nzxtgen-touch-control-panel-smart-home.webp", title: 'Touch Control Panel (Smart Home)', description: 'Control & Monitor Your Home From One Place, To Do List & Reminders', link: '/smart-home/more-info' },
  { img: "/images/servicePage/nzxtgen-ceiling-fan-installation.webp", title: 'Ceiling Fans', description: 'Ceiling & Wall Mounted, Retractable & Non Retractable Blades', link: '/lighting-installation#ceiling-fans' },
  { img: "/images/servicePage/nzxtgen-strata-electrical-maintenance.webp", title: 'Strata', description: 'Replacements, Maintenance, Fault Finding, Repairs', link: '/commercial-industrial-electrical' },
  { img: "/images/servicePage/nzxtgen-outdoor-area-electrical.webp", title: 'Outdoor Area', description: 'Lightings, Fans, Speakers, Appliances', link: '/lighting-installation#outdoor' },
  { img: "/images/servicePage/nzxtgen-pergola-lighting-installation.webp", title: 'Pergola', description: 'Various Lightings', link: '/lighting-installation#outdoor' },
  { img: "/images/servicePage/nzxtgen-customer-mains-upgrade.webp", title: 'Customer Mains', description: 'Renew, Replace, Relocate', link: '/switchboard-upgrade#consumer-mains' },
  { img: "/images/servicePage/nzxtgen-main-service-fuse-replacement.webp", title: 'Main Service Fuses', description: 'Renew, Replace, Relocate', link: '/switchboard-upgrade#safety-protection' },
  { img: "/images/servicePage/nzxtgen-nbn-installation-expert.webp", title: 'NBN', description: 'Expertise & Knowledge', link: '/services/data-networking#nbn' },
  { img: "/images/servicePage/nzxtgen-commercial-electrical-small-large-scale.webp", title: 'Commercial', description: 'Small & Large Scale', link: '/commercial-industrial-electrical' },
  { img: "/images/servicePage/nzxtgen-emergency-electrician-urgent-power-loss.webp", title: 'Emergency', description: 'Urgent, Power Loss & Safety', link: '/emergency-electrician' },
  { img: "/images/servicePage/nzxtgen-fault-finding-identify-repair-replace.webp", title: 'Fault Finding', description: 'Identify, Repair & Replace', link: '/electrical-fault-finding-repairs' },
  { img: "/images/servicePage/nzxtgen-floor-heating-bathroom-tile-heating.webp", title: 'Floor Heating', description: 'Bathroom Heating & Tile Heating', link: '/new-builds-renovations#bathroom' },
  { img: "/images/servicePage/nzxtgen-industrial-electrical-small-large-scale.webp", title: 'Industrial', description: 'Small & Large Scale', link: '/commercial-industrial-electrical' },
  { img: "/images/servicePage/nzxtgen-led-strips-stairs-ceilings-walls.webp", title: 'LED Strips', description: 'Stairs, Ceilings, Walls & More', link: '/lighting-installation#led-strips' },
  { img: "/images/servicePage/nzxtgen-media-wall-power-lighting-smart.webp", title: 'Media Wall', description: 'Power, Lighting & Smart Setup', link: '/services/entertainment-technology#media-wall' },
  { img: "/images/servicePage/nzxtgen-residential-new-builds-reno-electrical.webp", title: 'Residential', description: 'New Builds, Reno & Electrical', link: '/residential-electrical' },
  { img: "/images/servicePage/nzxtgen-temp-control-heating-cooling.webp", title: 'Temp Control', description: 'For Heating & Cooling', link: '/smart-home/more-info#smart-temp' },
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
