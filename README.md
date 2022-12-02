<h1 align="center">Simple Dashboard NextJs</h1>

This project is a simple dashboard web app written with universal Typescript, bootstrapped with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

## Table of contents

- [Features](#features)
- [Directory Structure](#directory-structure)
- [How to run](#how-to-run)
- [Application Stack](#application-stack)
- [App Flow Based on Files and Directories](#app-flow-based-on-files-and-directories)
- [Importing Reusable Components](#importing-reusable-components)
- [Registering New Components to Route](#registering-new-components-to-route)
- [Call Containers from Pages](#call-containers-from-pages)
- [Add New Pages](#add-new-pages)
- [Live Demo](https://planets-reactjs.vercel.app/)


## Features
1. Dynamic Date
2. Not Found Page
3. Coming Soon Alert
4. Linter Checker Before Commit
5. Prettier Checker Before Commit
6. Typescript Checker Before Commit
7. Unit Test Checker Before Commit
8. Linter Auto Format Before Commit
9. Prettier Auto Format Before Commit

## Directory Structure

```
co-learn-fandi/
  README.md
  .husky/
  node_modules/
  public/
  src/
    components/
    containers/
    pages/
    styles/
    utils/
```

1. components => Contains reusable global components.
2. containers => Contains containers of components.
3. pages => Entry door of each pages.
4. styles => Global styles
5. utils => Common functions

## How to run

1. Using terminal

```
    git clone https://github.com/FandiAR/simple-dashboard.git
```
```
    cd simple-dashboard
```
```
    npm i && npm run dev
```

hit our application in a browser at http://localhost:3000/

## Application Stack

1. [NextJs](https://nextjs.org/).
2. [Ant Design](https://ant.design/) Help designers/developers building beautiful products more flexible and working with happiness.
3. [husky](https://github.com/typicode/husky) Modern native Git hooks.
4. [Eslint](https://eslint.org/) JavaScript codes linter.
5. [Prettier](https://prettier.io/).
6. [Jest](https://jestjs.io/) A delightful JavaScript Testing Framework with a focus on simplicity.
7. [styled-components](https://styled-components.com/) Use the best bits of ES6 and CSS to style your apps without stress.
8. [joe schmoe](https://joeschmoe.io/) An illustrated avatar collection for developers and designers.
9. [React Google Charts](https://www.react-google-charts.com/) A thin, typed, React wrapper for Google Charts.
10. [date-fns](https://date-fns.org/) Modern JavaScript date utility library.

## App Flow Based on Files and Directories

src/pages/* => src/containers/*

## Importing Reusable Components

For example:

```
    import {Typography} from '@components';

    const ComponentsCaller = (props) => {
        const { all props here } = props;

        return (
            <Typography type="secondary" title level={4} text="Profit" />
        );
    };
    export default ComponentsCaller;
```

## Registering New Components

go to src/components/index.ts

```
    export {default as NewComponent} from './NewComponent';
```

## Call Containers from Pages

```
    import Head from 'next/head';
    import dynamic from 'next/dynamic';

    const NewContainer = dynamic(() => import('@containers/New'));

    const NewPage = ({ history }) => {
        return (
            <>
                <Head>
                    <title>Simple Dashboard | New Page</title>
                </Head>
                <NewContainer />
            </>
        );
    };
    export default NewPage;
```

## Add New Pages

go to src/pages

create new file, example `page.tsx`

<h1 align="center">
    <a href="https://simple-dashboard-fandi.vercel.app/">Live Preview</a>
</h1>
