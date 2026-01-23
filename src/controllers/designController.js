import { supabase } from "../config/supabase.js";
import { validateDesignRequest } from "../utils/designValidate.js";

export async function createDesignRequest(req, res) {
  const error = validateDesignRequest(req.body);
  if (error) return res.status(400).json({ error });

  const { name, email, design_type, description, references, deadline } = req.body;

  const reference_links = references;

  const { data, error: dbError } = await supabase
    .from("design_requests")
    .insert([
      {
        name,
        email,
        design_type,
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
    message: "Design Request submitted successfully",
    request_id: data[0].id
  });
}
