import express, { Request, Response } from "express";
import { User } from "../models/user.model";

export const userRoutes = express.Router();

userRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const createBodyUser = req.body;
    const userInfoData = await User.create(createBodyUser);
    res.status(201).send({
      success: true,
      message: "User create successfully",
      userInfoData,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "User not create",
      error,
    });
  }
});

userRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const userInfoData = await User.find();

    res.status(200).send({
      success: true,
      messages: "All user data",
      userInfoData,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      messages: "Data not found",
      error,
    });
  }
});

userRoutes.patch("/:userId", async (req: Request, res: Response) => {
  try {
    const updateUserId = req.params.userId;
    const updateUserBody = req.body;

    const updateUserInfoData = await User.findByIdAndUpdate(
      updateUserId,
      updateUserBody,
      { new: true }
    );

    if (updateUserInfoData) {
      res.status(200).send({
        success: true,
        messages: "User update successfully",
        updateUserInfoData,
      });
    }

    res.status(403).send({
      success: false,
      messages: `${updateUserId} this data not available`,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      messages: "User don't update",
      error,
    });
  }
});

userRoutes.delete("/:userId", async (req: Request, res: Response) => {
  try {
    const deleteUserId = req.params.userId;
    const deleteUserData = await User.findByIdAndDelete(deleteUserId);

    if (deleteUserData) {
      res.status(200).send({
        success: true,
        messages: "User delete successfully",
        deleteUserData,
      });
    }

    res.status(403).send({
      success: false,
      messages: "This data is not available",
    });
  } catch (error) {
    res.status(403).send({
      success: false,
      messages: "User don't delete",
    });
  }
});
