<template>
  <div class="calendar">
    <!--<full-calendar :events="fcEvents" @dayClick="dayClick" locale="en"></full-calendar>-->
    <img src="~assets/CalendarAll.png"/>
  </div>
</template>

<script>
import fullCalendar from 'vue-fullcalendar'
var demoEvents = [
	{
      title : 'Barry',
      start : '2017-03-25',
      end : '2017-03-27'
    }
]
export default {
  data () {
    return {
      fcEvents : demoEvents
    }
  },
  components : {
	'full-calendar': fullCalendar	
  },
  methods:{
    dayClick(day, jsEvent) {
      console.log('dayClick', day, jsEvent)
    }
  }
}
</script>

<style scoped>
</style>
