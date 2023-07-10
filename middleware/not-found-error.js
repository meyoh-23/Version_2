const notFound = (req, res) =>{
    res.status(404).send('The site does not exist!');
}

module.exports= notFound