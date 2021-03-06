pragma solidity ^0.4.17;

contract ReportCard{
    
  string public name;
  string public rollNo;
  int public math;
  int public english;
  int public history;
  int public science;
  string public status;

 function ReportCard(string newName, string newRollNo,int newMath, int newEnglish,int newHistory,int newScience, string newStatus)public {
     name = newName;
     rollNo = newRollNo;
     math = newMath;
     english= newEnglish;
     history= newHistory;
     science= newScience;
     status= newStatus;
  
  }
   
   function getDetails()public view returns(string,string,int,int,int,int,string) {
     return(name,rollNo,math,english,history,science,status);
   }
}