import { AbstractBaseService } from '@/base/AbstractBaseService'
import { MenuEntity } from './MenuEntity'

/**
 * # 权限接口服务
 * @author Hamm
 */
export class MenuService extends AbstractBaseService<MenuEntity> {
  baseUrl = 'menu'

  entityClass = MenuEntity
}
