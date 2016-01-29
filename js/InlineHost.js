var log = (typeof (console) != 'undefined' && (console != undefined) && console.log && (console.log != undefined)) ? function (data) {
    console.log(data);
} : function (data) {
};

var AltLan = AltLan || {};
AltLan.Widget = AltLan.Widget || {};

var InlineHost = (function () {
    function InlineHost(elementId, options, navigationCallBack) {
        if (typeof navigationCallBack === "undefined") { navigationCallBack = $.noop; }
        this.loaded = false;
        this.initialized = false;
        this.containerElement = $("#" + elementId);
        this.options = options;
        this.navigationCallBack = navigationCallBack;
        this.token = window.idToken || this.options.IdToken;
    }
    InlineHost.prototype.Extend = function (a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
            //return a;
        }
        return a;
    };


    InlineHost.prototype.showErrorStub = function () {
        var parent = this.containerElement.parent();
        parent.empty();
        parent.append($("#LoadErrorBlock").html());
    };

    InlineHost.prototype.ensureWidgetInitialized = function () {
        var _this = this;
        this.widgetInitDeferred = $.Deferred();
        if (this.initialized) {
            this.widgetInitDeferred.resolve();
            return;
        }

        this.containerElement.empty();
        this.initialized = true;

        this.LoadCss(this.options.WidgetDomain + '/Content/css/Externalbuilt');


        var scriptsTask = $.Deferred();

        $.getScript(this.options.WidgetDomain + '/bundles/ExternalBuilt', function () {
            return scriptsTask.resolve();
        });

        var templatesTask = $.Deferred();
        $.get(this.options.WidgetDomain + '/Templates').done(function (data) {
            $('<div  id="AltLanPayTemplates" style="height:0px; display: none"></div>').append(data).appendTo($('body'));
            templatesTask.resolve();
        });
        var self = this;
        $.when(scriptsTask, templatesTask).then(function () {
            _this.configureRequireJS();
            _this.requirePay(["require", "Services/CrossRoads", 'Services/Settings', 'app', 'Services/HttpClient', 'Services/PopupManager'], function (req, router, settings, app, httpClient, popupManagerModule) {
                settings.apiBaseUrl = self.options.WidgetDomain;
                settings.Token = _this.token;

                AltLan = AltLan || {};
                AltLan.Pay = AltLan.Pay || {};
                AltLan.Pay.Settings = settings;

                self.app = app;
                self.containerElement.append($('#PrimaryPayTemplate').html());

                var requestedRoute = window.location.hash.replace('#', '') || _this.getParameterByName('targetRoute');
                var parsedRoute = router.ParseRoute(requestedRoute);

                popupManagerModule.PopupManager = new popupManagerModule.PopupManagerClass(self);
                self.options.ActiveRoute = '/' + parsedRoute.section + '/' + parsedRoute.page;
                var extraParam = '';

                if (parsedRoute.initialRoute == '' || parsedRoute.initialRoute == '#')
                    extraParam = '?initial=true';

                httpClient.Get(self.options.WidgetDomain + '/api/' + self.options.ActiveRoute + extraParam).then(function (data) {
                    return app.start({ RoutingParams: parsedRoute.extraParams }, data, self);
                }).then(function () {
                    return self.widgetInitDeferred.resolve();
                }, function () {
                    return self.showErrorStub();
                });
            });
        }, function () {
            return self.showErrorStub();
        });

        if (!this.loaded) {
            $(window).on('hashchange', function () {
                self.app.ChangeActiveScreen(window.location.hash.replace('#', ''));
            });
        }
        this.loaded = true;

        return this.widgetInitDeferred.promise();
    };

    InlineHost.prototype.show = function () {
        var _this = this;
        if ($("#LargePayWidgetLoader").length == 0)
            this.containerElement.parent().append($('<div id="LargePayWidgetLoader" style="position:relative;"><img src="' + this.options.WidgetUrl + '/Content/img/LoaderGeneral.jpg" class="content-block" style="width:100%;border: 1px solid #c8c8c8; padding:0;" /><img src="' + this.options.WidgetUrl + '/Content/img/loading.gif" style="position:absolute;left:47.2%; top:53%; width:35px;" /></div>"'));
        $("#LargePayWidgetLoader").show();

        this.ensureWidgetInitialized().then(function () {
            _this.containerElement.show();
            $("#LargePayWidgetLoader").hide();
        });
    };

    InlineHost.prototype.hide = function () {
        this.containerElement.hide();
    };

    InlineHost.prototype.close = function () {
        this.containerElement.hide();
    };

    InlineHost.prototype.LoadCss = function (path) {
        if (document.createStyleSheet) {
            try  {
                document.createStyleSheet(path);
            } catch (e) {
            }
        } else {
            var css;
            css = document.createElement('link');
            css.rel = 'stylesheet';
            css.type = 'text/css';
            css.media = "all";
            css.href = path;
            document.getElementsByTagName("head")[0].appendChild(css);
        }
    };

    InlineHost.prototype.configureRequireJS = function () {
        var customRequire = null;
        if (typeof AltLanPay !== 'undefined') {
            customRequire = AltLanPay.require;
        } else
            customRequire = require;

        this.requirePay = customRequire.config({
            baseUrl: this.options.WidgetDomain + "/Scripts/App",
            waitSeconds: 10,
            config: {
                text: {
                    useXhr: function (url, protocol, hostname, port) {
                        return true;
                    }
                }
            }
        });
    };

    InlineHost.prototype.receiveMessage = function (e, authTask) {
        try  {
            if (e.origin.toUpperCase() == this.options.WidgetDomain.toUpperCase()) {
                var action = e.data.split('#')[0];
                var data = e.data.split('#')[1] || '';

                if (action == 'AuthResult') {
                    this.token = data;
                    authTask.resolve(data);
                }
            }
        } catch (e) {
        }
    };

    InlineHost.prototype.getParameterByName = function (name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    };
    return InlineHost;
})();
//# sourceMappingURL=InlineHost.js.map
