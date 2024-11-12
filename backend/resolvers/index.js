import { mergeResolvers, mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolver.js";
import transactionResolver from "./transaction.resolver.js";


const mergeResolvers = mergeResolvers([userResolver, transactionResolver])

export default mergeResolvers;