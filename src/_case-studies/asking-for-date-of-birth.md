---
layout: default
title: Date of birth form field
subtitle: "The date of birth UI control currently has 3 select menus for day, month and year. During our usability studies this has been highlighted as a frustration, having to pick 3 values from a multitude of options was causing friction."
image: "/assets/images/masked-input.png"
page_class: "site-page"
sort: 20
---

<article class="animated fadeIn">

<div class="section typeset">

	<header class="single-measure">
		<h1>Date of birth form field</h1>
	</header>

	<div class="single-measure">

		<p class="lead">Asking a user for their date of birth isn't something I take lightly! I always try to reduce the information required from users to a minimum.</p>

		<p>For the purpose of this case study, I'll not go into the reasons why and when to ask user's for their date of birth but focus on how we ask them.</p>

		<h2>The problem</h2>

		<p>The date of birth field currently has 3 select menus for day, month and year. During our usability studies this has been highlighted as a frustration, having to pick 3 values from a multitude of options was causing friction - more commonly on mobile.</p>

		<h2>Background</h2>

		<p>After a review of the application, we highlighted some areas where select menus had been misused. I defined the criteria for correct usage...</p>

		<ul>
		    <li>Less than 5 options, should consider using radio buttons.</li>
		    <li>More than 15 options, should consider a searchable drop-down with auto-complete.</li>
		</ul>

		<p>With these rules in mind we decided to re-design the date of birth field.</p>

		<h2>Constraints</h2>

		<p>We decided early on that the control should be consistent across devices for two reasons.</p>
		<ol>
			<li>We wanted a consistent experience for our users, knowing from our research that candidates were completing user-flows in a multi-device manner.</li>
			<li>Keeping maintenance low from a development perspective. Maintaining one control made sense.</li>
		</ol>

		<p>There is also the cultural aspect. Different countries have different formats for the date, whether it be the order of day, month, year or the type of separator used. This control was going to be used globally.</p>

		<h2>Solutions</h2>

		<p>After some research and prototyping we came up with 4 solutions.</p>

		<h3>3 inputs</h3>

		<figure>
			<img src="/assets/images/3-inputs.png" class="gallery__item" alt="3 text inputs for the date of birth field" data-zoom-padding="20" data-zoom-url="/assets/images/3-inputs.png" data-zoom-overlay="true">
			<figcaption class="text--muted"><small>3 text inputs for the date of birth field</small></figcaption>
		</figure>

		<p>Having 3 text inputs for day, month and year meant that we could have a consistent experience across devices and give them enough visual clues to get enter their date of birth easily enough. With some validation to prevent errors this isn’t a bad option. Although this solution tested well with users, moving between inputs on mobile was tedious.</p>

		<h3>Inputs and select menus</h3>

		<figure>
			<img src="/assets/images/1-dropdown-2-inputs.png" class="gallery__item" alt="1 select menu and 2 text inputs for the date of birth field" data-zoom-padding="20" data-zoom-url="/assets/images/1-dropdown-2-inputs.png" data-zoom-overlay="true">
			<figcaption class="text--muted"><small>1 select menu and 2 text inputs for the date of birth field</small></figcaption>
		</figure>

		<p>This solution was to offer a text input for both the day and year, with a select menu for the month. The thinking here is that the month select menu has a manageable (although on the high side) amount of options, 12. Where as the day and year inputs, have too many options for a select menu to be usable.  As with the previous solution.</p>

		<h3>Date picker</h3>

		<figure>
			<img src="/assets/images/date-picker.png" class="gallery__item" alt="A date picker for the date of birth field" data-zoom-padding="20" data-zoom-url="/assets/images/date-picker.png" data-zoom-overlay="true">
			<figcaption class="text--muted"><small>A date picker for the date of birth field</small></figcaption>
		</figure>

		<p>For sure we knew we needed to reduce 3 fields into 1. A date picker is a good way to guide the user to a specific date and also ensure standard formatting. The issue we found was the fact that our average demographic were in their early 30’s. Meaning the year on date picker would have to be rolled back 30 years from today’s date, not good. Of course, we could cater for that by defaulting the year to something that’s average. But for the non-average users, that’s very confusing. </p>

		<h3>Masked input</h3>

		<figure>
			<img src="/assets/images/masked-input.png" class="gallery__item" alt="A masked input for the date of birth field" data-zoom-padding="20" data-zoom-url="/assets/images/masked-input.png" data-zoom-overlay="true">
			<figcaption class="text--muted"><small>A masked input for the date of birth field</small></figcaption>
		</figure>

		<p>This is where we found the most potential and ultimately, our final solution. We felt users should type their date of birth without a date picker. With a clear label, placeholder and supporting help text we should be able to guide the user through entering their date of birth without confusion. 

		<p>But we still had to get over the hurdle outlined in the second constraint. The cultural aspect. How do we deal with differing formats? How do we define the correct separators?</p>

		<p>We decided to use the user’s IP address to determine their local date format. This allows us to serve the user with a control that is asking for a date in a format they’re familiar with.</p>

		<p>We also decided to introduce input masking, this prevents the user from making any typos and will also give us the standard separator and format that you can achieve with a date picker.</p>

		<p>Here are the masking rules:</p>

		<ol>
		    <li>Any non-numerical keystroke used in the day, month or year positions will be prevented.</li>
		    <li>Any keystroke between the day month and year will produce the separator.</li>
		</ol>

		<p>Here is the HTML prototype supporting British English, US English, Japanese and Spanish.</p>

		<p data-height="750" data-theme-id="0" data-slug-hash="pjMBOO" data-default-tab="result" data-user="mitchrenton" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/mitchrenton/pen/pjMBOO/">Date of birth input</a> by Mitchell Renton (<a href="http://codepen.io/mitchrenton">@mitchrenton</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
	</div>
</div>

</article>