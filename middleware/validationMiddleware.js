function validation (req, res ,next) {
    console.log({reqBody: req.body})

    const { body } = req

    if ( !body.name || !body.login) {
       next(new Error('vallidation Error'))
    }

    next()
}

export { validation }


// // Error handling (e.g., validate required fields)
// if (!newItem || !newItem.name) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }