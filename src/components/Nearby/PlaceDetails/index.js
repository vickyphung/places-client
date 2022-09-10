import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddFromMaps from '../AddFromMaps'
import {
  Button,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";

const PlaceDetails = (props) => {
  console.log(props.detailsId);
  const [details, setDetails] = useState([]);
  const [addFromMap, setAddFromMap] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isReviewOpen, onReviewOpen, onReviewClose } = useDisclosure();


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
      <Container>
        <div className="mapResults">
          {console.log(details)}

          {/* <p>
            <span className="placeName">{details.name}</span>
          </p>  */}

          <p>{details.business_status}</p>

          {details?.address_components?.map((result, index) => {
            return (
              <div key={index} className="category">
                {result.short_name}
              </div>
            );
          })}

          <p>{details.formatted_phone_number}</p>

          {details?.opening_hours?.weekday_text?.map((text, index) => {
            return (
              <div key={index} className="category">
                <p>{text}</p>
              </div>
            );
          })}

          {details?.types?.map((type, index) => {
            return (
              <div key={index} className="category">
                <p>{type}</p>
              </div>
            );
          })}

          <p>{details.website}</p>
          <p>{details.rating}</p>

          <Button onClick={onOpen}>Open Modal</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              
              <ModalBody>
                {details?.reviews?.map((review, index) => {
                  return (
                    <div key={index} className="category">
                      <p>{review.text}</p>
                      <p>{review.author_url}</p>
                    </div>
                  );
                })}
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Button onClick={onOpen}>Add To Places</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add To Places</ModalHeader>
              <ModalCloseButton />
             
             
              <ModalBody>
                <AddFromMaps postFormData={addFromMap.address} />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </Container>
    );
  }

export default PlaceDetails;