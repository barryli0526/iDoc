<template>
    <div id="home">
        <div class="tile is-ancestor">
            <div class="tile is-parent is-8">
                <article class="tile is-child box">
                    <h4 class="title">Reports</h4>
                    <div class="block">
                        <chartist class="lines-bars"
                                  :type="'Line'"
                                  :data="lineAreaData"
                                  :options="lineAreaOptions"></chartist>
                    </div>
                </article>
            </div>
            <div class="tile is-parent patients">
                <article class="tile is-child box">
                    <h4 class="title">Patients</h4>
                    <ul class="patients-list">
                        <li class="patient"><img src="~assets/avatar.png"><span>Virginia Gonzales</span></li>
                        <li class="patient"><img src="~assets/avatar.png"><span>Victoria Watkins</span></li>
                        <li class="patient"><img src="~assets/avatar.png"><span>Jose Morris</span></li>
                        <li class="patient"><img src="~assets/avatar.png"><span>Lisa Burke</span></li>
                        <li class="patient"><img src="~assets/avatar.png"><span>Paul Holmes</span></li>
                    </ul>      
                </article>
            </div>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <h4 class="title">Task</h4>
                    <ul class="idoc-list">
                        <li class="idoc-item"><span>Virginia Gonzales</span><span class="small-font">type 2 diabetic</span></li>
                        <li class="idoc-item"><span>Victoria Watkins</span></li>
                        <li class="idoc-item"><span>Jose Morris</span></li>
                        <li class="idoc-item"><span>Lisa Burke</span></li>
                        <li class="idoc-item"><span>Paul Holmes</span></li>
                    </ul> 
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <h4 class="title">Message</h4>
                    <ul class="idoc-list">
                        <li class="idoc-item"><span>Virginia Gonzales</span><span class="small-font">type 2 diabetic</span></li>
                        <li class="idoc-item"><span>Victoria Watkins</span></li>
                        <li class="idoc-item"><span>Jose Morris</span></li>
                        <li class="idoc-item"><span>Lisa Burke</span></li>
                        <li class="idoc-item"><span>Paul Holmes</span></li>
                    </ul> 
                </article>
            </div>
            <div class="tile is-parent">
                 <article class="tile is-child box calendar">
                    <h1 class="title">Calendar</h1>
                    <p class="control">
                        <datepicker placeholder="Pick date and time" :config="{ inline: true }"></datepicker>
                    </p>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
import Chartist from 'vue-bulma-chartist'
import Datepicker from 'vue-bulma-datepicker'
var moment = window.moment = require('moment')
let dates = [143134652600, 143234652600, 143340052600, 143366652600, 143410652600, 143508652600, 143569652600, 143579652600];

export default {
    components: {
        Chartist,
        Datepicker
    },

    data() {
        return {
            lineAreaData: {
                // labels: ["9Jan", "12Jan", "15Jan", "18Jan", "21Jan", "24Jan", "27Jan", "30Jan","2Feb", "5Feb", "8Feb","11Feb","14Feb"],
                // series: [
                //   [400, 500, 750, 600, 1100, 900, 1500, 1504,2000,1800,2350,2250,2250,2000]
                // ]
                series: [{
                    name: "fff", data: [{ x: new Date(143134652600), y: 53 },
                    { x: new Date(143234652600), y: 40 },
                    { x: new Date(143340052600), y: 45 },
                    { x: new Date(143366652600), y: 40 },
                    { x: new Date(143410652600), y: 20 },
                    { x: new Date(143508652600), y: 32 },
                    { x: new Date(143569652600), y: 18 },
                    { x: new Date(143579652600), y: 11 }]
                }]
            },
            lineAreaOptions: {
                low: 0,
                showArea: true,
                axisX: {
                    type: Chartist.FixedScaleAxis,
                    divisor: 5,
                    labelInterpolationFnc: function (value, i) {
                        return moment(dates[i]).format('MMM D');
                    }
                }
            },
            value: '2016-12-12'
        }
    },

    computed: {
    },

    mounted() {
    }
}
</script>

<style lang="scss">
#home {
    .reports {
        flex-grow: 2;
    }
    .ct-series-a .ct-slice-pie,
    .ct-series-a .ct-area {
        fill: #60C1F7;
    }
    .ct-series-a .ct-point,
    .ct-series-a .ct-line,
    .ct-series-a .ct-bar,
    .ct-series-a .ct-slice-donut {
        stroke: #15ACFF;
    }
    .patients{
        img{
            width:30px;
            height: 30px;
        }
        .patients-list{           
            .patient{
                display: flex;                            
                padding :10px;
                border-bottom: 1px solid #DEE1E2;
                span{
                    margin-left:30px;
                    line-height:30px;
                    color:#666;
                }
                &:hover{
                    cursor: pointer;
                }
            }
        }       
    }
    .idoc-list{
        .idoc-item{
            display: flex;                            
            padding :10px;
            border-bottom: 1px solid #DEE1E2;
            span{                
                line-height:30px;
                color:#666;
            }
            &:hover{
                cursor: pointer;
            }
            .small-font{
                margin-left:10px;
                color:#d3d3d3;
            }
        }
    } 
    .calendar{
        .flatpickr-input{
            display: none;
        }
        .flatpickr-calendar.inline:before,.flatpickr-calendar.inline:after{
            display: none
        }
        .flatpickr-days,.flatpickr-calendar{
            width:auto;
        }
    }
}
</style>
