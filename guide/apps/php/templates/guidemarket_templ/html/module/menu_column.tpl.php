<div class="column">
	<div class="menu">
		<div class="head">
			<?=$title?>
		</div>
		<div class="items">
			<ul>
				<? foreach($items as $item): ?>
					<li<? if($active == $item['link_id']): ?> class="active_item"<? endif; ?>>
						<a href="<?=ROOT.LINK_LANG.$item['link'].'.'.Options::PAGE_EXTENSION?>">
							<? if($active == $item['link_id']): ?>
								<span class="active">- <?=$item['name']?></span>
							<? else: ?>
								<span>- <?=$item['name']?></span>
							<? endif; ?>
						</a>
					</li>
				<? endforeach; ?>
			</ul>
		</div>
	</div>
</div>