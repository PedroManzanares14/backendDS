import cors from 'cors';
import express from "express";
import Routes from "./Routes/Routes.js";
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import GetMongoConnection from "./Database/Connection.js";

const Application = express();

GetMongoConnection();
Application.use(cors());
Application.use(bodyParser.json());
Application.use(bodyParser.urlencoded({ extended: true }));
Application.use(fileUpload({ useTempFiles: true, tempFileDir: './Upload' }));
Application.use('/backend/api/rest/sivardenuncias/server/node/route/fetch/axios', Routes);

export default Application;