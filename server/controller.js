const Form = require('./form')

exports.get = (req, res) => {
    let forms = Form.find({})
    return forms
}
exports.post = (req, res) => {
    let form = new Form({
        name: req.body.name,
        components: req.body.components
    })
    form.save()
}