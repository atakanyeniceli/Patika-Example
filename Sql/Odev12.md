
# Film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
     Select COUNT(*) From film 
     Where length > ( 
         Select AVG(length) From film 
     )

# Film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
     Select COUNT(*) From film 
     Where rental_rate = (
	    Select MAX(rental_rate ) From film
     )

# Film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
     Select * From film 
     Where rental_rate = (
	    Select MIN(rental_rate ) From film) 
	    AND replacement_cost = (
		    Select MIN(replacement_cost) From film
	)

# Payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.
     Select customer_id, SUM(amount) From payment 
     Group By customer_id 
     Order By SUM(amount) DESC