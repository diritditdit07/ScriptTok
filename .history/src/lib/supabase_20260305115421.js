import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pgmbnnaikoljbisrvttb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnbWJubmFpa29samJpc3J2dHRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2ODAxMzAsImV4cCI6MjA4ODI1NjEzMH0.UrLiMhGWHLKZ7_Jv1UFDuAaFTbcVf1QPMaxq3syrrNE"

export const supabase = createClient(supabaseUrl, supabaseKey)