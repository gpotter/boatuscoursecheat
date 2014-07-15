var element = document.createElement('div');
element.style.position = 'absolute';
element.style.top = '0';
element.style.right = '0';
element.style.padding = '20px';
element.style.cursor = 'pointer';
element.style.backgroundColor = 'green';
element.innerHTML = 'NEXT ->';
document.body.appendChild(element);

element.addEventListener('click', function(e) {
  var iframeDoc = document.querySelector('iframe').contentDocument;

  var correctAnswer = iframeDoc.querySelector('[correct="true"]')
  if (correctAnswer) correctAnswer.click();

  var nextButton = iframeDoc.querySelector('.tag--navbutton.next');
  if (nextButton) nextButton.click();
});
