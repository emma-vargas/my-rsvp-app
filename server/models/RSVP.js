//* this defines how RSVP data is stored in MongoDB

import mongoose from 'mongoose';

const MONGO_URI =
  'mongodb+srv://evargas8112:moreno@my-rsvp-app.szz0c.mongodb.net/?retryWrites=true&w=majority&appName=my-rsvp-app';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'rsvp',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

// schema (class Obj) => describes how/what a model looks like,
const Schema = mongoose.Schema;

// set a schema for rsvp collection
const rsvpSchema = new Schema({
  name: { type: String, required: true }, // guest name required
  rsvpStatus: { type: String, enum: ['Accepted', 'Declined'], required: true }, // RSVP Status (must be "Accepted" or "Declined")
  headcount: { type: Number, required: true }, // number of ppl attending required
});

// creats a model based on the schema, the model for the 'rsvp' collection that will be part of the export
const Guests = mongoose.model('Guest', rsvpSchema);

// exports the model in an object to be used in the controller
export default Guests;
