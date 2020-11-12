import page from '../page'
export default [
  {
    path: '/dashboard-principal',
    name: 'dashboard.principal',
    component: page('dashboard/dashboardPrincipal')
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
