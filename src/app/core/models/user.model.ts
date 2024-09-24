export interface UserModel {
  id: number,
  userName: string,
  email: string,
  password: string,
  dateIn: Date,
  dateUp: Date,
  status: boolean,
  role: string[]
}
