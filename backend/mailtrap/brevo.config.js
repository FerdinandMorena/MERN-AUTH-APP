import SibApiV3Sdk from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
const apiKey = process.env.BREVO_API_KEY;

SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey = apiKey;

export const transactionalEmailsApi = apiInstance;

export const sender = {
  email: "fmmphahle01@gmail.com",
  name: "Ferdinand Auth App",
};
