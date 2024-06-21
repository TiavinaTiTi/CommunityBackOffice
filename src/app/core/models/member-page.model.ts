import {MemberModel} from "./member.model";
import {PageableModel} from "./pageable.model";

export interface MemberPageModel {
  content: MemberModel[],
  pageable: PageableModel
}
