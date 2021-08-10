const trending = (req, res) => res.render("home");
const see = (req, res) => {
  return res.send(`Watch video #${req.params.id}`);
};
const edit = (req, res) => {
  return res.send(`Edit video #${req.params.id}`);
};

const search = (req, res) => res.send("home");
const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete");
};
const upload = (req, res) => res.send("upload Video");
export { trending, see, edit, search, deleteVideo, upload };
