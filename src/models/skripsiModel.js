import mongoose from "mongoose";

const skripsiSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true
    },
    priode : {
        type: String,
        required: true
    },
    presentaseSistem:{
        type: String,
        required: true
    },
    presentaseSkripsi:{
        type: String,
        required: true
    },
    keterangan: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const Skripsi = mongoose.models.skripsi || mongoose.model("skripsi", skripsiSchema);

export default Skripsi;