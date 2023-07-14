import { model, Schema } from 'mongoose';

const CommentSchema = Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,

      // No siempre es recomendable el Autopopulate, pero en este ej. va bien
      autopopulate: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Plugins
CommentSchema.plugin(import('mongoose-autopopulate'));

module.exports = model('Comment', CommentSchema);
