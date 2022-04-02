
let getA = (a)=> a;
class student{
    static counter = 0;
    static numberOfStudents(){
        return student.counter = student.counter+1;
        
    }   
    constructor(a,b,c,d)
    {
        student.numberOfStudents();
        this.name = a;
        this.age = b;
        this.phoneNumber = c;
        this.marks = d;
        
    }

        
}
function eligible(obj)
{
    marks = obj.marks;
    age = obj.age;
    
    let studentAge = (age) => { 
        if(age >25)
        {
            return true;
        }
        else
        {
            return false;
        }
        
    }
    if(studentAge)
    {
        if(marks > 40)
        {
            console.log("eligible");
        }
        else
        {
            console.log("no");
        }
    }
    else
    {
        console.log("age not eligible");
    }
    
}

ben = new student('Ben Skywalker', '20','898474743',50);
quiGonn = new student('Qui Gonn', '27','898474742',50);
anakin = new student('Anakin Skywalker', '19','898474741',35);
obiWan = new student('Obi Wan kenobi', '33','898474740',58);
yoda = new student('Yoda', '200','898474749',90);
console.log(student.counter);
console.log(eligible(anakin));






