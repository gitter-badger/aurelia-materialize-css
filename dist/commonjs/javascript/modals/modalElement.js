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
var ModalElement = (function () {
    function ModalElement() {
        this.id = null;
    }
    ModalElement.prototype.attached = function () {
        if (!this.id || this.id.trim().length === 0) {
            throw new Error(("id is a required attribute for the element " + config_1.config.modal + ", ") +
                ("you need to set it on your modal trigger(" + config_1.config.modalTrigger + ")."));
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }), 
        __metadata('design:type', String)
    ], ModalElement.prototype, "id", void 0);
    ModalElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.modal),
        aurelia_framework_1.inlineView("<template><content></content></template>"), 
        __metadata('design:paramtypes', [])
    ], ModalElement);
    return ModalElement;
}());
exports.ModalElement = ModalElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbW9kYWxzL21vZGFsRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQWlFLG1CQUFtQixDQUFDLENBQUE7QUFDckYsdUJBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFJeEM7SUFBQTtRQUdXLE9BQUUsR0FBVyxJQUFJLENBQUM7SUFRN0IsQ0FBQztJQU5VLCtCQUFRLEdBQWY7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUE4QyxlQUFNLENBQUMsS0FBSyxRQUFJO2dCQUM5RCwrQ0FBNEMsZUFBTSxDQUFDLFlBQVksUUFBSSxDQUFDLENBQUM7UUFDekYsQ0FBQztJQUNMLENBQUM7SUFSRDtRQUFDLDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE9BQU8sRUFBRSxDQUFDOzs0Q0FBQTtJQUoxRDtRQUFDLGlDQUFhLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzQiw4QkFBVSxDQUFDLDBDQUEwQyxDQUFDOztvQkFBQTtJQVl2RCxtQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksb0JBQVksZUFXeEIsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L21vZGFscy9tb2RhbEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgYmluZGluZ01vZGUsIGN1c3RvbUVsZW1lbnQsIGlubGluZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcubW9kYWwpXHJcbkBpbmxpbmVWaWV3KFwiPHRlbXBsYXRlPjxjb250ZW50PjwvY29udGVudD48L3RlbXBsYXRlPlwiKVxyXG5leHBvcnQgY2xhc3MgTW9kYWxFbGVtZW50IHtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUgfSlcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlkIHx8IHRoaXMuaWQudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGlkIGlzIGEgcmVxdWlyZWQgYXR0cmlidXRlIGZvciB0aGUgZWxlbWVudCAke2NvbmZpZy5tb2RhbH0sIGAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHlvdSBuZWVkIHRvIHNldCBpdCBvbiB5b3VyIG1vZGFsIHRyaWdnZXIoJHtjb25maWcubW9kYWxUcmlnZ2VyfSkuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
