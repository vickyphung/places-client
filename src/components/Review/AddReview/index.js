import React, { useState } from 'react';
import axios from 'axios';
import '../style.css'

import {
Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";



const AddReview = (props) => {

    console.log(props.userId);
    console.log(props.placeId)

    const { isOpen, onOpen, onClose } = useDisclosure();

    const fakeUserId = "62bbf966c4c434b12444023d";

    const [reviewFormData, setReviewFormData] = useState({
        review: ""
      });

      const [response, setResponse] = useState();

    const handleChange = (event) => {
        setReviewFormData({ ...reviewFormData, [event.target.name]: event.target.value });
      }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post(`https://placeswithbear.herokuapp.com/review/`, {
          // user: `${props.userId}`,
          user: `${fakeUserId}`,

          place: `${props.placeId}`,
          review: reviewFormData.review,
        });
        console.log(response);
        setResponse(response)
        localStorage.setItem("jwtToken", response.data.jwtToken);
    
    }

    return (
      <div>
          <Button colorScheme="orange" onClick={onOpen}>
            + review
          </Button>

        <Stack direction="row" spacing={4}>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <h1>Add Review</h1>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody className="modalBody">
                <form onSubmit={handleSubmit}>
                  {/* <label htmlFor="review">Leave a Review</label> */}
                  <textarea
                    className="addReviewText"
                    name="review"
                    id="review"
                    onChange={handleChange}
                  />
                  <Button
                    className="reviewSubmitBtn"
                    colorScheme="purple"
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Stack>
      </div>
    );
}

export default AddReview;