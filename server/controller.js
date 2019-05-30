module.exports = {
    getHouses: async (req, res) => {
        const houses = await req.app.get('db').get_houses().catch(error => console.log(error))
        return res.status(200).json(houses)
    },
    postHouse: async (req, res) => {
        const { name, address, city, state, zip } = req.body;
        const house = await req.app.get("db").post_house([name, address, city, state, zip]).catch(error => console.log(error))
        res.sendStatus(200)
    },
    deleteHouse: (req, res) => {
        const db = req.app.get("db");
        const { id } = req.params;
        console.log(id);
        db.delete_house(id)
            .then(() => res.sendStatus(200))
            .catch(error => console.log(error));
    },
    updateHouse: (req, res) => {
        const db = req.app.get("db");
        db.update_houses([
            req.params.id,
            req.query.img_url,
            req.query.mortgage,
            req.query.rent])
            .then(() => res.sendStatus(200))
            .catch(error => console.log(error));
    }

