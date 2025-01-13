import {
  Field, Form, Model, Search, Table,
} from '@/airpower/decorator'
import { BaseEntity } from '@/base/BaseEntity'
import { MenuEntity } from '@/model/system/menu/MenuEntity'
import { PermissionEntity } from '@/model/system/permission/PermissionEntity'

/**
 * # 角色
 * @author Hamm.cn
 */
@Model({
  label: '角色',
})
export class RoleEntity extends BaseEntity {
  /**
   * ### 角色名称
   */
  @Table({
    forceShow: true,
  })
  @Search()
  @Form({
    requiredString: true,
  })
  @Field({
    label: '角色名称',
  })
    name!: string

  /**
   * ### 菜单列表
   */
  @Field({
    type: MenuEntity,
    array: true,
  })
    menuList!: MenuEntity[]

  /**
   * ### 权限列表
   */
  @Field({
    type: PermissionEntity,
    array: true,
  })
    permissionList!: PermissionEntity[]

  @Table({
    removed: false,
  })
  declare isDisabled: boolean
}