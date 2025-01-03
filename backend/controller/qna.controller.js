const getAnswer = async (req, res) => {
  const { question, passage } = req.body;

  // Ensure the model is loaded before using it
  model = await loadModel();

  if (!model) {
    return res.status(500).send({
      status: 500,
      message: "Model not loaded",
    });
  }

  // Finding the answers
  const answers = await model.findAnswers(question, passage);

  res.send({
    status: 200,
    message: "Got the answer successfully!",
    data: answers,
  });
};

export { getAnswer };