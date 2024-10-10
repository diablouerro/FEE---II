function downloadFile(url, download) {
    console.log("started downloading");
    
    // Simulating async behavior with setTimeout
    setTimeout(() => {
        // Correctly split the URL and get the file name
        var fileName = url.split("/").pop();
        console.log("File downloaded:", fileName);
        download(fileName);  // Pass the file name to the download callback
    }, 2000);  // Simulate 2 seconds delay
}

function compress(filePath, compressCallback) {
    console.log("compressing the file:", filePath);
    
    // Simulate file compression delay
    setTimeout(() => {
        var compressedFile = filePath + ".zip";  // Mock compression by adding .zip extension
        console.log("File compressed:", compressedFile);
        compressCallback(compressedFile);  // Pass the compressed file to the next callback
    }, 2000);
}

function uploadfile(compressedFile) {
    console.log("Uploading the file:", compressedFile);
    
    // Simulate file upload delay
    setTimeout(() => {
        console.log("File uploaded successfully:", compressedFile);
    }, 2000);
}

// Start the process
downloadFile("www.google.com/iron-man.img", function(filePath) {
    compress(filePath, function(compressedFile) {
        uploadfile(compressedFile);
    });
});

