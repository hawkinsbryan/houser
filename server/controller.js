module.exports = {
    getHouses: async (req, res) => {
        // const getHouses = await req.app.get('db').getHouses([req.session.user.id])
        return res.status(200).send(houses)
    },
    putHouse: async (req, res) => {

    },
    deleteHouse: async (req, res) => {

    }
}


// deleteData: (req, res) => {
//     const index = allDecks.findIndex(deck => deck.id === +req.params.id)
//     allDecks.splice(index, 1)
//     res.status(200).json(allDecks)
//   }
