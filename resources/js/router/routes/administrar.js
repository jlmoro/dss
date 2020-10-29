import page from '../page'
export default [
  {
    path: '/administrar',
    name: 'administrar.listar',
    component: page('administrar/administrar')
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
