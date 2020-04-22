javascript: (function ()
{
  var c = document.querySelector("link[rel='canonical']");
  c = c ? new URL(c.getAttribute("href"), location.href) : location.href;
  var d = document.querySelector("title");
  d = d ? d.innerText : "";
  var b = document.querySelector("#cd3706c6-a62c-43ee-bf9e-cb4eada1b4bf");
  null !== b && b.parentNode.removeChild(b);
  b = document.createElement("div");
  b.id = "cd3706c6-a62c-43ee-bf9e-cb4eada1b4bf";
  document.querySelector("body").appendChild(b);
  document.querySelector("#cd3706c6-a62c-43ee-bf9e-cb4eada1b4bf").addEventListener("click", function (a)
  {
    "cd3706c6-a62c-43ee-bf9e-cb4eada1b4bf" === a.target.id && a.target.parentNode.removeChild(a.target)
  });
  var a = document.createElement("div");
  a.classList.add("content");
  b.appendChild(a);
  textareaT = document.createElement("textarea");
  textareaT.id = "cd3706c6-a62c-43ee-bf9e-cb4eada1b4bf-title";
  textareaT.value = d;
  textareaT.addEventListener("focus", function ()
  {
    this.select()
  });
  textareaA = document.createElement("textarea");
  textareaA.id = "cd3706c6-a62c-43ee-bf9e-cb4eada1b4bf-address";
  textareaA.value = c;
  textareaA.addEventListener("focus", function ()
  {
    this.select()
  });
  textareaB = document.createElement("textarea");
  textareaB.id = "cd3706c6-a62c-43ee-bf9e-cb4eada1b4bf-both";
  textareaB.value = d + "\n" + c;
  textareaB.addEventListener("focus", function ()
  {
    this.select()
  });
  a.appendChild(textareaT);
  a.appendChild(textareaA);
  a.appendChild(textareaB);
  document.querySelector("html").style.height = "100%";
  document.querySelector("body").style.height = "100%";
  document.querySelector("body #cd3706c6-a62c-43ee-bf9e-cb4eada1b4bf div.content").style.height = "100%";
  b.style.width = "100%";
  b.style.minWidth = "100%";
  b.style.height = "100%";
  b.style.minHeight = "100%";
  b.style.zIndex = 9999;
  b.style.position = "fixed";
  b.style.top = 0;
  b.style.left = 0;
  b.style.background = "rgba(0, 0, 0, .5)";
  a.style.cssText = "margin: auto !important;";
  a.style.background = "#FFF";
  a.style.width = "720px";
  a.style.height = "480px";
  a.style.position = "absolute";
  a.style.top = 0;
  a.style.bottom = 0;
  a.style.right = 0;
  a.style.left = 0;
  a.style.borderRadius = "4px";
  a.style.padding = "1.5rem";
  a.style.display = "flex";
  a.style.flexDirection = "column";
  a.style.flexWrap = "nowrap";
  a.style.gap = ".5rem";
  textareaT.style.flex = 2;
  textareaA.style.flex = 2;
  textareaB.style.flex = 3
})();
