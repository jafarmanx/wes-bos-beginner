/*
 Question 1 is asking to provide 
 Emails for Users that have Admin or Contrubutor 
 access for website '07'
 */
SELECT 
	CUSTOMERS.EMAIL
FROM WEBSITES
INNER JOIN CUSTOMERS ON 
	WEBSITES.CUSTOMER_ID = CUSTOMERS.CUSTOMER_ID
WHERE WEBSITES.WEBSITE_ID = '07'
AND (
    WEBSITES.IS_ADMIN = TRUE 
    OR WEBSITES.IS_CONTRIBUTOR = TRUE
    )

/*
 Question 2 asking to provide 
 Emails for Users that have both Admin and Contrubutor access
 Or do not have either ADMIN or CONTRUBUTOR access
 */
SELECT 
	CUSTOMERS.EMAIL
FROM WEBSITES
INNER JOIN CUSTOMERS ON 
	WEBSITES.CUSTOMER_ID = CUSTOMERS.CUSTOMER_ID
WHERE 
    (
     WEBSITES.IS_ADMIN = TRUE 
     AND WEBSITES.IS_CONTRIBUTOR = TRUE
    )
OR
    (  
    WEBSITES.IS_ADMIN = FALSE 
    AND WEBSITES.IS_CONTRIBUTOR = FALSE
    )

/*
 For Question 3 Asking to provide 
 Customer ID for all users that
 are on more than one website
 and are current users
    Note current users are based on CHURNED_ON is NULL for aleast one website
 */

SELECT 
	WEBSITES.CUSTOMER_ID
FROM WEBSITES
WHERE 
	WEBSITES.CUSTOMER_ID in (
  		SELECT 
    	WEBSITES.CUSTOMER_ID
		FROM WEBSITES
		WHERE CHURNED_ON IS NULL
	)
GROUP BY WEBSITES.CUSTOMER_ID
HAVING COUNT(WEBSITES.CUSTOMER_ID) > 1;

/*
 For Question 4 Asking to provide 
 Count of customer that are on trial for a given date
 Note: if there is a purchase date the customer is no longer on trial

 */
 
SELECT 
	COUNT (WEBSITES.CUSTOMER_ID)
FROM WEBSITES
WHERE 
     WEBSITES.PURCHASED_ON IS NULL 
     AND WEBSITES.TRIALED_ON = DATE('2018-04-08T12:00:00')  
GROUP BY WEBSITES.CUSTOMER_ID;


923431811704
