import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Upload } from "../models/fileupload";

@Injectable()

export class UploadFileService {

    private basePath: string = '/uploads';
    uploads: AngularFireList<Upload[]>;

    constructor(private db: AngularFireDatabase) { }

    pushUpload(upload: Upload) {
        let storageRef = firebase.storage().ref();
        let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100
            },
            (error) => {
                console.log('Error: ' + error)
            },
            () => {
                upload.url = uploadTask.snapshot.downloadURL
                upload.name = upload.file.name
                this.saveFileData(upload)
            }
        );
    }

    private saveFileData(upload: Upload) {
        this.db.list(`${this.basePath}/`).push(upload);
    }

    getFileUploads(numberItems): AngularFireList<Upload> {
        return this.db.list(this.basePath, ref =>
            ref.limitToLast(numberItems));
    }

    deleteUpload(upload: Upload) {
        this.deleteFileData(upload.$key)
            .then(() => {
                this.deleteFileStorage(upload.name);
            })
            .catch(error => console.log(error));
    }

    private deleteFileData(key: string) {
        return this.db.list(`${this.basePath}/`).remove(key);
    }

    private deleteFileStorage(name: string) {
        const storageRef = firebase.storage().ref();
        storageRef.child(`${this.basePath}/${name}`).delete();
    }
}