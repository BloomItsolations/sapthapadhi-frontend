import { People } from "@mui/icons-material";
import React from "react";

export default class BinaryTreeNode extends React.Component {
  render() {
    const {
      user,
      allUsers,
      deep,
      maxDeep = 4,
      renderDetail,
      renderNode,
      onClick,
      colorText = "#333",
      imageFake = "https://i.imgur.com/AFj9jns.png",
      nameFake = "",
    } = this.props;
    const fakeUser = {
      id: "null",
      username: nameFake,
      leftChildId: null,
      rightChildId: null,
      image: imageFake,
    };
    let leftChild = allUsers.find((item) => item.id === user.leftChildId);
    if (!leftChild) {
      leftChild = fakeUser;
    }
    let rightChild = allUsers.find((item) => item.id === user.rightChildId);
    if (!rightChild) {
      rightChild = fakeUser;
    }
    return (
      <section>
        <div className="row">
          <div className="col-lg-12">
            <li>
              {colorText && (
                <button
                  onClick={() => {
                    onClick && onClick(user.id);
                  }}
                  style={{
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    padding: 0,
                  }}
                >
                  {renderNode ? (
                    renderNode(user)
                  ) : (
                    <div className="distributor-wrap">
                      <div className="avatar">
                        <People />
                      </div>
                      <span className="name" style={{ color: colorText }}>
                        {user?.name}
                      </span>
                      <span className="name" style={{ color: colorText }}>
                        {user?.phone}
                      </span>
                    </div>
                  )}
                </button>
              )}

              {deep < maxDeep && (
                <ul>
                  <BinaryTreeNode
                    deep={deep + 1}
                    maxDeep={maxDeep}
                    allUsers={allUsers}
                    user={leftChild}
                    renderDetail={renderDetail}
                    renderNode={renderNode}
                    onClick={onClick}
                    colorText={colorText}
                    imageFake={imageFake}
                    nameFake={nameFake}
                  />
                  <BinaryTreeNode
                    deep={deep + 1}
                    maxDeep={maxDeep}
                    allUsers={allUsers}
                    renderDetail={renderDetail}
                    renderNode={renderNode}
                    user={rightChild}
                    onClick={onClick}
                    colorText={colorText}
                    imageFake={imageFake}
                    nameFake={nameFake}
                  />
                </ul>
              )}
            </li>
          </div>
        </div>
      </section>
    );
  }
}
