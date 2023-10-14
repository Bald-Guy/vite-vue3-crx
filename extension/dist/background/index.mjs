(function(){"use strict";chrome.runtime.onInstalled.addListener(()=>{console.log("Extension installed")});let e=0;chrome.tabs.onActivated.addListener(({tabId:r})=>{if(!e){e=r;return}chrome.tabs.get(e,t=>{chrome.runtime.lastError||(e=r,console.log("previous tab",t),chrome.tabs.sendMessage(r,{title:t.title},{frameId:0}))})}),chrome.runtime.onMessage.addListener((r,t,n)=>{if(r==="get-current-tab")return chrome.tabs.get(e,i=>{if(chrome.runtime.lastError){n({title:void 0});return}n({title:i==null?void 0:i.title})}),!0})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFja2dyb3VuZC9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG9ubHkgb24gZGV2IG1vZGVcbmlmIChpbXBvcnQubWV0YS5ob3QpIHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciBmb3IgYmFja2dyb3VuZCBITVJcbiAgaW1wb3J0KCcvQHZpdGUvY2xpZW50JylcbiAgLy8gbG9hZCBsYXRlc3QgY29udGVudCBzY3JpcHRcbiAgaW1wb3J0KCcuL2NvbnRlbnRTY3JpcHRITVInKVxufVxuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoKTogdm9pZCA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUubG9nKCdFeHRlbnNpb24gaW5zdGFsbGVkJylcbn0pXG5cbmxldCBwcmV2aW91c1RhYklkID0gMFxuXG4vLyBjb21tdW5pY2F0aW9uIGV4YW1wbGU6IHNlbmQgcHJldmlvdXMgdGFiIHRpdGxlIGZyb20gYmFja2dyb3VuZCBwYWdlXG4vLyBzZWUgc2hpbS5kLnRzIGZvciB0eXBlIGRlY2xhcmF0aW9uXG5jaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcigoeyB0YWJJZCB9KSA9PiB7XG4gIGlmICghcHJldmlvdXNUYWJJZCkge1xuICAgIHByZXZpb3VzVGFiSWQgPSB0YWJJZFxuICAgIHJldHVyblxuICB9XG5cbiAgY2hyb21lLnRhYnMuZ2V0KHByZXZpb3VzVGFiSWQsICh0YWIpID0+IHtcbiAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBwcmV2aW91c1RhYklkID0gdGFiSWRcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coJ3ByZXZpb3VzIHRhYicsIHRhYilcbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgeyB0aXRsZTogdGFiLnRpdGxlIH0sIHsgZnJhbWVJZDogMCB9KVxuICB9KVxufSlcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICBpZiAobWVzc2FnZSA9PT0gJ2dldC1jdXJyZW50LXRhYicpIHtcbiAgICBjaHJvbWUudGFicy5nZXQocHJldmlvdXNUYWJJZCwgKHRhYikgPT4ge1xuICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyB0aXRsZTogdW5kZWZpbmVkIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBzZW5kUmVzcG9uc2UoeyB0aXRsZTogdGFiPy50aXRsZSB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59KVxuIl0sIm5hbWVzIjpbInByZXZpb3VzVGFiSWQiLCJ0YWJJZCIsInRhYiIsIm1lc3NhZ2UiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiXSwibWFwcGluZ3MiOiJ5QkFRQSxPQUFPLFFBQVEsWUFBWSxZQUFZLElBQVksQ0FFakQsUUFBUSxJQUFJLHFCQUFxQixDQUNuQyxDQUFDLEVBRUQsSUFBSUEsRUFBZ0IsRUFJcEIsT0FBTyxLQUFLLFlBQVksWUFBWSxDQUFDLENBQUUsTUFBQUMsS0FBWSxDQUNqRCxHQUFJLENBQUNELEVBQWUsQ0FDRkEsRUFBQUMsRUFDaEIsTUFDRixDQUVBLE9BQU8sS0FBSyxJQUFJRCxFQUFnQkUsR0FBUSxDQUNsQyxPQUFPLFFBQVEsWUFJSEYsRUFBQUMsRUFHUixRQUFBLElBQUksZUFBZ0JDLENBQUcsRUFDeEIsT0FBQSxLQUFLLFlBQVlELEVBQU8sQ0FBRSxNQUFPQyxFQUFJLE9BQVMsQ0FBRSxRQUFTLENBQUcsQ0FBQSxFQUFBLENBQ3BFLENBQ0gsQ0FBQyxFQUVELE9BQU8sUUFBUSxVQUFVLFlBQVksQ0FBQ0MsRUFBU0MsRUFBUUMsSUFBaUIsQ0FDdEUsR0FBSUYsSUFBWSxrQkFDZCxjQUFPLEtBQUssSUFBSUgsRUFBZ0JFLEdBQVEsQ0FDbEMsR0FBQSxPQUFPLFFBQVEsVUFBVyxDQUNmRyxFQUFBLENBQUUsTUFBTyxNQUFXLENBQUEsRUFDakMsTUFDRixDQUVBQSxFQUFhLENBQUUsTUFBT0gsR0FBQSxZQUFBQSxFQUFLLEtBQU8sQ0FBQSxDQUFBLENBQ25DLEVBRU0sRUFFWCxDQUFDIn0=
