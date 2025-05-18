const expert = document.querySelectorAll('.expert');
        const info = document.querySelectorAll('.info');
        const overlay = document.querySelector('.overlay');
        const closeBtns = document.querySelectorAll('.close-btn');
        let cloneExpert = null;
        let activeIndex = null;
        expert.forEach(container => {
            container.addEventListener('click', () => {
                const index = container.getAttribute('data-index');
                resetActiveStates();
                container.classList.add('active');
                info[index].classList.add('active');
                overlay.classList.add('active');
                document.querySelector('.title3').classList.add('dim-content');
                createCloneExpert(container);
                activeIndex = index;
            });
        });
        function createCloneExpert(expertElement) {
            if (cloneExpert) document.body.removeChild(cloneExpert);
            cloneExpert = expertElement.cloneNode(true);
            cloneExpert.classList.remove('active');
            cloneExpert.classList.add('clone-expert');
            cloneExpert.replaceWith(cloneExpert.cloneNode(true));
            cloneExpert = document.body.appendChild(cloneExpert);
            requestAnimationFrame(() => { requestAnimationFrame(() => { cloneExpert.classList.add('active'); }); });
        }
        closeBtns.forEach(btn => { btn.addEventListener('click', (e) => { e.stopPropagation(); closePanel(); }); });
        overlay.addEventListener('click', closePanel);
        function closePanel() {
            resetActiveStates();
            activeIndex = null;
            if (cloneExpert) {
                cloneExpert.classList.remove('active');
                setTimeout(() => { if (cloneExpert && cloneExpert.parentNode) cloneExpert.parentNode.removeChild(cloneExpert); cloneExpert = null; }, 30);
            }
        }
        function resetActiveStates() {
            expert.forEach(container => { container.classList.remove('active'); });
            info.forEach(panel => { panel.classList.remove('active'); });
            overlay.classList.remove('active');
            document.querySelector('.title3').classList.remove('dim-content');
        }


        
        const box = document.querySelector('.box');
        const follower = document.querySelector('.follower');
        let boxRect = box.getBoundingClientRect();
        window.addEventListener('resize', () => { boxRect = box.getBoundingClientRect(); });
        let currentX = boxRect.width / 2, currentY = boxRect.height / 2, targetX = boxRect.width / 2, targetY = boxRect.height / 2;
        let isMouseInBox = false;
        box.addEventListener('mouseenter', () => { isMouseInBox = true; follower.style.opacity = '1'; });
        box.addEventListener('mouseleave', () => { isMouseInBox = false; follower.style.opacity = '0'; });
        box.addEventListener('mousemove', (e) => {
            if (!isMouseInBox) return;
            const x = e.clientX - boxRect.left;
            const y = e.clientY - boxRect.top;
            targetX = x; targetY = y;
        });
        function animateFollower() {
            if (isMouseInBox) {
                currentX += (targetX - currentX) * 0.1;
                currentY += (targetY - currentY) * 0.1;
                const radius = 40;
                const boundedX = Math.max(radius, Math.min(boxRect.width - radius, currentX));
                const boundedY = Math.max(radius, Math.min(boxRect.height - radius, currentY));
                follower.style.left = `${boundedX}px`;
                follower.style.top = `${boundedY}px`;
            }
            requestAnimationFrame(animateFollower);
        }
        animateFollower();