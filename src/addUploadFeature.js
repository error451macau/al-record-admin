// Copying from "Decorating your REST Client (Example of File Upload)"
// + Bug fix according to https://stackoverflow.com/questions/45148956/imageinput-upload-base64-pictures
// + Modifications

const convertFileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve({
        src: reader.result,
        title: file.title
    });
    reader.onerror = reject;
});

const addUploadCapabilities = requestHandler => (type, resource, params) => {
    if (type === 'UPDATE' || type === 'CREATE') {
        if (params.data.files && params.data.files.length) {
            // only freshly dropped files are instance of File
            const formerFiles = params.data.files.filter(p => !(p.rawFile instanceof File));
            const newFiles = params.data.files.filter(p => p.rawFile instanceof File);

            return Promise.all(newFiles.map(convertFileToBase64))
                .then(transformedNewFiles => requestHandler(type, resource, {
                    ...params,
                    data: {
                        ...params.data,
                        files: [...transformedNewFiles, ...formerFiles],
                    },
                }));
        }
    }

    return requestHandler(type, resource, params);
};

export default addUploadCapabilities;
