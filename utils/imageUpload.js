import imageKit from "../config/imageKit";
import {
    v4 as uuid
} from 'uuid';

const imageUpload = async (user, file) => {
    try {
        imageKit.upload({
            file,
            fileName: `${user._id}-${user.name}-${uuid()}`,
            extensions: [{
                name: "google-auto-tagging",
                maxTags: 5,
                minConfidence: 95
            }]
        }, (err, result) => {
            if (err) {
                console.log(err)
                throw new Error({
                    message: "Internal Server Error",
                    statusCode: 500
                })
            } else {
                let link = result.url;
                let tags = result['AITags'].map(a => a.name)
                return {
                    link, tags
                }
            }
        })

    } catch {
        throw new Error({
            message: "Internal Server Error",
            statusCode: 500
        })
    }
}

export default imageUpload