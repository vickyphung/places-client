import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, ButtonGroup, IconButton, WrapItem } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'

const AddFavorite = (props) => {

    console.log("Made it to the Add Favorite Component")
    console.log(props.placeId)
    const [data, setData] = useState([]);

    const fakeUserId = "62bbf966c4c434b12444023d";

    // useEffect(()=> {
    //     const addFav = async () => {
    //         if (props.placeId) {
    //             const response = await axios.put(`http://localhost:8800/user/favorite/add/${props.placeId}`)
    //             console.log(response)
    //             setData(response.data)
    //         } 
    //    }
    //     addFav();
    // }, [props.placeId])

 {
    // useEffect(() => {
      const addFav = async () => {
          const response = await axios.put(
            `http://localhost:8800/user/favorite/put/${fakeUserId}/${props.placeId}`
          );
          console.log(response);
          setData(response.data);     
    }

    return (
      <div>
        <ButtonGroup size="sm" isAttached variant="solid">
          <WrapItem>
            <Button
              colorScheme="pink"
              onClick={() => {
                addFav();
              }}
            >
<<<<<<< HEAD
=======
              {/* <IconButton
                aria-label="Add to friends"
                icon={<AddIcon w={3} h={3} />}
              />{" "} */}
>>>>>>> 88b2ea0b6953da6cc85dba33c2c67652231480e2
             + like
            </Button>
          </WrapItem>
        </ButtonGroup>
        {/* <p className="actionMsg">{data.message}</p> */}
        {console.log(data.message)}
      </div>
    );
}
}
export default AddFavorite;