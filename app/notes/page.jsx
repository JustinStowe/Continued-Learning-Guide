export const metadata = {
  title: "About Sumthin Media",
};
function NotesPage() {
  return (
    <div>
      <h1>Justin&apos;s Notes on NextJS 13</h1>
      <ul>
        <li>
          Using NextJS with the app directory, everything application wise, is
          located in the app directory.
        </li>
        <li>
          To change a React server component to a client component (to be able
          to useHooks &quot;useState, useEffect, ect&quot;) at the top of the
          page on line 1, simply put &apos;use client&apos;
        </li>
        <li>
          you cannot &quot;embed&quot; a server component in a client component
          that is fetching data, it errors out
        </li>
        <li>
          you cannot run fetch requests directly in a client component, you have
          to use useEffect
        </li>
        <li>
          the loading.jsx/tsx page is for server components when you are
          fetching data, it works automatically, but not for client components.
          However you can import it in and load it manually using loading,
          setLoading useState.
        </li>
        <li>
          client components are loaded in from the server side versus react
          server components where the data is just rendered.
        </li>
        <li>
          when using a console log in RSC (React Server Components), output will
          be in the terminal console, not the dev tool console.
        </li>
      </ul>
      <ol>
        <h1>Advantages of RSC (React Server Components)</h1>
        <li>
          Load faster - Don&apos;t have to wait for the Javascript to load
        </li>
        <li>Smaller client bundle size</li>
        <li>SEO friendly (Search Engine Optimization)</li>
        <li>Access to resources that the client can&apos;t access</li>
        <li>Hide sensitive data from the client</li>
        <li>More secure against XSS attacks</li>
        <li>Improved developer experience</li>
      </ol>
      <ol>
        <h1>Just like everything else, there are also disadvantages:</h1>
        <li>Not as interactive</li>
        <li>
          No component state. We can not use the &quot;useState&quot; hook
        </li>
        <li>
          No component lifecycle methods. We can not use the
          &quot;useEffect&quot; hook.
        </li>
      </ol>
    </div>
  );
}

export default NotesPage;
