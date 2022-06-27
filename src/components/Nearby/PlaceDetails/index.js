import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddFromMaps from '../AddFromMaps'


const PlaceDetails = (props) => {

  console.log(props.detailsId);

  const [details, setDetails] = useState([]);


  const [addFromMap, setAddFromMap] = useState({});


  useEffect(() => {
      const fetchData = async () => {
    if (props.detailsId) {
        const response = await axios.get(`http://localhost:8800/search/details/${props.detailsId}`       
        );
        
    

        console.log(response);
        setDetails(response.data.result);


         const detailResponse = response.data.result;
         setAddFromMap({
            name: detailResponse.name,
           address: detailResponse.address_components,
           mapsId: detailResponse.place_id
         });



      }
    }
      fetchData();
    }, [props.detailsId])

    return (
      <div>
        <h1>Place Details</h1>
        {console.log(details)}

        <p>{details.name}</p>
        <p>{details.business_status}</p>

        {details?.address_components?.map((result, index) => {
          return (
            <div key={index}>
              {result.short_name}
              <p>{result.types}</p>
            </div>
          );
        })}

        <p>{details.formatted_phone_number}</p>

        {details?.opening_hours?.weekday_text?.map((text, index) => {
          return (
            <div key={index}>
              <p>{text}</p>
            </div>
          );
        })}

        {details?.types?.map((type, index) => {
          return (
            <div key={index}>
              <p>{type}</p>
            </div>
          );
        })}

        <p>{details.website}</p>
        <p>{details.rating}</p>

        {details?.reviews?.map((review, index) => {
          return (
            <div key={index}>
              <p>{review.text}</p>
              <p>{review.author_url}</p>
            </div>
          );
        })}

        <AddFromMaps postFormData={addFromMap.address} />

        {/* {console.log(details.name)}
  {console.log(details.address_components[0].short_name)}
  {console.log(details.address_components[1].short_name)}
  {console.log(details.address_components[3].short_name)}
  {console.log(details.address_components[4].short_name)}
  {console.log(details.address_components[6].short_name)}
  {console.log(details.types)} */}
      </div>
    );
  }

export default PlaceDetails;