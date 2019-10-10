<template lang="html">
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>{{ score }}점 </div>
  </div>
</template>

<script>
const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};
const scores = {
  가위: 1,
  바위: 0,
  보: -1,
}
const cpuChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function(v) {
    console.log(v[1], imgCoord);
    return v[1] === imgCoord;
  })[0];

}
let interval = null;
export default {
  data() {
    return {
      imgCoord: rspCoords.바위,
      result: '',
      score: 0,
    }
  },
  methods: {
    onClickButton(choice) {
      clearInterval(interval);
      const myScore = scores[choice];
      const cpuScore = scores[cpuChoice(this.imgCoord)];
      const diff = myScore - cpuScore;
      console.log(myScore, cpuScore);
      if(diff === 0) {
        this.result = '비겼습니다.'

      }else if([-1, 2].includes(diff)) {
        this.result = '이겼습니다';
        this.score += 1;
      }else {
        this.result = '졌습니다';
        this.score -= 1;
      }
    }

  },
  computed: {
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
      }
    },
  },
  mounted() {
    interval = setInterval(() => {
      if(this.imgCoord === rspCoords.바위){
        this.imgCoord = rspCoords.가위
      }else if(this.imgCoord === rspCoords.가위){
        this.imgCoord = rspCoords.보
      }else if(this.imgCoord === rspCoords.보){
        this.imgCoord = rspCoords.바위
      }
    }, 100);
  },
  beforeDestroy() {
    clearInterval(interval);
  }
}
</script>

<style lang="css" scoped>
 #computer { width:142px; height:220px;}
</style>
