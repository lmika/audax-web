#!/usr/bin/env python3

import os.path
import subprocess

images = [
	'main-item-view.png',
	'table-selection.png',
	'filter-items.png',
	'query-items.png',
	'modified-items.png',
	'fields-popup.png'
]

for image in images:
	src_file = os.path.join('images', image)
	target_file = os.path.join('static/images/dynamo-browse', image)
	
	subprocess.run(['magick', src_file, '-shave', '24x16', target_file])