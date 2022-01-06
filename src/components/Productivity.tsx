/* Library Imports */
//React
import React, { useState, useEffect } from "react";

/* Stylesheet Imports */
import "../styles/Productivity.scss";

/* Image Imports */
import blank from "../img/blankBox.svg";
import checked from "../img/checkedBox.svg";

/* Component Imports */

/* Component/Functions */
const Productivity = () => {
  //Checklist render array.
  const [lists, updateLists] = useState<any[]>([]);

  //Check Handler Function
  const checkHandler = (e: any) => {
    const proxyList = [...lists];
    let listIndex: any;
    let taskIndex: any;
    //Logic for determining parent list
    if (
      e.target.className === "listItem" ||
      e.target.className === "listItem done"
    ) {
      const list = e.target.parentElement.previousSibling.innerHTML;
      listIndex = proxyList.findIndex((x) => x.Name === list);
      console.log(listIndex);
    } else {
      const list =
        e.target.parentElement.parentElement.previousSibling.innerHTML;
      listIndex = proxyList.findIndex((x) => x.Name === list);
    }
    //Logic to determine task
    if (
      e.target.className === "listItem" ||
      e.target.className === "listItem done"
    ) {
      const task = e.target.firstChild.innerHTML;
      taskIndex = proxyList[listIndex].Items.findIndex(
        (y: any) => y.Task === task
      );
    } else if (e.target.className === "taskImg") {
      const task = e.target.previousSibling.innerHTML;
      taskIndex = proxyList[listIndex].Items.findIndex(
        (y: any) => y.Task === task
      );
    } else {
      const task = e.target.innerHTML;
      taskIndex = proxyList[listIndex].Items.findIndex(
        (y: any) => y.Task === task
      );
    }
    //Logic to switch task status
    if (proxyList[listIndex].Items[taskIndex].Done === true) {
      proxyList[listIndex].Items[taskIndex].Done = false;
      updateLists(proxyList);
    } else {
      proxyList[listIndex].Items[taskIndex].Done = true;
      updateLists(proxyList);
    }
  };

  //Reset Handler
  const resetHandler = (e: any) => {
    const proxyList = [...lists];
    const list = e.target.parentElement.firstChild.innerHTML;
    const index = proxyList.findIndex((x) => x.Name === list);
    const newList = proxyList[index].Items.map((item: any) => ({
      Task: item.Task,
      Done: false,
    }));
    proxyList[index].Items = newList;
    updateLists(proxyList);
  };

  //Logic to load from local storage
  useEffect(() => {
    //Initial array (for setting state)
    let initList = [
      {
        Name: "Media",
        Items: [
          { Task: "Post Vlog On Youtube", Done: false },
          { Task: "Post Video On Youtube", Done: false },
        ],
      },
      {
        Name: "Social",
        Items: [
          { Task: "Post Photo on Main Instagram", Done: false },
          { Task: "Post Photo on r/ITAP", Done: false },
          { Task: "Post Photo on Printing Instagram", Done: false },
          { Task: "Share Vlog On Facebook", Done: false },
        ],
      },
    ];

    const localList = JSON.parse(localStorage.getItem("listData") || "false");
    if (localList) {
      updateLists(localList);
    } else {
      updateLists(initList);
    }
  }, []);

  //Logic to save to local storage
  useEffect(() => {
    localStorage.setItem("listData", JSON.stringify(lists));
  }, [lists]);

  //Checklist render logic.
  let renderedChecks = lists.map(({ Name, Items }) => {
    let renderedCheckItems = Items.map(
      ({ Task, Done }: { Task: string; Done: boolean }) => {
        if (Done) {
          return (
            <div className="listItem done" onClick={checkHandler}>
              <p className="taskText">{Task}</p>
              <img src={checked} alt="" className="taskImg" />
            </div>
          );
        } else {
          return (
            <div className="listItem" onClick={checkHandler}>
              <p className="taskText">{Task}</p>
              <img src={blank} alt="" className="taskImg" />
            </div>
          );
        }
      }
    );

    return (
      <div className="list card">
        <h2 className="clTitle">{Name}</h2>
        <div className="listitemCont">{renderedCheckItems}</div>
        <button className="resetButton" onClick={resetHandler}>
          Reset List
        </button>
      </div>
    );
  });

  //Function Return Statement
  return (
    <div className="Productivity">
      <h2 className="modTitle">Productivity</h2>
      <div className="listSel"></div>
      <div className="listDisp">{renderedChecks}</div>
    </div>
  );
};

/* Export Statement */
export default Productivity;
