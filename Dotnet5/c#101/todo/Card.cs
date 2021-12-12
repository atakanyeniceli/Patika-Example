class Card{
    string title=string.Empty;
    string contents=string.Empty;
    string authorPerson=string.Empty;
    SizeEnum size=null;

    public string Title { 
        get{return this.title;} 
        set{this.title=value;} 
    }
    public string Contents { 
        get{return this.contents;} 
        set{this.contents=value;} 
    }
    public string AuthorPerson { 
        get{return this.authorPerson;} 
        set{this.authorPerson=value;} 
    }
    public SizeEnum Size { 
        get{return this.size;} 
        set{this.size=value;} 
    }

    public override string ToString()
    {
        return $"Title:{this.title}\nContents:{this.contents}\nAuthorPerson{this.authorPerson}\nSize:{this.size}";
    }
}