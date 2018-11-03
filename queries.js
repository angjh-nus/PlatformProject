var usersData = [{"name":"Belson Heng","joinDate":"11 Sep 2017"},{"name":"Jit Hwee","joinDate":"21 Nov 2015"},{"name":"Ming Jun","joinDate":"08 Aug 2011"}];
var platformsData = [{"name":"Carousell","url":"https://carousell.com/"},{"name":"Grab","url":"https://www.grab.com/sg/"},{"name":"Shopee","url":"https://shopee.sg/"}];
var reviewsData =     [{
      "Date" : "28 Oct 2018",
      "Feedback" : "Great seller to deal with.",
      "Rating" : "Positive",
      "Written By" : "cookie monster",
      "Platform" : "Carousell",
      "User" : "Belson Heng"
    },
    {
      "Date" : "18 Sep 2018",
      "Feedback" : "Pleasant transaction!",
      "Rating" : "Positive",
      "Written By" : "bigbird",
      "Platform" : "Carousell",
      "User" : "Belson Heng"
    },
    {
      "Date" : "10 Jun 2018",
      "Feedback" : "Very friendly. Thank you :)",
      "Rating" : "Positive",
      "Written By" : "elmo",
      "Platform" : "Carousell",
      "User" : "Belson Heng"
    },
    {
      "Date" : "28 Oct 2018",
      "Feedback" : "Great seller to deal with.",
      "Rating" : "Positive",
      "Written By" : "haha5005",
      "Platform" : "Grab",
      "User" : "Belson Heng"
    },
    {
      "Date" : "18 Sep 2018",
      "Feedback" : "Very friendly. Thank you :)",
      "Rating" : "Positive",
      "Written By" : "nothingtosay",
      "Platform" : "Grab",
      "User" : "Belson Heng"
    },
    {
      "Date" : "28 Oct 2018",
      "Feedback" : "Great seller to deal with.",
      "Rating" : "Positive",
      "Written By" : "cookie monster",
      "Platform" : "Shopee",
      "User" : "Belson Heng"
    },
    {
      "Date" : "18 Sep 2018",
      "Feedback" : "Very friendly. Thank you :)",
      "Rating" : "Positive",
      "Written By" : "elmo",
      "Platform" : "Shopee",
      "User" : "Belson Heng"
    }];

function getAllPlatforms(req, res, next) {

   res.status(200).json({
    status: 'success',
    data: platformsData,
    message: 'Retrieved ALL Online Platforms'
  });
}

 function createPlatform(req, res, next) {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one platform'
        });
}

function getSinglePlatform(req, res, next) {
    var platform = req.params.platformName;
    var retObj=null;

    console.log("-->" + platform);

    for(var i = 0 ; i< platformsData.length; i++){
            var obj = platformsData[i];
            var objName = obj["name"];

            if (objName.toLowerCase().trim() == platform.toLowerCase().trim()){
                retObj = obj;
              }
          }

      res.status(200)
        .json({
          status: 'success',
          data: retObj,
          message: 'Retrieved platform if available'
        });
}

function getAllUsers(req, res, next) {

   res.status(200).json({
    status: 'success',
    data: usersData,
    message: 'Retrieved ALL Users'
  });
}

function createUser(req, res, next) {

     res.status(200)
       .json({
         status: 'success',
         message: 'Inserted one user'
       });
}

function getSingleUser(req, res, next) {
    var user = req.params.userName;
    var retObj=null;

    console.log("-->" + user);

    for(var i = 0 ; i< usersData.length; i++){
            var obj = usersData[i];
            var objName = obj["User"];

            if (objName.toLowerCase().trim() == user.toLowerCase().trim()){
                retObj = obj;
              }
          }


      res.status(200)
        .json({
          status: 'success',
          data: retObj,
          message: 'Retrieved user if available'
        });
}

function getAllReviews(req, res, next) {

   res.status(200).json({
    status: 'success',
    data: reviewsData,
    message: 'Retrieved ALL reviews'
  });
}

function getAllReviewsByPlatform(req, res, next) {

  var platformName = req.params.platformName;
  var retObj=[];

  console.log("-->" + platformName);

  for(var i = 0 ; i< reviewsData.length; i++){
          var obj = reviewsData[i];
          var objName = obj["Platform"];

          if (objName.toLowerCase().trim() == platformName.toLowerCase().trim()){
              retObj.push(obj)
            }
        }


    res.status(200)
      .json({
        status: 'success',
        data: retObj,
        message: 'Retrieved Reviews by Platform Name'
      });
}

function getAllReviewsByUser(req, res, next) {

  var userName = req.params.userName;
  var retObj=[];

  console.log("-->" + userName);

  for(var i = 0 ; i< reviewsData.length; i++){
          var obj = reviewsData[i];
          var objName = obj["User"];

          if (objName.toLowerCase().trim() == userName.toLowerCase().trim()){
              retObj.push(obj)
            }
        }


    res.status(200)
      .json({
        status: 'success',
        data: retObj,
        message: 'Retrieved Reviews by specific user'
      });
}

function getAllReviewsByPlatformByUser(req, res, next) {

  var platformName = req.params.platformName;
  var userName = req.params.userName;

  var retObj=[];

  console.log("-->" + platformName);
  console.log("-->" + userName);

  for(var i = 0 ; i< reviewsData.length; i++){
          var obj = reviewsData[i];
          var objName = obj["Platform"];

          if (objName.toLowerCase().trim() == platformName.toLowerCase().trim()){
              var user = obj["User"];
              if(user.toLowerCase().trim() == userName.toLowerCase().trim())
                retObj.push(obj)
            }
        }


    res.status(200)
      .json({
        status: 'success',
        data: retObj,
        message: 'Retrieved Reviews by Platform Name & UserName'
      });
}

function createReviewByPlatformByUser(req, res, next) {

     res.status(200)
       .json({
         status: 'success',
         message: 'Inserted one Review'
       });
}


// function updatePuppy(req, res, next) {
//   db.none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
//     [req.body.name, req.body.breed, parseInt(req.body.age),
//       req.body.sex, parseInt(req.params.id)])
//     .then(function () {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Updated puppy'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }
//
// function removePuppy(req, res, next) {
//   var pupID = parseInt(req.params.id);
//   db.result('delete from pups where id = $1', pupID)
//     .then(function (result) {
//       /* jshint ignore:start */
//       res.status(200)
//         .json({
//           status: 'success',
//           message: `Removed ${result.rowCount} puppy`
//         });
//       /* jshint ignore:end */
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }


module.exports = {
  getAllPlatforms: getAllPlatforms,
  createPlatform: createPlatform,
  getSinglePlatform:getSinglePlatform,
  getAllUsers: getAllUsers,
  createUser:createUser,
  getSingleUser:getSingleUser,
  getAllReviews:getAllReviews,
  getAllReviewsByPlatform:getAllReviewsByPlatform,
  getAllReviewsByUser:getAllReviewsByUser,
  getAllReviewsByPlatformByUser:getAllReviewsByPlatformByUser,
  createReviewByPlatformByUser:createReviewByPlatformByUser
};
