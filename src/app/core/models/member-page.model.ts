import {MemberModel} from "./member.model";
import {PageableModel} from "./pageable.model";

export interface MemberPageModel {
  /*content: MemberModel[],
  pageable: PageableModel*/

  content: MemberModel[],
  pageable: PageableModel;
  last: boolean;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  empty: boolean;
}
