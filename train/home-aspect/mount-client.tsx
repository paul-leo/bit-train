import { hydrateRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { HomeAspectApp, type HomeAspectAppProps } from './home-aspect-app.js';

export function mount(options: HomeAspectAppProps) {
  const localWindow = window as any;
  const gatewayUri = process.env.NODE_RUNTIME_URL;
  const client = new ApolloClient({
    uri: gatewayUri,
    cache: new InMemoryCache().restore(localWindow.__APOLLO_STATE__),
    ssrForceFetchDelay: 100
  });

  hydrateRoot(
    document.getElementById("root") as HTMLElement,
    <ApolloProvider client={client}>
      <BrowserRouter>
        <HomeAspectApp {...options} />
      </BrowserRouter>
    </ApolloProvider>
  );  
}        
