# Key Bindings

<div data-controller="keybindings">

<label>
	<input type="checkbox" id="show-kb-binding-names" 
    data-keybindings-target="showBindingNames" data-action="keybindings#bindingNamesChanged"> Show binding names
</label>

<table class="key-bindings" data-keybindings-target="keyBindingTable">
<thead>
<tr>
  <th class="kb-key-binding" style="text-align:left">Key</th>
  <th class="kb-binding-name" style="text-align:left">Binding Name</th>
  <th style="text-align:left">Action</th>
</tr>
</thead>
<tbody>
<tr>
  <td colspan="2">Main View Mode</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>&uarr;</kbd>/<kbd>i</kbd></td>
  <td class="kb-binding-name">table.move-up</td>
  <td>Move selection up</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>&darr;</kbd>/<kbd>k</kbd></td>
  <td class="kb-binding-name">table.move-down</td>
  <td>Move selection down</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>PgUp</kbd>/<kbd>&#8679;I</kbd></td>
  <td class="kb-binding-name">table.page-up</td>
  <td>Page up</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>PgDn</kbd>/<kbd>&#8679;K</kbd></td>
  <td class="kb-binding-name">table.page-down</td>
  <td>Page down</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>Home</kbd>/<kbd>0</kbd></td>
  <td class="kb-binding-name">table.goto-top</td>
  <td>Move selection to first item</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>End</kbd>/<kbd>$</kbd></td>
  <td class="kb-binding-name">table.goto-bottom</td>
  <td>Move selection to last item</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>&larr;</kbd>/<kbd>j</kbd></td>
  <td class="kb-binding-name">table.move-left</td>
  <td>Scroll displayed columns left</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>&rarr;</kbd>/<kbd>l</kbd></td>
  <td class="kb-binding-name">table.move-right</td>
  <td>Scroll displayed columns right</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>Backspace</kbd></td>
  <td class="kb-binding-name">view.view-back</td>
  <td>Go back</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>\</kbd></td>
  <td class="kb-binding-name">view.view-forward</td>
  <td>Go forward</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>w</kbd></td>
  <td class="kb-binding-name">view.cycle-layout-forward</td>
  <td>Cycle forward through layout</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>&#8679;W</kbd></td>
  <td class="kb-binding-name">view.cycle-layout-backwards</td>
  <td>Cycle backwards through layout</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>m</kbd></td>
  <td class="kb-binding-name">view.mark</td>
  <td>Mark/unmark currently selected item</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>c</kbd></td>
  <td class="kb-binding-name">view.copy-item-to-clipboard</td>
  <td>Copy displayed item to pasteboard</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>/</kbd></td>
  <td class="kb-binding-name">view.prompt-for-filter</td>
  <td>Filter</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>?</kbd></td>
  <td class="kb-binding-name">view.prompt-for-query</td>
  <td>Run scan/query</td>
</tr>
<tr class="kb-binding-name">
  <td class="kb-key-binding"></td>
  <td class="kb-binding-name">view.prompt-for-table</td>
  <td>Select table</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>R</kbd></td>
  <td class="kb-binding-name">view.rescan</td>
  <td>Rerun last scan/query</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>:</kbd></td>
  <td class="kb-binding-name">view.prompt-for-command</td>
  <td>Enter command</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>f</td>
  <td class="kb-binding-name">view.show-fields-popup</td>
  <td>Show fields popup</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>^C</kbd></td>
  <td class="kb-binding-name">view.cancel-running-job</td>
  <td>Cancel running operation</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>^C</kbd>/<kbd>Esc</kbd></td>
  <td class="kb-binding-name">view.quit</td>
  <td>Quit</td>
</tr>
<tr>
  <td colspan="2">Field Popup Mode</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>&#8679;I</kbd></td>
  <td class="kb-binding-name">fields-popup.shift-column-left</td>
  <td>Shift selected column left</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>&#8679;K</kbd></td>
  <td class="kb-binding-name">fields-popup.shift-column-right</td>
  <td>Shift selected column right</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>Space</kbd></td>
  <td class="kb-binding-name">fields-popup.toggle-column-visible</td>
  <td>Toggle selected column visible</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>a</kbd></td>
  <td class="kb-binding-name">fields-popup.add-column</td>
  <td>Add new column</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>d</kbd></td>
  <td class="kb-binding-name">fields-popup.delete-column</td>
  <td>Delete selected column</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>&#8679;R</kbd></td>
  <td class="kb-binding-name">fields-popup.reset-columns</td>
  <td>Reset columns to that of the result-set</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>^C</kbd>/<kbd>Esc</kbd></td>
  <td class="kb-binding-name">fields-popup.close</td>
  <td>Close field popup</td>
</tr>
</tbody>
</table>

</div>

