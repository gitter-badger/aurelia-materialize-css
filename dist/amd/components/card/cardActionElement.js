var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./../../config"], function (require, exports, aurelia_framework_1, config_1) {
    "use strict";
    var CardActionElement = (function () {
        function CardActionElement() {
        }
        CardActionElement.prototype.attached = function () {
            this.element.classList.add("card-action");
        };
        CardActionElement.prototype.detached = function () {
            this.element.classList.remove("card-action");
        };
        CardActionElement = __decorate([
            aurelia_framework_1.customElement(config_1.config.card),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.inlineView("<template><div ref='element'><content></content></div></template>"), 
            __metadata('design:paramtypes', [])
        ], CardActionElement);
        return CardActionElement;
    }());
    exports.CardActionElement = CardActionElement;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZC9jYXJkQWN0aW9uRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1BO1FBQUE7UUFXQSxDQUFDO1FBUFUsb0NBQVEsR0FBZjtZQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBRU0sb0NBQVEsR0FBZjtZQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBYkw7WUFBQyxpQ0FBYSxDQUFDLGVBQU0sQ0FBQyxJQUFJLENBQUM7WUFDMUIsaUNBQWEsRUFBRTtZQUNmLDhCQUFVLENBQUMsbUVBQW1FLENBQUM7OzZCQUFBO1FBWWhGLHdCQUFDO0lBQUQsQ0FYQSxBQVdDLElBQUE7SUFYWSx5QkFBaUIsb0JBVzdCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jYXJkL2NhcmRBY3Rpb25FbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5jYXJkKVxyXG5AY29udGFpbmVybGVzcygpXHJcbkBpbmxpbmVWaWV3KFwiPHRlbXBsYXRlPjxkaXYgcmVmPSdlbGVtZW50Jz48Y29udGVudD48L2NvbnRlbnQ+PC9kaXY+PC90ZW1wbGF0ZT5cIilcclxuZXhwb3J0IGNsYXNzIENhcmRBY3Rpb25FbGVtZW50IHtcclxuXHJcbiAgICBwdWJsaWMgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1hY3Rpb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2FyZC1hY3Rpb25cIik7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
