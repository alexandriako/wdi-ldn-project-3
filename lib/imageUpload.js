const s3 = require('./s3');
const uuid = require('uuid');

function imageUpload(req, res, next) {
  if(!req.body.base64) return next();

  const base64Data = req.body.base64.match(/base64,(.*)$/)[1];
  const mimeType = req.body.base64.match(/^data:(.*);/)[1];
<<<<<<< HEAD
  const extension = mimeType.replace('image/', '.');
  const filename = `${uuid.v1()}${extension}`;
=======
  const extension = mimeType.replace('image/', '');
  const filename = `${uuid.v1()}.${extension}`;
>>>>>>> e3b88913ffc28aeed1ff00c67514894debf4e664

  s3.upload({
    Key: filename,
    Body: new Buffer(base64Data, 'base64'),
    ContentType: mimeType
  }, (err) => {
    if(err) return next(err);

    req.file = {
<<<<<<< HEAD
      filename, mimeType
=======
      filename,
      mimeType
>>>>>>> e3b88913ffc28aeed1ff00c67514894debf4e664
    };

    next();
  });
<<<<<<< HEAD

=======
>>>>>>> e3b88913ffc28aeed1ff00c67514894debf4e664
}

module.exports = imageUpload;
