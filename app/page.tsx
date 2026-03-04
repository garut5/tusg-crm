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
      alert("エラー: " + error.message)
    } else {
      alert("登録確認メールを確認してください")
    }
  }

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>TUSG CRM</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 8, width: 250 }}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: 8, width: 250 }}
      />
      <br /><br />

      <button
        onClick={signup}
        style={{
          padding: 10,
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        登録
      </button>
    </div>
  )
}
