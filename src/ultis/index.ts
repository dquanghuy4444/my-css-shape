function isMobile(){
    try {
         // credit to Timothy Huang for this regex test: 
         // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
         if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
              return true
         }        
         return false

    } catch (error) {
         return false
    }
} 

function getUrlPublicImage(folder: string, file: string){
     return `${process.env.PUBLIC_URL}/assets/images/${folder}/${file}`
} 

export {isMobile , getUrlPublicImage};