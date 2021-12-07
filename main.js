const app = Vue.createApp({
  data() {
    return{
      tabs: ['basic-info','favorites','epiphanies','creations'],
      tabEmoji: ['👤 📄','😌 ❤️','🤔 😯','🎨 🎤 🎧'],
      curTab: 'basic-info'
    }
  },
  methods: {
    switchTab(tab) {
      this.curTab=tab
      window.scrollTo(0, 0)
    }
  },
  template: `
    <component :is="curTab"></component>
    <div id="menu">
      <button
	v-for="(tab, i) in tabs"
	@click="switchTab(tab)"
	:class="{activeBtn: curTab===tab}">
	  {{tabEmoji[i]}}<br>{{tab}}
      </button>
    </div>
  `
})

app.component('basic-info', {
  data() {
    return {
      info: {
	Name: 'Abhishek Almeida',
	DOB: '28-09-1999 (21)',
	Religion: 'Christianity',
	MBTI: 'INFP (aka clown)',
	Location: 'Ballarpur, India',
	Email: 'abhishekalmeida_AT_protonmail_DOT_com',
	Telegram: 'abhishekalmeida',
	GitHub: 'https://github.com/abhishek-almeida/'
      },
      bioText: `Hello there, I'm Abhishek, a 21 year old Computer Science student from a small town in India. I'm always pretty curious about the nature of things and I enjoy having philosophical talks. Anything that implies imagination attracts me!<br><br>
      I’m a free software enthusiast (as per Free Software Foundation definition of “free”). I devote most of my time to learning software development, hacking around my computer (breaking it/fixing it) and exploring different kinds of music. I use a minimal Artix Linux + dwm system which runs considerably fast on my ancient computer LOL<br><br>
      I come from a family of teachers and it's always a nice feeling when I can help someone grasp certain concept. I believe we all learn and grow through encounters with other people. My natural inclination is to help those who seek honest help.<br><br>
      I have a huge passion for singing and although I'm not good at it, it's something that I enjoy the most. If you have any good music to share, then please do!
      You can write to me at my email/telegram. I'm not on any of those spooky yet wildly popular, brain damaging social media. So I'll keep updating this site with stuff I wish to share. The source code is available on my GitHub. I haven't uploaded many projects there yet but I'll update that soon too.<br><br>
      Stuff that I'm currently learning/interested in- typing in dvorak, fullstack development, shell scripting, stoicism, scenic relaxtion videos <br><br>
      Thanks for reading!
      `
    }
  },
  template: `
    <div id="basic">
      <img id="selfie" src="./images/selfie.jpg" alt="Abhishek Almeida">
      <ul id="details">
	<template v-for="(value, key) in info">
	  <li v-if="key != 'GitHub'">
	    <strong>{{key}}:</strong> {{value}}
	  </li>
	  <li v-else>
	    <strong>{{key}}:</strong> <a :href="value" target="_blank">{{value}}</a>
	  </li>
	</template>
      </ul>
    </div>
    <p id="bio" v-html="bioText"></p>
  `
})

app.component('favorites', {
  data() {
    return {
      fav: {
	Music: ['Love Is Like A Dream - Dimash Kudaibergen/ Lara Fabian/ Alla Pugacheva', 'Infinity - Dream On, Dreamer', 'The Vengeful One - Disturbed', 'New Divide - Linkin Park', 'Sun Raha Hai Na Tu - Ankit Tiwari', 'Reason To Fight - Disturbed', 'Aur Ho - Mohit Chauhan', 'New Elysium - Celldweller', 'Legends Never Die - Pentakill (ft. Against The Current)', 'This Time It\'s Different - Evans Blue', 'Red Cold River - Breaking Benjamin', 'Isabella\'s Lullaby - The Promised Neverland'],
	Anime: ['Fullmetal Alchemist: Brotherhood', 'Naruto + Naruto: Shippuden', 'Hunter x Hunter'],
	Movies: ['Tron: Legacy', 'Maze Runner', 'I, Robot', 'Interstellar'],
	Books: ['The Invisible Man - H. G. Wells', '😐 Haven\'t read many, recommend me some cool Sci-Fi/Adventure books please!'],
	Quotes: [`"Innovators are the disruptors. Where others see conformity, innovators see the need for change. Most people are afraid of change and see those who are prompting change as being "unreasonable" because of their refusal to conform. Yet the future belongs to those who are willing to escape the norm and make things happen, even if it makes others uncomfortable." - A comment on some random YouTube video`,
	  `"What makes us in the image of God is our creative capacity, and the creative capacity is the ability to transform through an act of will- something that was not into something that is. Everything good has a purpose. What makes you a good person is your capacity to use rationality in the pursuit of virtue, and to transform the World around you in doing so." - Ben Shapiro`,
	  `"What's reality? I don't know. When my bird was looking at my computer monitor I thought "That bird has no idea what he's looking at." And yet what does the bird do? Does he panic? No, he can't really panic, he just does the best he can. Is he able to live in a world where he's so ignorant? Well, he doesn't realty have choice. The bird is okay even though he doesn't understand the world. You're that bird looking at the monitor, and you're thinking to yourself, I can figure this out. Maybe you have some bird ideas, Maybe that's the best you can do." - Terry A. Davis`,
	  `“Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain, because life's greatest lessons are learned through pain.” - Pain`,
	  `"Never date someone with a dark yellow pee. If they can't take care of themselves to hydrate, they certainly won't take care of you." - WikiHow Image Macros`,
	  `"stonks" - stonks guy`]
      }
    }
  },
  template: `
    <ul>
      <li v-for="(value, key) in fav">
	<strong>{{key}}:</strong><hr>
	<ul>
	  <li v-for="x in value">{{x}}</li>
	</ul>
	<br>
      </li>
    </ul>
  `

})

app.component('epiphanies', {
  data() {
    return {
      thoughts: {
	"Off-the-grid": `A few months back I deleted almost all of my social media accounts. Was sick and tired of being constantly spammed with unhealthy signals. Their recommendation systems are tuned for manipulative brain programming. Nihilism is just too mainstream + There's so much noise in my life already and it upsets me when I see idiots always crying and complaining, sowing seeds of discord and ruining other people's lives. More than anything I hate how I often felt unheard/unseen. I came to the conclusion that most people I know often tend to avoid conversations and since I dislike being a technological slave, I should quit all those nasty platforms. I've had success limiting my internet/media consumption and I'd like to keep it that way in the future.`,
	"Looking-back": `I'm pretty much a late bloomer and have missed out of many experiences in life. I've had some terrible failures and looking back, I feel proud considering how much I've grown. There are still lots of things I have to re-learn and much more to explore. I'm slow but as they say, if you can do it slowly, you can do it quickly 😂`,
	"Human-ego": `People will choose to remain blind even if the light is bright enough to resolve all the confusion darkness carries with it. Human ego is both- the best and the worst thing about humans. Tell warriors that their battles cannot be won and they'll fight till their last breath to prove you wrong and have you know that victory is theirs. Make a loser realise that he is responsible for his failures in life and he'll continue to lead a miserable life to prove you wrong. It's true what Itachi said- "Change is impossible in this fog of ignorance." There's no point trying to convince the blind (or the ones pretending to be blind) They'll continue to see folks on the other side as threats/enemies. I believe the solution to all our miseries is innovators taking the lead and teaching others by example.`,
	"Escape-from-decadence": `They'll tell you that when conditions are in your favor, and you don't see many threats, it is okay to sin for temporal pleasures. Even if you are drowning and suffocating in guilt, if you say that you don't regret your life choices, you'll look cool to them. I believe guilt and shame and regrets are necessary for personal growth. Well, if someone doesn't feel any of those emotions rememebering all the crimes they've committed against themselves, then they are just happy losers. It just so happens that the world celebrates happy losers, just like it celebrates sin, which also explains the decadent state of our societies. I have a strong moral fortitude and my ideals are important to me. Watching the rot grow rampant makes me wanna throw up in my mouth. I dislike being affected by this decadence. In my teenage years, I had childlike delusions about religion but I have grown in my understanding of God. I believe that the Bible describes the single and only uncreated God, who created the world and who created people, and what his plans are and how he wants us to live. I have found meaning in it and am on my way to escape from decadence.`,
	"Plans-for-the-future": `I wish to live a minimalistic lifestyle in the future, have a small family and travel a lot! These days I watch random 'Scenic Relaxation' videos in my leisure time and it fills my heart with so much wonder and childlike happiness. I'm not sure about what kind of work I wanna do cause I like every kind of computing 😂 I like learning about technologies that help me become less dependent on the "system", and more self-reliant, so it'll possibly be something about technological freedom and independence. Also I have this small stupid dream of becoming a professional musician 😂 Feel free to join my fan club in advance XD ` 
      }
    }
  },
  template: `
    <ul>
      <li v-for="(value, key) in thoughts">
	<strong>{{key}}:</strong><hr>
	<p>{{value}}</p>
	<br>
      </li>
    </ul>
  `
})

app.component('creations', {
  data() {
    return {
      itemRefs: [],
      stuff: [
	  {
	    name: "Sketches",
	    desc: "Tried learning to draw for about a week. Art demands discipline but I was too quick to give up LOL",
	    list: {
	      name: ['Hatake Kakashi','Tony Stark','Uchiha Itachi'],
	      src: []
	    },
	    format: {
	      path: './images/',
	      ext: '.jpg'
	    },
	  },
	  {
	    name: "Practice Recordings",
	    desc: "Some random practice recordings, the quality sucks but erm whatever ;-;",
	    list: {
	      name: ['The Vengeful One', 'Until It\'s Gone', 'Ho Teri Stuti Aur Aradhana', 'Why Not Me', 'Reason To Fight', 'Your Love Defends Me', 'Jo Bheji Thi Dua', 'Tumse Hi', 'On My Way', 'Zombie', 'No More Sorrow', 'Pacify', 'Jeena Jeena'],
	      src: []
	    },
	    format: {
	      path: './videos/',
	      ext: '.mp4'
	    },
	  },
	  {
	    name: "Music Tracks",
	    desc: "Music that I made using LMMS. Missing lyrics cause it's such a drag",
	    list: {
	      name: ['Frustrated Skull', 'The New Quest', 'Something Positive', 'Game Track'],
	      src: []
	    },
	    format: {
	      path: './audio/',
	      ext: '.mp3'
	    }
	  }
	]
      }
    },
  created() {
    this.stuff.forEach(x => {
      x.list.name.forEach(y => {
	x.list.src.push(x.format.path+y+x.format.ext)
      })
    })
  },
  methods: {
    playbackControl(y) {
      this.itemRefs.forEach(x => {
		if(x.getAttribute('src') !== y)
	  	x.pause()
	  	x.currentTime = 0
		console.log(typeof(x))
      })
    }
  },
  template: `
    <ul>
      <li v-for="x in stuff">
	<p><strong>{{x.name}}:</strong><br>{{x.desc}}</p><hr>
	<ul class="gallery">
	  <li v-for="(y, i) in x.list.src">
	    <div>
	      <img v-if="x.name==='Sketches'" :src="y">
	      <video
		    :ref="el => itemRefs.push(el)"
		    v-if="x.name==='Practice Recordings'"
		    :src="y" @play="playbackControl(y)" controls></video>
	      <audio
		    :ref="el => itemRefs.push(el)"
		    v-if="x.name==='Music Tracks'"
		    :src="y" @play="playbackControl(y)" controls></audio>
	      <br>
	      <strong>{{x.list.name[i]}}</strong>
	    </div>
	  </li>
	</ul>
      </li>
    </ul>
    <p>*use your device in landscape orientation if the playback controls aren't properly accessible</p>
  `
})

app.mount('#app')
