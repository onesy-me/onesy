import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTheaters = (props: IIcon) => {

  return (
    <Icon
      name='Theaters'

      short_name='Theaters'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-720h80v80h80v-80h320v80h80v-80h80v720h-80v-80h-80v80H320v-80h-80v80h-80Zm80-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm400 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80ZM400-200h160v-560H400v560Zm0-560h160-160Z"/>
    </Icon>
  );
};

IconMaterialTheaters.displayName = 'OnesyIconMaterialTheaters';

export default IconMaterialTheaters;
