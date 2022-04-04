import { IsEmail, IsString, Length } from 'class-validator';
import { Validate } from 'class-validate-helper';

class User {
    @IsString()
    @Length(12)
    @IsEmail()
    name: string
}

class TestValidate {

    @Validate()
    async getUser(user?: User) {
        console.log(user.name)
    }

}

new TestValidate().getUser({ name: "1" }).catch(e => {
    console.error("error", e.message);
    console.error("error", e.errors);
});
