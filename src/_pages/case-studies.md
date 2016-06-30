---
layout: default
title: Case Studies
permalink: /case-studies/
---

<div class="site-page">

		{% assign case-studies = site.case-studies | sort: 'sort' %}
	
		{% for case-study in case-studies %}
	
		{% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}

		{% if thecycle == 'odd' %}

		<div class="case-studies__item animated wow fadeInLeftBig section typeset">
		
		<div class="grid grid--large">

		{% else %}

		<div class="case-studies__item animated wow fadeInRightBig section typeset">

		<div class="grid grid--direction-row-reverse grid--large">

		{% endif %}

			<div class="grid__col-sm-12 grid__col-md-6">
				
				<img src="{{ case-study.image }}" alt="{{ case-study.title }}">			

			</div>

			<div class="grid__col-sm-12 grid__col-md-6">
			
				<h2><a class="case-studies__title" href="{{ case-study.url | prepend: site.baseurl }}">{{ case-study.title }}</a></h2>

				<p class="case-studies__excerpt">{{ case-study.subtitle }}</p>

				<div class="grid__cell">

					<a href="{{ case-study.url | prepend: site.baseurl }}" class="button button--dark">View the Case Study</a>

				</div>

			</div>

		</div>

	</div>

	{% endfor %}

</div>