export const groupActionNames = {
 ADD_GROUP: "ADD_GROUP",
 SELECT_GROUP: "SELECT_GROUP",
 EDIT_GROUP: "EDIT_GROUP",
 DELETE_GROUP: "DELETE_GROUP"
}

export const groupActions = {
 addGroup: (data, groupId) => {
   return {
     type: groupActionNames.ADD_GROUP,
     payload: {
       data: data,
       groupId: groupId
     }
   }
 },
 selectGroup: (id) => {
   return {
     typr: groupActionNames.SELECT_GROUP,
     payload: {
       id: id
     }
   }
 },
 editGroup: (id, groupName) => {
   return {
     type: groupActionNames.EDIT_GROUP,
     payload: {
       id: id,
       groupName: groupName
     }
   }
 },
 deleteGroup: (id) => {
   return {

   }
 }
}