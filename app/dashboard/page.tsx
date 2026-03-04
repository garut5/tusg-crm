"use client"
import { useEffect } from "react"
import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()

      if (!data.user) {
        router.push("/")
      }
    }

    checkUser()
  }, [router])

  return (
    <div style={{ padding: 40 }}>
      <h1>ダッシュボード</h1>
      <p>ログイン成功 🎉</p>

      <br />

      <button
        onClick={async () => {
          await supabase.auth.signOut()
          router.push("/")
        }}
      >
        ログアウト
      </button>
    </div>
  )
}
