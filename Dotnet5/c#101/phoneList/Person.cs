class Person{
    string firstName=string.Empty;
    string lastName=string.Empty;
    int age=0;
    string phoneNummber=string.Empty;


    public string FirstName { 
        get{return this.firstName;} 
    }
    public string LastName { 
        get{return this.lastName;} 
    }
    public int Age {
        get{return this.age;}
    }
    public string PhoneNumber {
        get{return this.phoneNummber;}
    }

    public Person(string _firstName,string _lastName,int _age, string _phoneNumber)
    {
        this.firstName=_firstName;
        this.lastName=_lastName;
        this.age=_age;
        this.phoneNummber=_phoneNumber;
    }
    public void PersonUpdate( string _firstName, string _lastName, int _age, string _phoneNumber){
        this.firstName=_firstName;
        this.lastName=_lastName;
        this.age=_age;
        this.phoneNummber=_phoneNumber;
    }
}