//Type alias or type keyword
// Any kind of type can be assigned to type alias
//Types are virtual and only used by typescript compiles

//Types alias can be used for the reusable aliases and definitions for types
//let pizzaSize: 'small' | 'medium' | 'large' = 'small';

type Size = "small" | "medium" | "large";
type Callback = (size: Size) => void;

let pizzaSize: Size = "small";

const selectSize: Callback = x => {
  pizzaSize = x;
};

selectSize("medium");
