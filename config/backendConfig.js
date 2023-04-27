import ThirdPartyEmailPasswordNode from 'supertokens-node/recipe/thirdpartyemailpassword'
import SessionNode from 'supertokens-node/recipe/session'
import {
    appInfo
} from './appInfo'
import {
    TypeInput
} from "supertokens-node/types";

export const backendConfig = ()=> {
    return {
        framework: "express",
        supertokens: {
            connectionURI: process.env.SUPERTOKENS_URI,
            apiKey: process.env.SUPERTOKENS_API,
        },
        appInfo,
        recipeList: [
            ThirdPartyEmailPasswordNode.init({
                providers: [
                    ThirdPartyEmailPasswordNode.Google({
                        clientId: process.env.GOOGLE_CLIENT_ID,
                        clientSecret: process.env.GOOGLE_CLIENT_SECRET
                    }),
                ],
            }),
            SessionNode.init(),
        ],
        isInServerlessEnv: true,
    }
}