
// process is declared in env.d.ts file as any
// so typescript will not complain about it
if (process.env.USER){
  console.log(process.env.USER)
}