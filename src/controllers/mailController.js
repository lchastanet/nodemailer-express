exports.forgotten = async (req, res) => {
  const recip = req.body.email

  res.json({ recip })
}
