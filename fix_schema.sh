#!/bin/bash
KEY="standard_e42b1929fce28cf33fca686dfc6a1295dd00e9467d80c7ecf7c142556df884bb8a08036d682f9458b1f1c4bd6a3b1ffbcddd1cd896957f73d71a2679930bb066fb48bfbca7844a4c69aa75cfade0bc91b1a05fb175ccff2d13c240e66932590e82ab8448b387c6dace61c6be3a4adab8f104f9f46fb904e85c3c159924c43313"
PROJ="696075130002ba18c0ac"
API="https://cloud.appwrite.io/v1/databases/main/collections"

add_attr() {
  COLL=$1
  KEY_NAME=$2
  SIZE=$3
  echo "Adding $KEY_NAME to $COLL..."
  curl -s -X POST "$API/$COLL/attributes/string" \
    -H "X-Appwrite-Project: $PROJ" \
    -H "X-Appwrite-Key: $KEY" \
    -H "Content-Type: application/json" \
    -d "{\"key\": \"$KEY_NAME\", \"size\": $SIZE, \"required\": false}"
}

echo "--- Fixing PETITIONS Collection ---"
add_attr "petitions" "company" 255
add_attr "petitions" "division" 255
add_attr "petitions" "phone" 50
add_attr "petitions" "date" 64

echo "--- Fixing ANALYTICS_VISITS Collection ---"
add_attr "analytics_visits" "device_info" 255
add_attr "analytics_visits" "user_email" 255
add_attr "analytics_visits" "country" 100

echo "Done."
