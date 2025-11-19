import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoReadPause = (props: IIcon) => {

  return (
    <Icon
      name='AutoReadPause'

      short_name='AutoReadPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-400h80v-320h-80v320Zm160 0h80v-320h-80v320ZM80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialAutoReadPause.displayName = 'OnesyIconMaterialAutoReadPause';

export default IconMaterialAutoReadPause;
