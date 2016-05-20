
          $(document).ready(function() {
            
          $('#get_userdata').on('click', function() {
            var username = $('#supply_username').val();
            $('.returned_data').empty();
            var userData = getUserData(username);
          });
            
          function getUserData (user_url) {
            $.ajax({
        url: "https://api.github.com/users/"+user_url+"?client_id=4b712b7ad083c6a941ff&client_secret=bff80cabc48a841004dc5eee29c4570fc93749af"
    }).then(function(data) {
            $('#user_id .returned_data').append(data.id);
            $('#user_login .returned_data').append(data.login);
            $('#present_company .returned_data').append(data.company);
            $('#num_public_repos .returned_data').append(data.public_repos);
            $('#num_followers .returned_data').append(data.followers);
            $('#num_following .returned_data').append(data.following);
            $('#avatar_pic').append('<img src='+data.avatar_url+' width=\'300px\' height=\'300px\'/>');
            });
          };
    
});