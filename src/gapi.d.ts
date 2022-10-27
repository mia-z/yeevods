declare namespace GAPI {
    type BaseResponseObject = {
        kind: string,
        etag: string
    }
    
    declare type Response<T> = {
        nextPageToken: string,
        prePageToken: string,
        pageInfo: PageInfo,
        items: Array<T>
    } & BaseResponseObject;
    
    type PageInfo = {
        totalResults: number,
        resultsPerPage: number
    }
    
    declare type PlaylistItem = {
        id: string,
        snippet: Snippet,
        contentDetails: ContentDetails,
        status: Status
    
    } & BaseResponseObject;
    
    type Snippet = {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: Thumbnails,
        channelTitle: string,
        videoOwnerChannelTitle: string,
        videoOwnerChannelId: string,
        playlistId: string,
        position: number
        resourceId: ResourceId
    }
    
    type Thumbnails = {
        [key: string]: Thumbnail
    }
    
    type Thumbnail = {
        url: string,
        width: number,
        height: number
    }
    
    type ResourceId = {
        kind: string,
        videoId: string
    }
    
    type ContentDetails = {
        videoId: string,
        startAt: string,
        endAt: string,
        note: string,
        videoPublishedAt: string
    }
    
    type Status = {
        privacyStatus: string
    }
}