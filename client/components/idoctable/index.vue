<template>
    <div class="idoc-table">
        <div class="idoc-table-header columns is-gapless">
            <div class="idoc-table-col column"
                 v-for="col in sourceData.header">
                {{col}}
            </div>
        </div>
        <div class="idoc-table-body columns is-gapless"
             v-for="row in sourceData.body">
            <div class="idoc-table-col column"
                 v-bind:class="{ isMergedUp: col.isMergedUp }"
                 v-for="col in row.cols">
                <span v-html="col.value"
                      v-if="col.type !== 'img'"></span>
                <img :src="col.value"
                     v-if="col.type === 'img'"></img>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        sourceData: {
            required: true
        }
    },
    components: {

    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss">
.idoc-table {
    .idoc-table-header,
    .idoc-table-body {
        font-family: serif;
        font-size:12px;
        margin-bottom: 0 !important;
        .idoc-table-col.column {
            padding: 10px;
            border-top: 1px solid #ddd;
            border-right: 1px solid #ddd; // border-bottom: 1px solid #ddd;
            &.isMergedUp {
                border-top: none;
                span{
                    position: relative;
                    top:-20px;
                }
            }
            &:nth-of-type(1){
                background:#f6f6f6;
            }
        }
        img {
            display: block;
            margin: 0 auto;
            width: 30px;
        }
    }
}
</style>