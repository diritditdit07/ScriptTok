import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://aubvjxglmgrqqcsnwodr.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1YnZqeGdsbWdycXFjc253b2RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2Nzk0NDksImV4cCI6MjA4ODI1NTQ0OX0.Youd7hpmQpaWVrZWytpcNHv5zHh1-vbAT8xv3mTZ65Y"

export const supabase = createClient(supabaseUrl, supabaseKey)