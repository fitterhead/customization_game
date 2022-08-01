import React, { useState} from "react";
import "./App.css";

const total = {
  accessories: {
    earrings: 32,
    glasses: 17,
    hats: 28,
    neckwear: 18,
  },
  body: 17,
  eyes: 17,
  hair: 73,
  facial_hair: 17,
  mouths: 24,
  eyebrows: 15,
  clothes: {
    layer_1: 5,
    layer_2: 5,
    layer_3: 9,
  },
  noses: 1,
};
function App() {
  const childTitle = [];
  const totalArray = [];
  const [avatarArray, setAvatarArray] = useState([
    { avatar_location: "body", avatar_part: "body", avatar_status: 1 },
  ]);

  const addComponent = (location, part, status) => {
    const avatarInput = {
      avatar_location: location,
      avatar_part: part,
      avatar_status: status,
    };
    avatarArray.map((object) => {
      if (object.avatar_part === part) {
        object.avatar_status = status;
      }
      return object;
    });
    setAvatarArray([...avatarArray, avatarInput]);
    console.log(avatarArray, "1");
  };

  const isObject = (value) => {
    return !!(value && typeof value === "object" && !Array.isArray(value)); // test input if an object,return true or false
  };

  const findObject = (object, currentLocation) => {
    if (isObject(object) === true) {
      const objectArray = Object.entries(object);
      objectArray.forEach((value) => {
        const [childKey, childValue] = value;
        if (isObject(childValue) === true) {
          findObject(childValue, childKey); //recusion
        } else {
          const childArray = [];
          childTitle.push(childKey);
          const objectLength = Number(`${childValue}`);
          for (let i = 1; i <= objectLength; i++) {
            childArray.push({ childKey, i, currentLocation });
          }
          totalArray.push(childArray); //totalArray is a new array can be mapped in jsx
        }
      });
      return totalArray.map((childArrayName, index) => (
        <div className="body">
          <div className="avatar_title">
            <div className=" avatar_type">{childTitle[index]}</div>
          </div>
          <div className="avatar_item">

            {childArrayName.map((individualItem) => {
              if (individualItem.currentLocation !== undefined) {
                return (
                  <div className="avatar_item_children">
                    <img

                      // ref = {callRef}
                      id={`${individualItem.childKey}${individualItem.i}`}
                      onClick={() => {
                        addComponent(
                          `${individualItem.currentLocation}/${individualItem.childKey}`,
                          `${individualItem.childKey}`,
                          `${individualItem.i}`
                        );
                      }}
                      className="image_thumbnail"
                      src={`character/${individualItem.currentLocation}/${individualItem.childKey}/${individualItem.i}.png`}
                      alt=""
                    ></img>
                  </div>
                );
              } else {
                return (
                  <div className="avatar_item_children">
                    <img
                      id={`${individualItem.childKey}${individualItem.i}`}
                      onClick={() => {
                        addComponent(
                          //function returns avatarArray,another array deviated from object "total" => iterate with map to render random avatar.
                          //need to find a way to reuse "totalArray" array after the function contained it could return only HTML body not the array value
                          `${individualItem.childKey}`,
                          `${individualItem.childKey}`,
                          `${individualItem.i}`
                        );
                      }}
                      className="image_thumbnail"
                      src={`character/${individualItem.childKey}/${individualItem.i}.png`}
                      alt=""
                    ></img>
                  </div>
                );
              }
            })}
          </div>
        </div>
      ));
    }
  };

  const newArrayForAvatar = [];
  const renderArray = (object) => {
    if (isObject(object) === true) {
      const objectArray = Object.entries(object);
      objectArray.forEach((value) => {
        if (isObject(value[1]) === true) {
          renderArray(value[1]);
        } else {
          newArrayForAvatar.push(value);
        }
      });
    }
  };
  renderArray(total);

  const newRandomArray = newArrayForAvatar.map((smallObject) => {
    if (
      smallObject[0] === `earrings` ||
      smallObject[0] === `glasses` ||
      smallObject[0] === `hats` ||
      smallObject[0] === `neckwear`
    ) {
      return {
        avatar_location: `/accessories/${smallObject[0]}`,
        avatar_part: `${smallObject[0]}`,
        avatar_status: `${Math.ceil(Math.random() * (smallObject[1] + 10))}`,
      };
    } else if (
      smallObject[0] === `layer_1` ||
      smallObject[0] === `layer_2` ||
      smallObject[0] === `layer_3`
    ) {
      return {
        avatar_location: `/clothes/${smallObject[0]}`,
        avatar_part: `${smallObject[0]}`,
        avatar_status: `${Math.ceil(Math.random() * smallObject[1] + 1)}`,
      };
    } else {
      return {
        avatar_location: `${smallObject[0]}`,
        avatar_part: `${smallObject[0]}`,
        avatar_status: `${Math.ceil(Math.random() * smallObject[1])}`,
      };
    }
  });

  window.onload = () => {
    setAvatarArray([...newRandomArray]);
  };

  return (
    <body2>
      <section className="section1">
        <h1 className="header_title">Character <br></br>Customization</h1>
        <h1 className="header_title">{}</h1>
      </section>
      <section className="section2">
        <div className="headContainer_wrapper">
          <div className="headContainer">
            <div className="avatar">
              {avatarArray.map((avatarInput) => (
                <img
                  className={`avatar_overlap_${avatarInput.avatar_part}`}
                  src={`character/${avatarInput.avatar_location}/${avatarInput.avatar_status}.png`}
                  alt=""
                ></img>
              ))}
            </div>
            <button
              onClick={() => {
                setAvatarArray([...newRandomArray]);
              }}
              className="button"
            >
              RANDOMIZE!
            </button>
          </div>
        </div>
        <div className="bodyContainer_wrapper">{findObject(total)}</div>
      </section>
    </body2>
  );
}

export default App;
