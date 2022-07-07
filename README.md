Day 1: 
 1. We created a project plan to follow during this weeks.
  
  The plan
   ######################################################################################################################################################################
  
      Project Plan

      Project Descriptions
      Skill-Matrix is a project where the main goal is to collect data from the survey.This survey will contain many questions for a large amount of users in different         timestamps. The questions will be displayed in different types.

      Project Objectives
      - Collecting information, main goals and planning the visual contect of the surveys .
      -Writing code ,testing and reviewing .

      Requirements
      The project must meet the list of requirements to achieve success.
      -Improve the user experience.
      -Performing end user functionality analysis, current web review
      and information architecture design.
      -Full site testing to minimize any possible error.


      Project Milestone
      Project Start  04/07/2022
      Planing 04/07 – 05/07
      Coding  05/07 – 13/07
      Testing , Review  13/07 – 15/07
      
       
  2. We created tables for database.

######################################################################################################################################################################

Day 2:


 1. After task day 1 to start up the p'roject, 
 in the day 2(two) we located a lot of issues with types of variables .This was a big problem for us because the types of the variables didn't correspond with the       large amount of data that the app is going to collect.
 Our main focus was dealing with types of variables and after finishing, our main thoughts was to prepare the dummy data in seed table. 


 2.The seed's table is created in base of the tables we was created before for users, board, survey, questins and asnswers. Inserting data had an issue that the type of the variables didn't had the default value. Every table has her own primary and foreign key to have relations betwwen them and the data was succesfully applied on HASURA.

######################################################################################################################################################################

Day 3. 
   1.	Day 3 was a really difficult for our team and we think in one point we have failed to create or to manage our ideas for creating backend and API session, because       we tried to created api with hasura-actions but something went wrong and we didn’t get the result we were expected. 


   2.	Me and my team tried a lot of different ways but couldn’t fixed the problem we faced. Tables created in our database with our request from query actions was           really difficult to create and receive the right data.  


   3.	First error was “status:500”, this error was present cause of our poor connection with database. The 500 error was handled by our TeamLeader by correcting the         connection between hasura and backend.


   4.	Second error was "unexpected response" . This error happened because the database had no relations with the backend part. After a little while of research we           found the solution on github.


   5.	Another error we faced was “webhook handler”, this kind of error was handled with the help of our senior colleges. 


   6.	So we thought that it was the last error but we were wrong,  cause the result we had wasn’t the expected one for our main idea. Actions in Graphql Hasura               database is our main focus in this days. Our ideas are growing in every moment and we have already tried almost all of them. 


   7.	Youtube, react docs, hasura docs, stackoverflow, our seniors colleges here are our best shot to improve our skills to deal with our errors.


######################################################################################################################################################################

Day 4
•	As I told that day 3 was a total failer for us day 4 was nothing like that.

•	We carried on and tried creating the API with React Query and it was a great try because we successfully  fetched the data we wanted from the database. Of course it was not easy to do but with a little search and the help of our colleges we managed to do it.

•	One error that I faced was “ {"errors":[{"extensions":{"code":"validation-failed","path":"$.selectionSet.questions"},"message":"field \"questions\" not found in type: 'query_root'"}]} ”. For this error I found on stackoverflow that I didn’t had permission so I change the hasura permissions and everythik worked fine.

•	The second error was that when I tried to make 2 query on the same component one of them showed undefined data on console and the right data on network. I find by the help of Enea that the problem was that we cant ose 2 ReactQuery in 1 components.

•	Another error was “ Too many re-randers ” . This error was caused because I was setting data to one object every second.

•	In the end we managed to make a list of questions and show them on frontend.

##############################################################################################################################################################33

 

  
