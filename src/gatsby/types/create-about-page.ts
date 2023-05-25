import * as types from "../types";

export default interface CreateAboutPageQueryResult {
	data?: {
		allMdx: {
			edges?: Array<types.Edge>;
		};
	};
	errors?: string;
}
