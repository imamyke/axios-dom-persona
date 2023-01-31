const refreshInfo = () => {
  axios.get('https://webdev.alphacamp.io/api/v1/users/random/')
  .then((res) => {
    // 將要顯示在 profile 的資訊集中存成一個 array
    const personInfoAll = res.data.results[0]
    const showInfo = [
      personInfoAll.gender,
      personInfoAll.age,
      personInfoAll.birthday,
      personInfoAll.region,
      personInfoAll.email
    ]

    // 把每個 info 放進一個array
    const infoList = document.querySelectorAll('.info')
    
    // 將 showInfo 的資訊放到 infoList
    infoList.forEach((info, index) => {
      personListItem = showInfo.find((list, idx) => index === idx)
      info.innerText = personListItem
    })

    const avatar = document.querySelector('.avatar__group')
    avatar.innerHTML = `
    <div class="image__container">
        <div class="image" style="background-image: url('${personInfoAll.avatar}');"></div>
      </div> 
      <div class="avatar__name">${personInfoAll.name}</div>
    `
    })
    .catch((err) => {
      console.log(err);
    })
}

const refresh = document.querySelector('.refresh')
refresh.addEventListener('click', refreshInfo)
