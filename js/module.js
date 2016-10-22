registerController('KismetStarter', ['$api', '$scope', function($api,$scope){
    $scope.status="Gestoppt";

    $scope.StartKismet =(function(){
      $api.request({
      module:"KismetStarter",
      action:"StartKismet"
    }, function(response){
        //if (response.error==undefined){
          $scope.status=response;
      //  }
    })});
    $scope.StopKismet=(function(){
    $api.request({
    module:"KismetStarter",
    action:"StopKismet"
  }, function(response){
      //if (response.error==undefined){
        $scope.status=response;
    //  }
  })});

$scope.CheckReply =(function(){
    $api.request({
    module:"KismetStarter",
    action:"CheckReply"
  }, function(response){
      //if (response.error==undefined){
        $scope.status=response;
    //  }
  })});

  $scope.CheckStatus =(function(){
      $api.request({
      module:"KismetStarter",
      action:"CheckStatus"
    }, function(response){
          $scope.status=response;
          $scope.DeviceStat=(response.DeviceStat=="1") ? "up":"down";
          $scope.ADBStat= (response.ADBStat!="") ?"up":"down";
          $scope.NTPStat=(response.NTPStat!="") ? "up":"down";
          $scope.GPSDStat=(response.GPSDStat!="") ?"up":"down";
          $scope.KismetStat=(response.KismetStat!="")?"up":"down";
    })});
    $scope.CheckStatus();
    //just a comment

}
]);
