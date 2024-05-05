let auto_id_gen = 0;
const blogs_repo = [
  {
    id: 1,
    title: "My First Blog",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

for (auto_id_gen; auto_id_gen <= 0; auto_id_gen++) {
  blogs_repo.push({
    id: auto_id_gen + 2,
    title: "",
    content: "",
  });
}
