module.exports = {
    getHouses: async (req, res) => {
        // const getHouses = await req.app.get('db').getHouses([req.session.user.id])
        return res.status(200).json(houses)
    },
    postHouse: (req, res) => {

    },
    deleteHouse: (req, res) => {
        const index = houses.findIndex(house => house.id === +req.params.id)
        houses.splice(index, 1)
        return res.status(200).json(houses)
    }
}
