import axios from 'axios';
const { IMG_FOLDER_NAME } = process.env;

const ImageService = new (class ProfileService {
  constructor() {
    this.requester = axios.create({
      baseURL: `${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}`,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async uploadImages(files) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i += 1) {
      formData.append('files', files[i]);
    }

    const { data } = await this.requester.post(`/${IMG_FOLDER_NAME}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data.images;
  }

  async deleteImage(id) {
    await this.requester.delete(`/${IMG_FOLDER_NAME}/${id}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
})();

export default ImageService;
