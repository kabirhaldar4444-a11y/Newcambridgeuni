Create a modern, responsive "Customer Service Delivery & Feedback" page for my React website with Web3Forms integration.

1. Header Banner & Intro:

- Dark navy/gradient hero banner with title "CUSTOMER SERVICE DELIVERY & FEEDBACK FORM" and subtitle "Official Delivery Confirmation & Quality Assurance Protocol".
- "Dear Learner" welcome card thanking them for choosing the services and explaining that this form confirms service delivery and maintains transparent delivery records.

2. Location Verification Card:

- Pincode (6-digit validation). When 6 digits are typed, fetch State and City/Village from: https://api.postalpincode.in/pincode/{PINCODE}
- State and City/Village text inputs auto-filled from pincode with manual edit option.
- "Detect Location" GPS button on the right to auto-detect coordinates and reverse-geocode into pincode, state, and city.
- Silently capture client IP in the background for delivery verification without displaying it on the screen.

3. Form Sections:

- SECTION 1: STUDENT DETAILS
  - Full Name (required)
  - Registered Email ID (required)

- SECTION 2: SERVICE DELIVERY CONFIRMATION (interactive radio pill buttons)
  - 4. Have you received your GST Invoice?
       [Yes, received successfully. | Received, but require clarification/correction.]
  - 5. Have you received your PDF Study Materials?
       [Yes, received and downloaded successfully. | Received, but require clarification]
  - 6. Have you received your Video Lecture Access / Video Lecture Links?
       [Yes, received and accessed successfully. | Received, but require clarification]
  - 7. Have you successfully accessed all the services and learning resources promised as part of your purchase?
       [Yes, received successfully. | Yes, but need some assistance.]
  - 8. Do you require extra help or guidance?
       [Yes | No]

- SECTION 3: SERVICE QUALITY & SATISFACTION (pill buttons)
  - 9. How would you rate your overall experience?
       [Excellent | Very Good | Good | Average | Needs Improvement]
  - 10. How satisfied are you with the speed and efficiency of our service delivery?
        [Very Satisfied | Satisfied | Neutral]
  - 11. How satisfied are you with the communication and support provided by our team?
        [Very Satisfied | Satisfied | Neutral]
  - 12. Got a FEEDBACK? We are all ears.. (textarea)

- SECTION 4: CUSTOMER ACKNOWLEDGEMENT
  - Checkbox with statement: "I confirm that the information provided above is accurate to the best of my knowledge. My responses regarding the receipt of the GST Invoice, Study Materials, and Video Lectures reflect my actual delivery and access status."
  - Submit button with loading spinner.

4. Closing Box Message:

- Card at the bottom with:
  "Thank You for Choosing Us!"
  "Your feedback matters to us. We appreciate your trust and look forward to supporting your learning journey."
  "Committed to Transparent Service Delivery & Learner Satisfaction."

5. Web3Forms Submission:

- Send POST request to https://api.web3forms.com/submit
- Set from_name, email, replyto, and from_email to the student's entered Registered Email ID so the email shows the learner as sender.
- Include structured fields: submission_portal, submission_portal_url, student_full_name, registered_email, pincode, state, city_or_village, geo_location, client_ip_address, q4 to q12 responses, customer_acknowledgement (full text + Confirmed & Agreed), thank_you_closing_message, and company_pledge.
- Add an environment variable or placeholder for WEB3FORMS_ACCESS_KEY.
- Show an inline verified receipt card upon successful submission.

here is the exactly email like this want

Hello,

A new form has been submitted on your website. Details below.

Email
testi@gmail.com
Submission portal
Elite Toolistic Official Service Delivery Confirmation & Feedback Portal
Submission portal url
https://elitetoolistic.com/feedback
Client ip address
157.50.173.162
Geo location
13.027717, 77.600323
Student full name
test
Registered email
testi@gmail.com
Pincode
560032
State
Karnataka
City or village
Bangalore
Q4 gst invoice received
Yes, received successfully.
Q5 pdf study materials received
Received, but require clarification
Q6 video lecture access received
Yes, received and accessed successfully.
Q7 all services accessed
Yes, but need some assistance.
Q8 require extra help guidance
Yes
Q9 overall experience
Needs Improvement
Q10 speed and efficiency
Neutral
Q11 communication and support
Neutral
Q12 feedback comments
test
Customer acknowledgement
I confirm that the information provided above is accurate to the best of my knowledge. My responses regarding the receipt of the GST Invoice, Study Materials, and Video Lectures reflect my actual delivery and access status. (Confirmed & Agreed)
Thank you closing message
Thank You for Choosing Elite Toolistic! Your feedback matters to us. We appreciate your trust and look forward to supporting your learning journey.
Company pledge
Elite Toolistic - Committed to Transparent Service Delivery & Learner Satisfaction.
Submission timestamp
5/11/2026, 7:26:02 pm

replace to all Elite Toolistic to Cambridge Learning Services make sure wheni enter pincode that time and when i decect my location that time get my exactly Geo loaction and alos get exacly ipv4
