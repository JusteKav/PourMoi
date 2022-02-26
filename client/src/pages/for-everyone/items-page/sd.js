// const [imgData, setImgData] = useState([]);

// const updateImgData = (newImgData) => {
//   setImgData([...imgData, ...newImgData]);
// };

// const handleImageDelete = async (id) => {
//   await ImageService.deleteImage(id);
//   setImgData(imgData.filter((x) => x.id !== id));
// };

// useEffect(() => {
//   (async () => {
//     const fetchedImgData = await ImageService.getImages();
//     setImgData(fetchedImgData);
//   })();
// }, []);

// const fileUploadRef = useRef(null);

// const handleUploadFiles = () => {
//   console.log('handle upload files');
//   fileUploadRef.current.click();
// };

// const handleImagesLoaded = async () => {
//   console.log('handle images loaded');
//   const input = fileUploadRef.current;
//   const data = await ImageService.uploadImages(input.files);
//   console.log(data);
//   updateImgData(data);
// };
