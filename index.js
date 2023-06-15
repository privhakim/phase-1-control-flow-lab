function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return 'This is on me!';
  }else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }else if (distance > 2500) {
    return 'No can do.';
  }
  // Write your code here!
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'ok, sounds good.' : 'No go';
  // Write your code here!
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
    return 'Thank you so much.';
  case 'not as generous':
    return 'Thank you.';
  default:
    return 'Bye.';
}
  }
  // Write your code here!
