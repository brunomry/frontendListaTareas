const URL_Tareas = import.meta.env.VITE_API_TAREAS;

export const leerTareaAPI = async () => {
  try {
    const respuesta = await fetch(URL_Tareas);
    const listaTareas = await respuesta.json();
    return listaTareas;
  } catch (error) {
    console.log(error);
  }
}

export const crearTareaAPI = async (tareaNueva) => {
  try {
    const respuesta = await fetch(URL_Tareas, {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(tareaNueva)
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
}