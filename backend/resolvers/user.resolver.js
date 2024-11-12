import { users } from "../dummyData/data.js";

const userResolver = {
    Query: {
        users: () => {
            return users
        }
    }
}


export default userResolver