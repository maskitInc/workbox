/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

/**
 * # workbox-broadcast-cache-update
 *
 * A helper library that uses the Broadcast Channel API to announce when
 * a caches entry is updated with a new response, allowing your web app
 * to listen for these updates and react to them.
 *
 * Most developers will use this module by instantiating a new
 * `BroadcastCacheUpdatePlugin` and passing it to a
 * {@link module:workbox-runtime-caching.RequestWrapper|RequestWrapper},
 * as shown in the first example below.
 *
 * You can listen for updates from your web app by adding an event listener on
 * a `BroadcastChannel` within a page, using the same channel name as
 * what's used within the service worker, as shown in the second example.
 *
 *
 * @example <caption>Using the BroadcastCacheUpdatePlugin class in a
 * service worker.</caption>
 *
 * const requestWrapper = new workbox.runtimeCaching.RequestWrapper({
 *   cacheName: 'text-files',
 *   plugins: [
 *     new workbox.broadcastCacheUpdate.BroadcastCacheUpdatePlugin(
 *       {channelName: 'cache-updates'})
 *   ],
 * });
 *
 * const route = new workbox.routing.RegExpRoute({
 *   regExp: /\.txt$/,
 *   handler: new workbox.runtimeCaching.StaleWhileRevalidate({requestWrapper}),
 * });
 *
 * const router = new workbox.routing.Router();
 * router.registerRoute({route});
 *
 * @example <caption>Listening for the broadcast message in the
 * window.</caption>
 *
 * const updateChannel = new BroadcastChannel('cache-updates');
 * updateChannel.addEventListener('message', event => {
 *   console.log(`Cache updated: ${event.data.payload.updatedUrl}`);
 * });
 *
 * @module workbox-broadcast-cache-update
 */

import BroadcastCacheUpdate from './lib/broadcast-cache-update';
import BroadcastCacheUpdatePlugin from './lib/broadcast-cache-update-plugin';
import broadcastUpdate from './lib/broadcast-update';
import {cacheUpdatedMessageType} from './lib/constants';
import responsesAreSame from './lib/responses-are-same';

export {
  BroadcastCacheUpdate,
  BroadcastCacheUpdatePlugin,
  broadcastUpdate,
  cacheUpdatedMessageType,
  responsesAreSame,
};
