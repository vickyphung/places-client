
//remove name thing from google maps add place
//login page
//user page, added places list
//why are the pictures just a bunch a text symbols
//i cna save something a thousand times

//Open Modal for More Info and REVIEWS on Places, on places page

//google search NEXT PAGE BUTTON



//review button is broken


//"fakeuserId" - web token thingggy no worky



[*]LOGIN, after submit, refresh pages to hide login and show user details

POSTS/PLACES
[*] route create post w/ userRef and placeRef
  + delete - pull place/post id from user posts
  + update 

[*]query places

[*]
-add/update/delete components > navigate after function or post a success message
-capitalize Models
-setShow review/favorite place buttons
-my photo returns json, lol
-{placeList.user ? placeList.user : "Unknown"}


[////////////HELP///////////]
REVIEWS
read
[*]create- need to get logged in userID
update
delete 
FAVORITE
[*]add - need to get logged in userID
remove
SEARCH
[*]addPlaceFromMaps - get logged in userId


USER
[*]update, add password input and validation
create
delete
login
read




<!-- 
const getDataByType = async (type, timestamp, hash, pageNum) => {
  if (pageNum === undefined) {
    pageNum = 1;
  }
  const offset = pageNum * 10;
  const response = await axios.get(`${base}${type}?limit=10&offset=${offset}&ts=${timestamp}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`)
  return response.data;
}

router.get('/:type', async (req, res) => {
  console.log(req.query.page);
  const timestamp = Date.now();
  let apiKeyHash = (timestamp + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY);
  apiKeyHash = crypto.createHash('md5').update(apiKeyHash).digest("hex");
  const returnedData = await getDataByType(req.params.type, timestamp, apiKeyHash, req.query.page)
  console.log(returnedData);
  res.send(returnedData);
});


const getDataById = async (type, id, timestamp, hash) => {
  const response = await axios.get(`${base}${type}/${id}?ts=${timestamp}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`);
  return response.data;
}

router.get('/:type/:id', async (req, res) => {
  const timestamp = Date.now();
  let apiKeyHash = (timestamp + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY);
  apiKeyHash = crypto.createHash('md5').update(apiKeyHash).digest("hex");
  console.log(apiKeyHash);
  const returnedData = await getDataById(req.params.type, req.params.id, timestamp, apiKeyHash);
  res.send(returnedData);
}); -->






import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack
} from "@chakra-ui/react";

export default function App() {
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 5) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >
                  Remember me?
                </Field>
                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}