# Pokemon Fetcher App

This is a simple React application that fetches data from the PokeAPI to display information about a random Pokemon.

It includes a loading spinner and a timeout feature to simulate slow network requests.

There was implemented AbortController to cancel the fetch request if user spam the button before receiving data.

Also there is two variants of style based of system color scheme (light and dark).

## Structure

Main component that was described in assignment is `src/App.tsx`. It contains all the logic and state of the application.

I have applied also following structure to the project to make it a bit more organized:

- `components` folder contains components - for now only `Spinner` component that is being used to display loading spinner inside button.


- `helpers` folder contains helper functions - there is only one function that generates random number between (0, x).


- `types` folder contains typescript types - there is only one type for Pokemon object.
## Installation

To run this project, you need to have Node.js(20.11.1 LTS) installed. Then, you can clone the repository and run the following commands:

to install the dependencies:
```bash
npm install
```

to start the application locally:
```bash
npm run dev
```

