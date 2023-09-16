import * as React from "react";
import { useSearchBox } from "react-instantsearch-hooks-web";

interface Props {
	className: string;
	onFocus: any;
	onChange: any;
}

const SearchBox: React.FC<Props> = ({ className, onFocus, onChange }) => {
	const { query, refine } = useSearchBox();

	return (
		<form className={className}>
			<input
				className="SearchInput"
				type="text"
				placeholder="Search"
				aria-label="Search"
				onChange={(e) => {
					refine(e.target.value);
					onChange(e.target.value);
				}}
				value={query}
				onFocus={onFocus}
			/>
		</form>
	);
};

export default SearchBox;
