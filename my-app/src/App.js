import "./style.css";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import { Icon, popup } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

export default function App() {
  //markers

  const airportData = [
    "Barter Island LRRS Airport,Barter Island,United States,70.1340026855,-143.582000732",
    "Wainwright Air Station,Fort Wainwright,United States,70.61340332,-159.8600006",
    "Cape Lisburne LRRS Airport,Cape Lisburne,United States,68.87509918,-166.1100006",
    "Point Lay LRRS Airport,Point Lay,United States,69.73290253,-163.0050049",
    "Hilo International Airport,Hilo,United States,19.721399307251,-155.048004150391",
    "Orlando Executive Airport,Orlando,United States,28.5455,-81.332901",
    "Bettles Airport,Bettles,United States,66.91390228,-151.529007",
    "Clear Airport,Clear Mews,United States,64.301201,-149.119995",
    "Indian Mountain LRRS Airport,Indian Mountains,United States,65.99279785,-153.7039948",
    "Fort Yukon Airport,Fort Yukon,United States,66.5715026855469,-145.25",
    "Sparrevohn LRRS Airport,Sparrevohn,United States,61.09740067,-155.5740051",
    "Bryant Army Heliport,Fort Richardson,United States,61.26639938,-149.6529999",
    "Tatalina LRRS Airport,Tatalina,United States,62.8944015503,-155.977005005",
    "Cape Romanzof LRRS Airport,Cape Romanzof,United States,61.78030014,-166.0390015",
    "Laurence G Hanscom Field,Bedford,United States,42.47000122,-71.28900146",
    "St Paul Island Airport,St. Paul Island,United States,57.1673011779785,-170.220001220703",
    "Cape Newenham LRRS Airport,Cape Newenham,United States,58.6464004517,-162.06300354",
    "St George Airport,Point Barrow,United States,56.5783004761,-169.662002563",
    "Iliamna Airport,Iliamna,United States,59.75439835,-154.9109955",
    "Platinum Airport,Port Moller,United States,59.0113983154297,-161.820007324219",
    "Big Mountain Airport,Big Mountain,United States,59.3611984253,-155.259002686",
    "Oscoda Wurtsmith Airport,Oscoda,United States,44.451599,-83.394096",
    "Marina Municipal Airport,Fort Ord,United States,36.68190002,-121.762001",
    "Sacramento Mather Airport,Sacramento,United States,38.55390167,-121.2979965",
    "Bicycle Lake Army Air Field,Fort Irwin,United States,35.2804985046,-116.629997253",
    "Twentynine Palms (Self) Airport,Twenty Nine Palms,United States,34.2961998,-116.1620026",
    "Fort Smith Regional Airport,Fort Smith,United States,35.3366012573242,-94.3674011230469",
    "Merrill Field,Anchorage,United States,61.2135009765625,-149.843994140625",
    "Grants-Milan Municipal Airport,Grants,United States,35.167301178,-107.902000427",
    "Ponca City Regional Airport,Ponca City,United States,36.73199844,-97.09980011",
    "Hunter Army Air Field,Hunter Aaf,United States,32.00999832,-81.14569855",
    "Grand Forks International Airport,Grand Forks,United States,47.949299,-97.176102",
    "Whiting Field Naval Air Station - North,Milton,United States,30.7241993,-87.02189636",
    "Hana Airport,Hana,United States,20.7956008911133,-156.014007568359",
    "Ernest A. Love Field,Prescott,United States,34.65449905,-112.4199982",
    "Trenton Mercer Airport,Trenton,United States,40.2766990661621,-74.8134994506836",
    "General Edward Lawrence Logan International Airport,Boston,United States,42.36429977,-71.00520325",
    "Travis Air Force Base,Fairfield,United States,38.262699127197,-121.92700195312",
    "Griffiss International Airport,Rome,United States,43.23379898,-75.40699768",
    "Wendover Airport,Wendover,United States,40.7187004089,-114.03099823",
    "Mobile Downtown Airport,Mobile,United States,30.6268005371,-88.0680999756",
    "Metropolitan Oakland International Airport,Oakland,United States,37.721298,-122.221001",
    "Eppley Airfield,Omaha,United States,41.3032,-95.894096",
    "Port Angeles Cgas Airport,Port Angeles,United States,48.1414985656738,-123.414001464844",
    "Kahului Airport,Kahului,United States,20.8986,-156.429993",
    "Wichita Eisenhower National Airport,Wichita,United States,37.649899,-97.433098",
    "Kansas City International Airport,Kansas City,United States,39.2976,-94.713898",
    "Dane County Regional Truax Field,Madison,United States,43.1399002075195,-89.3375015258789",
    "Dillingham Airport,Dillingham,United States,59.04470062,-158.5050049",
  ];
  
    const markers = airportData.map((airport) => {
      const [name, location, country, latitude, longitude] = airport.split(',');
      return {
        geocode: [parseFloat(latitude), parseFloat(longitude)],
        popup1: name,
        popup2: location,
      };
    });
  const customIcon = new Icon({
    //iconUrl: require("./image/arhab.jpeg"),
    //iconSize: [38, 58],
    iconUrl: require("./airport.png"),
    iconSize: [28, 28],
  });
  return (
    <MapContainer center={[58.575767, -108.613916]} zoom ={3} scrollWheelZoom={true}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      
      />
      

      <MarkerClusterGroup>
        chunkedLoading
      {markers.map(marker => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup >
            <h2>
            {marker.popup1} <br /> {marker.popup2}
            </h2>
          </Popup>
        </Marker>
      ))
      }
      </MarkerClusterGroup>
    </MapContainer>
  );
}
