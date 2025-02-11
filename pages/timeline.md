---
title: Medieval History Timeline
layout: default
permalink: /pages/timeline/
---

<div id="timeline-root"></div>

<script src="{{ site.baseurl }}/assets/js/timeline.js"></script>
<script>
  ReactDOM.render(
    React.createElement(Timeline),
    document.getElementById('timeline-root')
  );
</script>
