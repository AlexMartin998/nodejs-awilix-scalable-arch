import { model, Schema } from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const IdeaSchema = new Schema({
  idea: {
    type: String,
    required: [true, 'Name is required!'],
    trim: true,
  },
  description: {
    type: String,
  },

  upvotes: [{ type: Boolean }],
  downvotes: [{ type: Boolean }],

  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    autopopulate: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      required: true,
      autopopulate: true,
    },
  ],
});

// Plugins
IdeaSchema.plugin(mongooseAutoPopulate);

export default model('Idea', IdeaSchema);
