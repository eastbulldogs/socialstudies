---
title: Medieval History Timeline
layout: default
permalink: /pages/timeline/
---

<div id="timeline-root"></div>

<script type="module">
import Timeline from '../components/Timeline.jsx';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('timeline-root');
const root = createRoot(container);
root.render(<Timeline />);
</script>
