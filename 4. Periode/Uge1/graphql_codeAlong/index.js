import express from "express";
//import schema from "./schema";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./data/schema"
import cors from 'cors'

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("Graphql is amazing...")
})


app.use('/graphql', graphqlHTTP({ //Sætter graphqlHTTP middleware op
    schema: schema,
    graphiql: true,
}))

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'))