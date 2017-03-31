import * as types from '../../mutation-types'
import lazyLoading from './lazyLoading'

const state = {
  items: [
    {
      name: 'Home',
      path: '/home',
      meta: {
        icon: 'fa-tachometer',
        img : require('assets/Home.png'),
        link: 'home/index.vue'
      },
      component: lazyLoading('home', true)
    },
    {
      name: 'Patients',
      path: '/patients',
      meta: {
        icon: 'fa-rocket',
        img : require('assets/Patient.png'),
        link: 'patients/index.vue'
      },
      component: lazyLoading('patients', true)
    },
    {
      name: 'Report',
      path: '/report',
      meta: {
        icon: 'fa-rocket',
        img : require('assets/statistic.png'),
        link: 'patients/index.vue'
      },
      component: lazyLoading('patients', true)
    },
    {
      name: 'Calendar',
      path: '/calendar',
      meta: {
        icon: 'fa-rocket',
        img : require('assets/calendar.png'),
        link: 'calendar/index.vue'
      },
      component: lazyLoading('calendar', true)
    },
    {
      name: 'Setting',
      path: '/setting',
      meta: {
        icon: 'fa-rocket',
        img : require('assets/setting.png'),
        link: 'patients/index.vue'
      },
      component: lazyLoading('patients', true)
    }
  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  mutations
}
