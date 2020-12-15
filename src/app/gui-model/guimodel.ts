export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Daniels Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [

                        {
                            "id": "friend",
                            "type": "autocomplete",
                            "name": "Friend",
                            "url": "/friend",
                            "defaultKey": "friendKey",
                            "readonly": true,
                            "form": "FriendForm",
                            "width": 2
                        },
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": false
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": false
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": false
                        },
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [

                        {
                            "id": "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "defaultKey": "locationKey",
                            "readonly": true,
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": false
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "required": false
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "name",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2,
                            "required": false
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "required": false
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "activity",
                    "formFieldList": [
                        {
                            "id": "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": false
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "required": false
                        },
                        {
                            "id": "name",
                            "type": "date",
                            "name": "ActivityDate",
                            "width": 2,
                            "required": false
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },

                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },

                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "page": "groupspage",
                        },
                    ]
                },
                {
                    "id": "groupspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewGroup",
                            "icon": "fa-weixin",
                            "color": "green",
                            "form": {
                                "form": "GroupForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "search": true,
                            "url": "/group",
                            "form": {
                                "form": "GroupForm"
                            }
                        },

                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },

                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },

                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "page": "friendactivitypage",
                        },
                        {
                            "type": "list",
                            "icon": "fa-activity",
                            "color": "purple",
                            "search": true,
                            "url": "/activity",
                            "page": "activityfriendpage",
                        },

                    ]
                },
                {
                    "id": "friendactivitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },

                        {
                            "type": "button",
                            "name": "EditFriend",
                            "icon": "fa-friend",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },

                        {
                            "type": "button",
                            "name": "AddActivity",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-activiy",
                            "color": "orange",
                            "search": true,
                            "url": "/friend/:friendKey/activity",
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
                    ]
                },

                {
                    "id": "activityfriendpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },

                        {
                            "type": "button",
                            "name": "EditActivity",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-activiy",
                            "color": "orange",
                            "search": true,
                            "url": "/activity/:activityKey/friend",
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
                    ]
                },

                {
                    "id": "activitylocationpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditLocation",
                            "icon": "fa-location",
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-activiy",
                            "color": "orange",
                            "search": true,
                            "url": "/location/:locationKey/activity",
                            "form": {
                                "form": "LocationForm"
                            }
                        },

                    ]
                },

                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-location",
                            "color": "yellow",
                            "search": true,
                            "url": "/location",
                            "page": "activitylocationpage",
                        },
                    ]
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
