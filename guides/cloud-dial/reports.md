---
title: Reporting & Dashboard
date: 2020-03-16T10:31:44.610Z
---
## Completed Campaigns

On this screen, managers can see detailed information about completed campaigns.

![](/images/clouddial_completed_campaigns.png)

Use the search bar to search for and locate specific campaigns.

The column headings provide detailed information about each campaign.

* **Campaign Name:** The name of the Campaign provided upon creation.

* **Contacts:** Total number of contacts uploaded as part of the campaign.

* **Removed:** Total number of contacts filtered out by the Do Not Call Register.

* **Not Attempted:** Total number of contacts that were not dialled.

* **Contact Failed:** Total number of contacts that were dialled, but not connected.

* **Contacted:** Total number of contacts that were successfully reached.

* **Contact Success:** Total number of colls that were marked with a successful wrapup reason.

* **Agents:** Total number of Agents that logged into the campaign.

* **No Agents:** Total number of calls that ended with a 'No Agent Detected'. (lower your power factor if this is too high).

* **Avg. Wait:** The average time (in seconds) Agents are waiting for a call after going into 'Ready' state.

* **Avg. Call:** The average duration (in seconds) of each call.

* **Avg. Wrap Up:** The average time (in seconds) an Agent is taking to wrapup each call. 

* **Created On:** Shows the Date and Time the Campaign was created.

* **By:** The Manager who created the Campaign.

## Dialler History

On this page, you can see the outcome for each call made by Cloud Dial.

![](/images/clouddial_dialler_history.png)

Use the search bar to search for and locate specific campaigns.

The column headings provide detailed information about each campaign.

* **Campaign:** The name of the Campaign provided when the Campaign was created.

* **Contact:** The name of the contact.

* **Phone:** The phone number of the contact.

* **Agent:** The name of the Agent who spoke with the contact.

* **Extension:** The extension number of the Agent who spoke with the contact.

* **Result:** The result of the call. This can include such results as:

  * **Connected:** A connected call.

  * **Temporarily Unavailable:** Public telephone network returned a busy signal or temporary block.

  * **Unspecified:** Public telephone network returned no data indicating why the call failed.

* **Notes:** Further information about the 'result' of the call.

* **Logged:** Date & Time the call was made.

## Live Activity

On this screen, a Manager can view Cloud Dials Live Activity.

![](/images/clouddial_live_activity.png)

## Reports

The *Reports Page* contains a list of reports that allow greater insight into completed campaigns.

From the 'Reports & Dashboard' menu on the left-hand side of the screen, select 'Reports'.

Here you can choose from a list of currently available reports. 

* **Agent Detail Report:** Reports on the activity for a single agent 
user across all Campaigns for a given date range. 

* **Campaign Summary Report:** Summary of activity for a single Campaign across its entire lifetime.

* **Contact Summary:** Summary of all contacts within a single campaign across its entire lifetime.

* **Dial Results Report:** Dial history results for contact attempts 
across all campaigns for a given date range.

* **End of Day Report:** Summary of activity for a single day across all campaigns.

* **Executive Summary Report:** Summary of activity across all campaigns for a given date range.

* **Non Contacted Contacts Report:** List of contacts that were not able to be contacted for a given campaign.

Fill in the relevent details, then click <img style="width: auto; height: 25px;" src="/images/clouddial_view_report_button.png"> 

The report will open in a new tab and can then be printed (or saved as a PDF), by clicking the <img style="width: auto; height: 25px;" src="/images/clouddial_print_button.png"> button in the top left-hand corner of the window.

You can also download portions of the report by clicking on the <img style="width: auto; height: 25px;" src="/images/clouddial_download_button.png"> buttons located throughout each report. 

Where applicable, you will be able to download the data in the following formats:

* JSON

* XML

* CSV

* TXT

* SQL

* MX-Excel

* PDF

## Call Results & Definitions


<style type="text/css">
	table.tableizer-table {
		font-size: 12px;
		border: 1px solid #CCC; 
		font-family: Arial, Helvetica, sans-serif;
	} 
	.tableizer-table td {
		padding: 4px;
		margin: 3px;
		border: 1px solid #CCC;
	}
	.tableizer-table th {
		background-color: #104E8B; 
		color: #FFF;
		font-weight: bold;
	}
</style>
<table class="tableizer-table">
<thead><tr class="tableizer-firstrow"><th>Result</th><th>Result Notes</th><th>Definition</th><th>Log Type</th><th>Log Type Cont</th></tr></thead><tbody>
 <tr><td>AMD</td><td>&nbsp;</td><td>Answering Machine Detection</td><td>Call Connected*</td><td>Call Failed*</td></tr>
 <tr><td>No Agent</td><td>&nbsp;</td><td>No available call centre agent was available to take connected call</td><td>Call Connected</td><td>&nbsp;</td></tr>
 <tr><td>Busy</td><td>&nbsp;</td><td>Busy signal was detected on the dialled number</td><td>&nbsp;</td><td>Call Failed</td></tr>
 <tr><td>Connected</td><td>&nbsp;</td><td>Call connected</td><td>Call Connected</td><td>&nbsp;</td></tr>
 <tr><td>Hard Failure</td><td>Disconnected, Restricted or Rejected (487)</td><td>Disconnected or inbound call restrictions</td><td>&nbsp;</td><td>Call Failed</td></tr>
 <tr><td>Hard Failure</td><td>Disconnected (487)</td><td>Disconnected or inbound call restrictions</td><td>&nbsp;</td><td>Call Failed</td></tr>
 <tr><td>Hard Failure</td><td>Disconnected (404)</td><td>Disconnected</td><td>&nbsp;</td><td>Call Failed</td></tr>
 <tr><td>Temporarily Unavailable</td><td>Restricted or Rejected (408)</td><td>Inbound call restrictions or remote party rejected call</td><td>&nbsp;</td><td>Call Failed</td></tr>
 <tr><td>Temporarily Unavailable</td><td>Party currently unavailable. (480)</td><td>Remote party is currently not accepting calls</td><td>&nbsp;</td><td>Call Failed</td></tr>
 <tr><td>Temporarily Unavailable</td><td>Rejected or Forbidden (403)</td><td>Remote party rejected the call or remote destination is temporarily out of order</td><td>&nbsp;</td><td>Call Failed</td></tr>
 <tr><td>Temporarily Unavailable</td><td>Call Rejected (603)</td><td>Call was rejected by the remote party or remote destination is temporarily out of order</td><td>&nbsp;</td><td>Call Failed</td></tr>
 <tr><td>Temporarily Unavailable</td><td>Network Congestion</td><td>Network congestion exists to the remote party</td><td>&nbsp;</td><td>Call Failed</td></tr>
 <tr><td>Temporarily Unavailable</td><td>Other Failure - Unspecified</td><td>Call failure reason not provided by the destination network</td><td>&nbsp;</td><td>Call Failed</td></tr>
 <tr><td>No Answer</td><td>Timeout waiting for remote party</td><td>Call timeout value was reached before remote party answered</td><td>&nbsp;</td><td>Call Failed</td></tr>
 <tr><td>No Answer</td><td>Remote party ended call with no answer</td><td>Remote party did not respond</td><td>&nbsp;</td><td>Call Failed</td></tr>
 <tr><td>Not Confirmed</td><td>Call Confirmation Not Received</td><td>Call connected however confirmation was not provided by the remote party</td><td>Call Connected</td><td></td></tr>
</tbody></table>