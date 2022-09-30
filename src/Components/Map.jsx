import { Box } from '@chakra-ui/react'
import React from 'react'
import GoogleMapReact from "google-map-react";

const Map = () => {
    const coordinates = {lat:0,lng:0};
  return (
    <Box>
      <GoogleMapReact
        bootstrapURLKeys={{key:"AIzaSyBAuuglhdfwkNMDXc3QAl6YdLOR9wVek6E"}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        // options={""}
        // onChange={""}
        // onChildClick={""}

      >

      </GoogleMapReact>
    </Box>
  )
}

export default Map
