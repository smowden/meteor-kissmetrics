Kissmetrics for Meteor
==================

Use this for easy integration of Kissmetrics in your Meteor app.

### Howto:
If you are not yet using a settings.js file with Meteor, now would be the time to [create it](http://docs.meteor.com/#meteor_settings).

0. `mrt install kissmetrics

1. Add your Kissmetrics key (the \_kmk value from the code snippet they provide) to your settings file at 
Meteor.settings.public.kissmetrics.key  

    
2. (optional) Enable autoIdentify, this will reactively identify your users with Kissmetrics once they login and 
submit an event to Kissmetrics called "Login App".

    *Example settings.json*  
    
    
    ```json
    {
        "public": {
            "kissmetrics": {
                "key": "b26347aee2df8ca83b6b03eb12cec2cdf5ef395b",
                "autoIdentify": true
            }
        }
    }
    ```
    
3. That's it, you can now use the \_kmq object within your clientside code just as documented in the
[Kissmetrics docs](http://support.kissmetrics.com/apis/javascript/index.html)

#### Pull requests welcome

Developed by [flowkey](http://www.flowkey.com)
