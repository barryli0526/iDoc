<template>
    
	<li class="timeline-item">
        <div v-show="isFirst" class="timeline-item-tail timeline-item-tail-first" :style="tailStyle"></div>
		<div class="timeline-item-head">
			<!--<icon v-show="isFirst" type="success_no_circle" class="timeline-item-checked"></icon>-->
		</div>
		<div class="timeline-item-tail" :style="tailStyle"></div>
		<div class="timeline-item-content">
			<slot></slot>
		</div>
        <div v-show="isLast" class="timeline-item-tail timeline-item-tail-last" :style="tailStyle"></div>
	</li>
</template>

<style lang="scss">

	.timeline {
		&-item {
			position:relative;
		}

		&-item-content {
			padding:0 0 1.5rem 1.2rem;
		}

		&-item-head, &-item-head-first {
			position:absolute;
			content:'';
			z-index:99;
			border-radius:99px;
		}

		&-item-head {
			width:15px;
			height:15px;
			left:1px;top:4px;
            background-color:#FFF;
            border:1px solid #00AAFF;
		}

		&-item-head-first {
			width:20px;
			height:20px;
			left:-4px;top:5px;
		}

		&-item-tail {
			position:absolute;
			content:'';
			height:100%;
			width:2px;
			left:7.5px;top:5px;
		}
        &-item-tail-first{
            top:-50%;
        }
        &-item-tail-last{
            top : 0;            
        }

		&-item-checked {
			width: 100%;
			position: absolute;
			left: 0;
			top: 45%;
			transform: translateY(-50%);

			&::before {
				font-size: 12px;
				width: 20px;
				color: #FFF;
			}
		}
	}

</style>

<script>
// import Icon from '../icon'

export default {
  data () {
    return {
      isLast: true,
      isFirst: true      
    }
  },
  components: {    
  },
  computed: {
    tailStyle () {
      return this.isLast ? { display: 'none', backgroundColor: this.$parent.color } : { display: 'block', backgroundColor: this.$parent.color }
    }
  }
}
</script>