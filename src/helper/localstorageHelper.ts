const TOKEN_KEY = 'id'
const USER_KEY = 'username'

// TOKEN

export function setToken (token: string) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function getToken () {
  return localStorage.getItem(TOKEN_KEY)
}

export function removeToken () {
  localStorage.removeItem(TOKEN_KEY)
}

// USER

export function setUser (user: string) {
  localStorage.setItem(USER_KEY, user)
}

export function getUser () {
  return localStorage.getItem(USER_KEY)
}

export function removeUser () {
  localStorage.removeItem(USER_KEY)
}
