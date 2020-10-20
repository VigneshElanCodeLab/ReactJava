import axios from 'axios'
class TodoDataService{
    getTodos(name){
        console.log('executed')
      return  axios.get(`http://localhost:8081/user/${name}/todos`);
    }
    getTodo(name,id){
      console.log('executed')
    return  axios.get(`http://localhost:8081/user/${name}/todos/${id}`);
  }
    deleteTodos(name,id){
        console.log('executed deleteTodo')
      return  axios.delete(`http://localhost:8081/user/${name}/todos/${id}`);
    }
    updateTodos(name,id,todo){
        console.log('executed updateTodo')
      return  axios.put(`http://localhost:8081/user/${name}/todos/${id}`,todo);
    }
    createTodos(name,todo){
      console.log('executed addTodo')
    return  axios.post(`http://localhost:8081/user/${name}/todos/`,todo);
  }
  
}
export default new TodoDataService();