export default function Handler(req, res) {
    if (req.method === 'POST') {
        // save to DB!
        console.log('in POST: ', req.body)

        res.json({message: 'okay'});
    }
}