#!/bin/bash
set -e

./scripts/wait-for-it.sh -t 240 chrome:5555 && ./scripts/wait-for-it.sh -t 240 firefox:5555

if [ $? -ne 0 ]
then
  echo "Failure: Timed out to connect to selenium hub." >&2
  exit 1
fi

# run tests and get the exit code
# ./node_modules/.bin/wdio --spec || EXIT_CODE=$?
./node_modules/.bin/wdio wdio.docker.conf.js || EXIT_CODE=$?

# generate report
# npm run report

exit $EXIT_CODE