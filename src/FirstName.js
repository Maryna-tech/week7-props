 //#2 easy to use
 function FirstName ({anyWordYouWant}){
    return(
        <div>
            {anyWordYouWant.map((element =>{
            const{id, firstName} = element;
            return <div key ={id}>
                <p>{id}</p>
                <p>{firstName}</p>
            </div>
            }))}
        </div>
    )
}

export default FirstName;

 //#1
 //function firstName (props){
 //   return(
 //     <div>
 //          {props.anyWordYouWant.map((element =>{
 //               const {id,firstName} = element;
 //               return<div key ={id}>
 //                  <p>{id}</p>
 //                  <p>{firstName}</p>
 //              </div>
 //           }))}
 //       </div>
 //   )
 // }

//export default firstName;