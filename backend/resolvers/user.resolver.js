import { users } from "../dummyData/data.js";

const userResolver = {
    Query: {
      users: () => {
        return users;
      },
      user: (parent,args) =>{
        return users.find((user) => user._id === args.userId)
      }
    },

    Mutation:{
      signUp: (parent, { input }) => {
        console.log(input);
        
        const userObject = {
          username : input.username,
          password : input.password,
          gender : input.gender,
          name : input.name
        }
        
        users.push(userObject)
        console.log("This is the user object");
        console.log(userObject);
        console.log(users);

        return userObject
        
      }
    }
  };


export default userResolver