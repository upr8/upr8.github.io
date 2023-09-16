import * as types from "../types";

export interface CreatePageAllMdx {
	allMdx: {
		edges?: Array<types.Edge>;
	};
}

export default interface CreatePagesQueryResult {
	data?: CreatePageAllMdx;
	errors?: string;
}
