
          $(document).ready(function() {
            
          $('#get_userdata').on('click', function() {
            var username = $('#supply_username').val();
            $('.returned_data').empty();
            var userData = getUserData(username);
          });
          /*Note: you have to get your own client_id and client_secret from 
          GitHub OAuth applications. The functional ones that were here before
          have been deleted on GitHub and removed from this script. The ones used here 
          are obviously placeholders.*/
          var clientId = 123
          var clientSecret = 123
          function getUserData (user) {
            $.ajax({
        url: "https://api.github.com/users/"+user+"?client_id=" + clientId + "&client_secret=" + clientSecret
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
