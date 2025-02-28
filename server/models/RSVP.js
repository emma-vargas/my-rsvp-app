//* this defines how RSVP data is stored in MongoDB
// mongoose lets us define our schema and connect to db
import mongoose from 'mongoose';

// we get our URI from our atlas
const MONGO_URI =
  'mongodb+srv://evargas8112:moreno@my-rsvp-app.szz0c.mongodb.net/?retryWrites=true&w=majority&appName=my-rsvp-app';

// connectiong moongoose to DB
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    // allows the db connection string to be parsed correctly
    useNewUrlParser: true,
    // helps mongoose use the latest mongoDB
    useUnifiedTopology: true,
    // specifies the DB that our collections are part of: rsvp
    dbName: 'rsvp',
  })
  // if connection is successful:
  .then(() => console.log('Connected to Mongo DB.'))
  // if connection is not successful:
  .catch((err) => console.log(err));

// schema (class Obj) => describes how/what a model looks like,
const Schema = mongoose.Schema;

// set a schema for rsvp collection & tells it how it should look
const rsvpSchema = new Schema({
  name: { type: String, required: true }, // guest name required
  rsvpStatus: { type: String, enum: ['Accepted', 'Declined'], required: true }, // RSVP Status (must be "Accepted" or "Declined")
  headcount: { type: Number, required: true }, // number of ppl attending required
});

// creats a model based on the schema, the model for the 'rsvp' collection that will be part of the export
// mongoose.mode : creates a mongoDB collection named guests (in our atlas)
// this lets us CRUD entries in mongoDB
const Guests = mongoose.model('Guest', rsvpSchema);

// export the model in an object to be used in the controller.jsx
export default Guests;
