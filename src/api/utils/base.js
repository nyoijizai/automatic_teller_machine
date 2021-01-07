const route = {
 IC: 'http://127.0.0.1:8787/v4',
 ID: 'http://127.0.0.1:24010/ZKIDROnline',
 test: 'http://192.168.3.194:30090/api',
 serve: 'http://lb1216331654.xicp.net',
};
const server = route.test;
const unionServer = route.IC;
const ecardServer = route.serve;

export { server as base, unionServer, ecardServer };
