import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CityNavigation.css";

// const menuItems = ["Electrical", "Security", "Tech needs"];
const sortCategories = ["A-B", "C-D", "E-H", "M-P", "Q-T", "U-Z"];

const cityData = {
    "A-B": [
      "Abbotsbury", "Abbotsford", "Acacia Gardens", "Agnes Banks", "Airds", "Alexandria",
      "Allambie Heights", "Allawah", "Ambarvale", "Annandale", "Annangrove", "Arcadia",
      "Arncliffe", "Arndell Park", "Artarmon", "Ashbury", "Ashcroft", "Ashfield", "Asquith",
      "Auburn", "Austral", "Avalon", "Badgerys Creek", "Balgowlah", "Balgowlah Heights",
      "Balmain", "Balmain East", "Balmoral", "Banksia", "Banksmeadow", "Bankstown",
      "Barangaroo", "Barden Ridge", "Bardwell Park", "Bardwell Valley", "Bass Hill",
      "Baulkham Hills", "Bayview", "Beacon Hill", "Beaconsfield", "Beaumont Hills",
      "Beauty Point", "Becketts Forest", "Beecroft", "Belfield", "Bella Vista",
      "Bellevue Hill", "Belmore", "Belrose", "Berala", "Berkshire Park", "Berowra",
      "Berowra Creek", "Berowra Heights", "Berowra Waters", "Berrilee", "Beverly Hills",
      "Beverly Park", "Bexley", "Bexley North", "Bickley Vale", "Bidwill", "Bilgola",
      "Birchgrove", "Birrong", "Blackett", "Blacktown", "Blair Athol", "Blairmount",
      "Blakehurst", "Bligh Park", "Blue Mountains", "Bondi", "Bondi Beach",
      "Bondi Junction", "Bonnet Bay", "Bonnyrigg", "Bonnyrigg Heights", "Bossley Park",
      "Botany", "Bow Bowing", "Box Hill", "Bradbury", "Breakfast Point",
      "Brighton-le-Sands", "Bringelly", "Bronte", "Brooklyn", "Brookvale", "Bundeena",
      "Burwood", "Burwood Heights", "Busby"
    ],
    "C-D": [
      "Cabarita", "Cabramatta", "Cabramatta West", "Cambridge Gardens", "Cambridge Park",
      "Camden", "Camden South", "Camellia", "Cammeray", "Campbelltown", "Camperdown",
      "Campsie", "Canada Bay", "Canley Heights", "Canley Vale", "Canoelands",
      "Canterbury", "Caringbah", "Caringbah South", "Carlingford", "Carlton",
      "Carnes Hill", "Carramar", "Carss Park", "Cartwright", "Castle Cove", "Castle Hill",
      "Castlecrag", "Castlereagh", "Casula", "Catherine Field", "Cattai", "Cawdor",
      "Cecil Hills", "Cecil Park", "Centennial Park", "Chatswood", "Chatswood West",
      "Cheltenham", "Cherrybrook", "Chester Hill", "Chifley", "Chippendale",
      "Chipping Norton", "Chiswick", "Chullora", "Church Point", "Claremont Meadows",
      "Clarendon", "Claymore", "Clemton Park", "Clifton Gardens", "Clontarf", "Clovelly",
      "Clyde", "Cobbitty", "Colebee", "Collaroy", "Colyton", "Como", "Concord",
      "Concord West", "Condell Park", "Connells Point", "Constitution Hill", "Coogee",
      "Cottage Point", "Cowan", "Cranebrook", "Cremorne", "Cremorne Point", "Cromer",
      "Cronulla", "Crows Nest", "Croydon", "Croydon Park", "Curl Curl", "Currans Hill",
      "Daceyville", "Dangar Island", "Darling Point", "Darlinghurst", "Davidson",
      "Dawes Point", "Dean Park", "Dee Why", "Denham Court", "Denistone",
      "Denistone East", "Denistone West", "Dharruk", "Dolans Bay", "Dolls Point",
      "Doonside", "Double Bay", "Dover Heights", "Drummoyne", "Duffys Forest",
      "Dulwich Hill", "Dundas", "Dundas Valley", "Dunheved", "Dural"
    ],
    "E-H": [
      "Eagle Vale", "Earlwood", "East Gordon", "East Hills", "East Killara",
      "East Lindfield", "East Ryde", "Eastern Creek", "Eastern Suburbs", "Eastgardens",
      "Eastlakes", "Eastwood", "Edensor Park", "Edgecliff", "Edmondson Park", "Elanora",
      "Elderslie", "Elizabeth Bay", "Ellis Lane", "Emerton", "Emu Heights", "Emu Plains",
      "Enfield", "Engadine", "Englorie Park", "Enmore", "Epping", "Ermington",
      "Erskine Park", "Erskineville", "Eschol Park", "Eveleigh", "Fairfield",
      "Fairfield East", "Fairfield Heights", "Fairfield West", "Fairlight", "Fiddletown",
      "Five Dock", "Flemington", "Forest Glen", "Forest Lodge", "Forestville",
      "Freemans Reach", "Frenchs Forest", "Freshwater", "Galston", "Georges Hall",
      "Georges Heights", "Gilead", "Girraween", "Gladesville", "Glebe", "Glebe Point",
      "Glen Alpine", "Glendenning", "Glenfield", "Glenhaven", "Glenmore Park", "Glenorie",
      "Glenwood", "Glossodia", "Gordon", "Granville", "Grasmere", "Grays Point",
      "Green Valley", "Greenacre", "Greendale", "Greenfield Park", "Greenwich",
      "Gregory Hills", "Greystanes", "Guildford", "Guildford East", "Guildford West",
      "Gymea", "Gymea Bay", "Haberfield", "Hammondville", "Harrington Park",
      "Harris Park", "Hassall Grove", "Hawkesbury River", "Haymarket"
    ],
    "M-P": [
      "Macarthur", "Macquarie Fields", "Macquarie Links", "Macquarie Park", "Maianbar",
      "Malabar", "Manly", "Manly Vale", "Maraylya", "Marayong", "Maroota", "Maroubra",
      "Marrickville", "Marsden Park", "Marsfield", "Mascot", "Matraville", "Mays Hill",
      "McGraths Hill", "McMahons Point", "Meadowbank", "Melrose Park", "Menai",
      "Menangle Park", "Merrylands", "Merrylands West", "Middle Cove", "Middle Dural",
      "Middleton Grange", "Miller", "Millers Point", "Milperra", "Milsons Point"
    ],
    "Q-T": [
      "Quakers Hill", "Queens Park", "Queenscliff", "Raby", "Ramsgate", "Ramsgate Beach"
    ],
    "U-Z": [
      "Ultimo", "Varroville", "Vaucluse", "Villawood", "Vineyard", "Voyager Point"
    ]
  };

const CityNavigation = () => {
  // const [activeMenu, setActiveMenu] = useState(menuItems[0]);
  const [activeSort, setActiveSort] = useState("A-B");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);

  const filteredCities = cityData[activeSort].filter(city =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="city-navigation">
      <div className="menu">
        {/* {menuItems.map(item => (
          <button
            key={item}
            className={item === activeMenu ? "active" : ""}
            onClick={() => setActiveMenu(item)}
          >
            {item}
          </button>
        ))} */}
      </div>

      <input
        type="text"
        placeholder="Search city..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="sort-buttons">
        {sortCategories.map(category => (
          <button
            key={category}
            className={category === activeSort ? "active" : ""}
            onClick={() => {
              setActiveSort(category);
              setExpanded(false);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div className="city-grid">
        {(expanded ? filteredCities : filteredCities.slice(0, 30)).map((city, index) => (
          <motion.div
            key={city}
            className="city-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            {city}
          </motion.div>
        ))}
      </motion.div>
      
      <div className="city-services-link">
        <p>
          We provide <a href="/our-signature-services">electrical, smart home, and security services</a> across all these suburbs. 
          <a href="/services"> View our services directory</a> or <a href="/free-quote">request a free quote</a>.
        </p>
      </div>

      {!expanded && filteredCities.length > 30 && (
        <motion.button
          className="see-more"
          onClick={() => setExpanded(true)}
          whileHover={{ scale: 1.05 }}
        >
          See More
        </motion.button>
      )}
    </div>
  );
};

export default CityNavigation;
