import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoReadPlay = (props: IIcon) => {

  return (
    <Icon
      name='AutoReadPlay'

      short_name='AutoReadPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m400-400 240-160-240-160v320ZM80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialAutoReadPlay.displayName = 'OnesyIconMaterialAutoReadPlay';

export default IconMaterialAutoReadPlay;
