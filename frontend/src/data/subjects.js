// List of subjects shown in the Quiz hub.
// To add a subject: add a line here, then put its questions in
// data/defaultQuizzes/<id>.json (flat format — see subjectQuizStore.js).

export const SUBJECTS = [
  { id: "cse", label: "CSE Reviewer" },
  { id: "math", label: "Mathematics" },
];

export function getSubjectById(id) {
  return SUBJECTS.find((s) => s.id === id) || null;
}
