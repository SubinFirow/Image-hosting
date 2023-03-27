import React, { useRef, useState } from "react";
import useFileUpload from "react-use-file-upload";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "..//../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useDispatch, useSelector} from 'react-redux';
import { imageUpload } from "../../redux/slices/img-slices";

const Upload = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const storeImage = useSelector(state => state.image) 

  const dispatch=useDispatch()

  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload();

  const inputRef = useRef();
  const handleUploadResponse = (url) => {
    dispatch(imageUpload(url))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = createFormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "rohrpnch");
    formData.append("api_key", "636477119246411");
    const options = {
      method: "POST",
      body: formData,
    };
    return fetch(
      "https://api.Cloudinary.com/v1_1/:dix2mlb9q/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        // setResult(prevState => [...prevState , res.secure_url]);
        alert("image added")
        handleUploadResponse(res.secure_url);
      })
      .catch((err) => console.log(err));
  };

  const userLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} p={2} sx={{ textAlign: "center" }}>
        <Typography variant="h3" mb={2}>
        Upload Files 
        </Typography>
        <Typography variant="body1" mb={2}>
          Please use the form below to upload any file(s) of your choosing.
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px solid grey"
          p={2}
          mb={4}
          sx={{ minHeight: "200px", borderRadius: "4px" }}
          onDragEnter={handleDragDropEvent}
          onDragOver={handleDragDropEvent}
          onDrop={(e) => {
            handleDragDropEvent(e);
            setFiles(e, "a");
          }}
        >
          <Typography variant="body1" mb={2}>
            Drag and drop files here
          </Typography>
          <Button variant="outlined" onClick={() => inputRef.current.click()}>
            Or select files to upload
          </Button>
          <input
            ref={inputRef}
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={(e) => {
              setFiles(e, "a");
              inputRef.current.value = null;
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ul>
            {fileNames.map((name) => (
              <li key={name}>
                <Typography variant="body1" component="span">
                  {name}
                </Typography>
                <Button variant="text" onClick={() => removeFile(name)}>
                  <i className="fa fa-times" />
                </Button>
              </li>
            ))}
          </ul>

          {files.length > 0 && (
            <ul>
              <li>File types found: {fileTypes.join(", ")}</li>
              <li>Total Size: {totalSize}</li>
              <li>Total Bytes: {totalSizeInBytes}</li>
              <li className="clear-all">
                <Button variant="outlined" onClick={() => clearAllFiles()}>
                  Clear All
                </Button>
              </li>
            </ul>
          )}
        </Box>
        <Typography variant="h6" mb={2}>
        click submit to add images
        </Typography>
        <Button variant="contained" onClick={handleSubmit} sx={{ mt: 4 }}>
          Submit
        </Button>
        <Button variant="contained" onClick={() => navigate('/gallery')} sx={{ mt: 4, ml:4 }} disabled={!storeImage.image.length}>
          Go to Gallery
        </Button>
      </Box>
      <Button variant="contained" onClick={() => userLogout()} sx={{ mt: 4 }}>
        Logout
      </Button>
    </Container>
  );
};

export default Upload;
