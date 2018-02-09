import express from 'express';
import multer from 'multer';
import AWS from 'aws-sdk';

const s3 = new AWS.S3();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  subregion: 'us-west-2'
});

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5000000 },
});

router.post('/upload', upload.single('theseNamesMustMatch'), (req, res) => {
    s3.putObject({
      Bucket: 'wayfareuserimages',
      Key: req.body.keypath,
      Body: req.file.buffer,
    }, (err) => {
      if (err) return res.status(400).send(err)
      let url = `https://s3-us-west-1.amazonaws.com/wayfareuserimages/${req.body.endurl}`
      res.status(201).send({message: 'File uploaded to S3!', url: url})
    })
  })

 export default router;