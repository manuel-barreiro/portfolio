/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
    name: 'nombre',
    label: 'Nombre',
    type: 'text',
    id: 'name',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'Requerido',
      },
      minLength: {
        value: 3,
        message: 'Mínimo 3 caracteres',
      },
      maxLength: {
        value: 30,
        message: 'Máximo 30 caracteres',
      },
    },
  }
  
  export const consulta_validation = {
    name: 'consulta',
    label: 'Consulta',
    multiline: true,
    id: 'consulta',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'Requerido',
      },
      minLength: {
        value: 20,
        message: 'Mínimo 20 caracteres',
      },
      maxLength: {
        value: 200,
        message: 'Máximo 200 caracteres',
      },
    },
  }
  
  export const cell_validation = {
    name: 'telefono',
    label: 'Teléfono',
    type: 'number',
    id: 'cell',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'Requerido',
      },
      maxLength: {
        value: 15,
        message: 'Ingrese teléfono válido',
      },
      minLength: {
        value: 10,
        message: 'Ingrese teléfono válido',
      },
    },
  }
  
  
  export const email_validation = {
    name: 'email',
    label: 'Email',
    type: 'email',
    id: 'email',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'Requerido',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Ingrese e-mail válido',
      },
    },
  }
  