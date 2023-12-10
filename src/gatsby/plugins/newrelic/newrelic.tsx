import React from "react";
import { proAndSpaAgent as agent } from "./browser-agents";

export const newrelicHeadScript = () => {
	const options = {
		accountId: process.env.NEWRELIC_ACCOUNT_ID,
		trustKey: process.env.NEWRELIC_TRUST_KEY,
		agentID: process.env.NEWRELIC_AGENT_ID,
		licenseKey: process.env.NEWRELIC_LICENSE_KEY,
		applicationID: process.env.NEWRELIC_APPLICATION_ID,
		beacon: "bam.nr-data.net",
		errorBeacon: "bam.nr-data.net",
		instrumentationType: "proAndSPA", // Options are 'lite', 'pro', 'proAndSPA'
	};

	const configs = `
    	;NREUM.loader_config={accountID:"${options.accountId}",trustKey:"${options.trustKey}",agentID:"${options.agentID}",licenseKey:"${options.licenseKey}",applicationID:"${options.applicationID}"}
    	;NREUM.info={beacon:"${options.beacon}",errorBeacon:"${options.errorBeacon}",licenseKey:"${options.licenseKey}",applicationID:"${options.applicationID}",sa:1}
  	`;

	return (
		<script
			key="newrelic-head-script"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			dangerouslySetInnerHTML={{
				__html: agent + configs,
			}}
		/>
	);
};
