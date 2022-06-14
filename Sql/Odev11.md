# Actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.
     Select first_name From actor
     Union
     Select first_name From customer

# Actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.
     Select first_name From actor
     Intersect
     Select first_name From customer

# Actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.
     Select first_name From actor
     Except
     Select first_name From customer

# İlk 3 sorguyu tekrar eden veriler için de yapalım.
     Select first_name From actor
     Union All
     Select first_name From customer

     Select first_name From actor
     Intersect All
     Select first_name From customer

     Select first_name From actor
     Except All
     Select first_name From customer