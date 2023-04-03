import Post from "../models/Post.js";
import User from "../models/User.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Create post
export const createPost = async (req, res) => {
    try {
        const { tytle, text } = req.body
        const user = await User.findById(req.userId)

        if (req.files) {
            let fileName = Date.now().toString() + req.files.image.name
            const _dirname = dirname(fileURLToPath(import.meta.url))
            req.files.image.mv(path.join(_dirname, '..', 'uploads', fileName))

            const newPostWithImage = new Post({
                username: user.username,
                title,
                text,
                imgURL: fileName,
                author: req.userId,
            })

            await newPostWithImage.save()
            await User.findByIdAndUpdate(req.userId, {
                $push: { newPostWithImage },
            })

            return res.json(newPostWithImage)
        }

        const newPostWithoutImage = new Post({
            username: user.username,
            title,
            text,
            imgURL: '',
            author: req.userId,
        })

        await newPostWithoutImage.save()
        await User.findByIdAndUpdate(req.userId, {
            $push: { newPostWithoutImage },
        })

        return res.json(newPostWithoutImage)

    } catch (error) {
        res.json({
            message: 'Something went wrong'
        })
    }
}