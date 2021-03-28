import Link from "../text/link";
import Logo from "@svg/logo";

const Copyright = () => (
	<div className="p-2">
		<div>
			<Link href="/" classNames="text-2xl transition hover:opacity-80">
				<Logo
					classNames="flex content-center items-center justify-center"
					type="green"
					width={25}
					height={25}
				>
					ljtech
				</Logo>
			</Link>
		</div>
		<p className="font-semibold">©{new Date().getFullYear()} powered by ☕</p>
		<div className="flex flex-wrap">
			<Link classNames="transition hover:text-purple-500" href="/tos">
				Terms of Service
			</Link>
			&nbsp;|&nbsp;
			<Link classNames="transition hover:text-purple-500" href="/policy">
				Privacy Policy
			</Link>
		</div>
	</div>
);

export default Copyright;
