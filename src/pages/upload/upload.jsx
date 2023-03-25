import React, { useRef } from 'react';
import axios from 'axios';
import useFileUpload from 'react-use-file-upload';
import { Box, Button, Container, Typography } from '@mui/material';

const Upload = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = createFormData();

    try {
      axios.post('https://some-api.com', formData, {
        'content-type': 'multipart/form-data',
      });
    } catch (error) {
      console.error('Failed to submit files.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} p={2} sx={{ textAlign: 'center' }}>
        <Typography variant="h3" mb={2}>Upload Files</Typography>
        <Typography variant="body1" mb={2}>Please use the form below to upload any file(s) of your choosing.</Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px solid grey"
          p={2}
          mb={4}
          sx={{ minHeight: '200px', borderRadius: '4px' }}
          onDragEnter={handleDragDropEvent}
          onDragOver={handleDragDropEvent}
          onDrop={(e) => {
            handleDragDropEvent(e);
            setFiles(e, 'a');
          }}
        >
          <Typography variant="body1" mb={2}>Drag and drop files here</Typography>
          <Button variant="outlined" onClick={() => inputRef.current.click()}>Or select files to upload</Button>
          <input
            ref={inputRef}
            type="file"
            multiple
            style={{ display: 'none' }}
            onChange={(e) => {
              setFiles(e, 'a');
              inputRef.current.value = null;
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ul>
            {fileNames.map((name) => (
              <li key={name}>
                <Typography variant="body1" component="span">{name}</Typography>
                <Button variant="text" onClick={() => removeFile(name)}>
                  <i className="fa fa-times" />
                </Button>
              </li>
            ))}
          </ul>

          {files.length > 0 && (
            <ul>
              <li>File types found: {fileTypes.join(', ')}</li>
              <li>Total Size: {totalSize}</li>
              <li>Total Bytes: {totalSizeInBytes}</li>
              <li className="clear-all">
                <Button variant="outlined" onClick={() => clearAllFiles()}>Clear All</Button>
              </li>
            </ul>
          )}
        </Box>
        <Button variant="contained" onClick={handleSubmit} sx={{ mt: 4 }}>Submit</Button>
      </Box>
    </Container>
  );
};

export default Upload;
