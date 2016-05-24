
$(document).ready(function() {
  var firstQuery = true;
  $('#get_userdata').on('click', function() {
    $('#loading_data_container').attr('style', 'visibility: visible');
    $('.returned_data').empty();
    var username = $('#supply_username').val();
    getUserData(username, firstQuery);    
  });

   /*
    I want to make sure that if it's the first query, all of #user_data slides
    in but only AFTER getUserData() has finished fetching its data. If not the first
    query, slide out all members of .returned_data, empty them, fetch the data and then
    slide in the data.
  */
  function getUserData(user_url, firstRequest) {
    $.ajax({
      url: "https://api.github.com/users/"+user_url+"?client_id=4b712b7ad083c6a941ff&client_secret=bff80cabc48a841004dc5eee29c4570fc93749af"
    }).then(function(data) {
      $('#user_id .returned_data').append(data.id);
      $('#user_login .returned_data').append(data.login);
      $('#present_company .returned_data').append(data.company);
      $('#num_public_repos .returned_data').append(data.public_repos);
      $('#num_followers .returned_data').append(data.followers);
      $('#num_following .returned_data').append(data.following);
      $('#avatar_pic_container').append('<img src='+data.avatar_url+' id=\'avatar_pic\'/>');
    }).then(function() {
       $('#loading_data_container').attr('style', 'visibility: hidden');
       if(firstRequest) {
         $('#user_data').show('slide', {direction: 'left'}, 1000);
         firstQuery = false;
       }
        else {
          $('.returned_data').each(function() { $(this).show('slide', {direction: 'left'}, 1000); });
        }
    });
  };
});