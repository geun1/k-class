import datas from "../../assets/classInfo.json";


const matchCName = (dName , iName) => {
  const pattern = new RegExp(iName, 'g');
  return dName.match(pattern) !== null;
}

const matchDept = (dDept , iDept) => {
  const pattern = new RegExp(iDept, 'g');
  return dDept.match(pattern) !== null;
}

const matchDay = (dDay,iDay) =>{
  
  for(let i = 0; i<dDay.length; i++){
    if(iDay.includes(dDay[i])) return true;
  }

  return false;
}

const matchTime = (dTime , st , en) => {
  for(let i = 0; i<dTime.length; i++){
    const [sh ,sm] = dTime[i][0].split(":");
    const [eh ,em] = dTime[i][1].split(":");

    const dst = parseInt(sh) + parseInt(sm)/60;
    const den = parseInt(eh) + parseInt(em)/60;

    if(dst >= st && den <= en){
      return true;
    }
  }
  return false;
}

export function searchClass([cName , dept , major , majorDetail , grade , day, time]) {

  let data = [];

  //grade
  let grd;
  if(grade[5]) gre = [1,2,3,4];
  else {
    grd = grade.map((el,idx)=>{
      if(el){
        switch(idx){
          case 0 : return 1;
          case 1 : return 2;
          case 2 : return 3;
          case 3 : return 4;
        }
      }
    })
  }
 
  //cName
  const scName = cName.replace(/\s/g,'');

  //dept
  const sdept = dept.replace(/\s/g,'');

  //major 0 1 2
  let smajor;
  if(major == 1) smajor = "심교";
  else if(major == 2) smajor = "기교";
  else smajor="";

  //day
  //all false case
  let days = [];
  day.map((el,idx)=>{
    if(el){
      switch(idx){
        case 0 : days.push("월"); break;
        case 1 : days.push("화"); break;
        case 2 : days.push("수"); break;
        case 3 : days.push("목"); break;
        case 4 : days.push("금"); break;
        case 5 : days.push("토"); break;
      }
    }
  })
  if(days.length == 0) {
    days = ["월","화","수","목","금","토"];
  }

  //time
  const st = time[0];
  const ed = time[1];

  //search 
  //과목명 , 학과 X -> 요일 날짜 , 심교 OR 기교
  if(cName === '' && dept === '' && smajor != ""){
    datas.map( (el)=>{
        el["이수\n\n구분"] == smajor 
        && matchDay(el.요일,days) 
        && matchTime(el.수업시간,st,ed) 
        && data.push(el);
    } )
  }
  else if(cName.length > 0 && dept.length > 0){
    datas.map(el => {
      matchCName(el.교과목명 , scName) 
      && matchDept(el.개설학과,sdept)
      && matchDay(el.요일,days) 
      && matchTime(el.수업시간,st,ed) 
      && data.push(el);
    })
  }
  else if(cName.length > 0){ //과목명 O -> 요일 날짜
    datas.map(el => {
      matchCName(el.교과목명 , scName) 
      && matchDay(el.요일,days) 
      && matchTime(el.수업시간,st,ed) 
      && data.push(el);
    })
  }
  else if(dept.length > 0){ //학과명 O -> 요일 날짜 전공
    datas.map(el => {
      matchDept(el.개설학과,sdept)
      && matchDay(el.요일,days) 
      && matchTime(el.수업시간,st,ed) 
      && data.push(el);
    })
  }
  else { 
    datas.map(el => {
      matchDay(el.요일,days) 
      && matchTime(el.수업시간,st,ed) 
      && data.push(el);
    })
  }

  return data;
}

