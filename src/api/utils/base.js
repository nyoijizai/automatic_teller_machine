const route = {
 IC: '',
 ID: '',
 serve: '',
 test: '',
};
const server =
 process.env.NODE_ENV === 'development' ? route.test : process.env.VUE_APP_BASE;
const unionServer = route.IC;
const cardServer = route.ID;

export { server as base, unionServer, cardServer };
