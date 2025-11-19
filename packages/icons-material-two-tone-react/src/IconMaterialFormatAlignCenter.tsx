import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatAlignCenter = (props: IIcon) => {

  return (
    <Icon
      name='FormatAlignCenter'

      short_name='FormatAlignCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v2H3zm4 12h10v2H7zm0-8h10v2H7zm-4 4h18v2H3zm0 8h18v2H3z"/>
    </Icon>
  );
};

IconMaterialFormatAlignCenter.displayName = 'OnesyIconMaterialFormatAlignCenter';

export default IconMaterialFormatAlignCenter;
