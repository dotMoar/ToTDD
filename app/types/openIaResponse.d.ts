export interface OpenIAResponse {
    name: string
    message: string
    url: string
    requestBodyValues: RequestBodyValues
    statusCode: number
    responseHeaders: ResponseHeaders
    responseBody: string
    isRetryable: boolean
    data: Data
  }
  
  export interface RequestBodyValues {
    model: string
    temperature: number
    messages: Message[]
  }
  
  export interface Message {
    role: string
    content: string
  }
  
  export interface ResponseHeaders {
    "alt-svc": string
    "cf-cache-status": string
    "cf-ray": string
    connection: string
    "content-encoding": string
    "content-type": string
    date: string
    server: string
    "set-cookie": string
    "strict-transport-security": string
    "transfer-encoding": string
    vary: string
    "x-content-type-options": string
    "x-request-id": string
  }
  
  export interface Data {
    error: Error
  }
  
  export interface Error {
    message: string
    type: string
    param: any
    code: string
  }
  