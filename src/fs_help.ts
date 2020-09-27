import * as fs from 'fs';
import { dirname } from 'path';

export function mkdirs(path: string): Promise<boolean> {
  return new Promise<boolean>(rs => {
    fs.exists(path, async (exists) => {
      if(!exists) {
        
        let parent = dirname(path);

        if(!exists) await mkdirs(parent);
        fs.mkdir(path, () => rs(true));

      }
      else rs(false);
    })
  });
}

export function mkdirsSync(path: string): boolean {
  if(!fs.existsSync(path)) {
    
    let parent = dirname(path);

    mkdirsSync(parent);
    fs.mkdirSync(path);
    return true;

  }
  return false;
}