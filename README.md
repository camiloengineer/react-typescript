
## Documentación


I.- Typescript 4.5

1 de octubre de 2012 por microsoft, multiplataforma, influido por javascript -> 9 años

https://www.typescriptlang.org/

Instalar dependencias 

Comandos:

```sh
npm install -g typescript    <-- Instalación
tsc -v         				 <-- obtener versión
tsc --init  				 <-- Iniciar typescript
npx ts-node index.ts  	     <-- Ejecutar archivo
tsc -w -p .  				 <-- hacer build
```

II.- Typescript con React

Prerequisitos

1. Node >= 8.0 ( Instalar binario recomendado, no últimas carácteristicas porque arroja bugs con typescript -> https://nodejs.org/en/ ) 
2. Visual Studio Code
3. yarn install -g   			
4. Git

Instalaciones recomendadas:
ES7 React-Redux
ESLint
Git Graph
Tabnine

Crear Proyecto
npx create-react-app my-app --template typescript

https://github.com/cgonzalezm1234/react-giftexpertapp

Crear modelo de json a typescript
http://json2ts.com/


ESLint
yarn add eslint --dev
npm i -g eslint
eslint --init


Código fuente del proyecto
https://github.com/cgonzalezm1234/react-typescript

----

Fuentes:

* https://www.typescriptlang.org/

* Using TypeScript with Create React App
https://reactjs.org/docs/static-type-checking.html#using-typescript-with-create-react-app

* TypeScript - Guía completa y manual de mano (Fernando Herrera)
https://www.youtube.com/watch?v=FufR-Vailzk&list=PLCKuOXG0bPi2J-C0WPRZdHTG6pareIvV2

* React+TypeScript (Fernando Herrera)
https://www.youtube.com/watch?v=dNxaP_BTtwQ&list=PLCKuOXG0bPi26-eawizqyLOgM7j66H_4M

* React & Typescript, Ejemplo Práctico sencillo (Fazt)
https://www.youtube.com/watch?v=IbJFERe9F9w



















    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( (cats: any) => [ inputValue, ...cats ] );
            setInputValue('');
        }
    }




    {
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "jest"
    ],
    "rules": {
    }
}
