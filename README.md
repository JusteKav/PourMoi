<div id="top"></div>

<!-- PROJECT LOGO -->
<div align="center">

  <p align="center">
    <h1>PourMoi </h1>
    <a href="https://github.com/JusteKav/PourMoi/new/main?readme=1#usage">Usage</a>
    ·
    <a href="https://github.com/JusteKav/PourMoi/new/main?readme=1#getting-started">Getting started</a>
    ·
    <a href="https://github.com/JusteKav/PourMoi/new/main?readme=1#contact">Contact</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

![image](https://user-images.githubusercontent.com/90303972/156739865-a791dfe7-6750-49fc-894b-2424ee8a9824.png)

PourMoi is an e-shop where you can buy high-quality jewelry made of silver or gold. It does not currently have full functionality, but the following features are available:

- registration and login
- authentication and authorisation
- data fetching from MongoDB
- administrator role can use CRUD actions to change e-shop product data.

In the near future, it is planned to enable filters in the e-shop and enable the adding of the item in the basket.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MUI](https://mui.com/)
- [Formik](https://formik.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started
In order to start the project, you must necessarily implement all the steps indicated below. To do this, you must install the following programs:

- [Node.js](https://nodejs.org/en/download/)
- [Visual Studio or other IDE program](https://code.visualstudio.com/download)

### Prerequisites

The project requires a database, so you need to create a new database with MongoDB. Later you will need its reference, which will need to be entered in env. file.

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/JusteKav/PourMoi.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Fill your env. file
   ```js
   SERVER_PORT=
   SERVER_DOMAIN=
   DB_CONNECTION=
   HASH_SECRET=
   TOKEN_SECRET=
   PUBLIC_PATH=
   IMG_FOLDER_NAME=;
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

In order to use the administrator role functionality, it is necessary to change the role type to "ADMIN" in the MongoDB user information.
![image](https://user-images.githubusercontent.com/90303972/156746402-d466458b-97bd-4b14-86ba-f2dd185eb993.png)
<br>
<br>
<br>
The absence of a delete icon means that with this specified type, color, etc. a product is already created on the page. To delete this data, it is necessary to delete all products related to it.
![image](https://user-images.githubusercontent.com/90303972/156747041-97890e64-5d77-4ca5-ac01-040dae37d759.png)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Justė Kavaliauskaitė - justekavaliauskaite2gmail.com

Project Link: [https://github.com/JusteKav/PourMoi](https://github.com/JusteKav/PourMoi)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments


Sources to help you better understand the project code.

- [Formik documentation](https://formik.org/docs/api/connect)
- [Intro to React](https://reactjs.org/tutorial/tutorial.html)
- [Axios API](https://axios-http.com/docs/api_intro)
- [MUI components application](https://mui.com/api/accordion/)


<p align="right">(<a href="#top">back to top</a>)</p>
