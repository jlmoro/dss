import page from '../page'
export default [
  {
    path: '/perfil',
    name: 'perfil.usuario',
    component: page('perfil/PerfilUsuario')
    // children: [
    //   {
    //     path: 'areas/listar',
    //     name: 'areas.listar',
    //     component: page('administrar/areas/listar')
    //   },
    //   {
    //     path: 'perifericos/listar',
    //     name: 'perifericos.listar',
    //     component: page('administrar/perifericos/listar')
    //   },
    // ]
  },
]
