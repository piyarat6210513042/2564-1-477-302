function sayHello(userName, userLastname)
{
    return "Hello "+ userName+ " "+ userLastname
}
function getAge()
{
    return 28
}
let userInput = prompt("Input your name : ")
alert (sayHello( userInput, "BorntoDev"))

//ลำดับมีความสำคัญมากๆ
//parameter คือตัวแปรที่เกิดมาพร้อมกับ function มีหน้าที่เอาไว้ใช้งานภายใน function นั้นๆ
//Argument คือ ข้อมูลที่ส่งให้ function