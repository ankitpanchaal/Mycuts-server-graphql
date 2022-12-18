const Project = require('../moduls/project')
const Client = require('../moduls/Client')

const {
    GraphQLObjectType,
    GraphQLID, GraphQLString,
    GraphQLSchema,
    GraphQLList
} = require('graphql')

const ClientType = new GraphQLObjectType({ //schema
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        number: { type: GraphQLString },
        Email: { type: GraphQLString },
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

module.exports = new GraphQLSchema({
    query: RootQuery
})