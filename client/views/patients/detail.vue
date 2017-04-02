<template>
    <div class="patient-detail">
        <div class="is-ancestor">
            <div class="tile is-parent is-12">
                <div class="tile is-child box">
                    <h1 class="title title-box">Profile of Patient</h1>
                    <div class="patient-info media">
                        <div class="avatar media-left"><img src="~assets/Patient_Jeremy.png" /></div>
                        <div class="info media-content">
                            <h4>John Smith</h4>
                            <table class="table is-bordered info-table">
                                <tbody>
                                    <tr>
                                        <th class="info-label">Patient ID</th>
                                        <th class="info-content">7364661</th>
                                        <th class="info-label">GLU</th>
                                        <th class="info-content">
                                            <span class="info-glu"></span>
                                            <span class="info-value">5.6</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="info-label">Disease</th>
                                        <th class="info-content">Diabetes Type 2</th>
                                        <th class="info-label">Treatment</th>
                                        <th class="info-content">
                                            <span class="info-treatment"></span>
                                            <span class="info-value">51</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="info-label">Phone#</th>
                                        <th class="info-content">0-(321)991-4710</th>
                                        <th class="info-label">Food</th>
                                        <th class="info-content">
                                            <span class="info-food"></span>
                                            <span class="info-value">1600 cal</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="info-label">Emergency</th>
                                        <th class="info-content">Amanda Barbet</th>
                                        <th class="info-label">Activity</th>
                                        <th class="info-content">
                                            <span class="info-activity"></span>
                                            <span class="info-value">400 cal</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                            </article>
                        </div>
                    </div>
                    <div class="block patient-detail-info is-flex">
                        <tabs animation="slide"
                              :only-fade="false">
                            <!--<tab-pane label="Summary"
                                                                                                                          selected>Summary</tab-pane>-->
                            <tab-pane label="Examination">
                                <timeline>
                                    <timeline-item>
                                        <div class="item-box">
                                            <div class="item-date">2016-04-17</div>
                                            <div class="item-content">In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble. While NASA has had many ups and downs, the launch and continued
                                                <div class="examination-box-wrapper">
                                                    <div class="examination-box"></div>
                                                    <div class="examination-box"></div>
                                                    <div class="examination-box"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </timeline-item>
                                    <timeline-item>
                                        <div class="item-box">
                                            <div class="item-date">2016-04-17</div>
                                            <div class="item-content">In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble. While NASA has had many ups and downs, the launch and continued</div>
                                        </div>
                                    </timeline-item>
                                    <timeline-item>
                                        <div class="item-box">
                                            <div class="item-date">2016-04-17</div>
                                            <div class="item-content">In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble. While NASA has had many ups and downs, the launch and continued</div>
                                        </div>
                                    </timeline-item>
                                </timeline>
                            </tab-pane>
                            <tab-pane label="Monitor">
                                <collapse accordion>
                                    <collapse-item title="Blood Glucose"
                                                   selected>
                                        <div class="blood-glucose">
                                            <div class="blood-glucose-detail">
                                                <div class="food-header is-clearfix">
                                                    <!--<h1 class="is-pulled-left">Blood Glucose</h1>-->
                                                    <div class="tabs is-toggle is-pulled-right">
                                                        <ul>
                                                            <li>
                                                                <a>
                                                                    <span>Day</span>
                                                                </a>
                                                            </li>
                                                            <li class="is-active">
                                                                <a>
                                                                    <span>Week</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a>
                                                                    <span>Month</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <IdocTable :sourceData="monitorData">
                                                </IdocTable>
                                            </div>
                                            <div class="blood-glucose-chart">
                                                <img src="~assets/monitor.png" />
                                            </div>
                                        </div>
                                    </collapse-item>
                                    <collapse-item title="Blood Pressure">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                    </collapse-item>
                                    <collapse-item title="Heart Rate">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                    </collapse-item>
                                    <collapse-item title="Weight">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                    </collapse-item>
                                </collapse>
                            </tab-pane>
                            <tab-pane label="Treatment"
                                      class="is-clearfix">
                                <div class="treatment">
                                    <div class="history">
                                        <h1>Treatment History</h1>
                                        <IdocTable :sourceData="treatMentData">
                                        </IdocTable>
                                        <!--<timeline>
                                                                                                                                    <timeline-item>
                                                                                                                                        <div class="item-box">
                                                                                                                                            <div class="item-date">2016-04-17</div>
                                                                                                                                            <div class="item-content">In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble. While NASA has had many ups and downs, the launch and continued</div>
                                                                                                                                        </div>
                                                                                                                                    </timeline-item>
                                                                                                                                    <timeline-item>
                                                                                                                                        <div class="item-box">
                                                                                                                                            <div class="item-date">2016-04-17</div>
                                                                                                                                            <div class="item-content">In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble. While NASA has had many ups and downs, the launch and continued</div>
                                                                                                                                        </div>
                                                                                                                                    </timeline-item>
                                                                                                                                    <timeline-item>
                                                                                                                                        <div class="item-box">
                                                                                                                                            <div class="item-date">2016-04-17</div>
                                                                                                                                            <div class="item-content">In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble. While NASA has had many ups and downs, the launch and continued</div>
                                                                                                                                        </div>
                                                                                                                                    </timeline-item>
                                                                                                                                </timeline>-->
                                    </div>
                                    <div class="plan">
                                        <h1>Treatment Plan</h1>
                                        <div class="plan-item">
                                            <h4>Blood Glucose Testing</h4>
                                            <p>Diabetes Type 2</p>
                                        </div>
                                        <div class="plan-item">
                                            <h4>Insulin & Other Injectables</h4>
                                            <p>Novolin 70/30</p>
                                        </div>
                                        <div class="plan-item">
                                            <h4>Oral Medication</h4>
                                            <p>The first treatment for type 2 diabetes blood glucose (sugar) control is often meal planning, weight loss, and exercising.</p>
                                        </div>
                                        <div class="plan-item">
                                            <h4>Other Treatments</h4>
                                            <p>—</p>
                                        </div>
                                    </div>
                                </div>
                            </tab-pane>
                            <tab-pane label="Food&Activity">
                                <div class="food">
                                    <div class="food-detail">
                                        <div class="food-header is-clearfix">
                                            <h1 class="is-pulled-left">Food</h1>
                                            <div class="tabs is-toggle is-pulled-right">
                                                <ul>
                                                    <li>
                                                        <a>
                                                            <span>Day</span>
                                                        </a>
                                                    </li>
                                                    <li class="is-active">
                                                        <a>
                                                            <span>Week</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <span>Month</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <IdocTable :sourceData="sourceData">
                                        </IdocTable>
                                    </div>
                                    <div class="food-total">
                                        <!--<h1>Treatment Plan</h1>-->
                                        <div class="food-total-item">
                                            <h4>TODAY</h4>
                                            <p>1234</p>
                                        </div>
                                        <div class="food-total-item">
                                            <h4>THIS WEEK</h4>
                                            <p>92345</p>
                                        </div>
                                        <div class="food-total-item">
                                            <h4>TOTAL DISTANCE</h4>
                                            <p>15KM</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="activity">
                                    <h1>Activity</h1>
                                    <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    <div class="activity-info">
                                        <div class="activity-info-chart">
                                            <img src="~assets/activity.png" />
                                        </div>
                                        <div class="activity-total">
                                            <div class="activity-total-item">
                                                <h4>ACTIVE CALORIES</h4>
                                                <p>{{activity.total_cals}}</p>
                                            </div>
                                            <div class="activity-total-item">
                                                <h4>TOTAL STEPS</h4>
                                                <p>{{activity.total_steps}}</p>
                                            </div>
                                            <div class="activity-total-item">
                                                <h4>TOTAL DISTANCE</h4>
                                                <p>{{activity.total_distance}}KM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tab-pane>
                            <tab-pane label="Message">
                                <div class="idoc-message">
                                    <img src="~assets/message.png" />
                                </div>
                            </tab-pane>
                        </tabs>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'
import { Collapse, Item as CollapseItem } from 'vue-bulma-collapse'
import Chartist from 'vue-bulma-chartist'
import Timeline from '../../components/timeline/timeline'
import TimelineItem from '../../components/timeline/timeline-item'
import IdocTable from '../../components/idoctable/index'
let host = 'http://121.199.58.200:8989/api/';
export default {
    components: {
        Tabs,
        TabPane,
        Collapse,
        CollapseItem,
        Chartist,
        Timeline,
        TimelineItem,
        IdocTable
    },

    data() {
        return {
            items: [
                {
                    icon: 'image',
                    label: 'Pictures',
                    desc: 'Simple responsive horizontal navigation tabs, with different styles'
                },
                {
                    icon: 'music',
                    label: 'Music',
                    desc: 'Music Tab'
                },
                {
                    icon: 'film',
                    label: 'Videos',
                    desc: 'Video Tab'
                },
                {
                    icon: 'file-text-o',
                    label: 'Documents',
                    desc: 'Document Tab'
                }
            ],
            lineAreaData: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8],
                series: [
                    [5, 9, 7, 8, 5, 3, 5, 4]
                ]
            },
            lineAreaOptions: {
                low: 0,
                showArea: true
            },
            sourceData: {
                header: [" ", "03/31", "04/01", "04/02", "04/03", "04/04", "04/05", "04/06"],
                body: [
                    {
                        cols: [
                            {
                                value: "BREAKFAST",
                                type: "txt"
                            },
                            {
                                value: require('../../assets/Food_banana.png'),
                                type: "img"
                            },
                            {
                                value: require('../../assets/Food_carrot.png'),
                                type: "img"
                            },
                            {
                                value: require('../../assets/Food_cherry.png'),
                                type: "img"
                            },
                            {
                                value: require('../../assets/Food_carrot.png'),
                                type: "img"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: "LUNCH"
                            },
                            {
                                value: require('../../assets/Food2.png'),
                                type: "img"
                            },
                            {
                                value: require('../../assets/Food2.png'),
                                type: "img"
                            },
                            {
                                value: require('../../assets/Food2.png'),
                                type: "img"
                            },
                            {
                                value: require('../../assets/Food2.png'),
                                type: "img"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: "DINNER"
                            },
                            {
                                value: require('../../assets/Food_chicken.png'),
                                type: "img"
                            },
                            {
                                value: require('../../assets/Food_chicken.png'),
                                type: "img"
                            },
                            {
                                value: require('../../assets/Food_chicken.png'),
                                type: "img"
                            },
                            {
                                value: require('../../assets/Food2.png'),
                                type: "img"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: "SNACK"
                            },
                            {
                                value: require('../../assets/Food2.png'),
                                type: "img"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: "TOTAL"
                            },
                            {
                                value: 100,
                                type: "txt"
                            },
                            {
                                value: 80,
                                type: "txt"
                            },
                            {
                                value: 88,
                                type: "txt"
                            },
                            {
                                value: 90,
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            }
                        ]
                    }
                ]
            },
            monitorData: {
                header: [" ", " ", "03/31", "04/01", "04/02", "04/03", "04/04", "04/05"],
                body: [
                    {
                        cols: [
                            {
                                value: "OVERALL"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: "BEFORE",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: "BREAKFAST",
                                type: "txt",
                                isMergedUp: true
                            },
                            {
                                value: "AFTER",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: " "
                            },
                            {
                                value: "BEFORE",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: "LUNCH",
                                isMergedUp: true
                            },
                            {
                                value: "AFTER",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: " "
                            },
                            {
                                value: "BEFORE",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: "DINNER",
                                isMergedUp: true
                            },
                            {
                                value: "AFTER",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            },
                            {
                                value: " ",
                                type: "txt"
                            }
                        ]
                    }
                ]
            },
            treatMentData: {
                header: [" ", "03/31", "04/01", "04/02", "04/03", "04/04", "04/05", "04/06"],
                body: [
                    {
                        cols: [
                            {
                                value: "MEDICINE A",
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: "Missed",
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: "MEDICINE B"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: "MEDICINE C"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: "INJECTION B"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                value: "TOTAL"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            },
                            {
                                value: 0,
                                type: "txt"
                            }
                        ]
                    }
                ]
            },
            activity: {
                total_cals: 0,
                total_steps: 0,
                total_distance: 0
            }
        }
    },

    mounted() {
        this.loadActivity((response) => {
            // console.log(response.data);           
            this.activity = (response.data && response.data.length > 0) ? response.data[0] : {
                total_cals: 0,
                total_steps: 0,
                total_distance: 0
            };
            console.log(this.activity);
        });
        this.loadFoods((response) => {
            console.log(response.data);
            // this.activity  = response.data ? response.data[0] : {};            
        });
        this.loadTreatment((response) => {
            var treatments = response.data;
            if (treatments && treatments.length > 0) {
                var startDate = moment(new Date(treatments[0].create_at)).format("MM/DD");
                //build header
                var arr = [" "];
                for (let i = 0; i < 7; i++) {
                    var date = moment(startDate).add(i, 'day').format("MM/DD");
                    arr.push(date);
                }
                this.treatMentData.header = arr;
                var rows = this.treatMentData.body;
                var nameArr = [];
                var mapTotal = {};
                for (let i = 0; i < treatments.length && i < 7; i++) {
                    var name = treatments[i].name;
                    var date = moment(treatments[i].create_at).format("MM/DD");
                    var idx = arr.indexOf(date);

                    var rowNum = 0;
                    switch (name.toLowerCase()) {
                        case "medicine a":
                            rowNum = 0;
                            break;
                        case "medicine b": rowNum = 1; break;
                        case "medicine c": rowNum = 2; break;
                        case "injection b": rowNum = 3; break;
                    }
                    if (!rows[rowNum].cols[idx].value)
                        rows[rowNum].cols[idx].value = 0
                    rows[rowNum].cols[idx].value += parseInt(treatments[i].amount);
                    mapTotal[idx] = mapTotal[idx] ? mapTotal[idx] : 0;
                    mapTotal[idx] += parseInt(treatments[i].amount);
                }

                for (var key in mapTotal) {
                    rows[4].cols[key].value = mapTotal[key];
                }
                this.treatMentData.body = rows;
            }
        });
    },

    methods: {
        loadActivity(cb) {
            this.$http.get(host + 'activity/latest').then(cb);
        },

        loadTreatment(cb) {
            this.$http.get(host + 'treatment').then(cb);
        },
        loadFoods(cb) {
            this.$http.get(host + 'food').then(cb);
        },
        loadMonitor(cb) {

        }
    }
}
</script>

<style lang="scss">
.tabs {
    margin: 20px;
    .tab-content {
        min-height: 50px;
    }
}

.patient-detail {
    .box {
        padding: 0 0 40px 0;
    }
    .examination-box-wrapper {
        display: flex;
        margin-top: 20px;
        .examination-box {
            width: 80px;
            height: 60px;
            background: #979797;
            margin-right: 30px;
        }
    }
    .title-box {
        margin-bottom: 50px;
        background-color: #F9F9F9;
        color: #00AAFF;
        height: 60px;
        line-height: 60px;
        font-size: 20px;
        font-weight: bold;
        padding-left: 20px;
    }
    .patient-info {
        display: flex;
        margin-left: 20px;
        .avatar {
            img {
                width: 160px;
            }
        }
        .info {
            margin-left: 40px;
        }
    }
    li {
        flex-grow: 1;
    }
    .item-box {
        display: flex;
        .item-date {
            font-size: 12px;
            color: #4D4651;
            margin: 0 20px;
            flex-shrink: 0;
        }
        .item-content {
            margin-left: 30px;
        }
    }
    .info-table {
        width: 98%;
        margin-top: 10px;
        .info-label {
            background-color: #f8f8f8;
        }
        .info-glu {
            width: 160px;
            height: 20px;
            display: inline-block;
            background-color: #66CC99;
        }
        .info-treatment {
            width: 160px;
            height: 20px;
            display: inline-block;
            background-color: #FF6600;
        }
        .info-food {
            width: 250px;
            height: 20px;
            display: inline-block;
            background-color: #DDDDDD;
        }
        .info-activity {
            width: 120px;
            height: 20px;
            display: inline-block;
            background-color: #DDDDDD;
        }
        .info-value {
            vertical-align: top;
        }
    }
    .food-header {
        padding: 0 10px 10px 10px;
        margin-bottom: 10px;
        h1 {
            line-height: 37px; // font-family: serif;
            font-weight: bold;
            font-size: 20px;
        }
        .tabs {
            margin: 0;
        }
    }
    .food-detail {
        flex-grow: 2;
    }
    .activity {
        margin-top: 20px;
        h1 {
            padding: 10px;
            border-bottom: 1px solid #ddd;
            margin-bottom: 10px; // font-family: serif;
            font-weight: bold;
            font-size: 20px;
        }
        p.desc {
            margin-bottom: 20px;
        }
    }
    .treatment {
        display: flex;
        .history {
            flex-grow: 2;
            h1 {
                margin-bottom: 20px;
            }
            .idoc-table-col:nth-of-type(1) {
                flex-grow: 2;
                background-color: #f6f6f6;
                span {
                    word-wrap: break-word;
                }
            }
        }
        .plan {
            width: 250px;
            margin-left: 50px;
            h1 {
                margin-bottom: 20px;
            }
        }
        h1 {
            font-weight: bold;
            font-size: 18px;
            color: #666;
        }
        .plan-item {
            h4 {
                font-weight: bold;
            }
            margin-bottom:20px;
        }
    }

    .food {
        display: flex;
        .idoc-table-col:nth-of-type(1) {
            flex-grow: 2;
            background-color: #f6f6f6;
            span {
                word-wrap: break-word;
            }
        }
        .food-total {
            width: 250px;
            margin-left: 20px;
            padding-top: 50px;
            text-align: center;
            .food-total-item {
                h4 {
                    // font-family: serif;
                    color: #666;
                }
                p {
                    font-weight: bold;
                    font-size: 32px;
                }
                margin-bottom:20px;
            }
        }
    }
    .activity {
        .activity-info {
            display: flex;
            .activity-info-chart {
                width: 80%;
            }
            .activity-total {
                width: 250px;
                margin-left: 20px;
                padding-top: 10px;
                text-align: center;
                .activity-total-item {
                    h4 {
                        // font-family: serif;
                        color: #666;
                    }
                    p {
                        font-weight: bold;
                        font-size: 32px;
                    }
                    margin-bottom:20px;
                }
            }
        }
    }
    .blood-glucose {
        display: flex;
        .blood-glucose-detail {
            flex-grow: 2;
        }
        .idoc-table-col:first-child {
            flex-grow: 2;
        }
        .blood-glucose-chart {
            width: 200px;
            margin-left: 40px;
            margin-top: 50px;
        }
    }
    .tabs li.is-active a {
        color: #00AAFF;
        border-bottom-color: #00AAFF;
        border-width: 2px;
    }
    .patient-detail-info {
        .tab-content {
            .tabs li.is-active a {
                color: #00AAFF;
                border: 1px solid #dbdbdb;
                background-color: #eee;
                color: #666;
                font-weight: bold;
            }
        }
    }
    .idoc-message {
        img {
            margin-top: 30px;
        }
    }
}
</style>
