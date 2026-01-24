import { supabase } from "../config/supabase.js";
import { validatePhotography } from "../utils/validatePhotography.js";

export async function createPhotographySubmission(req, res) {
  const error = validatePhotography(req.body);
  if (error) return res.status(400).json({ error });

  const {
    name,
    email,
    shoot_type,
    description,
    references,
    date
  } = req.body;

  const { data, error: dbError } = await supabase
    .from("photography_submissions")
    .insert([
      {
        name,
        email,
        shoot_type,
        description,
        reference_links: references,
        preferred_date: date
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
    message: "Photography request submitted successfully",
    submission_id: data[0].id
  });
}
