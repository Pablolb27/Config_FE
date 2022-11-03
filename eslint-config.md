# Instalamos los paquetes en devDependences:
```
"@angular-eslint/builder": "12.3.1",    
"@angular-eslint/eslint-plugin": "12.1.0",    
"@angular-eslint/eslint-plugin-template": "12.1.0",    
"@angular-eslint/schematics": "12.1.0",    
"@angular-eslint/template-parser": "12.1.0",
"@typescript-eslint/eslint-plugin": "4.28.0",    
"@typescript-eslint/parser": "4.28.0",    
"eslint": "7.24.0",    
"eslint-plugin-deprecation": "1.2.0",    
"eslint-plugin-import": "2.22.1",    
"eslint-plugin-jsdoc": "32.3.0",    
"eslint-plugin-prefer-arrow": "1.2.3",
```

# añadimos los ficheros (eslintignore, eslintrc.js, eslint-config-basic.js) en la raiz del proyecto.

- en el angular.json en la linea:
```
builder": "@angular-devkit/build-angular:tslint"
```

- la reemplazamos por: 
```
"builder": "@angular-eslint/builder:lint"
```

# el options de la opcion lint del fichero angular.json lo reemplazamos por:
```
"options": {
    "lintFilePatterns": [
        "src/**/*.ts",
        "src/**/*.js",
        "src/**/*.html",
        "e2e/**/*.ts",
        "e2e/**/*.js",
        "e2e/**/*.html",
        "scripts/**/*.js",
        "*.js",
        ".*.js"
    ]
}
```


