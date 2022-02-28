import axios from 'axios';

const ImageService = new (class ProfileService {
  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5070',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async uploadImages(files) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i += 1) {
      formData.append('files', files[i]);
    }

    const { data } = await this.requester.post('/images/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data.images;
  }

  async deleteImage(id) {
    await this.requester.delete(`images/${id}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
})();

export default ImageService;