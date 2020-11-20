import page from '../page'
export default [
  {
    path: '/docentes',
    name: 'docentes.listar',
    component: page('docentes/docentesListar')
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
