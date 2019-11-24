new Vue({
    el: '#app',
    data: {
      users: [{ name: 'AlekseiKom',email:'Lep4k83@gmail.com' }] 
    },
    methods: {
      addUser: function () {
        this.users.push({ name: '',email:'' });
      },
      deleteUser: function (index) {
        console.log(index);
        console.log(this.finds);
        this.users.splice(index, 1);
        if(index===0)
        this.addUser()
      }
    }
  });