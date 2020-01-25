// Retrieve user with id 
 app.get('/user/:id', function (req, res) {
     let user_id = req.params.id;
     if (!user_id) {
      return res.status(400).send({ error: true, message: 'Please provide user_id' });
     }
     dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
      if (error) throw error;
       return res.send({ error: false, data: results[0], message: 'users list.' });
     });
 });