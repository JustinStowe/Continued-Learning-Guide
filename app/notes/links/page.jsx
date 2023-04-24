import React from "react";
import Link from "next/link";
function YoutubeLinks() {
  return (
    <div>
      <h1>Some Helpful Links</h1>
      <ul>
        <li>
          <Link href="https://www.youtube.com/watch?v=mTz0GXj8NN0&t=0s">
            Intro into NextJS13
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=Y6KDk5iyrYE">
            Intro into NextJS13 2
          </Link>
        </li>

        <li>
          <Link href="https://www.youtube.com/watch?v=89NJdbYTgJ8">
            Vite Crash Course
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=JJmcL1N2KQs">
            Python Crash Course
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=qn6OhK_Irm4">
            Starting a small business as a web developer
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=bnzVL0a5h5w">
            10 ways to make money as a developer
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default YoutubeLinks;
