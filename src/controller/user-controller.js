import userServices from "../services/user-services.js";

const getUser = async (req, res, next) => {
  try {
    const result = await userServices.getUser();

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getUserId = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await userServices.getUserId(id);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const post = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await userServices.post(request);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const request = req.body;
    const id = req.params.id;

    const result = await userServices.update(id, request);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const id = req.params.id;

    await userServices.remove(id);

    res.status(200).json({
      data: "OK",
    });
  } catch (error) {
    next(error);
  }
};

export default { getUser, getUserId, post, update, remove };
