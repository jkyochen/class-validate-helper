import { IsString } from 'class-validator';
import { Validate } from '../src';

describe("Validate", () => {

    it("Validate success", async () => {
        class User {
            @IsString()
            name: string
        }
        class Controller {
            @Validate()
            async getUser(user: User) {
                return user.name;
            }
        }
        let controller = new Controller();
        expect(await controller.getUser({name: ""})).toEqual("");
    });

});
