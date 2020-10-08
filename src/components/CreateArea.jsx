import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [isExpanded, setExpanded] = useState(false);

  function onTitleInput(e) {
    setTitleInput(e.target.value);
  }

  function onContentInput(e) {
    setContentInput(e.target.value);
  }

  function onAddNote(e) {
    e.preventDefault();
    props.onAdd(titleInput, contentInput);

    setTitleInput("");
    setContentInput("");
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div onClick={expand}>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            placeholder="Title"
            onChange={onTitleInput}
            value={titleInput}
          />
        ) : null}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          onChange={onContentInput}
          value={contentInput}
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={onAddNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
