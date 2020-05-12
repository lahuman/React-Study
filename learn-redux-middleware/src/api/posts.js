const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// { id, title, body}
const posts = [
  { id: 1, title: "월요일", body: "아마 바쁘지 않을까" },
  { id: 2, title: "화요일", body: "성급해 보이지 안 그래" },
  { id: 3, title: "수요일", body: "뭔가 어정쩡한 느낌" },
  { id: 4, title: "목요일", body: "그냥 내가 왠지 싫어" },
  { id: 5, title: "금요일", body: "우 금요일에 시간 어때요" },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return fosts.find((post) => post.id === id);
};
