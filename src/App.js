import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import AddArticle from './components/AddArticle';
import ArticleList from './components/ArticleList';
import Navigate from './components/Navigate';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import ArticleDetail from './components/ArticleDetail';

const client = new ApolloClient({
  uri:'http://localhost:5000',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navigate />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ArticleList} />
            <Route path="/add" exact component={AddArticle} />
            <Route path="/article/:id" exact component={ArticleDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
