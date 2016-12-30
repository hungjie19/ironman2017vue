<template>
  <div class="container">
    <h1>Vue Filter</h1>
    <hr>
    <div class="row">
      <div class="col-md-4">
        <h2>currency:</h2>
        <input type="number" v-model="demoCurrency" />
        <h3>{{ demoCurrency | currency}}</h3> <!-- 過濾貨幣 -->
      </div>
      <div class="col-md-4">
        <h2>lowercase:</h2>
        <input type="text" v-model="demoLowerCase" />
        <h3>{{ demoLowerCase | lowercase}}</h3> <!-- 過濾小寫 -->
      </div>
      <div class="col-md-4">
        <h2>Letter Grade:</h2>
        <input type="number" v-model="demoScore" />
        <h3>{{ demoScore | letterGrade}}
          <small>GPA: ( {{ demoScore | gpa }} )</small><!-- 過濾 GPA -->
        </h3> <!-- 過濾 Letter Grade -->
      </div>
    </div>
   
    <hr>

    <h3>學期分數：</h3>
    <table class="table">
      <thead>
        <tr>
          <th>name</th>
          <th>Letter Grade</th>
          <th>score</th>
          <th>GPA</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in scoreList">
          <td>{{ item.name }}</td>
          <td>{{ item.score | letterGrade}}</td><!-- 過濾 Letter Grade -->
          <td>{{ item.score }}</td>
          <td>{{ item.score | gpa}}</td><!-- 過濾 GPA -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demoCurrency: 1000,
      demoLowerCase: 'LOWER CASE',
      demoScore: 99,
      scoreList: [
        {name: 'jacky', score: 100},
        {name: 'momo', score: 90},
        {name: 'jasper', score: 89},
        {name: 'eason', score: 80},
        {name: 'mars', score: 79},
        {name: 'mike', score: 70},
        {name: 'ben', score: 69},
        {name: 'Aaron', score: 60},
        {name: 'mary', score: 59},
      ],
    };
  },
};
</script>

<style></style>
