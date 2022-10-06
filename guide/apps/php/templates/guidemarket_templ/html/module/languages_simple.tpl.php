<ul>
	<? foreach($items as $item): ?>
		<? if($item['id'] == $active): ?>
			<li class="active_item">
				<a href="<?=ROOT?>/<?=$item['default'] ? '' : $item['prefix'].'/' ?>">
					<span class="text"><?=$item['name']?></span>
					<div class="active"></div>
				</a>
			</li>
		<? else: ?>
			<li>
				<a href="<?=ROOT?>/<?=$item['default'] ? '' : $item['prefix'].'/' ?>" class="off">
					<span class="text"><?=$item['name']?></span>
				</a>
			</li>
		<? endif; ?>
	<? endforeach; ?>
</ul>