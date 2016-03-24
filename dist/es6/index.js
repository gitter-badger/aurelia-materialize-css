import "@eriklieben/materialize-css";
import * as materialConfig from "./config";
import { ToastService as toastService } from "./javascript/toast/ToastService";
export const ToastService = new toastService();
export class MaterializeCssOptions {
    constructor() {
        this.enableAttributes = true;
        this.enableElements = true;
        this.attributeFilter = undefined;
        this.elementFilter = undefined;
        this.configuration = new materialConfig.Configuration();
    }
}
export function configure(config, options) {
    options = Object.assign(new MaterializeCssOptions(), options);
    materialConfig.config = options.configuration;
    let attributes = [
        "./javascript/collapsible/collapsibleAttribute",
        "./javascript/collapsible/collapsibleBodyAttribute",
        "./javascript/collapsible/collapsibleHeaderAttribute",
        "./javascript/dropdown/dropdownAttribute",
        "./javascript/dropdown/dropdownDividerAttribute",
        "./javascript/media/boxedAttribute",
        "./javascript/modals/modalTriggerAttribute",
        "./javascript/pushpin/pushpinAttribute",
        "./javascript/scrollspy/scrollspyAttribute",
        "./components/forms/selectAttribute",
        "./components/forms/pickadateAttribute",
    ];
    let elements = [
        "./javascript/collapsible/collapsibleElement",
        "./javascript/collapsible/collapsibleBodyElement",
        "./javascript/collapsible/collapsibleHeaderElement",
        "./javascript/collapsible/collapsibleItemElement",
        "./javascript/dropdown/dropdownElement",
        "./javascript/dropdown/dropdownDividerElement",
        "./javascript/dropdown/dropdownItemElement",
        "./javascript/media/slideElement",
        "./javascript/media/sliderElement",
        "./javascript/modals/modalContentElement",
        "./javascript/modals/modalElement",
        "./javascript/modals/modalFooterElement",
        "./javascript/pushpin/pushpinElement",
        "./javascript/scrollspy/scrollspyElement",
    ];
    if (options.attributeFilter) {
        attributes = attributes.filter(options.attributeFilter);
    }
    if (options.elementFilter) {
        elements = elements.filter(options.elementFilter);
    }
    if (options.enableAttributes) {
        config.globalResources(attributes);
    }
    if (options.enableElements) {
        config.globalResources(elements);
    }
}
export default MaterializeCssOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLDZCQUE2QjtPQUU3QixLQUFLLGNBQWMsTUFBTSxVQUFVO09BRW5DLEVBQUMsWUFBWSxJQUFJLFlBQVksRUFBQyxNQUFNLGlDQUFpQztBQUM1RSxPQUFPLE1BQU0sWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFHL0M7SUFBQTtRQUNXLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUV0QixvQkFBZSxHQUErRCxTQUFTLENBQUM7UUFDeEYsa0JBQWEsR0FBK0QsU0FBUyxDQUFDO1FBRXRGLGtCQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDOUQsQ0FBQztBQUFELENBQUM7QUFFRCwwQkFBMEIsTUFBOEIsRUFBRSxPQUE4QjtJQUVwRixPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUQsY0FBYyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBRTlDLElBQUksVUFBVSxHQUFHO1FBQ2IsK0NBQStDO1FBQy9DLG1EQUFtRDtRQUNuRCxxREFBcUQ7UUFFckQseUNBQXlDO1FBQ3pDLGdEQUFnRDtRQUVoRCxtQ0FBbUM7UUFFbkMsMkNBQTJDO1FBRTNDLHVDQUF1QztRQUV2QywyQ0FBMkM7UUFFM0Msb0NBQW9DO1FBQ3BDLHVDQUF1QztLQUMxQyxDQUFDO0lBRUYsSUFBSSxRQUFRLEdBQUc7UUFDWCw2Q0FBNkM7UUFDN0MsaURBQWlEO1FBQ2pELG1EQUFtRDtRQUNuRCxpREFBaUQ7UUFFakQsdUNBQXVDO1FBQ3ZDLDhDQUE4QztRQUM5QywyQ0FBMkM7UUFFM0MsaUNBQWlDO1FBQ2pDLGtDQUFrQztRQUVsQyx5Q0FBeUM7UUFDekMsa0NBQWtDO1FBQ2xDLHdDQUF3QztRQUV4QyxxQ0FBcUM7UUFFckMseUNBQXlDO0tBQzVDLENBQUM7SUFHRixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUMxQixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBR0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN6QixNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7QUFDTCxDQUFDO0FBRUQsZUFBZSxxQkFBcUIsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBlcmlrbGllYmVuL21hdGVyaWFsaXplLWNzc1wiO1xyXG5pbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCAqIGFzIG1hdGVyaWFsQ29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHtUb2FzdFNlcnZpY2UgYXMgdG9hc3RTZXJ2aWNlfSBmcm9tIFwiLi9qYXZhc2NyaXB0L3RvYXN0L1RvYXN0U2VydmljZVwiO1xyXG5leHBvcnQgY29uc3QgVG9hc3RTZXJ2aWNlID0gbmV3IHRvYXN0U2VydmljZSgpO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbGl6ZUNzc09wdGlvbnMge1xyXG4gICAgcHVibGljIGVuYWJsZUF0dHJpYnV0ZXMgPSB0cnVlO1xyXG4gICAgcHVibGljIGVuYWJsZUVsZW1lbnRzID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgYXR0cmlidXRlRmlsdGVyOiAodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBib29sZWFuID0gdW5kZWZpbmVkO1xyXG4gICAgcHVibGljIGVsZW1lbnRGaWx0ZXI6ICh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pID0+IGJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb24gPSBuZXcgbWF0ZXJpYWxDb25maWcuQ29uZmlndXJhdGlvbigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgb3B0aW9uczogTWF0ZXJpYWxpemVDc3NPcHRpb25zKSB7XHJcblxyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IE1hdGVyaWFsaXplQ3NzT3B0aW9ucygpLCBvcHRpb25zKTtcclxuICAgIG1hdGVyaWFsQ29uZmlnLmNvbmZpZyA9IG9wdGlvbnMuY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICBsZXQgYXR0cmlidXRlcyA9IFtcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlQm9keUF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSGVhZGVyQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duQXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25EaXZpZGVyQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21lZGlhL2JveGVkQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbFRyaWdnZXJBdHRyaWJ1dGVcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L3Njcm9sbHNweS9zY3JvbGxzcHlBdHRyaWJ1dGVcIixcclxuXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0QXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvZm9ybXMvcGlja2FkYXRlQXR0cmlidXRlXCIsXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBlbGVtZW50cyA9IFtcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUJvZHlFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVIZWFkZXJFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVJdGVtRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkRpdmlkZXJFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25JdGVtRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tZWRpYS9zbGlkZUVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tZWRpYS9zbGlkZXJFbGVtZW50XCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbENvbnRlbnRFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbW9kYWxzL21vZGFsRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbEZvb3RlckVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9zY3JvbGxzcHkvc2Nyb2xsc3B5RWxlbWVudFwiLFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgb3V0IGF0dHJpYnV0ZXMgYW5kIGVsZW1lbnRzXHJcbiAgICBpZiAob3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIpIHtcclxuICAgICAgICBhdHRyaWJ1dGVzID0gYXR0cmlidXRlcy5maWx0ZXIob3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLmVsZW1lbnRGaWx0ZXIpIHtcclxuICAgICAgICBlbGVtZW50cyA9IGVsZW1lbnRzLmZpbHRlcihvcHRpb25zLmVsZW1lbnRGaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9ubHkgbG9hZCBhdHRyaWJ1dGVzICYgZWxlbWVudHMgaWYgdGhleSBhcmUgZW5hYmxlZFxyXG4gICAgaWYgKG9wdGlvbnMuZW5hYmxlQXR0cmlidXRlcykge1xyXG4gICAgICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoYXR0cmlidXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZW5hYmxlRWxlbWVudHMpIHtcclxuICAgICAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKGVsZW1lbnRzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxpemVDc3NPcHRpb25zO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
