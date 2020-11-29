---
title: Management
date: 2020-11-29T04:38:30.752Z
---
## Agents

As a manager, keeping an eye on your running Campaigns and agents is critical.

You can do so easily from the **Agents** page.

![](/images/clouddial_agents.png)

On this page you can view Agent performance across Campaigns.

* Use the drop-down field to select or search for a specific Campaign.
* On the top right-hand side you can choose between viewing data from today only or for a Full Campaign.

The column headings provide valuable information to the Manager.

* **Campaign/s:** The name of the Campaign.
* **Agent/s:** The Agents name, or the Campaign Total.
* **Action/s:** Click the <img style="width: auto; height: 25px;" src="/images/clouddial_logout_agent_button.png"> button to log the Agent out of Cloud Dial.
* **Extensions:** The Agents extension number.
* **Status:** The Agents current status.
* **Last Modified:** The last modified date/time.
* **Sessions:** The total number of sessions for the user (how many times that user has joined the Campaign).
* **Break:** During this time the Agent will not receive any calls. There are three metrics in the category:

  * **Count:** How many times the Agent entered 'Break' status.
  * **Total:** Total time (in seconds) the Agent spent in 'Break' status.
  * **Avg:** The average time (in seconds) the Agent spent in 'Break' status.
* **Idle:** During this time the Agent is waiting for the next call. There are three metrics in the category:

  * **Count:** How many times the Agent entered 'Idle' status.
  * **Total:** Total time (in seconds) the Agent spent in 'Idle' status.
  * **Avg:** The average time (in seconds) the Agent spent in 'Idle' status.
* **Call Handling:** During this time the Agent is either talking on a call, or completing a call.
  There are 5 metrics in the category:

  * **Count:** Total number of calls the Agent has made/taken.
  * **Total:** Total time (in seconds) the Agent spent on calls.
  * **Avg:** The average time (in seconds) the Agent spent on calls.
  * **Suc:** Total number of calls completed using a 'successful wrapup metric'.
  * **Unsuc:** Total number of calls completed using an 'unsuccessful wrapup metric'.

## Campaigns

There are two campaign types:

* General Campaigns.
* Virtual Agent Campaigns.

### General Campaigns

![](/images/clouddial_new_virtualagent_campaign.png)

From the Management menu on the left hand side of the screen, select '**Campaigns**'.

![](/images/clouddial_campaign_overview.png)

On this screen, you can see in the top section, all '**General Campaigns**' that you have created.

For each Campaign you can perform the following actions.

* To start the Campaign, click <img style="width: auto; height: 25px;" src="/images/clouddial_campaign_play_button.png">
* To stop the Campaign, click <img style="width: auto; height: 25px;" src="/images/clouddial_campaign_stop_button.png">
* To pause the Campaign, click <img style="width: auto; height: 25px;" src="/images/clouddial_campaign_pause_button.png">
* To edit the Campaign, click <img style="width: auto; height: 25px;" src="/images/clouddial_campaign_edit_button.png">
* To view statistics about the Campaign, click <img style="width: auto; height: 25px;" src="/images/clouddial_campaign_statistics_button.png">
* To adjust the **[Power Factor](https://kb.clouddial.com.au/guides/cloud-dial/predictive-dialling.html)** of the Campaign, click <img style="width: auto; height: 25px;" src="/images/clouddial_powerfactor_adjust.png">
* Answering Machine Detection, **[AMD](https://kb.clouddial.com.au/guides/cloud-dial/answering-machine-detection.html)**, can be toggled on and off, by using the <img style="width: auto; height: 25px;" src="/images/clouddial_amd_on_button.png"> and <img style="width: auto; height: 25px;" src="/images/clouddial_amd_off_button.png"> buttons.

The column headings provide valuable information to the Campaign Manager.

* **Name**: The name of the Campaign provided upon creation.
* **Direction**: The direction of the Campaign.

  * **Outbound:** Used for Campaigns where no return call is expected.
  * **Inbound:** Used for Campaigns where only inbound calls are required.
  * **Blended:** Used for Campaigns where both inbound and outbound calls are required.
* **Status:** Shows the current status of the campaign.
* **Agents:** The number of Agents currently signed into the Campaign.
* **Contacts:** The number of contacts uploaded as part of the campaign.
* **Remain:** The number of contacts that remain to be dialled.
* **Callbacks:** The number of callbacks registered for the Campaign so far.
* **Progress:** Campaign progression as a percentage.
* **Caller ID:** The outbound caller ID that will be presented for the Campaign.
* **Power Factor:** The **[Power Factor](https://kb.clouddial.com.au/guides/cloud-dial/predictive-dialling.html)** can be adjusted by using the arrows.
* **AMD:** Adjust your **[AMD](https://kb.clouddial.com.au/guides/cloud-dial/answering-machine-detection.html)** settings by clicking the on / off button.
* **Avg. Wait:** The average time (in seconds) an Agent is waiting between calls, once entering 'Ready State'.
* **Avg. Call:** The average duration (in seconds) of each call.
* **Avg. Wrap Up:** The average time (in seconds) an Agent is taking to wrapup each call.
* **Drop Calls:** The number of calls that were not servicable by Agents. This can indicate a high **[Power Factor](https://kb.clouddial.com.au/guides/cloud-dial/predictive-dialling.html)**.
* **Created:** Shows the Date, Time, and the Manager who created the Campaign.

#### Create a new General Campaign

![](/images/clouddial_new_campaign.png)

To start a new campaign, click 'New Campaign'.

![](/images/clouddial_new_campaign1.png)

Enter the following information:

* **Campaign Name:** This name is for your reference.
* **Country:** Choose between Australia & New Zealand.
* **Direction:** The direction of the Campaign.

  * **Outbound:** Used for Campaigns where no return call is expected.
  * **Inbound:** Used for Campaigns where only inbound calls are required.
  * **Blended:** Used for Campaigns where both inbound and outbound calls are required.
* **Caller ID:** Choose a number to be used for outbound caller ID. (You can also tick the checkbox if you wish to send private caller ID).
* **Select Contacts:** There are two ways to select contacts for your Campaign.

  * Click the 'Upload File' button, to upload a contact list.
  * Tick the 'Select contacts from completed campaigns' option.

Click **Next** when ready to proceed.

![](/images/clouddial_new_campaign2.png)

Enter the following information:

* **Starting Power Factor:** The starting **[Power Factor](https://kb.clouddial.com.au/guides/cloud-dial/predictive-dialling.html)** can be anywhere from 1.0 to 8.0.
* **Enable Predictive Dialling:** Tick this option to enable predictive dialling.
* **Redial Attempts:** The number of times you wish to attempt to reach each contact.
* **Campaign Script:** Choose from the list of user-created Campaign Scripts.
* **Integrations:**

  * **Integration Name:** Choose from the list of user-created Integrations.
  * **Trigger Event:** Choose from 'Call Connect', 'WrapUp', and 'AMD'.
* **Notes:** Notes entered here will be displayed for all Agents to read while waiting on a call.
* **Allow Agents to enter Notes:** Tick this option if you want Agents to be allowed to enter notes.

Click **Next** when ready to proceed.

![](/images/clouddial_select_contacts.png)

### Virtual Agent Campaigns

A '**Virtual Agent Campaign**' is a fully automated outbound campaign with no user agents involved. 

This campaign will make outbound calls and play an automated message.

#### Call Flow

<img style="width: auto; height: auto;" src="/images/blaster_amd_disabled.png">

**Call flow**

**1.** Outbound call is placed.

**2.** Call is answered.

**3.** Automated Message is played (Cloud Dial beep detection continues to run).

**4.** If at any time a beep is detected, Cloud Dial will begin to play the automated message from the start.

**5.** Once the message has been played to completion, Cloud Dial will hangup.

#### Creating a Virtual Agent Campaign

![](/images/clouddial_management_screen.png)

From the Management menu on the left hand side of the screen, select '**Campaigns**'.

![](/images/clouddial_new_virtualagent_campaign.png)

From the '**New Campaign**' menu in the top right hand corner, select '**New Virtual Agent Campaign**'.

![](/images/clouddial_create_virtualagent.png)

Enter the following information:

* **Campaign Name:** This name is for your reference.
* **Country:** Select either Australia or New Zealand.
* **Virtual Agents:** This is the number of simultaneous calls that will be made.
* **Contacts:** Click the '**Upload File**' button to select and upload your contact information.
* **Redial Attempts:** The number of times Cloud Dial will attempt to reach the contact. EG: If you select redial attempts = 2, and you have uploaded two numbers for a contact, Cloud Dial will dial each number once only for a total of two times.
* **Sound Recording:** Select from the dropdown list of previously uploaded recordings. Use the play / pause buttons to preview the file.
* **Caller ID:** Select from the dropdown list which number will be used as the outgoing number for this campaign. If you wish to use a private number, select '**Hide Caller ID**', however you will still need to specify a phone number - This is a network requirement and will not be displayed on the remote phone.
* **New Sound Recording:** If you can not locate a suitable recording in the above section, you can upload a sound file directly from this page. Enter a name for the file, then click '**Upload File**'.

Once you are happy with all settings for the campaign, click '**Finish**'.

#### View running Virtual Agent Campaigns

From the Management menu on the left hand side of the screen, select '**Campaigns**'.

![](/images/clouddial_new_virtualagent_campaign.png)

On this screen, you can see any '**Virtual Agent Campaigns**' that you have created below the 'General Campaigns.

![](/images/clouddial_view_virtualagents.png)

Note that when you create the new campaign, the status will be '**NEW**' and the campaign is not started, allowing you to create the campaign in advance, and start it when you are ready to begin.

For each Campaign you can perform the following actions.

* To start the Virtual Agent Campaign, click <img style="width: auto; height: 25px;" src="/images/clouddial_campaign_play_button.png">
* To stop the Virtual Agent Campaign, click <img style="width: auto; height: 25px;" src="/images/clouddial_campaign_stop_button.png">
* To pause the Virtual Agent Campaign, click <img style="width: auto; height: 25px;" src="/images/clouddial_campaign_pause_button.png">
* To edit the Virtual Agent Campaign, click <img style="width: auto; height: 25px;" src="/images/clouddial_campaign_edit_button.png">

The column headings provide valuable information to the Campaign Manager.

* **Name**: The name of the Campaign provided upon creation.
* **Status:** Shows the current status of the campaign.
* **Contacts:** The number of contacts uploaded as part of the campaign.
* **Remain:** The number of contacts that remain to be dialled.
* **Progress:** Campaign progression as a percentage.
* **Caller ID:** The outbound caller ID that will be presented for the Campaign.
* **Created:** Shows the Date, Time, and the Manager who created the Campaign.

## Message Agents

From the Management menu on the left hand side of the screen, select 'Message Agents'.

![](/images/clouddial_message_agents_prev.png)

Here you can see all of your previous messages that have been sent to Agents.

To send a new message, click 'New Message'.

![](/images/clouddial_message_agents.png)

Enter the following:

* **Message:** This is the message that will be displayed to the Agents.
* **Select Campaign:** From the menu, select the Campaign/s that you wish to message.
* **Select Agents:** Choose which Agents should receive the message.

When you are ready to send the message, click <img style="width: auto; height: 25px;" src="/images/clouddial_send_button.png">