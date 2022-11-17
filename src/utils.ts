import fs from 'fs';

export function Engineer ({ id = null, title = null, favorite = null } = {}) {
  this.id = id
  this.title = title
  this.favorite = favorite
};

export function getServers(dir: string, list: string | string[]): string[] {
  const servers: string[] = [];

  if (list === 'all') {
    // sync
    fs.readdirSync(dir).forEach((file: string) => {
      servers.push(`${file}`);
    });
  } else if (list === 'object') {
    // sync
    fs.readdirSync(dir).forEach((file: string) => {
      if (file.includes(list)) {
        servers.push(`${file}`);
      }
    });
  } else if (list.length) {
    for (const l of list) {
      servers.push(`${l}.ts`);
    }
  } else {
    servers.push(`${list}.ts`);
  }

  return servers;
}