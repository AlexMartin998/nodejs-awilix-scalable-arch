import { model, Schema } from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const IdeaSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Plugins
IdeaSchema.plugin(mongooseAutoPopulate);

IdeaSchema.methods.toJSON = function () {
  const idea = this.toObject();
  idea.id = idea._id;
  idea.author.id = idea._id; // autopopulate

  delete idea._id;
  delete idea.author._id; // autopopulate
  delete idea.author.password; // autopopulate

  return idea;
};

export default model('Idea', IdeaSchema);
