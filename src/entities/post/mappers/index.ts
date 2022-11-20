import { IPostDto, IPostListItemUi } from "entities/post/types";

class PostMapper {
  public dtoToDomain() {}

  public domainToUi() {}

  public dtoToUi(postDto: IPostDto): IPostListItemUi {
    return {
      title: postDto.title,
      some_other_ui_specific_prop: true,
    };
  }
}

export const postMapper = new PostMapper();
