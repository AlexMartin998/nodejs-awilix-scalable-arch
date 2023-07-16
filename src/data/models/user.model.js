const { Schema, model } = require('mongoose');
const bcryptjs = require('bcryptjs');

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required!'],
      trim: true,
      min: 2,
      max: 100,
    },
    username: {
      type: String,
      required: [true, 'Username is required!'],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required!'],
      unique: true,
      lowercase: true,
      trim: true,
      max: 50,
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
      trim: true,
      min: 5,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.pre('save', async function (next) {
  // If the password is already hashed, it don't re-hashet it
  if (!this.isModified('password')) return next();

  const hashedPassword = await bcryptjs.hash(this.password, 10);
  this.password = hashedPassword;

  next();
});

UserSchema.methods.comparePassword = function (password) {
  return bcryptjs.compareSync(password, this.password);
};

// mongoose calls it each time that we read a document
UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  user.id = user._id;

  delete user._id;
  delete user.password;
  delete user.createdAt;
  delete user.updatedAt;

  return user;
};

module.exports = model('User', UserSchema);
