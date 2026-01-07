// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Post Stroke";
export const SITE_DESCRIPTION =
  "Nonprofit Making Stroke Recovery Accessible to Everyone";
export const SITE_OG_IMG = "/assets/images/open-graph-v2.jpg";
export const donate_url =
  "https://www.paypal.com/donate?campaign_id=GUHLWVN5DKQC2";
export const patrion_url = "https://www.patreon.com/poststroke";

// Fundraiser
const fundraiser_goal = 5000;
const fundraiser_raised = 6403;

export const formated_fundraiser_goal = fundraiser_goal.toLocaleString("en-US");

export const formated_fundraiser_raised =
  fundraiser_raised.toLocaleString("en-US");

const calculatePercentage = (
  fundraiser_raised: number,
  fundraiser_goal: number,
) => {
  if (fundraiser_goal === 0) {
    throw new Error("Total cannot be zero.");
  }
  return (fundraiser_raised / fundraiser_goal) * 100;
};

export const fundraiser_raised_percent = calculatePercentage(
  fundraiser_raised,
  fundraiser_goal,
);
