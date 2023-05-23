import * as React from "react";
import { graphql, PageProps } from "gatsby";
import MdxContainer from "../components/mdx-container";
import Layout from "../components/layout";

interface Props extends PageProps {
	data: Queries.Query;
	childern: React.ReactNode;
}

const AboutMeTemplate: React.FC<Props> = ({ data, children }) => {
	const post = data.mdx;

	return (
		<Layout>
			<MdxContainer>{children}</MdxContainer>
		</Layout>
	);
};

export default AboutMeTemplate;

export const query = graphql`
    query ($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                lang
                desc
            }
            fields {
                slug
            }
        }
    }
`;
