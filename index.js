let user = {
  name: "Selahadin",
  age: 26,
  style: "Fabulouse",
  blogs: [
    { title: "why Tech matters"},
    {title: "Africa on the rise"}
  ],
  login: function(){
    console.log('loged in');
  },
  logout: function(){
    console.log('logged out')
  },
  logBlogs: function(){
    console.log("Blogs about the user");
    this.blogs.forEach((blog)=>{
      console.log(blog.title);
    })
  }
}
console.log(user.logBlogs());