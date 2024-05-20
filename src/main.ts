import { app } from '@/airpower'
import { AirConfig } from '@/airpower/config/AirConfig'
import { AirI18n } from '@/airpower/helper/AirI18n'
import { ChineseSimplified } from '@/config/i18n/ChineseSimplified'
import { English } from '@/config/i18n/English'

import { createRoutes } from '@/config/routes'
import '@/assets/css/main.scss'
import { AppConfig } from '@/config/AppConfig'
import { UserEntity } from '@/model/user/UserEntity'

AirI18n.init(ChineseSimplified, English)

app.use(AirConfig.createRouter(createRoutes())).mount('#app')

setTimeout(() => {
  const user = new UserEntity()
  user.nickname = 'Hamm'
  user.email = 'admin@hamm.cn'
  AppConfig.currentUser.value = user
}, 5000)
