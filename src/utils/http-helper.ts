interface IHttpResponse {
    statusCode: number;
    body: any;
}

export const ok = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const noContent = async (): Promise<IHttpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}

export const badRequest = async () => {
    return {
        statusCode: 400,
        body: null
    }
}

export const created = async (): Promise<IHttpResponse> => {

    return {
        statusCode: 201,
        body: {
            message: "successful"
        }
    }
}