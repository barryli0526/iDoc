<template>
	<div class="vux-timeline">
		<ul>
			<slot></slot>
		</ul>
	</div>
</template>

<script>
import TimelineItem from './timeline-item'

export default {
  props: {
    color: {
      type: String,
      default: '#E0E0E0'
    }
  },
  components: {
    TimelineItem
  },
  mounted () {    
    this.setChildProps()
  },
  methods: {
    setChildProps () {
      const len = this.$children.length
      this.$children.forEach((child, index) => {        
        child.isLast = index === len - 1
        child.isFirst = index === 0
        console.log(child.isLast);
      })
    }
  }
}
</script>

<style lang="scss">
	.vux-timeline {
		padding:1rem;
	}

	li {
		list-style: none;
	}
</style>