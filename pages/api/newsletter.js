const handler = (req, res) => {
    if(req.method === 'POST') {
        const email = req.body.email;
        
        // in production we would validate the email

        res.status(201).json({message: "email sent successfully"});
    }
    
    
}

export default handler;