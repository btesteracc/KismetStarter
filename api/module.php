<?php namespace pineapple;

  class KismetStarter extends Module
  {
    public function route()
    {
      switch ($this->request->action){
        case 'StartKismet':
          $this->DoStartKismet();
          break;
        case 'StopKismet':
          $this->DoStopKismet();
          break;
        case 'CheckReply':
          $this->DoCheckReply();
          break;
        case 'CheckStatus':
          $this->DoCheckStatus();
          break;
      }
    }

    private function DoStartKismet(){
      exec('/root/KismetStarter/scripts/wardriving.sh');
      $this->response=DoCheckStatus();
    }

    private function DoStopKismet(){
      exec('/root/KismetStarter/scripts/stop_wardriving.sh');
      $this->response=DoCheckStatus();
    }

    private function DoCheckReply(){
      $this->response=exec('pgrep kismet_server');
    }

    private function DoCheckStatus(){
      $Status=array();
      $Status["DeviceStat"]=exec('iwconfig wlan1 | grep -c "wlan1.*Monitor"');
      $Status["ADBStat"]=exec("pgrep adb");
      $Status["NTPStat"]=exec("pgrep ntp");
      $Status["GPSDStat"]=exec("pgrep gpsd");
      $Status["KismetStat"]=exec("pgrep kismet_server");
      $this->response=$Status;
    }
  }
