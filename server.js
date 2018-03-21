import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser  from 'body-parser';
import { schema } from './data/schema';


const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
