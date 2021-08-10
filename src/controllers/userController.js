const join = (req, res) => res.send("join");
const edit = (req, res) => res.send("edit");
const remove = (req, res) => res.send("remove user");
const login = (req, res) => res.send("login");
const search = (req, res) => res.send("search");
const logout = (req, res) => res.send("Log out");
const see = (req, res) => res.send("see User");

export { join, edit, remove, login, search, see, logout };
