import sql from "better-sqlite3";

const db = sql("meals.db");

export function getAllMeals() {
  const stmt = db.prepare("SELECT * FROM meals");
  return stmt.all();
}

export function getMealBySlug(slug) {
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?");
  return stmt.get(slug);
}

export function addMeal(meal) {
  const { title, description, slug } = meal;
  const stmt = db.prepare(
    "INSERT INTO meals (title, description, slug) VALUES (?, ?, ?)",
  );
  const info = stmt.run(title, description, slug);
  return { id: info.lastInsertRowid, ...meal };
}
