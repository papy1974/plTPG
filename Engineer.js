const Employee =  require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.title = "Engineer";
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
    
    //Engineer now has access to Employee methods

}

//export Engineer
module.exports = Engineer;

