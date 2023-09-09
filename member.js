function skillsMember(){
    return{
        restrict:'E',
        tempplateUrl:'module/skills/views/member.html',
        controller:'SkillsMemberController',
        controllerAs:'vm',
        bondToController:true,
        scope:{
            member: '='
        }
    };
}