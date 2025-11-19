import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExclamation = (props: IIcon) => {

  return (
    <Icon
      name='Exclamation'

      short_name='Exclamation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-400v-360h80v360h-80Zm0 200v-80h80v80h-80Z"/>
    </Icon>
  );
};

IconMaterialExclamation.displayName = 'OnesyIconMaterialExclamation';

export default IconMaterialExclamation;
