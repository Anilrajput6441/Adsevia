const { GoogleGenAI } = require("@google/genai");
const axios = require("axios");
require("dotenv").config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

exports.generateAIResponse = async (req, res) => {
  const { prompt, mode, instruction } = req.body;

  if (!prompt || !mode) {
    return res.status(400).json({ error: "Prompt and mode are required" });
  }

  try {
    if (mode === "text") {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash", // or "gemini-1.5-pro"
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
        config: {
          systemInstruction: instruction || "You are a helpful assistant.",
        },
      });

      const text =
        response.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response generated.";

      return res.status(200).json({ result: text });
    }

    if (mode === "image") {
      const response = await axios.post(
        "https://api.veo.example.com/generate-image",
        { prompt },
        {
          headers: {
            Authorization: `Bearer ${process.env.VEO_API_KEY}`,
          },
        }
      );
      return res.status(200).json({ imageUrl: response.data.imageUrl });
    }

    if (mode === "video") {
      const response = await axios.post(
        "https://api.sora.example.com/generate-video",
        { prompt },
        {
          headers: {
            Authorization: `Bearer ${process.env.SORA_API_KEY}`,
          },
        }
      );
      return res.status(200).json({ videoUrl: response.data.videoUrl });
    }

    return res.status(400).json({ error: "Unsupported mode" });
  } catch (error) {
    console.error("AI Generation Error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
