 Test Report: GoTrade Platform
 Test Period: October 21-29, 2025
 Tester: Aleena Jolly
 Testing Framework: Playwright with TypeScript
 Browsers Tested: Chromium 141.0, Firefox 144.0, Mobile Emulation(iPad Mini,Pixel 5,iPhone 11
 
# Executive Summary
 The GoTrade Platform is an online trading platform that allows users to buy and sell stocks.This report presents the findings from comprehensive automated testing of the GoTrade Platform conducted over one week intensive testing. During this period, I  executed 36 carefully designed test cases including functional validation, user interface testing,negative test scenarios and edge case scenarios. I have identified 6 issues while testing and also 3 negative test scenarios.
 
The most concerning issue faced is Performance testing,when numbers of users simulate at the same time gets more time to interact with the page and the page is not stable this cause order rejection when user try to place order in the GoTrade platform.This causes user to signout and again login to the application.This suggest negative impact to the users to place order.Another issue faced is when run test in different browsers take more time to load and causing timeout error.Also when run test in Mobile Emulation user interface is not responsive .

In the testing phase i have  identified total 2 High priority issues that should be fixed immediately,4 medium-priority improvements for better user experience and functionality issues which are blocking to test, and 1 low priority issue.My recommendation is to notify the development team to fix these asap and moving forward with implement new features.

# Testing Methodology
## Testing Approach
In the testing approach i mainly prioritize the entire trading platform which cover all functionalities including user login/logout,order placement and order modification and cancellation, checking order history, metrics data visualization, market data visualization,Account section ,Settings and prefernces.So it ensure that the entire GoTrade platform is working and more user friendly.

The first phase involves user login and logout functionality which includes user can login to the platform with invalid email and password and after login able to add trading accounts such as Binance USDM,Binance COINM,OKX  and able to see all operations.Also check able to click and select all features in the page and able to navigate to all pages.

The second phase covers trading functionality which include user can possible to place order with the trading accounts created and placed orders should be visible in the order history.Also if there are any open orders found user can able to modify and cancel orders.These operation should be performed without any server issues.
