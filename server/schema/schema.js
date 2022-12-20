const Shop = require('../moduls/Shop')
const Service = require('../moduls/serivces')
const Rating = require('../moduls/rating')

const {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt,
} = require('graphql')

const ShopType = new GraphQLObjectType({ //schema
    name: 'Shop',
    fields: () => ({
        id: { type: GraphQLID },
        ShopID: { type: GraphQLID },
        ShopName: { type: GraphQLString },
        phone: { type: GraphQLString },
        email: { type: GraphQLString },
        Image: { type: GraphQLString },
        OwnerName: { type: GraphQLString },
        description: { type: GraphQLString },
        Location: { type: GraphQLString },
        OpenTime: { type: GraphQLString },
        CloseTime: { type: GraphQLString },

        Queue: { type: GraphQLInt },
        WaitingTime: { type: GraphQLInt },
        walk: { type: GraphQLInt },
        isNearest: { type: GraphQLBoolean },
        isTop: { type: GraphQLBoolean },
        isMan: { type: GraphQLBoolean },
        isWoman: { type: GraphQLBoolean },
        // itsSerive: {
        //     type: ServiceType,
        //     resolve(parent, args) {
        //         return Service.findById(parent.ShopID)
        //     }
        // }
    })
});

const ServiceType = new GraphQLObjectType({
    name: 'Service',
    fields: () => ({
        id: { type: GraphQLID },
        ShopID: { type: GraphQLID },
        title: { type: GraphQLString },
        price: { type: GraphQLString },
        Image: { type: GraphQLString },
        description: { type: GraphQLString },
        tag: { type: GraphQLString },
        offerDis: { type: GraphQLString },
        offer: { type: GraphQLBoolean },
    })
});

const RatingType = new GraphQLObjectType({
    name: 'rating',
    fields: () => ({
        id: { type: GraphQLID },
        ShopID: { type: GraphQLID },
        service: { type: GraphQLInt },
        facility: { type: GraphQLInt },
        behaviour: { type: GraphQLInt },
        CostomerExperience: { type: GraphQLInt },
    })
});

const RootQuery = new GraphQLObjectType({ //resolver
    name: "RootQueryType",
    fields: {
        AllServices: {
            type: new GraphQLList(ServiceType),
            resolve(perent, args) {
                return Service.find();
            }
        },
        AllShopes: {
            type: new GraphQLList(ShopType),
            resolve(perent, args) {
                return Shop.find();
            }
        },
        AllRating: {
            type: new GraphQLList(RatingType),
            resolve(perent, args) {
                return Rating.find();
            }
        },
        ServicesById: {
            type: new GraphQLList(ServiceType),
            args: { id: { type: GraphQLID } },
            resolve(perent, args) {
                return Service.findById(args.id)
            }
        },
        RatingById: {
            type: new GraphQLList(RatingType),
            args: { id: { type: GraphQLID } },
            resolve(perent, args) {
                return Rating.findById(args.id)
            }
        },
        ShopeById: {
            type: new GraphQLList(ShopType),
            args: { id: { type: GraphQLID } },
            resolve(perent, args) {
                return Shop.findById(args.id)
            }
        },
    }
})

const MyMutations = new GraphQLObjectType({
    name: "Mutations",
    fields: {
        // Add
        addServices: {
            type: ServiceType,
            args: {
                ShopID: { type: new GraphQLNonNull(GraphQLID) },
                title: { type: new GraphQLNonNull(GraphQLString) },
                price: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                Image: { type: new GraphQLNonNull(GraphQLString) },
                tag: { type: new GraphQLNonNull(GraphQLString) },
                offerDis: { type: new GraphQLNonNull(GraphQLString) },
                offer: { type: new GraphQLNonNull(GraphQLBoolean) },
            },
            resolve(parent, args) {
                const NewSerive = new Service({
                    ShopID: args.ShopID,
                    title: args.title,
                    Image: args.Image,
                    description: args.description,
                    tag: args.tag,
                    price: args.price,
                    offerDis: args.offerDis,
                    offer: args.offer,
                });

                return NewSerive.save(); //Creating New Client
            }
        },
        // Add rating
        addRating: {
            type: RatingType,
            args: {
                ShopID: { type: new GraphQLNonNull(GraphQLID) },
                service: { type: GraphQLInt },
                facility: { type: GraphQLInt },
                behaviour: { type: GraphQLInt },
                CostomerExperience: { type: GraphQLInt },
            },
            resolve(parent, args) {
                const NewRating = new Rating({
                    ShopID: args.ShopID,
                    service: args.service,
                    facility: args.facility,
                    behaviour: args.behaviour,
                    CostomerExperience: args.CostomerExperience,
                });

                return NewRating.save(); //Creating New Client
            }
        },
        // add shop
        addShop: {
            type: ShopType,
            args: {
                ShopName: { type: new GraphQLNonNull(GraphQLString) },
                ShopID: { type: new GraphQLNonNull(GraphQLID) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                Image: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLString },
                OwnerName: { type: new GraphQLNonNull(GraphQLString) },
                Location: { type: new GraphQLNonNull(GraphQLString) },
                OpenTime: { type: new GraphQLNonNull(GraphQLString) },
                CloseTime: { type: new GraphQLNonNull(GraphQLString) },

                Queue: { type: GraphQLInt },
                WaitingTime: { type: GraphQLInt },
                walk: { type: GraphQLInt },
                isNearest: { type: GraphQLBoolean },
                isTop: { type: GraphQLBoolean },
                isMan: { type: GraphQLBoolean },
                isWoman: { type: GraphQLBoolean },
            },
            resolve(parent, args) {
                const NewShop = new Shop({
                    ShopName: args.ShopName,
                    ShopID: args.ShopID,
                    phone: args.phone,
                    email: args.email,
                    Image: args.Image,
                    description: args.description,
                    OwnerName: args.OwnerName,
                    Location: args.Location,
                    OpenTime: args.OpenTime,
                    CloseTime: args.CloseTime,
                    isNearest: args.isNearest,
                    isTop: args.isTop,
                    isMan: args.isMan,
                    isWoman: args.isWoman,
                    Queue: args.Queue,
                    WaitingTime: args.WaitingTime,
                    walk: args.walk,

                });

                return NewShop.save(); //Creating New Client
            }
        },
        // Delete
        DeletService: {
            type: ServiceType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return Service.findByIdAndRemove(args.id);
            }
        },
        // Delete shop
        DeletShop: {
            type: ShopType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return Shop.findByIdAndRemove(args.id);
            }
        }
    }

})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: MyMutations
})