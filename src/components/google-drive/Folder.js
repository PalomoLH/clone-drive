import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const Folder = ({ folder }) => {
  return (
    <Button
      as={Link}
      variant="outline-dark"
      to={`/folder/${folder.id}`}
      className="text-truncate w-100"
    >
      <FontAwesomeIcon icon={faFolder} className="me-2" />
      {folder.name}
    </Button>
  );
};

export default Folder;
