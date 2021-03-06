const User = require("../models/User");

const updateUserProgress = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await User.findById(id);
    const { lessonProgress, chapterProgress } = req.body;

    user = await User.findByIdAndUpdate(
      id,
      {
        lessonProgress: lessonProgress,
        chapterProgress: chapterProgress,
      },
      { new: true }
    );
    res.json({
      msg: `User Progress with id ${id} updated`,
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = { updateUserProgress };
