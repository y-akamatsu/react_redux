const initialState = {
  groupList: [
    {
      id: "inbox",
      label: "受信箱"
    },
    {
      id: "group-1",
      label: "グループ１"
    }
  ],
  todoList: {
    "inbox": [
      {
        id: "item-1",
        label: "Todo1",
        completed: false
      },
      {
        id: "item-2",
        label: "Todo2",
        completed: false
      }
    ],
    "group-1": [
      {
        id: "item-3",
        label: "Todo3",
        completed: false
      },
      {
        id: "item-4",
        label: "Todo4",
        completed: false
      },
      {
        id: "item-5",
        label: "Todo5",
        completed: false
      }
    ]
  },
  todoCount: 4,
  groupCount: 1,
  selectedGroup: "group-1"
}

const reducer = (state = initialState, action) => {
  return state;
}

export default reducer;