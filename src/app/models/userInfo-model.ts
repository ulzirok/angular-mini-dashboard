export interface IUser {
  id?: string,
  name: string,
  email: string,
  fakePassword: string,
  token?: string,
  about?: string,
  photo?: string
}