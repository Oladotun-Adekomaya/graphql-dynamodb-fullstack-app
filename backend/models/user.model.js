import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";



const userTableInput = {
    "AttributeDefinitions": [
        {
            "AttributeName": "id",
            "AttributeType": "S"
        },
        {
            "AttributeName": "Name",
            "AttributeType": "S"
        },
        {
            "AttributeName": "username",
            "AttributeType": "S"
        },
        {
            "AttributeName": "password",
            "AttributeType": "S"
        },
        {
            "AttributeName": "profilePicture",
            "AttributeType": "S"
        },
        {
            "AttributeName": "gender",
            "AttributeType": "S"
        },
    ],
    
    "KeySchema": [
        {
            "AttributeName": "id",
            "AttributeType": "Hash"
        },
        {
            "AttributeName": "Name",
            "AttributeType": "Hash"
        },
    ],
    
    "ProvisionedThroughput": {
        "ReadCapacityUnits": 5,
        "WriteCapacityUnits": 5
      },
    
    "TableName": "Music"
}

const command = new CreateTableCommand(userTableInput);

export default command;