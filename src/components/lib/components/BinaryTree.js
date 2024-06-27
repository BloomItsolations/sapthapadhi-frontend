import React from "react";
import BinaryTreeNode from "./BinaryTreeNode";
import "./BinaryTree.scss";

export default class BinaryTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: props.rootUser,
      selectedUserLevel: 0,
    };
  }
  render() {
    const {
      allUsers = [],
      imageFake,
      nameFake,
      maxDeep,
      setUser,
      renderNode,
      disableSideBar = false,
      bgSideBar = "#00b6eb",
      colorSideBar = "#ffffff",
      colorText,
    } = this.props;
    let rootUser = this.state.selectedUser;
    let selectedUserLevel = this.state.selectedUserLevel;

    const onClickUser = (userId) => {
      const user = allUsers.find((item) => item.id === userId);
      // console.log(allUsers);
      if (user) {
        let level = 0;
        let currentUser = user;
        while (currentUser) {
          currentUser = this.props.allUsers.find(
            // eslint-disable-next-line no-loop-func
            (user) =>
              user.leftChildId === currentUser.id ||
              user.rightChildId === currentUser.id
          );
          level++;
        }
        this.setState({
          selectedUser: user,
          selectedUserLevel: level,
        });
      }
    };
    return (
      <div
        id="binary-tree"
        style={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {
          (selectedUserLevel,
          disableSideBar,
          bgSideBar,
          colorSideBar && (
            <div
              className="leftSidebar"
              style={{ display: disableSideBar ? "none" : "block" }}
            >
              <div className="levels-wrap">
                <div
                  className="level level-0"
                  style={{ backgroundColor: bgSideBar }}
                >
                  <span className="level-label" style={{ color: colorSideBar }}>
                    Level {selectedUserLevel}
                  </span>
                </div>
                <div
                  className="level level-1"
                  style={{ backgroundColor: bgSideBar }}
                >
                  <span className="level-label" style={{ color: colorSideBar }}>
                    Level {selectedUserLevel + 1}
                  </span>
                </div>
                <div
                  className="level level-2"
                  style={{ backgroundColor: bgSideBar }}
                >
                  <span className="level-label" style={{ color: colorSideBar }}>
                    Level {selectedUserLevel + 2}
                  </span>
                </div>
                <div
                  className="level level-3"
                  style={{ backgroundColor: bgSideBar }}
                >
                  <span
                    className="level-label "
                    style={{ color: colorSideBar }}
                  >
                    Level {selectedUserLevel + 3}
                  </span>
                </div>
              </div>
            </div>
          ))
        }
        <div className="tree">
          <ul>
            <BinaryTreeNode
              allUsers={allUsers}
              user={rootUser}
              deep={1}
              setUser={setUser}
              maxDeep={maxDeep}
              renderNode={renderNode}
              onClick={onClickUser}
              colorText={colorText}
              imageFake={imageFake}
              nameFake={nameFake}
            />
          </ul>
        </div>
      </div>
    );
  }
}
