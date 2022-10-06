<ul class="color_<?=$color?>" style="margin-left: <?=(1004 - count($items) * 137) / 2?>px"><? // IE костыль ?>
	<? foreach($items as $key => $item): ?>
		<li class="eq-<?=++$key?><? if($active == $item['link_id']): ?> active_item<? endif; ?>">
			<a href="<?=ROOT.LINK_LANG.$item['link'].'.'.Options::PAGE_EXTENSION?>">
				<div class="simple">
				</div>
				<div class="active">
				</div>
				<div class="hover">
				</div>
				<div class="icon">
				</div>
				<div class="text">
					<?=$item['name']?>
				</div>
			</a>
		</li>
	<? endforeach; ?>
</ul>