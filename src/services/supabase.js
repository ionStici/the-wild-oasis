import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://keauzsuxcpmnzeqtytml.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlYXV6c3V4Y3BtbnplcXR5dG1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1NzI4MTEsImV4cCI6MjAzMzE0ODgxMX0.f4OiBChezt5bFyISFc3hlF555YUgARA8ND-82biLg_w';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
