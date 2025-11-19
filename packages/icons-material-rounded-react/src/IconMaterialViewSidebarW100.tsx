import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewSidebarW100 = (props: IIcon) => {

  return (
    <Icon
      name='ViewSidebarW100'

      short_name='ViewSidebar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm466-366h142v-110q0-14-9-23t-23-9H658v142Zm0 168h142v-140H658v140ZM192-240h438v-480H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm466 0h110q14 0 23-9t9-23v-110H658v142Z"/>
    </Icon>
  );
};

IconMaterialViewSidebarW100.displayName = 'OnesyIconMaterialViewSidebarW100';

export default IconMaterialViewSidebarW100;
