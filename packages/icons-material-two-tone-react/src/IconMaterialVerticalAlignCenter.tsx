import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalAlignCenter = (props: IIcon) => {

  return (
    <Icon
      name='VerticalAlignCenter'

      short_name='VerticalAlignCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 1v4H8l4 4 4-4h-3V1zM4 11h16v2H4zm4 8h3v4h2v-4h3l-4-4z"/>
    </Icon>
  );
};

IconMaterialVerticalAlignCenter.displayName = 'OnesyIconMaterialVerticalAlignCenter';

export default IconMaterialVerticalAlignCenter;
