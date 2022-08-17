function status (bmi) {
      if (bmi < 18.5) {
    return `نقص بالوزن`

    }else if (bmi >= 25) {

    return `وزنك صحي`
} else if (bmi <=25) 
    return ` لديك زيادة الوزن`.style.color(blue)
 
}

function calulate () {


let weight = document.getElementById(`Weight`)
let Height = document.getElementById(`Height`)

let bmi = BMI(Wight.Height)
let desc = Status(bmi)

let dessc = Status(bmi)

let div = document.getElementById(`divtag`)


div.innerTEXT = bmi + ` == ` + desc
}