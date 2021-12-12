using System.Collections.Generic;
class Person{
    string id=string.Empty;
    string firstName=string.Empty;
    string lastName=string.Empty;
    Card card=null;
    LineEnum line=0;


    public string ID { 
        get{return this.id;} 
        set{this.id=value;} 
    }
    public string FirstName { 
        get{return this.firstName;} 
        set{this.firstName=value;} 
    }
    public string LastName { 
        get{return this.lastName;} 
        set{this.lastName=value;} 
    }
    public Card Card { 
        get{return this.card;} 
        set{this.card=value;} 
    }
    public LineEnum Line { 
        get{return this.line;} 
        set{this.line=value;} 
    }


    public Person(string _id, string _firstName,  string _lastName, Card _card=null, LineEnum _line=0)
    {
        this.id=_id;
        this.firstName=_firstName;
        this.lastName=_lastName;
        this.card=_card;
        this.line=_line;
    }
    public Person()
    {
        
    }
    
    public override string ToString()
    {
        return $"Title: {this.card.Title}\nİçerik: {this.card.Contents}\nAtananKişi: {this.firstName} {this.lastName}\nBüyüklük: {this.card.Size}";
    }
}