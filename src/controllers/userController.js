const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
const postJoin = (req, res) => {
  console.log(req.body);
  res.end();
};
const edit = (req, res) => res.send("edit");
const remove = (req, res) => res.send("remove user");
const login = (req, res) => res.send("login");
const search = (req, res) => res.send("search");
const logout = (req, res) => res.send("Log out");
const see = (req, res) => res.send("see User");

export { getJoin, postJoin, edit, remove, login, search, see, logout };
