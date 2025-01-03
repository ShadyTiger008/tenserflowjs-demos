export const getAnswer = async (req, res) => {
  const { question, passage } = req.body;

  // Ensure the model is loaded before usage
  const model = req.model;

  if (!model) {
    return res.status(500).send({
      status: 500,
      message: "Model not loaded",
    });
  }

  try {
    const answers = await model.findAnswers(question, passage);
    res.status(200).send({
      status: 200,
      message: "Got the answer successfully!",
      data: answers,
    });
  } catch (error) {
    console.error("Error finding answers:", error);
    res.status(500).send({
      status: 500,
      message: "Error processing the question and passage",
    });
  }
};
