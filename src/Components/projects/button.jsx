import React from 'react'

const button = () => {
    const body = document.querySelector("body");
const btnKnow = body.querySelector(".btnKnow");
const btnClose = body.querySelector(".btnClose");

function openBody(){
    body.classList.add("open");
}

function closeBody(){
    body.classList.remove("open");
}

btnKnow.addEventListener("click", openBody);

btnClose.addEventListener("click", closeBody);
  return (
    <div>
        <button class="btnKnow">sell</button>
	<button class="btnClose"></button>
	<div class="profile_card-wrapper">
		<div class="user_img">
			<img src="https://d3iw72m71ie81c.cloudfront.net/female-19.jpg" alt="Jane Smith" />
		</div>
		<div class="user_details">
			<p class="user_name">Nate Smith</p>
			<p class="user_designation">UI Designer, Developer at XYZ Studios</p>
			<p class="user_location"><i class="fa fa-map-marker"></i> New York, USA</p>
		</div>
		<ul class="user_involvement">
			<li>
				<strong>949</strong>
				<small>Contacts</small>
			</li>
			<li>
				<strong>1,393</strong>
				<small>Stories</small>
			</li>
			<li>
				<strong>28</strong>
				<small>Groups</small>
			</li>
		</ul>
		<ul class="user_social-presence">
			<li>
				<a href="#" class="facebook">
					<i class="fa fa-facebook"></i>
				</a>
			</li>
			<li>
				<a href="#" class="twitter">
					<i class="fa fa-twitter"></i>
				</a>
			</li>
			<li>
				<a href="#" class="google-plus">
					<i class="fa fa-google-plus"></i>
				</a>
			</li>
			<li>
				<a href="#" class="instagram">
					<i class="fa fa-instagram"></i>
				</a>
			</li>
			<li>
				<a href="#" class="pinterest">
					<i class="fa fa-pinterest"></i>
				</a>
			</li>
		</ul>
		<div class="user_contact-btn">
			<button>Message</button>
			<button>Follow</button>
		</div>
	</div>
    </div>
  )
}

export default button