import React, { type ReactNode } from "react";

interface ContentCardProps {

	leftColumn: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	tags?: ReactNode;
	footer?: ReactNode;
	className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
	leftColumn,
	title,
	description,
	tags,
	footer,
	className = "",
}) => {
	return (
		<article className={`mt-6 mb-6 @md:flex @md:gap-6 ${className}`}>
			<div className="@md:min-w-[120px]">{leftColumn}</div>
			<div className="flex-1 mt-2 @md:mt-0">
				{title}
				<div className="space-y-3">
					{description && <div>{description}</div>}
					{tags && <div>{tags}</div>}
				</div>
				{footer && <div className="mt-3">{footer}</div>}
			</div>
		</article>
	);
};

export default ContentCard;
