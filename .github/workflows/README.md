# GitHub Workflows

## Purpose
This directory contains GitHub Actions workflow configurations that automate CI/CD processes for the Stride client application.

## Contents
- `deploy.yml` - Handles deployment of the React application to S3 (app.gostride.co) when code is pushed to the main branch.

## Workflow Details

### deploy.yml
- **Trigger**: Pushes to the main branch
- **Environment**: Ubuntu with Node.js 18
- **Process**:
  1. Checks out the repository
  2. Sets up Node.js with npm cache
  3. Installs dependencies
  4. Builds the React application
  5. Deploys the build to S3 bucket (app.gostride.co)

## Guidelines for Changes
1. Always test workflow changes in a feature branch before merging to main
2. Ensure AWS credentials are properly configured in GitHub Secrets
3. When modifying deployment steps, verify that:
   - Build artifacts are correctly generated
   - S3 sync commands include appropriate flags (e.g., `--delete` for removing old files)
4. Consider adding additional steps for:
   - Testing before deployment
   - CloudFront cache invalidation (if applicable)
   - Deployment notifications

## Dependencies
- AWS credentials stored in GitHub Secrets:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
