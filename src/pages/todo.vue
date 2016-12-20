<template>
  <div class="container">
    <h1>vue & vuex 2.0 Todo List example</h1>
    <hr>
    <div class="row">
      <div class="input-group col-md-4">
        <input
          type="text"
          class="form-control"
          placeholder="add Todo.."
          v-model="newTodo"
          @keyup.enter="actionAddTodo" />
        <span class="input-group-btn">
          <button class="btn btn-success" type="button" @click="actionAddTodo">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h2>Todo List:</h2>
        <ol>
           <todoItem v-for="(item, index) in todoList" :item="item" />
        </ol>
      </div>
      <div class="col-md-6">
        <h2>Done List:</h2>
        <ol >
          <li v-for="(item, index) in doneList">
            <custom-checkbox :item="item" @toggleTodo="toggleTodo" />
          </li>
        </ol>
      </div>
    </div><!-- end row -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import todoItem from '../components/todo-item.vue';
import customCheckbox from '../components/customCheckbox.vue';

export default {
  components: {
    todoItem,
    customCheckbox
  },
  data () {
    return {
      newTodo: '',
      check: false
    }
  },
  computed: mapGetters({
    todoList: 'getTodo',
    doneList: 'getDone',
    getAllstate: 'getAllstate',
    getCountandTodo: 'getCountandTodo'
  }),
  methods: {
    ...mapActions([
        'toggleTodo',
        'deleteTodo',
    ]),
    actionAddTodo () {
      if( this.newTodo === '' ){
        return;
      }
      this.$store.dispatch('addTodo', this.newTodo);
      this.newTodo = '';
    }
  }
}
</script>

<style></style>
