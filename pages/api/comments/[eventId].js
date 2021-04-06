const handler = (req, res) => {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    // add server side validation if this was production
    const { email, name, text } = req.body;

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    res.status(201).json({ message: "Added Comment", comment: newComment });
  } else if (req.method === "GET") {
    const dummyList = [{ id: 1, name: "glen", comment: "hello" }];

    res.status(200).json({message: "list of comments", comments: dummyList});
  }
};

export default handler;
