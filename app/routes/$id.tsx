import { defer } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function loader() {
  return defer({
    done: Math.random(),
    deferredRandom: wait(2000).then(() => Math.random()),
  });
}

export default function Index() {
  const { deferredRandom, done } = useLoaderData<typeof loader>();
  return (
    <>
      <Link to={`/${done}`}>Reload</Link>
      <div>Done: {done}</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={deferredRandom}>
          {(random) => <div>Random: {random}</div>}
        </Await>
      </Suspense>
    </>
  );
}
