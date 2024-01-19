const projects = require("../models/projectModel");
const admins = require("../models/adminModel");
const careers = require("../models/careerModel");
const enquiries = require("../models/enquiryModel");

const jwt = require("jsonwebtoken");

exports.getAdmin = async (req, res) => {
  try {
    const adminDetails = await admins.find();
    // const token=jwt.sign({_id:admins._id},process.env.JWT_SECRET_CODE)
    res.status(200).json(adminDetails);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const allProjects = await projects.find();
    res.status(200).json(allProjects);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await admins.findOne({ email, password });
    if (existingUser) {
      // login
      const token = jwt.sign(
        { userId: existingUser._id },
        process.env.JWT_SECRET_CODE
      );
      res.status(200).json({ existingUser, token });
    }
    res.status(200).json("incorrect username or password");
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.add = async (req, res) => {
  // accessing the variables from frontend request
  const { projectName, location, style, status, projectImage } = req.body;

  // image from multer
  // const postImage = req.file?.filename

  // useId - access from jwtmiddleware
  // const userId = req.payload

  try {
    const existingPost = await projects.findOne({ projectName });
    if (existingPost) {
      res.status(400).json(`${existingPost} is already exist !`);
    } else {
      const newPost = new projects({
        projectName,
        location,
        status,
        style,
        projectImage,
      });
      // save im mdb
      await newPost.save();
      res.status(200).json(newPost);
    }
  } catch (err) {
    res.status(401).json(`addProject Api Failed ${err}`);
  }
};

exports.addCareer = async (req, res) => {
  // accessing the variables from frontend request
  const { jobName, qualification, experience, location, salary, status } =
    req.body;

  try {
    const newNotification = new careers({
      jobName,
      qualification,
      experience,
      location,
      salary,
      status,
    });
    // save im mdb
    await newNotification.save();
    res.status(200).json(newNotification);
  } catch (err) {
    res.status(401).json(`addProject Api Failed ${err}`);
  }
};

exports.getAllCareers = async (req, res) => {
  try {
    const allCareers = await careers.find({ status: "1" });
    res.status(200).json(allCareers);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.addEnquiry = async (req, res) => {
  // accessing the variables from frontend request
  const { name, email, phonenumber, projectInterested, comments } = req.body;

  try {
    const newEnquiry = new enquiries({
      name,
      email,
      phonenumber,
      projectInterested,
      comments,
    });
    // save im mdb
    await newEnquiry.save();
    res.status(200).json(newEnquiry);
  } catch (err) {
    res.status(401).json(`addProject Api Failed ${err}`);
  }
};

exports.getAllEnquiries = async (req, res) => {
  try {
    const allenquiries = await enquiries.find();
    res.status(200).json(allenquiries);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.deletePost = async (req, res) => {
  const { _id } = req.params;

  try {
    const response = await careers.deleteOne({ _id: _id });
    if (response) {
      res.status(200).json("post deleted");
      console.log(_id);
    }
  } catch (err) {
    res.status(401).json(`delete post Api Failed ${err}`);
  }
};

exports.deleteProject = async (req, res) => {
  const { _id } = req.params;
  // console.log(_id);
  try {
    const response = await projects.deleteOne({ _id: _id });
    if (response) {
      res.status(200).json("project deleted");
      console.log(_id);
    }
  } catch (err) {
    res.status(401).json(`delete project Api Failed ${err}`);
  }
};

exports.getSelectedProject = async (req, res) => {
  const { _id } = req.params;
  // console.log(_id);
  try {
    const projectdata = await projects.findOne({ _id: _id });
    if (projectdata) {
      res.status(200).json(projectdata);
      console.log(_id);
    }
  } catch (err) {
    res.status(401).json(`delete project Api Failed ${err}`);
  }
};

exports.updateProject = async (req, res) => {
  // accessing the variables from frontend request
  const { projectName, location, style, status, projectImage } = req.body;
  const { _id } = req.params;
  console.log(_id);
  try {
    const selectedPro = await projects.findOne({ _id: _id });
    if (selectedPro) {
      selectedPro.projectName = projectName
      selectedPro.location = location
      selectedPro.style = style
      selectedPro.status = status
      selectedPro.projectImage = projectImage

      // to save these changes in mongo DB
      await selectedPro.save();
      // res.status(200).json(`${userName}`)
      res.status(200).json(selectedPro);
    } else {
      res.status(404).json(`${projectName}'s project is not found`);
    }
  } catch (err) {
    res.status(401).json(`project edit Api failed ${err}`);
  }
};

exports.deleteEnq = async (req, res) => {
  const { _id } = req.params;

  try {
    const response = await enquiries.deleteOne({ _id: _id });
    if (response) {
      res.status(200).json("enq deleted");
      console.log(_id);
    }
  } catch (err) {
    res.status(401).json(`delete post Api Failed ${err}`);
  }
};
