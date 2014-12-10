/**
 * Copyright 2013-2014 Atlassian
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('nodes', JSON.stringify({
      "key": 100, "meta": {},
      "content": "Home",
      "children": [
        {
          "key": 101, "meta": {},
          "content": "Animals",
          "type": "base",
          "children": [
            {
          "key": 102, "meta": {},
              "content": "Monkeys",
              "type": "base"
            },
            {
          "key": 103, "meta": {},
              "content": "Marmalutes",
              "type": "base"
            },
            {
          "key": 104, "meta": {},
              "content": "Marsupials",
              "type": "base"
            },
            {
          "key": 105, "meta": {},
              "content": "Meercats",
              "type": "base"
            },
            {
          "key": 106, "meta": {},
              "content": "Moose",
              "type": "base"
            },
            {
          "key": 107, "meta": {},
              "content": "Mice",
              "type": "base"
            }
          ],
          "collapsed": true
        },
        {
          "key": 108, "meta": {},
          "content": "Vegetables",
          "type": "base",
          "children": [
            {
          "key": 109, "meta": {},
              "content": "Trees",
              "type": "base"
            },
            {
          "key": 110, "meta": {},
              "content": "Ferns",
              "type": "base"
            },
            {
          "key": 111, "meta": {},
              "content": "Flowers",
              "type": "base"
            },
            {
          "key": 112, "meta": {},
              "content": "Grass",
              "type": "base"
            },
            {
          "key": 113, "meta": {},
              "content": "Water Lilies",
              "type": "base"
            },
            {
          "key": 114, "meta": {},
              "content": "Plums",
              "type": "base"
            },
            {
          "key": 115, "meta": {},
              "content": "Canteloup",
              "type": "base"
            },
            {
          "key": 116, "meta": {},
              "content": "Cabbage",
              "type": "base"
            },
            {
          "key": 117, "meta": {},
              "content": "Capers",
              "type": "base"
            },
            {
          "key": 118, "meta": {},
              "content": "Carrots",
              "type": "base"
            },
            {
          "key": 119, "meta": {},
              "content": "Camomile",
              "type": "base"
            }
          ],
          "collapsed": true
        },
        {
          "key": 120, "meta": {},
          "content": "Minerals",
          "type": "base",
          "children": [
            {
          "key": 121, "meta": {},
              "content": "Granite",
              "type": "base"
            },
            {
          "key": 122, "meta": {},
              "content": "Pummus",
              "type": "base"
            }
          ],
          "collapsed": true
        },
        {
          "key": 123, "meta": {},
          "content": "Planets",
          "type": "base",
          "children": [
            {
          "key": 124, "meta": {},
              "content": "Mercury",
              "type": "base"
            },
            {
          "key": 125, "meta": {},
              "content": "Venus",
              "type": "base"
            },
            {
          "key": 126, "meta": {},
              "content": "Earth",
              "type": "base"
            },
            {
          "key": 127, "meta": {},
              "content": "Mars",
              "type": "base"
            },
            {
          "key": 128, "meta": {},
              "content": "Jupiter",
              "type": "base"
            },
            {
          "key": 129, "meta": {},
              "content": "Saturn",
              "type": "base"
            },
            {
          "key": 130, "meta": {},
              "content": "Uranus",
              "type": "base"
            },
            {
          "key": 131, "meta": {},
              "content": "Neptune",
              "type": "base"
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": false
    }));
  }
};