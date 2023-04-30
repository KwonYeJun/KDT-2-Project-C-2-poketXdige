import tagMaker from '../../src/models/tag/tagMaker.js'

const socket = io.connect('http://127.0.0.1:2080', {
  path: '/socket.io'
  // transports:['websocket']
  // 처음부터 ws 로 통신할거면 쓰고 안쓰면 폴링연결 먼저 시도
})

const form = tagMaker('form', document.body);
const textbox = tagMaker('div', form, {
  style: 'width: 300px; height:400px; display:flex; flex-direction: column; align-items:flex-end; '
})
const inputtext = tagMaker('input', form, {
  type: 'text',
  name: 'text'
})
tagMaker('input', form, {
  type: 'submit',
  value: 'send'
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (form.text.value !== undefined) {
    tagMaker('p', textbox, { innerText: form.text.value });
    inputtext.value=''
  } else {
    window.alert('뭐든 입력하세요.')
  }
})
