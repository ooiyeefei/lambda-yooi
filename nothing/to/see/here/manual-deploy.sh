#!/bin/sh
BUCKET_NAME=aws-codestar-[region-name]-[account-id]
STACK_NAME=serverless-lab

aws cloudformation package \
    --template-file ./template.yml \
    --s3-bucket $BUCKET_NAME \
    --s3-prefix manual-deploy \
    --output-template-file ./template.output.yml \
    --force-upload 

aws cloudformation deploy \
    --template-file ./template.output.yml \
    --stack-name $STACK_NAME\
    --capabilities CAPABILITY_IAM
    # --profile=$AWS_CRED_PROFILE
