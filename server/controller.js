const Form = require('./form')

exports.show = async (req, res) => {
    const forms = await Form.find({})
    return res.send(forms)
}

exports.get = (req, res) => {
    return Form.findById(req.params.id, (err, form) => {
        if (!err) return res.send(form)
    })
}

exports.post = (req, res) => {
    if (!req.body) return res.sendStatus(400)
    let form = new Form({
        name: req.body.name,
        components: req.body.components
    })
    form.save()
}

exports.update = (req, res, next) => {
    if (!req.params.id) return next(new Error('no form id'))
    Form.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            components: req.body.components
        },
        (err, form) => {
            if (err) return next(err)
        }
    )
}

exports.destroy = (req, res, next) => {
    Form.findByIdAndDelete(req.params.id, (err, form) => {
        if (!form) return next(new Error('form not found'))
    })
}
