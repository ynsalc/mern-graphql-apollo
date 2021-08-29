const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const ArticleModel = require("./models/ArticleModel");

const DB_URI =
  "mongodb+srv://blogproje:test1234@blogcluster.hbeyw.mongodb.net/blogDB?retryWrites=true&w=majority";

const typeDefs = gql`
  type Article {
    id: ID!
    title: String!
    content: String
  }

  type Query {
    getArticles: [Article]!
    getArticleById(id: ID!): Article!
  }

  type Mutation {
    addArticle(title: String!, content: String!): Article!
    deleteArticle(id:ID!):String!
  }
`;

const resolvers = {
  Query: {
    async getArticles() {
      const article = ArticleModel.find();
      return article;
    },
    async getArticleById(parent, args) {
      try {
        const { id } = args;
        return await ArticleModel.findById(id);
      } catch (error) {
        throw new error();
      }
    },
  },
  Mutation: {
    addArticle: async (parent, args) => {
      try {
        const article = {
          title: args.title,
          content: args.content,
        };
        return await ArticleModel.create(article);
      } catch (error) {
        throw new error();
      }
    },
    deleteArticle: async(_,{id}) => {
      try {
        const deleted = await ArticleModel.findById(id);
        await deleted.delete();
        return 'Silme İşlemi Başarılı';
      } catch (error) {
        throw new error;
      }
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongodb bağlantısı başarılı");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`server ${res.url} adresinde çalışıyor..`);
  });
