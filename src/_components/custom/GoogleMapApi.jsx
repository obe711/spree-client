import React, { useEffect } from "react";
import PropTypes from "prop-types";

const googleMapScript = document.createElement("script");

const GoogleMapApi = ({ apiKey, latLng, mapOptions, className }) => {
  useEffect(() => {
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;

    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      var myLatlng = new window.google.maps.LatLng(latLng[0], latLng[1]);
      mapOptions.center = myLatlng;

      var map = new window.google.maps.Map(
        document.getElementById("contactUsMap"),
        mapOptions
      );

      var marker = new window.google.maps.Marker({
        position: myLatlng,
        title: "Fort Wayne",
      });
      marker.setMap(map);
    });
  }, [apiKey, latLng, mapOptions]);

  return <div id="contactUsMap" className={className}></div>;
};

GoogleMapApi.propTypes = {
  apiKey: PropTypes.string,
  latLng: PropTypes.array,
  mapOptions: PropTypes.object,
  className: PropTypes.string,
};

GoogleMapApi.defaultProps = {
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  latLng: [41.093842, -85.139236],
  mapOptions: {
    disableDefaultUI: true,
    zoom: 10,
  },
  className: "",
};
export default GoogleMapApi;
