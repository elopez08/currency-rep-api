# currency-rep-api

our proposal, please edit if you have any new idea.
https://docs.google.com/document/d/19FxMvH46WPICGhEOWCgLYL1HmLok83oTGy7PPWOV2R8/edit#

presentation - https://docs.google.com/presentation/d/1BcfHCeszFBc8yvEfw4nz20Ui3g-P9pC8FnPidzGzk7I/edit#slide=id.g29f43f0a72_0_24

Display Web - https://elopez08.github.io/currency-rep-api/

# Layout

Screenshot:

![Screenshot Layout](https://github.com/elopez08/currency-rep-api/blob/develop/assets/images/screenshot-layout.PNG)

The layout would include the following:

-title with the Dark Mode button on the bar
-On the side, it'll have the currency along with the city selected
-On the right, will have 2 divs:
    -Weather Report for the week
    -City information below

The idea behind is so it isn't too complicated for the user to be able to browse through and select the information on the city while also displaying on the needed information on what they are looking for.  Viewing it in the full window will have the borders along each div to represent a separate window from one another.  When the program is implemented for different sizes, the windows would stack with one another to make it a bit user friendly.

Something about the layout:  Originally, we're going to have the user start with the light mode, so the colors would be bright for the users to see.  The implementation of the dark mode is just in case the user prefers a more darker color to ease the eye tension.

All the interaction would initially start with selecting the city.  Once it has been called, the rest of the information would then be displayed in accordance to the window.


# Dropdown button and Currency API

Create dropdown button for 3 cities - Tokyo, London and Sydney.

Using currency api - https://github.com/fawazahmed0/currency-api#readme

Find out the exchange rate we need using fetch function to get response. Successfully displayed on website. 

