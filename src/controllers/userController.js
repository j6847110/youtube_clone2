import User from "../models/User";

const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMEssage: "Password confirmation does not match",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username/email is already taken",
    });
  }
  await User.create({
    name,
    username,
    email,
    password,
    location,
  });

  return res.redirect("/login");
};
const edit = (req, res) => res.send("edit");
const remove = (req, res) => res.send("remove user");
const login = (req, res) => res.send("login");
const search = (req, res) => res.send("search");
const logout = (req, res) => res.send("Log out");
const see = (req, res) => res.send("see User");

export { getJoin, postJoin, edit, remove, login, search, see, logout };
