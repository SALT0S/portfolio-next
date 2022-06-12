export interface ISkill {
  attributes: SkillData;
}

export interface SkillData {
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
