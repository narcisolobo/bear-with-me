import mongoose, { model, Schema } from 'mongoose';

const EMAIL_REGEX = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/);

const contactSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter your email.'],
      validate: {
        validator: (email) => EMAIL_REGEX.test(email),
        message: 'Please enter a valid email.',
      },
    },
    name: {
      type: String,
      required: [true, 'Please enter your name.'],
      minLength: [2, 'Name must be at least two characters.'],
    },
    message: {
      type: String,
      required: [true, 'Please enter your message.'],
      minLength: [5, 'Message must be at least five characters.'],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Contact || model('Contact', contactSchema);
