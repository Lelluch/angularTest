export interface IResponse {
    kind: string;
    etag: string;
    pageInfo: IPageInfo;
    items: IItem[];
}
export interface IPageInfo {
    totalResults: number;
    resultsPerPage: number;
}
export interface IItem {
    kind: string;
    etag: string;
    id: IId;
    snippet: ISnippet;
    statistics: IStatistics;
}

export interface ICustomItem {
    title: string;
    description: string;
    imgSrc: string;
    linkVideo: string;
    date: string;
    id: string;
}

export interface IId {
    kind: string,
    videoId: string
}

export interface ISnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: IThumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: ILocalized;
    defaultAudioLanguage: string;
}
export interface IThumbnails {
    default: IThumbnailsItems;
    medium: IThumbnailsItems;
    high: IThumbnailsItems;
    standard: IThumbnailsItems;
    maxres: IThumbnailsItems;
}

export interface IThumbnailsItems {
    url: string;
    width: number;
    height: number;
}

export interface ILocalized {
    title: string;
    description: string
}

export interface IStatistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
}

export interface ISearch {
    isDate: boolean,
    isVision: boolean
}