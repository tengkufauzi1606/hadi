// Panggil kode iklan Google AdSense
var adScript = document.createElement('script');
adScript.async = true;
adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5795037534406554";
adScript.crossorigin = "anonymous";
document.head.appendChild(adScript);

// Tambahkan iklan
var adContainer = document.createElement('ins');
adContainer.className = "adsbygoogle";
adContainer.style.display = "block";
adContainer.setAttribute("data-ad-client", "ca-pub-5795037534406554");
adContainer.setAttribute("data-ad-slot", "3449465199");
adContainer.setAttribute("data-ad-format", "auto");
adContainer.setAttribute("data-full-width-responsive", "true");
document.getElementById("getcontent").appendChild(adContainer);

// Perintah untuk menampilkan iklan
(adsbygoogle = window.adsbygoogle || []).push({});
