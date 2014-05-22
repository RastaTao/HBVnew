var log = "Count employees-before: " + ds.Student.length;
 
  // Main function
 function doImportEmpsAndComps () {
     /*   The doc. to import is in the solution folder, in a subfolder
         named "Import". We load the full document in one shot  (loadText) 
         and split it in an array (one line = one element).
     */
      var lines = loadText( ds.getModelFolder().path + "Import/emps_comps.txt" ).split("\n");
       /*   Declare the variable that will hold the columns of each line.
           We know the columns will be:
            columns[0]   Name of the company
            columns[1]   Last name of the employee
            columns[2]   First name
            columns[3]   Salary
     */ 
   var columns = [];
       // Now, loop for each entry in the array  
lines.forEach( function(oneLine) {  
      // Get the columns for current line  
columns = oneLine.split("\t");  
 
      
       var theEmp = ds.Student.find("lastName = :1 and firstName == :2", columns[0], columns[1]);
      if(theEmp == null) {
         theEmp = new ds.Student( {
            lastName    : columns[0],
            firstName    : columns[1],
            klass   : columns[2],
            sport   : columns[3]
             }); 
             
             theEmp.save();
                      
      } 
        
     });
 }
 // Call the function 
doImportEmpsAndComps ();
  
 // Log result
log += " / Count employees-after: " + ds.Student.length;

