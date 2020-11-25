import page from '../page'
export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    // component: page('dashboard/dashboardPrincipal')
    children: [
      {
        path: 'dashboard-principal',
        name: 'dashboard.principal',
        component: page('dashboard/dashboardPrincipal')
      },
      // {
      //   path: 'perifericos/listar',
      //   name: 'perifericos.listar',
      //   component: page('administrar/perifericos/listar')
      // },
    ]
  },
]
