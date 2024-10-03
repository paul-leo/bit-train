import ReactDOMServer from 'react-dom/server';
// eslint-disable-next-line import/extensions
import { getDataFromTree } from '@apollo/client/react/ssr/index.js';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// eslint-disable-next-line import/extensions
import { StaticRouter } from 'react-router-dom/server.js';
import {
  HomeAspectApp,
  HomeAspectAppProps,
} from './home-aspect-app.js';

export async function mountServer(
  path: string,
  cookie: string,
  options: HomeAspectAppProps
) {
  const gatewayUri = process.env.NODE_RUNTIME_URL;
  const client = new ApolloClient({
    uri: gatewayUri,
    cache: new InMemoryCache(),
    ssrMode: true,
    credentials: 'same-origin',
    headers: {
      cookie,
    },
  });

  const App = () => {
    return (
      <ApolloProvider client={client}>
        <StaticRouter location={path}>
          <HomeAspectApp {...options} />
        </StaticRouter>
      </ApolloProvider>
    );
  };

  
  const content = await getDataFromTree(<App />);
  const initialState = client.extract();

  return ReactDOMServer.renderToString(
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(
            initialState
          ).replace(/</g, '\u003c')};`,
        }}
      />
    </>
  );
}
