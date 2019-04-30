import FREE_PLAY_CODE from '@a/img/free-play-code-new.jpg'
import FREE_RECEIVE_TIP from '@a/img/free_receive_tip.png'
import PREFERENTIAL_STEP_BANNER from '@a/img/preferential_step_banner.png'
import COURSE from '@a/img/course.png'
import LONG_PRESS_BTN from '@a/img/long_press_btn.png'
import COIN from '@a/img/coin.png'
import SCAN from '@a/img/scan.png'
import RECEIVE_TUTORIAL_BTN from '@a/img/receive_tutorial_btn.png'
import KNOW_BTN from '@a/img/know_btn.png'
import COIN_OPERATED_BTN from '@a/img/coin_operated_btn.png'
import ROB_COIN_BTN from '@a/img/rob_coin_btn.png'
import NO_REWARD from '@a/img/no_reward.png'
import CRICLE_PROGRESS_LEFT from '@a/img/cricle-progress-left.png'
import CRICLE_PROGRESS_RIGHT from '@a/img/cricle-progress-right.png'
import NINE_NINE from '@a/img/nine_nine.png'
let { freePlayCode,
  freeReceiveTip,
  preferentialStepBanner,
  course,
  longPressBtn,
  coin,
  scan,
  receiveTutorialBtn,
  knowBtn,
  coinOperatedBtn,
  robCoinBtn,
  noReward,
  cricleProgressLeft,
  cricleProgressRight,
  nineNine
} = {}
if (process.env.NODE_ENV === 'production') {
  const cdnUrl = 'http://stat.i3020.com/free-play/src/assets/img/'
  freePlayCode = `${cdnUrl}free-play-code-new.jpg?v=20190430`
  freeReceiveTip = `${cdnUrl}free_receive_tip.png?v=20190430`
  preferentialStepBanner = `${cdnUrl}preferential_step_banner.png?v=20190430`
  course = `${cdnUrl}course.png?v=20190430`
  longPressBtn = `${cdnUrl}long_press_btn.png?v=20190430`
  coin = `${cdnUrl}coin.png?v=20190430`
  scan = `${cdnUrl}scan.png?v=20190430`
  receiveTutorialBtn = `${cdnUrl}receive_tutorial_btn.png?v=20190430`
  knowBtn = `${cdnUrl}know_btn.png?v=20190430`
  robCoinBtn = `${cdnUrl}rob_coin_btn.png?v=20190430`
  coinOperatedBtn = `${cdnUrl}coin_operated_btn.png?v=20190430`
  noReward = `${cdnUrl}no_reward.png?v=20190430`
  cricleProgressLeft = `${cdnUrl}cricle-progress-left.png?v=20190430`
  cricleProgressRight = `${cdnUrl}cricle-progress-right.png?v=20190430`
  nineNine = `${cdnUrl}nine_nine.png?v=20190430`
} else {
  freePlayCode = FREE_PLAY_CODE
  freeReceiveTip = FREE_RECEIVE_TIP
  preferentialStepBanner = PREFERENTIAL_STEP_BANNER
  course = COURSE
  longPressBtn = LONG_PRESS_BTN
  coin = COIN
  scan = SCAN
  receiveTutorialBtn = RECEIVE_TUTORIAL_BTN
  robCoinBtn = ROB_COIN_BTN
  knowBtn = KNOW_BTN
  coinOperatedBtn = COIN_OPERATED_BTN
  noReward = NO_REWARD
  cricleProgressLeft = CRICLE_PROGRESS_LEFT
  cricleProgressRight = CRICLE_PROGRESS_RIGHT
  nineNine = NINE_NINE
}
export {
  freePlayCode,
  freeReceiveTip,
  preferentialStepBanner,
  course,
  longPressBtn,
  coin, // 余币
  scan, // 扫一扫按钮
  receiveTutorialBtn, // 领取教程按钮
  knowBtn, // 知道了按钮
  coinOperatedBtn, // 投币按钮
  robCoinBtn, // 教你抢币按钮
  noReward, // 领完了
  cricleProgressLeft, // 环形进度条左半圈
  cricleProgressRight, // 环形进度条右半圈
  nineNine // 99
}
