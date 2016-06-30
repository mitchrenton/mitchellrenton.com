---
layout: default
title: Search &amp; Match Redesign
subtitle: "To resolve confusion amongst recruiters regarding the user interface and how the system was intended to work, I was asked to redesign our internal candidate search system."
page_class: "site-page"
image: "/assets/images/search-field.jpg"
sort: 10
gallery: "yes"
---

<article class="animated fadeIn">

<div class="section typeset">

	<header class="single-measure">
		<h1>{{ page.title }}</h1>
	</header>

	<div class="single-measure">

		<p class="lead">To resolve confusion amongst recruiters regarding the user interface and how the system was intended to work, I was asked to redesign our internal candidate search system.</p>

		<p class="typl8-drop-cap">The Search &amp; Match system is a tool that Adecco’s recruiters use to discover candidates that match the requirements of a job request. Candidates from multiple databases are fed into a big data engine, allowing recruiters to find ideal candidates from multiple databases and business units within one application.</p>

		<p>The application has two algorithms, one for search and one for match:</p>

		<ul>
		    <li>Search: a search field that a recruiter can enter any string of text, plus advanced filters for specific criteria. Skills or location for example.</li>
		    <li>Match: the recruiter copies and pastes an entire CV or job description in order to find a similar candidate or a matching candidate respectively. The advanced filters are also available.</li>
		</ul>

		<p>Once a recruiter performs either a search or a match, they are presented with a list of candidates. They can view their profiles and/or download their CV. At this point the recruiter can decide if any of the candidates are potential hires, and add them to their <a class="external-link" href="https://en.wikipedia.org/wiki/Applicant_tracking_system">Application Tracking System (ATS). <i class="icon icon-external-link" aria-hidden="true"></i></a></p>

		<p>Recruiters can also search for jobs within the system, they have the same search &amp; match capabilities as candidates although the advanced filters differ slightly. A recruiter who has a good candidate may not have a good job match for them, so turn to the search system to find a good fit.</p>

		<h2>Understand</h2>

		<p>One of the benefits to working with an internal system is easy access to users, so I set out to talk to as many recruiters as possible. The most common problem that kept surfacing was confusion around the difference between a search and a match. Also, having a screen for searching and a screen for matching for both candidates and jobs was deemed excessive and disorientating.</p>

		<p>I ran a usability test with 2 groups of users. The first group was recruiters that had used the system for at least 6 months, the second, recruiters that had never used the system before.</p>

		<p>I was interested to see and hear how recruiter's use of the system fit their daily routine and activities, under what circumstances do they use the system? How often do they use it? Are there features that aren't present that recruiters were expecting? Are there features there that recruiters weren't aware of? What are their main frustrations?</p>

		<p>After a round of interviews and usability tests I had gathered enough information and understanding to move into the discovery stage.</p>

		<h2>Discover</h2>

		<p>After many discussions, reviewing usability test videos and generally observing recruiters using the existing system. I put together an experience map to illustrate the current process and to highlight areas where we can improve the experience.</p>

		<img src="/assets/images/experience-map-snm.png" class="gallery__item" alt="Experience map for recruiter receiving a job request" data-zoom-padding="20" data-zoom-url="/assets/images/experience-map-snm.png" data-zoom-overlay="true">

		<h2>Prototype</h2>

		<p>The advanced search in the existing system had text inputs for each filter, with no validation or feedback for the user. This was quickly improved by using an input that support the content best. Sliders for min and max values, auto-suggest for location etc. </p>

		<p>I also designed a &lsquo;create search pattern&rsquo; option so the recruiter didn't have to populate the form for popular searches. Clear labeling and help text was also used.</p>

		<figure>
			<img src="/assets/images/advanced-search.jpg" class="gallery__item" alt="Advanced search" data-zoom-padding="20" data-zoom-url="/assets/images/advanced-search.jpg" data-zoom-overlay="true">
			<figcaption class="text--muted"><small>Advanced search</small></figcaption>
		</figure>

		<p>To allow recruiters to narrow down large candidate results we added a faceted search. Using key data such as location, skills and salary as attributes.</p>

		<figure>
			<img src="/assets/images/serp-facets.jpg" class="gallery__item" alt="Advanced search" data-zoom-padding="20" data-zoom-url="/assets/images/serp-facets.jpg" data-zoom-overlay="true">
			<figcaption class="text--muted"><small>Faceted search on the results page</small></figcaption>
		</figure>

		<p>Allowing recruiters to create groups of candidates was an important feature we wanted to introduce to mirror their daily activities.</p>

		<figure>
			<img src="/assets/images/add-to-shortlist.jpg" class="gallery__item" alt="Advanced search" data-zoom-padding="20" data-zoom-url="/assets/images/add-to-shortlist.jpg" data-zoom-overlay="true">
			<figcaption class="text--muted"><small>Add candidate to a shortlist.</small></figcaption>
		</figure>

		<p>To allow our recruiters to make quicker decisions on candidates eligibility, we introduced a candidate comparison tool. Displaying their experience, skills, education and location against a job request and other candidates.</p>

		<figure>
			<img src="/assets/images/compare-candidates.jpg" class="gallery__item" alt="Candidate Comparison" data-zoom-padding="20" data-zoom-url="/assets/images/compare-candidates.jpg" data-zoom-overlay="true">
			<figcaption class="text--muted"><small>Candidate comparison tool - visually highlight multiple candidates</small></figcaption>
		</figure>

		<h2>Iterate</h2>

		<p>During the iteration process, I was keen to remove the ambiguity between searching and matching - the biggest source of frustration for recruiters. The reality was that regardless of the algorithmic differences between a search and a match, from the recruiter&rsquo;s perspective, they’re the same thing, search criteria is entered into the system search results are displayed. We therefore made the decision to remove any mention of ‘matching’ - everything was a search, only one interface. </p>

		<p>As we were allowing recruiters to drag and drop documents to run a match, we decided that any searches from the main search box under 30 characters instigated a search, anything over that (A pasted job description for example) would instigate a match. The result for the recruiter is the same, though in the back-end the engine is doing things differently.</p>

		<p>By integrating the search, match, candidate &amp; job search and advanced search into one control, we reduced the cognitive load for users. 2 screens became 1 screen, and 4 controls became 1 control.</p>

		<figure>
			<img src="/assets/images/search-bar.png" class="gallery__item" alt="Integrated search bar" data-zoom-padding="20" data-zoom-url="/assets/images/search-bar.png" data-zoom-overlay="true">
			<figcaption class="text--muted"><small>The integrated search bar, supporting searching, matching, candidate &amp; job search &amp; advanced search</small></figcaption>
		</figure>

		<h2>Design</h2>

		<p>Now it was time to give the UI a skin! As this system was brand agnostic I decided to use Google&rsquo;s material design. This reduced the effort by not having to create a design system or styleguide.</p>

		<p>
			<a title="View the Search & Match design concepts with a clickable prototype" target="_blank" href="/case-studies/files/">View the click-able prototype</a>.<br>
			<small class="text--muted"><i>You can use the left and right arrow keys to navigate the screens</i></small>
		</p>

		<h2>Conclusion</h2>

		<p>By talking to recruiters early and understanding their needs and frustrations we were able to design something with their interests at the heart of each decision. We introduced lots of quick wins (Load times, clear messaging etc.) that improved the overall experience whilst giving recruiters the features that they had been expecting.</p>

		<p>There is still plenty of work to do here, but the feedback so far has been very positive.</p>

		<a href="/case-studies">Back to case studies</a>

	</div>

</div>


</article>