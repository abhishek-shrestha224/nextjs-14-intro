export default async function Foo() {
  await wait(2000);
  return <div>Hello</div>;
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
