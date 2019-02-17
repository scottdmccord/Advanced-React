// this file connects to the remote prisma db and gives us
// the ability to query it with JS

const { Prisma } = require('prisma-binding');

const db = new Prisma({
    // typeDefs - the generated prisma.graphql file
    // this is why we pull it down in the post deploy
    // hook.
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: true,
});

module.exports= db;