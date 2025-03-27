// api/texts.js
import { createClient } from '@supabase/supabase-js';

// Supabase 클라이언트 설정
const supabase = createClient(
  'https://rhfejoyhglhnxlqpwzgx.supabase.co', // Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoZmVqb3loZ2xobnhscXB3emd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNjMwNzQsImV4cCI6MjA1ODYzOTA3NH0.kD7UE-o8JphfW6fBCEUUo-5dl2ZM6ezMVi9YxE-LAZE' // Supabase public anon key
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    // Supabase에 데이터 삽입
    const { data, error } = await supabase
      .from('texts')
      .insert([{ text }]);

    if (error) {
      return res.status(500).json({ error: '서버 오류' });
    }

    return res.status(200).json({ message: '데이터 저장 성공' });
  }

  return res.status(405).json({ error: '지원되지 않는 메서드' });
}
