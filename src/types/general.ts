export type RequestState<data> = {
    loaded: boolean;
    items?: Array<data>;
}

export type Request<data> = Array<data>
