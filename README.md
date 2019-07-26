# Simple Chrome Extension

This simple Chrome extension will render a list of 20 pictures and allow you favorite each of then, and display your favorites

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You need to have Node running on your machine

### Installing

Clone this app

```
git clone https://github.com/aknwosu/chrome-extension.git

```

Install application dependencies

```
cd chrome-extension && npm install
```

Build the application

```
npm run build
```

You can now run the application on Chrome by;

- Visit chrome://extensions (via omnibox or menu -> Tools -> Extensions).
- Enable Developer mode by ticking the checkbox in the upper-right corner.
- Click on the "Load unpacked extension..." button.
- Select the directory containing your unpacked extension.
- Select the `build` folder and click 'Select'


You can click on the heart icon to favorite a picture or click again to remove it from favorites.
All your favorites can be accessed on the Favorites tab

## Running the tests

To run the tests `npm test`
To see covered lines `npm run coverage`


## Built With

* [Create React App](https://facebook.github.io/create-react-app/docs/getting-started) 
* [Styled Components](https://www.styled-components.com/)
* HTML
* CSS

## License

This project is licensed under the MIT License