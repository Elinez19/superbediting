import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email',
      ],
    },
    password: {
      type: String,
      // Not required because of OAuth/Social Logins
    },
    image: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    // Adding purchases history array or reference for later use
    purchases: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Purchase', // TBD later for ebooks
      },
    ],
  },
  { timestamps: true }
);

const User = models?.User || model('User', UserSchema);

export default User;
