export function validateDesignRequest(body) {
  if (!body.name) return "Name is required.";
  if (!body.email) return "Email is required.";
  if (!body.design_type) return "Design type is required.";
  if (!body.description) return "Description is required.";
  return null;
}
