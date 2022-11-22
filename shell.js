if (require.main == module) {
    const promt = require("prompt-sync")({ sigint: false });
    const execSync  = require("child_process").execSync;
    const childProcess = require("child_process");
    const process = require("process");
    while (true) {
        process.on("SIGINT", () => {
            console.log("SIGINT");
            process.exit(0);
        })
        const input = promt("Enter command:");
        var string = input.split(" ");
        // console.log(string);
        if (string[0] == "exit") {
            break;
        }
        else if (string[0] == "cd") {
            if (string.length > 2) {
                console.log("Error: Too many arguments");
            }
            else {
                try {
                    process.chdir(string[1]);
                    console.log("Changed directory to: " + process.cwd());
                }
                catch (err) {
                    console.log("Error: Invalid directory");
                }
            }
        }
        else if (string[0] == "pwd") {
            console.log("Current directory: " + process.cwd());
        }
        else if (string[0] == "ls") {
            if (string.length > 2) {
                console.log("Error: Too many arguments");
            }
            else {
                try{
                    var cmd="ls";
                    if(string.length == 2) {
                        cmd="ls "+string[1];
                    }
                    const ls = execSync(cmd);
                    console.log(ls.toString());
                }
                catch (err){
                    console.log("Error: Invalid directory");
                }
                
            }
        }
        else if(string[0] == "fg"){
            if (string.length > 2) {
                console.log("Error: Too many arguments");
            }
            else {
                try{
                    var cmd="fg";
                    if(string.length == 2) {
                        cmd="fg "+string[1];
                    }
                    const fg = execSync(cmd);
                    console.log(ls.toString());
                }
                catch (err){
                    console.log("Error: Invalid command");
                }
                
            }
        }
        else{
            try{
                var args="";
                for(var i=0; i<string.length; i++){
                    args = args + " " + string[i];
                }
                const ls = execSync(args);
                console.log(ls.toString());
            }
            catch (err){
                console.log("Error: Invalid commad");
            }
        }
    }

}
