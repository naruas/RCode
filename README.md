#jQuery.RSlide

A simple, auto slide animation jQuery plugin for Desktop and Mobile


####Include

```javascript
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
```

####Installation

Include js and css after the jQuery library

```javascript
<script type="text/javascript" src="js/jquery.RSlide-1.0.1.js"></script>
<link type="text/css" rel="stylesheet" href="css/RSlide.css" />
```

####Usage

Create Markup Structure :
```html
<!-- s : contents -->
<div id="fluid-slide" class="scroll-wrap">
	<!-- list -->
	<div class="scroll">
		<ul class="list">
			<li class="item">
				<div class="photo"><img src="images/img01.jpg" alt="" /></div>
				<div class="desc">Gallery 01</div>
			</li>
			<li class="item">
				<div class="photo"><img src="images/img02.jpg" alt="" /></div>
				<div class="desc">Gallery 02</div>
			</li>
			<li class="item">
				<div class="photo"><img src="images/img03.jpg" alt="" /></div>
				<div class="desc">Gallery 03</div>
			</li>
			<li class="item">
				<div class="photo"><img src="images/img03.jpg" alt="" /></div>
				<div class="desc">Gallery 04</div>
			</li>
		</ul>
	</div>
	<!-- paging -->
	<div class="paging">
		<a href="#nowhere" class="on"><span class="blind">1</span></a>
		<a href="#nowhere"><span class="blind">2</span></a>
		<a href="#nowhere"><span class="blind">3</span></a>
		<a href="#nowhere"><span class="blind">4</span></a>
	</div>
	<!-- button left , right -->
	<div class="btn-wrap">
		<button type="button" class="btn btn-prev"><span class="blind">prev</span></button>
		<button type="button" class="btn btn-next"><span class="blind">next</span></button>
	</div>
</div>
<!-- e : contents -->
```
Create new Constructor :
```javascript
var mySlide = new FluidSlide($(".className") , speed , interval);
```

