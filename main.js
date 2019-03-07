(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var cron_editor_cron_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cron-editor/cron-editor */ "./node_modules/cron-editor/cron-editor.js");
/* harmony import */ var cron_editor_cron_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cron_editor_cron_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_figurecard_figurecard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/figurecard/figurecard.component */ "./src/app/shared/figurecard/figurecard.component.ts");
/* harmony import */ var _shared_imagecard_imagecard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/imagecard/imagecard.component */ "./src/app/shared/imagecard/imagecard.component.ts");
/* harmony import */ var _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/table/table.component */ "./src/app/dashboard/table/table.component.ts");
/* harmony import */ var _dashboard_notification_notification_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/notification/notification.component */ "./src/app/dashboard/notification/notification.component.ts");
/* harmony import */ var _shared_msgiconbtn_msgiconbtn_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/msgiconbtn/msgiconbtn.component */ "./src/app/shared/msgiconbtn/msgiconbtn.component.ts");
/* harmony import */ var _dashboard_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/sweetalert/sweetalert.component */ "./src/app/dashboard/sweetalert/sweetalert.component.ts");
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./page/login/login.component */ "./src/app/page/login/login.component.ts");
/* harmony import */ var _dashboard_root_root_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _page_register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./page/register/register.component */ "./src/app/page/register/register.component.ts");
/* harmony import */ var _page_lock_lock_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./page/lock/lock.component */ "./src/app/page/lock/lock.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _dashboard_component_pricetable_pricetable_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dashboard/component/pricetable/pricetable.component */ "./src/app/dashboard/component/pricetable/pricetable.component.ts");
/* harmony import */ var _dashboard_component_panels_panels_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dashboard/component/panels/panels.component */ "./src/app/dashboard/component/panels/panels.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./guards/login.guard */ "./src/app/guards/login.guard.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _dashboard_component_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./dashboard/component/wizard/wizard.component */ "./src/app/dashboard/component/wizard/wizard.component.ts");
/* harmony import */ var _dashboard_registo_registo_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./dashboard/registo/registo.component */ "./src/app/dashboard/registo/registo.component.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _dashboard_connection_connection_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./dashboard/connection/connection.component */ "./src/app/dashboard/connection/connection.component.ts");
/* harmony import */ var _dashboard_access_management_access_management_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./dashboard/access-management/access-management.component */ "./src/app/dashboard/access-management/access-management.component.ts");
/* harmony import */ var _dashboard_create_connection_create_connection_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./dashboard/create-connection/create-connection.component */ "./src/app/dashboard/create-connection/create-connection.component.ts");
/* harmony import */ var _dashboard_extraction_extraction_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./dashboard/extraction/extraction.component */ "./src/app/dashboard/extraction/extraction.component.ts");
/* harmony import */ var _listar_err_listar_err_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./listar-err/listar-err.component */ "./src/app/listar-err/listar-err.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { CookieService } from 'angular2-cookie/services/cookies.service';

































//import {AuthService} from '../app/services/auth.service'









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _shared_figurecard_figurecard_component__WEBPACK_IMPORTED_MODULE_16__["FigurecardComponent"],
                _shared_imagecard_imagecard_component__WEBPACK_IMPORTED_MODULE_17__["ImagecardComponent"],
                _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_18__["TableComponent"],
                _dashboard_notification_notification_component__WEBPACK_IMPORTED_MODULE_19__["NotificationComponent"],
                _shared_msgiconbtn_msgiconbtn_component__WEBPACK_IMPORTED_MODULE_20__["MsgIconBtnComponent"],
                _dashboard_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_21__["SweetAlertComponent"],
                _page_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _dashboard_root_root_component__WEBPACK_IMPORTED_MODULE_23__["RootComponent"],
                _page_register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
                _page_lock_lock_component__WEBPACK_IMPORTED_MODULE_25__["LockComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_26__["HeaderComponent"],
                _dashboard_connection_connection_component__WEBPACK_IMPORTED_MODULE_40__["ConnectionComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
                _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_28__["SettingsComponent"],
                _dashboard_component_pricetable_pricetable_component__WEBPACK_IMPORTED_MODULE_29__["PriceTableComponent"],
                _dashboard_component_panels_panels_component__WEBPACK_IMPORTED_MODULE_30__["PanelsComponent"],
                _dashboard_component_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_37__["WizardComponent"],
                _dashboard_registo_registo_component__WEBPACK_IMPORTED_MODULE_38__["RegistoComponent"],
                _dashboard_connection_connection_component__WEBPACK_IMPORTED_MODULE_40__["ConnectionComponent"],
                _dashboard_connection_connection_component__WEBPACK_IMPORTED_MODULE_40__["DialogContentExampleDialog"],
                _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_18__["DialogContentExampleDialog1"],
                _dashboard_access_management_access_management_component__WEBPACK_IMPORTED_MODULE_41__["AccessManagementComponent"],
                _dashboard_access_management_access_management_component__WEBPACK_IMPORTED_MODULE_41__["PrettyPrintPipe"],
                _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_18__["PrettyPrintPipe1"],
                _dashboard_create_connection_create_connection_component__WEBPACK_IMPORTED_MODULE_42__["CreateConnectionComponent"],
                _dashboard_extraction_extraction_component__WEBPACK_IMPORTED_MODULE_43__["ExtractionComponent"],
                _listar_err_listar_err_component__WEBPACK_IMPORTED_MODULE_44__["ListarErrComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
                cron_editor_cron_editor__WEBPACK_IMPORTED_MODULE_8__["CronEditorModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({ positionClass: 'toast-top-center' }),
                angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_39__["OAuthModule"].forRoot()
            ],
            entryComponents: [_dashboard_connection_connection_component__WEBPACK_IMPORTED_MODULE_40__["DialogContentExampleDialog"], _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_18__["DialogContentExampleDialog1"]],
            providers: [_services_settings_service__WEBPACK_IMPORTED_MODULE_36__["SettingsService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_33__["AdminGuard"], _app_service__WEBPACK_IMPORTED_MODULE_35__["AppService"], _guards_login_guard__WEBPACK_IMPORTED_MODULE_34__["LoginGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/table/table.component */ "./src/app/dashboard/table/table.component.ts");
/* harmony import */ var _dashboard_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/notification/notification.component */ "./src/app/dashboard/notification/notification.component.ts");
/* harmony import */ var _dashboard_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/sweetalert/sweetalert.component */ "./src/app/dashboard/sweetalert/sweetalert.component.ts");
/* harmony import */ var _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _dashboard_component_pricetable_pricetable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/component/pricetable/pricetable.component */ "./src/app/dashboard/component/pricetable/pricetable.component.ts");
/* harmony import */ var _dashboard_component_panels_panels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/component/panels/panels.component */ "./src/app/dashboard/component/panels/panels.component.ts");
/* harmony import */ var _dashboard_component_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/component/wizard/wizard.component */ "./src/app/dashboard/component/wizard/wizard.component.ts");
/* harmony import */ var _dashboard_root_root_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/login/login.component */ "./src/app/page/login/login.component.ts");
/* harmony import */ var _page_lock_lock_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/lock/lock.component */ "./src/app/page/lock/lock.component.ts");
/* harmony import */ var _page_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page/register/register.component */ "./src/app/page/register/register.component.ts");
/* harmony import */ var _dashboard_connection_connection_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/connection/connection.component */ "./src/app/dashboard/connection/connection.component.ts");
/* harmony import */ var _dashboard_create_connection_create_connection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/create-connection/create-connection.component */ "./src/app/dashboard/create-connection/create-connection.component.ts");
/* harmony import */ var _dashboard_extraction_extraction_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/extraction/extraction.component */ "./src/app/dashboard/extraction/extraction.component.ts");
/* harmony import */ var _listar_err_listar_err_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./listar-err/listar-err.component */ "./src/app/listar-err/listar-err.component.ts");
/* harmony import */ var _dashboard_registo_registo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/registo/registo.component */ "./src/app/dashboard/registo/registo.component.ts");
/* harmony import */ var _dashboard_access_management_access_management_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/access-management/access-management.component */ "./src/app/dashboard/access-management/access-management.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guards/login.guard */ "./src/app/guards/login.guard.ts");
/**
 * Created by wangdi on 26/5/17.
 */























var routes = [
    { path: '', component: _page_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_22__["LoginGuard"]] },
    { path: 'lock', component: _page_lock_lock_component__WEBPACK_IMPORTED_MODULE_12__["LockComponent"] },
    { path: 'register', component: _page_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"] },
    { path: 'dashboard', component: _dashboard_root_root_component__WEBPACK_IMPORTED_MODULE_10__["RootComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]], children: [
            { path: '', component: _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
            { path: 'profile', component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
            { path: 'Create_Connection', component: _dashboard_create_connection_create_connection_component__WEBPACK_IMPORTED_MODULE_15__["CreateConnectionComponent"] },
            { path: 'extraction', component: _dashboard_extraction_extraction_component__WEBPACK_IMPORTED_MODULE_16__["ExtractionComponent"] },
            { path: 'table', component: _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"] },
            { path: 'listarE/:id', component: _listar_err_listar_err_component__WEBPACK_IMPORTED_MODULE_17__["ListarErrComponent"] },
            { path: 'notification', component: _dashboard_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"] },
            { path: 'alert', component: _dashboard_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_5__["SweetAlertComponent"] },
            { path: 'settings', component: _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_21__["AdminGuard"]] },
            { path: 'Access-Management', component: _dashboard_access_management_access_management_component__WEBPACK_IMPORTED_MODULE_19__["AccessManagementComponent"] },
            { path: 'registo', component: _dashboard_registo_registo_component__WEBPACK_IMPORTED_MODULE_18__["RegistoComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_21__["AdminGuard"]] },
            { path: 'connection', component: _dashboard_connection_connection_component__WEBPACK_IMPORTED_MODULE_14__["ConnectionComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_21__["AdminGuard"]] },
            { path: 'components/price-table', component: _dashboard_component_pricetable_pricetable_component__WEBPACK_IMPORTED_MODULE_7__["PriceTableComponent"] },
            { path: 'components/panels', component: _dashboard_component_panels_panels_component__WEBPACK_IMPORTED_MODULE_8__["PanelsComponent"] },
            { path: 'components/wizard', component: _dashboard_component_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_9__["WizardComponent"] }
        ] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/user */ "./src/app/models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var asd;
var AppService = /** @class */ (function () {
    function AppService(_router, _http, toastr, _cookieService) {
        this._router = _router;
        this._http = _http;
        this.toastr = toastr;
        this._cookieService = _cookieService;
    }
    AppService.prototype.obtainAccessToken = function (loginData) {
        var _this = this;
        var params = new URLSearchParams();
        params.append('username', loginData.username);
        params.append('password', loginData.password);
        params.append('grant_type', 'password');
        console.log(loginData.username + " //" + loginData.password);
        var header = btoa('devglan-client:devglan-secret');
        //console.log(header);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': ' *',
            'Authorization': 'Basic ' + header,
        });
        var options = { headers: headers, withCredentials: true };
        console.log(options.headers.getAll("Authorization"));
        console.log(options.headers.getAll("Content-Type"));
        asd = this._http.post('http://10.197.96.18:8080/token', params.toString(), options)
            .subscribe(function (res) {
            _this.saveToken(res),
                //this._cookieService.set("test", "test")
                swal({
                    title: 'Good job!',
                    text: 'You Enter the App!',
                    type: 'success',
                    confirmButtonClass: 'btn btn-success'
                });
            _this.getUser();
            _this._router.navigate(['/dashboard']);
            return res;
        }, function (err) {
            swal({
                title: 'ERROR!',
                text: err.error.error_description,
                type: 'warning',
                confirmButtonClass: 'btn btn-warning'
            });
            //this.toastr.error(err.error.message, 'Ocorreu um erro');
            // this.loading = false;
            //console.log(erro);
            return err;
        });
    };
    AppService.prototype.saveToken = function (token) {
        var teste = new Date().getTime() + (1000 * token.expires_in);
        // this._cookieService.set("access_token", token.access_token, expireDate);
        //console.log( "1"+token.access_token)
        console.log(token.expires_in);
        this.expiredDate = new Date();
        //console.log("1-" + this.expiredDate);
        this.expiredDate.setDate(this.expiredDate.getDate() + (token.expires_in / 86400));
        //console.log("2-" + this.expiredDate.);
        this._cookieService.set("access_token", token.access_token, token.expires_in / 86400);
        this._cookieService.set("teste", token.access_token, 1);
        console.log("cookie " + this._cookieService.get("access_token"));
        console.log('Obtained Access token ' + token.access_token);
        //console.log('User_local ' + localStorage.getItem("user"));
    };
    AppService.prototype.checkCredentials = function () {
        if (!this._cookieService.check('access_token')) {
            this._router.navigate(['/']);
            return false;
        }
        return true;
    };
    AppService.prototype.hasRole = function () {
        if (this._cookieService.check('access_token')) {
            console.log("tem token");
            return true;
        }
        console.log("nao tem token");
        return false;
    };
    AppService.prototype.logout = function () {
        //console.log("select "+this.selected);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this._cookieService.get('access_token'),
            'Access-Control-Allow-Origin': ' *',
        });
        //console.log(this.selected);
        var options = { headers: headers };
        this._http.get("http://10.197.96.18:8080/logout/" + this._cookieService.get('access_token'), options);
        this._router.navigate(['/']);
        this._cookieService.delete('access_token');
        this._cookieService.deleteAll('../');
        localStorage.removeItem("user");
    };
    AppService.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var x, headers, options, asd;
            return __generator(this, function (_a) {
                x = new _models_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
                console.log("tokenUser" + this._cookieService.get('access_token'));
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': ' *',
                    'Authorization': 'Bearer ' + this._cookieService.get('access_token')
                });
                options = { headers: headers };
                asd = this._http.get("http://10.197.96.18:8080/users/logged", options).subscribe(function (res) {
                    //this.roles=res
                    x.name = res.name;
                    x.email = res.email;
                    x.username = res.username;
                    x.roles = res.roles;
                    //x.permissions = res.permissions;
                    //this._cookieService.set("userLogin", x);
                    localStorage.setItem("user", JSON.stringify(x));
                    console.log("getuser" + localStorage.getItem("user"));
                    _this._router.navigate(['/dashboard']);
                });
                return [2 /*return*/];
            });
        });
    };
    AppService.prototype.ngOnInit = function () {
        //this._cookieService.deleteAll();
        //his.cookieValue = this.cookieService.get('Test');
    };
    AppService.prototype.ngOnDestroy = function () {
        // this.asd.unsubscribe(); // <-------
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/dashboard/access-management/access-management.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/access-management/access-management.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    height: 100%;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .background {\r\n    background: url('register_bg.jpg') center center;\r\n    background-size: cover;\r\n  }\r\n  \r\n  .register-panel{\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  .card h2{\r\n    text-align: center;\r\n  }\r\n  \r\n  .feature{\r\n    display: flex;\r\n    /*width: 100%;*/\r\n    flex: 1;\r\n    margin-top: 50px;\r\n  }\r\n  \r\n  .feature .icon{\r\n    width: 40px;\r\n  }\r\n  \r\n  .feature .icon i{\r\n    font-size: 2.6em;\r\n  }\r\n  \r\n  .feature .desc{\r\n    flex: 1;\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .feature .desc p{\r\n    margin-top: 17px;\r\n  }\r\n  \r\n  .feature .desc h4{\r\n    margin-top: 8px;\r\n  }\r\n  \r\n  .form-part{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    padding-left: 25px;\r\n  }\r\n  \r\n  .form-part .row{\r\n    width: 100%;\r\n    display: flex;\r\n    position: relative;\r\n    margin-top: 17px;\r\n  }\r\n  \r\n  .form-part .row .mat-input-container{\r\n    width: 100%;\r\n  }\r\n  \r\n  .form-part .row i{\r\n    margin-right: 13px;\r\n    position: relative;\r\n    top: 8px;\r\n    color: #555;\r\n  }\r\n  \r\n  .form-part .socials{\r\n    margin-top: 40px;\r\n    margin-bottom: 25px;\r\n  }\r\n  \r\n  .form-part .row button{\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .right-profile{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 25px;\r\n    position: relative;\r\n    /*margin-top: 60px;*/\r\n    }\r\n  \r\n  .profile{\r\n    position: absolute;\r\n    top: -40px;\r\n    }\r\n  \r\n  .profile img{\r\n    border-radius: 50%;\r\n    width: 130px;\r\n    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n    }\r\n  \r\n  .right-profile h6{\r\n    margin-top: 100px;\r\n    margin-bottom: 8px;\r\n    color: #999;\r\n    }\r\n  \r\n  .right-profile h4{\r\n    margin-bottom: 5px;\r\n    }\r\n  \r\n  .right-profile p{\r\n    color: #999;\r\n    }\r\n  \r\n  .right-profile button {\r\n    margin-top: 15px;\r\n    }\r\n  \r\n  .card{\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    position: relative;\r\n    margin-top: 40px;\r\n    }\r\n  \r\n  .card-header {\r\nposition: absolute;\r\ntext-align: center;\r\nbackground: linear-gradient(60deg, #ec407a, #d81b60);\r\nbox-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\r\n/*margin: -20px 15px 0;*/\r\nborder-radius: 3px;\r\npadding: 15px;\r\ntop: -23px;\r\n}\r\n  \r\n  .card-header i {\r\nfont-size: 24px;\r\nwidth: 33px;\r\nheight: 33px;\r\nline-height: 33px;\r\ncolor: #fff;\r\n}\r\n  \r\n  .card-content{\r\nposition: relative;\r\n}\r\n  \r\n  .card-title{\r\npadding-left: 80px;\r\n}\r\n  \r\n  .mat-input-container{\r\nwidth: 100%;\r\n}\r\n  \r\n  .category{\r\nfont-weight: 300;\r\n}\r\n  \r\n  form{\r\nmargin-top: 30px;\r\n}\r\n  \r\n  .row{\r\nmargin-top: 15px;\r\n}\r\n  \r\n  .mat-input-container textarea{\r\nheight: 90px;\r\n}\r\n  \r\n  .textarea-label{\r\ncolor: #aaa;\r\nmargin-bottom: 10px;\r\n}\r\n  \r\n  .action-btn{\r\ndisplay: flex;\r\njustify-content: flex-end;\r\npadding-right: 15px;\r\n}\r\n  \r\n  .mat-button-toggle2{\r\nbackground: #3f51b5;\r\ncolor: #fff;\r\n}\r\n  \r\n  .mat-button-toggle3{\r\nbackground: #3f51b5;\r\ncolor: #fff;\r\n}\r\n     \r\n     "

/***/ }),

/***/ "./src/app/dashboard/access-management/access-management.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/access-management/access-management.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Register Profile\"></app-navbar>\n  <div class=\"row\" style=\"margin-top: 30px\">\n    <div class=\"col-md-13\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"material-icons\">info</i>\n        </div>\n        <div class=\"card-content\">\n          <h4 class=\"card-title\">Access Management\n            <small class=\"category\">Details</small>\n          </h4>\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-11 col-md-offset-1\">\n                <mat-table #table [dataSource]=\"dataSource\" matSort>\n                  <ng-container [matColumnDef]=\"columnName\" *ngFor=\"let columnName of displayedColumns\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> {{columnName}} </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element[columnName] | prettyprint}} </mat-cell>\n\n                  </ng-container>\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\">\n                  </mat-header-row>\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                </mat-table>\n              </div>\n            </div>\n          </form>\n          <div class=\"row\">\n            <div class=\"col-md-10 col-md-offset-1\">\n\n              <button id=\"preBtn\" class=\"btn btn-success\" (click)=\"addUser()\">Add User</button>\n            </div>\n          </div>\n\n\n        </div>\n\n        <app-registo></app-registo>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/access-management/access-management.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/access-management/access-management.component.ts ***!
  \****************************************************************************/
/*! exports provided: PrettyPrintPipe, AccessManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrettyPrintPipe", function() { return PrettyPrintPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessManagementComponent", function() { return AccessManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrettyPrintPipe = /** @class */ (function () {
    function PrettyPrintPipe() {
    }
    PrettyPrintPipe.prototype.transform = function (val) {
        var as = JSON.stringify(val, null, 2);
        var ap = "";
        if (as.split(",").length > 1) {
            for (var index = 0; index < as.split(" },").length; index++) {
                ap = ap + as.split(" },")[index].split(":")[2].split('"')[1] + ", ";
                console.log(as.split(" },")[index].split(":")[2].split('"')[1]);
            }
            console.log(ap.split(" "));
            return ap;
        }
        else {
            var as_1 = JSON.stringify(val, null, 2)
                .replace('[', ' ')
                .replace(']', ' ')
                .replace('"', ' ')
                .replace('"', ' ')
                .replace('{', ' ')
                .replace('}', ' ');
            return as_1;
        }
        /*JSON.stringify(val, null, 2)
          .replace('[', ' ')
          .replace(']', ' ')
          .replace('{', ' ')
          .replace('}', ' ')
          .replace(' ', ' ')
          .replace(' ', ' ')
          .replace(',', '\n')
          .replace('\n', ' ');*/
    };
    PrettyPrintPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'prettyprint'
        })
    ], PrettyPrintPipe);
    return PrettyPrintPipe;
}());

var AccessManagementComponent = /** @class */ (function () {
    function AccessManagementComponent(_http, _cookieService, router) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.router = router;
        this.rows = new Array();
        this.displayedColumns = [];
    }
    AccessManagementComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AccessManagementComponent.prototype.getUsers = function () {
        var _this = this;
        var params;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this._cookieService.get('access_token'),
        });
        var options = { headers: headers };
        // console.log("roles: " + this._cookieService.get('access_token'))
        var as = this._http.get("http://10.197.96.18:8080/users", options).subscribe(function (res) {
            _this.rows = res;
            //console.log("Role"+res.toString());
            _this.yourFunction();
            // console.log(res[0].roles)
        });
    };
    AccessManagementComponent.prototype.yourFunction = function () {
        this.displayedColumns = this.rows.length > 0 ? Object.keys(this.rows[0]) : [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.rows);
        this.dataSource.sort = this.sort;
    };
    AccessManagementComponent.prototype.addUser = function () {
        this.router.navigate(['/dashboard/registo']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], AccessManagementComponent.prototype, "sort", void 0);
    AccessManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-management',
            template: __webpack_require__(/*! ./access-management.component.html */ "./src/app/dashboard/access-management/access-management.component.html"),
            styles: [__webpack_require__(/*! ./access-management.component.css */ "./src/app/dashboard/access-management/access-management.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AccessManagementComponent);
    return AccessManagementComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/component/panels/panels.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/component/panels/panels.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  padding: 20px 20px 15px 20px;\n}\n\n.card small{\n  font-weight: 300;\n}\n\n.h-tab{\n  margin-top: 35px;\n}\n\n.tab-content{\n  display: none;\n}\n\n.h-tab .tab-link.active{\n  background-color: #ff9800 !important;\n  color: #FFF !important;\n  box-shadow: 0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2) !important;\n}\n\n.v-tab .tab-link.active{\n  background-color: #00bcd4 !important;\n  color: #FFF !important;\n  box-shadow: 0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2) !important;\n}\n\n.v-tab .tab-link{\n  margin-bottom: 10px;\n}\n\n.h-tab .tab-link, .v-tab .tab-link{\n  box-shadow: none !important;\n  background-color: transparent !important;\n  color: #555 !important;\n}\n\n.h-tab .tab-link:hover, .v-tab .tab-link:hover{\n  background-color: rgba(200, 200, 200, 0.2) !important;\n}\n\n.h-tab .tab-link.active:hover{\n  background-color: #ff9800 !important;\n}\n\n.v-tab .tab-link.active:hover{\n  background-color: #00bcd4 !important;\n}\n\n.h-tab .tab-content{\n  padding-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/component/panels/panels.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/component/panels/panels.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Panels\"></app-navbar>\n  <div class=\"row page-title\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <h4>Navigation Pills - <small>Horizontal Tabs</small></h4>\n        <div class=\"h-tab\">\n          <div class=\"tab\">\n            <button mat-raised-button class=\"btn btn-warning btn-round tab-link default-active\" (click)=\"tabClick($event, 'profile')\">PROFILE</button>\n            <button mat-raised-button class=\"btn btn-warning btn-round tab-link\" (click)=\"tabClick($event, 'settings')\">SETTINGS</button>\n            <button mat-raised-button class=\"btn btn-warning btn-round tab-link\" (click)=\"tabClick($event, 'options')\">OPTIONS</button>\n          </div>\n          <div id=\"profile\" class=\"tab-content\">\n            Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br/><br/>\n            Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br/><br/>\n            This is very nice.\n          </div>\n          <div id=\"settings\" class=\"tab-content\">\n            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.<br/><br/>\n            Dramatically maintain clicks-and-mortar solutions without functional solutions.\n          </div>\n          <div id=\"options\" class=\"tab-content\">\n            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.<br/><br/>\n            Dynamically innovate resource-leveling customer service for state of the art customer service.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <h4>Navigation Pills - <small>Vertical Tabs</small></h4>\n        <div class=\"row v-tab page-title\">\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-info btn-round btn-block tab-link default-active\" (click)=\"vTabClick($event, 'one')\">PROFILE</button>\n            <button mat-raised-button class=\"btn btn-info btn-round btn-block tab-link\" (click)=\"vTabClick($event, 'two')\">SETTINGS</button>\n            <button mat-raised-button class=\"btn btn-info btn-round btn-block tab-link\" (click)=\"vTabClick($event, 'three')\">OPTIONS</button>\n          </div>\n          <div class=\"col-md-8\">\n            <div id=\"one\" class=\"tab-content\">\n              Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br/><br/>\n              Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br/><br/>\n              This is very nice.\n            </div>\n            <div id=\"two\" class=\"tab-content\">\n              Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.<br/><br/>\n              Dramatically maintain clicks-and-mortar solutions without functional solutions.\n            </div>\n            <div id=\"three\" class=\"tab-content\">\n              Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.<br/><br/>\n              Dynamically innovate resource-leveling customer service for state of the art customer service.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/component/panels/panels.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/component/panels/panels.component.ts ***!
  \****************************************************************/
/*! exports provided: PanelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsComponent", function() { return PanelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelsComponent = /** @class */ (function () {
    function PanelsComponent() {
    }
    PanelsComponent.prototype.ngOnInit = function () {
    };
    PanelsComponent.prototype.ngAfterViewInit = function () {
        var activeTabs = document.getElementsByClassName('default-active');
        for (var i = 0; i < activeTabs.length; i++) {
            activeTabs[i].click();
        }
    };
    PanelsComponent.prototype.tabClick = function (evt, id) {
        var tabcontents = document.querySelectorAll('.h-tab .tab-content');
        for (var i = 0; i < tabcontents.length; i++) {
            tabcontents[i].style.display = 'none';
        }
        var tablinks = document.querySelectorAll('.h-tab .tab-link');
        for (var i = 0; i < tablinks.length; i++) {
            var tablink = tablinks[i];
            tablink.className = tablink.className.replace(' active', '');
        }
        document.getElementById(id).style.display = 'block';
        evt.currentTarget.className += ' active';
    };
    PanelsComponent.prototype.vTabClick = function (evt, id) {
        var tabcontents = document.querySelectorAll('.v-tab .tab-content');
        for (var i = 0; i < tabcontents.length; i++) {
            tabcontents[i].style.display = 'none';
        }
        var tablinks = document.querySelectorAll('.v-tab .tab-link');
        for (var i = 0; i < tablinks.length; i++) {
            var tablink = tablinks[i];
            tablink.className = tablink.className.replace(' active', '');
        }
        document.getElementById(id).style.display = 'block';
        evt.currentTarget.className += ' active';
    };
    PanelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panels',
            template: __webpack_require__(/*! ./panels.component.html */ "./src/app/dashboard/component/panels/panels.component.html"),
            styles: [__webpack_require__(/*! ./panels.component.css */ "./src/app/dashboard/component/panels/panels.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelsComponent);
    return PanelsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/component/pricetable/pricetable.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/component/pricetable/pricetable.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  padding: 25px 20px 20px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card h6, p {\n  color: #999;\n}\n\n.icon{\n  margin-top: 20px;\n  width: 130px;\n  height: 130px;\n  border: 1px solid #e5e5e5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.icon i{\n  font-size: 55px;\n  color: #e91e63;\n}\n\n.card-title{\n  margin-top: 30px;\n  margin-bottom: 3px;\n}\n\n.card-description{\n  margin-bottom: 20px;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/component/pricetable/pricetable.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/component/pricetable/pricetable.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Price Table\"></app-navbar>\n  <div class=\"row page-title\">\n    <div class=\"col-md-8 col-md-offset-2\">\n      <div class=\"row\">\n        <div class=\"col-md-4 page-title\">\n          <div class=\"card card-raised\">\n            <h6>Individual</h6>\n            <div class=\"icon\">\n              <i class=\"material-icons\">person</i>\n            </div>\n            <h3 class=\"card-title\">Free</h3>\n            <p class=\"card-description text-center\">\n              This is good if your company size is between 2 and 10 Persons.\n            </p>\n            <button mat-raised-button class=\"btn btn-rose btn-round\">CHOOSE PLAN</button>\n          </div>\n        </div>\n        <div class=\"col-md-4 page-title\">\n          <div class=\"card card-raised\">\n            <h6>Small Company</h6>\n            <div class=\"icon\">\n              <i class=\"material-icons\">weekend</i>\n            </div>\n            <h3 class=\"card-title\">$29 / m</h3>\n            <p class=\"card-description text-center\">\n              This is good if your company size is between 2 and 10 Persons.\n            </p>\n            <button mat-raised-button class=\"btn btn-rose btn-round\">CHOOSE PLAN</button>\n          </div>\n        </div>\n        <div class=\"col-md-4 page-title\">\n          <div class=\"card card-raised\">\n            <h6>Enterprise</h6>\n            <div class=\"icon\">\n              <i class=\"material-icons\">home</i>\n            </div>\n            <h3 class=\"card-title\">$79 / m</h3>\n            <p class=\"card-description text-center\">\n              This is good if your company size is between 2 and 10 Persons.\n            </p>\n            <button mat-raised-button class=\"btn btn-rose btn-round\">CHOOSE PLAN</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/component/pricetable/pricetable.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/component/pricetable/pricetable.component.ts ***!
  \************************************************************************/
/*! exports provided: PriceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceTableComponent", function() { return PriceTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceTableComponent = /** @class */ (function () {
    function PriceTableComponent() {
    }
    PriceTableComponent.prototype.ngOnInit = function () {
    };
    PriceTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricetable',
            template: __webpack_require__(/*! ./pricetable.component.html */ "./src/app/dashboard/component/pricetable/pricetable.component.html"),
            styles: [__webpack_require__(/*! ./pricetable.component.css */ "./src/app/dashboard/component/pricetable/pricetable.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceTableComponent);
    return PriceTableComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/component/wizard/wizard.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/component/wizard/wizard.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wizard-panel{\n\n}\n\n.wizard-header{\n  padding: 25px 0 35px;\n}\n\n.wizard-navigation{\n  position: relative;\n}\n\n.nav-pills{\n  background-color: rgba(200, 200, 200, 0.2);\n  width: 100%;\n}\n\n.nav-pills li{\n  width: 33.3333%;\n  float: left;\n  margin-left: 0;\n  font-size: 12px;\n  font-weight: 500;\n  min-width: 100px;\n  color: rgb(104, 101, 101);\n  padding: 10px 0;\n}\n\n.move-tab{\n  position: absolute;\n  background-color: #f44336;\n  box-shadow: 0 16px 26px -10px rgba(244, 67, 54, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2);\n  font-weight: 500;\n  border-radius: 4px;\n  color: #fff;\n  top: -2px;\n  left: -1vw;\n  width: calc((100% - 260px) / 2);\n  height: 114%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 500ms cubic-bezier(0.29, 1.42, 0.79, 1);\n}\n\n.wizard-body{\n  min-height: 350px;\n  padding: 15px;\n}\n\n.wizard-footer{\n  display: flex;\n  padding: 10px;\n  justify-content: space-between;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/component/wizard/wizard.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/component/wizard/wizard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Wizard\"></app-navbar>\n  <div class=\"row page-title\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <div class=\"wizard-panel card\">\n        <div class=\"wizard-header\">\n          <h3 class=\"text-center\">Build Your Profile</h3>\n          <h5 class=\"text-center\" style=\"margin-top: 5px; padding: 0 20px;\">This information will let us know more about you.</h5>\n        </div>\n        <div class=\"wizard-navigation\">\n          <ul class=\"nav nav-pills\">\n            <li class=\"text-uppercase text-center\">About</li>\n            <li class=\"text-uppercase text-center\">Account</li>\n            <li class=\"text-uppercase text-center\">Address</li>\n          </ul>\n          <div class=\"move-tab text-center text-uppercase\">About</div>\n        </div>\n        <div class=\"wizard-body\">\n          <div class=\"wizard-tab\">\n            tab 1\n          </div>\n          <div class=\"wizard-tab\">\n            tab 2\n          </div>\n          <div class=\"wizard-tab\">\n            tab 3\n          </div>\n        </div>\n        <div class=\"wizard-footer\">\n          <button id=\"preBtn\" class=\"btn btn-danger\" (click)=\"preOnClick()\">Previous</button>\n          <button id=\"nextBtn\" class=\"btn btn-success\" (click)=\"nextOnClick()\">Next</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/component/wizard/wizard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/component/wizard/wizard.component.ts ***!
  \****************************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
        this.tabIndex = 0;
    }
    WizardComponent.prototype.ngOnInit = function () {
    };
    WizardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var preBtn = document.getElementById('preBtn');
        var moveTab = document.querySelector('.move-tab');
        preBtn.style.visibility = 'hidden';
        // to ensure moveTab can stay correct position
        $(window).resize(function () {
            var screenWidth = document.body.clientWidth;
            if (screenWidth > 990) {
                moveTab.style.width = 'calc((100% - 260px) / 2)';
                if (_this.tabIndex === 1) {
                    moveTab.style.left = '20vw';
                }
                else if (_this.tabIndex === 2) {
                    moveTab.style.left = '42vw';
                }
            }
            else {
                moveTab.style.width = '34%';
                if (_this.tabIndex === 1) {
                    moveTab.style.left = '30vw';
                }
                else if (_this.tabIndex === 2) {
                    moveTab.style.left = '61.5vw';
                }
            }
        });
        var tabs = document.getElementsByClassName('wizard-tab');
        for (var i = 1; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
    };
    WizardComponent.prototype.preOnClick = function () {
        var moveTab = document.querySelector('.move-tab');
        var nextBtn = document.getElementById('nextBtn');
        var preBtn = document.getElementById('preBtn');
        var tabs = document.getElementsByClassName('wizard-tab');
        var screenWidth = document.body.clientWidth;
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
        if (this.tabIndex === 2) {
            this.tabIndex--;
            moveTab.style.left = screenWidth > 990 ? '20vw' : '30vw';
            nextBtn.style.visibility = 'visible';
            moveTab.innerHTML = 'Account';
        }
        else if (this.tabIndex === 1) {
            this.tabIndex--;
            moveTab.style.left = '-1vw';
            preBtn.style.visibility = 'hidden';
            moveTab.innerHTML = 'About';
        }
        tabs[this.tabIndex].style.display = 'inherit';
    };
    WizardComponent.prototype.nextOnClick = function () {
        var moveTab = document.querySelector('.move-tab');
        var nextBtn = document.getElementById('nextBtn');
        var preBtn = document.getElementById('preBtn');
        var tabs = document.getElementsByClassName('wizard-tab');
        var screenWidth = document.body.clientWidth;
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
        if (this.tabIndex === 0) {
            this.tabIndex++;
            moveTab.style.left = screenWidth > 990 ? '20vw' : '30vw';
            preBtn.style.visibility = 'visible';
            moveTab.innerHTML = 'Account';
        }
        else if (this.tabIndex === 1) {
            this.tabIndex++;
            moveTab.style.left = screenWidth > 990 ? '42vw' : '61.5vw';
            nextBtn.style.visibility = 'hidden';
            moveTab.innerHTML = 'Address';
        }
        tabs[this.tabIndex].style.display = 'inherit';
    };
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizard',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/dashboard/component/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.css */ "./src/app/dashboard/component/wizard/wizard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/connection/connection.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/connection/connection.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-input-container{\r\n  width: 90%;\r\n}\r\n\r\n.mat-input-container textarea{\r\n  height: 90px;\r\n}\r\n\r\n.wizard-header{\r\n  padding: 25px 0 35px;\r\n  overflow:hidden ;\r\n  overflow-x: hidden;\r\n\r\n}\r\n\r\n.wizard-navigation{\r\n  position: relative;\r\n  overflow:hidden ;\r\n  overflow-x: hidden;\r\n\r\n}\r\n\r\n.nav-pills{\r\n  background-color: rgba(200, 200, 200, 0.2);\r\n  width: 100%;\r\n}\r\n\r\n.nav-pills li{\r\n  width: 33.3333%;\r\n  float: left;\r\n  margin-left: 0;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  min-width: 100px;\r\n  color: rgb(104, 101, 101);\r\n  padding: 10px 0;\r\n}\r\n\r\n.move-tab{\r\n  position: absolute;\r\n  background-color: #0e3570;\r\n  box-shadow: 0 16px 26px -10px #071c3b, 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px #071c3b;\r\n  font-weight: 500;\r\n  border-radius: 4px;\r\n  color: #fff;\r\n  top: -2px;\r\n  left: -1vw;\r\n  width: calc((100% - 260px) / 2);\r\n  height: 114%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: all 500ms cubic-bezier(0.29, 1.42, 0.79, 1);\r\n}\r\n\r\n.wizard-body{\r\n  min-height: 350px;\r\n  padding: 15px;\r\n  overflow-x: hidden;\r\n\r\n}\r\n\r\n.wizard-footer{\r\n  display: flex;\r\n  padding: 10px;\r\n  justify-content: space-between;\r\n  overflow-x: hidden;\r\n\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.basic-container {\r\n  padding: 30px;\r\n}\r\n\r\n.version-info {\r\n  font-size: 8pt;\r\n  float: right;\r\n}\r\n\r\n.boxed {\r\n  border: 1px solid green ;\r\n  top: -21px;\r\n  left: -11vw;\r\n  height: 114%;\r\n  width: 90%;\r\n\r\n}\r\n\r\n.div1 {\r\n  display:-ms-grid;\r\n  display:grid;\r\n  width:103%;\r\n  height: 100%; \r\n  border:2px solid black;\r\n  }\r\n\r\n.card{\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    position: relative;\r\n    margin-top: 40px;\r\n    }\r\n\r\n.card-header {\r\n    position: absolute;\r\n    text-align: center;\r\n    background: linear-gradient(60deg, #0e3570, #4888e9);\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px #081f41;\r\n    /*margin: -20px 15px 0;*/\r\n    border-radius: 3px;\r\n    padding: 15px;\r\n    top: -23px;\r\n    }\r\n\r\n.card-header i {\r\n  font-size: 24px;\r\n  width: 33px;\r\n  height: 33px;\r\n  line-height: 33px;\r\n  color: #fff;\r\n  }\r\n\r\n.card-content{\r\n  position: relative;\r\n  }\r\n\r\n.card-title{\r\n    padding-left: 80px;\r\n    }  "

/***/ }),

/***/ "./src/app/dashboard/connection/connection.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/connection/connection.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Register Connection\"></app-navbar>\n  <meta http-equiv=\"content-type\" content=\"text/html; charset=windows-1252\">\n  <div class=\"container\">\n    <div class=\"row register-panel\">\n\n\n      <div class=\"wizard-panel card\">\n        <div class=\"card-header\">\n          <i class=\"material-icons\">insert_link</i>\n        </div>\n\n        <div>\n          <br>\n\n        </div>\n        <div class=\"wizard-header\">\n          <h3 class=\"text-center\">Connect</h3>\n        </div>\n        <div class=\"wizard-navigation\">\n          <ul class=\"nav nav-pills\">\n            <li class=\"text-uppercase text-center\" (click)=\"tabClick(0)\">CONNECTION</li>\n            <li class=\"text-uppercase text-center\" (click)=\"tabClick(1)\">Query</li>\n            <li class=\"text-uppercase text-center\" (click)=\"tabClick(2)\">Extraction</li>\n          </ul>\n          <div class=\"move-tab text-center text-uppercase\">connection</div>\n        </div>\n        <div class=\"wizard-body\">\n          <br>\n          <div class=\"wizard-tab\">\n            <div class=\"row\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <i class=\"material-icons\">reorder</i>\n                <mat-input-container color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"name\" [(ngModel)]=\"conection.name\">\n                </mat-input-container>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <i class=\"material-icons\">description</i>\n\n                <mat-input-container color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"description\" [(ngModel)]=\"conection.description\">\n                </mat-input-container>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-10 col-md-offset-1\">\n\n                <i class=\"material-icons\">http</i>\n\n                <mat-input-container color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"url\" [(ngModel)]=\"conection.url\">\n                </mat-input-container>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <i class=\"material-icons\">face</i>\n\n                <mat-input-container color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"username\" [(ngModel)]=\"conection.username\">\n                </mat-input-container>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <i class=\"material-icons\">lock_outline</i>\n\n                <mat-input-container color=\"accent\">\n                  <input matInput [type]=\"hide ? 'password' : 'text'\" placeholder=\"password\" [(ngModel)]=\"conection.password\">\n                  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\n                </mat-input-container>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-10 col-md-offset-1\">\n\n                <i class=\"material-icons\">group</i>\n                <mat-form-field>\n\n                  <mat-select placeholder=\"-- driver --\" [(ngModel)]=\"selected\">\n                    <mat-option *ngFor=\"let driver of drivers\" [value]=\"driver.id\">\n                      {{driver.name}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </div>\n            <ng-template #loadin>\n              <div class=\"loader\">\n                <svg class=\"circular\" viewBox=\"25 25 50 50\">\n                  <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n                </svg>\n              </div>\n            </ng-template>\n            <div class=\"h-tab\" *ngIf=\"show1; then Block; else loadin\"></div>\n            <ng-template #Block>\n              <div class=\"row\">\n                <div class=\"col-md-7 col-md-offset-1\">\n\n                  <i class=\"material-icons\">group</i>\n\n                  <mat-form-field>\n                    <mat-select placeholder=\"-- systems --\" [(ngModel)]=\"selectedSystem\">\n                      <mat-option *ngFor=\"let system of systems\" [value]=\"system.id\">\n                        {{system.name}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n\n                </div>\n                <div class=\"col-md-3\">\n                  <button mat-raised-button class=\"btn btn-info btn-round\" (click)=\"addSystem()\">ADD SYSTEM</button>\n                </div>\n              </div>\n            </ng-template>\n          </div>\n          <ng-template #loading>\n            <div class=\"loader\">\n              <svg class=\"circular\" viewBox=\"25 25 50 50\">\n                <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n              </svg>\n            </div>\n          </ng-template>\n          <div class=\"h-tab\" *ngIf=\"show; then thenBlock; else loading\"></div>\n          <ng-template #thenBlock>\n            <div class=\"wizard-tab\">\n              <div class=\"row\">\n                <div class=\"col-md-10 col-md-offset-1\">\n                  <i class=\"material-icons\">compare_arrows</i>\n                  <mat-form-field>\n                    <mat-select placeholder=\"-- connection --\" [(ngModel)]=\"selectedConnections\">\n                      <mat-option *ngFor=\"let connection of connections\" [value]=\"connection.id\">\n                        {{connection.name}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-10 col-md-offset-1\">\n                  <i class=\"material-icons\">code</i>\n                  <mat-input-container color=\"accent\">\n                    <input matInput type=\"text\" placeholder=\"Name\" [(ngModel)]=\"query.nome\">\n                  </mat-input-container>\n                  \n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-8 col-md-offset-1\">\n                  <i class=\"material-icons\">code</i>\n                  <mat-input-container color=\"accent\">\n                    <textarea matInput type=\"text\" placeholder=\"Script\" [(ngModel)]=\"query.query\"></textarea>\n                  </mat-input-container>\n                </div>\n                <div class=\"col-md-3\">\n                  <button mat-raised-button class=\"btn btn-info btn-round\" (click)=\"register()\">Test Query</button>\n                </div>\n              </div>\n              <!--\n                <div class=\"row\">\n                  <div class=\"col-md-10 col-md-offset-1\">\n                    <i class=\"material-icons\">code</i>\n                    <mat-form-field>\n                      <mat-select placeholder=\"-- Column --\">\n                        <mat-option *ngFor=\"let columnName of displayedColumns\" [value]=\"columnName\">\n                          {{columnName}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n              -->\n              <div class=\"row\">\n                <br>\n                <br>\n                <br>\n              </div>\n              <div class=\"row\">´\n                <div class=\"h-tab\" *ngIf=\"tabela; then then1;\"></div>\n                <ng-template #then1>\n                  <div class=\"col-md-10 col-md-offset-1\">\n                    <i class=\"material-icons\">filter_list\n                    </i>\n\n                    <mat-form-field>\n\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                    <mat-table #table [dataSource]=\"dataSource\" matSort>\n                      <ng-container [matColumnDef]=\"columnName\" *ngFor=\"let columnName of displayedColumns\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> {{columnName}} </mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\"> {{element[columnName]}} </mat-cell>\n                      </ng-container>\n                      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                    </mat-table>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n\n                  </div>\n                </ng-template>\n              </div>\n\n              <div class=\"row\" style=\"display: flex; justify-content: center\">\n                <button mat-raised-button class=\"btn btn-primary btn-round\" (click)=\"postQuery()\">Save Query</button>\n              </div>\n            </div>\n          </ng-template>\n\n          <div class=\"wizard-tab\">\n\n            <div class=\"row\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <i class=\"material-icons\">compare_arrows</i>\n                <mat-form-field>\n                  <mat-select placeholder=\"-- connection --\" [(ngModel)]=\"selectedConnections1\" (ngModelChange)=\"getScript(selectedConnections1)\">\n                    <mat-option *ngFor=\"let connection1 of connections\" [value]=\"connection1.id\">\n                      {{connection1.name}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <i class=\"material-icons\">face</i>\n                <mat-input-container color=\"accent\">\n                  <input type=\"text\" matInput placeholder=\"name\" [(ngModel)]=\"extractionData.name\">\n                </mat-input-container>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-10 col-md-offset-5\">\n                <h5>Schedule </h5>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-10 col-md-offset-1\">\n\n\n                <cron-editor [(cron)]=\"cronExpression\" [disabled]=\"isCronDisabled\" [(options)]=\"cronOptions\">Cron here...</cron-editor>\n\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <i class=\"material-icons\">calendar_today\n                </i>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose expiring date \" [(ngModel)]=\"picker1\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\">\n                    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                  </mat-datepicker-toggle>\n                  <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"h-tab\" *ngIf=\"show; then thenBlock1;\"></div>\n              <ng-template #thenBlock1>\n                <div class=\"col-md-10 col-md-offset-1\">\n                  <i class=\"material-icons\">compare_arrows</i>\n                  <mat-form-field>\n                    <mat-select placeholder=\"-- querys --\" [(ngModel)]=\"selectedquerys\">\n                      <mat-option *ngFor=\"let querys of querys\" [value]=\"querys.id\">\n                        {{querys.name}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </ng-template>\n            </div>\n\n            <div class=\"row\" style=\"display: flex; justify-content: center\">\n              <button mat-raised-button class=\"btn btn-primary btn-round\" (click)=\"teste()\">Create Extraction</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"wizard-footer\">\n          <button id=\"preBtn\" class=\"btn btn-danger\" (click)=\"preOnClick()\">Previous</button>\n          <button id=\"nextBtn\" class=\"btn btn-success\" (click)=\"nextOnClick()\">Add Connection</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/connection/connection.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/connection/connection.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogContentExampleDialog, ConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog", function() { return DialogContentExampleDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionComponent", function() { return ConnectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DialogContentExampleDialog = /** @class */ (function () {
    function DialogContentExampleDialog() {
        this.system = "";
    }
    DialogContentExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-content-example-dialog',
            template: __webpack_require__(/*! ./dialog.html */ "./src/app/dashboard/connection/dialog.html"),
        })
    ], DialogContentExampleDialog);
    return DialogContentExampleDialog;
}());

var ConnectionComponent = /** @class */ (function () {
    function ConnectionComponent(_http, _cookieService, router, dialog, adapter) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.router = router;
        this.dialog = dialog;
        this.adapter = adapter;
        this.cronExpression = '4 3 2 12 1/1 ? *';
        this.isCronDisabled = false;
        this.cronOptions = {
            formInputClass: 'form-control cron-editor-input',
            formSelectClass: 'form-control cron-editor-select',
            formRadioClass: 'cron-editor-radio',
            formCheckboxClass: 'cron-editor-checkbox',
            defaultTime: "10:00:00",
            hideMinutesTab: false,
            hideHourlyTab: false,
            hideDailyTab: false,
            hideWeeklyTab: false,
            hideMonthlyTab: false,
            hideYearlyTab: false,
            hideAdvancedTab: true,
            use24HourTime: true,
            hideSeconds: false
        };
        this.query = { query: "", nome: "" };
        this.conection = { name: "", description: "", url: "", username: "", password: "", driver: "" };
        this.extractionData = { name: "", cronExpression: "", queryId: "", finalDate: "" };
        this.waiting = false;
        this.drivers = [];
        this.connections = [];
        this.querys = [];
        this.systems = [];
        this.selected = '';
        this.selectedConnections = '';
        this.selectedConnections1 = '';
        this.selectedquerys = '';
        this.selectedSystem = '';
        this.picker1 = new Date();
        this.picker2 = new Date();
        this.tabIndex = 0;
        this.rows = new Array();
        this.displayedColumns = [];
        this.show = true;
        this.show1 = true;
        this.hide = true;
        this.tabela = false;
    }
    ConnectionComponent.prototype.ngOnInit = function () {
        this.adapter.setLocale('fr');
        this.getConnection();
        this.getdrivers();
        this.getsystems();
        this.show = true;
        this.show1 = true;
    };
    ConnectionComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ConnectionComponent.prototype.teste = function () {
        var param = new URLSearchParams();
        param.append("acron", this.extractionData.name);
        var cron = this.cronExpression.substring(0, this.cronExpression.length - 1);
        param.append("cronExpression", cron);
        param.append("queryId", this.selectedquerys);
        var date = this.picker1.getFullYear() + "-" + (this.picker1.getMonth() + 1) + "-" + this.picker1.getDate();
        param.append("finalDate", date);
        console.log("select " + this.selected);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token'),
            'Access-Control-Allow-Origin': ' *',
        });
        //console.log(this.selected);
        var options = { headers: headers };
        var asdas = this._http.post("http://10.197.96.18:8080/extract", param.toString(), options)
            .subscribe(function (res) {
            // this.show=true;
            //this.roles=res
            console.log("res");
            console.log(res);
            swal({
                title: 'Good job!',
                text: res.message,
                type: 'success',
                confirmButtonClass: 'btn btn-success'
            });
            //this.router.navigate(['/dashboard']);
        }, function (err) {
            // this.show=true;
            console.log(err);
            swal({
                title: 'ERROR!',
                text: err.error.message,
                type: 'warning',
                confirmButtonClass: 'btn btn-warning'
            });
            console.log(err);
        });
    };
    ConnectionComponent.prototype.registerdriver = function () {
        var _this = this;
        //this.show=false;
        var param = new URLSearchParams();
        param.append("name", this.conection.name);
        param.append("description", this.conection.description);
        param.append("url", this.conection.url);
        param.append("username", this.conection.username);
        param.append("password", this.conection.password);
        param.append("driverId", this.selected);
        param.append("clientSystemId", this.selectedSystem);
        console.log("select " + this.selected);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token'),
            'Access-Control-Allow-Origin': ' *',
        });
        //console.log(this.selected);
        var options = { headers: headers };
        var asdas = this._http.post("http://10.197.96.18:8080/system-dbconnection", param.toString(), options)
            .subscribe(function (res) {
            // this.show=true;
            //this.roles=res
            console.log("res");
            console.log(res);
            _this.getConnection();
            swal({
                title: 'Good job!',
                text: res.message,
                type: 'success',
                confirmButtonClass: 'btn btn-success'
            });
            //this.router.navigate(['/dashboard']);
        }, function (err) {
            // this.show=true;
            console.log(err);
            swal({
                title: 'ERROR!',
                text: err.error.message,
                type: 'warning',
                confirmButtonClass: 'btn btn-warning'
            });
            console.log(err);
        });
    };
    ConnectionComponent.prototype.register = function () {
        var _this = this;
        this.tabela = true;
        //this.query.query="select * from ARGUS.PRC_PROCESSO"
        var params = new URLSearchParams();
        params.append('dbConnectionId', this.selectedConnections);
        params.append('query', this.query.query);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token'),
            'Access-Control-Allow-Origin': ' *',
        });
        //console.log(this.selected);
        var options = { headers: headers };
        var asdas = this._http.post("http://10.197.96.18:8080/extract/run", params.toString(), options)
            .subscribe(function (res) {
            //this.roles=res
            console.log("res Run");
            _this.res = res;
            console.log(_this.res);
            //this.getConnection();
            _this.yourFunction();
            swal({
                title: 'Good job!',
                text: res.message,
                type: 'success',
                confirmButtonClass: 'btn btn-success'
            });
            //this.router.navigate(['/dashboard']);
        }, function (err) {
            _this.tabela = false;
            console.log(err);
            // this.getConnection();
            swal({
                title: 'ERROR!',
                text: err.error.message,
                type: 'warning',
                confirmButtonClass: 'btn btn-warning'
            });
            console.log(err);
        });
    };
    ConnectionComponent.prototype.getdrivers = function () {
        var _this = this;
        var params;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': ' *',
        });
        var options = { headers: headers };
        console.log("roles: " + this._cookieService.get('access_token'));
        var as = this._http.get("http://10.197.96.18:8080/system-dbconnection/drivers", options).subscribe((function (res) {
            _this.drivers = res;
            console.log(res);
        }));
        //console.log("dead")
        //console.log(params)
    };
    ConnectionComponent.prototype.getsystems = function () {
        var _this = this;
        this.show1 = false;
        var params;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token'),
            'Access-Control-Allow-Origin': ' *'
        });
        var options = { headers: headers };
        console.log("roles: " + this._cookieService.get('access_token'));
        var as = this._http.get("http://10.197.96.18:8080/system", options).subscribe((function (res) {
            _this.systems = res;
            console.log(res);
            _this.show1 = true;
        }));
        //console.log("dead")
        //console.log(params)
    };
    ConnectionComponent.prototype.getConnection = function () {
        var _this = this;
        this.show = false;
        var params;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token'),
            'Access-Control-Allow-Origin': ' *'
        });
        var options = { headers: headers };
        // console.log("roles: " + this._cookieService.get('access_token'))
        var as = this._http.get("http://10.197.96.18:8080/system-dbconnection", options).subscribe((function (res) {
            _this.connections = res;
            console.log(res);
            _this.show = true;
        }));
        //console.log("dead")
        //console.log(params)
    };
    ConnectionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var preBtn = document.getElementById('preBtn');
        var moveTab = document.querySelector('.move-tab');
        preBtn.style.visibility = 'hidden';
        // to ensure moveTab can stay correct position
        $(window).resize(function () {
            var screenWidth = document.body.clientWidth;
            if (screenWidth > 990) {
                moveTab.style.width = 'calc((100% - 260px)/2)';
                if (_this.tabIndex === 1) {
                    moveTab.style.left = '20vw';
                }
                else if (_this.tabIndex === 2) {
                    moveTab.style.left = '42vw';
                }
            }
            else {
                moveTab.style.width = '34%';
                if (_this.tabIndex === 1) {
                    moveTab.style.left = '30vw';
                }
                else if (_this.tabIndex === 2) {
                    moveTab.style.left = '61vw';
                }
            }
        });
        var tabs = document.getElementsByClassName('wizard-tab');
        for (var i = 1; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
    };
    ConnectionComponent.prototype.preOnClick = function () {
        var moveTab = document.querySelector('.move-tab');
        var nextBtn = document.getElementById('nextBtn');
        var preBtn = document.getElementById('preBtn');
        var tabs = document.getElementsByClassName('wizard-tab');
        var screenWidth = document.body.clientWidth;
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
        if (this.tabIndex === 1) {
            this.tabIndex--;
            moveTab.style.left = '-1vw';
            preBtn.style.visibility = 'hidden';
            nextBtn.style.visibility = 'visible';
            moveTab.innerHTML = 'Connection';
        }
        else if (this.tabIndex === 2) {
            this.tabIndex--;
            moveTab.style.left = screenWidth > 990 ? '20vw' : '30vw';
            preBtn.style.visibility = 'visible';
            nextBtn.style.visibility = 'hidden';
            moveTab.innerHTML = 'Query';
        }
        tabs[this.tabIndex].style.display = 'inherit';
    };
    ConnectionComponent.prototype.nextOnClick = function () {
        var moveTab = document.querySelector('.move-tab');
        var nextBtn = document.getElementById('nextBtn');
        var preBtn = document.getElementById('preBtn');
        var tabs = document.getElementsByClassName('wizard-tab');
        var screenWidth = document.body.clientWidth;
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
        if (this.tabIndex === 0) {
            this.waiting = true;
            this.registerdriver();
            this.getConnection();
            this.tabIndex++;
            moveTab.style.left = screenWidth > 990 ? '20vw' : '30vw';
            preBtn.style.visibility = 'visible';
            moveTab.innerHTML = 'Query';
            nextBtn.innerHTML = "Next";
            //nextBtn.style.visibility = 'hidden';
        }
        else if (this.tabIndex === 1) {
            if (this.selectedConnections == "") {
                swal({
                    title: 'Error!',
                    text: "Connection Invalid",
                    type: 'warning',
                    confirmButtonClass: 'btn btn-danger'
                });
                this.tabIndex = 1;
            }
            else {
                this.tabIndex++;
                moveTab.style.left = screenWidth > 990 ? '42vw' : '61vw';
                nextBtn.style.visibility = 'hidden';
                moveTab.innerHTML = 'Extraction';
            }
        }
        tabs[this.tabIndex].style.display = 'inherit';
    };
    ConnectionComponent.prototype.tabClick = function (id) {
        var moveTab = document.querySelector('.move-tab');
        var nextBtn = document.getElementById('nextBtn');
        var preBtn = document.getElementById('preBtn');
        var tabs = document.getElementsByClassName('wizard-tab');
        var screenWidth = document.body.clientWidth;
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
        this.tabIndex = parseInt(id);
        if (this.tabIndex === 0) {
            //this.waiting = true;
            this.tabIndex = 0;
            moveTab.style.left = '-1vw';
            nextBtn.style.visibility = 'visible';
            preBtn.style.visibility = 'hidden';
            nextBtn.innerHTML = "Add Connection";
            moveTab.innerHTML = 'Connection';
        }
        else if (this.tabIndex === 1) {
            this.getConnection();
            this.tabIndex = 1;
            moveTab.style.left = screenWidth > 990 ? '20vw' : '30vw';
            nextBtn.style.visibility = 'visible';
            preBtn.style.visibility = 'visible';
            nextBtn.innerHTML = "Next";
            moveTab.innerHTML = 'Query';
        }
        else if (this.tabIndex === 2) {
            /*
            
            if (this.selectedConnections == "") {
              swal({
                title: 'Error!',
                text: "Connection Invalid",
                type: 'warning',
                confirmButtonClass: 'btn btn-danger'
              });
              this.tabIndex = 1;
            } else {
              */
            this.tabIndex = 2;
            //this.getScript();
            moveTab.style.left = screenWidth > 1000 ? '42vw' : '60vw';
            nextBtn.style.visibility = 'hidden';
            preBtn.style.visibility = 'visible';
            moveTab.innerHTML = 'Extraction';
        }
        tabs[this.tabIndex].style.display = 'inherit';
    };
    ConnectionComponent.prototype.yourFunction = function () {
        this.rows = this.res;
        this.displayedColumns = this.rows.length > 0 ? Object.keys(this.rows[0]) : [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.rows);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ConnectionComponent.prototype.getScript = function (conect) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token'),
            'Access-Control-Allow-Origin': ' *',
        });
        var options = { headers: headers };
        // console.log("roles: " + this._cookieService.get('access_token'))
        var as = this._http.get("http://10.197.96.18:8080/system-dbconnection/" + conect + "/query", options).subscribe((function (res) {
            _this.querys = res;
            console.log(res);
        }));
    };
    ConnectionComponent.prototype.addSystem = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogContentExampleDialog, {
            height: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "") {
                console.log("Dialog result: " + result);
            }
            else {
                _this.postSystem(result);
            }
        });
    };
    ConnectionComponent.prototype.postQuery = function () {
        var _this = this;
        var params = new URLSearchParams();
        params.append('name', this.query.nome);
        params.append('query', this.query.query);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token')
        });
        //console.log(this.selected);
        var options = { headers: headers };
        var asdas = this._http.post("http://10.197.96.18:8080/system-dbconnection/" + this.selectedConnections
            + "/query", params.toString(), options)
            .subscribe(function (res) {
            //this.roles=res
            //this.show1 = true;
            _this.getsystems();
            console.log("res RUn");
            _this.res = res;
            console.log(_this.res);
            swal({
                title: 'Good job!',
                text: res.message,
                type: 'success',
                confirmButtonClass: 'btn btn-success'
            });
            //this.router.navigate(['/dashboard']);
        }, function (err) {
            console.log(err);
            // this.show1 = true;
            _this.getsystems();
            swal({
                title: 'ERROR!',
                text: err.error.message,
                type: 'warning',
                confirmButtonClass: 'btn btn-warning'
            });
            console.log(err);
        });
    };
    ConnectionComponent.prototype.postSystem = function (name) {
        var _this = this;
        //this.query.query="select * from ARGUS.PRC_PROCESSO"
        //this.show1 = false;
        var params = new URLSearchParams();
        params.append('name', name);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token'),
            'Access-Control-Allow-Origin': ' *',
        });
        //console.log(this.selected);
        var options = { headers: headers };
        var asdas = this._http.post("http://10.197.96.18:8080/system", params.toString(), options)
            .subscribe(function (res) {
            //this.roles=res
            //this.show1 = true;
            _this.getsystems();
            console.log("res RUn");
            _this.res = res;
            console.log(_this.res);
            swal({
                title: 'Good job!',
                text: res.message,
                type: 'success',
                confirmButtonClass: 'btn btn-success'
            });
            //this.router.navigate(['/dashboard']);
        }, function (err) {
            console.log(err);
            // this.show1 = true;
            _this.getsystems();
            swal({
                title: 'ERROR!',
                text: err.error.message,
                type: 'warning',
                confirmButtonClass: 'btn btn-warning'
            });
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ConnectionComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ConnectionComponent.prototype, "paginator", void 0);
    ConnectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connection',
            template: __webpack_require__(/*! ./connection.component.html */ "./src/app/dashboard/connection/connection.component.html"),
            styles: [__webpack_require__(/*! ./connection.component.css */ "./src/app/dashboard/connection/connection.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"]])
    ], ConnectionComponent);
    return ConnectionComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/connection/dialog.html":
/*!**************************************************!*\
  !*** ./src/app/dashboard/connection/dialog.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>ADD SYSTEM</h2>\r\n<mat-dialog-content>\r\n  <mat-input-container color=\"accent\">\r\n    <input matInput type=\"text\" placeholder=\"name\" [(ngModel)]=\"system\">\r\n  </mat-input-container>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-raised-button class=\"btn btn-danger btn-round\" mat-dialog-close>Cancel</button>\r\n  <button mat-raised-button class=\"btn btn-info btn-round\" [mat-dialog-close]=\"system\" cdkFocusInitial>ADD</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dashboard/create-connection/create-connection.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/create-connection/create-connection.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-input-container{\r\n    width: 90%;\r\n  }\r\n  \r\n  .mat-input-container textarea{\r\n    height: 90px;\r\n  }\r\n  \r\n  .wizard-header{\r\n    padding: 25px 0 35px;\r\n  }\r\n  \r\n  .wizard-navigation{\r\n    position: relative;\r\n  }\r\n  \r\n  .nav-pills{\r\n    background-color: rgba(200, 200, 200, 0.2);\r\n    width: 100%;\r\n  }\r\n  \r\n  .nav-pills li{\r\n    width: 33.3333%;\r\n    float: left;\r\n    margin-left: 0;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    min-width: 100px;\r\n    color: rgb(104, 101, 101);\r\n    padding: 10px 0;\r\n  }\r\n  \r\n  .move-tab{\r\n    position: absolute;\r\n    background-color: #0e3570;\r\n    box-shadow: 0 16px 26px -10px #071c3b, 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px #071c3b;\r\n    font-weight: 500;\r\n    border-radius: 4px;\r\n    color: #fff;\r\n    top: -2px;\r\n    left: -1vw;\r\n    width: calc((100% - 260px) / 2);\r\n    height: 114%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 500ms cubic-bezier(0.29, 1.42, 0.79, 1);\r\n  }\r\n  \r\n  .wizard-body{\r\n    min-height: 350px;\r\n    padding: 15px;\r\n  }\r\n  \r\n  .wizard-footer{\r\n    display: flex;\r\n    padding: 10px;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  table {\r\n    width: 100%;\r\n  }\r\n  \r\n  .basic-container {\r\n    padding: 30px;\r\n  }\r\n  \r\n  .version-info {\r\n    font-size: 8pt;\r\n    float: right;\r\n  }\r\n  \r\n  .boxed {\r\n    border: 1px solid green ;\r\n    top: -21px;\r\n    left: -11vw;\r\n    height: 114%;\r\n    width: 90%;\r\n  \r\n  }\r\n  \r\n  .div1 {\r\n    display:-ms-grid;\r\n    display:grid;\r\n    width:103%;\r\n    height: 100%; \r\n    border:2px solid black;\r\n    }\r\n  \r\n  .card{\r\n      display: flex;\r\n      flex-direction: column;\r\n      padding: 20px;\r\n      position: relative;\r\n      margin-top: 40px;\r\n      }\r\n  \r\n  .card-header {\r\n      position: absolute;\r\n      text-align: center;\r\n      background: linear-gradient(60deg, #0e3570, #4888e9);\r\n      box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px #081f41;\r\n      /*margin: -20px 15px 0;*/\r\n      border-radius: 3px;\r\n      padding: 15px;\r\n      top: -23px;\r\n      }\r\n  \r\n  .card-header i {\r\n  font-size: 24px;\r\n  width: 33px;\r\n  height: 33px;\r\n  line-height: 33px;\r\n  color: #fff;\r\n  }\r\n  \r\n  .card-content{\r\n  position: relative;\r\n  }\r\n  \r\n  .card-title{\r\n    padding-left: 80px;\r\n    }  "

/***/ }),

/***/ "./src/app/dashboard/create-connection/create-connection.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/create-connection/create-connection.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Create Reconciliacion\"></app-navbar>\n  <div class=\"row\" style=\"margin-top: 30px\">\n    <div class=\"col-md-13\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"material-icons\">insert_link</i>\n        </div>\n\n        <div>\n          <br>\n          <br>\n          <br>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n            <i class=\"material-icons\">reorder</i>\n            <mat-input-container color=\"accent\">\n              <input matInput type=\"text\" placeholder=\"name\" [(ngModel)]=\"reconData.acron\">\n            </mat-input-container>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n            <i class=\"material-icons\">calendar_today\n            </i>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose starting date \" [(ngModel)]=\"picker1\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\">\n                <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n              </mat-datepicker-toggle>\n              <mat-datepicker #picker></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n            <i class=\"material-icons\">calendar_today\n            </i>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput [matDatepicker]=\"pickerx\" placeholder=\"Choose ending date \" [(ngModel)]=\"picker2\">\n              <mat-datepicker-toggle matSuffix [for]=\"pickerx\">\n                <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n              </mat-datepicker-toggle>\n              <mat-datepicker #pickerx></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n\n\n            <cron-editor [(cron)]=\"cronExpression\" [disabled]=\"isCronDisabled\" [(options)]=\"cronOptions\">Cron here...</cron-editor>\n\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-7 col-md-offset-1\">\n            <i class=\"material-icons\">reorder</i>\n            <mat-input-container color=\"accent\">\n              <input matInput type=\"number\" min=\"1\" placeholder=\"Number of columns to compare\" [(ngModel)]=\"numcolum\">\n            </mat-input-container>\n          </div>\n          <div class=\"col-md-3\">\n            <button mat-raised-button class=\"btn btn-info btn-round\" (click)=\"showtable()\">table</button>\n          </div>\n        </div>\n\n\n        <ng-template #loadin>\n          <div class=\"loader\">\n            <svg class=\"circular\" viewBox=\"25 25 50 50\">\n              <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n            </svg>\n          </div>\n        </ng-template>\n        <div class=\"h-tab\" *ngIf=\"show1; then Block;\"></div>\n        <ng-template #Block>\n\n          <table class=\"table table-striped table-bordered\">\n            <thead>\n              <tr>\n                <td *ngFor=\" let key of colums\">\n                  {{key}}\n                </td>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td *ngFor=\" let key of colums;let i1 = index;\">\n                  <div class=\"h-tab\" *ngIf=\"i1>0; then Block1;else extract\"></div>\n\n                  <ng-template #extract>\n                    <mat-select placeholder=\"-- Extractions --\" [(ngModel)]=\"newAttribute[0]\" [(ngModel)]=\"selectExtract\" [multiple]=\"i1==1 ? 'true' : 'false'\"\n                      (ngModelChange)=\"getextractionsColums(selectExtract)\">\n                      <mat-option *ngFor=\"let key of extractions\" [value]=\"key.acron\" ngDefaultControl>\n                        {{key.acron}}\n                      </mat-option>\n                    </mat-select>\n\n                  </ng-template>\n                  <ng-template #Block1>\n                    <div class=\"h-tab1\" *ngIf=\"i1==colums.length-1; then ultima ;else normal\"></div>\n                    <ng-template #normal>\n                      <mat-select placeholder=\"-- select --\" [(ngModel)]=\"newAttribute[i1]\" [multiple]=\"i1==1 ? 'true' : 'false'\">\n                        <mat-option *ngFor=\"let key of extractionsC\" [value]=\"key\" ngDefaultControl>\n                          {{key}}\n                        </mat-option>\n                      </mat-select>\n                    </ng-template>\n                    <ng-template #ultima>\n                      <mat-checkbox [checked]='false'[(ngModel)]=\"newAttribute[i1]\"></mat-checkbox>\n                    </ng-template>\n                  </ng-template>\n\n\n                </td>\n\n                <td>\n                  <button class=\"btn btn-default\" type=\"button\" (click)=\"addFieldValue()\">Add</button>\n                </td>\n              </tr>\n\n              <tr *ngFor=\"let field of fieldArray; let i = index\">\n                <td *ngFor=\" let key of colums1 ;let i1 = index\">\n                  <input [(ngModel)]=\"field[i1]\" class=\"form-control\" type=\"text\" readonly/>\n                </td>\n                <td>\n                  <button class=\"btn btn-default\" type=\"button\" (click)=\"deleteFieldValue(i)\">Delete</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </ng-template>\n\n        <div class=\"col-md-3 col-md-offset-5\">\n          <br>\n          <button mat-raised-button class=\"btn btn-info btn-round\" (click)=\"postRecon()\">ADD Reconciliacion</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/create-connection/create-connection.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/create-connection/create-connection.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateConnectionComponent", function() { return CreateConnectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateConnectionComponent = /** @class */ (function () {
    function CreateConnectionComponent(_http, _cookieService) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.reconData = { acron: "", cronExpression: "", categoryId: "" };
        this.show1 = true;
        this.selectextract = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.numcolum = 0;
        this.selectExtract = "";
        this.extractions = [];
        this.extractionsC = [];
        this.data = [];
        this.selected = '';
        this.selectedSystem = '';
        this.picker1 = new Date();
        this.picker2 = new Date();
        this.cronExpression = '4 3 2 12 1/1 ? *';
        this.isCronDisabled = false;
        this.cronOptions = {
            formInputClass: 'form-control cron-editor-input',
            formSelectClass: 'form-control cron-editor-select',
            formRadioClass: 'cron-editor-radio',
            formCheckboxClass: 'cron-editor-checkbox',
            defaultTime: "10:00:00",
            hideMinutesTab: false,
            hideHourlyTab: false,
            hideDailyTab: false,
            hideWeeklyTab: false,
            hideMonthlyTab: false,
            hideYearlyTab: false,
            hideAdvancedTab: true,
            use24HourTime: true,
            hideSeconds: false
        };
        this.colums = [];
        this.colums1 = [];
        this.fieldArray = [];
        this.newAttribute = [];
        this.cont = 0;
        this.compara1 = [];
        this.tranf = [];
        this.return = [];
    }
    CreateConnectionComponent.prototype.ngOnInit = function () {
        this.show1 = false;
        this.getextractions();
        this.data = this.extractions;
    };
    CreateConnectionComponent.prototype.getextractions = function () {
        var _this = this;
        this.show1 = false;
        var params;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token')
        });
        var options = { headers: headers };
        console.log("roles: " + this._cookieService.get('access_token'));
        var as = this._http.get("http://10.197.96.18:8080/extract", options).subscribe((function (res) {
            _this.extractions = res;
            //console.log(res)
        }));
        //console.log("dead")
        //console.log(params)
    };
    CreateConnectionComponent.prototype.getextractionsColums = function (id) {
        var _this = this;
        var params;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token')
        });
        var options = { headers: headers };
        var as = this._http.get("http://10.197.96.18:8080/extract/acron/" + id + "/columns", options).subscribe((function (res) {
            _this.extractionsC = res;
            //console.log(res);
        }));
        //console.log("dead")
        //console.log(params)
    };
    CreateConnectionComponent.prototype.addFieldValue = function () {
        console.log(this.newAttribute[this.newAttribute.length - 1]);
        console.log(this.cont);
        console.log(this.newAttribute[this.newAttribute.length - 1]);
        if (this.newAttribute[this.newAttribute.length - 1] == true && this.cont >= 1) {
            console.log("erro");
            this.newAttribute[this.newAttribute.length - 1] = false;
        }
        else {
            if (this.newAttribute[this.newAttribute.length - 1] == true) {
                console.log("true");
                this.cont = 1;
                this.fieldArray.push(this.newAttribute);
                this.newAttribute = [];
                console.log(this.cont);
            }
            else {
                this.newAttribute[this.newAttribute.length] = false;
                this.fieldArray.push(this.newAttribute);
                this.newAttribute = [];
            }
        }
        //console.log(this.fieldArray);
        /// }
        //  else {
        //  console.log("erro")
        //}
    };
    CreateConnectionComponent.prototype.transformtest = function () {
        for (var i = 0; i < this.fieldArray.length; i++) {
            for (var j = 2; j < this.fieldArray[i].length; j++) {
                this.compara1.push(this.fieldArray[i][j]);
            }
            this.tranf[i] = this.compara1;
            this.compara1 = [];
        }
        //console.log(this.tranf)
        for (var i = 0; i < this.fieldArray.length; i++) {
            this.return[i] = [this.fieldArray[i][0], this.fieldArray[i][1], this.tranf[i]];
        }
        console.log("ola");
        console.log(this.return);
    };
    CreateConnectionComponent.prototype.postReconComp = function (id) {
        this.transformtest();
        for (var i = 0; i < this.return.length; i++) {
            console.log("lengthth" + this.return.length);
            var param = new URLSearchParams();
            param.append("acron", this.return[i][0]);
            console.log("acron" + this.return[i][0]);
            var teste = {
                acron: this.return[i][0],
                pks: this.return[i][1],
                cols: this.return[i][2]
            };
            param.append("pks", this.return[i][1]);
            console.log("pks", this.return[i][1]);
            param.append("cols", this.return[i][2]);
            console.log("cols", this.return[i][2]);
            console.log(JSON.stringify(param));
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this._cookieService.get('access_token'),
            });
            //console.log(this.selected);
            var options = { headers: headers };
            var asdas = this._http.post("http://10.197.96.18:8080/reconciliation/" + id + "/extraction-info", teste, options)
                .subscribe(function (res) {
                // this.show=true;
                //this.roles=res
                console.log("res");
                swal({
                    title: 'Good job!',
                    text: "OK",
                    type: 'success',
                    confirmButtonClass: 'btn btn-success'
                });
                //this.router.navigate(['/dashboard']);
            }, function (err) {
                // this.show=true;
                console.log(err);
                swal({
                    title: 'ERROR!',
                    text: err.error.message,
                    type: 'warning',
                    confirmButtonClass: 'btn btn-warning'
                });
                console.log(err);
            });
        }
    };
    CreateConnectionComponent.prototype.showtable = function () {
        //console.log(this.numcolum);
        this.colums = ["Extractions", "PK's"];
        for (var index = 1; index <= this.numcolum; index++) {
            this.colums.push("Comparation " + index);
        }
        this.show1 = true;
        this.colums1 = this.colums;
        this.colums1.push("true");
    };
    CreateConnectionComponent.prototype.postRecon = function () {
        var _this = this;
        var param = new URLSearchParams();
        param.append("acron", this.reconData.acron);
        var cron = this.cronExpression.substring(0, this.cronExpression.length - 1);
        param.append("cronExpression", cron);
        var date = this.picker1.getFullYear() + "-" + (this.picker1.getMonth() + 1) + "-" + this.picker1.getDate();
        param.append("initialDateFormated", date);
        var date2 = this.picker2.getFullYear() + "-" + (this.picker2.getMonth() + 1) + "-" + this.picker2.getDate();
        param.append("finalDateFormated", date2);
        param.append("categoryId", "1");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token'),
        });
        //console.log(this.selected);
        var options = { headers: headers };
        var asdas = this._http.post("http://10.197.96.18:8080/reconciliation", param.toString(), options)
            .subscribe(function (res) {
            // this.show=true;
            //this.roles=res
            console.log("res");
            console.log(res);
            console.log(res.id);
            _this.postReconComp(res.id);
            swal({
                title: 'Good job!',
                text: res.message,
                type: 'success',
                confirmButtonClass: 'btn btn-success'
            });
            //this.router.navigate(['/dashboard']);
        }, function (err) {
            // this.show=true;
            console.log(err);
            swal({
                title: 'ERROR!',
                text: err.error.message,
                type: 'warning',
                confirmButtonClass: 'btn btn-warning'
            });
            console.log(err);
        });
    };
    CreateConnectionComponent.prototype.deleteFieldValue = function (index) {
        this.fieldArray.splice(index, 1);
        if (this.fieldArray[index][this.newAttribute.length - 1] == true) { }
        this.cont = 0;
    };
    CreateConnectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-connection',
            template: __webpack_require__(/*! ./create-connection.component.html */ "./src/app/dashboard/create-connection/create-connection.component.html"),
            styles: [__webpack_require__(/*! ./create-connection.component.css */ "./src/app/dashboard/create-connection/create-connection.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], CreateConnectionComponent);
    return CreateConnectionComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/extraction/extraction.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/extraction/extraction.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/extraction/extraction.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/extraction/extraction.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Register Extraction\"></app-navbar>\n  <meta http-equiv=\"content-type\" content=\"text/html; charset=windows-1252\">\n  <div class=\"container\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <div class=\"card\">\n        <h2>Register</h2>\n        <div class=\"row\">\n          <div class=\"col-md-5\">\n            <div class=\"form-part\">\n              <div class=\"row\">\n                <i class=\"material-icons\">face</i>\n                <mat-input-container color=\"accent\">\n                  <input type=\"text\" matInput placeholder=\"Name\" [(ngModel)]=\"extractionData.name\">\n                </mat-input-container>\n              </div>\n              <div class=\"row\">\n                <i class=\"material-icons\">face</i>\n                <mat-input-container color=\"accent\">\n                  <input type=\"text\" matInput placeholder=\"User Name\" [(ngModel)]=\"extractionData.cronExpression\">\n                </mat-input-container>\n              </div>\n              <div class=\"row\">\n                <i class=\"material-icons\">email</i>\n                <mat-input-container color=\"accent\">\n                  <input type=\"text\" matInput placeholder=\"Email\" [(ngModel)]=\"extractionData.queryId\">\n                </mat-input-container>\n              </div>\n\n            </div>\n          </div>\n\n        </div>\n        <div class=\"row\" style=\"display: flex; justify-content: center\">\n          <button mat-raised-button class=\"btn btn-primary btn-round\" (click)=\"register()\">GET STARTED</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/extraction/extraction.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/extraction/extraction.component.ts ***!
  \**************************************************************/
/*! exports provided: ExtractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractionComponent", function() { return ExtractionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExtractionComponent = /** @class */ (function () {
    function ExtractionComponent() {
        this.extractionData = { nome: "", cronExpression: "", queryId: "", finalDate: "" };
    }
    ExtractionComponent.prototype.ngOnInit = function () {
    };
    ExtractionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extraction',
            template: __webpack_require__(/*! ./extraction.component.html */ "./src/app/dashboard/extraction/extraction.component.html"),
            styles: [__webpack_require__(/*! ./extraction.component.css */ "./src/app/dashboard/extraction/extraction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtractionComponent);
    return ExtractionComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Dashboard\"></app-navbar>\n  <div class=\"row\" style=\"margin-top: 30px\">\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n      <app-figurecard title=\"184\" headerIcon=\"weekend\" category=\"Reconciliations\" footContent=\"Get More Space...\" footerIcon=\"warning\"\n        linearColor=\"linear-gradient(60deg, #ffa726, #fb8c00)\" boxShadow=\"0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)\">\n      </app-figurecard>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n      <app-figurecard title=\"75.521\" headerIcon=\"equalizer\" category=\"Extractions\" footContent=\"Google Analytics\" footerIcon=\"local_offer\"\n        linearColor=\"linear-gradient(60deg, #ef5350, #e53935)\" boxShadow=\"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4)\">\n      </app-figurecard>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n      <app-figurecard title=\"$3,245\" headerIcon=\"store\" category=\"Revenue\" footContent=\"Last 24 Hours\" footerIcon=\"date_range\"\n        linearColor=\"linear-gradient(60deg, #66bb6a, #43a047)\" boxShadow=\"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)\">\n      </app-figurecard>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n      <app-figurecard title=\"+245\" headerIcon=\"mic\" category=\"Followers\" footContent=\"Just Updated\" footerIcon=\"update\" linearColor=\"linear-gradient(60deg, #26c6da, #00acc1)\"\n        boxShadow=\"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.4)\">\n      </app-figurecard>\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"margin-top: 10px\">\n    <div class=\"col-md-13\">\n      <app-imagecard image=\"../../../assets/img/das.png\">\n      </app-imagecard>\n    </div>\n\n    <!--\n    <div class=\"col-md-4 col-sm-12 col-xs-12\">\n      <app-imagecard\n        image=\"https://media.pixcove.com/B/0/2/Railroad-Tracks-Traffic-Transportation-Railroad-Ra-9842.jpg\"\n        title=\"Office Studio\"\n        desc=\"The place is close to Metro Station and bus stop just 2 min by walk and near...\"\n        footerTitle=\"$1,119/night\"\n        position=\"London, UK\">\n      </app-imagecard>\n    </div>\n    <div class=\"col-md-4 col-sm-12 col-xs-12\">\n      <app-imagecard\n        image=\"https://media.pixcove.com/B/0/2/Railroad-Tracks-Traffic-Transportation-Railroad-Ra-9842.jpg\"\n        title=\"Beautiful Castle\"\n        desc=\"The place is close to Metro Station and bus stop just 2 min by walk and near...\"\n        footerTitle=\"$459/night\"\n        position=\"Milan, Italy\">\n      </app-imagecard>\n    </div>\n  -->\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import * as Chartist from 'chartist';

var HomeComponent = /** @class */ (function () {
    function HomeComponent(_service) {
        this._service = _service;
    }
    HomeComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    HomeComponent.prototype.ngOnInit = function () {
        // console.log("homecomponetninit");
        //this._service.getUser();
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var datawebsiteViewsChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionswebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/dashboard/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/notification/notification.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/notification/notification.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notification-card{\n  padding: 23px 20px 18px 20px;\n}\n\n.notification-card h4{\n  margin-bottom: 15px;\n}\n\n.place{\n  padding: 20px;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/notification/notification.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/notification/notification.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Notification\"></app-navbar>\n  <div class=\"row page-title\">\n    <h3 class=\"text-center\">Notifications</h3>\n  </div>\n  <div class=\"row\">\n    <p class=\"text-center subtitle\">Handcrafted by our friend\n      <a href=\"https://github.com/mouse0270\" target=\"_blank\">Robert McIntosh</a>. Please checkout the\n      <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation</a>.</p>\n  </div>\n  <div class=\"row page-title\">\n    <div class=\"col-md-6 col-sm-12 col-xs-12\">\n      <div class=\"card notification-card\">\n        <h4>Notifications Style</h4>\n        <div class=\"alert alert-info\">\n          <span>This is a plain notification</span>\n        </div>\n        <div class=\"alert alert-info\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <i class=\"material-icons\">close</i>\n          </button>\n          <span>This is a plain notification</span>\n        </div>\n        <div class=\"alert alert-info alert-with-icon\">\n          <i class=\"material-icons alert-icon\">notifications</i>\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <i class=\"material-icons\">close</i>\n          </button>\n          <span>This is a notification with close button and icon and have many lines. You can see that the icon and the close\n            button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the\n            style.\n          </span>\n        </div>\n        <div class=\"alert alert-rose alert-with-icon\">\n          <i class=\"material-icons alert-icon\">notifications</i>\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <i class=\"material-icons\">close</i>\n          </button>\n          <span>This is a notification with close button and icon and have many lines. You can see that the icon and the close\n            button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the\n            style.\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12 col-xs-12\">\n      <div class=\"card notification-card\">\n        <h4>Notification States</h4>\n        <div class=\"alert alert-info\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <i class=\"material-icons\">close</i>\n          </button>\n          <span>INFO - This is a regular notification made with \".alert-info\"</span>\n        </div>\n        <div class=\"alert alert-success\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <i class=\"material-icons\">close</i>\n          </button>\n          <span>SUCCESS - This is a regular notification made with \".alert-success\"</span>\n        </div>\n        <div class=\"alert alert-warning\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <i class=\"material-icons\">close</i>\n          </button>\n          <span>WARNING - This is a regular notification made with \".alert-warning\"</span>\n        </div>\n        <div class=\"alert alert-danger\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <i class=\"material-icons\">close</i>\n          </button>\n          <span>DANGER - This is a regular notification made with \".alert-danger\"</span>\n        </div>\n        <div class=\"alert alert-primary\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <i class=\"material-icons\">close</i>\n          </button>\n          <span>PRIMARY - This is a regular notification made with \".alert-primary\"</span>\n        </div>\n        <div class=\"alert alert-rose\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <i class=\"material-icons\">close</i>\n          </button>\n          <span>ROSE - This is a regular notification made with \".alert-rose\"</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin: 35px 0 20px 0;\">\n    <div class=\"card place\">\n      <h4 class=\"text-center\">Notifications Places</h4>\n      <p class=\"text-center\">Click to view notifications</p>\n      <div class=\"row\" style=\"margin-top: 15px\">\n        <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('top-left')\">TOP LEFT</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('top-center')\">TOP CENTER</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('top-right')\">TOP RIGHT</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"row page-title\">\n        <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('bottom-left')\">BOTTOM LEFT</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('bottom-center')\">BOTTOM CENTER</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('bottom-right')\">BOTTOM RIGHT</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard/notification/notification.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/notification/notification.component.ts ***!
  \******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent.prototype.btnClick = function (position) {
        var from = 'top';
        var align = 'right';
        var type = 'info';
        switch (position) {
            case 'top-left':
                align = 'left';
                type = 'rose';
                break;
            case 'top-center':
                align = 'center';
                type = 'success';
                break;
            case 'bottom-left':
                align = 'left';
                from = 'bottom';
                type = 'primary';
                break;
            case 'bottom-center':
                align = 'center';
                from = 'bottom';
                type = 'warning';
                break;
            case 'bottom-right':
                from = 'bottom';
                type = 'danger';
                break;
        }
        $.notify({
            message: 'Welcome to <b>MATERIAL DASHBOARD</b> - a beautiful dashboard for every web developer.',
        }, {
            placement: { from: from, align: align },
            offset: { x: 20, y: 35 },
            type: type,
            template: "<div class=\"alert alert-{0} alert-with-icon col-md-4\">\n          <i class=\"material-icons alert-icon\">notifications</i>\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>{2}</span>\n        </div>"
        });
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/dashboard/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/dashboard/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-profile{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 25px;\n  position: relative;\n  /*margin-top: 60px;*/\n}\n\n.profile{\n  position: absolute;\n  top: -40px;\n}\n\n.profile img{\n  border-radius: 50%;\n  width: 130px;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.right-profile h6{\n  margin-top: 100px;\n  margin-bottom: 8px;\n  color: #999;\n}\n\n.right-profile h4{\n  margin-bottom: 5px;\n}\n\n.right-profile p{\n  color: #999;\n}\n\n.right-profile button {\n  margin-top: 15px;\n}\n\n.card{\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  position: relative;\n  margin-top: 40px;\n}\n\n.card-header {\n  position: absolute;\n  text-align: center;\n  background: linear-gradient(60deg, #ec407a, #d81b60);\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\n  /*margin: -20px 15px 0;*/\n  border-radius: 3px;\n  padding: 15px;\n  top: -23px;\n}\n\n.card-header i {\n  font-size: 24px;\n  width: 33px;\n  height: 33px;\n  line-height: 33px;\n  color: #fff;\n}\n\n.card-content{\n  position: relative;\n}\n\n.card-title{\n  padding-left: 80px;\n}\n\n.mat-input-container{\n  width: 100%;\n}\n\n.category{\n  font-weight: 300;\n}\n\nform{\n  margin-top: 30px;\n}\n\n.row{\n  margin-top: 15px;\n}\n\n.mat-input-container textarea{\n  height: 90px;\n}\n\n.textarea-label{\n  color: #aaa;\n  margin-bottom: 10px;\n}\n\n.action-btn{\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 15px;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"User Profile\"></app-navbar>\n  <div class=\"row\" style=\"margin-top: 30px\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"material-icons\">perm_identity</i>\n        </div>\n        <div class=\"card-content\">\n          <h4 class=\"card-title\">Edit Profile -\n            <small class=\"category\">Complete your profile</small>\n          </h4>\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <mat-input-container color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"First Name\"   [(ngModel)]=\"firstName\" value=\"Ci\" name=\"firstName\">\n                </mat-input-container>\n              </div>\n              <div class=\"col-md-6\">\n                <mat-input-container color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"lastName\" value=\"Clia\" name=\"lastName\">\n                </mat-input-container>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-input-container color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"Email\" [(ngModel)]=\"mail\" value=\"Clia\" name=\"mail\">\n                </mat-input-container>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-input-container color=\"accent\">\n                  <input matInput [type]=\"hide ? 'password' : 'text'\" placeholder=\"New password\" [(ngModel)]=\"password\" value=\"Clia\" name=\"password\">\n                  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\n                </mat-input-container>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <label class=\"textarea-label\">About Me</label>\n                <mat-input-container color=\"accent\">\n                  <textarea matInput placeholder=\"\"></textarea>\n                </mat-input-container>\n              </div>\n            </div>\n            <div class=\"row action-btn\">\n              <button md-raised-button type=\"submit\" class=\"btn btn-rose\" (click)=\"putUser()\">UPDATE PROFILE</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card right-profile\">\n        <div class=\"profile\">\n          <img src= \"https://www.phone.cam.ac.uk/images/users.png/image_preview\" alt=\"profile\"/>\n        </div>\n        <h6>CEO / CO-FOUNDER</h6>\n        <h4>{{ firstName }} {{ lastName }}</h4>\n        <p>Don't be scared of the truth because we need to restart the human foundation...</p>\n        <button mat-raised-button class=\"btn btn-rose btn-round\">CHANGE</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, _http, _cookieService) {
        this.router = router;
        this._http = _http;
        this._cookieService = _cookieService;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.hide = true;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.firstName = this.user.name;
        this.mail = this.user.email;
        this.lastName = this.user.username;
    };
    ProfileComponent.prototype.putUser = function () {
        var _this = this;
        var params = new URLSearchParams();
        params.append('name', this.lastName);
        params.append('password', this.password);
        params.append('email', this.mail);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token')
        });
        var options = { headers: headers };
        // console.log("roles: " + this._cookieService.get('access_token'))
        var as = this._http.put("http://10.197.96.18:8080/users/logged", params.toString(), options).subscribe(function (res) {
            //console.log(res);
            swal({
                title: 'Good job!',
                text: res.message,
                type: 'success',
                confirmButtonClass: 'btn btn-success'
            });
            _this.getUser();
            _this.router.navigate(['/dashboard']);
        });
        //console.log("dead")
        //console.log(params)
    };
    ProfileComponent.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var x, headers, options, asd;
            return __generator(this, function (_a) {
                x = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': ' *',
                    'Authorization': 'Bearer ' + this._cookieService.get('access_token')
                });
                options = { headers: headers };
                asd = this._http.get("http://10.197.96.18:8080/users/logged", options).subscribe(function (res) {
                    //this.roles=res
                    x.name = res.name;
                    x.email = res.email;
                    x.username = res.username;
                    x.roles = res.roles;
                    //x.permissions = res.permissions;
                    //this._cookieService.set("userLogin", x);
                    _this.user = x;
                    localStorage.setItem("user", JSON.stringify(x));
                    //console.log("getuser" + localStorage.getItem("user"));
                });
                return [2 /*return*/];
            });
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/dashboard/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/registo/registo.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/registo/registo.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    height: 100%;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .background {\r\n    background: url('register_bg.jpg') center center;\r\n    background-size: cover;\r\n  }\r\n  \r\n  .register-panel{\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  .card{\r\n    padding: 40px 0 30px;\r\n  }\r\n  \r\n  .card h2{\r\n    text-align: center;\r\n  }\r\n  \r\n  .feature{\r\n    display: flex;\r\n    /*width: 100%;*/\r\n    flex: 1;\r\n    margin-top: 50px;\r\n  }\r\n  \r\n  .feature .icon{\r\n    width: 40px;\r\n  }\r\n  \r\n  .feature .icon i{\r\n    font-size: 2.6em;\r\n  }\r\n  \r\n  .feature .desc{\r\n    flex: 1;\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .feature .desc p{\r\n    margin-top: 17px;\r\n  }\r\n  \r\n  .feature .desc h4{\r\n    margin-top: 8px;\r\n  }\r\n  \r\n  .form-part{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    padding-left: 25px;\r\n  }\r\n  \r\n  .form-part .row{\r\n    width: 100%;\r\n    display: flex;\r\n    position: relative;\r\n    margin-top: 17px;\r\n  }\r\n  \r\n  .form-part .row .mat-input-container{\r\n    width: 100%;\r\n  }\r\n  \r\n  .form-part .row i{\r\n    margin-right: 13px;\r\n    position: relative;\r\n    top: 8px;\r\n    color: #555;\r\n  }\r\n  \r\n  .form-part .socials{\r\n    margin-top: 40px;\r\n    margin-bottom: 25px;\r\n  }\r\n  \r\n  .form-part .row button{\r\n    margin-top: 15px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/dashboard/registo/registo.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/registo/registo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <meta http-equiv=\"content-type\" content=\"text/html; charset=windows-1252\">\n  <div class=\"container\">\n    <div class=\"row register-panel\">\n      <div class=\"col-md-10 col-md-offset-1\">\n        <div class=\"card\">\n          <h2>Register</h2>\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <div class=\"form-part\">\n                <div class=\"row\">\n                  <i class=\"material-icons\">face</i>\n                  <mat-input-container color=\"accent\">\n                    <input type=\"text\" matInput placeholder=\"Name\" [(ngModel)]=\"registerData.name\">\n                  </mat-input-container>\n                </div>\n                <div class=\"row\">\n                  <i class=\"material-icons\">face</i>\n                  <mat-input-container color=\"accent\">\n                    <input type=\"text\" matInput placeholder=\"User Name\" [(ngModel)]=\"registerData.username\">\n                  </mat-input-container>\n                </div>\n                <div class=\"row\">\n                  <i class=\"material-icons\">email</i>\n                  <mat-input-container color=\"accent\">\n                    <input type=\"text\" matInput placeholder=\"Email\" [(ngModel)]=\"registerData.email\">\n                  </mat-input-container>\n                </div>\n                <div class=\"row\">\n                  <i class=\"material-icons\">lock_outline</i>\n                  <mat-input-container color=\"accent\">\n                    <input [type]=\"hide ? 'password' : 'text'\" matInput placeholder=\"Password\" [(ngModel)]=\"registerData.password\">\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                  </mat-input-container>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-5\">\n              <div class=\"form-part\">\n                <div class=\"row\">\n                  <i class=\"material-icons\">group</i>\n                  <mat-form-field>\n                    <mat-select placeholder=\"-- Role --\" [(ngModel)]=\"selected\">\n                      <mat-option *ngFor=\"let role of roles\" [value]=\"role.id\">\n                        {{role.rolename}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                  <p> Selected value: {{selected}} </p>\n                </div>\n                <!--\n                <div class=\"row\">\n                  <i class=\"material-icons\">group</i>\n                  <mat-form-field>\n                    <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\n                      <mat-select-trigger>\n                        {{toppings.value ? toppings.value[0] : ''}}\n                        <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">\n                          (+{{toppings.value.length - 1}} others)\n                        </span>\n                      </mat-select-trigger>\n                      <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                  <p> Selected value: {{toppings.value}} </p>\n                </div>\n              -->\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" style=\"display: flex; justify-content: center\">\n            <button mat-raised-button class=\"btn btn-primary btn-round\" (click)=\"register()\">GET STARTED</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/registo/registo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/registo/registo.component.ts ***!
  \********************************************************/
/*! exports provided: RegistoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistoComponent", function() { return RegistoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistoComponent = /** @class */ (function () {
    function RegistoComponent(_http, _cookieService, router) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.router = router;
        this.roles = [];
        this.selected = '';
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.registerData = { username: "", name: "", password: "", email: "", roles: "" };
        this.hide = true;
    }
    RegistoComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    RegistoComponent.prototype.getRoles = function () {
        var _this = this;
        var params;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this._cookieService.get('access_token'),
        });
        var options = { headers: headers };
        console.log("roles: " + this._cookieService.get('access_token'));
        var as = this._http.get("http://10.197.96.18:8080/roles", options).subscribe((function (res) {
            _this.roles = res;
            console.log(res);
        }));
        //console.log("dead")
        //console.log(params)
    };
    RegistoComponent.prototype.register = function () {
        var _this = this;
        var params = new URLSearchParams();
        params.append('username', this.registerData.username);
        params.append('name', this.registerData.name);
        params.append('password', this.registerData.password);
        params.append('email', this.registerData.email);
        var sel = parseInt(this.selected);
        params.append('roles', this.selected);
        // let param = new User();
        //param.username=this.registerData.username;
        //param.name=this.registerData.name;
        //param.password=this.registerData.password;
        //param.email=this.registerData.email;
        //let sel=parseInt(this.selected)
        // param.roles=[sel];
        console.log("select " + this.selected);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token'),
        });
        //console.log(this.selected);
        var options = { headers: headers };
        var asdas = this._http.post("http://10.197.96.18:8080/users/user", params.toString(), options)
            .subscribe(function (res) {
            //this.roles=res
            console.log("res");
            console.log(res);
            swal({
                title: 'Good job!',
                text: res.message,
                type: 'success',
                confirmButtonClass: 'btn btn-success'
            });
            _this.router.navigate(['/dashboard/Access-Management']);
        }, function (err) {
            console.log(err);
            swal({
                title: 'ERROR!',
                text: err.error.message,
                type: 'warning',
                confirmButtonClass: 'btn btn-warning'
            });
            console.log(err);
        });
    };
    RegistoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registo',
            template: __webpack_require__(/*! ./registo.component.html */ "./src/app/dashboard/registo/registo.component.html"),
            styles: [__webpack_require__(/*! ./registo.component.css */ "./src/app/dashboard/registo/registo.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegistoComponent);
    return RegistoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/root/root.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/root/root.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh;\n  display: flex;\n  width: 100%;\n  flex: 1;\n}\n\n.sidebar-panel{\n  width: 260px;\n  position: fixed;\n  height: 100%;\n  /*background-color: #D80B0B;*/\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  transition: all 500ms;\n}\n\n.main-panel{\n  width: 100%;\n  flex: 1;\n  padding-left: 260px;\n}\n\n.sidebar-background{\n  position: absolute;\n  z-index: 0;\n  height: 100%;\n  width: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center;\n  opacity: 0.2;\n  filter: alpha(opacity=10);\n  transition: all 500ms;\n}\n\n"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar-panel\" id=\"sidebar\" [style.background-color]=\"backgroundColor\">\n    <div class=\"sidebar-background\" [style.background-image]=\"'url(https://i.pinimg.com/736x/f9/fe/98/f9fe989d5d2c677634a0b215ba4ad39f--space-wallpaper-hd-wallpaper.jpg)'\"></div>\n    <app-sidebar></app-sidebar>\n  </div>\n  <div class=\"main-panel\" id=\"main-panel\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/root/root.component.ts ***!
  \**************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootComponent = /** @class */ (function () {
    function RootComponent(settingService) {
        this.settingService = settingService;
        this.backgroundColor = settingService.getSidebarColor();
    }
    RootComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.sidebarColorUpdate.subscribe(function (color) {
            _this.backgroundColor = color;
        });
    };
    RootComponent.prototype.ngOnDestroy = function () {
        this.settingService.sidebarColorUpdate.unsubscribe();
    };
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/dashboard/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.css */ "./src/app/dashboard/root/root.component.css")]
        }),
        __metadata("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-btn{\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n\n.sidebar-img{\n  max-width: 100%;\n  border-radius: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n  transition: all 400ms;\n  border: 4px solid transparent;\n}\n\n.btn-hover:hover{\n  border-color: rgba(0, 187, 255, 0.5);\n  transition: all 400ms;\n}\n\n.active{\n  border-color: #00bbff;\n}\n\n.dot-row{\n  display: flex;\n  justify-content: center;\n  margin: 20px 0 40px 0;\n}\n\n.dot{\n  border: 3px solid transparent;\n  border-radius: 50%;\n  width: 23px;\n  height: 23px;\n  margin: 0 10px;\n  cursor: pointer;\n}\n\n.purple{\n  background-color: #9c27b0;\n}\n\n.blue{\n  background-color: #00bcd4;\n}\n\n.dodgerblue{\n  background-color: dodgerblue;\n}\n\n.green{\n  background-color: #4caf50;\n}\n\n.orange{\n  background-color: #ff9800;\n}\n\n.red{\n  background-color: #f44336;\n}\n\n.white{\n  background-color: rgba(200, 200, 200, 0.2);\n}\n\n.rose{\n  background-color: #e91e63;\n}\n\n.black{\n  background-color: #000;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Settings\"></app-navbar>\n  <div class=\"row\" style=\"margin-top: 30px\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <h4 class=\"text-center text-uppercase\">Sidebar Filters</h4>\n      <div class=\"col-md-12 dot-row\">\n        <div class=\"dot purple btn-hover\" (click)=\"filterChooseClick('#9c27b0')\"></div>\n        <div class=\"dot blue btn-hover\" (click)=\"filterChooseClick('#0e3570')\"></div>\n        <div class=\"dot green btn-hover\" (click)=\"filterChooseClick('#4caf50')\"></div>\n        <div class=\"dot orange btn-hover\" (click)=\"filterChooseClick('#ff9800')\"></div>\n        <div class=\"dot red btn-hover\" (click)=\"filterChooseClick('#f44336')\"></div>\n        <!--<div class=\"dot white btn-hover\" (click)=\"filterChooseClick('#f2f2f2')\"></div>-->\n        <div class=\"dot rose btn-hover\" (click)=\"filterChooseClick('#e91e63')\"></div>\n      </div>\n    </div>\n\n    <div class=\"col-md-10 col-md-offset-1\">\n      <h4 class=\"text-center text-uppercase\">Sidebar Background</h4>\n      <div class=\"col-md-12 dot-row\">\n        <div class=\"dot red btn-hover\" (click)=\"bgColorChooseClick('#D80B0B')\"></div>\n        <div class=\"dot dodgerblue btn-hover\" (click)=\"bgColorChooseClick('#0e3570')\"></div>\n        <div class=\"dot white btn-hover\" (click)=\"bgColorChooseClick('#f2f2f2')\"></div>\n        <div class=\"dot black btn-hover\" (click)=\"bgColorChooseClick('#000')\"></div>\n      </div>\n    </div>\n\n  \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingService) {
        this.settingService = settingService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var sidebarImgs = document.getElementsByClassName('sidebar-img');
    };
    SettingsComponent.prototype.filterChooseClick = function (color) {
        this.settingService.setSidebarFilter(color);
        //console.log(color);
    };
    SettingsComponent.prototype.bgColorChooseClick = function (color) {
        this.settingService.setSidebarColor(color);
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/dashboard/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/dashboard/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/sweetalert/sweetalert.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/sweetalert/sweetalert.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  display: flex;\n  flex-direction: column;\n  padding: 25px 20px 22px 20px;\n  align-items: center;\n  margin-top: 30px;\n}\n\n.card h5{\n  margin-bottom: 20px;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/sweetalert/sweetalert.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/sweetalert/sweetalert.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Sweet Alert\"></app-navbar>\n  <div class=\"row page-title\">\n    <h3 class=\"text-center\">Sweet Alert 2</h3>\n  </div>\n  <div class=\"row\">\n    <p class=\"text-center subtitle\">A beautiful plugin, that replace the classic alert, Handcrafted by our friend <a href=\"https://twitter.com/t4t5\" target=\"_blank\">Tristan Edwards</a>. Please checkout the <a href=\"http://limonte.github.io/sweetalert2/\" target=\"_blank\">full documentation</a>.</p>\n  </div>\n  <div class=\"row page-title\">\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>Basic example</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('basic')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>A title with a text under</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('text')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>A success message</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('success')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>Custom HTML description</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('html')\">TRY ME!</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>A warning message, with a function attached to the \"Confirm\" Button...</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('confirm')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>...and by passing a parameter, you can execute something else for \"Cancel\"</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('cancel')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>A message with auto close timer set to 2 seconds</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('close')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>Modal window with input field</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('input')\">TRY ME!</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/sweetalert/sweetalert.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/sweetalert/sweetalert.component.ts ***!
  \**************************************************************/
/*! exports provided: SweetAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlertComponent", function() { return SweetAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SweetAlertComponent = /** @class */ (function () {
    function SweetAlertComponent() {
    }
    SweetAlertComponent.prototype.ngOnInit = function () {
    };
    SweetAlertComponent.prototype.openAlert = function (type) {
        switch (type) {
            case 'basic':
                swal({
                    title: 'Here\'s a message!',
                    confirmButtonClass: 'btn btn-success'
                });
                break;
            case 'text':
                swal({
                    title: 'Good job!',
                    text: 'It\'s pretty, isn\'t it?',
                    confirmButtonClass: 'btn btn-info'
                });
                break;
            case 'success':
                swal({
                    title: 'Good job!',
                    text: 'You clicked the button!',
                    type: 'success',
                    confirmButtonClass: 'btn btn-success'
                });
                break;
            case 'html':
                swal({
                    title: '<i>HTML</i> <u>example</u>',
                    type: 'info',
                    html: "You can use <b>bold text</b><a href=\"//github.com\">links</a>and other HTML tags",
                    showCloseButton: true,
                    showCancelButton: true,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn btn-warning'
                });
                break;
            case 'confirm':
                swal({
                    title: 'Are you sure?',
                    text: 'You won\'t be able to revert this!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    confirmButtonText: 'YES, DELETE IT!'
                }).then(function () {
                    swal({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-info'
                    });
                });
                break;
            case 'cancel':
                swal({
                    title: 'Are you sure?',
                    text: 'You won\'t be able to revert this!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'YES, DELETE IT!',
                    cancelButtonText: 'NO, CANCEL!',
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                }).then(function () {
                    swal({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-info'
                    });
                }, function (dismiss) {
                    // dismiss can be 'cancel', 'overlay',
                    // 'close', and 'timer'
                    if (dismiss === 'cancel') {
                        swal({
                            title: 'Cancelled',
                            text: 'Your imaginary file is safe :)',
                            type: 'error',
                            confirmButtonClass: 'btn btn-info'
                        });
                    }
                });
                break;
            case 'close':
                swal({
                    title: 'Auto close alert!',
                    text: 'I will close in 2 seconds.',
                    timer: 2000,
                    showConfirmButton: false
                }).then(function () { }, 
                // handling the promise rejection
                function (dismiss) {
                    if (dismiss === 'timer') {
                        console.log('I was closed by the timer');
                    }
                });
                break;
            case 'input':
                swal({
                    title: 'Input something',
                    input: 'text',
                    inputClass: 'mat-input-container',
                    showCancelButton: true,
                    confirmButtonText: 'OK',
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    showLoaderOnConfirm: true,
                    preConfirm: function (text) {
                        swal({
                            text: 'Your entered: ' + text,
                            type: 'success',
                            confirmButtonClass: 'btn btn-info'
                        });
                    },
                    allowOutsideClick: false
                });
                break;
        }
    };
    SweetAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sweetalert',
            template: __webpack_require__(/*! ./sweetalert.component.html */ "./src/app/dashboard/sweetalert/sweetalert.component.html"),
            styles: [__webpack_require__(/*! ./sweetalert.component.css */ "./src/app/dashboard/sweetalert/sweetalert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SweetAlertComponent);
    return SweetAlertComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/table/dialogt.html":
/*!**********************************************!*\
  !*** ./src/app/dashboard/table/dialogt.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>ADD SYSTEM</h2>\r\n<mat-dialog-content>\r\n    <mat-input-container color=\"accent\">\r\n        <div class=\"col-md-13 col-md-offset-1\">\r\n\r\n            Status: {{last1.status}}\r\n            <br> Errors:\r\n            <h5 *ngFor=\"let srec of lister\">\r\n                <p>{{srec.ExtDataId1}} {{srec.Pk1}}{{srec.Values1}} </p>\r\n                <p>{{srec.ExtDataId2}} {{srec.Pk2}}{{srec.Values2}}\r\n                    <hr>\r\n            </h5>\r\n            <br> PlannedDate: {{last1.plannedDate }} \r\n            <br>\r\n\r\n            <hr>\r\n\r\n        </div>\r\n\r\n    </mat-input-container>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <button mat-raised-button class=\"btn btn-danger btn-round\" mat-dialog-close>Cancel</button>\r\n    <button mat-raised-button class=\"btn btn-info btn-round\" [mat-dialog-close]=\"system\" cdkFocusInitial>ADD</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dashboard/table/table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/table/table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\n  margin-top: 10px;\n}\n\n.card{\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  position: relative;\n  margin-top: 40px;\n}\n\n.card-header {\n  position: absolute;\n  text-align: center;\n  background: linear-gradient(60deg, #ec407a, #d81b60);\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\n  /*margin: -20px 15px 0;*/\n  border-radius: 3px;\n  padding: 15px;\n  top: -23px;\n}\n\n.card-header i {\n  font-size: 24px;\n  width: 33px;\n  height: 33px;\n  line-height: 33px;\n  color: #fff;\n}\n\n.card-content{\n  position: relative;\n}\n\n.card-title{\n  padding-left: 80px;\n}\n\n.mat-input-container{\n  width: 90%;\n}\n\n.mat-input-container textarea{\n  height: 90px;\n}\n\n.wizard-header{\n  padding: 25px 0 35px;\n}\n\n.wizard-navigation{\n  position: relative;\n}"

/***/ }),

/***/ "./src/app/dashboard/table/table.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/table/table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Reconciliation Results\"></app-navbar>\n  <div class=\"row\" style=\"margin-top: 30px\">\n    <div class=\"col-md-13\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"material-icons\">insert_link</i>\n        </div>\n        <div>\n          <br>\n          <br>\n          <br>\n        </div>\n        <!--\n        <mat-table>\n          <mat-header-row>\n            <mat-header-cell  *matHeaderCellDef>asda</mat-header-cell>\n            <mat-header-cell  *matHeaderCellDef>Two</mat-header-cell>\n            <mat-header-cell  *matHeaderCellDef>Three</mat-header-cell>\n          </mat-header-row>\n          <mat-row>\n            <mat-cell *matCellDef>Foo</mat-cell>\n            <mat-cell *matCellDef>Bar</mat-cell>\n            <mat-cell *matCellDef>Haha</mat-cell>\n          </mat-row>\n        </mat-table>\n        <!--\n        <div class=\"row\">\n          <div class=\"col-md-13 col-md-offset-1\">\n\n            <mat-table>\n\n              <mat-header-row>\n                <mat-header-cell matHeaderCellDef>acron</mat-header-cell>\n                <mat-header-cell matHeaderCellDef>initialDate</mat-header-cell>\n                <mat-header-cell matHeaderCellDef>finalDate</mat-header-cell>\n                <mat-header-cell matHeaderCellDef>SEE</mat-header-cell>\n              </mat-header-row>\n\n              <mat-row *ngFor=\"let recon of reconlist\">\n                <mat-cell>{{ recon.acron }}</mat-cell>\n                <mat-cell>{{ recon.initialDate }}</mat-cell>\n                <mat-cell>{{ recon.finalDate }}</mat-cell>\n                <mat-cell>\n                  <button mat-raised-button class=\"btn btn-primary btn-round\" (click)=\"getrecres(recon.id)\">SEE LAST</button>\n                </mat-cell>\n\n              </mat-row>\n\n          </div>\n\n        </div>\n      -->\n        <div class=\"row\">\n\n          <mat-table #table [dataSource]=\"dataSource\">\n\n            <!--- Note that these columns can be defined in any order.\n                      The actual rendered columns are set as a property on the row definition\" -->\n            <ng-container matColumnDef=\"id\">\n              <mat-header-cell *matHeaderCellDef> id </mat-header-cell>\n              <mat-cell *matCellDef=\"let element ;\"> {{element.id}} </mat-cell>\n            </ng-container>\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"acron\">\n              <mat-header-cell *matHeaderCellDef> acron </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.acron}} </mat-cell>\n            </ng-container>\n\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"initialDate\">\n              <mat-header-cell *matHeaderCellDef> initialDate </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.initialDate |date}} </mat-cell>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"finalDate\">\n              <mat-header-cell *matHeaderCellDef> finalDate </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.finalDate |date}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"last\">\n              <mat-header-cell *matHeaderCellDef> teste</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\">\n                <button mat-raised-button class=\"btn btn-primary btn-round\" (click)=\"abrircenas(element.id)\">SEE LAST</button>\n\n              </mat-cell>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"State\">\n              <mat-header-cell *matHeaderCellDef> Num. Errors </mat-header-cell>\n              <mat-cell *matCellDef=\"let element;\">\n                <!--\n                <ng-template [ngIf]=\"teste(element.id)>0\">\n                  <svg height=\"100\" width=\"100\">\n                    <circle cx=\"50\" cy=\"50\" r=\"15\" stroke=\"black\" stroke-width=\"3\" fill=\"red\" />\n                  </svg>\n                </ng-template>\n\n                <ng-template [ngIf]=\"teste(element.id)<=0\">\n                  <svg height=\"100\" width=\"100\">\n                    <circle cx=\"50\" cy=\"50\" r=\"15\" stroke=\"black\" stroke-width=\"3\" fill=\"green\" />\n                  </svg>\n                </ng-template>\n          -->\n\n              </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          </mat-table>\n\n\n          <!--\n          <div class=\"row\">\n\n            <div class=\"col-md-13 col-md-offset-1\">\n              <i class=\"material-icons\">compare_arrows</i>\n              <mat-form-field>\n                <mat-select placeholder=\"-- reconciliations --\" [(ngModel)]=\"selectrec\" (ngModelChange)=\"getrecres(selectrec)\">\n                  <mat-option *ngFor=\"let rec of reconlist\" [value]=\"rec.id\">\n                    {{rec.acron}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n       \n          <div class=\"row\">\n\n            <div class=\"col-md-13 col-md-offset-1\">\n\n              Status: {{last1.status}}\n              <br> Errors:\n              <h5 *ngFor=\"let srec of lister\">\n                <p>{{srec.ExtDataId1}} {{srec.Pk1}}{{srec.Values1}} </p>\n                <p>{{srec.ExtDataId2}} {{srec.Pk2}}{{srec.Values2}}\n                  <hr>\n              </h5>\n              <br> PlannedDate: {{last1.plannedDate}}\n              <br>\n\n              <hr>\n\n            </div>\n          </div>\n -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/table/table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/table/table.component.ts ***!
  \****************************************************/
/*! exports provided: PrettyPrintPipe1, DialogContentExampleDialog1, TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrettyPrintPipe1", function() { return PrettyPrintPipe1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog1", function() { return DialogContentExampleDialog1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PrettyPrintPipe1 = /** @class */ (function () {
    function PrettyPrintPipe1() {
        this.error = [];
        this.ret = "";
    }
    PrettyPrintPipe1.prototype.transform = function (val) {
        this.error = val;
        for (var index = 0; index < this.error.length; index++) {
            this.ret = this.ret + " " + this.error[index] + "/n";
        }
        return this.ret;
    };
    PrettyPrintPipe1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'prettyprint1'
        })
    ], PrettyPrintPipe1);
    return PrettyPrintPipe1;
}());

var DialogContentExampleDialog1 = /** @class */ (function () {
    function DialogContentExampleDialog1(id) {
        this.id = id;
        this.system = "";
        this.id = this.id1;
    }
    DialogContentExampleDialog1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-content-example-dialog',
            template: __webpack_require__(/*! ./dialogt.html */ "./src/app/dashboard/table/dialogt.html"),
        }),
        __metadata("design:paramtypes", [Number])
    ], DialogContentExampleDialog1);
    return DialogContentExampleDialog1;
}());

var TableComponent = /** @class */ (function () {
    function TableComponent(_http, _cookieService, dialog, adapter, router) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.dialog = dialog;
        this.adapter = adapter;
        this.router = router;
        this.reconlist = [];
        this.rcalist = [];
        this.reconAlist = [];
        this.last1 = { id: "", reconId: "", status: "", finalexecDateDate: "", plannedDate: "", errors: [], length: 0 };
        this.last2 = { id: "", reconId: "", status: "", finalexecDateDate: "", plannedDate: "", errors: [], length: 0 };
        this.erroList = [];
        this.err = { id: 1, lengt: 1 };
        this.lister = [];
        this.entry = { ExtDataId1: "", Pk1: "", Values1: "", ExtDataId2: "", Pk2: "", Values2: "" };
        this.stateRecon = [];
        this.stateRecon1 = [];
        this.selectrec = "";
        this.rows = new Array();
        this.displayedColumns = ["id", 'acron', 'initialDate', 'finalDate', 'last', 'State'];
    }
    TableComponent.prototype.ngOnInit = function () {
        this.getrec();
        this.adapter.setLocale('fr');
    };
    TableComponent.prototype.getrec = function () {
        var _this = this;
        var params;
        this.erroList = [];
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token')
        });
        var options = { headers: headers };
        var as = this._http.get("http://10.197.96.18:8080/reconciliation", options).subscribe((function (res) {
            _this.reconlist = res;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.rows);
            _this.dataSource = _this.reconlist;
            console.log(_this.reconlist);
            console.log(_this.reconlist.length);
            _this.getrca();
            // for (let index = 0; index < this.reconlist.length; index++) {
            //    this.getrecres(this.reconlist[index].id);
            //}
        }));
        console.log("debug -", this.erroList);
        //console.log("dead")
        //console.log(params)
    };
    TableComponent.prototype.abrircenas = function (id) {
        this.router.navigate(["/dashboard/listarE/" + id]);
    };
    TableComponent.prototype.getrca = function () {
        var _this = this;
        var params;
        this.erroList = [];
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token')
        });
        var options = { headers: headers };
        var as = this._http.get("http://10.197.96.18:8080/rca", options).subscribe((function (res) {
            _this.rcalist = res;
            console.log(_this.rcalist);
            console.log(_this.rcalist.length);
            // for (let index = 0; index < this.reconlist.length; index++) {
            //    this.getrecres(this.reconlist[index].id);
            //}
        }));
        console.log("debug -", this.erroList);
        //console.log("dead")
        //console.log(params)
    };
    TableComponent.prototype.getreconActions = function (id) {
        var _this = this;
        var params;
        this.erroList = [];
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token')
        });
        var options = { headers: headers };
        var as = this._http.get("http://10.197.96.18:8080/recon-actions/" + id, options).subscribe((function (res) {
            _this.reconAlist = res;
            console.log(_this.reconAlist);
            console.log(_this.reconAlist.length);
            // for (let index = 0; index < this.reconlist.length; index++) {
            //    this.getrecres(this.reconlist[index].id);
            //}
        }));
        console.log("debug -", this.erroList);
        //console.log("dead")
        //console.log(params)
    };
    TableComponent.prototype.getrecres = function (id) {
        var _this = this;
        var params;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token')
        });
        var options = { headers: headers };
        var as = this._http.get("http://10.197.96.18:8080/reconciliation/" + id + "/recon-reports", options).subscribe((function (res) {
            _this.stateRecon = res;
            //this.getlast();
            _this.getreconActions(id);
            _this.lastre = _this.stateRecon[_this.stateRecon.length - 1];
            console.log(_this.lastre.id);
            _this.geterros(_this.lastre.id);
            //for (let index = 0; index < this.reconlist.length; index++) {
            //    this.err = { id: this.reconlist[index].id, lengt: this.last1.errors.length };
            //// }
            // this.getlast();
        }));
    };
    TableComponent.prototype.geterros = function (id) {
        var _this = this;
        var params;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token')
        });
        var options = { headers: headers };
        var as = this._http.get("http://10.197.96.18:8080/recon-report/" + id + "/errors", options).subscribe((function (res) {
            // this.stateRecon = res;
            //this.getlast();
            _this.stateRecon1 = res;
            _this.html = "";
            for (var index = 0; index < _this.stateRecon1.length; index++) {
                _this.html = _this.html + "<p> " + _this.stateRecon1[index].compName + " : " + _this.stateRecon1[index].truthValue + "  " +
                    _this.stateRecon1[index].compValue + "</p>";
                _this.html = _this.html + "<p> ERRO TYPE: " + _this.stateRecon1[index].errorType + "</p> ";
                _this.html = _this.html + "<p> Actions: " + _this.reconAlist[index].actions + "</p> ";
                _this.html = _this.html + "<br>";
            }
            swal({
                title: '<i>Results</i>',
                type: 'info',
                html: _this.html,
                showCloseButton: true,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close!',
                confirmButtonClass: 'btn btn-primary',
                width: '100px'
            });
            //for (let index = 0; index < this.reconlist.length; index++) {
            //    this.err = { id: this.reconlist[index].id, lengt: this.last1.errors.length };
            //// }
            // this.getlast();
        }));
    };
    TableComponent.prototype.teste = function (id) {
        if (this.erroList.find(function (x) { return x.id === id; }).lengt == 0) {
            this.flag = true;
            //console.log("verde", this.flag);
            //console.log(this.erroList.find(x => x.id === id).lengt >= 0);
        }
        else {
            this.flag = true;
            //console.log("vermelho", this.flag);
            // console.log(this.erroList.find(x => x.id === id).lengt >= 0)
        }
        return this.erroList.find(function (x) { return x.id === id; }).lengt;
    };
    TableComponent.prototype.getlast = function () {
        var _this = this;
        if (this.stateRecon.length > 1) {
            //this.last1 = this.stateRecon[this.stateRecon.length - 2];
            //this.last2 = this.stateRecon[this.stateRecon.length - 1];
            var teste;
            this.html = "";
            this.lister = [];
            this.last1.errors.forEach(function (element) {
                teste = element.split("\n");
                for (var index = 0; index < teste.length; index = index + 2) {
                    var er = teste[index].split(";");
                    _this.entry.ExtDataId1 = er[0];
                    _this.entry.Pk1 = er[1];
                    _this.entry.Values1 = er[2];
                    er = teste[index + 1].split(";");
                    _this.entry.ExtDataId2 = er[0];
                    _this.entry.Pk2 = er[1];
                    _this.entry.Values2 = er[2];
                    _this.lister.push(_this.entry);
                    _this.entry = { ExtDataId1: "", Pk1: "", Values1: "", ExtDataId2: "", Pk2: "", Values2: "" };
                }
            });
        }
    };
    TableComponent.prototype.print = function (id) {
        var _this = this;
        this.lister.forEach(function (element) {
            _this.html = _this.html + "<p>" + element.ExtDataId1 + element.Pk1 + element.Values1 + "</p>" +
                "<p>" + element.ExtDataId2 + element.Pk2 + element.Values2;
        });
        this.html = this.html + "<br> PlannedDate: " + this.last2.plannedDate + "<br>";
        console.log(this.html);
        swal({
            title: '<i>Results</i>',
            type: 'info',
            html: this.html,
            showCloseButton: true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close!',
            confirmButtonClass: 'btn btn-primary',
            width: '100px'
        });
        this.last1.length = this.last1.errors.length;
        this.html = "Status: " + this.last1.status +
            "<br> Errors: ";
        //<h5 *ngFor="let srec of lister">
        // <p>{{srec.ExtDataId1}} {{srec.Pk1}}{{srec.Values1}} </p>
        // <p>{{srec.ExtDataId2}} {{srec.Pk2}}{{srec.Values2}}
        //  <hr>
        //</h5>
        this.lister.forEach(function (element) {
            _this.html = _this.html + "<p>" + element.ExtDataId1 + element.Pk1 + element.Values1 + "</p>" +
                "<p>" + element.ExtDataId2 + element.Pk2 + element.Values2;
        });
        this.html = this.html + "<br> PlannedDate: " + this.last2.plannedDate + "<br>";
        console.log(this.html);
        swal({
            title: '<i>Results</i>',
            type: 'info',
            html: this.html,
            showCloseButton: true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close!',
            confirmButtonClass: 'btn btn-primary',
            width: '100px'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], TableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], TableComponent.prototype, "paginator", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/dashboard/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/dashboard/table/table.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AuthService } from '../services/auth.service';
var AdminGuard = /** @class */ (function () {
    function AdminGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        var obj = JSON.parse(localStorage.getItem("user"));
        if (obj.roles[0].id == 1) {
            //console.log("erro "+Cookie.get('access_token'));
            //return false;
            return true;
        }
        this.router.navigate(['/dashboard']);
        //this.router.navigate(['/']);
        // console.log("erro"+Cookie.get('access_token'))
        //return false;
        //if (!this.authService.isAuthenticated()) {
        //  this.router.navigate(['/']);
        return false;
        //}
        // At this point, we know the user is authenticated
        // But we still need to make sure he has permissions to acess the route
        //let requiredRole = next.data['requiredRole'];
        //if (requiredRole && !this.authService.hasRole(requiredRole)) {
        //this.toastr.error('Você não tem permissões para aceder a esta página');
        //this.router.navigate(['/']);
        //return false;
        //}
        //return true;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AuthService } from '../services/auth.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, _cookieService
        //private authService: AuthService
    ) {
        this.auth = auth;
        this.router = router;
        this._cookieService = _cookieService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this._cookieService.check('access_token')) {
            //this.router.navigate(['/dashboard']);
            //console.log("erro "+Cookie.get('access_token'));
            //return false;
            return true;
        }
        this.router.navigate(['/']);
        // console.log("erro"+Cookie.get('access_token'))
        //return false;
        //if (!this.authService.isAuthenticated()) {
        //  this.router.navigate(['/']);
        return false;
        //}
        // At this point, we know the user is authenticated
        // But we still need to make sure he has permissions to acess the route
        //let requiredRole = next.data['requiredRole'];
        //if (requiredRole && !this.authService.hasRole(requiredRole)) {
        //this.toastr.error('Você não tem permissões para aceder a esta página');
        //this.router.navigate(['/']);
        //return false;
        //}
        //return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
            //private authService: AuthService
        ])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/login.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AuthService } from '../services/auth.service';
var LoginGuard = /** @class */ (function () {
    function LoginGuard(auth, router, _cookieService
        //private authService: AuthService
    ) {
        this.auth = auth;
        this.router = router;
        this._cookieService = _cookieService;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        if (this._cookieService.check('access_token')) {
            this.router.navigate(['/dashboard']);
            //console.log("erro "+Cookie.get('access_token'));
            //return false;
            return false;
        }
        //this.router.navigate(['/']);
        // console.log("erro"+Cookie.get('access_token'))
        //return false;
        //if (!this.authService.isAuthenticated()) {
        //this.router.navigate(['/']);
        return true;
        //}
        // At this point, we know the user is authenticated
        // But we still need to make sure he has permissions to acess the route
        //let requiredRole = next.data['requiredRole'];
        //if (requiredRole && !this.authService.hasRole(requiredRole)) {
        //this.toastr.error('Você não tem permissões para aceder a esta página');
        //this.router.navigate(['/']);
        //return false;
        //}
        //return true;
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
            //private authService: AuthService
        ])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/listar-err/listar-err.component.css":
/*!*****************************************************!*\
  !*** ./src/app/listar-err/listar-err.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .card{\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    position: relative;\r\n    margin-top: 40px;\r\n  }\r\n  \r\n  .card-header {\r\n    position: absolute;\r\n    text-align: center;\r\n    background: linear-gradient(60deg, #ec407a, #d81b60);\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\r\n    /*margin: -20px 15px 0;*/\r\n    border-radius: 3px;\r\n    padding: 15px;\r\n    top: -23px;\r\n  }\r\n  \r\n  .card-header i {\r\n    font-size: 24px;\r\n    width: 33px;\r\n    height: 33px;\r\n    line-height: 33px;\r\n    color: #fff;\r\n  }\r\n  \r\n  .card-content{\r\n    position: relative;\r\n  }\r\n  \r\n  .card-title{\r\n    padding-left: 80px;\r\n  }\r\n  \r\n  .mat-input-container{\r\n    width: 90%;\r\n  }\r\n  \r\n  .mat-input-container textarea{\r\n    height: 90px;\r\n  }\r\n  \r\n  .wizard-header{\r\n    padding: 25px 0 35px;\r\n  }\r\n  \r\n  .wizard-navigation{\r\n    position: relative;\r\n  }"

/***/ }),

/***/ "./src/app/listar-err/listar-err.component.html":
/*!******************************************************!*\
  !*** ./src/app/listar-err/listar-err.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Reconciliation Results\"></app-navbar>\n  <div class=\"row\" style=\"margin-top: 30px\">\n    <div class=\"col-md-13\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"material-icons\">insert_link</i>\n        </div>\n        <div>\n          <br>\n          <br>\n          <br>\n        </div>\n        <div class=\"row\">\n\n          <mat-table #table [dataSource]=\"dataSource\">\n\n            <!--- Note that these columns can be defined in any order.\n                      The actual rendered columns are set as a property on the row definition\" -->\n            <ng-container matColumnDef=\"id\">\n              <mat-header-cell *matHeaderCellDef> id </mat-header-cell>\n              <mat-cell *matCellDef=\"let element ;\"> {{element.id}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"sourceExtDataName\">\n              <mat-header-cell *matHeaderCellDef> SystemB </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.sourceExtDataName}} </mat-cell>\n            </ng-container>\n            \n            <!-- Position Column -->\n            <ng-container matColumnDef=\"compName\">\n              <mat-header-cell *matHeaderCellDef> compColumnName </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.compName}} </mat-cell>\n            </ng-container>\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"truthValue\">\n              <mat-header-cell *matHeaderCellDef> SystemAvalue </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.truthValue}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"compValue\">\n              <mat-header-cell *matHeaderCellDef> SystemBvalue </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.compValue}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"errorType\">\n              <mat-header-cell *matHeaderCellDef> errorType </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.errorType}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Actions\">\n              <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.action}} </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          </mat-table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/listar-err/listar-err.component.ts":
/*!****************************************************!*\
  !*** ./src/app/listar-err/listar-err.component.ts ***!
  \****************************************************/
/*! exports provided: ListarErrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarErrComponent", function() { return ListarErrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListarErrComponent = /** @class */ (function () {
    function ListarErrComponent(_http, _cookieService, route) {
        var _this = this;
        this._http = _http;
        this._cookieService = _cookieService;
        this.route = route;
        this.stateRecon1 = [];
        this.reconAlist = [];
        this.rows = new Array();
        this.displayedColumns = [];
        this.route.params.subscribe(function (params) { return _this.geterros(params['id']); });
    }
    ListarErrComponent.prototype.ngOnInit = function () {
        //this.geterros(1);
    };
    ListarErrComponent.prototype.geterros = function (id) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token')
        });
        var options = { headers: headers };
        var as = this._http.get("http://10.197.96.18:8080/recon-report/" + id + "/errors", options).subscribe((function (res) {
            // this.stateRecon = res;
            //this.getlast();
            //this.displayedColumns = this.rows.length > 0 ? Object.keys(this.rows[0]) : [];
            _this.displayedColumns = ["id", "sourceExtDataName", "compName", "truthValue", "compValue", "errorType", "Actions"];
            _this.stateRecon1 = res;
            _this.getreconActions(id);
            //console.log(this.dataSource);
        }));
    };
    ListarErrComponent.prototype.getreconActions = function (id) {
        var _this = this;
        var params;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token')
        });
        var options = { headers: headers };
        var as = this._http.get("http://10.197.96.18:8080/recon-actions/" + id, options).subscribe((function (res) {
            _this.reconAlist = res;
            _this.actions = _this.reconAlist[0].actions;
            console.log("chama o " + _this.actions);
            _this.stateRecon1.forEach(function (element) {
                element.action = _this.actions;
            });
            console.log(_this.stateRecon1);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.stateRecon1);
            _this.dataSource = _this.stateRecon1;
            //this.actions;
        }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ListarErrComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ListarErrComponent.prototype, "paginator", void 0);
    ListarErrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar-err',
            template: __webpack_require__(/*! ./listar-err.component.html */ "./src/app/listar-err/listar-err.component.html"),
            styles: [__webpack_require__(/*! ./listar-err.component.css */ "./src/app/listar-err/listar-err.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ListarErrComponent);
    return ListarErrComponent;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/page/lock/lock.component.css":
/*!**********************************************!*\
  !*** ./src/app/page/lock/lock.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.background{\n  background: url('lock_bg.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.card{\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: 20px;\n  margin-top: 70px;\n  top: -60px;\n  -webkit-animation-name: card;\n  animation-name: card;\n  -webkit-animation-duration: 600ms;\n  animation-duration: 600ms;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes card {\n  from {top: -40px;}\n  to {top: 0;}\n}\n\n@keyframes card {\n  from {top: -40px;}\n  to {top: 0;}\n}\n\n.card-header img{\n  position: relative;\n  top: -60px;\n  border-radius: 50%;\n  width: 90px;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.card h4{\n  margin-top: -30px;\n  margin-bottom: 20px;\n}\n\n.card-body, .card-body .mat-input-container{\n  width: 100%;\n}\n\n.card-footer{\n  margin: 15px 0 5px 0;\n}\n"

/***/ }),

/***/ "./src/app/page/lock/lock.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/lock/lock.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"background\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <app-header></app-header>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\" style=\"padding: 80px\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <img src=\"https://www.phone.cam.ac.uk/images/users.png/image_preview\">\n          </div>\n          <h4>Tania Andrew</h4>\n          <div class=\"card-body\">\n            <mat-input-container color=\"accent\">\n              <input matInput type=\"text\" placeholder=\"Enter Password\">\n            </mat-input-container>\n          </div>\n          <div class=\"card-footer\">\n            <button mat-raised-button class=\"btn btn-rose btn-round\">UNLOCK</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page/lock/lock.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/lock/lock.component.ts ***!
  \*********************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockComponent = /** @class */ (function () {
    function LockComponent() {
    }
    LockComponent.prototype.ngOnInit = function () {
    };
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock',
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/page/lock/lock.component.html"),
            styles: [__webpack_require__(/*! ./lock.component.css */ "./src/app/page/lock/lock.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/page/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/page/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.card{\n  position: relative;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 90px;\n  top: -90px;\n  -webkit-animation-name: card;\n  animation-name: card;\n  -webkit-animation-duration: 600ms;\n  animation-duration: 600ms;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes card {\n  from {top: -40px;}\n  to {top: 0;}\n}\n\n@keyframes card {\n  from {top: -40px;}\n  to {top: 0;}\n}\n\n.card-header{\n  position: relative;\n  overflow: hidden;\n  top: -40px;\n  width: 100%;\n  padding: 25px;\n  border-radius: 3px;\n  background: linear-gradient(60deg, #0e3570, #0e3570);\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgb(14, 53, 112);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card-header h4{\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 25px;\n  margin-top: 5px;\n}\n\n.social-btns i{\n  font-size: 21px;\n  color: #fff;\n}\n\n.social-btns button{\n  margin: 0 8px;\n}\n\n.tip{\n  margin-top: -20px;\n}\n\n.form-row, .card-form, .mat-input-container{\n  width: 100%;\n}\n\n.card-form{\n  padding: 5px;\n}\n\n.form-row{\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-top: 13px;\n}\n\n.form-row i{\n  position: relative;\n  top: -5px;\n  margin-right: 15px;\n  color: #555;\n}\n\n.card-footer{\n  margin: 10px;\n}\n\n.card-footer button{\n  color: #0e3570;\n}\n"

/***/ }),

/***/ "./src/app/page/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/page/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"background\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n\n    </div>\n   <div class=\"row\">\n     <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n       <div class=\"card\">\n         <div class=\"card-header\">\n            <h4>DiaaS</h4>\n         </div>\n         \n         <div class=\"card-form\" (keyup.enter)=login()>\n           <div class=\"form-row\">\n             <i class=\"material-icons\">face</i>\n             <mat-input-container color=\"accent\">\n               <input type=\"text\" matInput placeholder=\"User Name\" [(ngModel)]=\"loginData.username\"/>\n             </mat-input-container>\n           </div>\n           <div class=\"form-row\">\n             <i class=\"material-icons\">lock_outline</i>\n             <mat-input-container color=\"accent\">\n               <input [type]=\"hide ? 'password' : 'text'\" matInput placeholder=\"Password\" [(ngModel)]=\"loginData.password\"/>\n               <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\n             </mat-input-container>\n           </div>\n         </div>\n         <div class=\"card-footer\">\n           <button mat-button [routerLink]=\"['/dashboard']\" (click)=\"login()\">LET'S GO</button>\n         </div>     \n       </div>\n     </div>\n   </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Component } from '@angular/core';



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_service, http, _router) {
        this._service = _service;
        this.http = http;
        this._router = _router;
        this.loginData = { username: "", password: "" };
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginBtn = function () {
    };
    LoginComponent.prototype.login = function () {
        this._service.obtainAccessToken(this.loginData);
        // this._service.getUser();
        this._router.navigate(['/dashboard']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/page/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/page/login/login.component.css")],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/page/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.background {\n  background: url('register_bg.jpg') center center;\n  background-size: cover;\n}\n\n.register-panel{\n  margin-top: 25px;\n}\n\n.card{\n  padding: 40px 0 30px;\n}\n\n.card h2{\n  text-align: center;\n}\n\n.feature{\n  display: flex;\n  /*width: 100%;*/\n  flex: 1;\n  margin-top: 50px;\n}\n\n.feature .icon{\n  width: 40px;\n}\n\n.feature .icon i{\n  font-size: 2.6em;\n}\n\n.feature .desc{\n  flex: 1;\n  margin-left: 10px;\n}\n\n.feature .desc p{\n  margin-top: 17px;\n}\n\n.feature .desc h4{\n  margin-top: 8px;\n}\n\n.form-part{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding-left: 25px;\n}\n\n.form-part .row{\n  width: 100%;\n  display: flex;\n  position: relative;\n  margin-top: 17px;\n}\n\n.form-part .row .mat-input-container{\n  width: 100%;\n}\n\n.form-part .row i{\n  margin-right: 13px;\n  position: relative;\n  top: 8px;\n  color: #555;\n}\n\n.form-part .socials{\n  margin-top: 40px;\n  margin-bottom: 25px;\n}\n\n.form-part .row button{\n  margin-top: 15px;\n}\n"

/***/ }),

/***/ "./src/app/page/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/page/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"background\"></div>\n  <div class=\"container\">\n \n    <div class=\"row register-panel\">\n      <div class=\"col-md-10 col-md-offset-1\">\n        <div class=\"card\">\n          <h2>Register</h2>\n          <div class=\"row\">\n         \n            <div class=\"col-md-5\">\n              <div class=\"form-part\">\n                \n             \n                <div class=\"row\">\n                  <i class=\"material-icons\">face</i>\n                  <mat-input-container color=\"accent\">\n                    <input type=\"text\" matInput placeholder=\"Name\">\n                  </mat-input-container>\n                </div>\n                <div class=\"row\">\n                  <i class=\"material-icons\">email</i>\n                  <mat-input-container color=\"accent\">\n                    <input type=\"text\" matInput placeholder=\"Email\">\n                  </mat-input-container>\n                </div>\n                <div class=\"row\">\n                  <i class=\"material-icons\">lock_outline</i>\n                  <mat-input-container color=\"accent\">\n                    <input type=\"text\" matInput placeholder=\"Password\">\n                  </mat-input-container>\n                </div>\n                <div class=\"row\">\n                  <mat-checkbox style=\"margin-left: 2px\"><p style=\"margin-left: 8px\">I agree to the <span style=\"color: #0e3570; cursor: pointer; font-weight: 400;\">terms and conditions</span>.</p></mat-checkbox>\n                </div>\n                <div class=\"row\" style=\"display: flex; justify-content: center\">\n                  <button mat-raised-button class=\"btn btn-primary btn-round\" (click)=\"register()\">GET STARTED</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, router, toastr) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.errors = [];
        this.email = '1asdasd@asd.com';
        this.name = '123123';
        this.username = '1qweqwe';
        this.password = 'qweqw';
        this.passwordConfirmation = 'qweqweqw';
    }
    //loading: boolean = false;
    RegisterComponent.prototype.register = function () {
        var _this = this;
        //this.loading = true;
        var as = this.http.post('http://10.197.96.18:8080/users', { username: this.username, name: this.name, password: this.password, email: this.email, roles: [1] }).subscribe(function (res) {
            //this.authService.setToken(res.token);
            _this.toastr.success('Conta criada com sucesso!');
            //this.router.navigate(['/']);
            //this.loading = false;
        }, function (err) {
            // this.loading = false;
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/page/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/page/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.sidebarFilter = localStorage.getItem("SidebarFilter");
        this.sidebarColor = localStorage.getItem("SidebarColor");
        this.sidebarFilterUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sidebarColorUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //if (localStorage.getItem("SidebarFilter") == null && localStorage.getItem("SidebarColor") == null) {
        // this.sidebarFilter = '#0e3570';
        // this.sidebarColor = '#ffffff';
        //  }
        //else {
        //this.sidebarFilter = localStorage.getItem("SidebarFilter");
        //this.sidebarColor = localStorage.getItem("SidebarColor");
        //}
    }
    SettingsService.prototype.getSidebarFilter = function () {
        return this.sidebarFilter;
    };
    SettingsService.prototype.setSidebarFilter = function (color) {
        localStorage.setItem("SidebarFilter", color);
        this.sidebarFilter = color;
        this.sidebarFilterUpdate.emit(this.sidebarFilter);
    };
    SettingsService.prototype.getSidebarColor = function () {
        return this.sidebarColor;
    };
    SettingsService.prototype.setSidebarColor = function (color) {
        localStorage.setItem("SidebarColor", color);
        this.sidebarColor = color;
        this.sidebarColorUpdate.emit(this.sidebarColor);
    };
    SettingsService.prototype.ngOnInit = function () {
        if (localStorage.getItem("SidebarFilter") == null || localStorage.getItem("SidebarColor") == null) {
            this.sidebarFilter = '#0e3570';
            this.sidebarColor = '#ffffff';
        }
        else {
            this.sidebarFilter = localStorage.getItem("SidebarFilter");
            this.sidebarColor = localStorage.getItem("SidebarColor");
        }
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/shared/figurecard/figurecard.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/figurecard/figurecard.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".figure-card{\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin: 25px 0;\n}\n\n.card-content{\n  text-align: right;\n  padding: 15px 20px 13px 20px;\n}\n\n.card-header {\n  float: left;\n  text-align: center;\n  /*background: linear-gradient(60deg, #ffa726, #fb8c00);*/\n  /*box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);*/\n  margin: -20px 15px 0;\n  border-radius: 3px;\n  padding: 15px;\n  position: relative;\n}\n\n.card-header i {\n  font-size: 36px;\n  line-height: 56px;\n  width: 56px;\n  height: 56px;\n  color: #fff;\n}\n\n.category{\n  color: #999;\n}\n\n.card-footer{\n  margin: 0 20px 10px;\n  padding-top: 10px;\n  border-top: 1px solid #eee;\n  color: #999;\n  font-size: 12px;\n  position: relative;\n}\n\n.card-footer i {\n  font-size: 16px;\n  position: relative;\n  top: 4px;\n  color: #999;\n}\n"

/***/ }),

/***/ "./src/app/shared/figurecard/figurecard.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/figurecard/figurecard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"figure-card card\">\n  <div class=\"card-header\" [ngStyle]=\"{ 'background': linearColor, 'box-shadow': boxShadow }\">\n    <i class=\"material-icons\">{{ headerIcon }}</i>\n  </div>\n  <div class=\"card-content\">\n    <p class=\"category\">{{ category }}</p>\n    <h3 class=\"title\">{{ title }}</h3>\n  </div>\n  <div class=\"card-footer\">\n      <i class=\"material-icons text-danger\">{{ footerIcon }}</i> {{ footContent }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/figurecard/figurecard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/figurecard/figurecard.component.ts ***!
  \***********************************************************/
/*! exports provided: FigurecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigurecardComponent", function() { return FigurecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FigurecardComponent = /** @class */ (function () {
    function FigurecardComponent() {
    }
    FigurecardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "headerIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "footerIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "footContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "linearColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "boxShadow", void 0);
    FigurecardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-figurecard',
            template: __webpack_require__(/*! ./figurecard.component.html */ "./src/app/shared/figurecard/figurecard.component.html"),
            styles: [__webpack_require__(/*! ./figurecard.component.css */ "./src/app/shared/figurecard/figurecard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FigurecardComponent);
    return FigurecardComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.left *{\n  color: #fff;\n}\n\n.right{\n  display: flex;\n}\n\n.right a{\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #fff;\n  cursor: pointer;\n  margin-right: 25px;\n}\n\n.right p{\n  margin-left: 5px;\n  font-size: 12px;\n  line-height: normal;\n  color: #fff;\n}\n\n.right i{\n  font-size: 20px;\n}\n\n.router-active{\n  background-color: rgba(255,255,255,.1);\n  padding: 15px 18px 15px 15px;\n  border-radius: 3px;\n}\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"left\">\n    <h5>Template</h5>\n  </div>\n  <div class=\"right\">\n    <a routerLink=\"\" routerLinkActive=\"router-active\" [routerLinkActiveOptions]=\"{exact: true}\"><i class=\"material-icons\">fingerprint</i><p>LOGIN</p></a>\n    <a routerLink=\"/lock\" style=\"margin-right: 0\" routerLinkActive=\"router-active\"><i class=\"material-icons\">lock_open</i><p>LOCK</p></a>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/imagecard/imagecard.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/imagecard/imagecard.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-card{\n  position: relative;\n  width: 100%;\n  margin: 25px 0;\n  padding: 15px;\n}\n\n.header{\n  position: relative;\n  overflow: hidden;\n  margin-top: -40px;\n  border-radius: 6px;\n  z-index: 3;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.header img{\n  position: relative;\n  max-width: 100%;\n  border-radius: 6px;\n}\n\n.body{\n  text-align: center;\n  padding: 10px 10px 13px 10px;\n  margin-top: 7px;\n}\n\n.body p{\n  margin-top: 5px;\n  color: #999;\n  font-weight: 100;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #eee;\n}\n\n.footer{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 8px 2px 8px;\n}\n\n.footer .position{\n  display: flex;\n  align-items: center;\n  color: #999;\n  font-weight: 100;\n}\n\n.footer i{\n  font-size: 17px;\n  margin-right: 3px;\n}\n\n.footer h4{\n  color: rgba(0,0,0, 0.87);\n}\n"

/***/ }),

/***/ "./src/app/shared/imagecard/imagecard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/imagecard/imagecard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-card card\">\n  <div class=\"header\">\n    <img [src]=\"image\"/>\n  </div>\n  <div class=\"body\">\n    <h4>{{ title }}</h4>\n    <p>{{ desc }}</p>\n  </div>\n  <!--\n  <div class=\"footer\">\n    <h4>{{ footerTitle }}</h4>\n    <div class=\"position\"><i class=\"material-icons\">location_on</i> {{ position }}</div>\n  </div>\n-->\n</div>\n"

/***/ }),

/***/ "./src/app/shared/imagecard/imagecard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/imagecard/imagecard.component.ts ***!
  \*********************************************************/
/*! exports provided: ImagecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagecardComponent", function() { return ImagecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagecardComponent = /** @class */ (function () {
    function ImagecardComponent() {
    }
    ImagecardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagecardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagecardComponent.prototype, "desc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagecardComponent.prototype, "footerTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagecardComponent.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagecardComponent.prototype, "image", void 0);
    ImagecardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-imagecard',
            template: __webpack_require__(/*! ./imagecard.component.html */ "./src/app/shared/imagecard/imagecard.component.html"),
            styles: [__webpack_require__(/*! ./imagecard.component.css */ "./src/app/shared/imagecard/imagecard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImagecardComponent);
    return ImagecardComponent;
}());



/***/ }),

/***/ "./src/app/shared/msgiconbtn/msgiconbtn.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/msgiconbtn/msgiconbtn.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".msg-btn{\n  position: relative;\n}\n\n.msg-btn i{\n  font-size: 19px;\n  color: #555;\n}\n\n.msg-btn span{\n  position: absolute;\n  top: 2px;\n  border: 1px solid #FFF;\n  right: 2px;\n  font-size: 9px;\n  background: #f44336;\n  color: #FFF;\n  min-width: 20px;\n  padding: 0px 5px;\n  height: 20px;\n  border-radius: 10px;\n  text-align: center;\n  line-height: 19px;\n  vertical-align: middle;\n}\n"

/***/ }),

/***/ "./src/app/shared/msgiconbtn/msgiconbtn.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/msgiconbtn/msgiconbtn.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button class=\"msg-btn\">\n  <span>{{ number }}</span>\n  <i class=\"material-icons icon-btn\">{{ icon }}</i>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/msgiconbtn/msgiconbtn.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/msgiconbtn/msgiconbtn.component.ts ***!
  \***********************************************************/
/*! exports provided: MsgIconBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgIconBtnComponent", function() { return MsgIconBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MsgIconBtnComponent = /** @class */ (function () {
    function MsgIconBtnComponent() {
    }
    MsgIconBtnComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MsgIconBtnComponent.prototype, "number", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MsgIconBtnComponent.prototype, "icon", void 0);
    MsgIconBtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-msgiconbtn',
            template: __webpack_require__(/*! ./msgiconbtn.component.html */ "./src/app/shared/msgiconbtn/msgiconbtn.component.html"),
            styles: [__webpack_require__(/*! ./msgiconbtn.component.css */ "./src/app/shared/msgiconbtn/msgiconbtn.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MsgIconBtnComponent);
    return MsgIconBtnComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.left-part, .right-part{\n  display: flex;\n  align-items: center;\n}\n\n.nav-bar h4{\n  color: #555;\n}\n\n.mat-mini-fab{\n  box-shadow:  0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);\n  background-color: #fefefe;\n  color: #999;\n  margin-right: 15px;\n}\n\n.mat-mini-fab:hover{\n  color: #999 !important;\n  box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2) !important;\n}\n\n.mat-mini-fab:focus{\n  color: #999 !important;\n}\n\n.search-btn{\n  margin: 0 5px 0 7px;\n}\n\n.icon-btn{\n  font-size: 19px;\n  color: #555;\n}\n\n.mat-icon-button{\n  margin-left: 7px;\n}\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar\">\n  <div class=\"left-part\">\n    <button mat-mini-fab id=\"nav-left-button\"><i class=\"material-icons\" style=\"font-size:18px;\">more_vert</i></button>\n    <h4>{{ title }}</h4>\n  </div>\n  <div class=\"right-part\">\n    <div class=\"right-part\" id=\"nav-right\">\n      <mat-input-container color=\"#ff0000\">\n        <input matInput type=\"search\" placeholder=\"Search\">\n      </mat-input-container>\n      <button mat-mini-fab class=\"search-btn\"><i class=\"material-icons\" style=\"font-size:18px;\">search</i></button>\n      <button mat-icon-button><i class=\"material-icons icon-btn\">dashboard</i></button>\n      <app-msgiconbtn icon=\"notifications\" number=\"5\" [matMenuTriggerFor]=\"menu\"></app-msgiconbtn>\n     \n      <button mat-icon-button  [matMenuTriggerFor]=\"menu1\"><i class=\"material-icons icon-btn\">person</i></button> \n      <p [matMenuTriggerFor]=\"menu1\">{{userlogin.name}}</p>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>Dani the man responded to your email</button>\n        <button mat-menu-item>You have 5 new tasks</button>\n        <button mat-menu-item>Reconciliations x have y erros</button>\n        <button mat-menu-item>Another Notification</button>\n        <button mat-menu-item>Another One</button>\n      </mat-menu>\n      <mat-menu #menu1=\"matMenu\">\n        <button mat-menu-item (click)=\"editProfile()\">Profile</button>\n        <button mat-menu-item>Settings</button>\n        <button mat-menu-item (click)=\"logout()\">Log Out</button>\n      </mat-menu> \n      \n    </div>\n    <div id=\"menu\">\n      <button mat-icon-button (click)=\"menuClick()\"><i class=\"material-icons\">menu</i></button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AuthService } from '../../services/auth.service';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_router, _service) {
        this._router = _router;
        this._service = _service;
        this.userlogin = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        //console.log("navbarinit");
        //this._service.getUser();
        this.userlogin = JSON.parse(localStorage.getItem('user'));
        //console.log("cenas " + localStorage.getItem('user'))
    };
    NavbarComponent.prototype.menuClick = function () {
        // document.getElementById('main-panel').style.marginRight = '260px';~
        document.getElementById('main-panel').style.marginRight = '260px';
    };
    NavbarComponent.prototype.logout = function () {
        //this.authService.removeToken();
        this._service.logout();
    };
    NavbarComponent.prototype.editProfile = function () {
        this._router.navigate(['/dashboard/profile']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "title", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar-routes.config.ts":
/*!**************************************************!*\
  !*** ./src/app/sidebar/sidebar-routes.config.ts ***!
  \**************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null, user: 2 },
    //{ path: 'profile', title: 'User Profile', icon: 'person', children: null ,user:2},
    { path: 'table', title: 'Reconciliation Results', icon: 'content_paste', children: null, user: 2 },
    //{ path: 'listarE', title: 'ERROR Results', icon: 'content_paste', children: null, user: 2 },
    // {
    //   path: '#component', id: 'component', title: 'Component', icon: 'apps', children: [
    //     { path: 'components/price-table', title: 'Price Table', icon: 'PT' },
    //   { path: 'components/panels', title: 'Panels', icon: 'P' },
    // { path: 'components/wizard', title: 'Wizard', icon: 'W' },
    //], user: 1
    //},
    { path: 'Create_Connection', title: 'Create reconciliation', icon: 'insert_link', children: null, user: 1 },
    // { path: 'extraction', title: 'Extraction', icon: 'insert_link', children: null, user: 1 },
    { path: 'connection', title: 'Connection', icon: 'cloud_done', children: null, user: 1 },
    //{ path: 'notification', title: 'Notification', icon: 'notifications', children: null, user: 2 },
    // { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null, user: 2 },
    { path: 'settings', title: 'Settings', icon: 'settings', children: null, user: 1 },
    { path: 'registo', title: 'Register', icon: 'account_box', children: null, user: 1 },
    { path: 'Access-Management', title: 'Access Management', icon: 'account_box', children: null, user: 1 }
];


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\n  padding: 25px 0 20px 0;\n  color: #fff;\n  font-size: 18px;\n  text-align: center;\n  position: relative;\n}\n\n.logo img{\n  width: 42px;\n  position: absolute;\n  top: 16px;\n  left: 13px;\n}\n\n.divider{\n  content: '';\n  position: relative;\n  height: 1px;\n  left: 15px;\n  width: calc(100% - 30px);\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.sidebar-wrapper{\n  overflow-y: auto;\n  padding-bottom: 30px;\n  width: 260px;\n  position: relative;\n  height: 100%;\n}\n\n.nav-container{\n  position: relative;\n}\n\n.nav{\n  padding-top: 15px;\n}\n\n.nav li{\n  margin-bottom: 9px;\n}\n\n.nav li a{\n  display: flex;\n  align-items: center;\n  color: rgba(255,255,255,.8);\n  margin: 0 15px;\n  border-radius: 3px;\n  transition: all 400ms;\n  height: 50px;\n  text-decoration: none;\n}\n\n.nav li a:hover, .parent-active{\n  background-color: rgba(255,255,255,.1);\n}\n\n.nav li a span{\n  margin-left: 20px;\n}\n\n.active a, .active a:hover{\n  /*color: rgba(0,0,0,.6) !important;*/\n  /*background-color: #fff !important;*/\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(60, 72, 88, 0.4);\n  transition: all 400ms;\n}\n\n.collapse-a{\n  position: relative;\n}\n\n.collapse-a .caret{\n  position: absolute;\n  right: 21px;\n  top: 23px;\n  color: #fff;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  transition: all 200ms;\n}\n\n.collapsed .caret{\n  position: absolute;\n  right: 21px;\n  top: 23px;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n}\n\n\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo text-uppercase\" [style.color]=\"normalFontColor\">\n  <img src=\"https://www.wipro.com/content/dam/nexus/en/brand/Wipro-Logo-w88X70h-Px.png\" width=\"1200px\" /> DIaaS\n</div>\n<div class=\"divider\" [style.background-color]=\"dividerBgColor\"></div>\n<div class=\"sidebar-wrapper\">\n  <div class=\"nav-container\">\n    <ul class=\"nav\">\n      \n      <li *ngFor=\"let menuItem of menuItems\" routerLinkActive #rla=\"routerLinkActive\" [ngClass]=\"rla.isActive? (menuItem.children === null? 'active' : '') : ''\"\n        [routerLinkActiveOptions]=\"{exact: true}\">\n        <div *ngIf=\" menuItem.user >= num  ; then thenBlock\">this is ignored</div>\n       \n        <ng-template #thenBlock>\n          <a [style.display]=\"menuItem.children === null? 'flex' : 'none'\" [routerLink]=\"[menuItem.path]\" [style.background-color]=\"rla.isActive? color : 'transparent'\"\n            [style.color]=\"rla.isActive? activeFontColor : normalFontColor\">\n            <i class=\"material-icons\">{{menuItem.icon}}</i>\n            <span>{{menuItem.title}}</span>\n          </a>\n          \n          <div [hidden]=\"menuItem.children === null\" class=\"collapse-container\">\n            <a data-toggle=\"collapse\" [href]=\"[menuItem.path]\" style=\"padding: 0 15px;\" [ngClass]=\"rla.isActive? 'parent-active' : ''\"\n              class=\"collapse-a collapsed\" [style.color]=\"normalFontColor\">\n              <i class=\"material-icons\">{{menuItem.icon}}</i>\n              <span>{{menuItem.title}}</span>\n              <b class=\"caret\" [style.color]=\"normalFontColor\"></b>\n            </a>\n            <div id=\"component\" class=\"collapse\" [id]=\"[menuItem.id]\">\n              <ul class=\"nav\">\n                <li *ngFor=\"let subItem of menuItem.children\" routerLinkActive #subrla=\"routerLinkActive\" [ngClass]=\"subrla.isActive? 'active' : ''\">\n                  <a [routerLink]=\"[subItem.path]\" [style.background-color]=\"subrla.isActive? color : 'transparent'\" [style.color]=\"subrla.isActive? activeFontColor : normalFontColor\"\n                    style=\"height: 43px;\">\n                    <span style=\"margin-left: 5px; width: 21px;\">{{subItem.icon}}</span>\n                    <span>{{subItem.title}}</span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </ng-template>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(settingsService, authService, router) {
        this.settingsService = settingsService;
        this.authService = authService;
        this.router = router;
        this.num = 1;
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__["ROUTES"];
        //this.authService.getUser();
        //console.log(JSON.parse(localStorage.getItem("user")));
        if ((JSON.parse(localStorage.getItem("user"))).roles[0]) {
            this.router.navigate(['/']);
        }
        else {
            this.num = (JSON.parse(localStorage.getItem("user"))).roles[0];
            this.num = this.user.roles[0].id;
        }
        this.activeFontColor = 'rgb(242,242,242)';
        this.normalFontColor = 'rgb(100,99,99)';
        this.dividerBgColor = 'rgb(100, 99, 99)';
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.color = this.settingsService.getSidebarFilter();
        this.settingsService.sidebarFilterUpdate.subscribe(function (filter) {
            _this.color = filter;
        });
        this.settingsService.sidebarColorUpdate.subscribe(function (color) {
        });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.settingsService.sidebarFilterUpdate.unsubscribe();
        this.settingsService.sidebarColorUpdate.unsubscribe();
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    apiUrl: 'http://10.197.96.18:8080/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\an40001650\Desktop\DIaaS\DIaaS -Front-end\angular-material-dashboard-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map