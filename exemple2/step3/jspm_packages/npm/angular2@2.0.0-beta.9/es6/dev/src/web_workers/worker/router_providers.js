/* */ 
"format cjs";
import { Provider, NgZone, APP_INITIALIZER } from 'angular2/core';
import { PlatformLocation } from 'angular2/src/router/location/platform_location';
import { WebWorkerPlatformLocation } from './platform_location';
import { ROUTER_PROVIDERS_COMMON } from 'angular2/src/router/router_providers_common';
export var WORKER_APP_ROUTER = [
    ROUTER_PROVIDERS_COMMON,
    new Provider(PlatformLocation, { useClass: WebWorkerPlatformLocation }),
    new Provider(APP_INITIALIZER, {
        useFactory: (platformLocation, zone) => () => initRouter(platformLocation, zone),
        multi: true,
        deps: [PlatformLocation, NgZone]
    })
];
function initRouter(platformLocation, zone) {
    return zone.run(() => { return platformLocation.init(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy93b3JrZXIvcm91dGVyX3Byb3ZpZGVycy50cyJdLCJuYW1lcyI6WyJpbml0Um91dGVyIl0sIm1hcHBpbmdzIjoiT0FBTyxFQUFpQixRQUFRLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBQyxNQUFNLGVBQWU7T0FDeEUsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdEQUFnRDtPQUN4RSxFQUFDLHlCQUF5QixFQUFDLE1BQU0scUJBQXFCO09BQ3RELEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2Q0FBNkM7QUFFbkYsV0FBVyxpQkFBaUIsR0FBRztJQUM3Qix1QkFBdUI7SUFDdkIsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUseUJBQXlCLEVBQUMsQ0FBQztJQUNyRSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQ2Y7UUFDRSxVQUFVLEVBQUUsQ0FBQyxnQkFBMkMsRUFBRSxJQUFZLEtBQUssTUFDM0QsVUFBVSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQztRQUNsRCxLQUFLLEVBQUUsSUFBSTtRQUNYLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQztLQUNqQyxDQUFDO0NBQ2hCLENBQUM7QUFFRixvQkFBb0IsZ0JBQTJDLEVBQUUsSUFBWTtJQUMzRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsTUFBTUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUM3REEsQ0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcGxpY2F0aW9uUmVmLCBQcm92aWRlciwgTmdab25lLCBBUFBfSU5JVElBTElaRVJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvcm91dGVyL2xvY2F0aW9uL3BsYXRmb3JtX2xvY2F0aW9uJztcbmltcG9ydCB7V2ViV29ya2VyUGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnLi9wbGF0Zm9ybV9sb2NhdGlvbic7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlNfQ09NTU9OfSBmcm9tICdhbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlcl9wcm92aWRlcnNfY29tbW9uJztcblxuZXhwb3J0IHZhciBXT1JLRVJfQVBQX1JPVVRFUiA9IFtcbiAgUk9VVEVSX1BST1ZJREVSU19DT01NT04sXG4gIG5ldyBQcm92aWRlcihQbGF0Zm9ybUxvY2F0aW9uLCB7dXNlQ2xhc3M6IFdlYldvcmtlclBsYXRmb3JtTG9jYXRpb259KSxcbiAgbmV3IFByb3ZpZGVyKEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogKHBsYXRmb3JtTG9jYXRpb246IFdlYldvcmtlclBsYXRmb3JtTG9jYXRpb24sIHpvbmU6IE5nWm9uZSkgPT4gKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRSb3V0ZXIocGxhdGZvcm1Mb2NhdGlvbiwgem9uZSksXG4gICAgICAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgICAgICAgICBkZXBzOiBbUGxhdGZvcm1Mb2NhdGlvbiwgTmdab25lXVxuICAgICAgICAgICAgICAgfSlcbl07XG5cbmZ1bmN0aW9uIGluaXRSb3V0ZXIocGxhdGZvcm1Mb2NhdGlvbjogV2ViV29ya2VyUGxhdGZvcm1Mb2NhdGlvbiwgem9uZTogTmdab25lKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHJldHVybiB6b25lLnJ1bigoKSA9PiB7IHJldHVybiBwbGF0Zm9ybUxvY2F0aW9uLmluaXQoKTsgfSk7XG59XG4iXX0=