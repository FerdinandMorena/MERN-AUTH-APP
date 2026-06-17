import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";
import { transactionalEmailsApi, sender } from "./brevo.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const response = await transactionalEmailsApi.sendTransacEmail({
      to: [{ email }],
      sender: sender,
      subject: "Please verify your email",
      htmlContent: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken,
      ),
    });

    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Error sending verification email: " + error.message);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const response = await transactionalEmailsApi.sendTransacEmail({
      to: [{ email }],
      sender: sender,
      subject: "Welcome to Auth App!",
      htmlContent: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
    });
    console.log("Welcome email sent successfully:", response);
  } catch (err) {
    console.error("Error sending welcome email:", err);
    throw new Error("Error sending welcome email: " + err.message);
  }
};

export const sendResetPasswordEmail = async (email, resetUrl) => {
  try {
    const response = await transactionalEmailsApi.sendTransacEmail({
      to: [{ email }],
      sender: sender,
      subject: "Reset your password",
      htmlContent: PASSWORD_RESET_REQUEST_TEMPLATE.replace(
        "{resetURL}",
        resetUrl,
      ),
    });
    console.log("Password reset email sent successfully:", response);
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error("Error sending password reset email: " + error.message);
  }
};

export const sendPasswordResetSuceessEmail = async (email) => {
  try {
    const response = await transactionalEmailsApi.sendTransacEmail({
      to: [{ email }],
      sender: sender,
      subject: "Password reset successfully",
      htmlContent: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });
    console.log("Password reset success email sent successfully:", response);
  } catch (error) {
    console.error("Error sending password reset success email:", error);
    throw new Error(
      "Error sending password reset success email: " + error.message,
    );
  }
};
