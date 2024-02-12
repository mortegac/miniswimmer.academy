// import { Amplify, API, graphqlOperation, Storage } from "aws-amplify";
import { Amplify } from "aws-amplify";

export const config = {
  aws_project_region: "us-east-2",
  aws_appsync_graphqlEndpoint: "",
  aws_appsync_region: "us-east-2",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "",
  aws_content_delivery_bucket: "",
  aws_content_delivery_bucket_region: "us-east-2",
  aws_content_delivery_url: "",
  aws_cognito_identity_pool_id: "",
  aws_cognito_region: "us-east-2",
  aws_user_pools_id: "",
  aws_user_pools_web_client_id: "",
  oauth: {},
  aws_cognito_username_attributes: ["EMAIL"],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ["EMAIL"],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: ["SMS"],
  aws_cognito_password_protection_settings: {
    "passwordPolicyMinLength": 8,
    "passwordPolicyCharacters": []
  },
  aws_cognito_verification_mechanisms: ["EMAIL"]
}

Amplify.configure(config);
export default Amplify;

// export { API, graphqlOperation, Storage };
