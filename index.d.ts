interface Return {
    [key: string]: string | Return
}

export default function pageResults({ api, query: { entity, selection, properties }, timeout, max }: {
    api: string;
    query: {
        entity: string;
        selection?: {[key: string | Object]: any};
        properties?: string[];
    };
    timeout?: number;
    max?: number;
}): Promise<Return[]>