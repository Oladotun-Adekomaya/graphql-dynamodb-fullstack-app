import { CreateTableCommand, DynamoDBClient, PutItemCommand , ListTablesCommand} from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({endpoint: "http://localhost:8000"});
const {createServer} = require('dynamodb-admin');

const dynamodb = new AWS.DynamoDB();


const app = createServer(dynamodb, client);

const host = 'localhost';
const port = 8001;
const server = app.listen(port, host);
server.on('listening', () => {
  const address = server.address();
  console.log(`  listening on http://${address.address}:${address.port}`);
});

const main = async () => {
  const command = new CreateTableCommand({
    TableName: "Users",
    // For more information about data types,
    // see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes and
    // https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.LowLevelAPI.html#Programming.LowLevelAPI.DataTypeDescriptors
    AttributeDefinitions: [
      {
        AttributeName: "Name",
        AttributeType: "S",
      },
    ],
    KeySchema: [
      {
        AttributeName: "Name",
        KeyType: "HASH",
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  });

  const response = await client.send(command);
  console.log(response);
  return response;
};

// main()

const input = {
  "Item": {
    "Name": {
      "S": "Oladotun 2"
    },
    "Artist": {
      "S": "No One You Know"
    },
    "SongTitle": {
      "S": "Call Me Today"
    }
  },
  "ReturnConsumedCapacity": "TOTAL",
  "TableName": "Users"
};
const command = new PutItemCommand(input);
const response = await client.send(command);

// const command = new ListTablesCommand({});
// const response = await client.send(command);

console.log(response);




