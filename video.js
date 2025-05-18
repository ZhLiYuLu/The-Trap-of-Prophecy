// 人物数据
const characters = {
    1: {
        name: "TIAN",
        title: "Police Officer",
        description: "A young policeman who is enthusiastic and responsible, adopted a puddle named Lily with his wife a year ago and love Lily very much.",
        story: "On an ordinary afternoon, his beloved pet dog accidentally got lost at his doorstep and was not found for a week. When he had no other options, he sought help from a fortune teller.",
        videoSrc: "../video/story1-1.mp4",
        hasStory: true
    },
    2: {
        name: "ZHE",
        title: "University Student",
        description: "A junior student majoring in economics is at a loss about his future and often thinks negatively.",
        story: "As the deadline for the final assignment approached, Zhe still hadn't written a word. Not only that, he was extremely envious of his classmates' love. He had no vision for the future and seemed to be in endless decadence and anxiety.",
        videoSrc: "../video/bg1.mp4",
        hasStory: true
    },
    3: {
        name: "Fiona",
        title: "Fortune Teller",
        description: "A non-professional fortune teller who uses fortune-telling skills to defraud money.",
        story: "On an ordinary afternoon, she observed a man looking for his missing pet dog on the street. After several days of observation, she collected the man's information, launched an offensive against him, and unexpectedly gained something extra.",
        videoSrc: "../video/bg1.mp4",
        hasStory: false
    },
    4: {
        name: "Zavier",
        title: "Zhe's Friend / University Student",
        description: "A junior student, a smart kid from a wealthy family, who doesn't believe in divination and fortune-telling.",
        story: "Despite his disdain for fortune-telling and divination, he discovered that his good friend was actually attracted to these things.",
        videoSrc: "../video/bg1.mp4",
        hasStory: false
    },
    5: {
        name: "Chelsea",
        title: "Tian's Wife",
        description: "An employee working in a travel agency, who loves small animals as much as her husband TIAN.",
        story: "Since founding that Lily was missing, she has been devastated and has been in tears all day long.",
        videoSrc: "../video/bg1.mp4",
        hasStory: false
    }
};



// 在characters对象后添加视频数据
const locationVideos = {
    house: "../video/story1-2.mp4",
    street: "../video/story1-3.mp4",
    confused: "../video/story1-3-1.mp4",  // 新的视频路径
    hurry: "../video/story1-3-2.mp4",    // 新的视频路径
    next: "../video/story1-4.mp4" ,      // 添加新的视频路径
    who: "../video/story1-4-1.mp4",    // Who is she 按钮的视频
    why: "../video/story1-4-2.mp4",    // Why would she know 按钮的视频
    go: "../video/story1-4-3.mp4",     // You have to go 按钮的视频
    next1: "../video/story1-5.mp4",    // story1-4-1 和 story1-4-2 播放完后自动播放的视频
    next2: "../video/story1-6.mp4"     // story1-4-3 播放完后自动播放的视频
};

 // DOM元素
 const characterElements = document.querySelectorAll('.character');
 const titles = document.querySelectorAll('h1');
 const gallery = document.querySelector('.characterChoose');
 const profile = document.getElementById('profile');
 const closeProfile = document.getElementById('close');
 const profileName = document.getElementById('profile-name');
 const profileTitle = document.getElementById('profile-title');
 const profileDesc = document.getElementById('profile-desc');
 const profileStory = document.getElementById('profile-story');

 // 视频相关元素
 const storyButton = document.getElementById('enterStory');
 const videoContainer = document.getElementById('video');
 const videoPlayer = document.getElementById('video-player');
 const closeVideo = document.getElementById('close-video');
 const storyInfo = document.getElementById('story-info');

 // 当前选中的角色ID
 let currentCharacterId = null;

 // 在DOM元素部分添加
 const locationButtons = document.querySelectorAll('.location-btn');

 // 为每个角色添加点击事件
 characterElements.forEach(character => {
     character.addEventListener('click', function () {
         const characterId = this.getAttribute('data-character');
         showCharacterProfile(characterId);

         // 收缩gallery宽度
         gallery.classList.add('active');

         // 标记当前选中的角色
         characterElements.forEach(char => char.classList.remove('active'));
         this.classList.add('active');

         // 缩小标题
         titles.forEach(title => title.classList.add('small'));
     });
 });

 // 关闭介绍页面
 closeProfile.addEventListener('click', function () {
     profile.classList.remove('active');
     gallery.classList.remove('active');
     characterElements.forEach(char => char.classList.remove('active'));
     titles.forEach(title => title.classList.remove('small'));
 });

 // 显示角色介绍
 function showCharacterProfile(id) {
     const character = characters[id];
     currentCharacterId = id;

     // 填充数据
     profileName.textContent = character.name;
     profileTitle.textContent = character.title;
     profileDesc.textContent = character.description;
     profileStory.textContent = character.story;

     // 根据hasStory属性显示或隐藏故事按钮
     storyButton.style.display = character.hasStory ? 'inline-block' : 'none';

     // 显示介绍面板
     profile.classList.add('active');
 }

 // 修改体验故事按钮点击事件
 storyButton.addEventListener('click', function () {
     if (currentCharacterId) {
         const character = characters[currentCharacterId];
         videoPlayer.src = character.videoSrc;
         videoContainer.classList.add('active');

         // 添加视频结束事件监听器
         videoPlayer.onended = function() {
             this.currentTime = this.duration - 0.1;
             setTimeout(() => {
                 storyInfo.classList.add('active');
             }, 1000);
         };
     }
 });

 // 点击视频开始播放
 videoPlayer.addEventListener('click', function () {
     // 如果视频未播放，则开始播放
     if (this.paused) {
         this.play();
     }
 });

 // 修改按钮点击事件处理
 locationButtons.forEach(button => {
     button.addEventListener('click', function () {
         const location = this.getAttribute('data-location');
         const videoSrc = locationVideos[location];

         if (videoSrc) {
             // 隐藏信息介绍页
             storyInfo.classList.remove('active');

             // 加载并播放新视频
             videoPlayer.src = videoSrc;
             videoPlayer.load();
             videoPlayer.play();

             // 修改视频结束逻辑
             videoPlayer.onended = function() {
                 this.currentTime = this.duration - 0.1;
                 
                 // 检查当前播放的视频是否是 story1-4
                 if (videoSrc === locationVideos.next) {
                     // 更新信息页内容为三个新按钮
                     const infoContent = document.querySelector('.info-content');
                     infoContent.innerHTML = `
                         <div class="location-buttons">
                             <button class="location-btn" data-location="who">Who is she？</button>
                             <button class="location-btn" data-location="why">Why would she know？</button>
                             <button class="location-btn" data-location="go">You have to go</button>
                         </div>
                     `;
                     
                     // 重新绑定新按钮的事件
                     const newButtons = document.querySelectorAll('.location-btn');
                     newButtons.forEach(btn => {
                         btn.addEventListener('click', function() {
                             const newLocation = this.getAttribute('data-location');
                             const videoSrc = locationVideos[newLocation];
                             
                             if (videoSrc) {
                                 storyInfo.classList.remove('active');
                                 videoPlayer.src = videoSrc;
                                 videoPlayer.load();
                                 videoPlayer.play();
                                 
                                 // 为视频设置新的结束事件
                                 videoPlayer.onended = function() {
                                     this.currentTime = this.duration - 0.1;
                                     
                                     // 根据当前视频选择下一个要播放的视频
                                     if (videoSrc === locationVideos.who || videoSrc === locationVideos.why) {
                                         // story1-4-1 和 story1-4-2 播放完后自动播放 story1-5
                                         videoPlayer.src = locationVideos.next1;
                                         videoPlayer.load();
                                         videoPlayer.play();
                                     } else if (videoSrc === locationVideos.go) {
                                         // story1-4-3 播放完后自动播放 story1-6
                                         videoPlayer.src = locationVideos.next2;
                                         videoPlayer.load();
                                         videoPlayer.play();
                                     }
                                 };
                             }
                         });
                     });
                     
                     // 显示信息页
                     setTimeout(() => {
                         storyInfo.classList.add('active');
                     }, 1000);
                 } else if (videoSrc === locationVideos.house) {
                     // 如果是 house 视频播放结束，自动播放 street 视频
                     videoPlayer.src = locationVideos.street;
                     videoPlayer.load();
                     videoPlayer.play();
                     
                     // 为 street 视频设置新的结束事件
                     videoPlayer.onended = function() {
                         this.currentTime = this.duration - 0.1;
                         // 更新信息页内容为 Warm Reading
                         const infoContent = document.querySelector('.info-content');
                         infoContent.innerHTML = `
                             <h2>HINT</h2>
                             <p><b>Warm Reading</b><br>
                                 It is between cold reading and warm reading. It uses the understanding of public psychology to say some "universal words" that are applicable to almost everyone, such as "You are worried about an important thing recently", to create resonance and trust.
                             </p>
                             <div class="location-buttons">
                                 <button class="location-btn" data-location="confused">you are confused</button>
                                 <button class="location-btn" data-location="hurry">you are in a hurry</button>
                             </div>
                         `;
                         
                         // 重新绑定新按钮的事件
                         const newButtons = document.querySelectorAll('.location-btn');
                         newButtons.forEach(btn => {
                             btn.addEventListener('click', function() {
                                 const newLocation = this.getAttribute('data-location');
                                 const newVideoSrc = locationVideos[newLocation];
                                 if (newVideoSrc) {
                                     storyInfo.classList.remove('active');
                                     videoPlayer.src = newVideoSrc;
                                     videoPlayer.load();
                                     videoPlayer.play();
                                     
                                     // 为 confused 和 hurry 视频设置新的结束事件
                                     videoPlayer.onended = function() {
                                         // 直接播放 story1-4
                                         videoPlayer.src = locationVideos.next;
                                         videoPlayer.load();
                                         videoPlayer.play();
                                         
                                         // 为 story1-4 设置新的结束事件
                                         videoPlayer.onended = function() {
                                             this.currentTime = this.duration - 0.1;
                                             // 更新信息页内容为三个新按钮
                                             const infoContent = document.querySelector('.info-content');
                                             infoContent.innerHTML = `
                                                 <div class="location-buttons">
                                                     <button class="location-btn" data-location="who">Who is she？</button>
                                                     <button class="location-btn" data-location="why">Why would she know？</button>
                                                     <button class="location-btn" data-location="go">You have to go</button>
                                                 </div>
                                             `;
                                             
                                             // 重新绑定新按钮的事件
                                             const newButtons = document.querySelectorAll('.location-btn');
                                             newButtons.forEach(btn => {
                                                 btn.addEventListener('click', function() {
                                                     const newLocation = this.getAttribute('data-location');
                                                     const videoSrc = locationVideos[newLocation];
                                                     
                                                     if (videoSrc) {
                                                         storyInfo.classList.remove('active');
                                                         videoPlayer.src = videoSrc;
                                                         videoPlayer.load();
                                                         videoPlayer.play();
                                                     }
                                                 });
                                             });
                                             
                                             // 显示信息页
                                             setTimeout(() => {
                                                 storyInfo.classList.add('active');
                                             }, 1000);
                                         };
                                     };
                                 }
                             });
                         });
                         
                         // 显示信息页
                         setTimeout(() => {
                             storyInfo.classList.add('active');
                         }, 1000);
                     };
                 } else if (videoSrc === locationVideos.street && location === 'street') {
                     // 如果是直接点击 STREET 按钮播放的 street 视频
                     // 更新信息页内容为 Warm Reading
                     const infoContent = document.querySelector('.info-content');
                     infoContent.innerHTML = `
                         <h2>HINT</h2>
                         <p><b>Warm Reading</b><br>
                             It is between cold reading and warm reading. It uses the understanding of public psychology to say some "universal words" that are applicable to almost everyone, such as "You are worried about an important thing recently", to create resonance and trust.
                         </p>
                         <div class="location-buttons">
                             <button class="location-btn" data-location="confused">you are confused</button>
                             <button class="location-btn" data-location="hurry">you are in a hurry</button>
                         </div>
                     `;
                     
                     // 重新绑定新按钮的事件
                     const newButtons = document.querySelectorAll('.location-btn');
                     newButtons.forEach(btn => {
                         btn.addEventListener('click', function() {
                             const newLocation = this.getAttribute('data-location');
                             const newVideoSrc = locationVideos[newLocation];
                             if (newVideoSrc) {
                                 storyInfo.classList.remove('active');
                                 videoPlayer.src = newVideoSrc;
                                 videoPlayer.load();
                                 videoPlayer.play();
                                 
                                 // 为 confused 和 hurry 视频设置新的结束事件
                                 videoPlayer.onended = function() {
                                     // 直接播放 story1-4
                                     videoPlayer.src = locationVideos.next;
                                     videoPlayer.load();
                                     videoPlayer.play();
                                     
                                     // 为 story1-4 设置新的结束事件
                                     videoPlayer.onended = function() {
                                         this.currentTime = this.duration - 0.1;
                                         // 更新信息页内容为三个新按钮
                                         const infoContent = document.querySelector('.info-content');
                                         infoContent.innerHTML = `
                                             <div class="location-buttons">
                                                 <button class="location-btn" data-location="who">Who is she？</button>
                                                 <button class="location-btn" data-location="why">Why would she know？</button>
                                                 <button class="location-btn" data-location="go">You have to go</button>
                                             </div>
                                         `;
                                         
                                         // 重新绑定新按钮的事件
                                         const newButtons = document.querySelectorAll('.location-btn');
                                         newButtons.forEach(btn => {
                                             btn.addEventListener('click', function() {
                                                 const newLocation = this.getAttribute('data-location');
                                                 const videoSrc = locationVideos[newLocation];
                                                 
                                                 if (videoSrc) {
                                                     storyInfo.classList.remove('active');
                                                     videoPlayer.src = videoSrc;
                                                     videoPlayer.load();
                                                     videoPlayer.play();
                                                 }
                                             });
                                         });
                                         
                                         // 显示信息页
                                         setTimeout(() => {
                                             storyInfo.classList.add('active');
                                         }, 1000);
                                     };
                                 };
                             }
                         });
                     });
                     
                     // 显示信息页
                     setTimeout(() => {
                         storyInfo.classList.add('active');
                     }, 1000);
                 }
             };
         }
     });
 });

 // 关闭视频
 closeVideo.addEventListener('click', function () {
     videoPlayer.pause();
     videoContainer.classList.remove('active');
     storyInfo.classList.remove('active'); // 确保关闭时也隐藏信息页
 });

 // 监听Esc键关闭视频
 document.addEventListener('keydown', function (e) {
     if (e.key === 'Escape' && videoContainer.classList.contains('active')) {
         videoPlayer.pause();
         videoContainer.classList.remove('active');
         storyInfo.classList.remove('active'); // 确保关闭时也隐藏信息页
     }
 });

 // 添加视频播放器属性设置
 videoPlayer.loop = false;  // 确保视频不会循环播放