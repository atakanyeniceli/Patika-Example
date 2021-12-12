class Card{
    string title=string.Empty;
    string contents=string.Empty;
    SizeEnum size=0;

    public string Title { 
        get{return this.title;} 
        set{this.title=value;} 
    }
    public string Contents { 
        get{return this.contents;} 
        set{this.contents=value;} 
    }
    public SizeEnum Size { 
        get{return this.size;} 
        set{this.size=value;} 
    }
    public Card(string _title, string _contents, SizeEnum _size)
    {
        this.title=_title;
        this.contents=_contents;
        this.size=_size;
    }
}