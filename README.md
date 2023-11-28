# Todo-APP

> React + TypeScript + Redux Toolkit + RTK Query + Tailwind + Vite

## Thought Process

#### BaseLayout

- is component which wraps the whole pages and render diffrent pages in it.
- we `fetch` all todos in `baseLayout` and extract lengths of diffrent types of todos in hook called `useExtractLength`.

- we have another component for `nav` links called `NavComponent` beacuse of little amount of code i dont extract it into another file.

#### Shared-UI

- is where i write `components` that are common for all pages with diffrent configuration as `props`.

#### Todo-Api

- `CRUD` operation using `RTK-Query`, invalidation of cache and auto `refetch`.
- i dont implement local `slice` for `state-management` in this app, check out the link below.
- [process-fetched-data-rtk-query-redux-toolkit-react](https://stackoverflow.com/questions/68753347/process-fetched-data-rtk-query-redux-toolkit-react)

## Install & Run

- > `npm install`
- > `npm run dev`
- > `json-server --watch db.json --port 3002`
