import axios from "axios";

export const fetchVodsQuery = async (): Promise<GAPI.Response<GAPI.PlaylistItem>> => {
    const res = await axios.get<GAPI.Response<GAPI.PlaylistItem>>("https://tools.miaz.xyz/api/youtube/destiny_vods?results=6");

    return res.data;
}  