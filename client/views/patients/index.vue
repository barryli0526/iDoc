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
                        <th>Patient ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Disease</th>
                        <th>Treatment</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr @click="goToPatientDetail(patient)"
                        v-for="patient in patients">
                        <input type="checkbox"
                               v-model="patient.checked">
                        <td>{{patient.id}}</td>
                        <td>{{patient.name}}</td>
                        <td>{{patient.gender}}</td>
                        <td>{{patient.years}}</td>
                        <td>{{patient.disease}}</td>
                        <td>{{patient.treatment}}</td>
                        <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>                        
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
                name: "John Smith",
                gender: "Male",
                years: "45",
                disease: "Diabetes Type 2",
                treatment: "51",
                status: "SSSSSSSSSSSSSS",
                checked: false
            },
            {
                id: 2,
                name: "Lauren Delgado",
                gender: "Male",
                years: "34",
                disease: "Diabetes Type 2",
                treatment: "60",
                status: "SSSSSSSSSSSSSS",
                checked: false
            },
            {
                id: 3,
                name: "Kyle Barnett",
                gender: "Female",
                years: "50",
                disease: "Acanthamoeba Infection",
                treatment: "40",
                status: "SSSSSSSSSSSSSS",
                checked: false
            },
            {
                id: 4,
                name: "Text4",
                gender: "Text44",
                years: "1",
                disease: "Acanthamoeba Infection",
                treatment: "123",
                status: "SSSSSSSSSSSSSS",
                checked: false
            },
              {
                id: 5,
                name: "Text5",
                gender: "Text44",
                years: "1",
                disease: "Acanthamoeba Infection",
                treatment: "123",
                status: "SSSSSSSSSSSSSS",
                checked: false
            },
              {
                id: 6,
                name: "Text6",
                gender: "Text44",
                years: "1",
                disease: "Acanthamoeba Infection",
                treatment: "123",
                status: "SSSSSSSSSSSSSS",
                checked: false
            },
              {
                id: 7,
                name: "Text7",
                gender: "Text44",
                years: "1",
                disease: "Acanthamoeba Infection",
                treatment: "123",
                status: "SSSSSSSSSSSSSS",
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
    // font-family: serif;
    table {
        tr {
            cursor: pointer;
        }
    }
    .fa-exclamation-triangle{
        color:orange;
        font-size:20px;
    }
    .title {
        color: #00AAFF;
        font-weight: bold;
        font-size: 20px;
    }
}
</style>
