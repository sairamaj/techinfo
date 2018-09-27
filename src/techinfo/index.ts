export function run(context: any, req: any): void {
  context.res = {
    body : {
      name: 'sai'
    }
  }

  context.done();
}