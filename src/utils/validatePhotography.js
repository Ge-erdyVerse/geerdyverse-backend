export function validatePhotography(body) {
  if (!body.name) return "Name is required.";
  if (!body.email) return "Email is required.";
  if (!body.shoot_type) return "Shoot type is required.";
  if (!body.description) return "Description is required.";

  return null;
}
