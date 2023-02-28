import { defer } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function loader() {
  return defer({
    deferredRandom: wait(2000).then(() => Math.random()),
  });
}

export default function Index() {
  const { deferredRandom } = useLoaderData<typeof loader>();
  return (
    <>
      <Link to="/">Reload</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={deferredRandom}>
          {(random) => <div>Random: {random}</div>}
        </Await>
      </Suspense>
    </>
  );
}
