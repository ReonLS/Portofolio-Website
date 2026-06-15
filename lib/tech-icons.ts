import type { IconType } from "react-icons";
import { SiGo, SiMysql, SiMariadb, SiDocker, SiSwagger, SiJsonwebtokens, SiGit, SiPostman } from "react-icons/si";
import { FiShield, FiServer } from "react-icons/fi";
import { TbApi, TbTestPipe, TbDatabase } from "react-icons/tb";

const iconMap: Record<string, IconType> = {
  "go (golang)": SiGo,
  "go": SiGo,
  "golang": SiGo,
  "mysql": SiMysql,
  "mariadb": SiMariadb,
  "docker": SiDocker,
  "docker & compose": SiDocker,
  "swagger": SiSwagger,
  "jwt": SiJsonwebtokens,
  "git": SiGit,
  "postman": SiPostman,
  "rbac": FiShield,
  "rest api": TbApi,
  "rest": TbApi,
  "unit testing": TbTestPipe,
  "sql": TbDatabase,
  "ivanti itsm": FiServer,
};

export function getTechIcon(name: string): IconType | undefined {
  return iconMap[name.toLowerCase().trim()];
}
