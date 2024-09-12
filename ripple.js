document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', function (e) {
      // Get the button's dimensions and position
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      
      ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
      ripple.style.left = e.clientX - rect.left - rect.width / 2 + 'px';
      ripple.style.top = e.clientY - rect.top - rect.height / 2 + 'px';
    
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
    
      setTimeout(() => {
        ripple.remove();
      }, 600); // Ripple duration
    });
  });
  