import  {types as t_validate_url , t_isUrl } from "@/shared/validate-url/main.js";


export type t_youtube_domain<S extends string =""> = S extends "" ? t_validate_url.t_head_http_https<t_validate_url.t_wwwsDomain<t_validate_url.t_deb_strAndTld<"com","youtube">>,true> :
t_validate_url.t_head_http_https<t_validate_url.t_wwwsDomain<t_validate_url.t_full_strAndTld<"com",S,"youtube">>,true>

export type t_youtube_watch <ID extends string =string > = `${t_youtube_domain<`${"watch"}`>}${t_validate_url.t_reqUrl<t_validate_url.t_beg_reqUrlBody<"v",ID>>}`

