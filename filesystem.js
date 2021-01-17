const fs = require("fs")
fs.writeFile("test", "Content", (err)=>{if(err){console.log(err)}
                                        else {console.log("Content has been written in the file")}});
fs.readFile("test", "utf8", (err, file)=>{if(err){console.log(err)}
                                  else{console.log(file, `\n ${file} has successfully been read`)}});
fs.appendFile("test", " is being appended new content", (err)=>{if(err){console.log(err)}
                                                                else{console.log("File has succesfully been updated")}});
fs.rename("test", "newName", (err)=>{if(err){console.log(err)}
                                      else{console.log("File has been renamed")}});
                        
fs.unlink("newName", (err)=>{if(err){console.log(err)}
                             else{
                                 console.log("The file has been deleted")
                             }})
                            