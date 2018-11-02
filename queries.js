
function getAllPlatforms(req, res, next) {
  var data = [{"name":"Carousell","url":"https://carousell.com/"},{"name":"Grab","url":"https://www.grab.com/sg/"},{"name":"Shopee","url":"https://shopee.sg/"}];

   res.status(200).json({
    status: 'success',
    data: data,
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

function getAllUsers(req, res, next) {
  var data = [{"name":"Belson Heng","joinDate":"11 Sep 2017"},{"name":"Jit Hwee","joinDate":"21 Nov 2015"},{"name":"Ming Jun","joinDate":"08 Aug 2011"}];

   res.status(200).json({
    status: 'success',
    data: data,
    message: 'Retrieved ALL Users'
  });
}

// function getSinglePuppy(req, res, next) {
//   var pupID = parseInt(req.params.id);
//   db.one('select * from pups where id = $1', pupID)
//     .then(function (data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'Retrieved ONE puppy'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }
//
// function createPuppy(req, res, next) {
//   req.body.age = parseInt(req.body.age);
//   db.none('insert into pups(name, breed, age, sex)' +
//       'values(${name}, ${breed}, ${age}, ${sex})',
//     req.body)
//     .then(function () {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Inserted one puppy'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }
//
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
  getAllUsers: getAllUsers
};
