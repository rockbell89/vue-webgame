<template lang="html">
  <div>
    <h1>{{result}}</h1>
    <form action="" @submit.prevent="onSubmitForm">
      <input type="text" ref="answer" minlength="4
      " maxlength="4" v-model="value">
      <button type="type">입력</button>
    </form>
    <p>정답: {{answer}}</p>
    <p>시도: {{tries.length}}</p>
    <ul>
      <li v-for="item in tries">
        <p>{{item}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
const getNumbers = () => {
  const candidates = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for(let i = 0; i < 4; i++){
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    console.log(chosen);
    array.push(chosen);
  }
  return array;
};

export default {
  data() {
    return {
      answer: getNumbers(),
      tries: [],
      value: '',
      result: ''
    }
  },
  methods: {
    onSubmitForm(e) {
      console.log(this.answer.join(''), this.value);
      if(this.answer.join('') === this.value){
        this.tries.push({
          try: this.value,
          result: '홈런'
        });
        this.result = '홈런 !';
        this.value ='';
        this.$refs.answer.focus();
        this.answer = getNumbers();
      }else{
        if(this.tries.length >= 9){
          this.result = '패배 !';
          alert('게임을 다시 시작하세요.');
          this.answer = getNumbers();
        }else{
          var strikes =0;
          var ball = 0;
          var answerArray = this.value.split('').map(v => parseInt(v));
          console.log('answerArray: ' , answerArray);
          for(let i =0; i <4; i++){
            if(this.answer[i] === answerArray[i]){
              // strikes 숫자 + 자릿수
              strikes++;
            }else if(this.answer.includes(answerArray[i])){
              // ball 숫자
              ball ++;
            }
          }
          this.tries.push({
            try: this.value,
            result: `${strikes} 스트라이크 ${ball} 볼 입니다.`
          });
        }
        this.value ='';
        this.$refs.answer.focus();



      }


      this.$refs.answer.focus();
    }
  }
}
</script>

<style lang="css" scoped>
</style>
