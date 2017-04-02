<template>
  <section class="app-main animated" :class="{slideInMain:!sidebar.opened, slideOutMain:sidebar.opened }">
    <div class="container is-fluid is-marginless app-content">
      <levelbar></levelbar>
      <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
        <router-view class="animated"></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
import Levelbar from './Levelbar'
import { mapGetters } from 'vuex'

export default {
  components: {
    Levelbar
  },
  computed: mapGetters({
    sidebar: 'sidebar'
  })
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import '~bulma/sass/utilities/mixins';

.app-main {
  padding-top: 50px;  
  transform: translate3d(0, 0, 0);
  margin-left:20%;

  @include mobile() {
    margin-left: 0;
  }

}

.app-content {
  padding: 20px;
}

</style>
