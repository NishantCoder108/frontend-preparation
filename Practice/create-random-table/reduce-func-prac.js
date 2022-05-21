let personObj = [
    {
      name: "Atif",
      numberOfWives: 13,
    },
    {
      name: "Prateek",
      numberOfWives: 5,
    },
   
   ];
    
   const totalWives = personObj.reduce((prevValue, currentValue) =>({g :prevValue.numberOfWives + currentValue.numberOfWives}))
    
   console.log(totalWives);
//    Output {g: 18}

//or
let personObj = [
    {
      name: "Atif",
      numberOfWives: 13,
    },
    {
      name: "Prateek",
      numberOfWives: 5,
    },
   
   ];
    
   const totalWives = personObj.reduce((prevValue, currentValue) =>prevValue.numberOfWives + currentValue.numberOfWives)
    
   console.log(totalWives);
//    Output 18