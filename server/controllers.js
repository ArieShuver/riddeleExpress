import { read, create, deleteRiddle, update } from "./functionality.js";

async function getAllRiddles(req, res) {
  const allRiddles = await read("./fileText.txt");
  res.send(allRiddles);
}

async function addRiddles(req, res) {
    const data = req.body;
    await create("./fileText.txt", data);
    res.status(201).send({ message: "Riddle added" });
}

async function updateRiddles(req, res) {
    const data = req.body;
    await update(data.id, data, "./fileText.txt");
    res.status(200).send({ message: "Riddle updated" });
}

async function deleteRiddles(req, res) {
    const { id } = req.body;
    await deleteRiddle(id, "./fileText.txt");
    res.status(200).send({ message: "Riddle deleted" });
}

export {
  getAllRiddles,
  addRiddles,
  updateRiddles,
  deleteRiddles
}