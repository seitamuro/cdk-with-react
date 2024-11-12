#!/bin/bash

set -eu

STACK_NAME="CdkStack"

function extract_value {
  echo $1 | jq -r ".Stacks[0].Outputs[] | select(.OutputKey==\"$2\") | .OutputValue"
}

stack_output=`aws cloudformation describe-stacks --stack-name $STACK_NAME --output json`

export VITE_API_ENDPOINT=`extract_value "$stack_output" "ApiEndpoint"`