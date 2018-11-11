/* utm.js
 *
 * Copyright(c) 2018 Legendum Ltd. No Rights Reserved.
 * This code is Licensed to you under the MIT License.
 *
 * 1) Add this line of HTML at the end, before </html> in your landing page(s):
 *
 * <script src="utm.js"></script>
 *
 * (or use the path to your copy of the "utm.js" file, e.g. "/scripts/utm.js")
 *
 * 2) Add this same line of HTML before </html> in your form submission page.
 *
 * 3) Modify the form in your form submission page to add these hidden fields:
 *
 * <input type=hidden class=utm name=utm_source>
 * <input type=hidden class=utm name=utm_medium>
 * <input type=hidden class=utm name=utm_campaign>
 * <input type=hidden class=utm name=utm_keyword>
 * <input type=hidden class=utm name=utm_term>
 */
(function(w){
  var loc=w.location,
      decode = decodeURIComponent,
      params = {},
      fields = [],
      query = loc.search.substring(1),
      pairs = query.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    if (pair[0].substr(0, 4)=='utm_') {
      params[decode(pair[0])] = decode(pair[1]);
    }
  }
  for (var k in params) {
    w.sessionStorage.setItem(k, params[k]);
  }
  fields = w.document.getElementsByClassName('utm');
  for (var i = 0; i < fields.length; i++) {
    var f = fields[i],
        k = f.getAttribute('name'),
        v = w.sessionStorage.getItem(k);
    if (v) {
      f.setAttribute('value', v);
      params[k] = v; // for debug
    }
  }
  w.AD2=w.AD2||{};
  w.AD2.utm=params;
})(window||root)
