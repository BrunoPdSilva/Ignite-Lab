import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o41gb60dn701xrd6nq5qi6/master',
  cache: new InMemoryCache()
});