angular.module('wcmImageHelper')
    .provider('wcmImageHelper', [
        function configurationProvider() {

            var configuration = {
                serverPath: '',
                apikey: '',
                tenant: '',
                loaded: false
            };

            this.setConfiguration = function setConfiguration(conf) {
                angular.extend(configuration, conf);

                // Mark config 'loaded'
                configuration.loaded = true;
            };

            this.$get = function $get() {
                return configuration;
            };

        }
    ]);
