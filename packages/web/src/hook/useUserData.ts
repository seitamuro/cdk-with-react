import { getCurrentUser } from "aws-amplify/auth"
import { useEffect, useState } from "react"

export const useUserData = () => {

  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const fetcher = async () => {
      const { userId} = await getCurrentUser()
      setUserId(userId)
    }
    fetcher()
  })

  return {
    userId,
  }
}