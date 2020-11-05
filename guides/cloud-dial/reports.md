---
title: Reports*
date: 2020-03-16T10:31:44.610Z
---
# Reports

The *Reports Page* contains a list of reports that allow greater insight into completed campaigns.

## Agent Call Count Report

**Description:**

This report shows the total amount of calls taken by each agent during the date range selected.

**Usage:**

Choose from the following options:

* '**Start Date':** Beginning date range.
* '**End Date':** End date range.

Click '**Download**' to download the PDF report.

The downloaded report contains a graph and a table showing the total amount of calls taken by each agent during the timeframe selected.



## Call Results

**Description:** 

This report shows the call results for all calls made during the date range selected.

**Usage:**

Choose from the following options:

* '**Ended Campaigns':** Either select '*All*' or a specific campaign.
* '**Start Date':** Beginning date range.
* '**End Date':** End date range.

Click '**Download**' to download the PDF report.

The downloaded report contains a graph similar to the below sample and a table containing the total count of each type.

<img style="width: 1000px; height: auto;" src="/images/clouddial_callresults.png">


## Campaign Report

**Description:** 

This report lists each campaign created during the date range selected.

**Usage:**

Choose from the following options:

* '**Created By':** Either select '*All*' or a specific manager.
* '**Start Date':** Beginning date range.
* '**End Date':** End date range.

Click '**Download**' to download the PDF report.

**Columns:**

* '**Name':** The name of the campaign.
* '**CLI':** This is the caller ID that was used for the outbound calls.
* '**AMD**': Shows if *Answering Machine Detection* was enabled for the campaign or not.
* '**Contacts':** The number of contacts that were uploaded during as part of the campaign.
* '**Created':** Date the campaign was created.
* '**Created By':** The manager that created the campaign.


## Campaign Summary

**Description:**

Detailed campaign summary for one or more campaigns.

**Usage:**

Select the campaign you wish to report on and click '**Download**'

This report contains information such as:

* Average Call Time

* Average Call Duration

* Total Call Time (over the duration of the entire campaign)

* Total Calls (made over the duration of the campaign)

* Wrapup Metrics used by agents at the end of each call.





## Dial Results Export

**Description:** 

Comprehensive export showing all calls made and the result of each call.

The report will show each of the columns uploaded as part of the campaign creation process first, followed by each of the Cloud Dial system report columns as well.

**Columns:**

* '**SystemContactId**': This is Cloud Dials unique reference for the customer/contact. **Note** that each contact can have multiple numbers, however it will only ever have a single '*SystemContactId*'.
* '**LogDate**': This is the date of the call.
* '**LogTime**': This is the time of the call.
* '**LogType**': This will be either **completed** or **failed** and is based on the wrapup reason selected by the agent on the call.
* '**AgentName**': This field will show the name of the Agent who spoke on the call.
* '**DialledFromNumber**': This is the caller ID that was used to make the outbound call.
* '**DialledToNumber**': This is the number that was dialled.
* '**Result**': The '*Result*' column shows the result of each attempted call.
* '**ResultNotes**': The '*ResultNotes*' contains more information about any failed call.
* '**WrapUpReasonName**': For each successful call, the '*WrapUpReasonName*' column will show the wrapup reason that was selected by the agent.
* '**WrapUpDateTime**': This shows the date and time that the agent completed the call.
* '**SystemNotes**': This column will contain any notes that were entered by the agent on the '*EditNotes*' tab while on the call.

## End of Day Report

**Description:**

An end of day report containing graphs showing the results of each call as well as the wrapup metric chosen by each agent.

**Usage:**

Choose from the following options:

* '**Campaign':** Either select '*All*' or a specific campaign.
* '**Start Date':** Beginning date range.
* '**End Date':** End date range.

Click '**Download**'.

The downloaded report contains graphed results of each call and wrapup metrics chosen by each agent.

## Not Connected Contacts

**Description:** 

Report listing all contacts that were not contactable as part of a campaign.

**Usage:**

Click the '**Download**' button to download the report, or the '**Email Me**' button to have the report emailed to your inbox directly.

**Columns:**

* The first column shows the name of the campaign.
* The second column shows the '*Name*' of the contact.
* The third column shows the phone number that was dialled in the attempt.
* The fourth column shows the outcome of the attempted call.
* The fifth column shows the date / time of the attempted call.
* The final column shows the reference number of the contact.