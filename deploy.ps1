npm run build
sam deploy `
    --template-file .aws-sam/build/template.yaml `
    --stack-name my-stack-name `
    --s3-bucket my-serverless-deploy-bucket `
    --s3-prefix my-stack-prefix/ `
    --region eu-west-1 `
    --profile private `
    --capabilities CAPABILITY_IAM `
    --no-fail-on-empty-changeset