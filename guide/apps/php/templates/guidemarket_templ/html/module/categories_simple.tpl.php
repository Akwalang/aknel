<ul>
	<? foreach($items as $item): ?>
		<li<? if($item['category'] == $category): ?> class="active_item"<? endif; ?>>
			<a href="<?=ROOT.LINK_LANG.$item['link'].'.'.Options::PAGE_EXTENSION?>">
				<div class="text" style="background-color: <?=$item['color']?>; text-shadow: <?=$item['shadow']?> 0 0 1px;">
					<?=$item['name']?>
				</div>
				<div class="video" style="background-image: url(<?=ROOT?>/images/categories/<?=$item['video']?>);">
				</div>
				<div class="image" style="background-image: url(<?=ROOT?>/images/categories/<?=$item['image']?>);">
				</div>
				<div class="shadow">
				</div>
				<div class="description">
					<span><?=$item['description']?></span>
				</div>
			</a>
		</li>
	<? endforeach; ?>
</ul>
