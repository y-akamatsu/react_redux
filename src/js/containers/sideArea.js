import { connect } from "react-redux";
import { groupActions } from "../actions/groupActions";
import SideArea from "../components/sideArea";

const mapStateToProps = (state) => {
  return {
    groupList: state.groupReducer.groupList,
    groupCount: state.groupReducer.groupCount
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
   onAddGroup: (data, groupId) => {
      dispatch(groupActions.addGroup(data, groupId));
   }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideArea)