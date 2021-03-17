const urlUsuarios = 'https://reqres.in/api/users?page=2';
// Cloudinary
const cloudPreset = 'uf56wu3c';
const cloudUrl    = 'https://api.cloudinary.com/v1_1/guri/upload'

export const obtenerUsuarios = async()=> {

    const respuesta = await fetch(urlUsuarios);
    const {data:usuarios} = await respuesta.json();
    
    return usuarios

}

// ArchivoSubir : File

export const subirImagen = async(archivoSubir) => {
    const formData = new FormData();
    formData.append('upload_preset',cloudPreset);
    formData.append('file',archivoSubir);

    try{
        const respuesta = await fetch(cloudUrl,{
            method: 'POST',
            body: formData
        })
        if( respuesta.ok){
            const clourRespuesta = await respuesta.json();


            return clourRespuesta.secure_url

        }else {
            throw await respuesta.json();
        }

    } catch (err){
        throw err;

    }
}