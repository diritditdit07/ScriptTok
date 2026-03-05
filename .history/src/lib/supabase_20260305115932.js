import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pgmbnnaikoljbisrvttb.supabase.co"
const supabaseKey = "sb_publishable_Y55m1okbrc0PqpfMxd_WYQ_ySXWcIpS"

export const supabase = createClient(supabaseUrl, supabaseKey)