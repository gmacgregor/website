import Vue from "vue"
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

import App from "./App.vue"

Vue.config.productionTip = false

const GRAPH_CMS_API = "https://api-useast.graphcms.com/v1/cjkhrc6u40y5c01gmlpvsny01/master";

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: GRAPH_CMS_API }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
});

new Vue({
  render: h => h(App),
  provide: apolloProvider.provide()
}).$mount("#app")
