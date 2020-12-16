// 插件内用到的类型进行统一定义

// 右键菜单DOM属性定义
export type rightMenuAttribute = {
  rightMenuStatus: string; // 右键菜单显隐状态
  rightMenuTop: string; // 右键菜单显示位置: 左测距离
  rightMenuLeft: string; // 右键菜单显示位置: 顶部距离
  rightMenuList: Array<rightMenuObjType>; // 右键菜单列表数据: 文本列表、事件处理函数
};

// 右键菜单类型定义
export type rightMenuObjType = {
  id: number;
  text: string | { status: boolean; content: string }; // 文本数组
  handler: Record<string, (...params: any) => void>; // 事件处理函数
};

// 右键菜单参数类型定义
export type rightMenuType = {
  this: any; // 当前组件的this对象
  text: Array<string | { status: boolean; content: string }>; // 文本数组
  handler: Record<string, (...params: any) => void>; // 事件处理函数
};
