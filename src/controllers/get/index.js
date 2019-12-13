const get = (storage) => async (req, res) => {
  try {
    const response = await storage.get(req.params.key);

    if (typeof response === 'string') return res.status(404).send({ error: response });

    const body = req.query.image === 'true' // route: <ip>/key?image=true
      ? `data:${response.ContentType};base64,${response.Body.toString('base64')}`
      : response;

    return res.status(200).json(body);
  } catch (err) {
    // log(err)
    return res.status(500).send({ error: err.message });
  }
};

module.exports = get;
