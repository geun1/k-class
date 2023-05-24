import datas from "../../assets/classInfo.json";

export function searchClass([cName , dept , major , majorDetail , grade , day]) {

  let data = [];
  //grade day -> bool type array
  grade.map((el,idx)=>{
    if(el) grd = idx;
  })

  //교과목명 & 학과 스페이스바 없애기

  //search
  datas.map((el,idx)=>{
    //if(el.교과목명 === cName)
    el.교과목명 == cName && el["개설\n학년"] == grd+1 && data.push(el);
  })
  

  //console.log(data);

  return data;
}

