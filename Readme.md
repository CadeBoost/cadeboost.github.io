This web site documents my journey through building a high-end arcade pedestal, being a total noob in the process.  My end goal is to create this beauty in real life:

<img src="assets/images/posts/2023-05-08/pedestal-xray.jpg" width="300" height="300" alt="Pedestal" />

[![Twitter](https://img.shields.io/twitter/follow/cadeboost?style=social)](https://twitter.com/CadeBoost)

## Posts

<ul>
  {% for post in site.posts %}
    <li>
		<div>
			<a href="{{ post.url }}">{{ post.title }}</a>
			<span class="text-sm text-zinc-400">- {{ post.date | date: "%b %d, %Y" }}</span>
		</div>
		<div>
			{{ post.excerpt | strip_html | truncatewords:50 }}
		</div>
    </li>
  {% endfor %}
  <li><i>More coming soon!</i></li>
</ul>
