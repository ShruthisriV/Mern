const ShowModel = require("../models/show");

const addShow = async (req, res) => {
  try {
    const newShow = new ShowModel(req.body);
    await newShow.save();
    res.status(200).json({
      success: true,
      message: "new show added",
    });
  } catch (err) {
    res.send({
      status: false,
      message: err.message,
    });
  }
};

const updateShow = async (req, res) => {
  try {
    const { body } = req;
    const updatedShow = await ShowModel.findByIdAndUpdate(body.showId, body);
    if (!updatedShow) {
      return res.status(400).json({
        message: "show not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "show updated",
      data: updatedShow,
    });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const deleteShow = async (req, res) => {
  try {
    const { showId } = req.params;
    const deletedShow = await ShowModel.findOneAndDelete({ _id: showId });
    res.status(200).json({
      success: true,
      message: "show deleted",
      data: deletedShow,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const getAllShowsByTheatre = async (req, res) => {
  try {
    const { theatreId } = req.body;
    const allShowsByTheatre = await ShowModel.find({
      theatre: theatreId,
    }).populate("movie");
    res.status(200).json({
      success: true,
      message: "sent show by theatres",
      data: allShowsByTheatre,
    });
  } catch (err) {
    res.send({
      status: false,
      message: err.message,
    });
  }
};

const getAllShowsByMovie = async (req, res) => {
  try {
    const { movie, date } = req.body;
    const shows = await ShowModel.find({ movie, date }).populate("theatre");

    // Use a Map to track unique theatres by ID
    const theatreMap = new Map();

    shows.forEach((show) => {
      const theatreId = show.theatre._id.toString();

      if (!theatreMap.has(theatreId)) {
        theatreMap.set(theatreId, {
          ...show.theatre._doc,
          shows: [],
        });
      }

      theatreMap.get(theatreId).shows.push(show);
    });

    const uniqueTheatres = Array.from(theatreMap.values());

    res.status(200).json({
      success: true,
      message: "sent show of theatre",
      data: uniqueTheatres,
    });
  } catch (err) {
    res.send({
      status: false,
      message: err.message,
    });
  }
};

const getShowById = async (req, res) => {
  try {
    const { showId } = req.params;
    const show = await ShowModel.findById(showId)
      .populate("theatre")
      .populate("movie");
    res.status(200).json({
      success: true,
      message: "show found",
      data: show,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  addShow,
  updateShow,
  deleteShow,
  getAllShowsByTheatre,
  getAllShowsByMovie,
  getShowById,
};
