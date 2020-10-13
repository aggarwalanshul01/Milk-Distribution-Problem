let route = require('express').Router();
const { db, datas, users } = require('../db/loginTable');
route.get('/', (req, res) => {
    //res.send('Hello')
    res.redirect('/components/signup.html')
})
route.post('/', async(req, res) => {
    console.log(req.body.nodes);
    console.log(req.body.edges);
    let n = "",
        e = "";
    for (let i = 0; i < req.body.nodes.length; i++) {
        n = n + req.body.nodes[i] + " ";
    }
    for (let i = 0; i < req.body.edges.length; i++) {
        e = e + req.body.edges[i] + " ";
    }
    console.log(n);
    console.log(e);
    let d = await datas.create({
        nodes: n,
        edges: e,
        userId: req.session.userId
    })

    res.send(d);
})
module.exports = {
    route
}