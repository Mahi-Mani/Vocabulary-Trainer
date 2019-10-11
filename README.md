# Vocabulary-Builder

## Summary
Application helps user to build their vocabulary skills as it would allow users to add a new word and once they have mastered in learning a new word, user will be able to push to mastered table. If user wishes to learn the word again, then user can move that word to learning table to keep track of. Developed this application on inspiration from Kindle's Vocabulary Builder

## Installation Guide
* User has to download all files from GitHub repository
* User can either clone the repository or can download all files manually unzipping might take a while though
* Package.json file has required depencies to be installed. So, user can type `npm install` to install all needed packages
* User can type `node server.js` to run the file from command line
* User can create database, table and insert values using `schema.sql` and `seeds.sql` file

## Technologies Used
- HTML : Basic skeleton of application and forms
- Bootstrap : For application styling
- Javascript : used to provide interactive effects
- Handlebar : To dynamically generate HTML page
- MySql : Relational Database Management
- Node : used to run javascript file outside the browser. Supports command line user input. Node is useful is different ways. As
far as this code is concerned, utilised inquirer to dynamically prompt question to user. Used mysql npm package to create schemas.

## Application Functioning
Type `node server.js` from command line. Funtioning of the application is shown below

![Site](gif/VocabularyBuilder.gif)

On run of the application shows list of words available from table. User can add a new word and provide it's category of whether the word is being learnt or mastered. At any point of time, user can track their vocabulary skills on quickly swapping the words from learning and mastered table.

## Code Snippet
*Index view*

```Handlebars
<!-- For learning table -->
    <td>
      {{#each result}}
    {{#if MASTERED}}
      {{> vocabs/vocab-block MASTERED=0}}
    {{/if}}
  {{/each}}
    </td>

    <!-- For mastered table -->
    <td>
      {{#each result}}
    {{#if MASTERED}}
      {{> vocabs/vocab-block MASTERED=0}}
    {{/if}}
  {{/each}}
    </td>
```
>The above code snippet iterates through the array of data retrieved from table. Executes a logic in vocab-block file depending on the boolean value received

*Vocab-block view*

```Handlebars
<tr>
  <td>
   {{ID}}
 </td>
 <td>
  {{WORD}}
  </td>
  <td>
     {{#if MASTERED}}
	<button class="btn btn-success mastered"id="update-btn" data-id="{{ID}}"data-category={{MASTERED}}>
	    MASTERED
	</button>
	{{else}}
	<button class="btn btn-warning mastered"id="update-btn" data-id="{{ID}}"data-category={{MASTERED}}>
	    LEARN AGAIN
	</button>
	{{/if}}
   </td>
   <td>
	<button class="btn btn-danger"id="delete-btn" data-id="{{ID}}">
	  DELETE
	</button> 
   </td>
</tr>
```
> The above code snippet explains on how row is created for each values retrived from table. If mastered value from table is truthy, then *mastered* button is created in green color. If value is falsy, then *learn again* button is created in yellow color.

```Javascript
//   Root route
router.get("/", function(req, res){
  vocabs.select(function(result) {
    var obj = {
      result: result
    };
    res.render("index", obj);
});
    
})
```
>This is a server side javascript for the root route. The values retrived from table are being rendered to the view

## Learning Points
* Learnt about handlebars on how to dynamically update html pages in a very simple code

## Author Links
[LinkedIn](https://www.linkedin.com/in/mahisha-gunasekaran-0a780a88/)

[GitHub](https://github.com/Mahi-Mani)
