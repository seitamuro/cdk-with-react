#!/bin/bash

set -eu

STACK_NAME="WebApplicationStack"

function extract_value {
  echo $1 | jq -r ".Stacks[0].Outputs[] | select(.OutputKey==\"$2\") | .OutputValue"
}

stack_output=`aws cloudformation describe-stacks --stack-name $STACK_NAME --output json`

export VITE_API_ENDPOINT=`extract_value "$stack_output" "ApiEndpoint"`
export VITE_USER_POOL_ID=`extract_value "$stack_output" "UserPoolId"`
export VITE_USER_CLIENT_ID=`extract_value "$stack_output" "ClientId"`
export VITE_USER_POOL_CLIENT_ID=`extract_value "$stack_output" "UserPoolClientId"`