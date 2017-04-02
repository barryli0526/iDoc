<template>
  <section class="hero is-bold app-navbar animated"
           :class="{ slideInDown: show, slideOutDown: !show, slideInContent:!sidebar.opened, slideOutContent:sidebar.opened}">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item"
             @click="toggleSidebar(!sidebar.opened)">
            <i class="fa fa-bars"
               aria-hidden="true"></i>
          </a>
        </div>
        <div class="nav-center">
          <a class="nav-item hero-brand"
             href="/">
            <img src="~assets/iDoc.png">
            <!--<img src="~assets/logo.svg" :alt="pkginfo.description">-->
            <!--<tooltip :label="'v' + pkginfo.version" placement="right" type="success" size="small" :no-animate="true" :always="true" :rounded="true">
                        <div class="is-hidden-mobile">
                          <span class="vue">Vue</span><strong class="admin">Admin</strong>
                        </div>
                      </tooltip>-->
          </a>
        </div>
        <div class="nav-right is-flex">
          <a class="idoc-search"><img src="~assets/search.png" /></a>
          <a class="idoc-notification"><img src="~assets/notification.png" /></a>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import Tooltip from 'vue-bulma-tooltip'
import { mapGetters, mapActions } from 'vuex'

export default {

  components: {
    Tooltip
  },

  props: {
    show: Boolean
  },

  computed: mapGetters({
    pkginfo: 'pkg',
    sidebar: 'sidebar'
  }),

  methods: mapActions([
    'toggleSidebar'
  ])
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';

.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  margin-left: 20%;
  padding-right: 20%;
  .container {
    margin: auto 10px;
  }

  .nav-right {
    align-items: stretch;
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    a {
      padding-top: 10px;
    }
    .idoc-search {
      img {
        width: 20px;
      }
      margin-right:10px;
      padding-top:15px;
    }
    .idoc-notification{
      img{
        width:30px;
      }
      margin-right:20px;
    }
  }
  .nav-center {
    margin-right: 10%;
  }
}

.slideInContent {
  -webkit-animation-name: 'slideInContentAnimate';
  /*动画属性名，也就是我们前面keyframes定义的动画名*/
  -webkit-animation-duration: .4s;
  /*动画持续时间*/
}

.slideOutContent {
  -webkit-animation-name: 'slideOutContentAnimate';
  /*动画属性名，也就是我们前面keyframes定义的动画名*/
  -webkit-animation-duration: .4s;
  /*动画持续时间*/
}

.sidedInRight {
  -webkit-animation-name: 'sidedInRightAnimate';
  /*动画属性名，也就是我们前面keyframes定义的动画名*/
  -webkit-animation-duration: .4s;
  /*动画持续时间*/
}

.sidedOutRight {
  -webkit-animation-name: 'sidedOutRightAnimate';
  /*动画属性名，也就是我们前面keyframes定义的动画名*/
  -webkit-animation-duration: .4s;
  /*动画持续时间*/
}

.slideInMain {
  -webkit-animation-name: 'slideInMainAnimate';
  /*动画属性名，也就是我们前面keyframes定义的动画名*/
  -webkit-animation-duration: .4s;
  /*动画持续时间*/
}

.slideOutMain {
  -webkit-animation-name: 'slideOutMainAnimate';
  /*动画属性名，也就是我们前面keyframes定义的动画名*/
  -webkit-animation-duration: .4s;
  /*动画持续时间*/
}

.hero-brand {
  .vue {
    margin-left: 10px;
    color: #36AC70;
  }
  .admin {
    color: #28374B;
  }
}

@keyframes slideInContentAnimate {
  from {
    margin-left: 20%;
    padding-right: 20%;
  }

  to {
    margin-left: 0;
    padding-right: 0;
  }
}

@keyframes slideOutContentAnimate {
  from {
    margin-left: 0;
    padding-right: 0;
  }
  to {
    margin-left: 20%;
    padding-right: 20%;
  }
}

@keyframes slideInMainAnimate {
  from {
    margin-left: 20%;
  }

  to {
    margin-left: 0;
  }
}

@keyframes slideOutMainAnimate {
  from {
    margin-left: 0;
  }
  to {
    margin-left: 20%;
  }
}
</style>
