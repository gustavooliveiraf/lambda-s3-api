const get = ({ s3, Bucket }) => async (Key) => {
  try {
    const params = {
      Key,
      Bucket,
    };

    return await s3.getObject(params).promise();
  } catch (err) {
    if (err.code === 'NoSuchKey') return err.message;

    throw err;
  }
};

module.exports = get;
