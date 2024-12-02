import Groq from "groq-sdk";
require('dotenv').config();

// Initialize the Groq client
const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Based on the following financial data: 
          - Total Budget: ${totalBudget} INR
          - Expenses: ${totalSpend} INR 
          - Incomes: ${totalIncome} INR
          Provide detailed financial advice to help the me manage my finances more effectively. Also, give a brief evaluation of their financial condition (good or bad). make sure it is within 50 words..no bullet points and no styling. and refer me as "you" and use casual english.`,
        },
      ],
      model: "llama3-8b-8192", // You can adjust the model as needed
    });

    // Extract the advice text from the response
    const advice = response.choices[0]?.message?.content || "No advice returned.";
    return advice;

  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export async function main(totalBudget, totalIncome, totalSpend) {
  // Ensure to pass dynamic values to getFinancialAdvice
  const chatCompletion = await getFinancialAdvice(totalBudget, totalIncome, totalSpend);  // Logs the financial advice
}

export default getFinancialAdvice;
