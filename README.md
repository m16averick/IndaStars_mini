# IndAstars_mini - zadanie rekrutacyjne

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4200](http://localhost:4200) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Used Libraries`

#### ['React Animate Height'](https://www.npmjs.com/package/react-animate-height)

It was used to animate the navbar.

#### ['Sass 1.45'](https://www.npmjs.com/package/sass)

To process styles.

#### ['Axios'](https://www.npmjs.com/package/axios)

Allows user to post rest-api queries.

#### ['Axios Mock Adapter](https://www.npmjs.com/package/axios-mock-adapter)

Makes able to emulate above ones.

### `What is done`
Implemented prototype from figma, which displays cardGrid from given form in axios. I decided to shallow a navbar, because it was to huge imho. Each card has two states, which can be accesed by user by hovering the card. Page is mobile, responsive and animated. Given images come from random library ['picsum.photos'](https://picsum.photos/). Cards also can be sorted within their addate.

### `What is not done`
The solution still lacks any kind of pagination. This should be managed quickly but not today. I also didn't find any time to style dropdown under the card.