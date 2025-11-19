import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAspectRatio = (props: IIcon) => {

  return (
    <Icon
      name='AspectRatio'

      short_name='AspectRatio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-280h200v-200h-80v120H560v80ZM200-480h80v-120h120v-80H200v200ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialAspectRatio.displayName = 'OnesyIconMaterialAspectRatio';

export default IconMaterialAspectRatio;
