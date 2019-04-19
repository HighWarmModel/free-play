import FREE_PLAY_CODE from '@a/img/free-play-code.jpg'
import FREE_RECEIVE_TIP from '@a/img/free_receive_tip.png'
import PREFERENTIAL_STEP_BANNER from '@a/img/preferential_step_banner.png'
import COURSE from '@a/img/course.png'
import LONG_PRESS_BTN from '@a/img/long_press_btn.png'
import COIN from '@a/img/coin.png'
import SCAN from '@a/img/scan.png'
import RECEIVE_TUTORIAL_BTN from '@a/img/receive_tutorial_btn.png'
import KNOW_BTN from '@a/img/know_btn.png'
import COIN_OPERATED_BTN from '@a/img/coin_operated_btn.png'
import NO_REWARD from '@a/img/no_reward.png'
import CRICLE_PROGRESS_LEFT from '@a/img/cricle-progress-left.png'
import CRICLE_PROGRESS_RIGHT from '@a/img/cricle-progress-right.png'
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
  noReward,
  cricleProgressLeft,
  cricleProgressRight
} = {}
if (process.env.NODE_ENV === 'production') {
  freePlayCode = 'http://stat.i3020.com/free-play/src/assets/img/free-play-code.jpg'
  freeReceiveTip = 'http://stat.i3020.com/free-play/src/assets/img/free_receive_tip.png'
  preferentialStepBanner = 'http://stat.i3020.com/free-play/src/assets/img/preferential_step_banner.png'
  course = 'http://stat.i3020.com/free-play/src/assets/img/course.png'
  longPressBtn = 'http://stat.i3020.com/free-play/src/assets/img/long_press_btn.png'
  coin = 'http://stat.i3020.com/free-play/src/assets/img/coin.png'
  scan = 'http://stat.i3020.com/free-play/src/assets/img/scan.png'
  receiveTutorialBtn = 'http://stat.i3020.com/free-play/src/assets/img/receive_tutorial_btn.png'
  knowBtn = 'http://stat.i3020.com/free-play/src/assets/img/know_btn.png'
  coinOperatedBtn = 'http://stat.i3020.com/free-play/src/assets/img/coin_operated_btn.png'
  noReward = 'http://stat.i3020.com/free-play/src/assets/img/no_reward.png'
  cricleProgressLeft = 'http://stat.i3020.com/free-play/src/assets/img/cricle-progress-left.png'
  cricleProgressRight = 'http://stat.i3020.com/free-play/src/assets/img/cricle-progress-right.png'
} else {
  freePlayCode = FREE_PLAY_CODE
  freeReceiveTip = FREE_RECEIVE_TIP
  preferentialStepBanner = PREFERENTIAL_STEP_BANNER
  course = COURSE
  longPressBtn = LONG_PRESS_BTN
  coin = COIN
  scan = SCAN
  receiveTutorialBtn = RECEIVE_TUTORIAL_BTN
  knowBtn = KNOW_BTN
  coinOperatedBtn = COIN_OPERATED_BTN
  noReward = NO_REWARD
  cricleProgressLeft = CRICLE_PROGRESS_LEFT
  cricleProgressRight = CRICLE_PROGRESS_RIGHT
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
  noReward, // 领完了
  cricleProgressLeft, // 环形进度条左半圈
  cricleProgressRight // 环形进度条右半圈
}
