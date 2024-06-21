import {MemberModel} from "./member.model";

export interface SloganModel {
  id: number,
  member: MemberModel,
  text: string
}
