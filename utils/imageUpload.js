import imageKit from "../config/imageKit";
import {
    v4 as uuid
} from 'uuid';

const imageUpload =  (user, file, next) => {
    try {
        imageKit.upload({
            file,
            fileName: `${user._id}-${user.name}-${uuid()}`,
            extensions: [{
                name: "google-auto-tagging",
                maxTags: 5,
                minConfidence: 90
            }]
        }, async (err, result) => {
            console.log(err, result)
            if (err) {
                console.log(err)
                throw new Error({
                    message: "Internal Server Error",
                    statusCode: 500
                })
            } else {
                let link = result.url;
                let tags = result['AITags'] ? result['AITags'].map(a => a.name) : []
                return await next(link, tags)

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