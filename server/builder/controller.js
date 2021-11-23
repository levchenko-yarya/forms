const Builder = require('./model')

exports.show = async (req, res) => {
    const builders = await Builder.find({})
    return res.send(builders)
}

exports.get = (req, res) => {
    return Builder.findById(req.params.id, (err, builder) => {
        if (!err) return res.send(builder)
    })
}

exports.post = (req, res) => {
    if (!req.body) return res.sendStatus(400)
    let builder = new Builder({
        name: req.body.name,
        components: req.body.components
    })
    builder.save()
}
