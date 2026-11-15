const files = import.meta.glob("./assets/quiz/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

export function quizImageUrl(src) {
  return files[`./assets/quiz/${src}`] || "";
}

export function allQuizImageUrls() {
  return Object.values(files).filter(Boolean);
}
