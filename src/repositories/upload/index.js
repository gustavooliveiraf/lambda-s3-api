const upload = ({ s3, Bucket }) => async (Body, Key, ContentType) => {
  const params = {
    Key,
    Bucket,
    Body,
    ContentType,
    ACL: 'public-read',
  };

  return s3.upload(params).promise();
};

module.exports = upload;
