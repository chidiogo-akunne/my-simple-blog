$(document).ready(function(){

    $.ajax({
      url: 'http://localhost:3000/posts',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        $(data).each(function(i, post) {
          $('#table-body').append($('<tr>')
            .append($('<td>').append(post.id))
            .append($('<td>').append(post.title))
            .append($('<td>').append(post.description))
            .append($('<td>').append(post.author))
            .append($("<td>").append(`
              <i class="far fa-edit editPost" data-pid="`+post.id+`"></i> 
              <i class="fas fa-trash deletePost" data-pid="`+post.id+`"></i>
            `)));
        });
      }
    });


    //create new post
    $('#submitPost').on('click', function(e) {
        let data = {
          title: $('#title1').val(),
          author: $('#author1').val(),
          description: $('#description1').val()
        }
        createPost(data);
  $('#form2').trigger('reset');
  $('#form2').toggle();
  e.preventDefault();
});

    });



    });
        