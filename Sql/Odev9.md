
# City tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
     Select * From city 
     Inner Join country On city.country_id=country.country_id

# Customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
     Select payment.payment_id,first_name,last_name From customer
     Inner Join payment On customer.customer_id=payment.customer_id

# Customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
     Select rental.rental_id,first_name,last_name From customer
     Inner Join rental On customer.customer_id=rental.customer_id