const fs = require('fs');
const _ = require("underscore");
const express = require('express');
const app = express();
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/games', (req, res) => {
    let body = [];

    try {
        const rawGames = fs.readFileSync('./data/games.json');
        const games = JSON.parse(rawGames);

        if (req.query.title != undefined) {

            const queryTitle = req.query.title.toLowerCase();

            games.forEach(game => {
                const gameName = game.title.toLowerCase();
                if (gameName.includes(queryTitle)) {
                    body.push(game);
                }
            });
        }


    } catch (error) {
        body = { error: "something went wrong" };
    }

    res.send(body);
})

app.post('/quantity', (req, res) => {

    try {
        const rawGames = fs.readFileSync('./data/games.json');
        const games = JSON.parse(rawGames);

        const productsToBuy = req.body;

        let outOfStock = false;

        productsToBuy.forEach(productToBuy => {
            const idToBuy = productToBuy.id;
            console.log(idToBuy);


            const gameToBuy = games.find(game => {
                return game.id === idToBuy;
            });

            if (gameToBuy && gameToBuy.quantity >= 1) {
                gameToBuy.quantity -= 1;
            } else {
                outOfStock = true;
                console.log(outOfStock);
            }

            if (outOfStock) {
                res.status(400).json({ error: "Out of stock" });
            } else {
                fs.writeFileSync('./data/games.json', JSON.stringify(games, null, 2));
            }
        })

        // 1.I denna biten kod så kommer priset att sorteras där lägst pris är först.
        const highPriceFirst = _.sortBy(games, "price");

        //2.Lägger man sedan till en ny produkt så kommer filen games.json att uppdateras.
        fs.writeFileSync('./data/games.json', JSON.stringify(highPriceFirst, null, 2));





        res.json(games);

    } catch (error) {

        res.status(500).json({ error: "Something went wrong" });
    }

})


app.listen(3000, () => {
    console.log("Listening on port 3000 ...");
});