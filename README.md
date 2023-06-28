# Ivanko Artem's Portfolio App

## Install

```
$ npm install
```

## Editor Setup

**Note: You only need to do this once**

## Usage

### Development

**Note: You will need to run the inspections app locally before starting the new repo.**

```
$ npm start:rewired
```

#### Styles

- Styles should be placed in a root file within the same enclosing folder as the component they style.
- Avoid inline styles
- Please order styled components according to the layout hierarchy, in the example below the table container is wrapped by the root so the root should be at the top of the file.

```ts
// styles.ts

export const Root = styled("div")`
  background-color: red;
`;

export const TableContainer = styled("div")(({ theme }) => ({
  // put regular styles above mediaQueries
  display: "flex",
  flexDirection: "column",
  marginTop: "1.875rem",
  minHeight: 250,
  overflow: "auto",
  // mediaQueries should come after regular styles.
  [theme.breakpoints.up("md")]: {other styles.
    paddingLeft: CONTENT_HORIZONTAL_PADDING,
    paddingRight: CONTENT_HORIZONTAL_PADDING,
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: "2.7rem",
    paddingLeft: DESKTOP_CONTENT_HORIZONTAL_PADDING,
    paddingRight: DESKTOP_CONTENT_HORIZONTAL_PADDING,
  },
}));
```

### Production Build

```
$ npm run build:rewired
```

### Testing

```
$ npm test:rewired
```
