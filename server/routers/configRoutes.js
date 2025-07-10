import { router } from "./routers.js";

function configRoutes(app) {
    app.use("/riddles", router)
    app.use("/", (req, res) => {
        res.status(404).send("Not Found");
    });
}
export { configRoutes };
