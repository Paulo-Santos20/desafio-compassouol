const minRange = document.getElementById('min-price');
const maxRange = document.getElementById('max-price');
const minValueSpan = document.getElementById('min-value');
const maxValueSpan = document.getElementById('max-value');

minRange.addEventListener('input', function() {
  if (parseInt(minRange.value) > parseInt(maxRange.value)) {
    minRange.value = maxRange.value;
  }
  minValueSpan.textContent = `$${minRange.value}`;
});

maxRange.addEventListener('input', function() {
  if (parseInt(maxRange.value) < parseInt(minRange.value)) {
    maxRange.value = minRange.value;
  }
  maxValueSpan.textContent = `$${maxRange.value}`;
});
