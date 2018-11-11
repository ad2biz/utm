# utm

Manage Google Analytics UTM parameters, by storing them in `sessionStorage` so
they are accessible to your web forms (e.g. email subscription or sign-up).

## utm.js

1) Add this line of HTML at the end, before `</html>` in your landing page(s):

```html
<script src="ad2.biz/utm.js"></script>
```

2) Add this same line of HTML before `</html>` in your form submission page.

3) Modify the form in your form submission page to add these hidden fields:

```html
<input type=hidden class=utm name=utm_source>
<input type=hidden class=utm name=utm_medium>
<input type=hidden class=utm name=utm_campaign>
<input type=hidden class=utm name=utm_keyword>
<input type=hidden class=utm name=utm_term>
```
