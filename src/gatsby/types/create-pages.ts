import * as types from "../types";

export default interface CreatePagesQueryResult {
	data?: {
		allMdx: {
			edges?: Array<types.Edge>;
		};
	};
	errors?: string;
}
