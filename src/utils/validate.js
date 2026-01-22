export function validateSubmission(body) {
  if (!body.name) return "Name is required.";
  if (!body.email) return "Email is required.";
  if (!body.service_type) return "Service type is required.";
  return null;
}

export function validateVideoSubmission(body) {
  if (!body.name) return "Name is required.";
  if (!body.email) return "Email is required.";
  if (!body.video_type) return "Video type is required.";
  return null;
}

