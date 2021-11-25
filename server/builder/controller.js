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

exports.update = (req, res) => {
    if (!req.params.id) return next(new Error('no builder-form id'))
    Builder.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            components: req.body.components
        },
        (err, builder) => {
            if (err) return next(err)
        }
    )
}

exports.delete = (req, res, next) => {
    Builder.findByIdAndDelete(req.params.id, (err, builder) => {
        if (!builder) return next(new Error('builder-form not found'))
    })
}
