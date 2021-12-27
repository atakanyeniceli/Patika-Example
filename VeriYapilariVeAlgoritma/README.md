# Insertion Sort
[22,27,16,2,18,6]
***
1-)Verilen dizinin sort türüne göre aşamalarını yazınız.
> [22,27,16,2,18,6] 6-(n)  
> [2,27,16,22,18,6] 5-(n-1)  
> [2,6,16,22,18,27] 4-(n-2)  
> [2,6,16,22,18,27] 3-(n-3)  
> [2,6,16,18,22,27] 2-(n-4)  
> [2,6,16,18,22,27] 1-(n-5)
  
2-)Big-O gösterimini yazınız.
>(n^2+n)/2  
>O(n^2)  

3-)Time Complexity:  
Baştan başlayarak tek tek elemanları kontrol eden algoritmaya göre  
>Worst Case:O(n) Aranan sayı 27 ise n=6  
>Average Case: O(n) Aranan sayı 16-18 ise n=3  
>Best Case: O(n) Aranan sayı 2 ise n=1  

Dizinin yarısından başlayıp sağ sol seçimi yaparak her seferinde kalanın yarısınından kontrol eden algoritmaya göre  
>Worst Case: O(logn)   n=4    
>Averaga Case: O(logn) n=3  
>Best Cage: O(log)     n=2  

4-)Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer  

Baştan başlayarak tek tek elemanları kontrol eden algoritmaya göre  
Average Case  

Dizinin yarısından başlayıp sağ sol seçimi yaparak her seferinde kalanın yarısınından kontrol eden algoritmaya göre  
Best Case

5-)[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.  
>[7,3,5,8,2,9,4,15,6] 9-(n)  
>[2,3,5,8,7,9,4,15,6] 8-(n-1)  
>[2,3,5,8,7,9,4,15,6] 7-(n-2)  
>[2,3,4,8,7,9,5,15,6] 6-(n-3)

# Merge Sort
[16,21,11,8,12,22]
***
1-)Dizinin Sort türüne göre aşamalarını yazınız.   

                   [16,21,11]     [8,12,22]

          [16,21]  [11]               [8,12]  [22]

    [16]  [21]  [11]                    [8]  [12]  [22]

          [16,21]   [11]               [8,12]  [22]
    
               [11,16,21]           [8,12,22] 

                      [8,11,12,16,21,22]  

2-)Big-O gösterimini yazınız.  
>O(nlogn)

# Binary Search Tree  
[0,1,2,3,4,5,6,7,8,9]
root değeri = 5 

                 5 
            /         \
           3           7
         /   \        /  \
        2     4      6    8
       /                   \
      1                     9
     /
    0
    
    
    " 7 root değerinden büyüktür sağında yer alır 
    " 3 root değerinden küçüktür solunda yer alır 
