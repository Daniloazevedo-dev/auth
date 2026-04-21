import { useSupabaseClient } from '#imports'

export function useAuth() {
  const supabase = useSupabaseClient()

  async function login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
  }

  async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  return { login, logout }
}
