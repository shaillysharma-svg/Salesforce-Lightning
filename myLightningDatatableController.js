({
    init : function(component, event, helper)
    {
    	component.set('v.columns', [
                      {label: 'Contact Name', fieldName: 'Name', type: 'text'},
                      {label: 'Phone', fieldName: 'Phone', type: 'phone'},
                      {label: 'Email', fieldName: 'Email', type: 'email'}
                     ]);
        
        helper.getData(component);
    },
})
