const Form = require('./model')

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
        fullname: req.body.fullname,
        age: req.body.age,
        university: req.body.university,
        data: req.body.data
    })
    form.save()
}

exports.update = (req, res, next) => {
    if (!req.params.id) return next(new Error('no form id'))
    Form.findByIdAndUpdate(req.params.id,
        {
            fullname: req.body.fullname,
            age: req.body.age,
            university: req.body.university,
            data: req.body.data
        },
        (err, form) => {
            if (err) return next(err)
        }
    )
}

exports.delete = (req, res, next) => {
    Form.findByIdAndDelete(req.params.id, (err, form) => {
        if (!form) return next(new Error('form not found'))
    })
}
