import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAspectRatioFilled = (props: IIcon) => {

  return (
    <Icon
      name='AspectRatioFilled'

      short_name='AspectRatio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-280h200v-200h-80v120H560v80ZM200-480h80v-120h120v-80H200v200ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialAspectRatioFilled.displayName = 'OnesyIconMaterialAspectRatioFilled';

export default IconMaterialAspectRatioFilled;
