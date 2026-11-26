# Akshay Surulkar — AWS Cloud & DevOps Portfolio

A responsive static portfolio website served by a small Node.js/Express server so it can be deployed to AWS Elastic Beanstalk (Node.js platform).

## Project structure

```text
aws-cloud-devops-portfolio/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── package.json
├── server.js
├── Procfile
├── .gitignore
└── README.md
```

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm start
```

Open http://localhost:8080. Health endpoint: http://localhost:8080/health

## Deploy to AWS Elastic Beanstalk

### Option A — AWS Console (beginner-friendly)

1. Sign in to AWS Console and open **Elastic Beanstalk**.
2. Choose **Create application**.
3. Application name: `akshay-cloud-devops-portfolio`.
4. Environment tier: **Web server environment**.
5. Platform: **Node.js** (choose a currently supported Node.js platform branch).
6. Application code: upload a ZIP containing the project files at the ZIP root.
7. Create the environment and wait for its health to become **Ok**.
8. Open the environment URL to view the portfolio.

Important: upload the contents of this project folder as the ZIP root. Do not upload a ZIP that contains an extra outer folder level. Do not include `node_modules`; Elastic Beanstalk installs dependencies from `package.json`.

### Option B — Elastic Beanstalk CLI

Install and configure the EB CLI and AWS credentials first. From this project directory:

```bash
eb init
# Select your AWS region and Node.js platform when prompted.

eb create akshay-portfolio-env
eb status
eb open
```

For later updates:

```bash
eb deploy
```

## Before publishing

- Confirm that the phone number, email and LinkedIn URL in `public/index.html` are correct and intended to be public.
- The uploaded resume is included as `public/Akshay_Surulkar_Resume.docx` and linked from the hero section. Replace it whenever you update your CV.
- Review the AWS project wording: it is described as training and guided hands-on practice, not production AWS experience.
- Consider adding a custom domain and HTTPS after deployment.

## AWS cost and security notes

Elastic Beanstalk itself has no additional service charge, but the underlying resources (such as EC2, load balancer, storage, data transfer and public IPv4 where applicable) can incur charges. For a small portfolio, review the environment configuration and AWS pricing before creating it. Terminate the environment when it is no longer needed to avoid ongoing charges.

The `/health` endpoint returns a simple health response. No secrets, AWS credentials or database passwords belong in this static portfolio project.
