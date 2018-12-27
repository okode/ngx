import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ActionSheetController, Platform } from '@ionic/angular';
var Environment = /** @class */ (function () {
    function Environment(http, storage, actionSheetCtrl, platform) {
        this.http = http;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.JSON_PATH = 'assets/environments.json';
        this.SELECTED_ENVIRONMENT_KEY = 'selectedEnvironmentKey';
        this.isInitializing = false;
        this.readyPromiseResolve = [];
        this.readyPromiseReject = [];
    }
    Environment.config = function () {
        if (!Environment.isReady) {
            console.error("Environment config is not ready (wait for Environment.ready())");
        }
        return Environment.environmentConfig;
    };
    Environment.prototype.ready = function () {
        var _this = this;
        if (Environment.isReady) {
            return Promise.resolve();
        }
        if (!this.isInitializing) {
            this.isInitializing = true;
            this.initEnvs();
        }
        return new Promise(function (resolve, reject) {
            _this.readyPromiseResolve.push(resolve);
            _this.readyPromiseReject.push(reject);
        });
    };
    Environment.prototype.initEnvs = function () {
        var _this = this;
        this.http.get(this.JSON_PATH).subscribe(function (json) {
            if (json == null || Object.keys(json).length === 0) {
                _this.readyPromiseReject.forEach(function (reject) { return reject(); });
                console.error("EnvironmentService fails: '" + _this.JSON_PATH + "' is empty or invalid");
                return;
            }
            var environments = Object.keys(json).filter(function (environment) { return environment !== 'default'; });
            if (environments == null || environments.length === 0) {
                _this.setEnv(false, 'default', json['default']);
            }
            else {
                _this.storage.ready().then(function () {
                    _this.storage.get(_this.SELECTED_ENVIRONMENT_KEY).then(function (storedEnvironment) {
                        if (storedEnvironment == null) {
                            if (environments.length > 1) {
                                console.log('No saved environment detected, will prompt user for selection');
                                _this.showEnvironmentActionSheet(environments, json);
                            }
                            else {
                                var environment = environments[0];
                                _this.setEnv(true, environment, json['default'], json[environment]);
                            }
                        }
                        else {
                            console.log("Detected saved environment: " + storedEnvironment);
                            _this.setEnv(false, storedEnvironment, json['default'], json[storedEnvironment]);
                        }
                    });
                });
            }
        }, function (err) {
            console.log(err);
            console.error("EnvironmentService fails: Not found '" + _this.JSON_PATH + "'");
            _this.readyPromiseReject.forEach(function (reject) { return reject(); });
        });
    };
    Environment.prototype.setEnv = function (save, environmentKey, configBase, configEnvironment) {
        console.log("Applying environment: " + environmentKey);
        Environment.environmentConfig = configBase;
        if (configEnvironment != null) {
            Environment.environmentConfig = tslib_1.__assign({}, configBase, configEnvironment);
        }
        if (save) {
            console.log("Saving environment: " + environmentKey);
            this.storage.set(this.SELECTED_ENVIRONMENT_KEY, environmentKey);
        }
        Environment.isReady = true;
        this.readyPromiseResolve.forEach(function (resolve) { return resolve(); });
    };
    Environment.prototype.showEnvironmentActionSheet = function (environments, configs) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: 'Select environment',
                                backdropDismiss: false,
                                buttons: environments.map(function (environment) { return ({
                                    text: environment,
                                    handler: function () {
                                        _this.setEnv(true, environment, configs['default'], configs[environment]);
                                    }
                                }); })
                            })];
                    case 2:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Environment.isReady = false;
    Environment.environmentConfig = {};
    Environment.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Environment.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Storage },
        { type: ActionSheetController },
        { type: Platform }
    ]; };
    return Environment;
}());
export { Environment };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1va29kZS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZW52aXJvbm1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRTtJQVlFLHFCQUNVLElBQWdCLEVBQ2hCLE9BQWdCLEVBQ2hCLGVBQXNDLEVBQ3RDLFFBQWtCO1FBSGxCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVZYLGNBQVMsR0FBRywwQkFBMEIsQ0FBQztRQUN2Qyw2QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztRQUM3RCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2Qix3QkFBbUIsR0FBbUQsRUFBRSxDQUFDO1FBQ3pFLHVCQUFrQixHQUErQixFQUFFLENBQUM7SUFPekQsQ0FBQztJQUVHLGtCQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7U0FDakY7UUFDRCxPQUFPLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUFBLGlCQVVDO1FBVEMsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FBRTtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7UUFDRCxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDdkMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDhCQUFRLEdBQWhCO1FBQUEsaUJBaUNDO1FBaENDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQzFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2xELEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBOEIsS0FBSSxDQUFDLFNBQVMsMEJBQXVCLENBQUMsQ0FBQztnQkFDbkYsT0FBTzthQUNSO1lBQ0QsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxXQUFXLEtBQUssU0FBUyxFQUF6QixDQUF5QixDQUFDLENBQUM7WUFDeEYsSUFBSSxZQUFZLElBQUksSUFBSSxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNyRCxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLGlCQUFpQjt3QkFDcEUsSUFBSSxpQkFBaUIsSUFBSSxJQUFJLEVBQUU7NEJBQzdCLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0NBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0RBQStELENBQUMsQ0FBQztnQ0FDN0UsS0FBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQzs2QkFDckQ7aUNBQU07Z0NBQ0wsSUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNwQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzZCQUNwRTt5QkFDRjs2QkFBTTs0QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUErQixpQkFBbUIsQ0FBQyxDQUFDOzRCQUNoRSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQzt5QkFDakY7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBRSxVQUFBLEdBQUc7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsMENBQXdDLEtBQUksQ0FBQyxTQUFTLE1BQUcsQ0FBQyxDQUFDO1lBQ3pFLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyw0QkFBTSxHQUFkLFVBQWUsSUFBYSxFQUFFLGNBQXNCLEVBQUUsVUFBZSxFQUFFLGlCQUF1QjtRQUM1RixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUF5QixjQUFnQixDQUFDLENBQUM7UUFDdkQsV0FBVyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQztRQUMzQyxJQUFJLGlCQUFpQixJQUFJLElBQUksRUFBRTtZQUM3QixXQUFXLENBQUMsaUJBQWlCLHdCQUFRLFVBQVUsRUFBSyxpQkFBaUIsQ0FBRSxDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF1QixjQUFnQixDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFYSxnREFBMEIsR0FBeEMsVUFBeUMsWUFBc0IsRUFBRSxPQUFZOzs7Ozs7NEJBQzNFLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUEzQixTQUEyQixDQUFDO3dCQUNSLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2dDQUNwRCxNQUFNLEVBQUUsb0JBQW9CO2dDQUM1QixlQUFlLEVBQUUsS0FBSztnQ0FDdEIsT0FBTyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxDQUFDO29DQUN4QyxJQUFJLEVBQUUsV0FBVztvQ0FDakIsT0FBTyxFQUFFO3dDQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0NBQzNFLENBQUM7aUNBQ0YsQ0FBQyxFQUx1QyxDQUt2QyxDQUFDOzZCQUNKLENBQUMsRUFBQTs7d0JBVEksV0FBVyxHQUFHLFNBU2xCO3dCQUNGLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Ozs7S0FDdkI7SUFqR2MsbUJBQU8sR0FBRyxLQUFLLENBQUM7SUFDaEIsNkJBQWlCLEdBQVEsRUFBRSxDQUFDOztnQkFKNUMsVUFBVTs7OztnQkFKRixVQUFVO2dCQUNWLE9BQU87Z0JBQ1AscUJBQXFCO2dCQUFFLFFBQVE7O0lBd0d4QyxrQkFBQztDQUFBLEFBdEdELElBc0dDO1NBckdZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IEFjdGlvblNoZWV0Q29udHJvbGxlciwgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaXNSZWFkeSA9IGZhbHNlO1xuICBwcml2YXRlIHN0YXRpYyBlbnZpcm9ubWVudENvbmZpZzogYW55ID0ge307XG5cbiAgcHJpdmF0ZSByZWFkb25seSBKU09OX1BBVEggPSAnYXNzZXRzL2Vudmlyb25tZW50cy5qc29uJztcbiAgcHJpdmF0ZSByZWFkb25seSBTRUxFQ1RFRF9FTlZJUk9OTUVOVF9LRVkgPSAnc2VsZWN0ZWRFbnZpcm9ubWVudEtleSc7XG4gIHByaXZhdGUgaXNJbml0aWFsaXppbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZWFkeVByb21pc2VSZXNvbHZlOiAoKHZhbHVlPzogdm9pZCB8IFByb21pc2VMaWtlPHZvaWQ+KSA9PiB2b2lkKVtdID0gW107XG4gIHByaXZhdGUgcmVhZHlQcm9taXNlUmVqZWN0OiAoKHJlYXNvbj86IGFueSkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsXG4gICAgcHJpdmF0ZSBhY3Rpb25TaGVldEN0cmw6IEFjdGlvblNoZWV0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgc3RhdGljIGNvbmZpZygpIHtcbiAgICBpZiAoIUVudmlyb25tZW50LmlzUmVhZHkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVudmlyb25tZW50IGNvbmZpZyBpcyBub3QgcmVhZHkgKHdhaXQgZm9yIEVudmlyb25tZW50LnJlYWR5KCkpYCk7XG4gICAgfVxuICAgIHJldHVybiBFbnZpcm9ubWVudC5lbnZpcm9ubWVudENvbmZpZztcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIGlmIChFbnZpcm9ubWVudC5pc1JlYWR5KSB7wqByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH1cbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXppbmcpIHtcbiAgICAgIHRoaXMuaXNJbml0aWFsaXppbmcgPSB0cnVlO1xuICAgICAgdGhpcy5pbml0RW52cygpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5yZWFkeVByb21pc2VSZXNvbHZlLnB1c2gocmVzb2x2ZSk7XG4gICAgICB0aGlzLnJlYWR5UHJvbWlzZVJlamVjdC5wdXNoKHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRFbnZzKCkge1xuICAgIHRoaXMuaHR0cC5nZXQodGhpcy5KU09OX1BBVEgpLnN1YnNjcmliZShqc29uID0+IHtcbiAgICAgIGlmIChqc29uID09IG51bGwgfHwgT2JqZWN0LmtleXMoanNvbikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVhZHlQcm9taXNlUmVqZWN0LmZvckVhY2goKHJlamVjdCkgPT4gcmVqZWN0KCkpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFbnZpcm9ubWVudFNlcnZpY2UgZmFpbHM6ICcke3RoaXMuSlNPTl9QQVRIfScgaXMgZW1wdHkgb3IgaW52YWxpZGApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlbnZpcm9ubWVudHMgPSBPYmplY3Qua2V5cyhqc29uKS5maWx0ZXIoZW52aXJvbm1lbnQgPT4gZW52aXJvbm1lbnQgIT09ICdkZWZhdWx0Jyk7XG4gICAgICBpZiAoZW52aXJvbm1lbnRzID09IG51bGwgfHwgZW52aXJvbm1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnNldEVudihmYWxzZSwgJ2RlZmF1bHQnLCBqc29uWydkZWZhdWx0J10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldCh0aGlzLlNFTEVDVEVEX0VOVklST05NRU5UX0tFWSkudGhlbihzdG9yZWRFbnZpcm9ubWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoc3RvcmVkRW52aXJvbm1lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICBpZiAoZW52aXJvbm1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gc2F2ZWQgZW52aXJvbm1lbnQgZGV0ZWN0ZWQsIHdpbGwgcHJvbXB0IHVzZXIgZm9yIHNlbGVjdGlvbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vudmlyb25tZW50QWN0aW9uU2hlZXQoZW52aXJvbm1lbnRzLCBqc29uKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnZpcm9ubWVudCA9IGVudmlyb25tZW50c1swXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVudih0cnVlLCBlbnZpcm9ubWVudCwganNvblsnZGVmYXVsdCddLCBqc29uW2Vudmlyb25tZW50XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZXRlY3RlZCBzYXZlZCBlbnZpcm9ubWVudDogJHtzdG9yZWRFbnZpcm9ubWVudH1gKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRFbnYoZmFsc2UsIHN0b3JlZEVudmlyb25tZW50LCBqc29uWydkZWZhdWx0J10sIGpzb25bc3RvcmVkRW52aXJvbm1lbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBjb25zb2xlLmVycm9yKGBFbnZpcm9ubWVudFNlcnZpY2UgZmFpbHM6IE5vdCBmb3VuZCAnJHt0aGlzLkpTT05fUEFUSH0nYCk7XG4gICAgICB0aGlzLnJlYWR5UHJvbWlzZVJlamVjdC5mb3JFYWNoKChyZWplY3QpID0+IHJlamVjdCgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW52KHNhdmU6IGJvb2xlYW4sIGVudmlyb25tZW50S2V5OiBzdHJpbmcsIGNvbmZpZ0Jhc2U6IGFueSwgY29uZmlnRW52aXJvbm1lbnQ/OiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhgQXBwbHlpbmcgZW52aXJvbm1lbnQ6ICR7ZW52aXJvbm1lbnRLZXl9YCk7XG4gICAgRW52aXJvbm1lbnQuZW52aXJvbm1lbnRDb25maWcgPSBjb25maWdCYXNlO1xuICAgIGlmIChjb25maWdFbnZpcm9ubWVudCAhPSBudWxsKSB7XG4gICAgICBFbnZpcm9ubWVudC5lbnZpcm9ubWVudENvbmZpZyA9IHvCoC4uLmNvbmZpZ0Jhc2UsIC4uLmNvbmZpZ0Vudmlyb25tZW50IH07XG4gICAgfVxuICAgIGlmIChzYXZlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgU2F2aW5nIGVudmlyb25tZW50OiAke2Vudmlyb25tZW50S2V5fWApO1xuICAgICAgdGhpcy5zdG9yYWdlLnNldCh0aGlzLlNFTEVDVEVEX0VOVklST05NRU5UX0tFWSwgZW52aXJvbm1lbnRLZXkpO1xuICAgIH1cbiAgICBFbnZpcm9ubWVudC5pc1JlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLnJlYWR5UHJvbWlzZVJlc29sdmUuZm9yRWFjaCgocmVzb2x2ZSkgPT4gcmVzb2x2ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2hvd0Vudmlyb25tZW50QWN0aW9uU2hlZXQoZW52aXJvbm1lbnRzOiBzdHJpbmdbXSwgY29uZmlnczogYW55KSB7XG4gICAgYXdhaXQgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpO1xuICAgIGNvbnN0IGFjdGlvblNoZWV0ID0gYXdhaXQgdGhpcy5hY3Rpb25TaGVldEN0cmwuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogJ1NlbGVjdCBlbnZpcm9ubWVudCcsXG4gICAgICBiYWNrZHJvcERpc21pc3M6IGZhbHNlLFxuICAgICAgYnV0dG9uczogZW52aXJvbm1lbnRzLm1hcChlbnZpcm9ubWVudCA9PiAoe1xuICAgICAgICB0ZXh0OiBlbnZpcm9ubWVudCxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0RW52KHRydWUsIGVudmlyb25tZW50LCBjb25maWdzWydkZWZhdWx0J10sIGNvbmZpZ3NbZW52aXJvbm1lbnRdKTtcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgfSk7XG4gICAgYWN0aW9uU2hlZXQucHJlc2VudCgpO1xuICB9XG5cbn1cbiJdfQ==