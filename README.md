
[![npm version](https://badge.fury.io/js/class-validate-helper.svg)](https://www.npmjs.com/package/class-validate-helper)

# class-validate-helper

## Installation

```sh
# install peerDependencies
npm install reflect-metadata class-validator class-transformer --save
# install class-validate-helper
npm install class-validate-helper --save
```

## Example Auto Validate

```ts
class TestValidate {

    @Validate()
    async getUser(user?: User) {
    }

}
```
