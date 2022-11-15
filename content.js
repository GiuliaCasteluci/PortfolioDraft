class Content {
    constructor(
      myname,
      myBirthday,
      myNationality,
      openToWork,
      softSkills,
    ){
      this.myname = myname;
      this.myBirthday = myBirthday;
      this.myNationality = myNationality;
      this.openToWork = openToWork;
      this.softSkills =softSkills;
    };
    toggleOTW(status){
      this.openToWork = status
    }
  
    age(){
      let now = new Date();
      let myAge = Date.parse(this.myBirthday);
      let elapsed = now - myAge
      let myCurrentAge = Math.floor(elapsed /  (1000 * 60 * 60 * 24 * 365));
      console.log(myCurrentAge, elapsed, myAge, this.myBirthday ,now)
      return myCurrentAge
    }
  } 
  
  export default Content;