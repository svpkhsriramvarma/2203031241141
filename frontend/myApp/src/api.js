export async function getQuestions() {
  const res = await fetch('http://localhost:5000/api/questions');
  if (!res.ok) throw new Error("Failed to fetch");
  return await res.json();
}