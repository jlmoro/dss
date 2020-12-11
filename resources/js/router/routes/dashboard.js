import page from '../page'
export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: page('dashboard/index'),
    children: [
      {
        path: 'dashboard-datos',
        name: 'dashboard.datos',
        component: page('dashboard/dashboardDatos')
      },
      {
        path: 'dashboard-principal',
        name: 'dashboard.principal',
        component: page('dashboard/dashboardDatos')
      },
      // {
      //   path: 'perifericos/listar',
      //   name: 'perifericos.listar',
      //   component: page('administrar/perifericos/listar')
      // },
    ]
  },
]
