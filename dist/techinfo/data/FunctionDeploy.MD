## Steps 
* list what function apps currently
    * func azure functionapp list
* Move to dist directory where host.json exists
* Deploy
    * func azure functionapp publish functionappname(ex:saitools)
* List to see whether new function app exists 
    * func azure functionapp list-functions saitools
* Test to see whether function is avilable or not
