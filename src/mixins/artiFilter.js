export const artiFilter = {
  data: () => ({
    artiFilterList: [
      'Yunus',
      'Yusuf',
      'Hud',
      'Ibrahim',
      'Nuh',
    ]
  }),
  methods: {
    artiSurah(value) {
      let newValue
      if(this.artiFilterList.includes(value)){
        newValue = `Nabi ${value}`
        return newValue
      }else{
        return value
      }
    }
  }
}