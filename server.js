// npm
const express = require('express');
const pug = require('pug');

// app
const app = express();
app.set("view engine", "pug");

var tasks = [
  {id: 1, task: 'Đi chợ'},
  {id: 2, task: 'Nấu cơm'},
  {id: 3, task: 'Rửa bát'},
  {id: 4, task: 'Học code trên CodersX'}
];

app.get("/", (req, res) => {
  res.render('index.pug', {name: 'Vu'});
})

app.get('/todos', (req, res) => {
  var q = req.query.q;
  
  if (q !== undefined) {
    var results = tasks.filter(task => {
      return task.task.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });  
    
    res.render('todos', {
      todoList: results
    });
  } else {
    res.render('todos', {
      todoList: tasks
    });
  }
  
  /* same with the else above, because the method will end at the time when res returns
  res.render('todos', {
    todoList: tasks
  });
  **/
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
