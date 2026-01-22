import { supabase } from "../config/supabase.js";
import { validateSubmission } from "../utils/validate.js";

export async function createSubmission(req, res) {
  const error = validateSubmission(req.body);
  if (error) return res.status(400).json({ error });

  const { name, email, service_type, description, references, deadline } = req.body;

  const reference_links = references;

  const { data, error: dbError } = await supabase
    .from("submissions")
    .insert([
      {
        name,
        email,
        service_type,
        description,
        reference_links,
        deadline
      }
    ])
    .select();

  if (dbError) {
    console.error("Supabase error:", dbError);
    return res.status(500).json({ error: "Database insert failed", details: dbError.message });
  }

  return res.json({
    message: "Submission received successfully",
    submission_id: data[0].id
  });
}
