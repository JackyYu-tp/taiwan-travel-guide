<template lang="pug">
.hot-container
  SubForm(
    :type="type",
    :county="county",
    :keyword="keyword",
    @type="handleInput",
    @county="handleInput",
    @keyword="handleInput"
  )
  PopularCity
  LargeCardList.activity-list(title="熱門活動", :list="activityList")
  SmallCardList.activity-list(title="熱門餐飲", :list="activityList")
</template>

<script>
import PopularCity from "@/components/PopularCity.vue"
import LargeCardList from "@/components/LargeCardList.vue"
import SmallCardList from "@/components/SmallCardList.vue"
export default {
  name: "PopularActivity",
  components: {
    SubForm: () => import("@/components/SubForm"),
    PopularCity,
    LargeCardList,
    SmallCardList
  },
  data() {
    return {
      type: "",
      county: "",
      keyword: "",
      activityList: [
        {
          ID: "C2_315080000H_080485",
          Name: "2021日月潭萬人泳渡",
          Description:
            "起始於1983年的日月潭國際萬人泳渡活動，每年中秋節前後舉辦，是日月潭最具歷史與規模的活動，2002年正式列入世界游泳名人堂。泳渡全程約3,000公尺，每年均吸引來自海內外四面八方上萬名游泳愛好者參加，幾乎在開放報名即迅速額滿的「日月潭萬人泳渡」嘉年華盛事，場面盛況空前。",
          Location: "南投縣 魚池鄉",
          Address: "朝霧碼頭→伊達邵碼頭",
          Organizer: "南投縣政府、中華民國成人游泳協會、埔里鎮四季早泳會",
          StartTime: "2021-09-01T00:00:00+08:00",
          EndTime: "2021-09-30T00:00:00+08:00",
          Cycle: "2021年暫停辦理",
          WebsiteUrl: "https://www.pulifourswim.tw/tw/index.php",
          Picture: {
            PictureUrl1:
              "https://www.taiwan.net.tw/att/event/50882fb8-6e13-49dc-8d8a-f7b83de20fe3.jpg",
            PictureDescription1: "泳渡風光",
            PictureUrl2:
              "https://www.taiwan.net.tw/att/event/f8b6900b-a103-492c-be07-6522e3817850.jpg",
            PictureDescription2: "熱血出航",
            PictureUrl3:
              "https://www.taiwan.net.tw/att/event/78ca48b0-97e5-47ad-a9fd-b0d410603c84.jpg",
            PictureDescription3: "泳往直前"
          },
          Position: {
            PositionLon: 120.91616821289062,
            PositionLat: 23.867746353149414,
            GeoHash: "wsjzz8brw"
          },
          Class1: "節慶活動",
          Class2: "藝文活動",
          City: "南投縣",
          SrcUpdateTime: "2021-11-11T01:12:57+08:00",
          UpdateTime: "2021-11-11T02:10:14+08:00"
        },
        {
          ID: "C2_315080000H_080485",
          Name: "2021日月潭萬人泳渡",
          Description:
            "起始於1983年的日月潭國際萬人泳渡活動，每年中秋節前後舉辦，是日月潭最具歷史與規模的活動，2002年正式列入世界游泳名人堂。泳渡全程約3,000公尺，每年均吸引來自海內外四面八方上萬名游泳愛好者參加，幾乎在開放報名即迅速額滿的「日月潭萬人泳渡」嘉年華盛事，場面盛況空前。",
          Location: "南投縣 魚池鄉",
          Address: "朝霧碼頭→伊達邵碼頭",
          Organizer: "南投縣政府、中華民國成人游泳協會、埔里鎮四季早泳會",
          StartTime: "2021-09-01T00:00:00+08:00",
          EndTime: "2021-09-30T00:00:00+08:00",
          Cycle: "2021年暫停辦理",
          WebsiteUrl: "https://www.pulifourswim.tw/tw/index.php",
          Picture: {
            PictureUrl1:
              "https://www.taiwan.net.tw/att/event/50882fb8-6e13-49dc-8d8a-f7b83de20fe3.jpg",
            PictureDescription1: "泳渡風光",
            PictureUrl2:
              "https://www.taiwan.net.tw/att/event/f8b6900b-a103-492c-be07-6522e3817850.jpg",
            PictureDescription2: "熱血出航",
            PictureUrl3:
              "https://www.taiwan.net.tw/att/event/78ca48b0-97e5-47ad-a9fd-b0d410603c84.jpg",
            PictureDescription3: "泳往直前"
          },
          Position: {
            PositionLon: 120.91616821289062,
            PositionLat: 23.867746353149414,
            GeoHash: "wsjzz8brw"
          },
          Class1: "節慶活動",
          Class2: "藝文活動",
          City: "南投縣",
          SrcUpdateTime: "2021-11-11T01:12:57+08:00",
          UpdateTime: "2021-11-11T02:10:14+08:00"
        }
      ]
    }
  },
  methods: {
    handleInput({ event, value }) {
      this[event] = value
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.hot-container
  padding: 43px 16px 40px
  margin: 0 auto
  max-width: 1280px
  .activity-list
    margin-top: 40px
+rwdMin(768px)
  .hot-container
    padding: 41px 65px 55px
    .activity-list
      margin-top: 46px
+rwdMin(1280px)
  .hot-container
    padding: 90px 109px 85px
    .activity-list
      margin-top: 46px
</style>
