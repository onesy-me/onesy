import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalShades = (props: IIcon) => {

  return (
    <Icon
      name='VerticalShades'

      short_name='VerticalShades'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-80h80v-640h640v640h80v80H80Zm160-80h80v-560h-80v560Zm160 0h160v-560H400v560Zm240 0h80v-560h-80v560Zm-400 0v-560 560Zm480 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialVerticalShades.displayName = 'OnesyIconMaterialVerticalShades';

export default IconMaterialVerticalShades;
