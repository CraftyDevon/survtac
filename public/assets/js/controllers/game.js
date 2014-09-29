 function simpleGameController($scope)
	 {
	 $scope.test = "1";
	 $scope.player="X";
	 $scope.win = "";
	 $scope.lost="";
	 
	
	  $scope.row1 =  [{title: 'xod', played: 'false'},
		               {title: 'xod',played: 'false'},
					   {title: 'xod',played: 'false'}];
	  $scope.row2 =  [{title: 'xod',played: 'false'},{title: 'xod',played: 'false'},{title: 'xod',played: 'false'}];
	  $scope.row3 = [{title: 'xod',played: 'false'},{title: 'xod',played: 'false'},{title: 'xod',played: 'false' }];
					   
	   	 
       $scope.winner = function()
	   {
	      var a = [
		            [$scope.row1[0].title,$scope.row1[1].title, $scope.row1[2].title],
					[$scope.row2[0].title,$scope.row2[1].title, $scope.row2[2].title],
					[$scope.row3[0].title,$scope.row3[1].title, $scope.row3[2].title]
					
		          ]
	      var matches = 1;
	      //check the winner by evaluating who hit 3 in a line (vertical, horizontal, diagonal)
		  //check horizontal
		     //a. checking 1st array
			 //b. checking 2nd array
			 //c. checking 3rd array
		   for (var i=0; i< 3;i++)
		   {
		     for (var j=0; j<3;j++)
			 {
			   if ((matches<=2)&& (j>0))
			    {
				  if ((a[i][j-1]==a[i][j])&&(a[i][j-1]!="xod"))
				  {
				    matches=matches+1;
				  }
				}
			 }
			 if (matches<3)
			      matches=1;
			 else
			    { 
                   $scope.test="winner";
				   $scope.lost = $scope.player;
				if ($scope.player=="X")
					 $scope.win = "O";
					 else
					 $scope.win = "X";
                return "winner";

			 		 
				}


		   }
		     
		  //check vertical
		  for (var i=0; i< 3;i++)
		   {
		     for (var j=0; j<3;j++)
			 {
			   if ((matches<=2)&& (j>0))
			    {
				  if ((a[j-1][i]==a[j][i])&&(a[j-1][i]!="xod"))
				  {
				    matches=matches+1;
				  }
				}
			 }
			 if (matches<3)
			      matches=1;
			 else
			  {
			    $scope.test="winner";
				$scope.lost = $scope.player;
				if ($scope.player=="X")
					 $scope.win = "O";
					 else
					 $scope.win = "X";
				
                return "winner";	

		 
			  }
		   }
		  //check diagonal
		  for (var i=0; i< 3;i++)
		   {
		    // for (var j=0; j<3;j++)
			 //{
			   if ((matches<=2)&& (i>0))
			    {
				  if ((a[i-1][i-1]==a[i][i])&&(a[i-1][i-1]!="xod"))
				  {
				    matches=matches+1;
				  }
				}
			 //}
			 if (i==2)
			 {
			 if (matches<3)
			      matches=1;
			 else
			  {
			    $scope.test="winner";
				$scope.lost = $scope.player;
				if ($scope.player=="X")
					 $scope.win = "O";
					 else
					 $scope.win = "X";
                return "winner";	
		 
			  }
			  }
		   }
	    if (!($scope.test=="winner"))
		{
		 }
	   }
	   
	 
	   $scope.clickrow = function(rowCoord)
	   {
	     //$scope.row1[0].title="wao";
		 if (($scope.player.length > 0)&& !($scope.test=="winner"))
		 {
		   
		    if (rowCoord.length >0)
			{
				var s = rowCoord.split("");
			  
			    if (s[1]=="1")
				{
				//row1
					 if ($scope.row1[parseInt(s[2])-1].title=="xod")
					 {
						 $scope.row1[parseInt(s[2])-1].title = $scope.player;  
						 //turn the value visible by chaging the background to white
						 $scope.row1[parseInt(s[2])-1].played="true";
					 }	 
				}
				if (s[1]=="2")
				{
				//row2
				 if ($scope.row2[parseInt(s[2])-1].title=="xod")
					 {
						 $scope.row2[parseInt(s[2])-1].title = $scope.player;  
						 //turn the value visible by chaging the background to white
						 $scope.row2[parseInt(s[2])-1].played="true";
					 }	 
				}
				if (s[1]=="3")
				{
				//row3
				 if ($scope.row3[parseInt(s[2])-1].title=="xod")
					 {
						 $scope.row3[parseInt(s[2])-1].title = $scope.player;  
						 //turn the value visible by chaging the background to white
						 $scope.row3[parseInt(s[2])-1].played="true";
					 }	 
				}
				
				  
				  if ($scope.player=="X")
					 $scope.player="O";
					 else
					 $scope.player="X";
		    }
		 }
		
		
	   }
	   
	 
	   $( document ).ready(function() {

	   	$( "a.cellLink" ).click(function() {
		$(this).addClass( "white" );

		});

});
		  
	   
	   $scope.$watch('player',$scope.winner);
	 }
	 
	 
	 
	  function restart()
	   {
	     location.reload();
	   }