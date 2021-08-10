const trending = (req, res) => res.render("home");
const see = (req, res) => res.render("watch");

const edit = (req, res) => res.render("edit");

const search = (req, res) => res.send("home");
const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete");
};
const upload = (req, res) => res.send("upload Video");
export { trending, see, edit, search, deleteVideo, upload };
