({
    getData : function(component)
    {
	var action = component.get('c.getContacts');
        action.setCallback(this, $A.getCallback(function(response)
                             {
                               var status = response.getState();
                               if (status === "SUCCESS")
                               {
                                   component.set('v.contacts', response.getReturnValue());
                               }
                               else if (status === "ERROR")
                               {
                                   var errors = response.getError();
                                   console.error(errors);
                               }
                           }
        ));
        $A.enqueueAction(action);
    },
})
