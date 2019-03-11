export const groupActionNAmes = {
 ADD_GROUP: "ADD_GROUP"
}

export const groupActions = {
 addGroup: (data) => {
   return {
     type: grouoActionName.ADD_GROUP,
     payload: {
       data: data
     }
   }
 }
}