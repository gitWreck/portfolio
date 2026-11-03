/**
 * Fun Canopy Mode: Floating Forest Foliage Canvas
 * Generates an ambient particle canvas with fluttering emerald and amber leaves.
 */

function initCanopyDelightMode() {
  const toggleBtn = document.getElementById('canopy-toggle-btn');
  const btnText = document.getElementById('canopy-btn-text');
  const canvas = document.getElementById('canopy-canvas');
  if (!toggleBtn || !canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId = null;
  let isActive = false;
  let leaves = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class LeafParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : -20;
      this.size = 8 + Math.random() * 12;
      this.speedY = 0.8 + Math.random() * 1.4;
      this.speedX = (Math.random() - 0.4) * 0.8;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.03;
      this.opacity = 0.25 + Math.random() * 0.5;
      // Palette: canopy emerald or warm amber/bark leaf
      const isBark = Math.random() > 0.65;
      this.color = isBark
        ? `rgba(217, 119, 6, ${this.opacity})` // Warm amber leaf
        : `rgba(52, 211, 153, ${this.opacity})`; // Canopy emerald leaf
    }

    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.y * 0.015) + this.speedX;
      this.rotation += this.rotSpeed;

      if (this.y > canvas.height + 20 || this.x < -20 || this.x > canvas.width + 20) {
        this.reset(false);
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = this.color;

      // Draw leaf shape
      ctx.beginPath();
      ctx.moveTo(0, -this.size);
      ctx.quadraticCurveTo(this.size * 0.7, 0, 0, this.size);
      ctx.quadraticCurveTo(-this.size * 0.7, 0, 0, -this.size);
      ctx.fill();

      // Leaf mid-rib vein
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -this.size * 0.8);
      ctx.lineTo(0, this.size * 0.8);
      ctx.stroke();

      ctx.restore();
    }
  }

  function startAnimation() {
    leaves = Array.from({ length: 32 }, () => new LeafParticle());
    canvas.classList.add('active');

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const leaf of leaves) {
        leaf.update();
        leaf.draw();
      }
      animationId = requestAnimationFrame(loop);
    }
    loop();
  }

  function stopAnimation() {
    canvas.classList.remove('active');
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 600);
  }

  toggleBtn.addEventListener('click', () => {
    isActive = !isActive;
    if (isActive) {
      toggleBtn.classList.add('active');
      btnText.textContent = 'Canopy: Active';
      startAnimation();
    } else {
      toggleBtn.classList.remove('active');
      btnText.textContent = 'Canopy Mode';
      stopAnimation();
    }
  });
}

// Export to global scope
if (typeof window !== 'undefined') {
  window.initCanopyDelightMode = initCanopyDelightMode;
}

