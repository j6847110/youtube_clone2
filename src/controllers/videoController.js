const videos = [
  {
    title: "1st Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "2nd Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "3rd Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];
const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
const watch = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
const edit = (req, res) => {
  res.render("edit");
};
const search = (req, res) => res.send("home");
const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete");
};
const upload = (req, res) => res.send("upload Video");
export { trending, watch, edit, search, deleteVideo, upload };
