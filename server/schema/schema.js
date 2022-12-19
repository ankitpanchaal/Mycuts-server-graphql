const Project = require('../moduls/projectM')
const Client = require('../moduls/ClientM')

const {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
} = require('graphql')

const ClientType = new GraphQLObjectType({ //schema
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        number: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
});

const ProjectType = new GraphQLObjectType({ //schema
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLString },
        clientId: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(perent, args) {
                return clients.findById(parent.clientId)
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({ //resolver
    name: "RootQueryType",
    fields: {
        AllClients: {
            type: new GraphQLList(ClientType),
            resolve(perent, args) {
                return Client.find();
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(perent, args) {
                return Client.findById(args.id)
            }
        },

        Projects: {
            type: new GraphQLList(ProjectType),
            resolve(perent, args) {
                return Project.find();
            }
        },
        ProjectByID: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(perent, args) {
                return Project.findById(args.id)
            }
        },
    }
})

const MyMutations = new GraphQLObjectType({
    name: "Mutations",
    fields: {
        // Add
        addClient: {
            type: ClientType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const client = new Client({
                    name: args.name,
                    email: args.email,
                    phone: args.phone,
                });

                return client.save(); //Creating New Client
            }
        },
        // Delete
        deleteClient: {
            type: ClientType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return Client.findByIdAndRemove(args.id);
            }
        }
    }

})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: MyMutations
})