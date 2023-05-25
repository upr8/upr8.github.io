import { useStaticQuery, graphql } from "gatsby";
import { SiteMetadata } from "../gatsby/types";

export const useSiteMetadata = (): SiteMetadata => {
	const { site } = useStaticQuery(
		graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        siteUrl
                        favIcon
                    }
                }
        }`,
	);
	return site.siteMetadata;
};
