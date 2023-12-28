// Optional JavaScript for interactive elements
function togglePricing(selectedTier) {
    const tiers = document.querySelectorAll('.pricing-tier');
    
    tiers.forEach(tier => {
      if (tier.id === selectedTier) {
        tier.style.display = 'block';
      } else {
        tier.style.display = 'none';
      }
    });
  }
  