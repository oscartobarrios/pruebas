Feature: Login, list post, and delete post 
        @user2 @web
        Scenario: Ingresar con cuenta válida, Listar Posts, Delete Post, Listar Posts
                Given I navigate to page "<LOGINPAGE>"
                And I wait for 5 seconds
                When I enter email "<USERNAME1>"
                And I wait for 2 seconds
                And I enter password "<PASSWORD1>"
                And I wait for 2 seconds
                And I click sing in
                And I wait for 2 seconds
                Then I navigate to page "<NEWPOSTPAGE>"
                And I enter new post title "Nuevo post"
                And I wait for 5 seconds
                And I enter new post body "body text post"
                And I wait for 5 seconds
                Then I navigate to page "<LISTPOSTPAGE>"
                And I wait for 3 seconds
                And I click firts post 
                And I wait for 5 seconds
                And I click settings post
                And I wait for 5 seconds
                And I click delete post
                And I wait for 5 seconds
                And I click confirm delete post
                And I wait for 5 seconds
                Then I navigate to page "<LISTPOSTPAGE>"
                And I wait for 30 seconds
    