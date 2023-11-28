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

## Screen-Shots

<img src="https://github.com/nmolaei7878/Todo-App/assets/130120172/28b6c655-d6d3-443b-91f8-d3e6e6081eeb"  width="450" height="350">

<img src="https://github.com/nmolaei7878/Todo-App/assets/130120172/fc4c3770-a59b-438a-a2b3-1c6196ee38d6"  width="450" height="350">
