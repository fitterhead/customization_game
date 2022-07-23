import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(1);
  const increaseCount = () => setCount(count + 1);
  // const minusCount = () => setCount(count - 1);
  // const total = {
  //   accessories: {
  //     earrings: 32,
  //     glasses: 17,
  //     hats: 28,
  //     neckwear: 18,
  //   },
  //   body: 17,
  //   eyes: 17,
  //   hair: 73,
  //   facial_hair: 17,
  //   mouths: 24,
  //   eyebrows: 15,
  //   clothes: {
  //     layer_1: 5,
  //     layer_2: 5,
  //     layer_3: 9,
  //   },
  //   noses: 1,
  // };

  const total = {
    accessories: {
      earrings: 32,
      glasses: 17,
      hats: 28,
      neckwear: 18,
    },
    body: 17,
    noses: 1,
  };

  //   parentName = [acessories]
  // total > findObject[total] > true {
  //> [acessories [earing...](true),body:png(false)]
  //
  //
  //
  //(true)[acessories [earing...]] = true > findObject [earing]
  //earing = false > return ( title = asscessories (for earch(earing) > earing1, 2, 3, 4) )
  //
  //parentName = [acessories]
  //}
  // (false) > body:png(false)] {
  // if parentName !== 0
  //  parentName = childKey
  //
  //

  const totalArray = [];
  // console.log(parentName, "1");
  const isObject = (value) => {
    return !!(value && typeof value === "object" && !Array.isArray(value)); // return true or false
  };

  const findObject = (object) => {

    if (isObject(object) === true) {

      console.log(Object.keys(object),"keylist")
      // const {obKey:obValue} = object;
      // console.log ({obKey:obValue})
      const objectArray = Object.entries(object);
      console.log ({objectArray},"aaa")
      console.log(total)
      objectArray.forEach((value) => {
        // let parentName = [];

        const [childKey, childValue] = value;
        if (isObject(childValue) === true) {
          // parentName.push(childKey)
          findObject(childValue);
        
        } else {
          const childArray = [];
        
          const objectLength = Number(`${childValue}`);
          for (let i = 1; i <= objectLength; i++) {
            childArray.push({ childKey, i });
            // console.log(childArray)
          };
                    // parentName = [];

          totalArray.push(childArray)
        }
      }
      )
      console.log (totalArray);
      return totalArray.map((childArrayName) => (
        <div className="body eyes">
          <div className="avatar_title">
            <div className=" avatar_type">{childArrayName.length}</div>
          </div>
          <div className="avatar_item">
          {childArrayName.map((individualItem) => {
            return (
              <div className="avatar_item_children"><img class = "image_thumbnail" src={`character/${individualItem.childKey}/${individualItem.i}.png`} alt=""></img></div>
            )
          })}
          </div>
        </div>
      ))
        }
  
    }
     
   


  //
  //
  // const findObject = (object) => {
  //   if (isObject(object) === true) {
  //     const objectArray = Object.entries(object);
  //     console.log(objectArray, "2");

  //     objectArray.forEach((value) => {
  //       const [childKey, childValue] = value;
  //       if (isObject(childValue) === true) {
  //         parentName = [];
  //         parentName.push(childKey);
  //         console.log(parentName, "3");
  //         findObject(childValue);
  //       } else {
          // const objectLength = ;
          // console.log(objectLength);
          // if (parentName.length > 0) {
          //   parentName.push(childKey);
          // }

          
  //           return (
  //             <div className="body eyes">
  //               <div className="avatar_title">
  //                 <div className=" avatar_type">{parentName}</div>
  //               </div>
  //               <div className="avatar_item">
  //                 {() => {
  //                   for (let i = 0; i < Number(`${childValue}`); i++) {
  //                     return (
  //                       <div className="avatar_item_children">
  //                         <img
  //                           className="image_thumbnail"
  //                           src={`character/${parentName}/${i}.png`}
  //                           alt=""
  //                         ></img>
  //                       </div>
  //                     );
  //                   }
  //                 }}
  //               </div>
  //             </div>
  //           );
          
  //         // console.log(parentName)
  //       }
  //     });
  //   }
  // };

  // console.log(findObject(total));

  // const childArray = [];
  // const objectLength = Number(`${childValue}`);
  // if (parentName === [] ) {
  //   parentName.push(childKey)
  // }
  // for (let i = 1; i <= objectLength; i++) {
  //   childArray.push({ parentName, childKey, i });
  //   // console.log(childArray)
  // };
  // parentName = [];
  // totalArray.push(childArray)

  // return totalArray.map((childArrayName) =>
  // (
  //   <div className="body eyes">
  //     <div className="avatar_title">
  //       <div className=" avatar_type">{parentName}</div>
  //     </div>
  //     <div className="avatar_item">
  //     {childArrayName.map((individualItem) => {
  //       return (
  //         <div className="avatar_item_children"><img class = "image_thumbnail" src={`character/${individualItem.childKey}/${individualItem.i}.png`} alt=""></img></div>
  //       )
  //     })}
  //     </div>
  //   </div>

  // )

  // )

  // const findObject = (object) => {
  //   if (isObject(object) === true) {
  //     console.log(Object.keys(object))
  //     // const {obKey:obValue} = object;
  //     // console.log ({obKey:obValue})
  //     const objectArray = Object.entries(object);
  //     console.log ({objectArray},"aaa")
  //     console.log(total)
  //     objectArray.forEach((value) => {
  //       const [childKey, childValue] = value;
  //       if (isObject(childValue) === true) {
  //         findObject(childValue);
  //       } else {
  //         const childArray = [];
  //         const objectLength = Number(`${childValue}`);
  //         for (let i = 1; i <= objectLength; i++) {
  //           childArray.push({ childKey, i });
  //           // console.log(childArray)
  //         };
  //         totalArray.push(childArray)
  //       }
  //     }
  //     );
  //   }
  //     console.log (totalArray)
  //   return totalArray.map((childArrayName) => (
  //     <div className="body eyes">
  //       <div className="avatar_title">
  //         <div className=" avatar_type">{childArrayName.length}</div>
  //       </div>
  //       <div className="avatar_item">
  //       {childArrayName.map((individualItem) => {
  //         return (
  //           <div className="avatar_item_children"><img class = "image_thumbnail" src={`character/${individualItem.childKey}/${individualItem.i}.png`} alt=""></img></div>
  //         )
  //       })}
  //       </div>
  //     </div>
  //   ))
  //     }
  return (
    <body2>
      <section className="section1">
        <h1 className="header_title">Character Customization</h1>
        <h1 className="header_title">{count}</h1>
        <h1 className="header_title">{}</h1>
      </section>
      <section className="section2">
        <div className="headContainer_wrapper">
          <div className="headContainer">
            <div className="avatar">
              <img
                className="avatar_overlap_item"
                src="character/body/1.png"
                alt=""
              ></img>
            </div>
            <button onClick={increaseCount} className="button">
              RANDOMIZE!
            </button>
          </div>
        </div>
        <div className="bodyContainer_wrapper">
        {findObject(total)}
          <img
            className="image_thumbnail"
            src="character/body/1.png"
            alt=""
          ></img>
        </div>
      </section>
    </body2>
  );
}

export default App;
