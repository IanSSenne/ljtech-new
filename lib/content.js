import Social from "@svg/social";

// website directory
export const pages = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Blog",
		href: "/blog",
	},
	{
		name: "Contact",
		href: "/contact",
	},
	{
		name: "FAQ",
		href: "/faq",
	},
	{
		name: "Portfolio",
		href: "/portfolio",
	},
	{
		name: "Pricing",
		href: "/pricing",
	},
	{
		name: "Survey",
		href: "/survey",
	},
];

export const about = [
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Blog",
		href: "/blog",
	},
	{
		name: "FAQ",
		href: "/faq",
	},
	{
		name: "Contact",
		href: "/contact",
	},
	{
		name: "Survey",
		href: "/survey",
	},
];



// portfolio page tabs
export const tabs = ["Apps", "Art", "Components", "Games", "All"];


// portfolio page contents
export const apps = [
	{
		id: "still-water-stables",
		name: "Still Water Stables",
		href: "/",
		src: "../800x600.png",
		content: "Yay this works, now I can type stuff here to describe what my application or thing is woo.",
	},
	{
		id: "pipes-up",
		name: "Pipes Up",
		href: "/",
		src: "../800x600.png",
		content: "Yay this works, now I can type stuff here to describe what my application or thing is woo.",
	},
];
export const art = [
	{
		id: "olsons",
		name: "Olson's Recycling & Demolition",
		href: "/",
		src: "../800x600.png",
		content: "Yay this works, now I can type stuff here to describe what my application or thing is woo.",
	},
	{
		id: "ljtech",
		name: "ljtech",
		href: "/",
		src: "../800x600.png",
		content: "Yay this works, now I can type stuff here to describe what my application or thing is woo.",
	},
];
export const games = [
	{
		id: "concentrate",
		name: "🃏 Concentrate",
		href: "/",
		src: "../800x600.png",
		content: "Yay this works, now I can type stuff here to describe what my application or thing is woo.",
	},
	{
		id: "minesweeper",
		name: "💣 Minesweeper",
		href: "/",
		src: "../800x600.png",
		content: "Yay this works, now I can type stuff here to describe what my application or thing is woo.",
	},
	{
		id: "twenty-one",
		name: "♠ Twenty-One",
		href: "/",
		src: "../800x600.png",
		content: "Yay this works, now I can type stuff here to describe what my application or thing is woo.",
	},
];
export const components = [
	{
		id: "alerts",
		name: "Alerts",
		href: "/",
		src: "../800x600.png",
		content: "Yay this works, now I can type stuff here to describe what my application or thing is woo.",
	},
	{
		id: "buttons",
		name: "Buttons",
		href: "/",
		src: "../800x600.png",
		content: "Yay this works, now I can type stuff here to describe what my application or thing is woo.",
	},
	{
		id: "dropdowns",
		name: "Dropdowns",
		href: "/",
		src: "../800x600.png",
		content: "Yay this works, now I can type stuff here to describe what my application or thing is woo.",
	},
	{
		id: "toggles",
		name: "Toggles",
		href: "/",
		src: "../800x600.png",
		content: "Yay this works, now I can type stuff here to describe what my application or thing is woo.",
	},
];

export const all = apps.concat(art, games, components);

// work related links
export const work = [
	{
		name: "Plans & Pricing",
		href: "/pricing",
	},
	{
		name: "Apps",
		href: "/portfolio",
	},
	{
		name: "Art",
		href: "/portfolio",
	},
	{
		name: "Components",
		href: "/portfolio",
	},
	{
		name: "Games",
		href: "/portfolio",
	},
];

// social platform links
export const socials = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/ljtechdotca",
		icon: <Social type="facebook" width={38} height={38} />,
	},
	{
		name: "Github",
		href: "https://github.com/landonjohnsontechnologies",
		icon: <Social type="github" width={38} height={38} />,
	},
	{
		name: "Linkedin",
		href: "https://www.linkedin.com/in/ljtechnology/",
		icon: <Social type="linkedin" width={38} height={38} />,
	},
	{
		name: "Twitch",
		href: "https://www.twitch.tv/ljtechdotca",
		icon: <Social type="twitch" width={38} height={38} />,
	},
	{
		name: "Twitter",
		href: "https://twitter.com/ljtechnology",
		icon: <Social type="twitter" width={38} height={38} />,
	},
];

// survey page steps
export const actions = ["1", "2", "3", "✔"];
