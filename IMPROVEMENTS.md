#Immprovements
1. I only just realised that the "Upcoming" launches are all in the past! I could probably get trid of this tab.
2. I couldn't quite get MSW to work in Next.js so it was hard to test the requests. I have added the tests with `.skip` 
for now but would want to spend a bit more time to get these passing.
3. It would be nice to implement filtering sorting. There isn't too much data so you could probably be performed client side. 
If the response was much bigger, I could use the `query` api of spacex to perform the filtering or sorting.
4. If the data was much larger (and slower to load) then I could paginate the request for better performance. I have used SWR to cache responses, and the
response was pretty fast so I just paginated on the client for better UX.
