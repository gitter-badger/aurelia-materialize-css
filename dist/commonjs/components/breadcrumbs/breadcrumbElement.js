"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require("aurelia-framework");
var config_1 = require("./../../config");
var BreadcrumbElement = (function () {
    function BreadcrumbElement() {
    }
    BreadcrumbElement.prototype.attached = function () {
        this.element.classList.add("breadcrumb");
    };
    BreadcrumbElement.prototype.detached = function () {
        this.element.classList.remove("breadcrumb");
    };
    BreadcrumbElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.breadcrumb),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.inlineView("<template><a ref='element'><content></content></a></template>"), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbElement);
    return BreadcrumbElement;
}());
exports.BreadcrumbElement = BreadcrumbElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYkVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGtDQUF5RCxtQkFBbUIsQ0FBQyxDQUFBO0FBQzdFLHVCQUF1QixnQkFBZ0IsQ0FBQyxDQUFBO0FBS3hDO0lBQUE7SUFXQSxDQUFDO0lBUFUsb0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sb0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBYkw7UUFBQyxpQ0FBYSxDQUFDLGVBQU0sQ0FBQyxVQUFVLENBQUM7UUFDaEMsaUNBQWEsRUFBRTtRQUNmLDhCQUFVLENBQUMsK0RBQStELENBQUM7O3lCQUFBO0lBWTVFLHdCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSx5QkFBaUIsb0JBVzdCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1iRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGNvbnRhaW5lcmxlc3MsIGlubGluZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuYnJlYWRjcnVtYilcclxuQGNvbnRhaW5lcmxlc3MoKVxyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48YSByZWY9J2VsZW1lbnQnPjxjb250ZW50PjwvY29udGVudD48L2E+PC90ZW1wbGF0ZT5cIilcclxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJFbGVtZW50IHtcclxuXHJcbiAgICBwdWJsaWMgZWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnJlYWRjcnVtYlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJicmVhZGNydW1iXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
