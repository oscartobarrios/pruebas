Feature: Login, list post, and publish post 
        @user5 @web
        Scenario: Ingresar con cuenta válida, Listar Posts, Crear Post, Publish Post, Listar Posts
                Given I navigate to page "<LOGINPAGE>"
                And I wait for 5 seconds
                When I enter email "<USERNAME1>"
                And I wait for 2 seconds
                And I enter password "<PASSWORD1>"
                And I wait for 2 seconds
                And I click sing in
                And I wait for 2 seconds
                Then I navigate to page "<NEWPOSTPAGE>"
                And I enter new post title "Post One"
                And I wait for 5 seconds
                And I enter new post body "body text post"
                And I wait for 5 seconds
                Then I navigate to page "<LISTPOSTPAGE>"
                And I wait for 5 seconds
                And I click firts post to edit
                And I wait for 5 seconds
                And I click publish post
                And I wait for 5 seconds
                And I click confirm publish post
                And I wait for 5 seconds
                And I click confirm publish post
                Then I navigate to page "<LISTPOSTPAGE>"

                And I wait for 30 seconds
    