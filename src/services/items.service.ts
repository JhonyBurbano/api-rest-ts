import { IItem } from "../interfaces/item.interface";
import ItemModel from "../models/item.models";

const insert = async (item: IItem) => {
  const resultInsert = await ItemModel.create(item);
  return resultInsert;
};

const getItem = async (id: string) => {
  const resultItem = await ItemModel.findOne({ _id: id });
  return resultItem;
};

const getItems = async () => {
  const resultItems = await ItemModel.find({}).exec();
  return resultItems;
};

const updateItem = async (id: string, item: IItem) => {
  const resultUpdate = await ItemModel.findOneAndUpdate({ _id: id }, item, {
    new: true,
  });
  return resultUpdate;
};

const removeItem = async (id: string) => {
  const resultItem = await ItemModel.deleteOne({ _id: id });
  return resultItem;
};

export { insert, getItem, getItems, updateItem, removeItem };
