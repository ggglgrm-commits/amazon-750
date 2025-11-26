// Accessibility: ensure keyboard users can focus/activate the CTA
document.addEventListener('DOMContentLoaded', function(){
  // make sure external link opens in new tab (already set), add simple click analytics hook
  var cta = document.querySelector('.cta');
  if(cta){
    cta.addEventListener('click', function(){ 
      try{ window.dataLayer = window.dataLayer || []; window.dataLayer.push({event: 'claim_click'}); }catch(e){}
    });
  }
});
