export const resizeImage = (file, width, height) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const aspectRatio = img.width / img.height;
      if (width / height > aspectRatio) {
        canvas.width = width;
        canvas.height = width / aspectRatio;
      } else {
        canvas.width = height * aspectRatio;
        canvas.height = height;
      }

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      resolve(canvas.toDataURL());
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};
