export var darkMode = `
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap");
:root {
  --bs-blue: #375a7f;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #e83e8c;
  --bs-red: #e74c3c;
  --bs-orange: #fd7e14;
  --bs-yellow: #f39c12;
  --bs-green: #00bc8c;
  --bs-teal: #20c997;
  --bs-cyan: #3498db;
  --bs-white: #fff;
  --bs-gray: #888;
  --bs-gray-dark: #303030;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #ebebeb;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #888;
  --bs-gray-700: #444;
  --bs-gray-800: #303030;
  --bs-gray-900: #222;
  --bs-primary: #375a7f;
  --bs-secondary: #444;
  --bs-success: #00bc8c;
  --bs-info: #3498db;
  --bs-warning: #f39c12;
  --bs-danger: #e74c3c;
  --bs-light: #adb5bd;
  --bs-dark: #303030;
  --bs-primary-rgb: 55, 90, 127;
  --bs-secondary-rgb: 68, 68, 68;
  --bs-success-rgb: 0, 188, 140;
  --bs-info-rgb: 52, 152, 219;
  --bs-warning-rgb: 243, 156, 18;
  --bs-danger-rgb: 231, 76, 60;
  --bs-light-rgb: 173, 181, 189;
  --bs-dark-rgb: 48, 48, 48;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-body-color-rgb: 255, 255, 255;
  --bs-body-bg-rgb: 34, 34, 34;
  --bs-font-sans-serif: Roboto, Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #FFF;
  --bs-body-bg: #121212;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}
body {
	margin: 0;
	font-family: var(--bs-body-font-family);
	font-size: var(--bs-body-font-size);
	font-weight: var(--bs-body-font-weight);
	line-height: var(--bs-body-line-height);
	color: var(--bs-body-color);
	text-align: var(--bs-body-text-align);
	background-color: var(--bs-body-bg);
	-webkit-text-size-adjust: 100%;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  hr {
	margin: 1rem 0;
	color: inherit;
	background-color: currentColor;
	border: 0;
	opacity: 0.25;
  }
  
  hr:not([size]) {
	height: 1px;
  }
  
  p {
	margin-top: 0;
	margin-bottom: 1rem;
  }
  
  abbr[title],
  abbr[data-bs-original-title] {
	-webkit-text-decoration: underline dotted;
	text-decoration: underline dotted;
	cursor: help;
	-webkit-text-decoration-skip-ink: none;
	text-decoration-skip-ink: none;
  }
  
  address {
	margin-bottom: 1rem;
	font-style: normal;
	line-height: inherit;
  }
  
  ol,
  ul {
	padding-left: 2rem;
  }
  
  ol,
  ul,
  dl {
	margin-top: 0;
	margin-bottom: 1rem;
  }
  
  ol ol,
  ul ul,
  ol ul,
  ul ol {
	margin-bottom: 0;
  }
  
  dt {
	font-weight: 700;
  }
  
  dd {
	margin-bottom: .5rem;
	margin-left: 0;
  }
  
  blockquote {
	margin: 0 0 1rem;
  }
  
  b,
  strong {
	font-weight: bolder;
  }
  
  small, .small {
	font-size: 0.875em;
  }
  
  mark, .mark {
	padding: 0.2em;
	background-color: #fcf8e3;
  }
  
  sub,
  sup {
	position: relative;
	font-size: 0.75em;
	line-height: 0;
	vertical-align: baseline;
  }
  
  sub {
	bottom: -.25em;
  }
  
  sup {
	top: -.5em;
  }
  
  a {
	color: #00bc8c;
	text-decoration: underline;
  }
  
  a:hover {
	color: #009670;
  }
  
  a:not([href]):not([class]), a:not([href]):not([class]):hover {
	color: inherit;
	text-decoration: none;
  }
  
  pre,
  code,
  kbd,
  samp {
	font-family: var(--bs-font-monospace);
	font-size: 1em;
	direction: ltr /* rtl:ignore */;
	unicode-bidi: bidi-override;
  }
  
  pre {
	display: block;
	margin-top: 0;
	margin-bottom: 1rem;
	overflow: auto;
	font-size: 0.875em;
	color: inherit;
  }
  
  pre code {
	font-size: inherit;
	color: inherit;
	word-break: normal;
  }
  
  code {
	font-size: 0.875em;
	color: #e83e8c;
	word-wrap: break-word;
  }
  
  a > code {
	color: inherit;
  }
  
  kbd {
	padding: 0.2rem 0.4rem;
	font-size: 0.875em;
	color: #fff;
	background-color: #222;
	border-radius: 0.2rem;
  }
  
  kbd kbd {
	padding: 0;
	font-size: 1em;
	font-weight: 700;
  }
  
  figure {
	margin: 0 0 1rem;
  }
  
  img,
  svg {
	vertical-align: middle;
  }
  
  table {
	caption-side: bottom;
	border-collapse: collapse;
  }
  
  caption {
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	color: #888;
	text-align: left;
  }
  
  th {
	text-align: inherit;
	text-align: -webkit-match-parent;
  }
  
  label {
	display: inline-block;
  }
  
  button {
	border-radius: 0;
  }
  
  button:focus:not(:focus-visible) {
	outline: 0;
  }
  
  input,
  button,
  select,
  optgroup,
  textarea {
	margin: 0;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
  }
  
  button,
  select {
	text-transform: none;
  }
  
  [role="button"] {
	cursor: pointer;
  }
  
  select {
	word-wrap: normal;
  }
  
  select:disabled {
	opacity: 1;
  }

  .table {
	--bs-table-bg: transparent;
	--bs-table-accent-bg: transparent;
	--bs-table-striped-color: #fff;
	--bs-table-striped-bg: rgba(0, 0, 0, 0.05);
	--bs-table-active-color: #fff;
	--bs-table-active-bg: rgba(0, 0, 0, 0.1);
	--bs-table-hover-color: #fff;
	--bs-table-hover-bg: rgba(0, 0, 0, 0.075);
	width: 100%;
	margin-bottom: 1rem;
	color: #fff;
	vertical-align: top;
	border-color: #444;
  }
  
  .table > :not(caption) > * > * {
	padding: 0.5rem 0.5rem;
	background-color: var(--bs-table-bg);
	border-bottom-width: 1px;
	box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
  }
  
  .table > tbody {
	vertical-align: inherit;
  }
  
  .table > thead {
	vertical-align: bottom;
  }
  
  .table > :not(:first-child) {
	border-top: 2px solid currentColor;
  }
  
  .caption-top {
	caption-side: top;
  }
  
  .table-sm > :not(caption) > * > * {
	padding: 0.25rem 0.25rem;
  }
  
  .table-bordered > :not(caption) > * {
	border-width: 1px 0;
  }
  
  .table-bordered > :not(caption) > * > * {
	border-width: 0 1px;
  }
  
  .table-borderless > :not(caption) > * > * {
	border-bottom-width: 0;
  }
  
  .table-borderless > :not(:first-child) {
	border-top-width: 0;
  }
  
  .table-striped > tbody > tr:nth-of-type(odd) > * {
	--bs-table-accent-bg: var(--bs-table-striped-bg);
	color: var(--bs-table-striped-color);
  }
  
  .table-active {
	--bs-table-accent-bg: var(--bs-table-active-bg);
	color: var(--bs-table-active-color);
  }
  
  .table-hover > tbody > tr:hover > * {
	--bs-table-accent-bg: var(--bs-table-hover-bg);
	color: var(--bs-table-hover-color);
  }
  
  .table-primary {
	--bs-table-bg: #375a7f;
	--bs-table-striped-bg: #416285;
	--bs-table-striped-color: #fff;
	--bs-table-active-bg: #4b6b8c;
	--bs-table-active-color: #fff;
	--bs-table-hover-bg: #466689;
	--bs-table-hover-color: #fff;
	color: #fff;
	border-color: #4b6b8c;
  }
  
  .table-secondary {
	--bs-table-bg: #444444;
	--bs-table-striped-bg: #4d4d4d;
	--bs-table-striped-color: #fff;
	--bs-table-active-bg: #575757;
	--bs-table-active-color: #fff;
	--bs-table-hover-bg: #525252;
	--bs-table-hover-color: #fff;
	color: #fff;
	border-color: #575757;
  }
  
  .table-success {
	--bs-table-bg: #00bc8c;
	--bs-table-striped-bg: #0dbf92;
	--bs-table-striped-color: #fff;
	--bs-table-active-bg: #1ac398;
	--bs-table-active-color: #fff;
	--bs-table-hover-bg: #13c195;
	--bs-table-hover-color: #fff;
	color: #fff;
	border-color: #1ac398;
  }
  
  .table-info {
	--bs-table-bg: #3498db;
	--bs-table-striped-bg: #3e9ddd;
	--bs-table-striped-color: #fff;
	--bs-table-active-bg: #48a2df;
	--bs-table-active-color: #fff;
	--bs-table-hover-bg: #43a0de;
	--bs-table-hover-color: #fff;
	color: #fff;
	border-color: #48a2df;
  }
  
  .table-warning {
	--bs-table-bg: #f39c12;
	--bs-table-striped-bg: #f4a11e;
	--bs-table-striped-color: #fff;
	--bs-table-active-bg: #f4a62a;
	--bs-table-active-color: #fff;
	--bs-table-hover-bg: #f4a324;
	--bs-table-hover-color: #fff;
	color: #fff;
	border-color: #f4a62a;
  }
  
  .table-danger {
	--bs-table-bg: #e74c3c;
	--bs-table-striped-bg: #e85546;
	--bs-table-striped-color: #fff;
	--bs-table-active-bg: #e95e50;
	--bs-table-active-color: #fff;
	--bs-table-hover-bg: #e9594b;
	--bs-table-hover-color: #fff;
	color: #fff;
	border-color: #e95e50;
  }
  
  .table-light {
	--bs-table-bg: #adb5bd;
	--bs-table-striped-bg: #b1b9c0;
	--bs-table-striped-color: #fff;
	--bs-table-active-bg: #b5bcc4;
	--bs-table-active-color: #fff;
	--bs-table-hover-bg: #b3bbc2;
	--bs-table-hover-color: #fff;
	color: #fff;
	border-color: #b5bcc4;
  }
  
  .table-dark {
	--bs-table-bg: #303030;
	--bs-table-striped-bg: #3a3a3a;
	--bs-table-striped-color: #fff;
	--bs-table-active-bg: #454545;
	--bs-table-active-color: #fff;
	--bs-table-hover-bg: #404040;
	--bs-table-hover-color: #fff;
	color: #fff;
	border-color: #454545;
  }
  
  .table-responsive {
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
  }
  
  @media (max-width: 575.98px) {
	.table-responsive-sm {
	  overflow-x: auto;
	  -webkit-overflow-scrolling: touch;
	}
  }
  
  @media (max-width: 767.98px) {
	.table-responsive-md {
	  overflow-x: auto;
	  -webkit-overflow-scrolling: touch;
	}
  }
  
  @media (max-width: 991.98px) {
	.table-responsive-lg {
	  overflow-x: auto;
	  -webkit-overflow-scrolling: touch;
	}
  }
  
  @media (max-width: 1199.98px) {
	.table-responsive-xl {
	  overflow-x: auto;
	  -webkit-overflow-scrolling: touch;
	}
  }
  
  @media (max-width: 1399.98px) {
	.table-responsive-xxl {
	  overflow-x: auto;
	  -webkit-overflow-scrolling: touch;
	}
  }

.card {
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: #202020;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
  }
  
  .card > hr {
	margin-right: 0;
	margin-left: 0;
  }
  
  .card > .list-group {
	border-top: inherit;
	border-bottom: inherit;
  }
  
  .card > .list-group:first-child {
	border-top-width: 0;
	border-top-left-radius: calc(0.25rem - 1px);
	border-top-right-radius: calc(0.25rem - 1px);
  }
  
  .card > .list-group:last-child {
	border-bottom-width: 0;
	border-bottom-right-radius: calc(0.25rem - 1px);
	border-bottom-left-radius: calc(0.25rem - 1px);
  }
  
  .card > .card-header + .list-group,
  .card > .list-group + .card-footer {
	border-top: 0;
  }
  
  .card-body {
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	padding: 1rem 1rem;
  }
  
  .card-title {
	margin-bottom: 0.5rem;
  }
  
  .card-subtitle {
	margin-top: -0.25rem;
	margin-bottom: 0;
  }
  
  .card-text:last-child {
	margin-bottom: 0;
  }
  
  .card-link + .card-link {
	margin-left: 1rem;
  }
  
  .card-header {
	padding: 0.5rem 1rem;
	margin-bottom: 0;
	background-color: #444;
	border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  
  .card-header:first-child {
	border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }
  
  .card-footer {
	padding: 0.5rem 1rem;
	background-color: #444;
	border-top: 1px solid rgba(0, 0, 0, 0.125);
  }
  
  .card-footer:last-child {
	border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }
  
  .card-header-tabs {
	margin-right: -0.5rem;
	margin-bottom: -0.5rem;
	margin-left: -0.5rem;
	border-bottom: 0;
  }
  
  .card-header-tabs .nav-link.active {
	background-color: #303030;
	border-bottom-color: #303030;
  }
  
  .card-header-pills {
	margin-right: -0.5rem;
	margin-left: -0.5rem;
  }
  
  .card-img-overlay {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 1rem;
	border-radius: calc(0.25rem - 1px);
  }
  
  .card-img,
  .card-img-top,
  .card-img-bottom {
	width: 100%;
  }
  
  .card-img,
  .card-img-top {
	border-top-left-radius: calc(0.25rem - 1px);
	border-top-right-radius: calc(0.25rem - 1px);
  }
  
  .card-img,
  .card-img-bottom {
	border-bottom-right-radius: calc(0.25rem - 1px);
	border-bottom-left-radius: calc(0.25rem - 1px);
  }
  
  .card-group > .card {
	margin-bottom: 0.75rem;
  }

  @media (min-width: 576px) {
	.card-group {
	  display: -ms-flexbox;
	  display: flex;
	  -ms-flex-flow: row wrap;
	  flex-flow: row wrap;
	}
	.card-group > .card {
	  -ms-flex: 1 0 0%;
	  flex: 1 0 0%;
	  margin-bottom: 0;
	}
	.card-group > .card + .card {
	  margin-left: 0;
	  border-left: 0;
	}
	.card-group > .card:not(:last-child) {
	  border-top-right-radius: 0;
	  border-bottom-right-radius: 0;
	}
	.card-group > .card:not(:last-child) .card-img-top,
	.card-group > .card:not(:last-child) .card-header {
	  border-top-right-radius: 0;
	}
	.card-group > .card:not(:last-child) .card-img-bottom,
	.card-group > .card:not(:last-child) .card-footer {
	  border-bottom-right-radius: 0;
	}
	.card-group > .card:not(:first-child) {
	  border-top-left-radius: 0;
	  border-bottom-left-radius: 0;
	}
	.card-group > .card:not(:first-child) .card-img-top,
	.card-group > .card:not(:first-child) .card-header {
	  border-top-left-radius: 0;
	}
	.card-group > .card:not(:first-child) .card-img-bottom,
	.card-group > .card:not(:first-child) .card-footer {
	  border-bottom-left-radius: 0;
	}
  }

  .btn-check {
	position: absolute;
	clip: rect(0, 0, 0, 0);
	pointer-events: none;
  }
  
  .btn-check[disabled] + .btn, .btn-check:disabled + .btn {
	pointer-events: none;
	-webkit-filter: none;
	filter: none;
	opacity: 0.65;
  }
  .btn {
	display: inline-block;
	font-weight: 400;
	line-height: 1.5;
	color: #fff;
	text-align: center;
	text-decoration: none;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  @media (prefers-reduced-motion: reduce) {
	.btn {
	  transition: none;
	}
  }
  
  .btn:hover {
	color: #fff;
  }
  
  .btn-check:focus + .btn, .btn:focus {
	outline: 0;
	box-shadow: 0 0 0 0.25rem rgba(55, 90, 127, 0.25);
  }
  
  .btn:disabled, .btn.disabled,
  fieldset:disabled .btn {
	pointer-events: none;
	opacity: 0.65;
  }
  
  .btn-primary {
	color: #fff;
	background-color: #375a7f;
	border-color: #375a7f;
  }
  
  .btn-primary:hover {
	color: #fff;
	background-color: #2f4d6c;
	border-color: #2c4866;
  }
  
  .btn-check:focus + .btn-primary, .btn-primary:focus {
	color: #fff;
	background-color: #2f4d6c;
	border-color: #2c4866;
	box-shadow: 0 0 0 0.25rem rgba(85, 115, 146, 0.5);
  }
  
  .btn-check:checked + .btn-primary,
  .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active,
  .show > .btn-primary.dropdown-toggle {
	color: #fff;
	background-color: #2c4866;
	border-color: #29445f;
  }
  
  .btn-check:checked + .btn-primary:focus,
  .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus,
  .show > .btn-primary.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(85, 115, 146, 0.5);
  }
  
  .btn-primary:disabled, .btn-primary.disabled {
	color: #fff;
	background-color: #375a7f;
	border-color: #375a7f;
  }
  
  .btn-secondary {
	color: #fff;
	background-color: #444;
	border-color: #444;
  }
  
  .btn-secondary:hover {
	color: #fff;
	background-color: #3a3a3a;
	border-color: #363636;
  }
  
  .btn-check:focus + .btn-secondary, .btn-secondary:focus {
	color: #fff;
	background-color: #3a3a3a;
	border-color: #363636;
	box-shadow: 0 0 0 0.25rem rgba(96, 96, 96, 0.5);
  }
  
  .btn-check:checked + .btn-secondary,
  .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active,
  .show > .btn-secondary.dropdown-toggle {
	color: #fff;
	background-color: #363636;
	border-color: #333333;
  }
  
  .btn-check:checked + .btn-secondary:focus,
  .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus,
  .show > .btn-secondary.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(96, 96, 96, 0.5);
  }
  
  .btn-secondary:disabled, .btn-secondary.disabled {
	color: #fff;
	background-color: #444;
	border-color: #444;
  }
  
  .btn-success {
	color: #fff;
	background-color: #00bc8c;
	border-color: #00bc8c;
  }
  
  .btn-success:hover {
	color: #fff;
	background-color: #00a077;
	border-color: #009670;
  }
  
  .btn-check:focus + .btn-success, .btn-success:focus {
	color: #fff;
	background-color: #00a077;
	border-color: #009670;
	box-shadow: 0 0 0 0.25rem rgba(38, 198, 157, 0.5);
  }
  
  .btn-check:checked + .btn-success,
  .btn-check:active + .btn-success, .btn-success:active, .btn-success.active,
  .show > .btn-success.dropdown-toggle {
	color: #fff;
	background-color: #009670;
	border-color: #008d69;
  }
  
  .btn-check:checked + .btn-success:focus,
  .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus,
  .show > .btn-success.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(38, 198, 157, 0.5);
  }
  
  .btn-success:disabled, .btn-success.disabled {
	color: #fff;
	background-color: #00bc8c;
	border-color: #00bc8c;
  }
  
  .btn-info {
	color: #fff;
	background-color: #3498db;
	border-color: #3498db;
  }
  
  .btn-info:hover {
	color: #fff;
	background-color: #2c81ba;
	border-color: #2a7aaf;
  }
  
  .btn-check:focus + .btn-info, .btn-info:focus {
	color: #fff;
	background-color: #2c81ba;
	border-color: #2a7aaf;
	box-shadow: 0 0 0 0.25rem rgba(82, 167, 224, 0.5);
  }
  
  .btn-check:checked + .btn-info,
  .btn-check:active + .btn-info, .btn-info:active, .btn-info.active,
  .show > .btn-info.dropdown-toggle {
	color: #fff;
	background-color: #2a7aaf;
	border-color: #2772a4;
  }
  
  .btn-check:checked + .btn-info:focus,
  .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus,
  .show > .btn-info.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(82, 167, 224, 0.5);
  }
  
  .btn-info:disabled, .btn-info.disabled {
	color: #fff;
	background-color: #3498db;
	border-color: #3498db;
  }
  
  .btn-warning {
	color: #fff;
	background-color: #f39c12;
	border-color: #f39c12;
  }
  
  .btn-warning:hover {
	color: #fff;
	background-color: #cf850f;
	border-color: #c27d0e;
  }
  
  .btn-check:focus + .btn-warning, .btn-warning:focus {
	color: #fff;
	background-color: #cf850f;
	border-color: #c27d0e;
	box-shadow: 0 0 0 0.25rem rgba(245, 171, 54, 0.5);
  }
  
  .btn-check:checked + .btn-warning,
  .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active,
  .show > .btn-warning.dropdown-toggle {
	color: #fff;
	background-color: #c27d0e;
	border-color: #b6750e;
  }
  
  .btn-check:checked + .btn-warning:focus,
  .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus,
  .show > .btn-warning.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(245, 171, 54, 0.5);
  }
  
  .btn-warning:disabled, .btn-warning.disabled {
	color: #fff;
	background-color: #f39c12;
	border-color: #f39c12;
  }
  
  .btn-danger {
	color: #fff;
	background-color: #e74c3c;
	border-color: #e74c3c;
  }
  
  .btn-danger:hover {
	color: #fff;
	background-color: #c44133;
	border-color: #b93d30;
  }
  
  .btn-check:focus + .btn-danger, .btn-danger:focus {
	color: #fff;
	background-color: #c44133;
	border-color: #b93d30;
	box-shadow: 0 0 0 0.25rem rgba(235, 103, 89, 0.5);
  }
  
  .btn-check:checked + .btn-danger,
  .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active,
  .show > .btn-danger.dropdown-toggle {
	color: #fff;
	background-color: #b93d30;
	border-color: #ad392d;
  }
  
  .btn-check:checked + .btn-danger:focus,
  .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus,
  .show > .btn-danger.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(235, 103, 89, 0.5);
  }
  
  .btn-danger:disabled, .btn-danger.disabled {
	color: #fff;
	background-color: #e74c3c;
	border-color: #e74c3c;
  }
  
  .btn-light {
	color: #fff;
	background-color: #adb5bd;
	border-color: #adb5bd;
  }
  
  .btn-light:hover {
	color: #fff;
	background-color: #939aa1;
	border-color: #8a9197;
  }
  
  .btn-check:focus + .btn-light, .btn-light:focus {
	color: #fff;
	background-color: #939aa1;
	border-color: #8a9197;
	box-shadow: 0 0 0 0.25rem rgba(185, 192, 199, 0.5);
  }
  
  .btn-check:checked + .btn-light,
  .btn-check:active + .btn-light, .btn-light:active, .btn-light.active,
  .show > .btn-light.dropdown-toggle {
	color: #fff;
	background-color: #8a9197;
	border-color: #82888e;
  }
  
  .btn-check:checked + .btn-light:focus,
  .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus,
  .show > .btn-light.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(185, 192, 199, 0.5);
  }
  
  .btn-light:disabled, .btn-light.disabled {
	color: #fff;
	background-color: #adb5bd;
	border-color: #adb5bd;
  }
  
  .btn-dark {
	color: #fff;
	background-color: #303030;
	border-color: #303030;
  }
  
  .btn-dark:hover {
	color: #fff;
	background-color: #292929;
	border-color: #262626;
  }
  
  .btn-check:focus + .btn-dark, .btn-dark:focus {
	color: #fff;
	background-color: #292929;
	border-color: #262626;
	box-shadow: 0 0 0 0.25rem rgba(79, 79, 79, 0.5);
  }
  
  .btn-check:checked + .btn-dark,
  .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active,
  .show > .btn-dark.dropdown-toggle {
	color: #fff;
	background-color: #262626;
	border-color: #242424;
  }
  
  .btn-check:checked + .btn-dark:focus,
  .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus,
  .show > .btn-dark.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(79, 79, 79, 0.5);
  }
  
  .btn-dark:disabled, .btn-dark.disabled {
	color: #fff;
	background-color: #303030;
	border-color: #303030;
  }
  
  .btn-outline-primary {
	color: #375a7f;
	border-color: #375a7f;
  }
  
  .btn-outline-primary:hover {
	color: #fff;
	background-color: #375a7f;
	border-color: #375a7f;
  }
  
  .btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
	box-shadow: 0 0 0 0.25rem rgba(55, 90, 127, 0.5);
  }
  
  .btn-check:checked + .btn-outline-primary,
  .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {
	color: #fff;
	background-color: #375a7f;
	border-color: #375a7f;
  }
  
  .btn-check:checked + .btn-outline-primary:focus,
  .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {
	box-shadow: 0 0 0 0.25rem rgba(55, 90, 127, 0.5);
  }
  
  .btn-outline-primary:disabled, .btn-outline-primary.disabled {
	color: #375a7f;
	background-color: transparent;
  }
  
  .btn-outline-secondary {
	color: #444;
	border-color: #444;
  }
  
  .btn-outline-secondary:hover {
	color: #fff;
	background-color: #444;
	border-color: #444;
  }
  
  .btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {
	box-shadow: 0 0 0 0.25rem rgba(68, 68, 68, 0.5);
  }
  
  .btn-check:checked + .btn-outline-secondary,
  .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {
	color: #fff;
	background-color: #444;
	border-color: #444;
  }
  
  .btn-check:checked + .btn-outline-secondary:focus,
  .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {
	box-shadow: 0 0 0 0.25rem rgba(68, 68, 68, 0.5);
  }
  
  .btn-outline-secondary:disabled, .btn-outline-secondary.disabled {
	color: #444;
	background-color: transparent;
  }
  
  .btn-outline-success {
	color: #00bc8c;
	border-color: #00bc8c;
  }
  
  .btn-outline-success:hover {
	color: #fff;
	background-color: #00bc8c;
	border-color: #00bc8c;
  }
  
  .btn-check:focus + .btn-outline-success, .btn-outline-success:focus {
	box-shadow: 0 0 0 0.25rem rgba(0, 188, 140, 0.5);
  }
  
  .btn-check:checked + .btn-outline-success,
  .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {
	color: #fff;
	background-color: #00bc8c;
	border-color: #00bc8c;
  }
  
  .btn-check:checked + .btn-outline-success:focus,
  .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {
	box-shadow: 0 0 0 0.25rem rgba(0, 188, 140, 0.5);
  }
  
  .btn-outline-success:disabled, .btn-outline-success.disabled {
	color: #00bc8c;
	background-color: transparent;
  }
  
  .btn-outline-info {
	color: #3498db;
	border-color: #3498db;
  }
  
  .btn-outline-info:hover {
	color: #fff;
	background-color: #3498db;
	border-color: #3498db;
  }
  
  .btn-check:focus + .btn-outline-info, .btn-outline-info:focus {
	box-shadow: 0 0 0 0.25rem rgba(52, 152, 219, 0.5);
  }
  
  .btn-check:checked + .btn-outline-info,
  .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {
	color: #fff;
	background-color: #3498db;
	border-color: #3498db;
  }
  
  .btn-check:checked + .btn-outline-info:focus,
  .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {
	box-shadow: 0 0 0 0.25rem rgba(52, 152, 219, 0.5);
  }
  
  .btn-outline-info:disabled, .btn-outline-info.disabled {
	color: #3498db;
	background-color: transparent;
  }
  
  .btn-outline-warning {
	color: #f39c12;
	border-color: #f39c12;
  }
  
  .btn-outline-warning:hover {
	color: #fff;
	background-color: #f39c12;
	border-color: #f39c12;
  }
  
  .btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {
	box-shadow: 0 0 0 0.25rem rgba(243, 156, 18, 0.5);
  }
  
  .btn-check:checked + .btn-outline-warning,
  .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {
	color: #fff;
	background-color: #f39c12;
	border-color: #f39c12;
  }
  
  .btn-check:checked + .btn-outline-warning:focus,
  .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {
	box-shadow: 0 0 0 0.25rem rgba(243, 156, 18, 0.5);
  }
  
  .btn-outline-warning:disabled, .btn-outline-warning.disabled {
	color: #f39c12;
	background-color: transparent;
  }
  
  .btn-outline-danger {
	color: #e74c3c;
	border-color: #e74c3c;
  }
  
  .btn-outline-danger:hover {
	color: #fff;
	background-color: #e74c3c;
	border-color: #e74c3c;
  }
  
  .btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {
	box-shadow: 0 0 0 0.25rem rgba(231, 76, 60, 0.5);
  }
  
  .btn-check:checked + .btn-outline-danger,
  .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {
	color: #fff;
	background-color: #e74c3c;
	border-color: #e74c3c;
  }
  
  .btn-check:checked + .btn-outline-danger:focus,
  .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {
	box-shadow: 0 0 0 0.25rem rgba(231, 76, 60, 0.5);
  }
  
  .btn-outline-danger:disabled, .btn-outline-danger.disabled {
	color: #e74c3c;
	background-color: transparent;
  }
  
  .btn-outline-light {
	color: #adb5bd;
	border-color: #adb5bd;
  }
  
  .btn-outline-light:hover {
	color: #fff;
	background-color: #adb5bd;
	border-color: #adb5bd;
  }
  
  .btn-check:focus + .btn-outline-light, .btn-outline-light:focus {
	box-shadow: 0 0 0 0.25rem rgba(173, 181, 189, 0.5);
  }
  
  .btn-check:checked + .btn-outline-light,
  .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {
	color: #fff;
	background-color: #adb5bd;
	border-color: #adb5bd;
  }
  
  .btn-check:checked + .btn-outline-light:focus,
  .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {
	box-shadow: 0 0 0 0.25rem rgba(173, 181, 189, 0.5);
  }
  
  .btn-outline-light:disabled, .btn-outline-light.disabled {
	color: #adb5bd;
	background-color: transparent;
  }
  
  .btn-outline-dark {
	color: #303030;
	border-color: #303030;
  }
  
  .btn-outline-dark:hover {
	color: #fff;
	background-color: #303030;
	border-color: #303030;
  }
  
  .btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {
	box-shadow: 0 0 0 0.25rem rgba(48, 48, 48, 0.5);
  }
  
  .btn-check:checked + .btn-outline-dark,
  .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {
	color: #fff;
	background-color: #303030;
	border-color: #303030;
  }
  
  .btn-check:checked + .btn-outline-dark:focus,
  .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {
	box-shadow: 0 0 0 0.25rem rgba(48, 48, 48, 0.5);
  }
  
  .btn-outline-dark:disabled, .btn-outline-dark.disabled {
	color: #303030;
	background-color: transparent;
  }
  
  .btn-link {
	font-weight: 400;
	color: #00bc8c;
	text-decoration: underline;
  }
  
  .btn-link:hover {
	color: #009670;
  }
  
  .btn-link:disabled, .btn-link.disabled {
	color: #888;
  }
  
  .btn-lg, .btn-group-lg > .btn {
	padding: 0.5rem 1rem;
	font-size: 1.25rem;
	border-radius: 0.3rem;
  }
  
  .btn-sm, .btn-group-sm > .btn {
	padding: 0.25rem 0.5rem;
	font-size: 0.875rem;
	border-radius: 0.2rem;
  }

  .dropup,
.dropend,
.dropdown,
.dropstart {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #fff;
  text-align: left;
  list-style: none;
  background-color: #222;
  background-clip: padding-box;
  border: 1px solid #444;
  border-radius: 0.25rem;
}

.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: 0.125rem;
}

.dropdown-menu-start {
  --bs-position: start;
}

.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}

.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}

@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}

@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}

@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}

@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}

.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}

.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}

.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}

.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}

.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}

.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}

.dropstart .dropdown-toggle::after {
  display: none;
}

.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}

.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #444;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #fff;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-item:hover, .dropdown-item:focus {
  color: #fff;
  background-color: #375a7f;
}

.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #375a7f;
}

.dropdown-item.disabled, .dropdown-item:disabled {
  color: #adb5bd;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #888;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1rem;
  color: #fff;
}

.dropdown-menu-dark {
  color: #dee2e6;
  background-color: #303030;
  border-color: #444;
}

.dropdown-menu-dark .dropdown-item {
  color: #dee2e6;
}

.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
}

.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {
  color: #fff;
  background-color: #375a7f;
}

.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {
  color: #adb5bd;
}

.dropdown-menu-dark .dropdown-divider {
  border-color: #444;
}

.dropdown-menu-dark .dropdown-item-text {
  color: #dee2e6;
}

.dropdown-menu-dark .dropdown-header {
  color: #adb5bd;
}
label {
	display: inline-block;
  }

  .form-label {
	margin-bottom: 0.5rem;
  }
  
  .col-form-label {
	padding-top: calc(0.375rem + 1px);
	padding-bottom: calc(0.375rem + 1px);
	margin-bottom: 0;
	font-size: inherit;
	line-height: 1.5;
  }
  
  .col-form-label-lg {
	padding-top: calc(0.5rem + 1px);
	padding-bottom: calc(0.5rem + 1px);
	font-size: 1.25rem;
  }
  
  .col-form-label-sm {
	padding-top: calc(0.25rem + 1px);
	padding-bottom: calc(0.25rem + 1px);
	font-size: 0.875rem;
  }
  
  .form-text {
	margin-top: 0.25rem;
	font-size: 0.875em;
	color: #888;
  }
  
  .form-control {
	display: block;
	width: 100%;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #303030;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #222;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border-radius: 0.25rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  @media (prefers-reduced-motion: reduce) {
	.form-control {
	  transition: none;
	}
  }
  
  .form-control[type="file"] {
	overflow: hidden;
  }
  
  .form-control[type="file"]:not(:disabled):not([readonly]) {
	cursor: pointer;
  }
  
  .form-control:focus {
	color: #303030;
	background-color: #fff;
	border-color: #9badbf;
	outline: 0;
	box-shadow: 0 0 0 0.25rem rgba(55, 90, 127, 0.25);
  }
  
  .form-control::-webkit-date-and-time-value {
	height: 1.5em;
  }
  
  .form-control::-webkit-input-placeholder {
	color: #888;
	opacity: 1;
  }
  
  .form-control::-moz-placeholder {
	color: #888;
	opacity: 1;
  }
  
  .form-control:-ms-input-placeholder {
	color: #888;
	opacity: 1;
  }
  
  .form-control::-ms-input-placeholder {
	color: #888;
	opacity: 1;
  }
  
  .form-control::placeholder {
	color: #888;
	opacity: 1;
  }
  
  .form-control:disabled, .form-control[readonly] {
	background-color: #ebebeb;
	opacity: 1;
  }
  
  .form-control::file-selector-button {
	padding: 0.375rem 0.75rem;
	margin: -0.375rem -0.75rem;
	-webkit-margin-end: 0.75rem;
	-moz-margin-end: 0.75rem;
	margin-inline-end: 0.75rem;
	color: #fff;
	background-color: #444;
	pointer-events: none;
	border-color: inherit;
	border-style: solid;
	border-width: 0;
	border-inline-end-width: 1px;
	border-radius: 0;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  @media (prefers-reduced-motion: reduce) {
	.form-control::file-selector-button {
	  transition: none;
	}
  }
  
  .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
	background-color: #414141;
  }
  
  .form-control::-webkit-file-upload-button {
	padding: 0.375rem 0.75rem;
	margin: -0.375rem -0.75rem;
	-webkit-margin-end: 0.75rem;
	margin-inline-end: 0.75rem;
	color: #fff;
	background-color: #444;
	pointer-events: none;
	border-color: inherit;
	border-style: solid;
	border-width: 0;
	border-inline-end-width: 1px;
	border-radius: 0;
	-webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  @media (prefers-reduced-motion: reduce) {
	.form-control::-webkit-file-upload-button {
	  -webkit-transition: none;
	  transition: none;
	}
  }
  
  .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
	background-color: #414141;
  }
  
  .form-control-plaintext {
	display: block;
	width: 100%;
	padding: 0.375rem 0;
	margin-bottom: 0;
	line-height: 1.5;
	color: #fff;
	background-color: transparent;
	border: solid transparent;
	border-width: 1px 0;
  }
  
  .form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
	padding-right: 0;
	padding-left: 0;
  }
  
  .form-control-sm {
	min-height: calc(1.5em + 0.5rem + 2px);
	padding: 0.25rem 0.5rem;
	font-size: 0.875rem;
	border-radius: 0.2rem;
  }
  
  .form-control-sm::file-selector-button {
	padding: 0.25rem 0.5rem;
	margin: -0.25rem -0.5rem;
	-webkit-margin-end: 0.5rem;
	-moz-margin-end: 0.5rem;
	margin-inline-end: 0.5rem;
  }
  
  .form-control-sm::-webkit-file-upload-button {
	padding: 0.25rem 0.5rem;
	margin: -0.25rem -0.5rem;
	-webkit-margin-end: 0.5rem;
	margin-inline-end: 0.5rem;
  }
  
  .form-control-lg {
	min-height: calc(1.5em + 1rem + 2px);
	padding: 0.5rem 1rem;
	font-size: 1.25rem;
	border-radius: 0.3rem;
  }
  
  .form-control-lg::file-selector-button {
	padding: 0.5rem 1rem;
	margin: -0.5rem -1rem;
	-webkit-margin-end: 1rem;
	-moz-margin-end: 1rem;
	margin-inline-end: 1rem;
  }
  
  .form-control-lg::-webkit-file-upload-button {
	padding: 0.5rem 1rem;
	margin: -0.5rem -1rem;
	-webkit-margin-end: 1rem;
	margin-inline-end: 1rem;
  }
  
  textarea.form-control {
	min-height: calc(1.5em + 0.75rem + 2px);
  }
  
  textarea.form-control-sm {
	min-height: calc(1.5em + 0.5rem + 2px);
  }
  
  textarea.form-control-lg {
	min-height: calc(1.5em + 1rem + 2px);
  }
  
  .form-control-color {
	width: 3rem;
	height: auto;
	padding: 0.375rem;
  }
  
  .form-control-color:not(:disabled):not([readonly]) {
	cursor: pointer;
  }
  
  .form-control-color::-moz-color-swatch {
	height: 1.5em;
	border-radius: 0.25rem;
  }
  
  .form-control-color::-webkit-color-swatch {
	height: 1.5em;
	border-radius: 0.25rem;
  }
  
  .form-select {
	display: block;
	width: 100%;
	padding: 0.375rem 2.25rem 0.375rem 0.75rem;
	-moz-padding-start: calc(0.75rem - 3px);
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #303030;
	background-color: #fff;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23303030' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-position: right 0.75rem center;
	background-size: 16px 12px;
	border: 1px solid #222;
	border-radius: 0.25rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
  }
  
  @media (prefers-reduced-motion: reduce) {
	.form-select {
	  transition: none;
	}
  }
  
  .form-select:focus {
	border-color: #9badbf;
	outline: 0;
	box-shadow: 0 0 0 0.25rem rgba(55, 90, 127, 0.25);
  }
  
  .form-select[multiple], .form-select[size]:not([size="1"]) {
	padding-right: 0.75rem;
	background-image: none;
  }
  
  .form-select:disabled {
	background-color: #ebebeb;
  }
  
  .form-select:-moz-focusring {
	color: transparent;
	text-shadow: 0 0 0 #303030;
  }
  
  .form-select-sm {
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	padding-left: 0.5rem;
	font-size: 0.875rem;
	border-radius: 0.2rem;
  }
  
  .form-select-lg {
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 1rem;
	font-size: 1.25rem;
	border-radius: 0.3rem;
  }
  
  .form-check {
	display: block;
	min-height: 1.5rem;
	padding-left: 1.5em;
	margin-bottom: 0.125rem;
  }
  
  .form-check .form-check-input {
	float: left;
	margin-left: -1.5em;
  }
  
  .form-check-input {
	width: 1em;
	height: 1em;
	margin-top: 0.25em;
	vertical-align: top;
	background-color: #fff;
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	border: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	-webkit-print-color-adjust: exact;
	color-adjust: exact;
  }
  
  .form-check-input[type="checkbox"] {
	border-radius: 0.25em;
  }
  
  .form-check-input[type="radio"] {
	border-radius: 50%;
  }
  
  .form-check-input:active {
	-webkit-filter: brightness(90%);
	filter: brightness(90%);
  }
  
  .form-check-input:focus {
	border-color: #9badbf;
	outline: 0;
	box-shadow: 0 0 0 0.25rem rgba(55, 90, 127, 0.25);
  }
  
  .form-check-input:checked {
	background-color: #375a7f;
	border-color: #375a7f;
  }
  
  .form-check-input:checked[type="checkbox"] {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  }
  
  .form-check-input:checked[type="radio"] {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
  }
  
  .form-check-input[type="checkbox"]:indeterminate {
	background-color: #375a7f;
	border-color: #375a7f;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
  }
  
  .form-check-input:disabled {
	pointer-events: none;
	-webkit-filter: none;
	filter: none;
	opacity: 0.5;
  }
  
  .form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
	opacity: 0.5;
  }
  
  .form-switch {
	padding-left: 2.5em;
  }
  
  .form-switch .form-check-input {
	width: 2em;
	margin-left: -2.5em;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
	background-position: left center;
	border-radius: 2em;
	transition: background-position 0.15s ease-in-out;
  }
  
  @media (prefers-reduced-motion: reduce) {
	.form-switch .form-check-input {
	  transition: none;
	}
  }
  
  .form-switch .form-check-input:focus {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%239badbf'/%3e%3c/svg%3e");
  }
  
  .form-switch .form-check-input:checked {
	background-position: right center;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }
  
  .form-check-inline {
	display: inline-block;
	margin-right: 1rem;
  }
  
  .btn-check {
	position: absolute;
	clip: rect(0, 0, 0, 0);
	pointer-events: none;
  }
  
  .btn-check[disabled] + .btn, .btn-check:disabled + .btn {
	pointer-events: none;
	-webkit-filter: none;
	filter: none;
	opacity: 0.65;
  }
  
  .form-range {
	width: 100%;
	height: 1.5rem;
	padding: 0;
	background-color: transparent;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
  }
  
  .form-range:focus {
	outline: 0;
  }
  
  .form-range:focus::-webkit-slider-thumb {
	box-shadow: 0 0 0 1px #222, 0 0 0 0.25rem rgba(55, 90, 127, 0.25);
  }
  
  .form-range:focus::-moz-range-thumb {
	box-shadow: 0 0 0 1px #222, 0 0 0 0.25rem rgba(55, 90, 127, 0.25);
  }
  
  .form-range::-moz-focus-outer {
	border: 0;
  }
  
  .form-range::-webkit-slider-thumb {
	width: 1rem;
	height: 1rem;
	margin-top: -0.25rem;
	background-color: #375a7f;
	border: 0;
	border-radius: 1rem;
	-webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	-webkit-appearance: none;
	appearance: none;
  }
  
  @media (prefers-reduced-motion: reduce) {
	.form-range::-webkit-slider-thumb {
	  -webkit-transition: none;
	  transition: none;
	}
  }
  
  .form-range::-webkit-slider-thumb:active {
	background-color: #c3ced9;
  }
  
  .form-range::-webkit-slider-runnable-track {
	width: 100%;
	height: 0.5rem;
	color: transparent;
	cursor: pointer;
	background-color: #dee2e6;
	border-color: transparent;
	border-radius: 1rem;
  }
  
  .form-range::-moz-range-thumb {
	width: 1rem;
	height: 1rem;
	background-color: #375a7f;
	border: 0;
	border-radius: 1rem;
	-moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	-moz-appearance: none;
	appearance: none;
  }
  
  @media (prefers-reduced-motion: reduce) {
	.form-range::-moz-range-thumb {
	  -moz-transition: none;
	  transition: none;
	}
  }
  
  .form-range::-moz-range-thumb:active {
	background-color: #c3ced9;
  }
  
  .form-range::-moz-range-track {
	width: 100%;
	height: 0.5rem;
	color: transparent;
	cursor: pointer;
	background-color: #dee2e6;
	border-color: transparent;
	border-radius: 1rem;
  }
  
  .form-range:disabled {
	pointer-events: none;
  }
  
  .form-range:disabled::-webkit-slider-thumb {
	background-color: #adb5bd;
  }
  
  .form-range:disabled::-moz-range-thumb {
	background-color: #adb5bd;
  }
  
  .form-floating {
	position: relative;
  }
  
  .form-floating > .form-control,
  .form-floating > .form-select {
	height: calc(3.5rem + 2px);
	line-height: 1.25;
  }
  
  .form-floating > label {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	padding: 1rem 0.75rem;
	pointer-events: none;
	border: 1px solid transparent;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	transition: opacity 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
	transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
	transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
  }
  
  @media (prefers-reduced-motion: reduce) {
	.form-floating > label {
	  transition: none;
	}
  }
  
  .form-floating > .form-control {
	padding: 1rem 0.75rem;
  }
  
  .form-floating > .form-control::-webkit-input-placeholder {
	color: transparent;
  }
  
  .form-floating > .form-control::-moz-placeholder {
	color: transparent;
  }
  
  .form-floating > .form-control:-ms-input-placeholder {
	color: transparent;
  }
  
  .form-floating > .form-control::-ms-input-placeholder {
	color: transparent;
  }
  
  .form-floating > .form-control::placeholder {
	color: transparent;
  }
  
  .form-floating > .form-control:not(:-moz-placeholder-shown) {
	padding-top: 1.625rem;
	padding-bottom: 0.625rem;
  }
  
  .form-floating > .form-control:not(:-ms-input-placeholder) {
	padding-top: 1.625rem;
	padding-bottom: 0.625rem;
  }
  
  .form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {
	padding-top: 1.625rem;
	padding-bottom: 0.625rem;
  }
  
  .form-floating > .form-control:-webkit-autofill {
	padding-top: 1.625rem;
	padding-bottom: 0.625rem;
  }
  
  .form-floating > .form-select {
	padding-top: 1.625rem;
	padding-bottom: 0.625rem;
  }
  
  .form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
	opacity: 0.65;
	transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  
  .form-floating > .form-control:not(:-ms-input-placeholder) ~ label {
	opacity: 0.65;
	transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  
  .form-floating > .form-control:focus ~ label,
  .form-floating > .form-control:not(:placeholder-shown) ~ label,
  .form-floating > .form-select ~ label {
	opacity: 0.65;
	-webkit-transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
	transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  
  .form-floating > .form-control:-webkit-autofill ~ label {
	opacity: 0.65;
	-webkit-transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
	transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  .input-group {
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-ms-flex-align: stretch;
	align-items: stretch;
	width: 100%;
  }
  
  .input-group > .form-control,
  .input-group > .form-select {
	position: relative;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	width: 1%;
	min-width: 0;
  }
  
  .input-group > .form-control:focus,
  .input-group > .form-select:focus {
	z-index: 3;
  }
  
  .input-group .btn {
	position: relative;
	z-index: 2;
  }
  
  .input-group .btn:focus {
	z-index: 3;
  }
  
  .input-group-text {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #adb5bd;
	text-align: center;
	white-space: nowrap;
	background-color: #444;
	border: 1px solid #222;
	border-radius: 0.25rem;
  }
  
  .input-group-lg > .form-control,
  .input-group-lg > .form-select,
  .input-group-lg > .input-group-text,
  .input-group-lg > .btn {
	padding: 0.5rem 1rem;
	font-size: 1.25rem;
	border-radius: 0.3rem;
  }
  
  .input-group-sm > .form-control,
  .input-group-sm > .form-select,
  .input-group-sm > .input-group-text,
  .input-group-sm > .btn {
	padding: 0.25rem 0.5rem;
	font-size: 0.875rem;
	border-radius: 0.2rem;
  }
  
  .input-group-lg > .form-select,
  .input-group-sm > .form-select {
	padding-right: 3rem;
  }
  
  .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
  }
  
  .input-group.has-validation > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group.has-validation > .dropdown-toggle:nth-last-child(n + 4) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
  }
  
  .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
	margin-left: -1px;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
  }
`;
