import { IsEmail, IsString } from 'class-validator';
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

    it("Validate fail expect throw error", async () => {
        class User {
            @IsString()
            @IsEmail()
            name: string
        }
        class Controller {
            @Validate()
            async getUser(user: User) {
                return user.name;
            }
        }
        let controller = new Controller();
        await expect(controller.getUser({name: ""})).rejects.toThrow();
    });

});
