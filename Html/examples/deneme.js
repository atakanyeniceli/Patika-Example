// document.writeln("parseInt denemesi: ",parseInt("11px11"));//Numeric başlıyor ise onu int'e çeviriyor.
// document.writeln("\n Number denemesi: ",Number("11.5"));


window.onload=function(e){
    let name="Atakan"
    let lastName="Yeniceli"
    let fullName=`Isim: ${name}  Soyisim: ${lastName}`
    console.log(fullName)
    console.log(document.querySelector('#ati'))
    document.querySelector('#ati').innerText="parseInt denemesi: "+parseInt("11px11")+
    "\nparseInt Denemesi: "+parseInt("a11a")+
    "\nNumber denemesi: "+Number("11.5")+
    "\n== denemesi: "+("1"==1)+
    "\n=== denemesi: "+(1==="1");

    let div=document.createElement("div")
    div.innerHTML="Oluşturulmuş div"
    document.body.prepend(div)
    let Ddiv=document.querySelector("#ati")
    Ddiv.addEventListener("click",function(){
        console.log("tıklandı.")
    })
    let form=document.querySelector("#userForm")
    form.addEventListener("submit",function(ee){
        ee.preventDefault();
        console.log(ee.target.querySelector("#Input").value)
    })
    /*Array İşlemleri */
    let myArray=[1,2,3,4,5,6]
    myArray.push(7)//sona eleman ekleme
    myArray.unshift(0)//başa eleman ekleme
    myArray.splice(1,0,1.5)// 1.parametre işlem yapılacak index,2.parametre kaç elemanın silineceği,3.parametre eklenecek eleman
    console.log("agsdvasdv")
    let silinen=myArray.pop()//son elemanı return eder ve siler.
    silinen=myArray.shift()//ilk elemanı return eder ve siler.
    let myArray2=myArray.slice()//Array ı kopyalamak için kullanılır. myArray2=myArray Arrayı kopyalamıyor.Sadece yansıtıyor.
    let myArray3=[...myArray]//Yeni özelliklede kopyalanabilir.
    for(let i=0;i<5;i++)console.log("For: ",i)
    let i=0;
    while(i<5){console.log("While: ",i);i++}
    myArray.forEach((item)=>{console.log(item*10)})//elemanları tek tek 10 ile çarpar ve console ile yazdırır.Array değişmez.
    myArray.forEach((item,index,arr)=>{arr[index]=item*10})//Arraydeki bütün elemanları 10 ile çarpar ve array e yükler.
    console.log("forEach: ",myArray)
    let filtre=myArray.filter(item=>item>20)// 20 den büyük olan elemanları yeni array olarak döner.
    console.log("Filtre:",filtre)
    myArray.map(item=>item/10)
    console.log("Map:",myArray)// foreach gibi çalışıyor.map ile her item tek tek dönüyor.
    /*********************************************Oject***********************************************/
    let Item=new Object();
    Item.brand="Apple";
    Item.sell=1500;
    console.log(Item)
    
    let Item2={
        brand:"Lenovo",
        sell:2000,
        "2ata":"String key",// sadece string key rakam ile başlayabilir.
        method:(firstName,lastName)=>{return`${firstName[0].toUpperCase()+firstName.slice(1)} ${lastName.toUpperCase()}`}
    }
    console.log(Item2)
    let myArray4=[Item,Item2]
    console.log(myArray4)
    console.log(Item.brand)
    console.log(Item2["2ata"])
    console.log(Item["brand"])

    //Keyleri elde etmek
    let myKeys=Object.keys(Item)
    console.log(myKeys,Item[myKeys[0]])
    myKeys.map(keys=>console.log("Foreach Keys: ",Item[keys]))
    //Value ları elde etmek
    let myValue=Object.values(Item2)
    console.log(myValue)
    //key value aynı anda elde etmek
    let myEntries=Object.entries(Item)
    console.log(myEntries)
    //Object method
    console.log(Item2.method("atakan","yeniceli"))

    //Bütün yapıyı elde etme
    let{brand:Model,sell:Satıs,method:Fonksiyon}=Item2//brand:model tanımlaması as gibi çalışıyor.brand propertysi model ismiyle kullanılabilir.
    console.log(Model,Satıs,Fonksiyon("atakan","yeniceli"))

    //object kopyalama
    let myObject=Item//bu kullanımda pointerları aktarıyor.
    myObject={...Item}// bu kullanımda yapıyı direk kopyalıyor.
    myObject.brand="Degisti"
    console.log(myObject,Item)

    fetch("https://jsonplaceholder.typicode.com/posts/1").then(
        response=>{return response.json()}
    ).then(ResponseJson=>{console.log(ResponseJson)})//.catch(err=>console.log(err))

    fetch("https://www.tcmb.gov.tr/kurlar/today.xml",{
        mode:'no-cors',
    })
    .then(response => response.text())
    .then(data => {
        let parser = new DOMParser()
        let xml = parser.parseFromString(data,'application/xml')
        console.log(xml)    
        })
    .catch(err=>console.log(err)).finally(console.log('finally'))

    let xmlRead=new XMLHttpRequest()
    xmlRead.open("GET","https://www.tcmb.gov.tr/kurlar/today.xmls",true)
    console.log("XmlHttps:",xmlRead)
    console.log(window.DOMParser)
    //document.querySelector("#baby").addEventListener('click',xmlDOM)
}
function xmlDOM(){
    let xmlRead=new XMLHttpRequest()
    xmlRead.open("GET","https://www.tcmb.gov.tr/kurlar/today.xmls")
    console.log("XmlHttps:",xmlRead)
    console.log(window.DOMParser)
}
