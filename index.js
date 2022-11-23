function scuberGreetingForFeet(feet){
  let result
  if (feet < 400) {
    result = 'This one is on me!';
  }
  else if (feet > 2000 && feet < 2500) {
    result = 'I will gladly take your thirty bucks.';
  }
  else if (feet > 2500) {
    result = 'No can do.';
  }
  return result
}











function ternaryCheckCity(city){
//   let result
//   if (city === 'NYC') {
//     result = 'Ok, sounds good.';
//   }
//   else if (city !== 'NYC') {
//     result = "No go.";
//   }
//   return result
// }

return city ==='NYC' ? 'Ok, sounds good.' : 'No go.';
}






function switchOnCharmFromTip(tip){
//  let message
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}