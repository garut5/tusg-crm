"use client"
import { createClient } from "@supabase/supabase-js"
import { useState } from "react"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert("登録失敗")
    } else {
      alert("登録確認メールを確認してください")
    }
  }

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert("ログイン失敗")
    } else {
      alert("ログイン成功")
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>TUSG CRM</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={signup}>登録</button>

      <br /><br />

      <button onClick={login}>ログイン</button>
    </div>
  )
}
