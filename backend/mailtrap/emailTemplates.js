export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #1e3a8a, #1e40af); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #1e3a8a;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #1e3a8a, #1e40af); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #1e3a8a; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #1e3a8a, #1e40af); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #1e3a8a; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="format-detection" content="telephone=no"/>
  <title>Welcome to Auth App</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background-color: #f0f4f0;
      font-family: Arial, Helvetica, sans-serif;
      color: #1a1a1a;
      padding: 40px 16px;
    }

    .email-wrapper {
      max-width: 560px;
      margin: 0 auto;
    }

    /* ── Header ── */
    .header {
      background-color: #1e3a8a;
      border-radius: 16px 16px 0 0;
      padding: 36px 44px;
      position: relative;
      overflow: hidden;
    }

    .header::before {
      content: '';
      position: absolute;
      top: -50px; right: -50px;
      width: 180px; height: 180px;
      border-radius: 50%;
      background: rgba(255,255,255,0.08);
    }

    .header::after {
      content: '';
      position: absolute;
      bottom: -30px; left: 30px;
      width: 100px; height: 100px;
      border-radius: 50%;
      background: rgba(255,255,255,0.06);
    }

    .logo-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 28px;
    }

    .logo-icon {
      width: 34px; height: 34px;
      background: rgba(255,255,255,0.2);
      border-radius: 9px;
      display: flex; align-items: center; justify-content: center;
    }

    .logo-name {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 17px;
      color: #fff;
    }

    .header-eyebrow {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.6);
      margin-bottom: 8px;
    }

    .header-title {
      font-family: 'Syne', sans-serif;
      font-size: 34px;
      font-weight: 800;
      color: #fff;
      line-height: 1.1;
      letter-spacing: -0.5px;
    }

    /* ── Body ── */
    .body {
      background: #ffffff;
      padding: 40px 44px 44px;
      border-radius: 0 0 16px 16px;
    }

    .greeting {
      font-size: 15px;
      color: #444;
      line-height: 1.75;
      margin-bottom: 28px;
    }

    .greeting strong {
      color: #1a1a1a;
      font-weight: 600;
    }

    .divider {
      height: 1px;
      background: #eee;
      margin: 0 0 28px;
    }

    .closing {
      font-size: 14px;
      color: #777;
      line-height: 1.7;
    }

    .closing a {
      color: #1e3a8a;
      text-decoration: none;
      font-weight: 500;
    }

    .sign-off {
      margin-top: 32px;
      font-size: 14px;
      color: #444;
      line-height: 1.6;
    }

    .sign-off span {
      display: block;
      font-weight: 600;
      color: #1a1a1a;
      margin-top: 2px;
    }

    /* ── Responsive ── */
    @media only screen and (max-width: 600px) {
      body {
        padding: 0 !important;
      }

      .email-wrapper {
        max-width: 100% !important;
        width: 100% !important;
      }

      .header {
        border-radius: 0 !important;
        padding: 28px 24px !important;
      }

      .header-title {
        font-size: 26px !important;
      }

      .body {
        border-radius: 0 !important;
        padding: 28px 24px 36px !important;
      }

      .greeting {
        font-size: 14px !important;
      }

      .closing, .sign-off {
        font-size: 13px !important;
      }
    }

    @media only screen and (max-width: 400px) {
      .header-title {
        font-size: 22px !important;
      }

      .logo-name {
        font-size: 15px !important;
      }

      .header {
        padding: 22px 18px !important;
      }

      .body {
        padding: 24px 18px 30px !important;
      }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">

    <!-- Header -->
    <div class="header">
      <div class="logo-row">
        <span class="logo-name">Auth App</span>
      </div>
      <p class="header-eyebrow">Welcome aboard</p>
      <h1 class="header-title">You're all set.</h1>
    </div>

    <!-- Body -->
    <div class="body">
      <p class="greeting">
        Hi <strong>{name}</strong>,<br/><br/>
        Your account is verified and ready to go. We're glad to have you — you now have full access to Auth App and everything it has to offer.
      </p>

      <div class="divider"></div>

      <p class="closing">
        If you ever run into any questions or need a hand, our team is always happy to help at <a href="mailto:support@authapp.io">support@authapp.io</a>.
      </p>

      <div class="sign-off">
        Cheers,<br/>
        <span>The Auth App Team</span>
      </div>
    </div>

  </div>
</body>
</html>
`;
