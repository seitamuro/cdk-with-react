import { Button, useAuthenticator } from "@aws-amplify/ui-react"

export const Header = () => {
  const { user, signOut } = useAuthenticator()

  return (
    <header className="flex justify-between items-center px-4 py-2 gap-4" style={{ borderBottom: "1px solid black" }}>
      <h1 className="flex-shrink-0 text-red-500">Header</h1>
      <div className="flex items-center gap-4">
        <span className="min-w-0">{user.userId}</span>
        {user && (
          <Button className="whitespace-nowrap" onClick={signOut}>Sign Out</Button>
        )}
      </div>
    </header>
  )
}