---
title: Settings & Preferences
date: 2020-11-29T07:20:13.764Z
---
## Answering Machine Detection (AMD)

Answering Machine Detection frees up your Agents from leaving voicemails and allows you to leave a pre-recorded voicemail whenever an answering machine is detected. 

When creating your campaign you will be given the option to enable AMD.

::: tip
Note that in order to activate AMD you will need to contact your administrator and purchase your AMD licenses.
:::

To view your current licenses, select '**Preferences**' from the '**Settings**' menu.

<img style="width: auto; height: auto;" src="/images/clouddial_settings_menu.png">

From the '**Preferences**' menu choose '**Licenses**'

## Call Recordings

In order to meet PCIDSS Compliance, we have enhanced the call recording functionality to enable an Agent to '**mute**' a recording while taking payment or other personal information.

While an Agent is on an active call, they will be offered the following call recording options:

### Recording Options

* To start recording the call, click <img style="width: auto; height: 25px;" src="/images/clouddial_start_recording.png">
* To stop recording the call, click <img style="width: auto; height: 25px;" src="/images/clouddial_stop_recording.png">
* To pause / mask the recording, click <img style="width: auto; height: 25px;" src="/images/clouddial_pause_recording.png">
* To leave a pre-recorded message, click <img style="width: auto; height: 25px;" src="/images/clouddial_leave_voicemail.png">

## Dialling Hours

Cloud Dial supports the ability to customise the hours in which Cloud Dial will make calls.

<img style="width: auto; height: auto;" src="/images/clouddial_settings_menu.png">

From the '**Settings**' menu on the left hand side, click '**Preferences**'.

From the '**Preferences**' menu choose '**Dialler Settings**'

![](/images/clouddial_dialling_hours.png)

Specify the times you would like your campaigns to dial. 

Click <img style="width: 30px; height: auto;" src="/images/save_button.png"> to complete the configuration.

::: tip
**NOTE:** This will affect all campaigns.
:::

## Firewall

When you first activate CloudDial you will be prompted to add your WAN IP Address to the CloudDial firewall.
This firewall ensures that access is only granted from the IP Addresses that you authorize.

Adding additional IP addresses to the CloudDial firewall is a simple proceess that can be done by an existing administrator account.

![](/images/clouddial_settings_menu.png)

From the '**Settings**' menu, select '**Preferences**'.

![](/images/clouddial_firewall_rules.png)

Select the '**Firewall**' tab from along the top of the screen.

Enter the '**WAN IP Address**' you wish to add and press '**Save**' to save your changes.

Click '**Delete**' to remove any unused IP Addresses.

## Phone Numbers

Phone numbers need to be enabled specifically for Cloud Dial.

To do this, select '**Preferences**' from the '**Settings**' menu on the left hand side.

![](/images/clouddial_settings_menu.png)

Select '**Phone Numbers**' from the top menu.

On this screen you can enable / disable any phone numbers for use with Cloud Dial.

![](/images/clouddial_phone_numbers.png)

'*Tags*' can be used for intelligent routing of inbound calls.

To assign Tags to a number, click the '**Assign Tags**' button.

![](/images/clouddial_assign_tags.png)

Enter as many Tags as required, seperated by semi-colons.

Click '**Save**' when finished.

## Predictive Dialing

Until now Cloud Dial call center administrators needed to set a power factor for each campaign.

The Power Factor was an important setting that controlled how many calls Cloud Dial makes based on the number of waiting (idle) agents.  For example, a Power Factor of 2.0x means that if there were 10 idle agents, Cloud Dial would attempt to dial 20 calls.

The challenge for Call Center administrators has always been determining the correct power factor for each campaign.  A campaign with significant bad phone number data may mean a very high power factor is needed to keep Agents busy on calls, but a campaign run with high-quality call data would likely mean the opposite, a low Power Factor closer to 1:1 (calls to agents).

This is why we have developed Predictive Dialing.

Predictive Dialing replaces the need to set a specific Power Factor on a campaign, rather by enabling Predictive Dialing Cloud Dial will automatically determine and adjust the required number of calls made to meet the needs of the call center, keeping agents busy and minimizing No Agent situations, when more calls were made then available agents.

The Cloud Dial Predictive Dialing uses Machine Learning to continually review and make adjustments to the calls made and tunes the Dialler to meet your defined objective for Agent Wait Times and Call Drops due to No Agents available.

We have developed three modes of Predictive Dialling, Generous, Moderate and Greedy.   These modes allow the Call Center administrator to set the "mood" of the machine learning system - a Greedy setting means that Cloud Dial will more aggressively attempt to tune the calls being made, whilst a Generous mode will allow more time to collect information on effective the dialler is performing.

We recommend greedy only where data quality is consistent (such as customer loyalty campaigns) and moderate to generous when data is unpredictable (such as debt collection).

### Configuration

<img style="width: auto; height: auto;" src="/images/clouddial_settings_menu.png">

From the '**Settings**' menu on the left hand side, click '**Preferences**'.

From the '**Preferences**' menu choose '**Dialler Settings**'

<img style="width: auto; height: auto;" src="/images/predictivedialling1.png">

Enter the following settings:

* **Maximum Wait Time (sec):** This is the maximum time you want for an agent to wait for a call.
* **Calls Drop Percentage (%):** This is the maximum percentage of '**NoAgentDetected**' calls you are prepared to accept.
* **Tuning Strategy:** This affects how frequently the power factor will be adjusted. 
  Choose from;

  * Generous
  * Moderate
  * Agressive

### Enable on Campaign

![](/images/predictivedialling2.png)

When you create a campaign as per normal, instead of setting a specific Power Factor, tick '**Enable Predictive Dialling**'.

Start the campaign as per normal.

## Recorded Sounds

A recorded sound can be used in many scenarios with your campaigns, once they have been uploaded.

The process to add / edit recordings is outlined below.

![](/images/clouddial_settings_menu.png)

From the '**Settings**' menu, select '**Preferences**'.

Select the '**Recorded Sounds**' tab from along the top of the screen.

![](/images/clouddial_recordedsounds.png)

* Use the search function to filter for specific sound files.
* Click the '**Play**' button to listen to the sound file.
* Click the '**Delete**' button to delete the file. (This is not reversable).

::: tip
Note: If you have uploaded a lot of files, you may need to use the '**Next**' button, or the search function to locate the correct file.
:::

To add a new sound file, click the '**NEW**' button.

![](/images/clouddial_recordedsoundupload.png)

Enter in a **'Name'** and '**Description'** so that you remember what the sound file is to be used for.

Click '**Select**' to open a file browser on your PC and select the file you would like to upload.

::: tip
**NOTE**: Supported file types are .wav only.
:::

Finally, click **'Save'**

## Integrations

Cloud Dial Integrations come in two forms:

* **ScreenPop:** This type of integration will open a new tab in your web browser 
* **Webhook:** This type of integration will send the requested data to a URL of your choice which can then act upon that data.

The process to add / edit integrations is outlined below.

![](/images/clouddial_settings_menu.png)

From the '**Settings**' menu, select '**Preferences**'.

Select the '**Integrations**' tab from along the top of the screen.

![](/images/clouddial_integrations_overview.png)

On this page, you can see both your active & disabled integrations.

* Click '**Edit**' to modify an Integration.

* Click '**Disable**' to temporarily disable an Integration.


### Add New Integration

Click <img style="width: auto; height: 25px;" src="/images/clouddial_add_new_integration.png"> to add a new Integration.


When adding new Integrations, there are four components:

#### Integration Details

![](/images/clouddial_integration_details.png)

* **Integration Name:** A descriptive name for your reference.

* **Type:**
  
  * **ScreenPop:** This type of integration will open a new tab in your web browser 

  * **Webhook:** This type of integration will send the requested data to a URL of your choice which can then act upon that data.

* **Request URL:** 

  * When using 'ScreenPop', this is the URL that will open in a new tab.

  * When using 'Webhook', this is the URL Cloud Dial will send the data to.

* **Method:** Choose from 'GET' & 'POST'.

* **Fromat:** Choose from 'QUERY' & 'JSON'.

* **Path Arguments:** Enter any path arguments here.

* **Trigger Event:** The Integration can trigger on either 'Call Connect', 'WrapUp', or 'AMD'.


#### Authentication

![](/images/clouddial_integration_authentication.png)

* **Authentication Type:** Choose from 'None', 'Basic Auth', and 'Token' based authentication.

* **Username:** Enter in as needed.

* **Password:** Enter in as needed.

* **Token:** Enter in as needed.


#### Header Values

![](/images/clouddial_integration_headers.png)

Add the following details as needed.

* Request Name

* Request Value

To add additional header values, click the <img style="width: auto; height: 25px;" src="/images/clouddial_plus_button.png"> button.

#### Field Values

![](/images/clouddial_integration_field_values.png)

Add the following details as needed.

* Request Key

* Request Value:
  
  * Campaign Name
  
  *  Customer Reference

  * Customer Name

  * Date/Time

  * Dial Result

  * Dial Result Notes

  * Phone Called

  * Agent Name

  * Wrap Up By

  * Wrap Up Reason

When finished, click the <img style="width: auto; height: 25px;" src="/images/clouddial_save_button.png"> button.


