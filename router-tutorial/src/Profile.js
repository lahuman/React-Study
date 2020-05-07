import React from "react";

const profileData = {
  lahuman: {
    name: "lahuman",
    description: "Hello world",
  },
  homer: {
    name: "심슨",
    description: "심슨가족의 아빠임",
  },
};
export default ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};
