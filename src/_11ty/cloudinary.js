module.exports = (path, alt, sizes, className, caption) => {
 const isProd = process.env.NODE_ENV === 'production';
 if(!isProd){
     if(!path.startsWith('/')){
         path = '/'+path;
     }
     const imgHtml = `<img loading="lazy" src="${path}" class="${className ? className : ''}" sizes="${sizes ? sizes : '100vw'}" alt="${alt ? alt : ''}">`;
     if(caption !== undefined){
       return `<figure>`+imgHtml+`<figcaption>`+caption+`</figcaption></figure>`;
     }else{
       return imgHtml;
     }
 }

 const fetchBase = `https://res.cloudinary.com/${eleventyConfig.cloudinaryCloudName}/image/fetch/`;
 // TODO: Pfad anpassen
 const src = `${fetchBase}q_auto,f_auto,w_${eleventyConfig.fallbackWidth}/https://gamue.de/${path}`;
 const srcset = eleventyConfig.srcsetWidths.map(w => {
     return `${fetchBase}q_auto:eco,f_auto,w_${w}/${path} ${w}w`;
 }).join(', ');

 const imgHtml = `<img loading="lazy" src="${src}" srcset="${srcset}" class="${className ? className : ''}" sizes="${sizes ? sizes : '100vw'}" alt="${alt ? alt : ''}">`;
 if(caption !== undefined){
  return `<figure>`+imgHtml+`<figcaption>`+caption+`</figcaption></figure>`;
  }else{
  return imgHtml;
 }
};

