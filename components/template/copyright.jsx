import Link from "@text/link";
import Logo from "@svg/logo";

const Copyright = () => (
	<div className="p-2">
		<div>
			<Link href="/" classNames="text-2xl hover:opacity-60">
				<Logo
					classNames="flex content-center items-center justify-center"
					width={25}
					height={25}
					index={0}
				>
					ljtech
				</Logo>
			</Link>
		</div>
		<p className="font-semibold">©{new Date().getFullYear()} powered by ☕</p>
		<div className="flex flex-wrap">
			<Link classNames="hover:text-purple-500" href="/tos">
				Terms of Service
			</Link>
			&nbsp;|&nbsp;
			<Link classNames="hover:text-purple-500" href="/policy">
				Privacy Policy
			</Link>
		</div>
	</div>
);

export default Copyright;
