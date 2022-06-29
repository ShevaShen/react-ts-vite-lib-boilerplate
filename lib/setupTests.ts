import '@testing-library/jest-dom'

// this is to get rid of the warning of "The current testing environment is not configured to support act(…)"
// see more details here https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: prevent build error caused by next line
globalThis.IS_REACT_ACT_ENVIRONMENT = true
