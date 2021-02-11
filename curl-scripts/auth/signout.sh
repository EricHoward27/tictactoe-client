#!/bin/bash
API="https://tic-tac-toe-api-development.herokuapp.com" \
URL_PATH="/sign-out"
curl "${API}${URL_PATH}/" \
--include \
--request DELETE \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}"

echo
