import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div className="wrapAll clearfix">
        <div className="logo">
        <a href="/"><img src="public/img/logo.png" alt="logo" /></a>
        </div>
        <div className="navigation">
        <ul>
						<li><a href="#">Main page</a></li>
						<li><a href="#">Contents</a></li>
						<li><a href="#">Featured content</a></li>
					</ul>
					<h3>Interaction</h3>
					<ul>
						<li><a href="#">Help</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Portal</a></li>
					</ul>
					<h3>Interaction</h3>
					<ul>
						<li><a href="#">Help</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Portal</a></li>
					</ul>
				</div>
      </div>
    </div>
  );
}
