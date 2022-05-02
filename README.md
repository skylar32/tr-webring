<p align="center"><img width="200px" height="200px" alt="Thousand Roads logo" src="https://forums.thousandroads.net/styles/shaymin/shaymin_shuffle.png"></a>
<h1 align="center"><a href="https://thousandroads.net">Thousand Roads</a> webring</h1>

<h2 align="center">Applying</h2>

Fork this repository, add yourself to [`members.json`](members.json) and open a pull request.  Or, send a PM to kyeugh on Discord or the [Thousand Roads forums](https://forums.thousandroads.net).  You must be member of the Thousand Roads community for your join request to be accepted, and your website must contain Pokémon content!

<h2 align="center">Joining</h2>

Include the JavaScript from [`webring.js`](webring.js) in your code.  Note that this script must be hosted on your web server and cannot be hotlinked from GitHub; GitHub blocks JavaScript hotlinking so this will not work.  Next, include the following code somewhere on your webpage layout:

```html
<tr-webring site="https://your-site-here.com/"></tr-webring>
```

Here, the `site` attribute must be replaced with the URL of your website, exactly as it appears in [`members.json`](members.json).  The JavaScript will populate this template element with all the expected content automatically.  If you encounter issues with this step, kyeugh can help if reached out to.

<h2 align="center">Styling</h2>

The webring box has some basic styling included by default.  This style is located around line 5 of [`webring.js`](webring.js), bound to the `template.innerHTML` variable.  You can modify this styling in your local copy of the script to change the webring box's appearance.  Note that CSS rules written in your webpage's CSS file will not be applied to the webring box; it is contained in a shadow DOM and therefore excluded from the rest of the page's styling in order to prevent clashes between the box's styles and existing styles on the page.