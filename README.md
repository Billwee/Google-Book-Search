# Google-Book-Search

## Overview

Google Book Search (GBS) is a React based application that uses one of Google's many APIs to return information on books from a form submission containing a book's author or title. GBS also has the capability of saving your favorite search results to a Mongo Database for later viewing.

## Deployment

You can start searching for your favorite books by [Clicking Here](https://kamberos-gbook-search.herokuapp.com/).

## User Experience

 - After GBS loads, the user is presented with a navigation bar, banner, and input form. 
  - Typing your search parameters into the form and submitting them will query Google's Books API and return results. 
    - If no results are found a notification will inform the user. 
    - Results found are loaded into media boxes containing the book's title, author(s), cover art, and description. 
    - Among those are two buttons that let the user either visit the book's webpage on the Google Book's website or save the book result to the mongoDB intgrated into the application.
    - Clicking the Save button in media boxes will save the book inforamtion to the database while also disabling the button so it can't be saved again and changing the button's text to "Saved"
     - If Google's API returns books without descriptions or images, the empty spots will be filled with placeholders explaining they are not available.
 - Once a book is saved to the database it can not be saved again unless it is removed. Even after reloading the page.
 - Accessing the saved books can be done via the navigation bar at the top of the page.
 - Users have the option to delete books from the database as well in the media boxes on the Saved page.
