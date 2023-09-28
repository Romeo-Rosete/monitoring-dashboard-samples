/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {dashboardUrls} from './dashboard_urls';
import * as fs from 'fs';

export function getGrafanaDashboards() {
  const allDashboards: any = [];
  // for (let i = 1; i < 6; i++) {
  //   allDashboards.push(
  //     ...JSON.parse(
  //       fs.readFileSync(`../grafana_dashboards/archive${i}.json`).toString(),
  //     ),
  //   );
  // }
  return allDashboards;
}

export function tally(map: any, key: string) {
  map[key] = (map[key] || 0) + 1;
}