import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGridViewFilled = (props: IIcon) => {

  return (
    <Icon
      name='GridViewFilled'

      short_name='GridView'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520Z"/>
    </Icon>
  );
};

IconMaterialGridViewFilled.displayName = 'OnesyIconMaterialGridViewFilled';

export default IconMaterialGridViewFilled;
