<ul>
	<? foreach($map as $index => $childrens): ?>
		<li<? if(in_array($items[$index]['id'], $active) and $active_id != 0): ?> class="active_item"<? endif; ?>>
			<?=$items[$index]['link'] ? '<a href="'.ROOT.LINK_LANG.$items[$index]['link'].'.'.Options::PAGE_EXTENSION.'">' : '<span>'?>
			
				<? if(in_array($items[$index]['id'], $active)): ?>
					<span class="active">
						<?=$items[$index]['name']?>
					</span>
					<span class="bg"></span>
				<? else: ?>
					<?=$items[$index]['name']?>
				<? endif; ?>
			
			<?=$items[$index]['link'] ? '</a>' : '</span>'?>
			
			<? if($childrens): ?>
				<ul>
					<? foreach($childrens as $index => $childs): ?>
						<li<? if(in_array($items[$index]['id'], $active)): ?> class="active_item"<? endif; ?>>
							<a href="<?=ROOT.LINK_LANG.$items[$index]['link'].'.'.Options::PAGE_EXTENSION?>">
								<span class="text"><?=$items[$index]['name']?></span>
								<span class="arrow"></span>
							</a>
						</li>
					<? endforeach; ?>
				</ul>
			<? endif; ?>
		</li>
	<? endforeach; ?>
</ul>