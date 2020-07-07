npm run rebuild
sam deploy `
    --template-file template.yml `
    --stack-name aws-lambda-nodejs `
    --s3-bucket serverless-source-code-bucket `
    --s3-prefix my-stack-prefix/ `
    --region eu-west-1 `
    --capabilities CAPABILITY_IAM `
    --no-fail-on-empty-changeset