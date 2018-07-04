//Never type - value will never occur.

//We can return never when we a re sure that the funciton will never return anything.
function orderError(error: string): never {
  throw new Error(error);
  //return 0; -- can't do that
  // never going to return a value!
}

//Never means that there is unreachable code in our application. Like while true
orderError("Something went rwing.");

//Seems that it's not often used. And also better used when throwing errors or sth.
