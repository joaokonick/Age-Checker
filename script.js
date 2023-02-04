function check(){
   var data = new Date()
   var year = data.getFullYear()
   var fyear = document.getElementById('txtyear')
   var res = document.querySelector('div#res')

   if (fyear.value.length == 0 || fyear.value > year){
    window.alert('[ERROR] Check the data and try again!')
   } else {
    var fsex = document.getElementsByName('radgen')
    var age = year - Number(fyear.value)
    var gen = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'picture')
    if (fsex[0].checked){
        gen = 'Men'
        if (age >= 0 && age < 10){
            //crianca
            img.setAttribute('src', 'lboy.png')
        }else if (age <21){
            //adolecente
            img.setAttribute('src', 'yboy.png')
        }else if(age < 50){
            //Adulto
            img.setAttribute('src', 'adultm.png')
        }else{
            //Idoso
            img.setAttribute('src', 'omen.png')
        }
        
    }else if (fsex[1].checked){
        gen = 'Women'
        if (age >= 0 && age < 10){
            //crianca
            img.setAttribute('src', 'lgirl.png')
        }else if (age <21){
            //adolecente
            img.setAttribute('src', 'ygirl.png')
        }else if(age < 50){
            //Adulto
            img.setAttribute('src', 'adultw.png')
        }else{
            //Idoso
            img.setAttribute('src', 'owom.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `We detect a ${gen} with ${age} year-old`
    res.appendChild(img)
   }
}