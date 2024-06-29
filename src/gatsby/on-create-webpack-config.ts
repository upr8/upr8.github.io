// https://github.com/alxshelepenok/gatsby-starter-lumen/blob/f1d83e4ad2f5a8aa01f01fcf11b5cc2f6f376711/internal/gatsby/on-create-webpack-config.ts

import path from "node:path";

import type { CreateWebpackConfigArgs } from "gatsby";
import type { CompilerOptions } from "typescript";

import { compilerOptions } from "../../tsconfig.json";

const onCreateWebpackConfig = (
	(options: Pick<CompilerOptions, "paths">) =>
	({ actions }: CreateWebpackConfigArgs) => {
		actions.setWebpackConfig({
			resolve: {
				alias: Object.entries(options.paths || []).reduce(
					(aliases, [name, [target]]) => ({
						...aliases,
						[name]: path.resolve(target),
					}),
					{},
				),
			},
		});
	}
)(compilerOptions);

export { onCreateWebpackConfig };
