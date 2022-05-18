import { Fragment } from "react";
import Link from "next/link";
const newsPage = () => {
  return (
    <Fragment>
      <h1>This is news page</h1>
      <ul>
        <li>
          <Link href="news/nextjs">Next Js is amazing</Link>
        </li>
        <li>
          <Link href="news/google">Google engineer</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default newsPage;
