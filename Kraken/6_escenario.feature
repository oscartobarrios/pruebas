Feature: Login, list post, and create post 
        @user1 @web
        Scenario: Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts
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
                And I wait for 3 seconds
                And I enter new post body "body text post"
                Then I navigate to page "<LISTPOSTPAGE>"
                And I wait for 3 seconds

    