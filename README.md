# youtube-validator
Validate youtube initial player response thanks to yup 

# Example : 
```javascript
import { YupVldSchOf_PlayerResponse} from "@youtube/ytInitialPlayerResponse/validators.js";

await import ("pathToYtInitialPlayerResponse/ytInitialPlayerResponse.js").then((imported_responseObject)=>{
  try {
    YupVldSchOf_PlayerResponse.validateSync(imported_responseObject.default)
    return true 
  } catch (err: unknown  ) {
    if(err instanceof ValidationError)return false
    else new Error(err.message)
  }
})
```
(other [examples](https://github.com/LonyIl75/youtube-validator/tree/main/src/youtube/test/ytInitialPlayerResponse) ) 

# Credits goes to:
-   [youtube-browser-api](https://github.com/kauderk/youtube-browser-api) by kauderk 
-   [return-youtube-comment-username](https://github.com/yakisova41/return-youtube-comment-username) by Yakisova41
-   [yt-downloader-lib](https://github.com/Moaaz-E/yt-downloader-lib) by Moaaz-E

# See also :
-   [knowledge](https://github.com/nikitavoloboev/knowledge/blob/7c4bbc755c64368a82ca22b76566e9153cd2e377/docs/video/video.md) by nikitavoloboev  et al
-   [yt-dlp](https://github.com/yt-dlp/yt-dlp) by yt-dlp 
