// switch basic
let food = "melon";
switch(food){
  case "melon":
    console.log("fruit");
    break;
  case "apple":
    console.log("fruit");
    break;
  case "banana":
    console.log("fruit");
    break;
  case "carrot":
    console.log("vegetable");
    break;
  default:
    console.log("It's not fruits and vegetables.");
    break;
}

// switch default
let food2 = 'melon';
switch(food2){
    case "melon":
    case "apple":
    case "banana":
        console.log("fruit");
        break
    case "carrot":
        console.log('vegetable');
        break
    default:
        console.log("It's not fruits and vegetable");
        break;
}