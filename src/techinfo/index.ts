import * as fs from 'fs';

export function run(context: any, req: any): void {
  const file = `${__dirname}/data/FunctionDeploy.MD`;
  context.res = {
    body : {
      data: fs.readFileSync(file, 'utf-8')
    }
  }

  context.done();
}