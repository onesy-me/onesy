import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewSidebar = (props: IIcon) => {

  return (
    <Icon
      name='ViewSidebar'

      short_name='ViewSidebar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm540-453h100v-107H700v107Zm0 186h100v-106H700v106ZM160-240h460v-480H160v480Zm540 0h100v-107H700v107Z"/>
    </Icon>
  );
};

IconMaterialViewSidebar.displayName = 'OnesyIconMaterialViewSidebar';

export default IconMaterialViewSidebar;
