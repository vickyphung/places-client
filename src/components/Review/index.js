import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const Review = (props) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:8800/review"

        //   , {
        //     headers: {
        //       "JWT-Token": localStorage.jwtToken
        //     }
        //   }
      );
      console.log(response);
      setReviews(response.data.reviews);
    };
    fetchData();
  }, []);

  return (
    <div>
      {console.log(reviews)}
      <div>
        <NavBar />
      </div>
      <div>
        <h1>Reviews</h1>
      </div>
      <div>
        {reviews?.map((review, index) => {
          return (
            <UnorderedList>
              <div className="reviews" key={index}>
                <ListItem className="title">
                  {" "}
                  <p>{review.place.name}</p>
                </ListItem>
                <ListItem>
                  <p>{review.review}</p>
                </ListItem>
                <ListItem>
                  <p>
                    Created by {review.user.name} at {review.createdAt}
                  </p>
                </ListItem>
              </div>
            </UnorderedList>
          );
        })}{" "}
      </div>
      ){" "}
    </div>
  );
};

export default Review;
