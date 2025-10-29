# GoQuant Test Report
 
 Application Under Test: GoQuant Platform<br>
 Test Period: October 21-29, 2025<br>
 Tester: Aleena Jolly<br>
 Testing Framework: Playwright with TypeScript<br>
 Browsers Tested: Chromium 141.0, Firefox 144.0<br>
 Mobile Emulation: iPad Mini,Pixel 5,iPhone 11
 


 
 
# Executive Summary
 The GoTrade Platform is an online trading platform that allows users to buy and sell stocks.This report presents the findings from comprehensive automated testing of the GoTrade Platform conducted over one week intensive testing. During this period, I  executed 46 carefully designed test cases including functional validation, user interface testing,negative test scenarios and edge case scenarios. I have identified 2 critical issues and 14 medium priority issues while testing.
 
The most concerning issue faced is Performance testing,when numbers of users simulate at the same time gets more time to interact with the page and the page is not stable this cause order rejection when user try to place order in the GoTrade platform.This causes user to signout and again login to the application.This suggest negative impact to the users to place order.Another issue faced is when run test in different browsers take more time to load and causing timeout error.Also when run test in Mobile Emulation user interface is not responsive .

In the testing phase i have  identified total 2 High priority issues that should be fixed immediately,4 medium-priority improvements for better user experience and functionality issues which are blocking to test, and 1 low priority issue.My recommendation is to notify the development team to fix these asap and moving forward with implement new features.And also UI is not responsive in mobile devices need to consider that case too.

# Testing Methodology
## Testing Approach
In the testing approach i mainly prioritize the entire trading platform which cover all functionalities including user login/logout,order placement and order modification and cancellation, checking order history, metrics data visualization, market data visualization,Account section ,Settings and prefernces.So it ensure that the entire GoTrade platform is working and more user friendly.

The first phase involves user login and logout functionality which includes user can login to the platform with invalid email and password and after login able to add trading accounts such as Binance USDM,Binance COINM,OKX  and able to see all operations.Also check able to click and select all features in the page and able to navigate to all pages.

The second phase covers trading functionality which include user can possible to place order with the trading accounts created and placed orders should be visible in the order history.Also if there are any open orders found user can able to modify and cancel orders.These operation should be performed without any server issues.User can able to view the order book,chart,last trades,order book visualizer according to the trade selected and these values get verifying according to the order placed.Able to select any symbol if user needs to check.User can add accounts and able to modify and delete account details.Covers all trading user flows and check in different browsers.

The final phase covers edge case boundary testing to check whether if trading platform works with extreme inputs and shows any error messages or page gets unresponsive or not.

## Test Case Selection Rationale and In-Depth Analysis
 I developed 46 distinct test cases organized into four primary categories, each addressing specific aspects of application quality and user experience.
 
### Authentication Test Cases (5 tests): 
These test cases mainly focused on user can able to login to the platform with valid email and password and after that able to logout from the platform.Also check with by user entering with  invalid email and try to login then shows error message as user was not found in the system and user entering with invalid passoword and try to login shows the passowrd is invalid also user login with both invalid username and password which display error message as the user was not found in the system.

### Trading Functionality Test cases(34 tests):
These test cases cover the entire trading functionality.User can able to create trading accounts such as Binance USDM,Binance COINM,OKX and able to place order with the selected trade.Able to select any symbol and place orders and placed orders should be displaying in the order history so the user can check whether the order is correct or not and the status of orders should be sometimes Inprogress,completed,rejected.If there are any  open positions user can able to modify order by changing the amount and price and verify whether able to modify and also cancel orders.User can also able to see the orderbook,chart,last trades and market data the values get varying according to the order placemenet.Also include some issues when testing with trading functionality.

### User Interface and Experience Test cases(6 tests):
Perform these tests in diffrent browser such as chrome and firefox and also run in Mobile emulators like Pixel 5, iPad Mini, iPhone 13.So checking whether the design is valid and any issues when open in mobile emulators.The UI is not responsive when test in mobile emulators and sometimes the test takes more time to load when run in different browsers.Also some features are not displaying and visible in mobile emulators.

###  Performance and Scalability Test Cases (1 tests): 
The test takes more time to load and page is not responsive message displayed when user try to check with the GoMarket page.

## Tools and Techniques Employed
The testing framework was built around Playwright as the primary automation tool, chosen for its robust cross-browser support, excellent handling of modern web applications, and comprehensive API for both UI and network-level testing. I implemented the Page Object Model design pattern to ensure test maintainability and reusability, creating separate page objects for each major application screen and component.

##  Challenges Encountered and Solutions Implemented
When number of users interact with the trading platform and try to place order recieves no response from UDP server error which fails the test cases that is the main challenge faced so inorder to resolve this issue a hard reset is possible and try to re-login after that all the trading accounts created is not displayed and able to create another trading accounts which is a huge task.My personal struggle is that i am not familiar with Playwright using Typescript so i started studying basic tutorials from YouTube and try to start automation.

# Detailed Findings
## Critical Issues
### CRIT-001: Order accepted message displaying with larger inputs								
Severity : Critical	<br>							
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ in iPad Mini
2. Select an account
3. Tap on Market Edge 
4. Add filled inputs with larger data
5. Tap Buy/Sell<br>
6. Tap Trade

							
Actual result :  Order accepted message showing<br>
Expected result : Should set max input character limit for enter input<br>
Environment details Device : iPad Mini(Mobile emulation)<br>
To see the output video run test in terminal :<br>
                       npx playwright test binanceorderwithlargerinputs.spec.ts --project="Mobile Safari - iPad Mini"<br>
                       npx playwright show-report                
                     
								
### CRIT-002: Different user Account name showing in order history account tab after placed order									
Severity : Critical	<br>							
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ 
2. Select OKX account
3. Select  any trade
4. Place order and tap trade
6. Verify order history account tab section

							
Actual result :  Different user account name showing<br>
Expected result : Should display account name of the correct user<br>
Environment details Device : <br>
Browser : Chrome
OS : Windows 11<br>
To see the output video run test in terminal :<br>
                       npx playwright test okx_DiffUserAccountnameinOrderhistory.spec.ts --project=chromium --headed    
                       npx playwright show-report 
Refer screenshot:<br>
           <img width="1918" height="919" alt="diff acc name showing" src="https://github.com/user-attachments/assets/dab27690-ed54-422f-8a6b-b4a889e6378b" />



## Medium Priority Issues
### MED-001: GoOps Reconcillation full data is not displaying when open in iPad Mini										
Severity : Medium<br>							
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ in iPad Mini
2. Select any account
3. Tap on GoOps option from account tab
4. Tap Reconcillation 
6. Verify the options by scrolling
							
Actual result :  Data upto Asset tab is only displaying<br>
Expected result : Should display all data related to  reconcillation metrix<br>
Environment details Device : Device : iPad Mini(Mobile emulation)<br>
To see the output video run test in terminal :<br>
                       npx playwright test Reconcillationmetrixdatamissing.spec.ts   --project="Mobile Safari - iPad Mini"     
                       npx playwright show-report 


### MED-002: No response received from UDP server issue displaying when add account			
Functional area : Account<br>
Severity : Medium	<br>							
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ in iPad Mini
2. Select any account
3. Select Admin option from account tab
4. Add account
6. Enter all details and and tap add account and verify 
							
Actual result :  No response received from UDP server displaying<br>
Expected result : Able to add account without any issues<br>
Environment details Device : Device : Pixel 5(Mobile emulation)<br>
To see the output video run test in terminal :<br>
                       npx playwright test AddAccount.spec.ts --project="Mobile Safari-Pixel 5"    
                       npx playwright show-report 

### MED-003: UI seems to be not good if enter account name with large input and try to delete 			
Functional area : Account<br>
Severity : Medium<br>							
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ 
2. Select any account
3. Select Admin option from account tab
4. Add account
6. Enter large input as account name and add account
7. After add account try to delete the same
							
Actual result :  UI display is not good and the account name is displaying as truncated<br>
Expected result : Should set max input character limit for enter input<br>
Environment details Device : Browser : Chrome
                           OS : Windows 11 <br>
To see the output video run test in terminal :<br>
                       npx playwright test AddAccountwithlargeaccountname.spec.ts --project=firefox --headed    
                       npx playwright show-report

### MED-004: Order modified message showing when enter large inputs for open orders 			
Functional area : GoTrade page<br>
Severity : Medium<br>							
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ 
2. Select any account
3. Select Open orders
4. Tap modify and enter large inputs for quantity and amount
6. Verify message displayed
							
Actual result :  Order accepted message displaying even if enter large inputs<br>
Expected result : Should set limit to enter inputs<br>
Environment details Device : Browser : Chrome
                           OS : Windows 11 <br>
To see the output video run test in terminal :<br>
                      npx playwright test Modifyorderwithlargeinput.spec.ts --project=chromium --headed    
                       npx playwright show-report  
 Refer screenshot: <br>
           <img width="1888" height="888" alt="modifyorderwithlargeinput" src="https://github.com/user-attachments/assets/5e594b27-1fba-4264-8bd8-c2397635530a" />


### MED-005: Error message displaying when try to modify account 			
Functional area : Account<br>
Severity : Medium<br>							
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ 
2. Select any account
3. Select Admin option from account tab
4. Modify account

Actual result :  Error message displaying when try to modify account<br>
Expected result : Able to modify account details<br>
Environment details Device : Browser : Firefox
                           OS : Windows 11 <br>
Refer screenshot :<br>
                      <img width="1911" height="917" alt="error when modify account" src="https://github.com/user-attachments/assets/589adf1c-ec0a-4531-9ac8-198ce3ff5eaf" />
   

### MED-006: GoMarket page not responsive message displayed when leave page for sometime
Functional area : GoMarket<br>
Severity : Medium<br>								
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ 
2. Select GoMarket
3. Verify page without doing anything 

Actual result :  Page unresponsive message displaying when leave page without doing any thing <br>
Expected result : Should perform all actions <br>
Environment details Device : Browser : Firefox
                           OS : Windows 11 <br>
Refer screenshot:<br>
                      <img width="1911" height="923" alt="gomarketpagenotresponsive" src="https://github.com/user-attachments/assets/f7e1b0d5-fedd-4811-acf1-5fb0c6642c59" />


### MED-007: Post trade analytics and GoRisk page not displaying data
Functional area : GoRisk/PostTrade Analytics<br>
Severity : Medium<br>								
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ 
2. Select GoRisk/Post Trade Analytics
3.Verify page when loading 

Actual result : No data displaying when open page <br>
Expected result : Should display data <br>
Environment details Device : Browser : Firefox
                           OS : Windows 11 <br>                       
Refer screenshot :<br>
           <img width="1902" height="914" alt="GoRisk data not displaying" src="https://github.com/user-attachments/assets/eaf3b462-af86-41e9-b231-9f360999853e" />

To see the output video run test in terminal :<br>
                      npx playwright test GoRiskandPostTradedatanotdisplaying.spec.ts --project=firefox --headed   
                      npx playwright show-report


### MED-008: Asset utilization graph not showing and orderbook display is not responsive in iPhone 11
Functional area : GoTrade page<br>
Severity : Medium<br>								
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ in iPhone 11
2. Select OKX account
3.Verify Asset utilization and orderbook display

Actual result : Order book display is not responsive and Asset utilization graph not displaying <br>
Expected result : Should display correct data and UI should responsive <br>
Environment details Device : Browser : Firefox
                           OS : Windows 11 <br>                       
Refer screenshot :<br>
           <img width="508" height="1016" alt="assetutilization" src="https://github.com/user-attachments/assets/4800a220-5458-4d8a-99e2-8029a759f687" />
		   <img width="1180" height="2408" alt="orderbookdisplay" src="https://github.com/user-attachments/assets/6797d753-24a9-4012-be09-416c048c0a7b" />


To see the output video run test in terminal :<br>
                      npx playwright test Assetutilizationandorderbookdisplay.spec.ts --project="Mobile Safari"  
                      npx playwright show-report


### MED-009: No response recieved from UDP server when place Binance order
Functional area : GoTrade page<br>
Severity : Medium<br>								
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ 
2. Select Binance USDM account
3.Tap Market from more option and place order

Actual result : Order accepted message display and after NO response from UDP server error display <br>
Expected result : Able to place order and display in order history <br>
Environment details Device : Browser : Chrome
                           OS : Windows 11 <br>                       
Refer screenshot :<br>
           <img width="1923" height="904" alt="binanceordernoresponsefromudpserver" src="https://github.com/user-attachments/assets/cb1422bd-d26d-416d-bbbc-3076763aac80" />

To see the output video run test in terminal :<br>
                      npx playwright test ErrorwhenplaceorderinBinance.spec.ts --project=chromium --headed 
                      npx playwright show-report


### MED-010: Bad request message displayed on tap Kill edge algorithm
Functional area : GoTrade page<br>
Severity : Medium<br>								
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ 
2. Select any account 
3.Tap Kill edge algorithm and tap confirm
4. Verify message displayed

Actual result : Bad request message displayed on tap <br>
Expected result : Able to do all actions <br>
Environment details Device : Browser : Chrome
                           OS : Windows 11 <br>                       
Refer screenshot :<br>
          tests/Badrequestrecievedontapkilledge.spec.ts-snapshots

To see the output video run test in terminal :<br>
                      npx playwright test Badrequestrecievedontapkilledge.spec.ts --project=chromium --headed 
                      npx playwright show-report


### MED-011: If placed order during offline both order placed and error while placing message displayed
Functional area : GoTrade page<br>
Severity : Medium<br>								
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ 
2. Select any account and login
3.Turn OFF network
4. Place order and verify

Actual result : Both order placed and error while placing order message displayed <br>
Expected result : Proper message should display on conditions <br>
Environment details Device : Browser : Chrome
                           OS : Windows 11 <br>                       
Refer screenshot :<br>
          <img width="1916" height="914" alt="offline" src="https://github.com/user-attachments/assets/918ebda3-80c9-4fe8-856a-808fc8ae74dd" />


To see the output video run test in terminal :<br>
                      npx playwright test orderplacedduringoffline.spec.ts --project=chromium --headed
                      npx playwright show-report


### MED-012: Authentication failed message display when adding new Binance account
Functional area : Account<br>
Severity : Medium<br>								
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ 
2. Select admin from account tab
3.Tap add account
4. Create new 3 binance account
5. After successfully creating 3 accounts create 4th account
6. Verify message displayed

Actual result : Authentication failed message displayed <br>
Expected result : Able to add account without any issues(In case of OKX able to add account) <br>
Environment details Device : Browser : Firefox
                           OS : Windows 11 <br>                       
Refer screenshot :<br>
         tests/Authenticationfailedwhenaddbinanceaccount.spec.ts-snapshots

To see the output video run test in terminal :<br>
                      npx playwright test Authenticationfailedwhenaddbinanceaccount.spec.ts --project=firefox --headed
                      npx playwright show-report					  


### MED-013: Not able to see Modify/Delete account option in iPhone 11
Functional area : Account<br>
Severity : Medium<br>								
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ in iPhone 11
2. Select admin from account tab
3.Verify the account page opening in mobile emulation(iPhone 11)
4. Verify all options
   
Actual result : Modify/Delete option not dispalying <br>
Expected result : Able to perform all operation even if open in mobile emulation <br>
Environment details Device :  Device : iPhone 11(Mobile emulation)<br>                    
Refer screenshot :<br>
         tests/Notabletomodifyordeleteaccount.spec.ts-snapshots

To see the output video run test in terminal :<br>
                      npx playwright test Notabletomodifyordeleteaccount.spec.ts --project="Mobile Safari"
                      npx playwright show-report



### MED-014: No data displaying in orderbook ,last trades,spread and market depth when enable consolidated mode
Functional area : GoTrade page<br>
Severity : Medium<br>								
Steps to Reproduce :								
1. Open the URL: http://test1.gotrade.goquant.io/ in iPad Mini
2. Select any account 
3.Enable consolidated mode
4. Verify orderbook ,last trades,spread and market depth
   
Actual result : No data displaying in orderbook ,last trades,spread and market depth <br>
Expected result : Should display data <br>
Environment details Device :  Device : iPad Mini(Mobile emulation)<br>                    
Refer screenshot :<br>
         tests/Nodatadisplayingwhenenableconsolidatedmode.spec.ts-snapshots

To see the output video run test in terminal :<br>
                      npx playwright test Nodatadisplayingwhenenableconsolidatedmode.spec.ts --project="Mobile Safari - iPad Mini"
                      npx playwright show-report



# Technical Analysis
## Performance Observations
The performance analysis revealed concerning patterns that suggest the application may struggle under real-world usage conditions.If numbers of users login at the same time it may cause data to load more time.

## Browser Compatibility Issues
Cross-browser testing revealed significant inconsistencies that could impact user experience across different platforms.If run same test in different browsers like Chrome and Firefox sometimes the test takes more time to load in one browser other than the one.Not able to run tests on webkit browsers.When run in mobile emulators UI is not responsive and text and some features are not visible and not able to scroll page in full lenght.

##  Code Quality Observations
 The codebase analysis revealed several architectural and implementation issues that impact both functionality and maintainability. API error handling was inconsistent across different endpoints, with some returning structured error objects while others provided only generic error messages. This inconsistency
 makes it difficult to provide meaningful feedback to users and complicates debugging efforts.

 # Test Execution Summary
 The comprehensive test execution revealed significant quality concerns across all testing categories, with an overall pass rate of 63% indicating that the application requires substantial improvements before production deployment. Of the 46 test cases executed, 29 passed successfully while 17 failed, with no tests
 skipped due to technical limitations. 
 
 The test results varied significantly across different functional areas,out of 17 failed test cases some of them are related to trading functionality when try to place order.Not setting any limit to place order,No response from UDP server error diaply when place Binance USDM,when run tests in mobile emulations UI is not responsive some features are missing and not able to scroll to page full width,order history and open orders are not properly displaying,differnet user accounts are displaying in accounts tab.
 
 Other issues are related to add account section like sometimes Authentication failed message displayed for Binance if added 3 accounts successfully and add another one,error message when modfiy account,not able to see some options when run tests in mobile emulations.

 # Recommendations for Improvement
 Based on the testing execution and issues identified on the GoTrade platform, I recommend to focus on fixing these 17 failed cases,prioritizing critical and high-impact issues.Address the developers with these issues correctly and also address usability issues to improve overall user experience.



















