const { model, Schema } = require('mongoose');
// import mongooseAutoPopulate from 'mongoose-autopopulate';

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
// CommentSchema.plugin(mongooseAutoPopulate);
CommentSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Comment', CommentSchema);
