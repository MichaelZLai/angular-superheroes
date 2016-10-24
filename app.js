let superheroData = [
  { name: "Superman", phoneNum: "111-111-1111", affiliation: "DC", img_url:"http://vignette3.wikia.nocookie.net/marvel_dc/images/1/14/Superman_0002.jpg/revision/latest/scale-to-width-down/270?cb=20100419210629"},
  { name: "Batman", phoneNum: "222-222-2222", affiliation: "DC", img_url:"http://vignette4.wikia.nocookie.net/marvel_dc/images/3/33/Batman_002.jpg/revision/latest/scale-to-width-down/270?cb=20130412165015"},
  { name: "Wolverine", phoneNum: "333-333-3333", affiliation: "Marvel", img_url:"http://vignette2.wikia.nocookie.net/marveldatabase/images/1/17/Wolverine_Vol_6_2_Granov_Variant_Textless.jpg/revision/latest/scale-to-width-down/270?cb=20140103220500"},
  { name: "Green Lantern", phoneNum: "444-444-4444", affiliation: "DC", img_url:"http://vignette3.wikia.nocookie.net/marvel_dc/images/0/09/Hal_Jordan_024.jpg/revision/latest/scale-to-width-down/270?cb=20130718162147"},
  { name: "Cyclops", phoneNum: "555-555-5555", affiliation: "Marvel", img_url:"http://vignette1.wikia.nocookie.net/marveldatabase/images/e/e4/Cyclops_Vol_3_1_Land_Variant_Textless.jpg/revision/latest/scale-to-width-down/270?cb=20140411170310"},
  { name: "Jean Grey", phoneNum: "777-777-7777", affiliation: "Marvel", img_url:"http://static.comicvine.com/uploads/original/10/101073/1975083-grey.png"},
  { name: "Storm", phoneNum: "888-888-8888", affiliation: "Marvel", img_url:"http://vignette3.wikia.nocookie.net/marveldatabase/images/1/1a/Amazing_X-Men_Annual_Vol_2_1_Textless.jpg/revision/latest/scale-to-width-down/270?cb=20140319175504"},
  { name: "Iron Man", phoneNum: "999-999-9999", affiliation: "Marvel", img_url:"http://vignette2.wikia.nocookie.net/marveldatabase/images/c/cb/Invincible_Iron_Man_Vol_2_2_Textless.jpg/revision/latest/scale-to-width-down/270?cb=20150926012422"},
  { name: "Spiderman", phoneNum: "111-929-1231", affiliation: "Marvel", img_url:"http://vignette3.wikia.nocookie.net/marveldatabase/images/5/5f/Amazing_Spider-Man_Vol_4_1.6_Textless.jpg/revision/latest/scale-to-width-down/270?cb=20160322173450"},
  { name: "Captain America", phoneNum: "333-999-9999", affiliation: "Marvel", img_url:"http://vignette3.wikia.nocookie.net/marveldatabase/images/d/de/Captain_America_Steve_Rogers_Vol_1_1_Epting_Variant_Textless.jpg/revision/latest/scale-to-width-down/270?cb=20160215192850"},
  { name: "Batgirl", phoneNum: "322-444-3241", affiliation: "DC", img_url:"https://upload.wikimedia.org/wikipedia/en/d/df/Barbara_Gordon_Batgirl.jpg"},
  { name: "The Flash", phoneNum: "767-865-9999", affiliation: "DC", img_url:"http://vignette4.wikia.nocookie.net/theflash/images/1/1d/Kid_Flash_Bart_Allen-1.jpg/revision/latest/scale-to-width-down/260?cb=20101014234146"}
]


angular
  .module("superPhone", [])
  .controller("superCtrl", [superController])

    function superController(){
      this.superheroes = superheroData
      this.newHero = {}

      this.topImage = function(superhero){
        this.img_url = superhero.img_url
      }

      this.addHero = function(){
        let superhero = this.newHero
        this.superheroes.push(superhero)
        this.newHero = {}
      }



      }
