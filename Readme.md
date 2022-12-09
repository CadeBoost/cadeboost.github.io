This web site documents my journey through building a high-end arcade pedestal, being a total noob in the process.

[![Twitter](https://img.shields.io/twitter/follow/cadeboost?style=social)](https://twitter.com/CadeBoost)

## Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
	  {{ post.excerpt }}
    </li>
  {% endfor %}
  <li><i>More coming soon!</i></li>
</ul>
