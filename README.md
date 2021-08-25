# Frontend Challenge

### Running the code

In one terminal window, pull down the [server code](https://github.com/fast-radius/fe-challenge) and run `yarn server`.

In a different terminal window, pull down these changes and run `yarn start`. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Design Decisions

I separated these changes out into three main components: 
- PartsLibrary - the overall wrapper component that fetches parts one page at a time. 
- PartItem - each individual item in the parts table, responsible for saving quantity values to the server
- PartItemPagination - component that tracks page button clicks and calls into a props method to trigger a new page load

I tried to limit the amount of state that each component tracks and split out changes into different components where I saw possible.

I also made use of hooks and functional components in keeping with the latest React standards.