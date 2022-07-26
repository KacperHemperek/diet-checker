export const simplifyError = (error:string):string => {
    return error.replace("auth/", "").replaceAll("-", " ")
}