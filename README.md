# wcm-image-helper
A WCM image helper directive

## How to use

1. Add the following dependency to your bower.json file: <br/>
    ```js
        "wcm-image-helper": "https://github.com/JvJefke/wcm-image-helper.git#[version]"
    ```
2. Run bower install.
3. Configure the helper in the config of your angular application.<br/>
    ```js
        angular.module('your module')
            .config([
                'wcmImageHelperProvider',
                function (wcmImageHelper) {
                    wcmImageHelper.setConfiguration({
                        serverPath: 'server path of the wcm proxy',
                        apikey: 'your application apikey',
                        tenant: 'name of wcm tenant to connect to'
                    });
                }
            ]);
    ```
4. Use it.

    For a background:
    ```html
        <div wcm-bg-src="your source as a reference (=)"></div>
    ```

    For a image source:
    ```html
        <img wcm-img-src="your source as a reference (=)"></div>
    ```
