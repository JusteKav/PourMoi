const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model');

const getUsers = async (req, res) => {
  const userDocs = await UserModel.find();
  const users = userDocs.map((userDoc) => new UserViewModel(userDoc));
  res.status(200).json({ users });
};

// const updateUser = async (req, res) => {
//   const { email, name, surname } = req.body;

//   const expectedProps = { email, name, surname };
//   const props = Object.entries(expectedProps).reduce((result, [name, value]) => {
//     if (value !== undefined) {
//       result[name] = value;
//     }
//     return result;
//   }, {});

//   const userDoc = await UserModel.findOneAndUpdate({ email: req.user.email }, props, { new: false });
//   res.status(200).json({
//     message: 'Vartotojas atnaujintas',
//     user: new UserViewModel(userDoc),
//   });
// };

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, surname } = req.body;
  try {
    await UserModel.findById(id);

    try {
      const userDoc = await UserModel.findByIdAndUpdate(id, { name, surname }, { new: true });
      const user = new UserViewModel(userDoc);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }
  } catch (error) {
    res.status(404).json({ message: 'Tipas nerastas' });
  }
};

module.exports = {
  getUsers,
  updateUser,
};
