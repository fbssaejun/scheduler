# Interview Scheduler

## About Interview Scheduler

Interview scheduler is an app that allows users to book an interview among existing interviewers. Currently interview scheduler is deployed via **Netlify**. https://61394e5175b5ee33b688a68a--silly-keller-b6e6c1.netlify.app/ .

API: https://github.com/fbssaejun/scheduler-api

## Features

- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## *Landing page*
!["Landing Page"](https://github.com/fbssaejun/scheduler/blob/master/public/docs/Home.png)
## *Edit Schedule*
!["Edit"](https://github.com/fbssaejun/scheduler/blob/master/public/docs/Edit.png)
## *Delete Schedule*
!["Delete"](https://github.com/fbssaejun/scheduler/blob/master/public/docs/Delete.png)
## *Add Schedule*
!["Add"](https://github.com/fbssaejun/scheduler/blob/master/public/docs/Add.png)
!["After Added"](https://github.com/fbssaejun/scheduler/blob/master/public/docs/After%20added.png)

## Setup

Install dependencies with `npm install`

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies

- Axios
- Classnames
- Cypress
- Normalize.css
- React
- React-dom
- React-scripts

## Dev Dependencies
- "@babel/core"
- "@storybook/addon-actions"
- "@storybook/addon-backgrounds"
- "@storybook/addon-links"
- "@storybook/addons"
- "@storybook/react"
- "@testing-library/jest-dom"
- "@testing-library/react"
- "@testing-library/react-hooks"
- "babel-loader"
- "node-sass"
- "prop-types"
- "react-test-renderer"

## Continous Integration

*Production deployed to CircleCI*

