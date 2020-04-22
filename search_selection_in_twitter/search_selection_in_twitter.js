javascript: (function()
{
  let sel = window.getSelection();
  if (sel.rangeCount < 1) return;
  for (var i = 0; i < sel.rangeCount; i++)
  {
    window.open("https://twitter.com/search?q=" + encodeURIComponent(sel.getRangeAt(i).toString()));
  }
})();
