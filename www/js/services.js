angular.module('ignite.services', [])
.factory('SessionService', function(){
    service = {};
    service.sessions = [{   id:0,
                            title:'Clash of Titans',
                            date:'Oct 6th',
                            time:'09:45 - 10:25',
                            imgUrl:'img/Feed1.jpg' },
                        {   id:1,
                            title:'Automate Your Commerce Apps',
                            date:'Oct 7th',
                            time:'09:45 - 10:25',
                            imgUrl:'img/Feed2.jpg' },
                        {   id:2,
                            title:'DevOps for Your App Builds',
                            date:'Oct 8th',
                            time:'09:45 - 10:25',
                            imgUrl:'img/Feed3.jpg' },
                        {   id:3,
                            title:'DevOps for Your App Builds',
                            date:'Oct 9th',
                            time:'09:45 - 10:25',
                            imgUrl:'img/Feed4.jpg' }];
    service.idRef = 2929; // Initial ID

    return {
        getSession: function(id) {
            var result  = service.sessions.filter(function(o){return o.id == id;} );
            return result? result[0] : null; // or undefined
        },
        setSession: function(session){
            this.session.push(session);
            console.log("sessions: ", service.sessions);
        },
        newSession: function(){
            var session = {id:service.idRef, title:'', date:'', time:''};
            service.idRef++; // this should be a random number
            return session;
        },
        getSessions: function(){
            return service.sessions;
        }
    };
});
