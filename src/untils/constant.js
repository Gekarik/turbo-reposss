const STATUS_INTRO = "intro";
const STATUS_STUDY = "study";
const STATUS_PROJECT = "project";
const STATUS_INTERVIEW = "interview";
const STATUS_DONE = "done";

export const statuses = [
  STATUS_INTRO,
  STATUS_STUDY,
  STATUS_PROJECT,
  STATUS_INTERVIEW,
  STATUS_DONE,
];

export const status_aliases = {
  [STATUS_INTRO]: "2 недели",
  [STATUS_STUDY]: "Обучение",
  [STATUS_PROJECT]: "Проект",
  [STATUS_INTERVIEW]: "Собеседование",
  [STATUS_DONE]: "Принят",
};
