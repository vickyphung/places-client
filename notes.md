
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




router.get("/all/tags", (req, res)=>{
    place.find({}, {tags: 1, _id:0 }, (err, place)=>{
        if(err){
            res.status(404).json({message: "Could not find categories."})
        } else {
            res.status(200).json({categories: place})
        }
    })
})

router.get("/get/:state/:tag", (req, res)=>{
    const state = req.params.state
    const tag = req.params.tag
    place.find()
    .where('location.state').equals(state)  
    .where('tags').equals(tag)  
    .sort('name')
    .exec
    ((err, allPlaces)=>{
        if(err){
            res.status(404).json({message: "Error. No place data found."})
        } else {
            res.status(200).json({message: "places to go",
            placesList: allPlaces})
        }
    })
})


router.get("/name/:name", (req, res)=>{
    const name = req.params.name
    place.findOne({name: name,}, (err, place)=>{
        if(err){
            res.status(404).json({message: "Could not find a place with that name."})
        } else {
            res.status(200).json(place)
        }
    })
})

router.get("/id/:placeId", (req, res)=>{
    place.find({_id: req.params.placeId}, (err, place)=>{
        if(err){
            res.status(404).json({message: "Could not find a place with that Id."})
        } else {
            res.status(200).json(place)
        }
    })
})

router.get("/tag/:tag", (req, res)=>{
    place.find({tags: req.params.tag}, (err, place)=>{
        if(err){
            res.status(404).json({message: "Could not find places with that tag."})
        } else {
            res.status(200).json({places: place})
        }
    })
})

router.get("/city/:city", (req, res)=>{
    const city = req.params.city
    place.find({
        "location.city": city
    }, (err, place)=>{
        if(err){
            res.status(404).json({message: "Could not find places within that city."})
        } else {
            res.status(200).json({places: place})
        }
    })
})

router.get("/state/:state", (req, res)=>{
    const state = req.params.state
    place.find({  
        "location.state": state
    }, (err, place)=>{
        if(err){
            res.status(404).json({message: "Could not find places within that state."})
        } else {
            res.status(200).json({places: place})
        }
    })
})


