import { connect } from "react-redux";
import { groupActions } from "../actions/groupActions";
import SideArea from "../components/sideArea";

const mapStateToProps = (state) => {
  return {
    groupList: state.groupList
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
   onAddGroup: (data) => {
    dispatch(groupActions.addGroup(data));
   }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideArea)