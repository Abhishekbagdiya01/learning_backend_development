import { error } from 'console';
import * as fs from 'fs';
import * as path from 'path';
export class UserData {

    getAllUser(callBack: (response: string | undefined) => void): void {

        fs.readFile(path.join(__dirname, "user_response.json"), "utf-8", (error, result) => {

            callBack(result)
        })



    }



    addUser(username: string): string {
        return `${username} is added`;
    }
}