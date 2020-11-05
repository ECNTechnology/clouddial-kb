---
title: Virtual Agent Campaigns
date: 2019-06-20T00:13:13.519Z
---
# Campaign Type: Virtual Agent

A '**Virtual Agent Campaign**' is a fully automated outbound campaign with no user agents involved. 

This campaign will make outbound calls and play an automated message.

## Call Flow

<img style="width: auto; height: auto;" src="/images/blaster_amd_disabled.png">

**Call flow**

**1.** Outbound call is placed.

**2.** Call is answered.

**3.** Automated Message is played (Cloud Dial beep detection continues to run).

**4.** If at any time a beep is detected, Cloud Dial will begin to play the automated message from the start.

**5.** Once the message has been played to completion, Cloud Dial will hangup.

## View running Virtual Agent Campaigns

From the Management menu on the left hand side of the screen, select '**Campaigns**'.

![](/images/clouddial_new_virtualagent_campaign.png)

On this screen, you can see any '**Virtual Agent Campaigns**' that you have created below the 'General Campaigns.

![](/images/clouddial_view_virtualagents.png)

Note that when you create the new campaign, the status will be '**NEW**' and the campaign is not started, allowing you to create the campaign in advance, and start it when you are ready to begin.

* To start the Virtual Agent Campaign, click <img style="width: auto; height: 25px;" src="/images/clouddial_campaign_start_button.png">

* To stop the Virtual Agent Campaign,click <img style="width: auto; height: 25px;" src="/images/clouddial_campaign_stop_button.png">

* To pause the Virtual Agent Campaign,click <img style="width: auto; height: 25px;" src="/images/clouddial_campaign_pause_button.png">

* To edit the Virtual Agent Campaign,click <img style="width: auto; height: 25px;" src="/images/clouddial_campaign_edit_button.png">


## Creating a Virtual Agent Campaign

![](/images/clouddial_management_screen.png)

From the Management menu on the left hand side of the screen, select '**Campaigns**'.

![](/images/clouddial_new_virtualagent_campaign.png)

From the '**New Campaign**' menu in the top right hand corner, select '**New Virtual Agent Campaign**'.

![](/images/clouddial_create_virtualagent.png)

Enter the following information:

* **Campaign Name:** This name is for your reference.

*  **Country:** Select either Australia or New Zealand.

* **Virtual Agents:** This is the number of simultaneous calls that will be made.

* **Contacts:** Click the '**Upload File**' button to select and upload your contact information.

* **Redial Attempts:** The number of times Cloud Dial will attempt to reach the contact. EG: If you select redial attempts = 2, and you have uploaded two numbers for a contact, Cloud Dial will dial each number once only for a total of two times.

* **Sound Recording:** Select from the dropdown list of previously uploaded recordings. Use the play / pause buttons to preview the file.

*  **Caller ID:** Select from the dropdown list which number will be used as the outgoing number for this campaign. If you wish to use a private number, select '**Hide Caller ID**', however you will still need to specify a phone number - This is a network requirement and will not be displayed on the remote phone.

* **New Sound Recording:** If you can not locate a suitable recording in the above section, you can upload a sound file directly from this page. Enter a name for the file, then click '**Upload File**'.


Once you are happy with all settings for the campaign, click '**Finish**'.