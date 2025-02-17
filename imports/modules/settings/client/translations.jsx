export default {
  en: {
    menu: 'Settings',
    tabs: {
      security: {
        title: 'Security',
      },
      profile: {
        config: 'Configurations',
        title: 'Profile',
        description: 'We want to know a little more about you so we can be more helpful. Please fill this information.',
        form: {
          name: 'Name',
          lastName: 'Last Name',
          eMail: 'E-mail',
          saved: 'Saved!',
          profile: {
            label: 'Profile',
            values: {
              manager: 'Manager',
              influencer: 'Influencer',
              brand: 'Brand',
              all: 'All',
              notSelected: 'Not Selected',
            },
          },
          phone: 'Phone',
          mobile: 'Mobile',
          address: {
            title: 'Billing Address',
            address: 'Address',
            city: 'City',
            state: 'State',
            country: 'Country',
            zipCode: 'Zip Code',
          },
          button: 'Save',
        },
        messages: {
          success: 'Profile updated',
          error: 'There was an error saving your profile',
        },
        password: {
          title: 'Change Password',
          form: {
            current: 'Current Password',
            new: 'New Password',
            repeat: 'Repeat New Password',
            button: 'Change Password',
            accept: 'Accept',
            add_email: 'Add your email address',
            email: 'Email Address',
          },
          errors: {
            fail: 'Password Incorrect, No changes were made.',
            noMatch: 'They do not match.',
          },
          success: 'Password Changed Successful.',
        },
      },
      billing: {
        title: 'Billing',
      },
      charge: {
        title: 'Charge Method',
        country: 'Billing country',
        add: 'Adding new payment method',
        methods: 'Billing methods',
        addMethod: 'Add payment method',
        desc: 'Paypal is an online payment service through which you can receive the amounts Airbnb sends you. To be able to use it, you first need to have a Paypal account.',
        question_1: 'Enter the email address associated with your Paypal account',
        question_2: 'In what currency do you want to receive payments?',
        question_3: 'Minimum payout amount',
        accept: 'Accept',
        confirm: 'Confirm',
        minTitle: 'Set minimum amount of payment',
        minDesc_1: 'If you select this option, we will retain your payments until you reach this minimum amount.',
        minDesc_2: 'The minimum amount can be up to 50000 USD.',
      },
      payments: {
        title: 'Payments',
        form: {
          add: 'Adding new payment method',
          infoNum: 'Card number',
          expDate: 'Expiration date',
          secCode: 'Security code',
          name: 'Name',
          lastName: 'Last name',
          zipCode: 'Zip code',
          country: 'Country',
        },
        pred: 'Predetermined',
        coupons_added: 'The coupons you add to your account will be displayed here',
        addCoupons: 'Your coupons',
        addCoupon: 'Add coupon',
        display: 'Display',
        paymentsMethods: 'Payments methods',
        addCard: 'Add card',
        cancel: 'Cancel',
        description: 'To receive payments we need an email address to send the payments to. This can be different from your accounts email address.',
      },
      settings: {
        title: 'Settings',
      },
      about: {
        title: 'About Us',
        labels: {
          terms: 'Terms and Conditions',
          privacy: 'Privacy Policy',
          rightsReserved: 'All Rights Reserved',
        },
      },
    },
  },
  es: {
    menu: 'Configuraciones',
    tabs: {
      security: {
        title: 'Seguridad',

      },
      profile: {
        config: 'Configuraciones',
        title: 'Perfil',
        description: 'We want to know a little more about you so we can be more helpful. Please fill this information.',
        form: {
          name: 'Nombre',
          lastName: 'Apellido',
          eMail: 'Correo Electrónico',
          saved: '¡Guardado!',
          profile: {
            label: 'Perfil',
            values: {
              manager: 'Manager',
              influencer: 'Influencer',
              brand: 'Marca',
              all: 'Todos',
              notSelected: 'No Seleccionado',
            },
          },
          phone: 'Teléfono',
          mobile: 'Celular',
          address: {
            title: 'Dirección',
            address: 'Dirección',
            city: 'Ciudad',
            state: 'Estado',
            country: 'País',
            zipCode: 'Código Postal',
          },
          button: 'Guardar',
        },
        messages: {
          success: 'Perfil actualizado',
          error: 'Hubo un error actualizando tu perfil',
        },
        password: {
          title: 'Cambiar Contraseña',
          form: {
            current: 'Contraseña Actual',
            new: 'Nueva Contraseña',
            repeat: 'Repetir Nueva Contraseña',
            button: 'Cambiar Contraseña',
            accept: 'Aceptar',
            add_email: 'Ingresa tu nuevo correo electrónico',
            email: 'Correo electrónico',
          },
          errors: {
            fail: 'Clave incorrecta, ningun cambio hecho.',
            noMatch: 'Las claves no coinciden.',
          },
          success: 'Cambio de clave exitoso.',
        },
      },
      billing: {
        title: 'Facturación',
        form: {
          title: 'Cuenta',
          name: 'Nombre',
          lastName: 'Apellido',
          profile: 'Perfil',
          billing: {
            title: 'Dirección de Facturación',
            address: 'Dirección',
            city: 'Ciudad',
            state: 'Estado',
            country: 'País',
            zipCode: 'Código Postal',
          },
          button: 'Guardar',
        },
        password: {
          button: 'Cambiar Contraseña',
        },
      },
      charge: {
        title: 'Métodos de cobro',
        country: 'País de facturación',
        add: 'Agregar nuevo método de pago',
        methods: 'Métodos de pago',
        addMethod: 'Agregar forma de pago',
        desc: 'Paypal es un servicio de pagos en linea mediante cual puedes recibir los montos que te envía Airbnb. Para poder utilizarlo, primero necesitas tener una cuenta de Paypal.',
        question_1: 'Ingresa la dirección de correo electrónico asociada a tu cuenta de Paypal',
        question_2: '¿En que moneda quieres recibir los pagos?',
        question_3: 'Cantidad mínima de pago',
        confirm: 'Confirmar',
        accept: 'Aceptar',
        minTitle: 'Establecer cantidad mínima de pago',
        minDesc_1: 'Si seleccionas esta opción, retendremos tus pagos hasta que alcances esta cantidad mínima.',
        minDesc_2: 'La cantidad mínima puede ser de hasta 50000 USD.',
      },
      payments: {
        title: 'Métodos de pago',
        form: {
          add: 'Agregar nuevo método de pago',
          infoNum: 'Número de tarjeta',
          expDate: 'Fecha de expiración',
          secCode: 'Código de seguridad',
          name: 'Nombre',
          lastName: 'Apellido',
          zipCode: 'Código postal',
          country: 'País',
        },
        pred: 'Predeterminado',
        coupons_added: 'Los cupones que agregues a tu cuenta se mostrarán aquí',
        addCoupons: 'Tus cupones',
        addCoupon: 'Agregar cupón',
        display: 'Mostrar',
        paymentsMethods: 'Métodos de pago',
        addCard: 'Añadir tarjeta',
        cancel: 'Cancelar',
      },
      display: 'Mostrar',
      settings: {
        title: 'Configuraciones',
      },
      about: {
        title: 'Acerca de',
        labels: {
          terms: 'Térimos y Condiciones',
          privacy: 'Política de Privacidad',
          rightsReserved: 'Todos los Derechos Reservados.',
        },
      },
    },
  },
  zz: {
    menu: '測試',
    tabs: {
      profile: {
        title: '測試 測試 測試 測試',
        description: '測試 測試 測試 測試 測試 測試 測試 測試 測試 測試 測試 測試 測試 測試 測試. 測試 測試 測試 測試.',
        form: {
          name: '測試',
          lastName: '測試 測試',
          profile: {
            label: '測試',
            values: {
              manager: '測試',
              influencer: '測試',
              brand: '測試',
              all: '測試',
              notSelected: '測試 測試',
            },
          },
          phone: '測試',
          address: {
            title: '測試 測試',
            address: '測試',
            city: '測試',
            state: '測試',
            country: '測試',
            zipCode: '測試 測試',
          },
          button: '測試',
        },
        messages: {
          success: '測試 測試',
          error: '測試 測試 測試 測試 測試 測試 測試',
        },
        password: {
          title: '測試 測試',
          form: {
            current: '測試 測試',
            new: '測試 測試',
            repeat: '測試 測試 測試',
            button: '測試 測試',
          },
        },
      },
      billing: {
        title: '測試',
      },
      payments: {
        title: '測試',
      },
      settings: {
        title: '測試',
      },
      about: {
        title: '測試 測試',
        labels: {
          terms: '測試 測試 測試',
          privacy: '測試 測試',
          rightsReserved: '測試 測試 測試',
        },
      },
    },
  },
};
