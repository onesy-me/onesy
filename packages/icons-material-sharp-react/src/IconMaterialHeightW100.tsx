import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeightW100 = (props: IIcon) => {

  return (
    <Icon
      name='HeightW100'

      short_name='Height'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-172 356-295l19-19 90 88v-509l-89 89-19-19 123-123 123 123-20 20-90-89v508l90-88 19 19-123 123Z"/>
    </Icon>
  );
};

IconMaterialHeightW100.displayName = 'OnesyIconMaterialHeightW100';

export default IconMaterialHeightW100;
