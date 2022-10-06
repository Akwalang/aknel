<?php

class Timer {
	static $start;
	
	public function get(){
		$mtime = explode(" ", microtime());
		return $mtime[1] + $mtime[0];
	}
	
	public function Start(){
		if(Options::TIMER){
			if($_GET['timer_refresh']){
				$_SESSION['core_timer'] = array('sum' => 0, 'num' => 0);
				Core::Redirect('http://'.$_SERVER['HTTP_HOST'].preg_replace('#(\?|\&)+timer_refresh=true#i', '', $_SERVER['REQUEST_URI']));
			}
			else{
				if(isset($_SESSION))
					session_start();
				if(!isset($_SESSION['core_timer']))
					$_SESSION['core_timer'] = array('sum' => 0, 'num' => 0);
				self::$start = self::get();
			}
		}
	}
	
	public function End($print = true){
		if(!Options::TIMER)
			return;
			
		$time = self::get() - self::$start;
		$_SESSION['core_timer']['sum'] += $time;
		$_SESSION['core_timer']['num']++;
		$averae = round($_SESSION['core_timer']['sum']/$_SESSION['core_timer']['num'], 6);
		$time = round($time, 6);
		
		if($print){
			$refresh = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
			if($_SERVER['QUERY_STRING'])
				$refresh .= '&';
			else
				$refresh .= '?';
			
			$refresh .= 'timer_refresh=true';
				
			echo '<div id="generate_time">
					<div class="refresh"><a href="'.$refresh.'"></a></div>
					<div class="time">Текущее: '.$time.' сек.<br /><span>&nbsp;Среднее: '.$averae.'<sup>('.$_SESSION['core_timer']['num'].')</sup> сек.</span></div>
				</div>';
		}
		else{
			return 'Текущее: '.$time.' сек. Среднее: '.$averae.'('.$_SESSION['core_timer']['num'].') сек.';
		}
	}
	
}

?>