export default function get_url_img(folder: string, filename: string) {
    return process.env.NEXT_PUBLIC_URL_BE + `/img/${folder}/${filename}`
}