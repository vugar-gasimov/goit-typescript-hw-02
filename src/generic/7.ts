/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

// type RoleDescription = Record<UserRole, string>;

// const RoleDescription: RoleDescription = {
//   [UserRole.admin]: "Admin User",
//   [UserRole.editor]: "Editor User",
//   [UserRole.guest]: "Guest User",
// };

export {};
