import * as taskbarGet from "src/app/worldmap/taskbar/taskbar.component"


/**The reference of this is based on this link: https://johnnycrazy.github.io/SpotifyAPI-NET/docs/authorization_code/ 
 * Another source: https://stackoverflow.com/questions/65520828/how-do-i-complete-authentication-using-the-spotify-web-api
 * Another source: https://developer.spotify.com/documentation/general/guides/authorization/
*/
export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = "https://ryan-orimaco.github.io/music-charts/worldmap"
const clientId = "55cf7d7ace8e434c9fbac98db55c75b3"
const scope = [
  "user-read-currently-playing",
  "user-top-read",
  "user-modify-playback-state"
]
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`

export function getTokenFromUrl(){
  //Now using this function we can split the data
  const convertUrl = String(taskbarGet.hello); //Converst the URL to a String
  const firstConversion = String(convertUrl.split("https://ryan-orimaco.github.io/music-charts/worldmap#access_token="))
  const finalConversion = String(firstConversion.split("&token_type=Bearer&expires_in=3600"))
  return finalConversion
    
}