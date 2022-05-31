export interface ISkill {
  data: SkillData;
}

export interface SkillData {
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  stack_skill: StackSkill[];
}

export interface StackSkill {
  id: string;
  title: string;
  image: Image;
}

export interface Image {
  data: ImageData;
}

export interface ImageData {
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  url: string;
}
