import { getSession } from "next-auth/react"
import Photos from 'googlephotos';
import { SharedAlbums } from "./SharedAlbums";

export default async (req, res) => {
    const session = await getSession({ req })
    const sharedAlbum = new SharedAlbums(session?.accessToken as string);
    const photos = new Photos(session?.accessToken);

    try {
        const { data: { sharedAlbums } } = await sharedAlbum.list();

        const travelAlbumId = sharedAlbums.find((albm) => albm.title === 'travel').id;

        const data = await photos.mediaItems.search(travelAlbumId)
        console.log('photos response', data)

        res.status(200).json()
    } catch (error) {
        console.log(`Error: ${error.message}`)
        if (error.message === 'Request failed with status code 401') {
            res.status(401).json('Unauthorized')
        }
    }
}