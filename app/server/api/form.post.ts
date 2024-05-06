import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const mail = `<!doctype html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>🐷 Potwierdzenie rejestracji - Knurowski Streetball 2024</title>
    <style media="all" type="text/css">
    
    body {
      -webkit-font-smoothing: antialiased;
      font-size: 16px;
      line-height: 1.3;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
    
    table {
      border-collapse: separate;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      width: 100%;
    }
    
    table td {
      font-size: 16px;
      vertical-align: top;
    }

    svg {
        width: 100%;
    }
    
    h1 {
        width: 100%;
        color: white;
        text-align: center;
        font-weight: bold;
    }
    
    body {
      background-color: rgba(30,30,30,1.00);
      margin: 0;
      padding: 0;
    }
    
    .body {
      background-color: rgba(30,30,30,1.00);
      width: 100%;
    }
    
    .container {
      margin: 0 auto !important;
      max-width: 600px;
      padding: 0;
      padding-top: 24px;
      width: 600px;
    }
    
    .content {
      box-sizing: border-box;
      display: block;
      margin: 0 auto;
      max-width: 600px;
      padding: 0;
    }
    
    .main {
      width: 100%;
    }
    
    .wrapper {
      box-sizing: border-box;
      padding: 24px;
    }
    
    .footer {
      clear: both;
      padding-top: 24px;
      text-align: center;
      width: 100%;
    }
    
    .footer td,
    .footer p,
    .footer span,
    .footer a {
      color: #9a9ea6;
      font-size: 16px;
      text-align: center;
    }
    
    p {
      color: rgba(125,125,125,1.00);
      font-size: 16px;
      font-weight: normal;
      margin: 0;
      margin-bottom: 16px;
    }
    
    a {
      color: rgba(242,53,53,1.00);
      text-decoration: underline;
    }
    
    .btn {
      box-sizing: border-box;
      min-width: 100% !important;
      width: 100%;
    }
    
    .btn > tbody > tr > td {
      padding-bottom: 16px;
    }
    
    .btn table {
      width: auto;
    }
    
    .btn table td {
      background-color: #ffffff;
      border-radius: 4px;
      text-align: center;
    }
    
    .btn a {
      background-color: #ffffff;
      border: solid 2px rgba(242,53,53,1.00);
      border-radius: 4px;
      box-sizing: border-box;
      color: rgba(242,53,53,1.00);
      cursor: pointer;
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
      margin: 0;
      padding: 0.75rem 1.5rem;
      text-align: center;
      text-decoration: none;
    }
    
    .btn-primary table td {
      background-color: rgba(242,53,53,1.00);
    }
    
    .btn-primary a {
      background-color: rgba(242,53,53,1.00);
      color: #ffffff;
    }
    
    .last {
      margin-bottom: 0;
    }
    
    .first {
      margin-top: 0;
    }
    
    .align-center {
      text-align: center;
    }
    
    .align-right {
      text-align: right;
    }
    
    .align-left {
      text-align: left;
    }
    
    .text-link {
      color: #0867ec !important;
      text-decoration: underline !important;
    }
    
    .clear {
      clear: both;
    }
    
    .mt0 {
      margin-top: 0;
    }
    
    .mb0 {
      margin-bottom: 0;
    }
    
    @media only screen and (max-width: 640px) {
      .main p,
      .main td,
      .main span {
        font-size: 16px !important;
      }
      .wrapper {
        padding: 8px !important;
      }
      .content {
        padding: 0 !important;
      }
      .container {
        padding: 0 !important;
        padding-top: 8px !important;
        width: 100% !important;
      }
      .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
      }
      .btn table {
        max-width: 100% !important;
        width: 100% !important;
      }
      .btn a {
        font-size: 16px !important;
        max-width: 100% !important;
        width: 100% !important;
      }
    }
    
    @media all {
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
      }
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
    }
    </style>
  </head>
  <body>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
      <tr>
        <td>&nbsp;</td>
        <td class="container">
          <div class="content">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main">
              <tr>
                  <td class="m_pad" style="width:100%;padding-right:0;padding-left:0">
                      <div class="m_alignment" align="center" style="line-height:10px">
                        <img
                          src="https://i.imgur.com/CMmpfIb.png"
                          class="m_big"
                          style="display:block;height:auto;border:0;width:200px;max-width:100%"
                          width="200"
                          alt="Logo Knury Knurów"
                          title="Logo Knury Knurów">
                      </div>
                  </td>
              </tr>
              <tr>
                <td class="wrapper">
                  <h1>Potwierdzenie rejestracji</h1>
                  <p>Dziękujemy! Jeśli widzisz tą wiadomość, to udało ci się zarejestrować na nasz turniej! Widzimy się już 
                    <span style="color: rgba(242,53,53,1.00); text-decoration: underline;">
                      25 Maja przed 9:00.
                    </span>
                  </p>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                    <tbody>
                      <tr>
                        <td align="left">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                              <tr style="width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                                <td>
                                    <a href="https://docs.google.com/document/d/1vrdedsYvmEmL90KNvQ-AFux41rrgNRvQBvbsvgIJFY4/edit?usp=sharing" target="_blank">Zapoznaj się z regulaminem</a>
                                 </td>
                                 <td>
                                    <a href="https://docs.google.com/document/d/16GRSGETppsOS_atuOv7r8kFEsf3aJARncbpASCWMy5s/edit?usp=sharing" target="_blank">Pobierz zgodę na udział</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              </table>
          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>`;

  const config = useRuntimeConfig();
  const data = await readBody(event);

  const message = {
    from: "3X3 · Knury Knurów <3x3@knuryknurow.pl>",
    to: `<${data.email}>`,
    subject: "🐷 Potwierdzenie rejestracji - Knurowski Streetball 2024",
    html: mail,
  };

  const confirmation = {
    from: "3X3 · Knury Knurów <3x3@knuryknurow.pl>",
    to: "Dump · Knury Knurów <dump@knuryknurow.pl>",
    subject: `Dump mail from ${data.email}`,
    text: JSON.stringify(data),
  };

  const transporter = nodemailer.createTransport(config.mailUrl);

  let status = 401;

  transporter.verify((error: any) => {
    if (error) {
      status = 401;
      console.log(error);
    }
    else {
      status = 200;
    }
  });

  await transporter.sendMail(message);
  await transporter.sendMail(confirmation);

  return {
    status: status,
  };
});
