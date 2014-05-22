function myLogin(userName, password)
{
	//debugger;
	
	var myUser = ds.Administrator.find("user == :1", userName);
	
		if(myUser === null)
			{
				return false;			
			}else
				 {
				 	if (myUser.validatePassword(password))
				 		{
				 			var connectTime = new Date();
 							return {
 									ID: myUser.ID,
 									name: myUser.user, //myUser.login,
 									user: myUser.user, 
 									storage: {time: connectTime}
									}
				 		}
				 		else
				 			{
				 				return {error: 1024, errorMessage: "invalid login"};
				 			}
				 }
	

}

