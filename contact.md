---
layout: page
title: Contact
permalink: /contact/
---

For enquiries about available work, commissions or exhibitions, please get in touch.

<p class="contact-email"><a href="mailto:{{ site.artist.email }}">{{ site.artist.email }}</a></p>

<ul class="contact-links">
  {%- for link in site.artist.social %}
  <li><a href="{{ link.url }}" rel="noopener">{{ link.label }}</a></li>
  {%- endfor %}
</ul>

<p class="muted">Based in {{ site.artist.location }}.</p>
