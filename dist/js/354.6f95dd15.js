"use strict";(self["webpackChunkTDS200_h22_1116"]=self["webpackChunkTDS200_h22_1116"]||[]).push([[354],{354:function(t,e,s){s.r(e),s.d(e,{CapacitorGoogleMapsWeb:function(){return D}});var o=s(9895),r=s(4063),n=s.n(r);function i(t,e,s,o,r,n){if(r-o<=s)return;const l=o+r>>1;a(t,e,l,o,r,n%2),i(t,e,s,o,l-1,n+1),i(t,e,s,l+1,r,n+1)}function a(t,e,s,o,r,n){while(r>o){if(r-o>600){const i=r-o+1,l=s-o+1,c=Math.log(i),h=.5*Math.exp(2*c/3),p=.5*Math.sqrt(c*h*(i-h)/i)*(l-i/2<0?-1:1),d=Math.max(o,Math.floor(s-l*h/i+p)),u=Math.min(r,Math.floor(s+(i-l)*h/i+p));a(t,e,s,d,u,n)}const i=e[2*s+n];let c=o,h=r;l(t,e,o,s),e[2*r+n]>i&&l(t,e,o,r);while(c<h){l(t,e,c,h),c++,h--;while(e[2*c+n]<i)c++;while(e[2*h+n]>i)h--}e[2*o+n]===i?l(t,e,o,h):(h++,l(t,e,h,r)),h<=s&&(o=h+1),s<=h&&(r=h-1)}}function l(t,e,s,o){c(t,s,o),c(e,2*s,2*o),c(e,2*s+1,2*o+1)}function c(t,e,s){const o=t[e];t[e]=t[s],t[s]=o}function h(t,e,s,o,r,n,i){const a=[0,t.length-1,0],l=[];let c,h;while(a.length){const p=a.pop(),d=a.pop(),u=a.pop();if(d-u<=i){for(let i=u;i<=d;i++)c=e[2*i],h=e[2*i+1],c>=s&&c<=r&&h>=o&&h<=n&&l.push(t[i]);continue}const m=Math.floor((u+d)/2);c=e[2*m],h=e[2*m+1],c>=s&&c<=r&&h>=o&&h<=n&&l.push(t[m]);const g=(p+1)%2;(0===p?s<=c:o<=h)&&(a.push(u),a.push(m-1),a.push(g)),(0===p?r>=c:n>=h)&&(a.push(m+1),a.push(d),a.push(g))}return l}function p(t,e,s,o,r,n){const i=[0,t.length-1,0],a=[],l=r*r;while(i.length){const c=i.pop(),h=i.pop(),p=i.pop();if(h-p<=n){for(let r=p;r<=h;r++)d(e[2*r],e[2*r+1],s,o)<=l&&a.push(t[r]);continue}const u=Math.floor((p+h)/2),m=e[2*u],g=e[2*u+1];d(m,g,s,o)<=l&&a.push(t[u]);const f=(c+1)%2;(0===c?s-r<=m:o-r<=g)&&(i.push(p),i.push(u-1),i.push(f)),(0===c?s+r>=m:o+r>=g)&&(i.push(u+1),i.push(h),i.push(f))}return a}function d(t,e,s,o){const r=t-s,n=e-o;return r*r+n*n}const u=t=>t[0],m=t=>t[1];class g{constructor(t,e=u,s=m,o=64,r=Float64Array){this.nodeSize=o,this.points=t;const n=t.length<65536?Uint16Array:Uint32Array,a=this.ids=new n(t.length),l=this.coords=new r(2*t.length);for(let i=0;i<t.length;i++)a[i]=i,l[2*i]=e(t[i]),l[2*i+1]=s(t[i]);i(a,l,o,0,a.length-1,0)}range(t,e,s,o){return h(this.ids,this.coords,t,e,s,o,this.nodeSize)}within(t,e,s){return p(this.ids,this.coords,t,e,s,this.nodeSize)}}const f={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},k=Math.fround||(t=>e=>(t[0]=+e,t[0]))(new Float32Array(1));class y{constructor(t){this.options=_(Object.create(f),t),this.trees=new Array(this.options.maxZoom+1)}load(t){const{log:e,minZoom:s,maxZoom:o,nodeSize:r}=this.options;e&&console.time("total time");const n=`prepare ${t.length} points`;e&&console.time(n),this.points=t;let i=[];for(let a=0;a<t.length;a++)t[a].geometry&&i.push(w(t[a],a));this.trees[o+1]=new g(i,P,E,r,Float32Array),e&&console.timeEnd(n);for(let a=o;a>=s;a--){const t=+Date.now();i=this._cluster(i,a),this.trees[a]=new g(i,P,E,r,Float32Array),e&&console.log("z%d: %d clusters in %dms",a,i.length,+Date.now()-t)}return e&&console.timeEnd("total time"),this}getClusters(t,e){let s=((t[0]+180)%360+360)%360-180;const o=Math.max(-90,Math.min(90,t[1]));let r=180===t[2]?180:((t[2]+180)%360+360)%360-180;const n=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)s=-180,r=180;else if(s>r){const t=this.getClusters([s,o,180,n],e),i=this.getClusters([-180,o,r,n],e);return t.concat(i)}const i=this.trees[this._limitZoom(e)],a=i.range(b(s),x(n),b(r),x(o)),l=[];for(const c of a){const t=i.points[c];l.push(t.numPoints?v(t):this.points[t.index])}return l}getChildren(t){const e=this._getOriginId(t),s=this._getOriginZoom(t),o="No cluster with the specified id.",r=this.trees[s];if(!r)throw new Error(o);const n=r.points[e];if(!n)throw new Error(o);const i=this.options.radius/(this.options.extent*Math.pow(2,s-1)),a=r.within(n.x,n.y,i),l=[];for(const c of a){const e=r.points[c];e.parentId===t&&l.push(e.numPoints?v(e):this.points[e.index])}if(0===l.length)throw new Error(o);return l}getLeaves(t,e,s){e=e||10,s=s||0;const o=[];return this._appendLeaves(o,t,e,s,0),o}getTile(t,e,s){const o=this.trees[this._limitZoom(t)],r=Math.pow(2,t),{extent:n,radius:i}=this.options,a=i/n,l=(s-a)/r,c=(s+1+a)/r,h={features:[]};return this._addTileFeatures(o.range((e-a)/r,l,(e+1+a)/r,c),o.points,e,s,r,h),0===e&&this._addTileFeatures(o.range(1-a/r,l,1,c),o.points,r,s,r,h),e===r-1&&this._addTileFeatures(o.range(0,l,a/r,c),o.points,-1,s,r,h),h.features.length?h:null}getClusterExpansionZoom(t){let e=this._getOriginZoom(t)-1;while(e<=this.options.maxZoom){const s=this.getChildren(t);if(e++,1!==s.length)break;t=s[0].properties.cluster_id}return e}_appendLeaves(t,e,s,o,r){const n=this.getChildren(e);for(const i of n){const e=i.properties;if(e&&e.cluster?r+e.point_count<=o?r+=e.point_count:r=this._appendLeaves(t,e.cluster_id,s,o,r):r<o?r++:t.push(i),t.length===s)break}return r}_addTileFeatures(t,e,s,o,r,n){for(const i of t){const t=e[i],a=t.numPoints;let l,c,h;if(a)l=C(t),c=t.x,h=t.y;else{const e=this.points[t.index];l=e.properties,c=b(e.geometry.coordinates[0]),h=x(e.geometry.coordinates[1])}const p={type:1,geometry:[[Math.round(this.options.extent*(c*r-s)),Math.round(this.options.extent*(h*r-o))]],tags:l};let d;a?d=t.id:this.options.generateId?d=t.index:this.points[t.index].id&&(d=this.points[t.index].id),void 0!==d&&(p.id=d),n.features.push(p)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,e){const s=[],{radius:o,extent:r,reduce:n,minPoints:i}=this.options,a=o/(r*Math.pow(2,e));for(let l=0;l<t.length;l++){const o=t[l];if(o.zoom<=e)continue;o.zoom=e;const r=this.trees[e+1],c=r.within(o.x,o.y,a),h=o.numPoints||1;let p=h;for(const t of c){const s=r.points[t];s.zoom>e&&(p+=s.numPoints||1)}if(p>h&&p>=i){let t=o.x*h,i=o.y*h,a=n&&h>1?this._map(o,!0):null;const d=(l<<5)+(e+1)+this.points.length;for(const s of c){const l=r.points[s];if(l.zoom<=e)continue;l.zoom=e;const c=l.numPoints||1;t+=l.x*c,i+=l.y*c,l.parentId=d,n&&(a||(a=this._map(o,!0)),n(a,this._map(l)))}o.parentId=d,s.push(M(t/p,i/p,d,p,a))}else if(s.push(o),p>1)for(const t of c){const o=r.points[t];o.zoom<=e||(o.zoom=e,s.push(o))}}return s}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,e){if(t.numPoints)return e?_({},t.properties):t.properties;const s=this.points[t.index].properties,o=this.options.map(s);return e&&o===s?_({},o):o}}function M(t,e,s,o,r){return{x:k(t),y:k(e),zoom:1/0,id:s,parentId:-1,numPoints:o,properties:r}}function w(t,e){const[s,o]=t.geometry.coordinates;return{x:k(b(s)),y:k(x(o)),zoom:1/0,index:e,parentId:-1}}function v(t){return{type:"Feature",id:t.id,properties:C(t),geometry:{type:"Point",coordinates:[L(t.x),I(t.y)]}}}function C(t){const e=t.numPoints,s=e>=1e4?`${Math.round(e/1e3)}k`:e>=1e3?Math.round(e/100)/10+"k":e;return _(_({},t.properties),{cluster:!0,cluster_id:t.id,point_count:e,point_count_abbreviated:s})}function b(t){return t/360+.5}function x(t){const e=Math.sin(t*Math.PI/180),s=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return s<0?0:s>1?1:s}function L(t){return 360*(t-.5)}function I(t){const e=(180-360*t)*Math.PI/180;return 360*Math.atan(Math.exp(e))/Math.PI-90}function _(t,e){for(const s in e)t[s]=e[s];return t}function P(t){return t.x}function E(t){return t.y}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function O(t,e){var s={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(s[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(s[o[r]]=t[o[r]])}return s}class z{constructor({markers:t,position:e}){this.markers=t,e&&(e instanceof google.maps.LatLng?this._position=e:this._position=new google.maps.LatLng(e))}get bounds(){if(0!==this.markers.length||this._position)return this.markers.reduce(((t,e)=>t.extend(e.getPosition())),new google.maps.LatLngBounds(this._position,this._position))}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter((t=>t.getVisible())).length}push(t){this.markers.push(t)}delete(){this.marker&&(this.marker.setMap(null),delete this.marker),this.markers.length=0}}class S{constructor({maxZoom:t=16}){this.maxZoom=t}noop({markers:t}){return Z(t)}}const Z=t=>{const e=t.map((t=>new z({position:t.getPosition(),markers:[t]})));return e};class T extends S{constructor(t){var{maxZoom:e,radius:s=60}=t,o=O(t,["maxZoom","radius"]);super({maxZoom:e}),this.superCluster=new y(Object.assign({maxZoom:this.maxZoom,radius:s},o)),this.state={zoom:null}}calculate(t){let e=!1;if(!n()(t.markers,this.markers)){e=!0,this.markers=[...t.markers];const s=this.markers.map((t=>({type:"Feature",geometry:{type:"Point",coordinates:[t.getPosition().lng(),t.getPosition().lat()]},properties:{marker:t}})));this.superCluster.load(s)}const s={zoom:t.map.getZoom()};return e||this.state.zoom>this.maxZoom&&s.zoom>this.maxZoom||(e=e||!n()(this.state,s)),this.state=s,e&&(this.clusters=this.cluster(t)),{clusters:this.clusters,changed:e}}cluster({map:t}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(t.getZoom())).map(this.transformCluster.bind(this))}transformCluster({geometry:{coordinates:[t,e]},properties:s}){if(s.cluster)return new z({markers:this.superCluster.getLeaves(s.cluster_id,1/0).map((t=>t.properties.marker)),position:new google.maps.LatLng({lat:e,lng:t})});{const t=s.marker;return new z({markers:[t],position:t.getPosition()})}}}class j{constructor(t,e){this.markers={sum:t.length};const s=e.map((t=>t.count)),o=s.reduce(((t,e)=>t+e),0);this.clusters={count:e.length,markers:{mean:o/e.length,sum:o,min:Math.min(...s),max:Math.max(...s)}}}}class A{render({count:t,position:e},s){const o=t>Math.max(10,s.clusters.markers.mean)?"#ff0000":"#0000ff",r=window.btoa(`\n  <svg fill="${o}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">\n    <circle cx="120" cy="120" opacity=".6" r="70" />\n    <circle cx="120" cy="120" opacity=".3" r="90" />\n    <circle cx="120" cy="120" opacity=".2" r="110" />\n  </svg>`);return new google.maps.Marker({position:e,icon:{url:`data:image/svg+xml;base64,${r}`,scaledSize:new google.maps.Size(45,45)},label:{text:String(t),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:`Cluster of ${t} markers`,zIndex:Number(google.maps.Marker.MAX_ZINDEX)+t})}}function B(t,e){for(let s in e.prototype)t.prototype[s]=e.prototype[s]}class F{constructor(){B(F,google.maps.OverlayView)}}var G;(function(t){t["CLUSTERING_BEGIN"]="clusteringbegin",t["CLUSTERING_END"]="clusteringend",t["CLUSTER_CLICK"]="click"})(G||(G={}));const N=(t,e,s)=>{s.fitBounds(e.bounds)};class R extends F{constructor({map:t,markers:e=[],algorithm:s=new T({}),renderer:o=new A,onClusterClick:r=N}){super(),this.markers=[...e],this.clusters=[],this.algorithm=s,this.renderer=o,this.onClusterClick=r,t&&this.setMap(t)}addMarker(t,e){this.markers.includes(t)||(this.markers.push(t),e||this.render())}addMarkers(t,e){t.forEach((t=>{this.addMarker(t,!0)})),e||this.render()}removeMarker(t,e){const s=this.markers.indexOf(t);return-1!==s&&(t.setMap(null),this.markers.splice(s,1),e||this.render(),!0)}removeMarkers(t,e){let s=!1;return t.forEach((t=>{s=this.removeMarker(t,!0)||s})),s&&!e&&this.render(),s}clearMarkers(t){this.markers.length=0,t||this.render()}render(){const t=this.getMap();if(t instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,G.CLUSTERING_BEGIN,this);const{clusters:e,changed:s}=this.algorithm.calculate({markers:this.markers,map:t,mapCanvasProjection:this.getProjection()});(s||void 0==s)&&(this.reset(),this.clusters=e,this.renderClusters()),google.maps.event.trigger(this,G.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach((t=>t.setMap(null))),this.clusters.forEach((t=>t.delete())),this.clusters=[]}renderClusters(){const t=new j(this.markers,this.clusters),e=this.getMap();this.clusters.forEach((s=>{1===s.markers.length?s.marker=s.markers[0]:(s.marker=this.renderer.render(s,t),this.onClusterClick&&s.marker.addListener("click",(t=>{google.maps.event.trigger(this,G.CLUSTER_CLICK,s),this.onClusterClick(t,s,e)}))),s.marker.setMap(e)}))}}class D extends o.Uw{constructor(){super(...arguments),this.gMapsRef=void 0,this.maps={},this.currMarkerId=0,this.onClusterClickHandler=(t,e,s)=>{var o,r;const n=this.getIdFromMap(s),i=[];if(void 0!=e.markers)for(const a of e.markers){const t=this.getIdFromMarker(n,a);i.push({markerId:t,latitude:null===(o=a.getPosition())||void 0===o?void 0:o.lat(),longitude:null===(r=a.getPosition())||void 0===r?void 0:r.lng(),title:a.getTitle(),snippet:""})}this.notifyListeners("onClusterClick",{mapId:n,latitude:e.position.lat(),longitude:e.position.lng(),size:e.count,items:i})}}getIdFromMap(t){for(const e in this.maps)if(this.maps[e].map==t)return e;return""}getIdFromMarker(t,e){for(const s in this.maps[t].markers)if(this.maps[t].markers[s]==e)return s;return""}async importGoogleLib(t){if(void 0===this.gMapsRef){const e=await s.e(311).then(s.bind(s,3311)),o=new e.Loader({apiKey:null!==t&&void 0!==t?t:"",version:"weekly",libraries:["places"]}),r=await o.load();this.gMapsRef=r.maps,console.log("Loaded google maps API")}}async setCamera(t){this.maps[t.id].map.moveCamera({center:t.config.coordinate,heading:t.config.bearing,tilt:t.config.angle,zoom:t.config.zoom})}async setMapType(t){this.maps[t.id].map.setMapTypeId(t.mapType)}async enableIndoorMaps(t){throw new Error("Method not supported on web.")}async enableTrafficLayer(t){var e;const s=null!==(e=this.maps[t.id].trafficLayer)&&void 0!==e?e:new google.maps.TrafficLayer;t.enabled?(s.setMap(this.maps[t.id].map),this.maps[t.id].trafficLayer=s):this.maps[t.id].trafficLayer&&(s.setMap(null),this.maps[t.id].trafficLayer=void 0)}async enableAccessibilityElements(t){throw new Error("Method not supported on web.")}dispatchMapEvent(t){throw new Error("Method not supported on web.")}async enableCurrentLocation(t){if(t.enabled){if(!navigator.geolocation)throw new Error("Geolocation not supported on web browser.");navigator.geolocation.getCurrentPosition((e=>{const s={lat:e.coords.latitude,lng:e.coords.longitude};this.maps[t.id].map.setCenter(s),this.notifyListeners("onMyLocationButtonClick",{}),this.notifyListeners("onMyLocationClick",{})}),(()=>{throw new Error("Geolocation not supported on web browser.")}))}}async setPadding(t){const e=this.maps[t.id].map.getBounds();void 0!==e&&this.maps[t.id].map.fitBounds(e,t.padding)}async getMapBounds(t){const e=this.maps[t.id].map.getBounds();if(!e)throw new Error("Google Map Bounds could not be found.");return{southwest:{lat:e.getSouthWest().lat(),lng:e.getSouthWest().lng()},center:{lat:e.getCenter().lat(),lng:e.getCenter().lng()},northeast:{lat:e.getNorthEast().lat(),lng:e.getNorthEast().lng()}}}async addMarkers(t){const e=[],s=this.maps[t.id];for(const o of t.markers){const r=this.buildMarkerOpts(o,s.map),n=new google.maps.Marker(r),i=""+this.currMarkerId;s.markers[i]=n,this.setMarkerListeners(t.id,i,n),e.push(i),this.currMarkerId++}return{ids:e}}async addMarker(t){const e=this.buildMarkerOpts(t.marker,this.maps[t.id].map);console.log(e);const s=new google.maps.Marker(e),o=""+this.currMarkerId;return this.maps[t.id].markers[o]=s,this.setMarkerListeners(t.id,o,s),this.currMarkerId++,{id:o}}async removeMarkers(t){const e=this.maps[t.id];for(const s of t.markerIds)e.markers[s].setMap(null),delete e.markers[s]}async removeMarker(t){this.maps[t.id].markers[t.markerId].setMap(null),delete this.maps[t.id].markers[t.markerId]}async enableClustering(t){const e=[];for(const s in this.maps[t.id].markers)e.push(this.maps[t.id].markers[s]);this.maps[t.id].markerClusterer=new R({map:this.maps[t.id].map,markers:e,onClusterClick:this.onClusterClickHandler})}async disableClustering(t){var e;null===(e=this.maps[t.id].markerClusterer)||void 0===e||e.setMap(null),this.maps[t.id].markerClusterer=void 0}async onScroll(t){throw new Error("Method not supported on web.")}async create(t){console.log(`Create map: ${t.id}`),await this.importGoogleLib(t.apiKey),this.maps[t.id]={map:new window.google.maps.Map(t.element,Object.assign({},t.config)),element:t.element,markers:{}},this.setMapListeners(t.id)}async destroy(t){console.log(`Destroy map: ${t.id}`);const e=this.maps[t.id];e.element.innerHTML="",e.map.unbindAll(),delete this.maps[t.id]}async setMarkerListeners(t,e,s){s.addListener("click",(()=>{var o,r;this.notifyListeners("onMarkerClick",{mapId:t,markerId:e,latitude:null===(o=s.getPosition())||void 0===o?void 0:o.lat(),longitude:null===(r=s.getPosition())||void 0===r?void 0:r.lng(),title:s.getTitle(),snippet:""})})),s.addListener("dragstart",(()=>{var o,r;this.notifyListeners("onMarkerDragStart",{mapId:t,markerId:e,latitude:null===(o=s.getPosition())||void 0===o?void 0:o.lat(),longitude:null===(r=s.getPosition())||void 0===r?void 0:r.lng(),title:s.getTitle(),snippet:""})})),s.addListener("drag",(()=>{var o,r;this.notifyListeners("onMarkerDrag",{mapId:t,markerId:e,latitude:null===(o=s.getPosition())||void 0===o?void 0:o.lat(),longitude:null===(r=s.getPosition())||void 0===r?void 0:r.lng(),title:s.getTitle(),snippet:""})})),s.addListener("dragend",(()=>{var o,r;this.notifyListeners("onMarkerDragEnd",{mapId:t,markerId:e,latitude:null===(o=s.getPosition())||void 0===o?void 0:o.lat(),longitude:null===(r=s.getPosition())||void 0===r?void 0:r.lng(),title:s.getTitle(),snippet:""})}))}async setMapListeners(t){const e=this.maps[t].map;e.addListener("idle",(async()=>{var s,o;const r=await this.getMapBounds({id:t});this.notifyListeners("onCameraIdle",{mapId:t,bearing:e.getHeading(),bounds:r,latitude:null===(s=e.getCenter())||void 0===s?void 0:s.lat(),longitude:null===(o=e.getCenter())||void 0===o?void 0:o.lng(),tilt:e.getTilt(),zoom:e.getZoom()})})),e.addListener("center_changed",(()=>{this.notifyListeners("onCameraMoveStarted",{mapId:t,isGesture:!0})})),e.addListener("bounds_changed",(async()=>{var s,o;const r=await this.getMapBounds({id:t});this.notifyListeners("onBoundsChanged",{mapId:t,bearing:e.getHeading(),bounds:r,latitude:null===(s=e.getCenter())||void 0===s?void 0:s.lat(),longitude:null===(o=e.getCenter())||void 0===o?void 0:o.lng(),tilt:e.getTilt(),zoom:e.getZoom()})})),e.addListener("click",(e=>{var s,o;this.notifyListeners("onMapClick",{mapId:t,latitude:null===(s=e.latLng)||void 0===s?void 0:s.lat(),longitude:null===(o=e.latLng)||void 0===o?void 0:o.lng()})})),this.notifyListeners("onMapReady",{mapId:t})}buildMarkerOpts(t,e){let s;t.iconUrl&&(s={url:t.iconUrl,scaledSize:t.iconSize?new google.maps.Size(t.iconSize.width,t.iconSize.height):null,anchor:t.iconAnchor?new google.maps.Point(t.iconAnchor.x,t.iconAnchor.y):new google.maps.Point(0,0),origin:t.iconOrigin?new google.maps.Point(t.iconOrigin.x,t.iconOrigin.y):new google.maps.Point(0,0)});const o={position:t.coordinate,map:e,opacity:t.opacity,title:t.title,icon:s,draggable:t.draggable};return o}}},4063:function(t){t.exports=function t(e,s){if(e===s)return!0;if(e&&s&&"object"==typeof e&&"object"==typeof s){if(e.constructor!==s.constructor)return!1;var o,r,n;if(Array.isArray(e)){if(o=e.length,o!=s.length)return!1;for(r=o;0!==r--;)if(!t(e[r],s[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===s.toString();if(n=Object.keys(e),o=n.length,o!==Object.keys(s).length)return!1;for(r=o;0!==r--;)if(!Object.prototype.hasOwnProperty.call(s,n[r]))return!1;for(r=o;0!==r--;){var i=n[r];if(!t(e[i],s[i]))return!1}return!0}return e!==e&&s!==s}}}]);
//# sourceMappingURL=354.6f95dd15.js.map