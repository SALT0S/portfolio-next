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
  image: ImageSkill;
}

export interface ImageSkill {
  data: ImageSkillData;
}

export interface ImageSkillData {
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  url: string;
}
