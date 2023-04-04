export interface ICustomFormConfig {
  config: IConfig;
}

export interface IConfig {
  formTitle: string;
  customContactObject: ICustomContactObject[];
  itemConfigList: IItemConfigList[];
  buttonSubmitLabel: string;
}

export interface ICustomContactObject {
  label: string;
  receivers: string[];
}

export interface IItemConfigList {
  type: string;
  label: string;
  allObjects: boolean;
  customObjects: string[];
  required?: boolean;
  listField?: string[];
}
