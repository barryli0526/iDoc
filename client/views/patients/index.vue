<template>
    <div class="patients">
        <article class="tile is-child box">
            <h4 class="title">Patients List</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th class="selectAll">
                            <input type="checkbox"
                                   id="checkall"
                                   @click="selectAll"
                                   :checked="isSelectAll">
                        </th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Years</th>
                        <th>Disease</th>
                        <th>ColumAAA</th>
                        <th>ColumBBB</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr @click="goToPatientDetail(patient)"
                        v-for="patient in patients">
                        <input type="checkbox"
                               v-model="patient.checked">
                        <td>{{patient.name}}</td>
                        <td>{{patient.gender}}</td>
                        <td>{{patient.years}}</td>
                        <td>{{patient.disease}}</td>
                        <td>{{patient.tel}}</td>
                        <td>{{patient.description}}</td>
                        <td>{{patient.description}}</td>
    
                    </tr>
                </tbody>
            </table>
        </article>
    </div>
</template>

<script>

export default {
    data() {
        return {
            patients: [{
                id: 1,
                name: "Text1",
                gender: "Text11",
                years: "1",
                disease: "Acanthamoeba Infection",
                tel: "123",
                description: "SSSSSSSSSSSSSS",
                checked: false
            },
            {
                id: 2,
                name: "Text2",
                gender: "Text22",
                years: "1",
                disease: "Acanthamoeba Infection",
                tel: "123",
                description: "SSSSSSSSSSSSSS",
                checked: false
            },
            {
                id: 3,
                name: "Text3",
                gender: "Text33",
                years: "1",
                disease: "Acanthamoeba Infection",
                tel: "123",
                description: "SSSSSSSSSSSSSS",
                checked: false
            },
            {
                id: 4,
                name: "Text4",
                gender: "Text44",
                years: "1",
                disease: "Acanthamoeba Infection",
                tel: "123",
                description: "SSSSSSSSSSSSSS",
                checked: false
            }
            ]
        }
    },
    computed: {
        isSelectAll: function () {
            return this.patients.every(function (patient) {
                return patient.checked;
            });
        }
    },
    methods: {
        selectAll: function () {
            var select = this.isSelectAll;
            this.patients.forEach(function (patient) {
                patient.checked = !select;
                console.log(patient.checked);
            });
            this.isSelectAll = !select;
        },
        goToPatientDetail: function (patient) {
            this.$router.push({ name: 'Detail', params: { userId: patient.id } })
        }
    }
}

</script>

<style lang="scss" scoped>
.selectAll {
    padding-left: 0;
}

.patients {
    font-family: serif;
    table {
        tr {
            cursor: pointer;
        }
    }
    .title {
        color: #00AAFF;
        font-weight: bold;
        font-size: 20px;
    }
}
</style>
