---
title: Medieval History Timeline
layout: default
permalink: /pages/timeline/
---

<link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">

<div id="timeline-root"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
<script src="/assets/js/components/Timeline.jsx"></script>

<script>
const container = document.getElementById('timeline-root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(Timeline));
</script>
