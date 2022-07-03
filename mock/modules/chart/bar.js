const barTitle = {
  text: "城市对比图",
  show: true
}

export default {
  getBar() {
    return {
      code: 1,
      data: {
        title: barTitle
      },
      msg: 'A bar data from mock'
    }
  }
}