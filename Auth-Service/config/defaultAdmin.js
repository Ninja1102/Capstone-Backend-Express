const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

const createDefaultAdmin = async () => {
 const existingAdmin = await User.findOne({ userName: 'Admin' });
  if (!existingAdmin) {
console.log("executing");
    const hashedPassword = await bcrypt.hash('Admin', 10);
    const admin = new User({ userName: 'Admin', password: hashedPassword, role: 'ADMIN' });
    await admin.save();
    console.log('Default admin created');
    console.log("default admin created sucessfully");
  }
};

module.exports = createDefaultAdmin;
