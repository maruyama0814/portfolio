import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key is missing. AI features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateProjectInsight = async (title: string, tags: string[]): Promise<string> => {
  const ai = getAiClient();
  if (!ai) {
    return "APIキーが設定されていないため、AIインサイトを生成できません。";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      あなたは世界的なデザイン評論家兼クリエイティブディレクターです。
      以下の架空のデザインプロジェクトについて、洗練された専門的な解説文（ケーススタディ）を日本語で作成してください。
      
      プロジェクト名: ${title}
      関連タグ: ${tags.join(', ')}
      
      要件:
      1. 150文字〜200文字程度でまとめてください。
      2. デザインの意図、解決した課題、視覚的な特徴（色彩、タイポグラフィなど）について触れてください。
      3. 読者を惹きつける、エモーショナルでプロフェッショナルな文体にしてください。
      4. Markdown形式は使用せず、プレーンテキストで出力してください。
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on simple tasks
      }
    });

    return response.text || "インサイトの生成に失敗しました。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "現在AIサービスにアクセスできません。後ほどお試しください。";
  }
};