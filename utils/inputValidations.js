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
        message: 'Required',
      },
      minLength: {
        value: 3,
        message: '3 characters minimum',
      },
      maxLength: {
        value: 30,
        message: '30 characters maximum',
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
        message: 'Required',
      },
      minLength: {
        value: 10,
        message: '10 characters minimum',
      },
      maxLength: {
        value: 200,
        message: '200 characters maximum',
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
        message: 'Required',
      },
      maxLength: {
        value: 15,
        message: 'Enter a valid phone number',
      },
      minLength: {
        value: 8,
        message: 'Enter a valid phone number',
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
        message: 'Required',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Enter a valid email address',
      },
    },
  }
  