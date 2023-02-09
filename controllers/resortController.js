import Resort from "../models/Resort.js";
import Room from "../models/Room.js";

/* ======================================== RESORT MANAGEMENT ======================================== */

export const addResort = async (req, res, next) => {
  const newResort = new Resort(req.body);
  try {
    const savedResort = await newResort.save();
    res.status(200).json(savedResort);
  } catch (err) {
    next(err);
  }
};

export const updateResort = async (req, res, next) => {
  try {
    const updatedResort = await Resort.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedResort);
  } catch (err) {
    next(err);
  }
};

export const getResort = async (req, res, next) => {
  try {
    const resort = await Resort.findById(req.params.id);
    res.status(200).json(resort);
  } catch (err) {
    next(err);
  }
};

export const getAllResort = async (req, res, next) => {
  try {
    const resorts = await Resort.find();
    res.status(200).json(resorts);
  } catch (err) {
    next(err);
  }
};
/* ---------------------------------------- END ---------------------------------------- */

/* ======================================== ROOM MANAGEMENT ======================================== */

export const addRoom = async (req, res, next) => {
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

export const getAllRoom = async (req, res, next) => {
  try {
    if (!req.resortId) return res.json({ message: "Unauthanticated" });
    
    const rooms = await Room.find({
      resort: req.resortId,
    })
      .populate("roomType")
      .populate("facility");
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
/* ---------------------------------------- END ---------------------------------------- */
