import { supabase } from "../config/supabase.js";
import { validateVideoSubmission } from "../utils/validate.js";

export async function createVideoSubmission(req, res) {
  // Validate request body
  const error = validateVideoSubmission(req.body);
  if (error) return res.status(400).json({ error });

  const { name, email, video_type, description, references, deadline } = req.body;

  // Match your naming style
  const reference_links = references;

  // Insert into Supabase table
  const { data, error: dbError } = await supabase
    .from("video_submissions")
    .insert([
      {
        name,
        email,
        video_type,
        description,
        reference_links,
        deadline
      }
    ])
    .select();

  if (dbError) {
    console.error("Supabase error:", dbError);
    return res.status(500).json({
      error: "Database insert failed",
      details: dbError.message
    });
  }

  return res.json({
    message: "Video submission received successfully",
    submission_id: data[0].id
  });
}
