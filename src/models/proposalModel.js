import mongoose from "mongoose";

const proposalSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true
    },
    priode: {
        type: String,
        required: true
    },
    presentaseProposal: {
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
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const Proposal = mongoose.models.proposal || mongoose.model("proposal", proposalSchema);

export default Proposal;