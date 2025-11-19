import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageAspectRatio = (props: IIcon) => {

  return (
    <Icon
      name='ImageAspectRatio'

      short_name='ImageAspectRatio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-480h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialImageAspectRatio.displayName = 'OnesyIconMaterialImageAspectRatio';

export default IconMaterialImageAspectRatio;
