export default (mongoose) => {
  const gradesSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      min: [0, 'Balance have to be a positive number!'],
    },
    lastModified: {
      type: Date,
      required: false,
      default: Date.now,
    },
  });

  const gradesModel = mongoose.model('grades', gradesSchema, 'grades');
  return gradesModel;
};

// export { gradesModel };
