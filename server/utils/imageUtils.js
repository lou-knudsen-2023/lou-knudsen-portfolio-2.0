import imageCompression from 'browser-image-compression'

  const sharp = require('sharp')

  async function imageCompression(imageData) {
    const compressedImage = await sharp(Buffer.from(imageData, 'base64'))
      .resize({ width: 500 })
      .toBuffer()
    return compressedImage.toString('base64')
  }
  
  module.exports = {
    imageCompression
  }


// This code uses the browser-image-compression library to compress the image.
// The compressImage function takes a File object as input and returns a Promise that resolves to a Blob object that contains the compressed image data. 
// You can adjust the maxSizeMB and maxWidthOrHeight options to suit your needs. 
// You can then import this function in any file where you need to compress images, like your API client or server-side code.